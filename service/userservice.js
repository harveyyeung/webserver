var dataPool=require('../util/dataPool');


function UserService() {

   this.tableName = 'user';
}
/**
 * 查询用户
 *
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