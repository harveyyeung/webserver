var Util = require('util');
var BaseDao= require('./basedao');

function UserDao(){

}
Util.inherits(UserDao, BaseDao);

UserDao.prototype.queryUser=function(phone,client, callback) {
  var sql = 'select * from user where phone=\'' + phone+'\'';
  client.query(sql,callback);
}

UserDao.prototype.addUser=function(user,client, callback) {
  var sql = 'select * from user where phone=\'' + phone+'\'';
  client.query(sql,callback);
}


module.exports=UserDao;