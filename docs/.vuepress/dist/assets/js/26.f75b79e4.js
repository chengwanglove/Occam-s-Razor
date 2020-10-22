(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{377:function(e,t,r){"use strict";r.r(t);var a=r(42),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"egg和react"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#egg和react"}},[e._v("#")]),e._v(" egg和react")]),e._v(" "),r("h2",{attrs:{id:"渲染模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#渲染模式"}},[e._v("#")]),e._v(" 渲染模式")]),e._v(" "),r("h3",{attrs:{id:"ssr-server-side-render"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssr-server-side-render"}},[e._v("#")]),e._v(" ssr (server side render)")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Egg + React 服务端 SSR 渲染模式。 服务端渲染指的是编写的 React 组件在 Node 服务端直接编译成完整的HTML, 然后直接输出给浏览器。MVVM 服务端渲染相比前端渲染，支持SEO，更快的首屏渲染，相比传统的模板引擎，更好的组件化，前后端模板共用。 同时 MVVM 数据驱动方式有着更快的开发效率。")])]),e._v(" "),r("li",[r("p",[e._v("React 服务端渲染构建是需要构建两份 JSBundle 文件。SSR 模式开发时，SSR 运行需要 Webapck 单独构建 target: node 和 target: web 的JSBundle，主要的差异在于 Webpack需要处理 require 机制以及磨平 Node 和浏览器运行环境的差异。服务端的JSBundle用来生产HTML，客户端的JSBundle需要script到文档，用来进行事件绑定等操作，也就是 React 的 hydrate 机制")])])]),e._v(" "),r("h4",{attrs:{id:"egg-webpack-本地开发构建文件是放到内存中-ssr-如何读取文件进行渲染"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#egg-webpack-本地开发构建文件是放到内存中-ssr-如何读取文件进行渲染"}},[e._v("#")]),e._v(" Egg Webpack 本地开发构建文件是放到内存中，SSR 如何读取文件进行渲染？")]),e._v(" "),r("p",[r("img",{attrs:{src:"/Occam-s-Razor.github.io/egg-react-ssr.jpg",alt:"create"}})]),e._v(" "),r("h4",{attrs:{id:"发布模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#发布模式"}},[e._v("#")]),e._v(" 发布模式")]),e._v(" "),r("ul",[r("li",[e._v("1.Webpack通过本地构建或者ci直接构建好服务端文件和客户端资源文件到磁盘\n2.Egg render直接读取本地文件, 然后渲染成 HTML\n3.根据 manfifest.json 文件注入 jss/css资源依赖注入  js和css可能上cdn\n4.模板渲染完成, 服务器输出HTML内容给浏览器")])]),e._v(" "),r("h3",{attrs:{id:"前端渲染模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前端渲染模式"}},[e._v("#")]),e._v(" 前端渲染模式")]),e._v(" "),r("ul",[r("li")])])}),[],!1,null,null,null);t.default=s.exports}}]);