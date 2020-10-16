(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{366:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"域名服务器-dns-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#域名服务器-dns-模块"}},[t._v("#")]),t._v(" 域名服务器 dns 模块")]),t._v(" "),a("p",[t._v("DNS（Domain Name System，域名系统），DNS 协议运行在 UDP 协议之上，使用端口号 53。DNS 是因特网上作为域名和 IP 地址相互映射的一个分布式数据库，能够使用户更方便的访问互联网，而不用去记住能够被机器直接读取的 IP 数串。简单的说，就是把域名（网址）解析成对应的 IP 地址。Node.js 的 dns 模块，提供了 DNS 解析功能。当使用 dns 模块中的 net.connect(80, 'github.com/webfansplz')方法 或 http 模块的 http.get({ host: 'github.com/webfansplz' })方法时，在其底层会使用 dns 模块中的 dns.lookup 方法进行域名解析。")]),t._v(" "),a("h3",{attrs:{id:"dns-模块的两种域名解析方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-模块的两种域名解析方式"}},[t._v("#")]),t._v(" dns 模块的两种域名解析方式")]),t._v(" "),a("h4",{attrs:{id:"_1-使用操作系统底层的-dns-服务解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用操作系统底层的-dns-服务解析"}},[t._v("#")]),t._v(" 1.使用操作系统底层的 DNS 服务解析")]),t._v(" "),a("p",[t._v("使用操作系统底层的 DNS 服务进行域名解析时，不需要连接到网络仅使用系统自带 DNS 解析功能。这个功能由 dns.lookup()方法实现。")]),t._v(" "),a("p",[t._v("dns.lookup(hostname[, options], callback)：将一个域名（如：'www.baidu.com'）解析为第一个找到的 A 记录（IPv4）或 AAAA 记录（IPv6）")]),t._v(" "),a("p",[t._v("hostname 表示要解析的域名。")]),t._v(" "),a("p",[t._v("options 可以是一个对象或整数。如果没有提供 options 参数，则 IP v4 和 v6 地址都可以。如果 options 是整数，则必须是 4 或 6。如果 options 是对象时，会包含以下两个可选参数：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("family：可选，IP 版本。如果提供，必须是 4 或 6。不提供则，IP v4 和 v6 地址都可以")])]),t._v(" "),a("li",[a("p",[t._v("hints：可选。如果提供，可以是一个或者多个 getaddrinfo 标志。若不提供，则没有标志会传给 getaddrinfo。")])])]),t._v(" "),a("p",[t._v("callback 回调函数，参数包含(err, address, family)。出错时，参数 err 是 Error 对象。address 参数表示 IP v4 或 v6 地址。family 参数是 4 或 6，表示 address 协议版本。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dns'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("www.github.com")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" err\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'地址: %j 地址族: IPv%s'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" family"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 地址: "13.229.188.59" 地址族: IPv4')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"_2-连接到-dns-服务器解析域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-连接到-dns-服务器解析域名"}},[t._v("#")]),t._v(" 2.连接到 DNS 服务器解析域名")]),t._v(" "),a("p",[t._v("在 dns 模块中，除 dns.lookup()方法外都是使用 DNS 服务器进行域名解析，解析时需要连接到网络。")]),t._v(" "),a("p",[t._v("dns.resolve(hostname[, rrtype], callback)：将一个域名（如 'www.baidu.com'）解析为一个 rrtype 指定类型的数组")]),t._v(" "),a("p",[t._v("hostname 表示要解析的域名。")]),t._v(" "),a("p",[t._v("rrtype 有以下可用值:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("rrtype")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("records 包含")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("结果的类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("快捷方法")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("'A'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("IPv4 地址 (默认)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("dns.resolve4()")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("'AAAA'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("IPv6 地址")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("dns.resolve6()")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("'ANY'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("任何记录")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("dns.resolveAny()")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("'CNAME'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("规范名称记录")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("dns.resolveCname()")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("'MX'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("邮件交换记录")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("dns.resolveMx()")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("'NAPTR'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("名称权限指针记录")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("dns.resolveNaptr()")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("'NS'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("名称服务器记录")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("dns.resolveNs()")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("'PTR'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("指针记录")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("dns.resolvePtr()")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("'SOA'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("开始授权记录")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("dns.resolveSoa()")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("'SRV'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("服务记录")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("dns.resolveSrv()")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("'TXT'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("文本记录")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string[]")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("dns.resolveTxt()")])])])]),t._v(" "),a("p",[t._v("callback 回调函数，参数包含(err, addresses)。出错时，参数 err 是 Error 对象。addresses 根据记录类型的不同返回值也不同。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dns'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'www.baidu.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" addresses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" err\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("IP地址 : ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("addresses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// IP地址 : ["163.177.151.110","163.177.151.109"]')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or")]),t._v("\n\ndns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'www.baidu.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" addresses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" err\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("IP地址 : ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("addresses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// IP地址 : ["163.177.151.110","163.177.151.109"]')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"反向-dns-查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反向-dns-查询"}},[t._v("#")]),t._v(" 反向 DNS 查询")]),t._v(" "),a("h4",{attrs:{id:"将-ipv4-或-ipv6-地址解析为主机名数组。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将-ipv4-或-ipv6-地址解析为主机名数组。"}},[t._v("#")]),t._v(" 将 IPv4 或 IPv6 地址解析为主机名数组。")]),t._v(" "),a("p",[t._v("使用 getnameinfo 方法将传入的地址和端口解析为域名和服务")]),t._v(" "),a("p",[t._v("dns.reverse(ip, callback)")]),t._v(" "),a("p",[t._v("ip 表示要反向解析的 IP 地址。")]),t._v(" "),a("p",[t._v("callback 回调函数，参数包含(err, domains)。出错时，参数 err 是 Error 对象。domains 解析后的域名数组。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("dns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8.8.8.8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" domains")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" err\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("domains"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [ 'dns.google' ]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("dns.lookupService(address, port, callback)")]),t._v(" "),a("p",[t._v("address 表示要解析的 IP 地址字符串。")]),t._v(" "),a("p",[t._v("port 表示要解析的端口号。")]),t._v(" "),a("p",[t._v("callback 回调函数，参数包含(err, hostname, service)。出错时，参数 err 是 Error 对象。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("dns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookupService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'127.0.0.1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" err\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'主机名：%s，服务类型：%s'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主机名：localhost，服务类型：http")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);