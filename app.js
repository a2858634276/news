// 程序入口文件

// 1、导包
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');

// 2、app对象
const app = express();

// 配置包
app.engine('html', require('express-art-template'));
app.use(bodyParser.urlencoded({ extended: false }));

// 配置静态资源文件夹
app.use('/public', express.static('./public'));
// 配置第三方资源文件夹
app.use('/node_modules', express.static('./node_modules'));

// 3、使用router包检测请求(注意要写在绑定端口的上面)
app.use(router);

// 4、绑定端口
app.listen('12345', () => {
    console.log('success ^_^ !!!');
});