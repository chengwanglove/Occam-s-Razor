
# egg的核心功能

### 本地开发

```
npm i egg-bin --save-dev

package.json里配置

{
    "scripts" : {
        "dev" : "egg-bin dev"
    }
}

环境配置 config.local.js和config.default.js合并的结果
```

#### 日志输出

* 通过logger模块
* egg-bin 进行调试  devtools进行调试 🔗node



### 应用部署


#### 构建过程

* js本来不需要编译，构建过程需要下载依赖

* 部署 框架内置了egg-cluster master进程 不再需要pm2进行进程守护

```
{
  "scripts": {
    "start": "egg-scripts start --daemon",
    "stop": "egg-scripts stop"
  }
}
```

#### 监控

* node.js性能平台  alinode 性能监控平台



### 日志


#### 日志分类

* appLogger 应用相关日志

* coreLogger 框架内核，插件日志

* errorLogger 任何调用error输出的日志都会重定向到这里

* agentLogger agent日志 agent进程执行任务插件会输出到这里

#### 如何打印日志

```
context logger
ctx.logger.debug();
ctx.logger.info();
ctx.logger.warn();

app.logger

agent.logger
```


### httpClient 进行发送请求 

[内置请求模块具体方法](https://eggjs.org/zh-cn/core/cookie-and-session.html)



### cookie and session

```
ctx.cookies.set({
    httpOnly,
    maxAge,
    path,
    domain
})

ctx.cookies.set(key, value, {
  httpOnly: false,
  signed: false,
});
如果想要cookie在浏览器可以被js访问并修改

如果想要cookie在浏览器端不能被修改，不能看到明文

ctx.cookies.set(key, value, {
  httpOnly: true, // 默认就是 true
  encrypt: true, // 加密传输
});
```


### 多进程模型和进程间通讯