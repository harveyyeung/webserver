var BaseAction = require('./baseaction');
var Service = require('../service/userservice');
var Util = require('util');
var utility = require('utility');
function UserAction() {
    this.userService = new Service();
}

Util.inherits(UserAction, BaseAction);

/**
 * 登录
 * @param req
 * @param res
 */

/**
 * 登录
 * @param req
 * @param res
 */
UserAction.prototype.userLogin = function(req,res) {
    try {
        var action = module.exports;
        var user=req.body;
        this.userService.queryUser(user,function (err, result) {
            try {
                if (err) {
                     console.trace('执行UserAction.queryUsers方法未识别异常. ' + err.message);
                }
                else {
                   
                    //封装响应结果
                  //  var resultRsp = {
                  // users: result
                  //  };
                    //res.send(resultRsp);
                   //makeResult(req, res, action.build(resultRsp));
                }
            }catch(err) {
                console.trace('执行UserAction.queryUsers方法未识别异常. ' + err.message);
              
   
            }
        });
    } catch (err) {
        console.trace('执行UserAction.login方法未识别异常. ' + err.message);
       
    }
}
/**
 * 注册
 * @param req
 * @param res
 */
UserAction.prototype.userRegister = function(req,res) {
    try {
        var action = module.exports;
        var user=req.body;
        this.userService.queryUser(user.phone,function (err, result) {
            try {
                if (err) {
                     console.trace('执行UserAction.queryUsers方法未识别异常. ' + err.message);
                }
                else {
                   if(result.rows>0){


                   }else{

                       
                   }
                    //封装响应结果
                  //  var resultRsp = {
                  // users: result
                  //  };
                    //res.send(resultRsp);
                   //makeResult(req, res, action.build(resultRsp));
                }
            }catch(err) {
                console.trace('执行UserAction.queryUsers方法未识别异常. ' + err.message);
              
   
            }
        });
    } catch (err) {
        console.trace('执行UserAction.login方法未识别异常. ' + err.message);
       
    }
}

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