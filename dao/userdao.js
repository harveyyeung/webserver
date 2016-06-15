var Util = require('util');
var BaseDao= require('./basedao');

function UserDao(){

}
Util.inherits(UserDao, BaseDao);

UserDao.prototype.queryUser=function(phone,client, callback) {
  var sql = 'select * from users where phone=\'' + phone+'\'';
  client.query(sql,callback);
}

UserDao.prototype.addUser=function(user,client, callback) {
  
  var sql='insert into users(name,phone,password)'+
  ' values(\''+user.username+'\',\''+user.phone+'\',\''+user.password+'\') returning id '
 // var sql = 'select * from users where phone=\'' + phone+'\'';
  client.query(sql,callback);
}

UserDao.prototype.queryUsers=function(phone,client, callback) {
  var sql = 'select * from users ';
  client.query(sql,callback);
}
module.exports=UserDao;