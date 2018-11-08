//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
var register = require('./routes/register.js');
var app = express();
var server = app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
//使用路由器来管理路由
//把user路由器挂载到/user下
app.use('/register',register);

