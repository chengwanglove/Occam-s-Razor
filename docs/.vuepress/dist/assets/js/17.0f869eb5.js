(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{368:function(a,t,s){"use strict";s.r(t);var r=s(42),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"javascript执行机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript执行机制"}},[a._v("#")]),a._v(" javascript执行机制")]),a._v(" "),s("h2",{attrs:{id:"js执行上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js执行上下文"}},[a._v("#")]),a._v(" js执行上下文")]),a._v(" "),s("ul",[s("li",[a._v("只有理解了 JavaScrip 的执行上下文，你才能更好地理解 JavaScript 语言本身,比如变量提升、作用域和闭包等.")])]),a._v(" "),s("h3",{attrs:{id:"变量提升"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量提升"}},[a._v("#")]),a._v(" 变量提升")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("showName()\nconsole.log(myname)\nvar myname = '极客时间'\nfunction showName() {   \n  console.log('函数 showName 被执行');\n}\n当执行到第 1 行的时候，由于函数 showName 还没有定义，所以执行应该会报错；同样执行第 2 行的时候，由于变量 myname 函数也未定义，所以同样也会报错。\n")])])]),s("p",[s("img",{attrs:{src:"/Occam-s-Razor.github.io/complie.jpg",alt:"create"}})]),a._v(" "),s("h4",{attrs:{id:"编译阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译阶段"}},[a._v("#")]),a._v(" 编译阶段")]),a._v(" "),s("ul",[s("li",[a._v("变量提升部分的代码。")])]),a._v(" "),s("h4",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),s("p",[a._v("JavaScript 代码执行过程中，需要先做变量提升，而之所以需要实现变量提升，是因为JavaScript 代码在执行之前需要先编译。在编译阶段，变量和函数会被存放到变量环境中，变量的默认值会被设置为undefined；在代码执行阶段，JavaScript 引擎会从变量环境中去查找自定义的变量和函数。如果在编译阶段，存在两个相同的函数，那么最终存放在变量环境中的是最后定义的那个，这是因为后定义的会覆盖掉之前定义的  "),s("strong",[a._v("javascript的执行机制 先编译再执行")]),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"调用栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调用栈"}},[a._v("#")]),a._v(" 调用栈")]),a._v(" "),s("h3",{attrs:{id:"js引擎编译并创建执行上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js引擎编译并创建执行上下文"}},[a._v("#")]),a._v(" js引擎编译并创建执行上下文")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("全局代码，只有一份全局执行上下文")])]),a._v(" "),s("li",[s("p",[a._v("调用一个函数时，会创建一个函数执行的上下文，函数执行结束后，上下文销毁")])]),a._v(" "),s("li",[s("p",[a._v("eval后也会创建一个函数执行上下文，执行完毕后，销毁。")])])]),a._v(" "),s("h3",{attrs:{id:"作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[a._v("#")]),a._v(" 作用")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("调用栈就是用来管理函数调用关系的一种数据结构.")])]),a._v(" "),s("li",[s("p",[a._v("函数调用 和 栈数据结构")])])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("var a = 2\nfunction add(b,c){  \n  return b+c\n}\nfunction addAll(b,c){\n    var d = 10;\n    result = add(b,c);\n    return = a+result+d;\n}\naddAll(3,6);\n")])])]),s("h2",{attrs:{id:"块极作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#块极作用域"}},[a._v("#")]),a._v(" 块极作用域")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("块级作用域就是通过词法环境的栈结构来实现的，而变量提升是通过变量环境来实现，通过这两者的结合，JavaScript 引擎也就同时支持了变量提升和块级作用域了")])]),a._v(" "),s("li",[s("p",[a._v("暂时性死区 变量在未创建之间使用")])])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("let myname = a;\n\n{\n  console.log('------');\n  let myname = 'b';\n}\n\n")])])]),s("h2",{attrs:{id:"作用域链和闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域链和闭包"}},[a._v("#")]),a._v(" 作用域链和闭包")]),a._v(" "),s("ul",[s("li",[a._v("作用域链是词法作用域 和声明位置有关  词法作用域是代码阶段就决定好的，和函数是怎么调用的没有关系。")])]),a._v(" "),s("h3",{attrs:{id:"块级作用域中的变量查找"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#块级作用域中的变量查找"}},[a._v("#")]),a._v(" 块级作用域中的变量查找")]),a._v(" "),s("p",[s("img",{attrs:{src:"/Occam-s-Razor.github.io/chain.jpg",alt:"create"}})]),a._v(" "),s("h3",{attrs:{id:"闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[a._v("#")]),a._v(" 闭包")]),a._v(" "),s("ul",[s("li",[a._v("在 JavaScript 中，根据词法作用域的规则，内部函数总是可以访问其外部函数中声明的变量，当通过调用一个外部函数返回一个内部函数后，即使该外部函数已经执行结束了，但是内部函数引用外部函数的变量依然保存, 在内存中，我们就把这些变量的集合称为闭包")])]),a._v(" "),s("h2",{attrs:{id:"this执行机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this执行机制"}},[a._v("#")]),a._v(" this执行机制")]),a._v(" "),s("ul",[s("li",[a._v("当函数作为对象的方法调用时，函数中的 this 就是该对象；2.")]),a._v(" "),s("li",[a._v("当函数被正常调用时，在严格模式下，this 值是 undefined，非严格模式下 this 指向的是全局对象 window；")]),a._v(" "),s("li",[a._v("嵌套函数中的 this 不会继承外层函数的 this 值。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);