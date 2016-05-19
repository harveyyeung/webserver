var Util = require('util');
var BaseDao= require('./basedao');

function ProductDao() {
    this.tableName = 'public.products';
}

Util.inherits(ProductDao, BaseDao);


/**
 * 查询所有状态为1的产品（正在销售中）
 *
 * @param client
 * @param callback
 */
ProductDao.prototype.queryProducts = function(client, callback) {
    var sql = 'select * from ' + this.tableName + ' where state=1';
    client.query(sql,callback);
}

/**
 * 插入产品信息
 *
 */
ProductDao.prototype.addProduct=function(product,client,callback){
   var sql='INSERT INTO public.products(name, categoryno, subclassno, price, pcount, activityid,' +
            'abstract, begintime, endtime, address, provinceno, cityno, inputtime, '+
            'state)'+
            'VALUES (\''+product.name+'\', '+product.categoryno+', '+product.subclassno+','+product.subclassno+','+product.price+', '+product.pcount+', '+product.activityid+', '+
            '\''+product.abstract+'\', to_timestamp('+ product.begintime+', \'YYYY-MM-DD HH24:MI:SS\'),to_timestamp('+ product.begintime+', \'YYYY-MM-DD HH24:MI:SS\'), \''+product.address+'\', '+product.provinceno+', '+product.cityno+',LOCALTIMESTAMP, 1)';

	 client.query(sql,callback);
}




module.exports = ProductDao;