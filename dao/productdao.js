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
ProductDao.prototype.queryProducts = function(params,client, callback) { 
    
var sql = ' select p.*,pic.url,pic.position,cat.category_name as categoryname,sub.content  as subclassname,'+
           '(select count(1) from public.products where 1=1 ';
            if(params.sProductName!=null){
                sql+=' and name like \'%'+params.sProductName+'%\' ';   
            }
            if(params.sProductState!=null){
                sql+=' and state ='+params.sProductState;   
            }
            if(params.sProvinceno!=null){
                sql+=' and provinceno ='+params.sProvinceno;   
            }
         
            sql+= '  ) from public.products  p,'+
            'public.pictures pic,'+
            'public.CATEGORY cat,'+
            'public.SUBCLASS sub '+
            'where p.state=1 and pic.productid=p.id and p.categoryno=cat.id and p.subclassno=sub.id';
            
            if(params.sProductName!=null){
               sql+=' and p.name like \'%'+params.sProductName+'%\' ';   
            }
            if(params.sProductState!=null){
                sql+=' and p.state ='+params.sProductState;   
            }
            if(params.sProvinceno!=null){
                sql+=' and p.provinceno ='+params.sProvinceno;   
            }
           console.log(sql);
   // 'select p.*,pic.url,pic.position from ' + this.tableName + ' p, public.pictures pic where state=1 and pic.productid=p.id ';
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
            'VALUES (\''+product.name+'\', '+product.categoryno+', '+product.subclassno+','+product.price+', '+product.pcount+', '+product.activityid+', '+
            '\''+product.abstract+'\', to_timestamp(\''+ product.begintime+'\', \'YYYY-MM-DD HH24:MI:SS\'),to_timestamp(\''+ product.endtime+'\', \'YYYY-MM-DD HH24:MI:SS\'), \''+product.address+'\', '+product.provinceno+', '+product.cityno+',LOCALTIMESTAMP, 1)  returning id';

	 client.query(sql,callback);
}

/**
 * 插入产品信息
 *
 */
ProductDao.prototype.addProductImage=function(productImage,client,callback){
   var sql='INSERT INTO public.pictures(productid, url, position)'+
            'VALUES ('+productImage.productid+',\''+productImage.url+'\','+productImage.position+')';

	 client.query(sql,callback);
}


/**
 * 添加产品描述
 *
 */
ProductDao.prototype.addProductDescription=function(productDescription,client,callback){
   var sql='INSERT INTO public.pdescription(productid, content)'+
            'VALUES ('+productDescription.productid+',\''+productDescription.context+'\')';

	 client.query(sql,callback);
}



module.exports = ProductDao;