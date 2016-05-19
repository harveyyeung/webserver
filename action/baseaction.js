function BaseAction() {

}

/**
 * 获取成功状态响应
 *
 * @returns {{}}
 */
 getSuccStateRsp = function() {
    var result = {};

    result.code = 200;
    result.msg = 'OK';

    return result;
}

/**
 * 获取失败状态响应
 *
 * @param appException
 * @returns {{}}
 */
getFaltStateRsp = function(appException) {
    var state = {};
    var result = {};

    state.code = appException.code;
    state.msg = appException.message;
    result.result = state;

    return result;
}

/**
 * 封装响应结果
 *
 * @param req
 * @param res
 * @param result
 */
makeResult = function(req, res, result) {
    var jsonp = false;
    if(req.method==='GET' && req.query.callback) {
        jsonp = true;
    }

    if(jsonp) {
        res.jsonp(result);
    }
    else {
        res.json(result);
    }
}

/**
 * 构建输出响应
 *
 * @param stateRsp
 * @param resultRsp
 * @returns {{}}
 */
BaseAction.prototype.build = function(resultRsp) {
    var result = {};

    result.result = getSuccStateRsp();
    for(var p in resultRsp) {
        result[p] = resultRsp[p];
    }

    return result;
}

module.exports = BaseAction;