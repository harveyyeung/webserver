var dataPool=require('../util/dataPool');
var ProductDao = require('../dao/productdao');

function ProductService() {
   this.productDao=new ProductDao();
}

/**
 * 查询产品
 *
 * @param callback
 */
ProductService.prototype.queryProducts = function(params,callback) {
    var productDao = this.productDao;

    dataPool.pool.acquire(function (err, client) {
        try {
              console.log('执行ProductService.queryProducts             ');
                   
            if (err) {
                console.trace('执行ProductService.queryProducts. [pg.connect]' + err.message);
  
                dataPool.pool.release(client);;

                return;
            }
            productDao.queryProducts(params,client,function (err, result) {
                try {
                    if (err) {
                        console.trace('执行ProductService.queryProducts. [userDao.queryUsers]               ' + err.message);
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

/**
 * 添加产品
 *
 * @param callback
 */
ProductService.prototype.addProduct= function(product,callback) {
    var productDao = this.productDao;

    dataPool.pool.acquire(function (err, client) {
        try {
            if (err) {
                console.trace('执行ProductService.queryProducts. [pg.connect]' + err.message);
  
                dataPool.pool.release(client);
                callback(err);
                return;
            }
            productDao.addProduct(product,client,function (err, result) {
                try {
                    if (err) {
                        console.trace('执行ProductService.addProducts' + err.message);
                        dataPool.pool.release(client);
                        callback(err);
                    }
                    else {
                       dataPool.pool.release(client);
                       callback(err, result);
                    }
                }catch(e) {
                    dataPool.pool.release(client);
                    callback(e);
                }
            });
        }catch(e) {
             dataPool.pool.release(client);
            callback(e);
        }
    });
}


/**
 * 添加产品封面图
 *
 * @param callback
 */
ProductService.prototype.addProductImage=function(productImage,callback){
    var productDao = this.productDao;
    dataPool.pool.acquire(function (err, client) {
        try {
            if (err) {
                console.trace('执行ProductService.addProductImage. [pg.connect]' + err.message);
                dataPool.pool.release(client);
                callback(err);
                return;
            }
            productDao.addProductImage(productImage,client,function (err, result) {
                try {
                    if (err) {
                        console.trace('执行ProductService.addProductImage' + err.message);
                        dataPool.pool.release(client);
                        callback(err);
                    }
                    else {
                       dataPool.pool.release(client);
                       callback(err, result);
                    }
                }catch(e) {
                    dataPool.pool.release(client);
                    callback(e);
                }
            });
        }catch(e) {
             dataPool.pool.release(client);
            callback(e);
        }
    });
}


/**
 * 添加产品描述
 *
 * @param callback
 */
ProductService.prototype.addProductDescription=function(productDescription,callback){
    var productDao = this.productDao;
    dataPool.pool.acquire(function (err, client) {
        try {
            if (err) {
                console.trace('执行ProductService.productDescription. [pg.connect]' + err.message);
                dataPool.pool.release(client);
                callback(err);
                return;
            }
            productDao.addProductDescription(productDescription,client,function (err, result) {
                try {
                    if (err) {
                        console.trace('执行ProductService.productDescription' + err.message);
                        dataPool.pool.release(client);
                        callback(err);
                    }
                    else {
                       dataPool.pool.release(client);
                       callback(err, result);
                    }
                }catch(e) {
                    dataPool.pool.release(client);
                    callback(e);
                }
            });
        }catch(e) {
             dataPool.pool.release(client);
            callback(e);
        }
    });
}









module.exports = ProductService;