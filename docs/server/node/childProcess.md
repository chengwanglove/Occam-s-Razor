# nodejs 子进程 child_process 和 cluster


## child_process

*   node遵循的是单线程单进程的模式，node的单线程是指js的引擎只有一个实例，且在nodejs的主线程中执行，同时node以事件驱动的方式处理IO等异步操作。node的单线程模式，只维持一个主线程，大大减少了线程间切换的开销。  但是node的单线程使得在主线程不能进行CPU密集型操作，否则会阻塞主线程。对于CPU密集型操作，在node中通过child_process可以创建独立的子进程，父子进程通过IPC通信，子进程可以是外部应用也可以是node子程序，子进程执行后可以将结果返回给父进程。  此外，node的单线程，以单一进程运行，因此无法利用多核CPU以及其他资源，为了调度多核CPU等资源，node还提供了cluster模块，利用多核CPU的资源，使得可以通过一串node子进程去处理负载任务，同时保证一定的负载均衡型。本文从node的单线程单进程的理解触发，介绍了child_process模块和cluster模块，本文的结构安排如下：


![create](/Occam-s-Razor.github.io/child_process.png)


* spawn ： 子进程中执行的是非node程序，提供一组参数后，执行的结果以流的形式返回。
* execFile：子进程中执行的是非node程序，提供一组参数后，执行的结果以回调的形式返回。
* exec：子进程执行的是非node程序，传入一串shell命令，执行后结果以回调的形式返回，与execFile
不同的是exec可以直接执行一串shell命令。
* fork：子进程执行的是node程序，提供一组参数后，执行的结果以流的形式返回，与spawn不同，fork生成的子进程只能执行node应用。接下来的小节将具体的介绍这一些方法。

### 通过exec实现

```
let cp = require('child_process');
cp.exec('echo hello world', function(err, stdout) {console.log(stdout)});
```

### 通过execFile来实现

```
let cp=require('child_process');
cp.execFile('echo',['hello','world'],function(err,stdout){
   console.log(stdout);
});
```
### fork

* 在javascript中，在处理大量计算的任务方面，HTML里面通过web work来实现，使得任务脱离了主线程。在node中使用了一种内置于父进程和子进程之间的通信来处理该问题，降低了大数据运行的压力。node中提供了fork方法，通过fork方法在单独的进程中执行node程序，并且通过父子间的通信，子进程接受父进程的信息，并将执行后的结果返回给父进程。

* 在child.js中

```
process.on('message',function(msg){
   process.send(msg)
})
```

* 在parent.js中

```
let cp = require('child_process');
let child = cp.fork('./child.js');
child.on('message',function(msg){
  console.log('got a message is',msg);
});
child.send('hello world');
```
* exec、execFile、spawn和fork执行的子进程都是默认异步的，子进程的运行不会阻塞主进程。除此之外，child_process模块同样也提供了execFileSync、spawnSync和execSync来实现同步的方式执行子进程

## cluster

```
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`主进程 ${process.pid} 正在运行`);

  // 衍生工作进程。
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`工作进程 ${worker.process.pid} 已退出`);
  });
} else {
  // 工作进程可以共享任何 TCP 连接。
  // 在本例子中，共享的是一个 HTTP 服务器。
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('你好世界\n');
  }).listen(8000);

  console.log(`工作进程 ${process.pid} 已启动`);
}
```