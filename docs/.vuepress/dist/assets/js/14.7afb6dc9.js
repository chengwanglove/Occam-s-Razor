(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{364:function(a,t,r){"use strict";r.r(t);var i=r(42),v=Object(i.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"通信协议综述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通信协议综述"}},[a._v("#")]),a._v(" 通信协议综述")]),a._v(" "),r("h2",{attrs:{id:"知识概览"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#知识概览"}},[a._v("#")]),a._v(" 知识概览")]),a._v(" "),r("p",[r("img",{attrs:{src:"/Occam-s-Razor.github.io/netWork.jpg",alt:"create"}})]),a._v(" "),r("h2",{attrs:{id:"why-learn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#why-learn"}},[a._v("#")]),a._v(" why learn?")]),a._v(" "),r("ul",[r("li",[a._v("只有通过这种协议，计算机才知道我们想让它做什么。")])]),a._v(" "),r("ul",[r("li",[a._v("协议三要素 语法， 语义 顺序 只有通过网络协议，才能使一大片机器互相协作、共同完成一件事")])]),a._v(" "),r("h2",{attrs:{id:"输入-url-网络协议流转过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#输入-url-网络协议流转过程"}},[a._v("#")]),a._v(" 输入 url 网络协议流转过程")]),a._v(" "),r("ol",[r("li",[r("p",[a._v("www.baidu.com -> dns 或者 httpdns -> ip 号")])]),a._v(" "),r("li",[r("p",[a._v("ip -> http 或者 https 浏览器打包请求")])]),a._v(" "),r("li",[r("p",[a._v("tcp 协议 浏览器端口和服务器端口 打包给哪个进程")])]),a._v(" "),r("li",[r("p",[a._v("ip 协议 用来寻址")])]),a._v(" "),r("li",[r("p",[a._v("网关 mac 地址 客户端 mac 和浏览器 mac arp 协议")])]),a._v(" "),r("li",[r("p",[a._v("路由协议，常用的有 OSPF 和 BGP")])]),a._v(" "),r("li",[r("p",[a._v("一个网关一个网关找 找到对应服务的地址")])]),a._v(" "),r("li",[r("p",[a._v("再有 mac => ip => 端口 => 应用服务 把消息传送到对应到应用服务层")])])]),a._v(" "),r("h2",{attrs:{id:"网络分层的真实含义"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网络分层的真实含义"}},[a._v("#")]),a._v(" 网络分层的真实含义")]),a._v(" "),r("ul",[r("li",[a._v("复杂的程序设计都要分层，这是程序设计的要求")])]),a._v(" "),r("h3",{attrs:{id:"程序是如何工作的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#程序是如何工作的"}},[a._v("#")]),a._v(" 程序是如何工作的?")]),a._v(" "),r("ul",[r("li",[a._v("只要上网络上运行的包，都是完整的，不可能有上层没下层，可以有下层没有上层, 所以 tcp 协议也好，三次握手也好，都会有 ip 层和 mac 不让发不出去")])]),a._v(" "),r("p",[r("img",{attrs:{src:"/Occam-s-Razor.github.io/sendBuffer.jpg",alt:"create"}})]),a._v(" "),r("ul",[r("li",[a._v("始终想象自己是一个处理网络包的程序:如何拿到网络包，如何根据规则进行处理，如何 发出去; 始终牢记一个原则:只要是在网络上跑的包，都是完整的。可以有下层没上层，绝对不可 能有上层没下层。")])]),a._v(" "),r("h2",{attrs:{id:"if-config-熟悉又陌生的命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#if-config-熟悉又陌生的命令"}},[a._v("#")]),a._v(" if config 熟悉又陌生的命令")]),a._v(" "),r("ul",[r("li",[a._v("IP 地址是一个网卡在网络世界的通讯地址，相当于我们现实世界的门牌号码")])]),a._v(" "),r("ul",[r("li",[r("p",[a._v("将子网掩码和 IP 地址按位计算 AND，就可得到网络号")])]),a._v(" "),r("li",[r("p",[a._v("MAC 地址 一个网络包从一个地方传送到另外一个地方，除了需要确定到地址还需要定位功能。 mac 地址更像一个身份证是一个标示。 mac 地址的作用就是在同一个子网内可以通信。")])]),a._v(" "),r("li",[r("p",[r("strong",[a._v("ip 地址具有定位功能，mac 地址具有身份证功能; cidr 可以判断是否是本地人;ip 分为公有 ip 和私有 ip；出国门与这个有关")])])])]),a._v(" "),r("h2",{attrs:{id:"dhcp-与-pxe-ip-是怎么来的-又是怎么没的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dhcp-与-pxe-ip-是怎么来的-又是怎么没的"}},[a._v("#")]),a._v(" DHCP 与 PXE:IP 是怎么来的，又是怎么没的?")]),a._v(" "),r("h3",{attrs:{id:"如何配置-ip-地址"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何配置-ip-地址"}},[a._v("#")]),a._v(" 如何配置 ip 地址？")]),a._v(" "),r("ul",[r("li",[a._v("配置一个非本子网端的 ip 地址,无法发出请求")])]),a._v(" "),r("ul",[r("li",[a._v("配置一个跨网段的调用，它便不会直接将包发送到网络上，而 是企图将包发送到网关;不同系统的配置文件格 式不同，但是无非就是 CIDR、子网掩码、广播地址和网关地址")])]),a._v(" "),r("h3",{attrs:{id:"动态主机配置协议"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#动态主机配置协议"}},[a._v("#")]),a._v(" 动态主机配置协议")]),a._v(" "),r("ul",[r("li",[a._v("如果是数据中心里面的服务器，IP 一旦配置好，基本不会变")])]),a._v(" "),r("ul",[r("li",[a._v("DHCP 协议主要是用来给客户租用 IP 地址，和房产中介很像，要商谈、签约、续租，广 播还不能“抢单”; DHCP 协议能给客户推荐“装修队”PXE，能够安装操作系统，这个在云计算领域大有用 处。")])])])}),[],!1,null,null,null);t.default=v.exports}}]);