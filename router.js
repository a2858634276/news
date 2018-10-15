// 路由模块
// 目的: 监听请求找到每个请求的方法名
// 1、导包
const express = require('express');
const c_user = require('./controllers/c_user.js');
const c_topic = require('./controllers/c_topic');

// 2、router 获取对象 express.Router()
const router = express.Router();

// 3、router.get()
// 渲染登录页面的请求
router.get('/signin', c_user.showSignin)
// 监听登录的表单请求
      .post('/signin', c_user.handleSignin)
// 渲染话题列表页的请求
      .get('/', c_topic.showTopic)

// 4、导出router对象
module.exports = router;