(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{377:function(s,e,t){"use strict";t.r(e);var o=t(42),n=Object(o.a)({},(function(){var s=this.$createElement,e=this._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h1",{attrs:{id:"nodejs-子进程-child-process-和-cluster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-子进程-child-process-和-cluster"}},[this._v("#")]),this._v(" nodejs 子进程 child_process 和 cluster")]),this._v(" "),e("ul",[e("li",[this._v("node遵循的是单线程单进程的模式，node的单线程是指js的引擎只有一个实例，且在nodejs的主线程中执行，同时node以事件驱动的方式处理IO等异步操作。node的单线程模式，只维持一个主线程，大大减少了线程间切换的开销。  但是node的单线程使得在主线程不能进行CPU密集型操作，否则会阻塞主线程。对于CPU密集型操作，在node中通过child_process可以创建独立的子进程，父子进程通过IPC通信，子进程可以是外部应用也可以是node子程序，子进程执行后可以将结果返回给父进程。  此外，node的单线程，以单一进程运行，因此无法利用多核CPU以及其他资源，为了调度多核CPU等资源，node还提供了cluster模块，利用多核CPU的资源，使得可以通过一串node子进程去处理负载任务，同时保证一定的负载均衡型。本文从node的单线程单进程的理解触发，介绍了child_process模块和cluster模块，本文的结构安排如下：")])]),this._v(" "),e("p",[e("img",{attrs:{src:"/Occam-s-Razor.github.io/child_process.png",alt:"create"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);