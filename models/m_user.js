// 作用: 控制器c_user.js中的数据库操作的部分

// 导包
const db = require('../loots/db_config');

// 导出 验证邮箱
exports.checkEmail = (email, callback) => {
    const sqlstr = 'SELECT * FROM users WHERE email= ?';
    db.query(sqlstr, email, (err, data) => {
        if(err) {
            return callback(err);
        }
        callback(null, data);
    });
};