var poolModule = require('generic-pool');
var pg = require('pg');
var connectionString = "pg://sjnt:sjnt@localhost:5432/sjnt"; 
var pool = poolModule.Pool({
        //将建 一个 连接的 handler
        create   : function(callback) {
               pg.connect(connectionString, function(err, client) { 
                   callback(err, client);
               });
        
        },
        // 释放一个连接的 handler
        destroy  : function(client) { client.end(); },
        // 连接池中最大连接数量
        max      : 10,
        // 连接池中最少连接数量
        min      : 2, 
        // 如果一个线程3秒钟内没有被使用过的话。那么就释放
        idleTimeoutMillis : 30000,
        // 如果 设置为 true 的话，就是使用 console.log 打印入职，当然你可以传递一个 function 最为作为日志记录handler
        log : false 
});


exports.pool=pool;