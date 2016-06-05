var BaseAction = require('./baseaction');
var Service = require('../service/productservice');
var Util = require('util');
function ProductAction() {
    this.productService = new Service();
}

Util.inherits(ProductAction, BaseAction);

ProductAction.prototype.queryProducts=function(req,res){
 try {
  var action = module.exports;
  this.productService.queryProducts(function (err, result) {
            try {
                if (err) {
                     console.trace('ProductAction.queryProducts. ' + err.message);
                     // 封装响应错误
                    makeResult(req, res, getFaltStateRsp(err));
                }
                else {
                    //封装响应结果
                    var resultRsp = {
                        products: result
                    };
                    //res.send(resultRsp);
                   makeResult(req, res, action.build(resultRsp));
                }
            }catch(err) {
                console.trace('执行ProductAction.queryProducts. ' + err.message);
              
                // 封装响应错误
                makeResult(req, res, getFaltStateRsp(err));
            }
        });
    } catch (err) {
        console.trace('执行ProductAction.queryProducts. ' + err.message);
          // 封装响应错误
        makeResult(req, res, getFaltStateRsp(err));
    }
}

ProductAction.prototype.addProductImage=function(req,res){
 try {
  var product = req.body;
  var action = module.exports;

    } catch (err) {
        console.trace('执行ProductAction.queryProducts. ' + err.message);
          // 封装响应错误
        makeResult(req, res, getFaltStateRsp(err));
    }
}

ProductAction.prototype.addProduct=function(req,res){
 try {
  var product = req.body;
  var action = module.exports;
  this.productService.queryProducts(product,function (err, result) {
            try {
                if (err) {
                     console.trace('ProductAction.queryProducts. ' + err.message);
                       // 封装响应错误
                    makeResult(req, res, getFaltStateRsp(err));
                }
                else {
                    //封装响应结果
                    var resultRsp = {
                    };
                   makeResult(req, res, action.build(resultRsp));
                }
            }catch(err) {
                console.trace('执行ProductAction.queryProducts. ' + err.message);
                // 封装响应错误
                makeResult(req, res, getFaltStateRsp(err));
   
            }
        });
    } catch (err) {
        console.trace('执行ProductAction.queryProducts. ' + err.message);
          // 封装响应错误
        makeResult(req, res, getFaltStateRsp(err));
    }
}

module.exports = new ProductAction();
