/**
 * Created by zhenghua on 14-2-10.
 */

function BaseDao() {

}

/**
 * 解析对象属性
 *
 * @param obj
 * @param type
 * @param offset
 * @returns {{}}
 */
BaseDao.prototype.parseProps = function(obj,type,offset) {
    var result = {};
    var keys = [];
    var values = [];
    var params = [];

    for(var p in obj) {
        // 方法
        if(typeof(obj[p])=="function"){
            console.warn('对象中存在方法属性. ');
            continue;
        }
        else {
            if(p!=='guid') {
                keys.push(p);
                values.push(obj[p]);
            }
        }
    }
    keys.push('guid');
    values.push(obj['guid']);

    for(var i= 1+offset,j=keys.length;i<=j;i++) {
        params.push('$'+i);
    }
    if(type==='save') {
        result.keys = keys.join(',').toString();
        result.values = values;
        result.params = params.join(',').toString();
    }
    else if(type==='update') {
        var pairs = [];
        for(var i= 0,j=keys.length-1;i<j;i++) {
            pairs.push(keys[i]+'='+params[i]);
        }
        result.guid = 'guid'+'='+params[keys.length-1];
        result.pairs = pairs.join(',').toString();
        result.values = values;
    }
    else if(type==='delete') {
        result.guid = 'guid=$1';
        result.values = values;
    }

    return result;
};

/**
 * 保存
 *
 * @param entity
 * @param client
 * @param callback
 */
BaseDao.prototype.save = function(entity, client, callback) {
    // 添加userId和groupId
    entity.user_guid = entity.user.guid;
    entity.group_guid = entity.user.group_guid;
    // 删除user参数
    delete entity.user;
    var props = this.parseProps(entity, 'save', 0);
    var sql = 'insert into ' + this.tableName + '(' + props.keys + ') values(' + props.params + ')';

    client.query(sql, props.values, callback);
}

/**
 * 根据guid更新数据
 *
 * @param entity
 * @param client
 * @param callback
 */
BaseDao.prototype.update = function(entity, client, callback) {
    // 添加userId和groupId
    entity.user_guid = entity.user.guid;
    entity.group_guid = entity.user.group_guid;
    // 删除user参数
    delete entity.user;
    var props = this.parseProps(entity, 'update', 0);
    var sql = 'update ' + this.tableName + ' set ' + props.pairs + ' where ' + props.guid;

    client.query(sql, props.values, callback);
}

/**
 * 根据guid删除数据
 *
 * @param entity
 * @param client
 * @param callback
 */
BaseDao.prototype.delete = function(entity, client, callback) {
    var props = this.parseProps(entity, 'delete', 0);
    var sql = 'delete from ' + this.tableName + ' where ' + props.guid;

    client.query(sql, [props.values[props.values.length-1]], callback);
}

/**
 * 批量删除
 *
 * @param guids
 * @param client
 * @param callback
 */
BaseDao.prototype.batchDelete = function(guids, client, callback) {
    var guidStr = '';
    guids.forEach(function(guid) {
        if(guidStr!=='') {
            guidStr += ',';
        }
        guidStr += '\'' + guid + '\''
    });
    var sql = 'delete from ' + this.tableName + ' where guid in (' + guidStr + ')';

    client.query(sql, callback);
}

/**
 * 根据guid查询数据
 *
 * @param entity
 * @param client
 * @param callback
 */
BaseDao.prototype.findById = function(guid, client, callback) {
    var sql = 'select * from ' + this.tableName + ' where guid=$1';

    client.query(sql, [guid], callback);
}

/**
 * 根据guid批量查询数据
 *
 * @param guids
 * @param client
 * @param callback
 */
BaseDao.prototype.findByIds = function(guids, client, callback) {
    var guidStr = '';
    guids.forEach(function(guid) {
        if(guidStr!=='') {
            guidStr += ',';
        }
        guidStr += '\'' + guid + '\''
    });
    var sql = 'select * from ' + this.tableName + ' where guid in (' + guidStr + ')';

    client.query(sql, guids, callback);
}

module.exports = BaseDao;