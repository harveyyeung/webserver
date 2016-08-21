var BaseAction = require('./baseaction');
var Service = require('../service/dictionaryservice');
var Util = require('util');

function DictionaryAction() {
    this.DictionaryService = new Service();
}

Util.inherits(DictionaryAction, BaseAction);

DictionaryAction.prototype.queryProvice=function(req,res){
  var action = module.exports;

  this.DictionaryService.queryProvice(function(err, result) {

  try {
                if (err) {
                     console.trace('ProductAction.queryProvice. ' + err.message);
                       // 封装响应错误
                     makeResult(req, res, getFaltStateRsp(err));
                }
                else {
                        var resultRsp = {
                            list:result.rows
                        };
                        makeResult(req, res, action.build(resultRsp));
                }
            }catch(err) {
                console.trace('执行ProductAction.queryProvice. ' + err.message);
                // 封装响应错误
                makeResult(req, res, getFaltStateRsp(err));
   
            }


  });
}


DictionaryAction.prototype.queryCity=function(req,res){
 var action = module.exports;
 var proviceid=req.query.proviceid;
 this.DictionaryService.queryCity(proviceid,function(err, result) {

  try {
                if (err) {
                     console.trace('ProductAction.queryCity. ' + err.message);
                       // 封装响应错误
                     makeResult(req, res, getFaltStateRsp(err));
                }
                else {
                        var resultRsp = {
                             list:result.rows
                        };
                        makeResult(req, res, action.build(resultRsp));
                }
            }catch(err) {
                console.trace('执行ProductAction.queryCity. ' + err.message);
                // 封装响应错误
                makeResult(req, res, getFaltStateRsp(err));
            }
  });
}

DictionaryAction.prototype.queryCounty=function(req,res){
 var action= module.exports;
 var cityid=req.query.cityid;
 this.DictionaryService.queryCounty(cityid,function(err, result) {

  try {
                if (err) {
                     console.trace('ProductAction.queryCounty. ' + err.message);
                       // 封装响应错误
                     makeResult(req, res, getFaltStateRsp(err));
                }
                else {
                        var resultRsp = {
                             list:result.rows
                        };
                        makeResult(req, res, action.build(resultRsp));
                }
            }catch(err) {
                console.trace('执行ProductAction.queryCounty. ' + err.message);
                // 封装响应错误
                makeResult(req, res, getFaltStateRsp(err));
            }
  });
}
// 产品类型

DictionaryAction.prototype.queryCategory=function(req,res){
 var action= module.exports;
 this.DictionaryService.queryCategory(function(err, result) {

  try {
                if (err) {
                     console.trace('ProductAction.queryCategory. ' + err.message);
                       // 封装响应错误
                     makeResult(req, res, getFaltStateRsp(err));
                }
                else {
                        var resultRsp = {
                             list:result.rows
                        };
                        makeResult(req, res, action.build(resultRsp));
                }
            }catch(err) {
                console.trace('执行ProductAction.queryCategory. ' + err.message);
                // 封装响应错误
                makeResult(req, res, getFaltStateRsp(err));
            }
  });
}
// 添加产品类型
DictionaryAction.prototype.addCategory=function(req,res){

 var category = req.body;
 var action = module.exports;
 this.DictionaryService.addCategory(category,function (err, result) {

  try {
                if (err) {
                     console.trace('DictionaryAction.addCategory. ' + err.message);
                       // 封装响应错误
                     makeResult(req, res, getFaltStateRsp(err));
                }
                else {
                      var resultRsp = {
                            categoryid:result.rows[0].id
                        };
                        makeResult(req, res,action.build(resultRsp));
                }
            }catch(err) {
                console.trace('DictionaryAction.addCategory. ' + err.message);
                // 封装响应错误
                makeResult(req, res, getFaltStateRsp(err));
   
            }


  })

}
// 添加产品类型
DictionaryAction.prototype.delCategory=function(req,res){

 var category = req.body;
 var action = module.exports;
 this.DictionaryService.delCategory(category,function (err, result) {

  try {
               if (err) {
                     console.trace('DictionaryAction.delCategory. ' + err.message);
                       // 封装响应错误
                     makeResult(req, res, getFaltStateRsp(err));
                }
                else {
                      makeResult(req, res, getSuccStateRsp());
                }
            }catch(err) {
                console.trace('DictionaryAction.delCategory. ' + err.message);
                // 封装响应错误
                makeResult(req, res, getFaltStateRsp(err));
   
            }


  })

}
// 添加产品子类
DictionaryAction.prototype.addSubclass=function(req,res){

 var subclass = req.body;
 var action = module.exports;
  this.DictionaryService.addSubclass(subclass,function (err, result) {

  try {
                if (err) {
                     console.trace('DictionaryAction.addSubclass. ' + err.message);
                       // 封装响应错误
                     makeResult(req, res, getFaltStateRsp(err));
                }
                else {
         
                      makeResult(req, res, getSuccStateRsp());
                }
            }catch(err) {
                  console.trace('DictionaryAction.addSubclass. ' + err.message);
                  // 封装响应错误
                  makeResult(req, res, getFaltStateRsp(err));
   
            }


  })
    
}
// 删除产品子类
DictionaryAction.prototype.delSubclass=function(req,res){

 var subclass = req.body;
 var action = module.exports;
  this.DictionaryService.delSubclass(subclass,function (err, result) {

  try {
                if (err) {
                     console.trace('DictionaryAction.delSubclass. ' + err.message);
                       // 封装响应错误
                     makeResult(req, res, getFaltStateRsp(err));
                }
                else {
                     makeResult(req, res, getSuccStateRsp());
                }
            }catch(err) {
                  console.trace('DictionaryAction.delSubclass. ' + err.message);
                // 封装响应错误
                makeResult(req, res, getFaltStateRsp(err));
   
            }


  })
    
}
// 产品子类
DictionaryAction.prototype.querySubclass=function(req,res){
 var action= module.exports;
 var categoryid=req.query.categoryid;
 this.DictionaryService.querySubclass(categoryid,function(err, result) {

  try {
                if (err) {
                     console.trace('ProductAction.querySubclass. ' + err.message);
                       // 封装响应错误
                     makeResult(req, res, getFaltStateRsp(err));
                }
                else {
                        var resultRsp = {
                             list:result.rows
                        };
                        makeResult(req, res, action.build(resultRsp));
                }
            }catch(err) {
                console.trace('执行ProductAction.querySubclass. ' + err.message);
                // 封装响应错误
                makeResult(req, res, getFaltStateRsp(err));
            }
  });
}

module.exports = new DictionaryAction();
