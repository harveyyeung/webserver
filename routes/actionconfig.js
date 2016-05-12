/**
 * url访问配置
 *
 * @type {{}}
 */


 /**
 获取产品列表
 */
function queryProducts(req, res) {
    dataSourceAction.copy(req, res);
}

 /**
 获取产品详细信息
 */
function queryProduct(req, res) {
    dataSourceAction.copy(req, res);
}
var actionMapping={
  post:{
   

  },
  get:{
    '/harvey/v1/product/list':queryProducts,
    '/harvey/v1/product/query':queryProduct
  }



}


exports.actionMapping=actionMapping;