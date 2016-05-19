var express=require('express');
var actionConfig=require('./routes/actionconfig');
var http=require('http');
var path=require('path');
var moment=require('moment');//时间处理
	
var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');   

var app=new express();
var router = express.Router();
//all environments
app.set('port',process.env.PORT||3000);
//app.set('views',path.join(__dirname,'views'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));


function setPostRouter(action){
   router.post(action,function(req,res){
   	  actionConfig.actionMapping.get[action](req,res);
   });
}


function setGetRouter(action){
   router.get(action,function(req,res){
   	  actionConfig.actionMapping.get[action](req,res);
   });
}
for(var action in actionConfig.actionMapping.get){
   setGetRouter(action);
}
for(var action in actionConfig.actionMapping.post) {
   setPostRouter(action);
}
//development  only
if ('development' == app.get('env')) {
   app.use(errorHandler());
}

app.use(router);
http.createServer(app).listen(app.get('port'),function(){
   console.log('express server listening on port'+app.get('port'));

});
