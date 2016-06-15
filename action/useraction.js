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
        this.userService.queryUser(user.phone,function (err, result) {
            try {
                if (err) {
                     console.trace('执行UserAction.queryUsers方法未识别异常. ' + err.message);
                     makeResult(req, res, getFaltStateRsp(err));
                }
                else 
                {
                  if(result.rows>0){
                     var quser=result.rows[0];
                     if(utils.md5(user.password)==quser.password){
                        req.session.userid=quser.id;
                        req.session.user=quser;
                        var resultRsp = {
                             phone:quser.phone
                        };
                       makeResult(req, res, action.build(resultRsp));
                     }else{
                      makeResult(req, res, getFaltStateRsp({
                       code:'user.password.error',
                       maessage:'密码错误'
                      }));
                     }
                   }else{
                       makeResult(req, res, getFaltStateRsp({
                       code:'user.no.exist',
                       maessage:'用户不存在'
                       }));
                   }   
                }
            }catch(err) {
                console.trace('执行UserAction.queryUsers方法未识别异常. ' + err.message);
                  makeResult(req, res, getFaltStateRsp(err));
   
            }
        });
    } catch (err) {
        console.trace('执行UserAction.login方法未识别异常. ' + err.message);
        makeResult(req, res, getFaltStateRsp(err));
   
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
        var that=this;
        this.userService.queryUser(user.phone,function (err, result) {
            try {
                if (err) {
                     console.trace('执行UserAction.queryUsers方法未识别异常. ' + err.message);
                     makeResult(req, res, getFaltStateRsp(err));   
                 }
                else {
                   if(result.rows>0){
                     makeResult(req, res, getFaltStateRsp({
                       code:'user.exist',
                       maessage:'手机号已被使用,请更换手机号'
                     }));
                   }else{
                     user.password=utility.md5(user.password);
                     that.userService.addUser(user,function(err,result){
                        //封装响应结果
                        if (err) {
                            console.trace('UserAction.addUser. ' + err.message);
                            // 封装响应错误
                            makeResult(req, res, getFaltStateRsp(err));
                        }
                        req.session.userid=result.rows[0].id;
                        req.session.user=user;
                        var resultRsp = {
                             phone:user.phone
                        };
                        makeResult(req, res, action.build(resultRsp));
                     })  
                   }
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
        console.log( utility.md5('12312313131'));
        //   console.log( utility.md5('苏千').should.equal('5f733c47c58a077d61257102b2d44481'));
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