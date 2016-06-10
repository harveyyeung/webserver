var userAction = require('../action/useraction');
var productAction = require('../action/productaction');
var uploadfileAction = require('../action/uploadfileaction');
var dictionaryAction = require('../action/dictionaryaction');
/**
 * url访问配置
 *
 * @type {{}}
 */



 /**
 获取产品详细信息
 */
function queryProduct(req, res) {
    productAction.queryProduct(req, res);
}

 /**
 获取产品列表
 */

function queryProducts(req, res) {
    productAction.queryProducts(req, res);
}


function addProduct(req,res){
    productAction.addProduct(req,res);

}

function addProductImage(req,res){
    productAction.addProductImage(req,res);

}
function addDescription(req,res){
      productAction.addDescription(req,res);
}


function queryUsers(req,res){

     userAction.queryUsers(req,res);

}


function uploadImage(req,res){
     uploadfileAction.uploadImage(req,res);
}

// 省份查询

function queryProvice(req,res){

    dictionaryAction.queryProvice(req,res);

}
// 城市查询

function queryCity(req,res){

 dictionaryAction.queryCity(req,res);

}
// 县级市查询

function queryCounty(req,res){

 dictionaryAction.queryCounty(req,res);

}

function queryCategory(req,res){
  dictionaryAction.queryCategory(req,res);
}


function querySubclass(req,res){
  dictionaryAction.querySubclass(req,res);
}

var actionMapping={
  post:{
    '/harvey/v1/secret/product/add':addProduct,
    '/harvey/v1/secret/product/initfile':addProductImage,
    '/harvey/v1/secret/product/addDescription':addDescription,
    '/harvey/v1/secret/base/uploadfile':uploadImage
     
  },
  get:{
    '/harvey/v1/product/list':queryProducts,
    '/harvey/v1/product/query':queryProduct,
    '/harvey/v1/provice':queryProvice,
    '/harvey/v1/city':queryCity,
    '/harvey/v1/county':queryCounty,
    '/harvey/v1/categoryno':queryCategory,
    '/harvey/v1/subclassno':querySubclass,
    '/hello':function(req, res){
        res.send('hello word')
    },
     '/':function(req, res){
         res.send('hello ////')
      },
     '/user':queryUsers,
  }



}


exports.actionMapping=actionMapping;