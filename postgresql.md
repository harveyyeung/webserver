create table PRODUCTS(
      ID  serial8 PRIMARY KEY,
      NAME   varchar(20) not null,
      CATEGORYNO   int8  not null,
      SUBCLASSNO   int8  not null,
      PRICE     float8   not null,
      PCOUNT    int8   ,
      ACTIVITYID   int8, 
      ABSTRACT  text  not null,
      BEGINTIME  timestamp  not null,
      ENDTIME    timestamp   not null,
      ADDRESS    varchar  not null,
      PROVINCENO   int NOT NULL,
      CITYNO              int NOT NULL,
      INPUTTIME  timestamp  NOT NULL,
      STATE     int not NULL
      );

--表说明  
COMMENT ON TABLE public.PRODUCTS  IS '产品表';  
--字段说明  
COMMENT ON COLUMN public.PRODUCTS.ID IS '主键ID';  
COMMENT ON COLUMN public.PRODUCTS.NAME IS '产品名称';  
COMMENT ON COLUMN public.PRODUCTS.CATEGORYNO IS '类型ID';  
COMMENT ON COLUMN public.PRODUCTS.SUBCLASSNO IS '子类ID';  
COMMENT ON COLUMN public.PRODUCTS.PRICE IS '价格';  
COMMENT ON COLUMN public.PRODUCTS.PCOUNT IS '产品数量';  
COMMENT ON COLUMN public.PRODUCTS.ACTIVITYID IS '活动ID';  
COMMENT ON COLUMN public.PRODUCTS.ABSTRACT IS '产品简介';  
COMMENT ON COLUMN public.PRODUCTS.BEGINTIME IS '产品开始售卖时间';  
COMMENT ON COLUMN public.PRODUCTS.ENDTIME IS '产品结束售卖时间';  
COMMENT ON COLUMN public.PRODUCTS.ADDRESS IS '产品生产地详细地址';  
COMMENT ON COLUMN public.PRODUCTS.PROVINCENO IS '产品生产地 省份ID';  
COMMENT ON COLUMN public.PRODUCTS.CITYNO IS '产品生产地城市ID';  
COMMENT ON COLUMN public.PRODUCTS.INPUTTIME IS '产品写入时间';  
COMMENT ON COLUMN public.PRODUCTS.STATE IS '产品当前状态()';  


CREATE TABLE PICTURES(
ID  serial8 PRIMARY KEY,
PRODUCTID  int8  references products(id),
URL   varchar   not null,
CONTENT  text,
position     int,
SORT     int
);

--表说明  
COMMENT ON TABLE public.PICTURES  IS '图片记录表';  
--字段说明  
COMMENT ON COLUMN public.PICTURES.ID IS '主键ID';  
COMMENT ON COLUMN public.PICTURES.PRODUCTID IS '对应产品ID';  
COMMENT ON COLUMN public.PICTURES.URL IS '图片路径';  
COMMENT ON COLUMN public.PICTURES.CONTENT IS '图片描述';  
COMMENT ON COLUMN public.PICTURES.position IS '图片位置(1:首页列表图片，2:产品也顶部图片)';  
COMMENT ON COLUMN public.PICTURES.SORT IS '图片顺序';  



CREATE TABLE USERS(
ID serial8 PRIMARY KEY,
NAME    varchar not null,
PHONE    varchar not null,
EMAIL   varchar,
PASSWORD    varchar not null
);


--表说明  
COMMENT ON TABLE public.USERS  IS '用户表';  
--字段说明  
COMMENT ON COLUMN public.USERS.ID IS '主键ID';  
COMMENT ON COLUMN public.USERS.NAME IS '用户名称';  
COMMENT ON COLUMN public.USERS.PHONE IS '手机号，登录注册使用';  
COMMENT ON COLUMN public.USERS.EMAIL IS 'email';  
COMMENT ON COLUMN public.USERS.PASSWORD IS '登录密码';  




CREATE TABLE USER_ADDRES(
ID  serial8 PRIMARY KEY,
USERID  int8 not null,
NAME        varchar not null,
ADDRESS    varchar not null,
PROVINCENO int not null,
CITYNO          int  not null,
PHONE   varchar not null,
POSTCODE  varchar
);

--表说明  
COMMENT ON TABLE public.USER_ADDRES  IS '用户邮寄地址表';  
--字段说明  
COMMENT ON COLUMN public.USER_ADDRES.ID IS '主键ID';  
COMMENT ON COLUMN public.USER_ADDRES.USERID IS '主键ID'; 
COMMENT ON COLUMN public.USER_ADDRES.NAME IS '收件人名称';  
COMMENT ON COLUMN public.USER_ADDRES.PHONE IS '收件人手机号';  
COMMENT ON COLUMN public.USER_ADDRES.ADDRESS IS '收件人详细地址';  
COMMENT ON COLUMN public.USER_ADDRES.PROVINCENO IS '收件人省份ID'; 
COMMENT ON COLUMN public.USER_ADDRES.CITYNO IS '收件人城市ID';  
COMMENT ON COLUMN public.USER_ADDRES.POSTCODE IS '收件人邮编';



