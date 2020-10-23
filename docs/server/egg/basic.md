# egg基础

### 特性 (约定由于配置)
* 基于koa性能好
* 插价机制 拓展好
* 内置多进程管理 无需pm2 多进程管理模式
* 框架稳定性高

### egg和koa

* 异步编程基于 node8以上基于 async await 
* koa和express Middleware 洋葱模型 继承与同一套http库 koa比express多了一个context对象
* egg继承koa app/extend{application context request response}。js对于这四个对象的拓展
* 插价 config 配置各个环境下插件自身的默认配置项 middleware配置多个中间件 处理请求前和请求后的处理
* 支持node.js8以上的版本

### 快速入门

#### 初始化

```
$ mkdir egg-example
$ cd egg-example
$ npm init
$ npm i egg --save
$ npm i egg-bin --save-dev
```

#### 编写controller和router

```
app/controller/home.js 

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Hello world';
  }
}

module.exports = HomeController;


app/router.js

// 路由映射
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
};

// 默认配置文件
app/config/config.default.js

exports.key = 'afafafafa';
```


#### 静态资源

* egg内置static插架 默认在app/public里面

#### 模版渲染

```
 npm i egg-view-nunjucks --save

 app/config/plugin
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
};

// config/config.default.js
exports.keys = <此处改为你自己的 Cookie 安全字符串>;
// 添加 view 配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

提示：开发期默认开启了 development 插件，修改后端代码后，会自动重启 Worker 进程。
```

#### 编写service 

#### 编写拓展

```
// app/extend/helper.js 里面写辅助函数
```
#### 编写middleware

```
module.exports = (options, app) => {
  return async function robotMiddleware(ctx, next) {
    const source = ctx.get('user-agent') || '';
    const match = options.ua.some(ua => ua.test(source));
    if (match) {
      ctx.status = 403;
      ctx.message = 'Go away, robot.';
    } else {
      await next();
    }
  }
};

// config/config.default.js
// add middleware robot
exports.middleware = [
  'robot'
];
// robot's configurations
exports.robot = {
  ua: [
    /Baiduspider/i,
  ]
};
```

#### 配置文件

```
// config/config.default.js
exports.robot = {
  ua: [
    /curl/i,
    /Baiduspider/i,
  ],
};

// config/config.local.js
// only read at development mode, will override default
exports.robot = {
  ua: [
    /Baiduspider/i,
  ],
};

// app/service/some.js
const Service = require('egg').Service;

class SomeService extends Service {
  async list() {
    const rule = this.config.robot.ua;
  }
}

module.exports = SomeService;
```
### 目录机构

```
egg-project
├── package.json
├── app.js (可选)
├── agent.js (可选)
├── app
|   ├── router.js
│   ├── controller
│   |   └── home.js
│   ├── service (可选)
│   |   └── user.js
│   ├── middleware (可选)
│   |   └── response_time.js
│   ├── schedule (可选)
│   |   └── my_task.js
│   ├── public (可选)
│   |   └── reset.css
│   ├── view (可选)
│   |   └── home.tpl
│   └── extend (可选)
│       ├── helper.js (可选)
│       ├── request.js (可选)
│       ├── response.js (可选)
│       ├── context.js (可选)
│       ├── application.js (可选)
│       └── agent.js (可选)
├── config
|   ├── plugin.js
|   ├── config.default.js
│   ├── config.prod.js
|   ├── config.test.js (可选)
|   ├── config.local.js (可选)
|   └── config.unittest.js (可选)
└── test
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js
```

### 内置对象

#### application 

* Application 是全局应用对象，在一个应用中，只会实例化一个，它继承自 Koa.Application，在它上面我们可以挂载一些全局的方法和对象。我们可以轻松的在插件或者应用中扩展 Application 对象。


```
// app.js
module.exports = app => {
  app.once('server', server => {
    // websocket
  });
  app.on('error', (err, ctx) => {
    // report error
  });
  app.on('request', ctx => {
    // log receive request
  });
  app.on('response', ctx => {
    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    // log total cost
  });
};

获取方式

controller service 

启动自定义脚本

```

### context 

* Context 是一个请求级别的对象，继承自 Koa.Context。在每一次收到用户请求时，框架会实例化一个 Context 对象，这个对象封装了这次用户请求的信息，并提供了许多便捷的方法来获取请求参数或者设置响应信息。controller middleware service 

* 可以通过 Application.createAnonymousContext() 方法创建一个匿名 Context 实例


### controller 和 service 

```
ctx - 当前请求的 Context 实例。
app - 应用的 Application 实例。
config - 应用的配置。
service - 应用所有的 service。
logger - 为当前 controller 封装的 logger 对象。
```

### helper 挂载到 context中


### 运行环境

* 指定运行环境 config/env 或者 EGG_SERVER_ENV=prod npm start

* 应用内获取运行环境  app.config.env 

* 运行环境相关配置 config配置

### 配置

配置[egg链接](https://eggjs.org/zh-cn/basics/config.html#%E5%90%88%E5%B9%B6%E8%A7%84%E5%88%99)

### middleware

* 如何编写中间价

* 使用中间件

* 配置中间件

### 路由

* 如何定义router
* router定义说明
* router实战 获取参数


### controller

* 解析用户输入 处理返回结果 1.数据库参数  2.html请求返回不同模版 3 转发服务器

* 获取用户http请求参数  校验，组装参数  调用service  http 响应结果返回

#### 获取controller参数
* ctx.query.name  ctx.params  ctx.body
* 获取上传文件
* head参数的获取 ctx.headers  ctx.get ctx.host ctx.protocol ctx.ip
* 发送http响应 设置status 设置body 设置header  重定向

#### cookie 

* 获取cookies ctx.cookies获取读取cookie

### service 

* 复杂数据的处理，比如要展现的信息需要从数据库获取，还要经过一定的规则计算，才能返回用户显示。或者计算完成后，更新到数据库。
第三方服务的调用，比如 GitHub 信息获取等。

### 插件

* why ?  
1.中间件加载其实是有先后顺序的，但是中间件自身却无法管理这种顺序，只能交给使用者。这样其实非常不友好，一旦顺序不对，结果可能有天壤之别。
2.中间件的定位是拦截用户请求，并在它前后做一些事情，例如：鉴权、安全检查、访问日志等等。但实际情况是，有些功能是和请求无关的，例如：定时任务、消息订阅、后台逻辑等等
3.有些功能包含非常复杂的初始化逻辑，需要在应用启动的时候完成。这显然也不适合放到中间件中去实现。


* relation ?

包含点 service 中间件 配置  框架拓展 没有plugin 和 controller router

* how to use it?
plugin 引入 挂载到了app上了
环境配置 根据运行环境加载
渐近式开发 package path 两种模式

* how to create it?

[插件开发](https://eggjs.org/zh-cn/advanced/plugin.html)

### 启动自定义

* 配置文件即将加载，这是最后动态修改配置的时机（configWillLoad）
配置文件加载完成（configDidLoad）
文件加载完成（didLoad）
插件启动完毕（willReady）
worker 准备就绪（didReady）
应用启动完成（serverDidReady）
应用即将关闭（beforeClose）