var dataPool=require('../util/dataPool');
var DictionaryDao = require('../dao/dictionarydao');

function DictionaryService() {
   this.dictionaryDao=new DictionaryDao();
}


DictionaryService.prototype.queryProvice=function(callback){
   var dictionaryDao = this.dictionaryDao;

   dataPool.pool.acquire(function (err, client) {
        try {
              console.log('DictionaryService.queryProvice             ');
                   
            if (err) {
                console.trace('DictionaryService.queryProvice. [pg.connect]' + err.message);
  
                dataPool.pool.release(client);;

                return;
            }
            dictionaryDao.queryProvice(client,function (err, result) {
                try {
                    if (err) {
                        console.trace('DictionaryService.queryProvice. [userDao.queryUsers]               ' + err.message);
                        dataPool.pool.release(client);;
                    }
                    else {
                        if(result.rows.length>0) {
                            dataPool.pool.release(client);;
                            callback(err, result);
                        }
                        else {
                            dataPool.pool.release(client);;
                
                        }
                    }
                }catch(e) {
                    dataPool.pool.release(client);;
                    callback(e);
                }
            });
        }catch(e) {
            done();
            callback(e);
        }
    });
}


DictionaryService.prototype.queryCity=function(proviceId,callback){
 var dictionaryDao = this.dictionaryDao;
 dataPool.pool.acquire(function (err, client) {
        try {
              console.log('DictionaryService.queryCity             ');
                   
            if (err) {
                console.trace('DictionaryService.queryCity. [pg.connect]' + err.message);
  
                dataPool.pool.release(client);;

                return;
            }
            dictionaryDao.queryCity(proviceId,client,function (err, result) {
                try {
                    if (err) {
                        console.trace('DictionaryService.queryCity' + err.message);
                        dataPool.pool.release(client);;
                    }
                    else {
                        if(result.rows.length>0) {
                            dataPool.pool.release(client);;
                            callback(err, result);
                        }
                        else {
                            dataPool.pool.release(client);;
                
                        }
                    }
                }catch(e) {
                    dataPool.pool.release(client);;
                    callback(e);
                }
            });
        }catch(e) {
            done();
            callback(e);
        }
    });
}

DictionaryService.prototype.queryCounty=function(cityid,callback){
 var dictionaryDao = this.dictionaryDao;
 dataPool.pool.acquire(function (err, client) {
        try {
              console.log('DictionaryService.queryCounty             ');
                   
            if (err) {
                console.trace('DictionaryService.queryCounty. [pg.connect]' + err.message);
                dataPool.pool.release(client);;
                return;
            }
            dictionaryDao.queryCounty(cityid,client,function (err, result) {
                try {
                    if (err) {
                        console.trace('DictionaryService.queryqueryCountyCity' + err.message);
                        dataPool.pool.release(client);;
                    }
                    else {
                        if(result.rows.length>0) {
                            dataPool.pool.release(client);;
                            callback(err, result);
                        }
                        else {
                            dataPool.pool.release(client);;
                        }
                    }
                }catch(e) {
                    dataPool.pool.release(client);;
                    callback(e);
                }
            });
        }catch(e) {
            done();
            callback(e);
        }
    });
}

DictionaryService.prototype.queryCategory=function(callback){
 var dictionaryDao = this.dictionaryDao;
 dataPool.pool.acquire(function (err, client) {
        try {
              console.log('DictionaryService.queryCategory             ');
                   
            if (err) {
                console.trace('DictionaryService.queryCategory. [pg.connect]' + err.message);
                dataPool.pool.release(client);;
                return;
            }
            dictionaryDao.queryCategory(client,function (err, result) {
                try {
                    if (err) {
                        console.trace('DictionaryService.queryCategory' + err.message);
                        dataPool.pool.release(client);;
                    }
                    else {
                        if(result.rows.length>0) {
                            dataPool.pool.release(client);;
                            callback(err, result);
                        }
                        else {
                            dataPool.pool.release(client);;
                        }
                    }
                }catch(e) {
                    dataPool.pool.release(client);;
                    callback(e);
                }
            });
        }catch(e) {
            done();
            callback(e);
        }
    });
}
DictionaryService.prototype.querySubclass=function(categoryid,callback){
 var dictionaryDao = this.dictionaryDao;
 dataPool.pool.acquire(function (err, client) {
        try {
              console.log('DictionaryService.querySubclass             ');
                   
            if (err) {
                console.trace('DictionaryService.v. [pg.connect]' + err.message);
                dataPool.pool.release(client);;
                return;
            }
            dictionaryDao.querySubclass(categoryid,client,function (err, result) {
                try {
                    if (err) {
                        console.trace('DictionaryService.querySubclass' + err.message);
                        dataPool.pool.release(client);;
                    }
                    else {
                        if(result.rows.length>0) {
                            dataPool.pool.release(client);;
                            callback(err, result);
                        }
                        else {
                            dataPool.pool.release(client);
                            callback(err, result);
                        }
                    }
                }catch(e) {
                    dataPool.pool.release(client);;
                    callback(e);
                }
            });
        }catch(e) {
            done();
            callback(e);
        }
    });
}


