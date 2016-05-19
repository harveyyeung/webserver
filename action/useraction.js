var BaseAction = require('./baseaction');
var Service = require('../service/userservice');
var Util = require('util');
function UserAction() {
    this.userService = new Service();
}

Util.inherits(UserAction, BaseAction);

/**
 * 登录
 * @param req
 * @param res
 */
UserAction.prototype.queryUsers = function(req, res) {
    try {
        var action = module.exports;

        this.userService.queryUsers(function (err, result) {
            try {
                if (err) {
                     console.trace('执行UserAction.queryUsers方法未识别异常. ' + err.message);
                }
                else {
                   
                    //封装响应结果
                    var resultRsp = {
                        users: result
                    };
                    //res.send(resultRsp);
                   makeResult(req, res, action.build(resultRsp));
                }
            }catch(err) {
                console.trace('执行UserAction.queryUsers方法未识别异常. ' + err.message);
              
   
            }
        });
    } catch (err) {
        console.trace('执行UserAction.login方法未识别异常. ' + err.message);
       
    }
}
module.exports = new UserAction();