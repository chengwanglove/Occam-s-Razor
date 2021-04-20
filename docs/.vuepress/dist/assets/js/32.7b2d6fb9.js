(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{378:function(a,t,e){"use strict";e.r(t);var n=e(41),l=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"解构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解构"}},[a._v("#")]),a._v(" 解构")]),a._v(" "),e("h2",{attrs:{id:"数组解构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数组解构"}},[a._v("#")]),a._v(" 数组解构")]),a._v(" "),e("ul",[e("li",[a._v("只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值 默认值必须严格相等于 undefined 才行")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let [a, b, c] = [1, 2, 3];\nlet [a = 1] = [null];  // null\nlet [foo, [[bar], baz]] = [1, [[2], 3]];\n\n// 默认值赋值\nlet [x = 1, y = x] = [];     // x=1; y=1\nlet [x = 1, y = x] = [2];    // x=2; y=2\nlet [x = 1, y = x] = [1, 2]; // x=1; y=2\nlet [x = y, y = 1] = [];\n\n")])])]),e("h2",{attrs:{id:"对象的解构赋值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对象的解构赋值"}},[a._v("#")]),a._v(" 对象的解构赋值")]),a._v(" "),e("ul",[e("li",[a._v("对象的属性没有次序，变量必须与属性同名，才能取到正确的值")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let { foo, bar } = { foo: 'aaa', bar: 'bbb' };\n")])])]),e("ul",[e("li",[a._v("对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 例一\nlet { log, sin, cos } = Math;\n\n// 例二\nconst { log } = console;\nlog('hello') // hello\n")])])]),e("ul",[e("li",[a._v("对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' }; // 先找到属性名 然后赋值给后面变量  后面是变量\n")])])]),e("ul",[e("li",[a._v("解构也可以用于嵌套结构的对象 注意前面是模式 不是变量")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let obj = {\n  p: [\n    'Hello',\n    { y: 'World' }\n  ]\n};\n\nlet { p: [x, { y }] } = obj;\nx // \"Hello\"\ny // \"World\"\n\n\nlet obj = {\n  p: [\n    'Hello',\n    { y: 'World' }\n  ]\n};\n\nlet { p, p: [x, { y }] } = obj;\n")])])]),e("ul",[e("li",[a._v("对象的解构赋值可以取到继承的属性（对象的属性值严格等于 undefined）")])]),a._v(" "),e("h2",{attrs:{id:"字符串的解构赋值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符串的解构赋值"}},[a._v("#")]),a._v(" 字符串的解构赋值")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("const [a, b, c, d, e] = 'hello';\n\nconst {length: len} = 'hello;\n\n")])])]),e("h2",{attrs:{id:"数值和布尔值的解构赋值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数值和布尔值的解构赋值"}},[a._v("#")]),a._v(" 数值和布尔值的解构赋值")]),a._v(" "),e("ul",[e("li",[a._v("只要等号右边的值不是对象或数组，就先将其转为对象。由于 undefined 和 null 无法转为对象，所以对它们进行解构赋值，都会报错")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let { prop: x } = undefined; // TypeError\nlet { prop: y } = null; // TypeError\n")])])]),e("h2",{attrs:{id:"函数的解构赋值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数的解构赋值"}},[a._v("#")]),a._v(" 函数的解构赋值")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("function move({x = 0, y = 0} = {}) {\n  return [x, y];\n}\n\nmove({x: 3, y: 8}); // [3, 8]\nmove({x: 3}); // [3, 0]\nmove({}); // [0, 0]\nmove(); // [0, 0]\n")])])]),e("h2",{attrs:{id:"圆括号问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#圆括号问题"}},[a._v("#")]),a._v(" 圆括号问题")]),a._v(" "),e("ul",[e("li",[a._v("不能使用圆括号问题 变量声明语句 函数参数 赋值语句 可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号")])]),a._v(" "),e("h2",{attrs:{id:"用途"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用途"}},[a._v("#")]),a._v(" 用途")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("1.交换变量的值\nlet x = 1;\nlet y = 2;\n\n[x, y] = [y, x];\n\n2. 从函数返回多个值\n\n// 返回一个数组\n\nfunction example() {\n  return [1, 2, 3];\n}\nlet [a, b, c] = example();\n\n// 返回一个对象\n\nfunction example() {\n  return {\n    foo: 1,\n    bar: 2\n  };\n}\nlet { foo, bar } = example();\n\n// 函数参数的定义 函数参数的默认值 函数参数的定义 遍历map结构 输出模块的指定方法\n")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);