CREATE TABLE ORDERS(
SERIALNO serial8 PRIMARY KEY, -- 订单号 流水号
USERID   int8 references  USERS(id),
USERADDID int8 not null,
PRODUCTID int8 references products(id),
ACTIVITYID  int8,
PRODUCTNAME   varchar not null,
OCOUNT  int not null,
PRICE    float8  not null,
ORDERSTATE  int not null,
PAYSTATE  int not null,
ORDERTYPE   int not null,
INPUTTIME      timestamp  NOT NULL,
UPDATETIME      timestamp  NOT NULL
);


--表说明  
COMMENT ON TABLE public.ORDERS  IS '用户订单表';  
--字段说明  
COMMENT ON COLUMN public.ORDERS.SERIALNO IS '订单号';  
COMMENT ON COLUMN public.ORDERS.USERID IS '主键ID'; 
COMMENT ON COLUMN public.ORDERS.USERADDID IS '收货地址ID';  
COMMENT ON COLUMN public.ORDERS.PRODUCTID IS '收件人手机号';  
COMMENT ON COLUMN public.ORDERS.ACTIVITYID IS '活动ID';  
COMMENT ON COLUMN public.ORDERS.PRODUCTNAME IS '产品名称'; 
COMMENT ON COLUMN public.ORDERS.OCOUNT IS '数量';  
COMMENT ON COLUMN public.ORDERS.PRICE IS '单价';
COMMENT ON COLUMN public.ORDERS.ORDERSTATE IS '订单状态';  
COMMENT ON COLUMN public.ORDERS.PAYSTATE IS '支付状态'; 
COMMENT ON COLUMN public.ORDERS.ORDERTYPE IS '订单类型';  
COMMENT ON COLUMN public.ORDERS.INPUTTIME IS '下单时间';
COMMENT ON COLUMN public.ORDERS.UPDATETIME IS '修改时间';



CREATE TABLE PARCELSEND(
ID serial8 PRIMARY KEY, 
ORDERNO  int8 references  ORDERS(SERIALNO),
USERID    int8 references  USERS(id),
POSTTYPE  int not null,
POSTNO    varchar(20) not null,
STATE     int not null,
SENDTIME    timestamp  NOT NULL,
CONTENT   TEXT,
INPUTTIME    timestamp  NOT NULL
);

--表说明  
COMMENT ON TABLE public.PARCELSEND  IS '货物邮寄表';  
--字段说明  
COMMENT ON COLUMN public.PARCELSEND.ID IS '主键ID';  
COMMENT ON COLUMN public.PARCELSEND.ORDERNO IS '订单号'; 
COMMENT ON COLUMN public.PARCELSEND.USERID IS '用户ID';  
COMMENT ON COLUMN public.PARCELSEND.POSTTYPE IS '快递类型';  
COMMENT ON COLUMN public.PARCELSEND.POSTNO IS '快递单号';  
COMMENT ON COLUMN public.PARCELSEND.STATE IS '邮寄状态'; 
COMMENT ON COLUMN public.PARCELSEND.SENDTIME IS '邮寄时间';  
COMMENT ON COLUMN public.PARCELSEND.CONTENT IS '第三方内容';
COMMENT ON COLUMN public.PARCELSEND.INPUTTIME IS '录入时间';


CREATE TABLE SHOPINGCART(
ID serial8 PRIMARY KEY, 
USERID  int8 references  USERS(id),
PRODUCTID  int8 references  PRODUCTS(id),
PRODUCTNAME  varchar not null,
COUNT int not null,
PRICE float8  not null,
INPUTTIME timestamp  not null,
STATE  int not null,--(商品是否还在销售期)
ACTIVITY_ID  int8 
);

--表说明  
COMMENT ON TABLE public.SHOPINGCART  IS '货物邮寄表';  
--字段说明  
COMMENT ON COLUMN public.SHOPINGCART.ID IS '主键ID';  
COMMENT ON COLUMN public.SHOPINGCART.USERID IS '用户ID';  
COMMENT ON COLUMN public.SHOPINGCART.PRODUCTID IS '产品ID';  
COMMENT ON COLUMN public.SHOPINGCART.PRODUCTNAME IS '产品名称';  
COMMENT ON COLUMN public.SHOPINGCART.COUNT IS '数量'; 
COMMENT ON COLUMN public.SHOPINGCART.PRICE IS '单价';  
COMMENT ON COLUMN public.SHOPINGCART.INPUTTIME IS '录入时间';
COMMENT ON COLUMN public.SHOPINGCART.STATE IS '是否在销售期';
COMMENT ON COLUMN public.SHOPINGCART.ACTIVITY_ID IS '活动ID';
--产品描述
CREATE TABLE PDESCRIPTION(
PRODUCTID int8 PRIMARY KEY references  PRODUCTS(ID),
CONTENT  text
);
COMMENT ON COLUMN public.PDESCRIPTION  IS  '产品描述';
COMMENT ON COLUMN public.PDESCRIPTION.PRODUCTID IS '产品ID';  
COMMENT ON COLUMN public.PDESCRIPTION.CONTENT IS '产品描述内容';  

category 种类 类别


subclass  子类
