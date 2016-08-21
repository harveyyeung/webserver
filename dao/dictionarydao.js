var Util = require('util');
var BaseDao= require('./basedao');

function DictionaryDao() {
    this.tableName = 'public.products';
   
}

Util.inherits(DictionaryDao, BaseDao);


/**
 * 查询省份
 *
 * @param client
 * @param callback
 */
DictionaryDao.prototype.queryProvice = function(client, callback) {
    var sql = 'select p.* from public.j_position_provice p';
    client.query(sql,callback);
}


/**
 * 根据省份查市
 *
 * @param client
 * @param callback
 */
DictionaryDao.prototype.queryCity = function(proviceId,client, callback) {
    var sql = 'select p.*  from public.j_position_city p where  p.province_id='+proviceId;
    client.query(sql,callback);
}
/**
 * 根据市份查县级市
 *
 * @param client
 * @param callback
 */
DictionaryDao.prototype.queryCounty = function(cityid,client, callback) {
    var sql = 'select p.*  from public.j_position_county p where  p.city_id='+cityid;
    client.query(sql,callback);
}


/**
 * 查询产品类型
 *
 * @param client
 * @param callback
 */
DictionaryDao.prototype.queryCategory = function(client, callback) {
    var sql = 'select p.*  from public.category p ';
    client.query(sql,callback);
}
/**
 * 根据父类查产品子类型
 *
 * @param client
 * @param callback
 */
DictionaryDao.prototype.querySubclass = function(categoryid,client, callback) {
    var sql = 'select p.*  from public.subclass p where  p.categoryid='+categoryid;
    client.query(sql,callback);
}


/**
 * 添加产品类型
 *
 * @param client
 * @param callback
 */
DictionaryDao.prototype.addCategory = function(category,client, callback) {
    var sql ='insert into public.category(category_name) values(\''+category.categoryname+'\') returning id'
    client.query(sql,callback);
}
/**
 * 添加产品子类型
 *
 * @param client
 * @param callback
 */
DictionaryDao.prototype.addSubclass = function(subclass,client, callback) {
    
      var sql ='insert into public.subclass(categoryid,content) values('+subclass.categoryno+',\''+subclass.subclassname+'\') returning id'
      client.query(sql,callback);
}

/**
 * 删除产品类型
 *
 * @param client
 * @param callback
 */
DictionaryDao.prototype.delCategory = function(category,client, callback) {
    var sql =' DELETE FROM  public.category where  id='+category.categoryno;
    client.query(sql,callback);
}
/**
 * 删除产品子类型
 *
 * @param client
 * @param callback
 */
DictionaryDao.prototype.delSubclass = function(subclass,client, callback) {
      var sql =' DELETE FROM  public.subclass where  id='+subclass.subclassno;
      client.query(sql,callback);
}


module.exports = DictionaryDao;