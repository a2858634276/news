// 导包
const m_user = require('../models/m_user');

// 渲染登录页面
const showSignin = (req, res) => {
    res.render('signin.html');
};
// 登录的表单请求
const handleSignin = (req, res) => {
    // 1、获取请求体中的表单数据
    const body = req.body;

    // 调用 models 中 m_user模块 的验证邮箱的方法
    // 目的：获取数据库选中返回的结果 err data
    m_user.checkEmail(body.email, (err, data) => {
        if(err) {
            return res.send({
                code: 500,
                message: '服务器访问错误!'
            });
        }
        if(!data[0]) {
            return res.send({
                code: 1,
                message: '邮箱不存在,快去注册吧!'
            });
        }
        if(body.password !== data[0].password) {
            return res.send({
                code: 2,
                message: '密码错误请重新输入!'
            });
        }
        res.send({
            code: 200,
            message: '登录成功!'
        })
    });
}

// 导出
exports.showSignin = showSignin;
exports.handleSignin = handleSignin;