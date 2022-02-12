const express = require('express');
const jwt = require('jsonwebtoken');
const SHA256 = require("crypto-js/sha256");
const users = require('../schemas/userSchema');
const auth_middleware = require("../middlewares/auth-middleware");
const router = express.Router();


// 회원정보 입력, 저장
router.post('/register/save', async (req, res) => {
    let {user_id, user_nick, user_pwd, user_confirmpwd} = req.body;
    if (user_pwd !== user_confirmpwd) {
        res.status(400).send({
            errorMessage: '패스워드가 패스워드 확인란과 동일하지 않습니다.',
        });
        return;
    }

    user_pwd = SHA256(user_pwd).toString();
    console.log(user_pwd);

    const user = new users({user_id, user_nick, user_pwd});
    await user.save();

    res.status(201).send('회원가입에 성공했습니다.');
});

// 아이디, 닉네임 중복확인
router.get('/register/check', async (req, res) => {
    const {user_id, user_nick} = req.body;

    const existUsers = await users.find({
        $or: [{user_id}, {user_nick}],
    });
    if (existUsers.length) {
        res.status(400).send({
            errorMessage: "이미 가입된 이메일 또는 닉네임이 있습니다."
        });
        return;
    }
    
    res.send('이메일과 닉네임이 사용가능합니다.');
});

// 로그인
router.post('/login', async (req, res) => {
    let {user_id, user_pwd} = req.body;

    user_pwd = SHA256(user_pwd).toString();
    console.log(user_pwd);

    const user = await users.findOne({user_id, user_pwd}).exec();

    if (!user) {
        res.status(401).send({
            errorMessage: "이메일 또는 패스워드가 잘못됬습니다."
        });
        return;
    }

    const token = jwt.sign({userId: user.userId}, 'login-secret-key');
    res.send({
        token,
    });
});

router.get('/check_auth', auth_middleware, async (req, res) => {
    const {user} = res.locals;
    res.send({
        user: {
            user_id: user.user_id,
            user_nick: user.user_nick,
        },
    });
});


module.exports = router;