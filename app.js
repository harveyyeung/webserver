var express=require('express');
var actionConfig=require('./routes/actionconfig');
var http=require('http');
var path=require('path');
var moment=require('moment');//时间处理
	

var app=new express();


function setPostRouter(action){
   app.post(action,function(req,res){
   	  actionConfig.actionMapping.get[action](req,res);
   });
}


function setGetRouter(action){
   app.get(action,function(req,res){
   	  actionConfig.actionMapping.get[action](req,res);
   });
}

//development  only

if ('development' == app.get('env')) {
   app.use(express.errorHandler());

}

for(var action in actionConfig.actionMapping.get){
   setGetRouter(action);
}
for(var action in actionConfig.actionMapping.post) {
	setPostRouter(action);
}

http.createServer(app).listen(app.get('port'),function(){
   console.log('express server listening on port'+app.get('port'));

});
