var BaseAction = require('./baseaction');
var Util = require('util');
function UploadfileAction() {
 
}

Util.inherits(UploadfileAction, BaseAction);


UploadfileAction.prototype.uploadImage=function(req,res){
 try {
    var file = req.files[0];
    var action = module.exports;
    var resultRsp = {
                    url:file.path
               };
         makeResult(req, res, action.build(resultRsp));
    } catch (err) {
        console.trace('执行ProductAction.queryProducts. ' + err.message);
          // 封装响应错误
        makeResult(req, res, getFaltStateRsp(err));
    }
}



module.exports = new UploadfileAction();