DictionaryService.prototype.addCategory=function(category,callback){
 var dictionaryDao = this.dictionaryDao;
 dataPool.pool.acquire(function (err, client) {
        try {
              console.log('DictionaryService.addCategory             ');
                   
            if (err) {
                console.trace('DictionaryService.addCategory. [pg.connect]' + err.message);
                dataPool.pool.release(client);;
                return;
            }
            dictionaryDao.addCategory(category,client,function (err, result) {
                try {
                    if (err) {
                        console.trace('DictionaryService.addCategory' + err.message);
                        dataPool.pool.release(client);;
                        callback(err);
                    }
                    else {
                       dataPool.pool.release(client);
                       callback(err, result);
                    }
                }catch(e) {
                    dataPool.pool.release(client);;
                    callback(e);
                }
            });
        }catch(e) {
            dataPool.pool.release(client);
            callback(e);
        }
    });
}
DictionaryService.prototype.addSubclass=function(subclass,callback){
 var dictionaryDao = this.dictionaryDao;
 dataPool.pool.acquire(function (err, client) {
        try {
              console.log('DictionaryService.addSubclass             ');
                   
            if (err) {
                console.trace('DictionaryService.addSubclass. [pg.connect]' + err.message);
                dataPool.pool.release(client);;
                return;
            }
            dictionaryDao.addSubclass(subclass,client,function (err, result) {
                try {
                    if (err) {
                        console.trace('DictionaryService.addSubclass' + err.message);
                        dataPool.pool.release(client);
                         callback(err, result);
                    }
                    else {
                            dataPool.pool.release(client);;
                            callback(err, result);
                       
                    }
                }catch(e) {
                    dataPool.pool.release(client);;
                    callback(e);
                }
            });
        }catch(e) {
           dataPool.pool.release(client);
            callback(e);
        }
    });
}

DictionaryService.prototype.delCategory=function(category,callback){
 var dictionaryDao = this.dictionaryDao;
 dataPool.pool.acquire(function (err, client) {
        try {
              console.log('DictionaryService.delCategory             ');
                   
            if (err) {
                console.trace('DictionaryService.delCategory. [pg.connect]' + err.message);
                dataPool.pool.release(client);;
                return;
            }
            dictionaryDao.delCategory(category,client,function (err, result) {
                try {
                    if (err) {
                        console.trace('DictionaryService.delCategory' + err.message);
                        dataPool.pool.release(client);;
                        callback(err);
                    }
                    else {
                        dataPool.pool.release(client);
                        callback(err, result);
                    }
                }catch(e) {
                    dataPool.pool.release(client);;
                    callback(e);
                }
            });
        }catch(e) {
            dataPool.pool.release(client);
            callback(e);
        }
    });
}
DictionaryService.prototype.delSubclass=function(subclass,callback){
 var dictionaryDao = this.dictionaryDao;
 dataPool.pool.acquire(function (err, client) {
        try {
              console.log('DictionaryService.addSubclass             ');
                   
            if (err) {
                console.trace('DictionaryService.delSubclass. [pg.connect]' + err.message);
                dataPool.pool.release(client);;
                return;
            }
            dictionaryDao.delSubclass(subclass,client,function (err, result) {
                try {
                    if (err) {
                        console.trace('DictionaryService.delSubclass' + err.message);
                        dataPool.pool.release(client);
                        callback(err, result);
                    }
                    else {
                        dataPool.pool.release(client);;
                        callback(err, result);
                       
                    }
                }catch(e) {
                    dataPool.pool.release(client);;
                    callback(e);
                }
            });
        }catch(e) {
           dataPool.pool.release(client);
            callback(e);
        }
    });
}

module.exports = DictionaryService;
