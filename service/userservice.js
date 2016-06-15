var dataPool=require('../util/dataPool');
var UserDao = require('../dao/userdao');

function UserService() {
  this.userDao=new UserDao();
}


/**
 * 添加用户
 *addUser
 * @param callback
 */
UserService.prototype.addUser = function(user,callback) {
    var userDao = this.userDao;
    dataPool.pool.acquire(function (err, client) {
        try {
            console.log('UserService.addUser');
            if (err) {
                console.trace('执行UserService.addUser. [pg.connect]' + err.message);
                dataPool.pool.release(client);;
                return;
            }

              
            userDao.addUser(user,client,function (err, result) {
                try {
                    if (err) {
                        console.trace('执行UserService.addUser. [userDao.addUser]               ' + err.message);
                        dataPool.pool.release(client);;
                    }
                    else {
                        dataPool.pool.release(client);;
                        callback(err, result);
                    }
                }catch(e) {
                    dataPool.pool.release(client);;
                    callback(e);
                }
            });
        }catch(e) {
            done();
            callback(e);
        }
    });
}



/**
 * 查询用户
 *queryUser
 * @param callback
 */
UserService.prototype.queryUser = function(phone,callback) {
    var userDao = this.userDao;
    dataPool.pool.acquire(function (err, client) {
        try {
            console.log('UserService.queryUser');
            if (err) {
                console.trace('执行UserService.queryUser. [pg.connect]' + err.message);
                dataPool.pool.release(client);;
                return;
            }

              
            userDao.queryUser(phone,client,function (err, result) {
                try {
                    if (err) {
                        console.trace('执行UserService.queryUser. [userDao.queryUser]               ' + err.message);
                        dataPool.pool.release(client);;
                    }
                    else {
                        dataPool.pool.release(client);;
                        callback(err, result);
                    }
                }catch(e) {
                    dataPool.pool.release(client);;
                    callback(e);
                }
            });
        }catch(e) {
            done();
            callback(e);
        }
    });
}


/**
 * 查询用户
 *queryUsers
 * @param callback
 */
UserService.prototype.queryUsers = function(callback) {
    var userDao = this.userDao;

    dataPool.pool.acquire(function (err, client) {
        try {
            if (err) {
                console.trace('执行UserService.queryUsers. [pg.connect]' + err.message);
  
                dataPool.pool.release(client);;

                return;
            }

               var sql = 'select * from user_t' ;

                client.query(sql,function (err, result) {
                try {
                    if (err) {
                        console.trace('执行UserService.queryUsers. [userDao.queryUsers]               ' + err.message);
                        dataPool.pool.release(client);;
                    }
                    else {
                        if(result.rows.length>0) {
                            dataPool.pool.release(client);;
                            callback(err, result.rows);
                        }
                        else {
                            dataPool.pool.release(client);;
                
                        }
                    }
                }catch(e) {
                    dataPool.pool.release(client);;
                    callback(e);
                }
            });
        }catch(e) {
            done();
            callback(e);
        }
    });
}

module.exports = UserService;