(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{365:function(t,e,a){"use strict";a.r(e);var v=a(42),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"浏览器调试技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器调试技巧"}},[t._v("#")]),t._v(" 浏览器调试技巧")]),t._v(" "),a("blockquote",[a("p",[t._v("Chrome 开发者工具（简称 DevTools）是一套 Web 开发调试工具,内嵌于 Google Chrome 浏览器中。DevTools 使开发者更加深入的了解浏览器内部以及他们编写的应用。通过使用 DevTools,可以更加高效的定位页面布局问题,设置 JavaScript 断点并且更好的理解代码优化。")])]),t._v(" "),a("blockquote",[a("p",[t._v("本文分享 24 个 Chrome 调试技巧和一些快捷键,希望能帮你进一步了解 Chrome DevTools ～")])]),t._v(" "),a("h2",{attrs:{id:"_1-控制台中直接访问页面元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-控制台中直接访问页面元素"}},[t._v("#")]),t._v(" 1. 控制台中直接访问页面元素")]),t._v(" "),a("p",[t._v("在元素面板选择一个元素,然后在控制台输入"),a("code",[t._v("$0")]),t._v(",就会在控制台中得到刚才选中的元素。如果页面中已经包含了 jQuery,你也可以使用"),a("code",[t._v("$($0)")]),t._v("来进行选择。")]),t._v(" "),a("p",[t._v("你也可以反过来,在控制台输出的 DOM 元素上右键选择 Reveal in Elements Panel 来直接在 DOM 树种查看。")]),t._v(" "),a("h2",{attrs:{id:"_2-访问最近的控制台结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-访问最近的控制台结果"}},[t._v("#")]),t._v(" 2. 访问最近的控制台结果")]),t._v(" "),a("p",[t._v("在控制台输入"),a("code",[t._v("$_")]),t._v("可以获控制台最近一次的输出结果。")]),t._v(" "),a("h2",{attrs:{id:"_3-访问最近选择的元素和对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-访问最近选择的元素和对象"}},[t._v("#")]),t._v(" 3. 访问最近选择的元素和对象")]),t._v(" "),a("p",[t._v("控制台会存储最近 5 个被选择的元素和对象。当你在元素面板选择一个元素或在分析器面板选择一个对象,记录都会存储在栈中。 可以使用"),a("code",[t._v("$x")]),t._v("来操作历史栈,x 是从 0 开始计数的,所以"),a("code",[t._v("$0")]),t._v(" 表示最近选择的元素,"),a("code",[t._v("$4")]),t._v(" 表示最后选择的元素。")]),t._v(" "),a("h2",{attrs:{id:"_4-选择元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-选择元素"}},[t._v("#")]),t._v(" 4. 选择元素")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("$()")]),t._v(" - 返回满足指定 CSS 规则的第一个元素，此方法为 document.querySelector()的简化。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("$$()")]),t._v(" - 返回满足指定 CSS 规则的所有元素，此方法为 querySelectorAll()的简化。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("$x()")]),t._v(" - 返回满足指定 XPath 的所有元素。")])])]),t._v(" "),a("h2",{attrs:{id:"_5-使用-console-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-使用-console-table"}},[t._v("#")]),t._v(" 5. 使用 console.table")]),t._v(" "),a("p",[t._v("该命令支持以表格的形式输出日志信息。打印复杂信息时尝试使用 console.table 来替代 console.log 会更加清晰。")]),t._v(" "),a("h2",{attrs:{id:"_6-使用-console-dir-可简写为-dir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-使用-console-dir-可简写为-dir"}},[t._v("#")]),t._v(" 6. 使用 console.dir,可简写为 dir")]),t._v(" "),a("p",[t._v("console.dir(object)/dir(object) 命令可以列出参数 object 的所有对象属性。")]),t._v(" "),a("h2",{attrs:{id:"_7-复制-copy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-复制-copy"}},[t._v("#")]),t._v(" 7. 复制 copy")]),t._v(" "),a("p",[t._v("你可以通过 copy 方法在控制台里复制你想要的东西。")]),t._v(" "),a("h2",{attrs:{id:"_8-获取对象键值-keys-object-values-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-获取对象键值-keys-object-values-object"}},[t._v("#")]),t._v(" 8. 获取对象键值 keys(object)/values(object)")]),t._v(" "),a("h2",{attrs:{id:"_9-函数监听器-monitor-function-unmonitor-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-函数监听器-monitor-function-unmonitor-function"}},[t._v("#")]),t._v(" 9. 函数监听器 monitor(function)/unmonitor(function)")]),t._v(" "),a("p",[t._v("monitor(function),当调用指定的函数时,会将一条消息记录到控制台,该消息指示调用时传递给该函数的函数名和参数。")]),t._v(" "),a("p",[t._v("使用 unmonitor(函数)停止对指定函数的监视。")]),t._v(" "),a("h2",{attrs:{id:"_10-事件监听器-monitorevents-object-events-unmonitorevents-object-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-事件监听器-monitorevents-object-events-unmonitorevents-object-events"}},[t._v("#")]),t._v(" 10. 事件监听器 monitorEvents(object[, events])/unmonitorEvents(object[, events])")]),t._v(" "),a("p",[t._v("monitorEvents(object[, events]),当指定的对象上发生指定的事件之一时,事件对象将被记录到控制台。事件类型可以指定为单个事件或事件数组。")]),t._v(" "),a("p",[t._v("unmonitorevent (object[， events])停止监视指定对象和事件的事件。")]),t._v(" "),a("h2",{attrs:{id:"_11-耗时监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-耗时监控"}},[t._v("#")]),t._v(" 11. 耗时监控")]),t._v(" "),a("p",[t._v("通过调用 time()可以开启计时器。你必须传入一个字符串参数来唯一标记这个计时器的 ID。当你要结束计时的时候可以调用 timeEnd()，并且传入指定的名字。计时结束后控制台会打印计时器的名字和具体的时间。")]),t._v(" "),a("h2",{attrs:{id:"_12-分析程序性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-分析程序性能"}},[t._v("#")]),t._v(" 12. 分析程序性能")]),t._v(" "),a("p",[t._v("在 DevTools 窗口控制台中，调用 console.profile()开启一个 JavaScript CPU 分析器.结束分析器直接调用 console.profileEnd().")]),t._v(" "),a("p",[t._v("具体的性能分析会在分析器面板中")]),t._v(" "),a("h2",{attrs:{id:"_13-统计表达式执行次数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-统计表达式执行次数"}},[t._v("#")]),t._v(" 13. 统计表达式执行次数")]),t._v(" "),a("p",[t._v("count()方法用于统计表达式被执行的次数,它接受一个字符串参数用于标记不同的记号。如果两次传入相同的字符串,该方法就会累积计数。")]),t._v(" "),a("h2",{attrs:{id:"_14-清空控制台历史记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-清空控制台历史记录"}},[t._v("#")]),t._v(" 14. 清空控制台历史记录")]),t._v(" "),a("p",[t._v("可以通过下面的方式清空控制台历史:")]),t._v(" "),a("ul",[a("li",[t._v("在控制台右键，或者按下 Ctrl 并单击鼠标，选择 Clear Console。")]),t._v(" "),a("li",[t._v("在脚本窗口输入 clear()执行。")]),t._v(" "),a("li",[t._v("在 JavaScript 脚本中调用 console.clear()。")]),t._v(" "),a("li",[t._v("使用快捷键 Cmd + K (Mac) Ctrl + L (Windows and Linux)。")])]),t._v(" "),a("h2",{attrs:{id:"_15-异步操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-异步操作"}},[t._v("#")]),t._v(" 15. 异步操作")]),t._v(" "),a("p",[t._v("async/await 使得异步操作变得更加容易和可读。唯一的问题在于 await 需要在 async 函数中使用。Chrome DevTools 支持直接使用 await。")]),t._v(" "),a("h2",{attrs:{id:"_16-debugger-断点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16-debugger-断点"}},[t._v("#")]),t._v(" 16. debugger 断点")]),t._v(" "),a("p",[t._v("有时候我们需要打断点进行单步调试,一般会选择在浏览器控制台直接打断点,但这样还需要先去 Sources 里面找到源码,然后再找到需要打断点的那行代码,比较麻烦。")]),t._v(" "),a("p",[t._v("使用 debugger 关键词,我们可以直接在源码中定义断点,方便很多。")]),t._v(" "),a("h2",{attrs:{id:"_17-截图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17-截图"}},[t._v("#")]),t._v(" \b17. 截图")]),t._v(" "),a("p",[t._v("我们经常需要截图,Chrome DevTools 提供了 4 种截图方式,基本覆盖了我们的需求场景,快捷键 ctrl+shift+p ,打开 Command Menu,输入 screenshot,可以看到以下 4 个选项:")]),t._v(" "),a("p",[t._v("去试试吧,很香!")]),t._v(" "),a("h2",{attrs:{id:"_18-切换主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_18-切换主题"}},[t._v("#")]),t._v(" 18. 切换主题")]),t._v(" "),a("p",[t._v("Chrome 提供了 亮&暗 两种主题,当你视觉疲劳的时候,可以 switch 哦, 快捷键 ctrl+shift+p ,打开 Command Menu,输入 theme ,即可选择切换")]),t._v(" "),a("h2",{attrs:{id:"_19-复制-fetch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_19-复制-fetch"}},[t._v("#")]),t._v(" 19. 复制 Fetch")]),t._v(" "),a("p",[t._v("在 Network 标签下的所有的请求,都可以复制为一个完整的 Fetch 请求的代码。")]),t._v(" "),a("h2",{attrs:{id:"_20-重写-overrides"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_20-重写-overrides"}},[t._v("#")]),t._v(" 20. 重写 Overrides")]),t._v(" "),a("p",[t._v("在 Chrome DevTools 上调试 css 或 JavaScript 时,修改的属性值在重新刷新页面时,所有的修改都会被重置。")]),t._v(" "),a("p",[t._v("如果你想把修改的值保存下来,刷新页面的时候不会被重置,那就看看下面这个特性（Overrides）吧。Overrides 默认是关闭的,需要手动开启,开启的步骤如下。")]),t._v(" "),a("p",[t._v("开启的操作:")]),t._v(" "),a("p",[t._v("打开 Chrome DevTools 的 Sources 标签页\n选择 Overrides 子标签\n选择 + Select folder for overrides,来为 Overrides 设置一个保存重写属性的目录")]),t._v(" "),a("h2",{attrs:{id:"_21-实时表达式-live-expression"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_21-实时表达式-live-expression"}},[t._v("#")]),t._v(" 21. 实时表达式 Live Expression")]),t._v(" "),a("p",[t._v("从 chrome70 起,我们可以在控制台上方可以放一个动态表达式,用于实时监控它的值。Live Expression 的执行频率是 250 毫秒。")]),t._v(" "),a("p",[t._v('点击 "Create Live Expression" 眼睛图标,打开动态表达式界面,输入要监控的表达式')]),t._v(" "),a("h2",{attrs:{id:"_22-检查动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_22-检查动画"}},[t._v("#")]),t._v(" 22. 检查动画")]),t._v(" "),a("p",[t._v("Chrome DevTools 动画检查器有两个主要用途。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("检查动画。您希望慢速播放、重播或检查动画组的源代码。")])]),t._v(" "),a("li",[a("p",[t._v("修改动画。您希望修改动画组的时间、延迟、持续时间或关键帧偏移。 当前不支持编辑贝塞尔曲线和关键帧。")])])]),t._v(" "),a("p",[t._v("动画检查器支持 CSS 动画、CSS 过渡和网络动画。当前不支持 requestAnimationFrame 动画。")]),t._v(" "),a("p",[t._v("快捷键 ctrl+shift+p ,打开 Command Menu,键入 Drawer: Show Animations。")]),t._v(" "),a("h2",{attrs:{id:"_23-滚动到视图区域-scroll-into-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_23-滚动到视图区域-scroll-into-view"}},[t._v("#")]),t._v(" 23. 滚动到视图区域 Scroll into view")]),t._v(" "),a("h2",{attrs:{id:"_24-工作区编辑文件-edit-files-with-workspaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_24-工作区编辑文件-edit-files-with-workspaces"}},[t._v("#")]),t._v(" 24. 工作区编辑文件 Edit Files With Workspaces")]),t._v(" "),a("p",[t._v("工作空间使您能够将在 Chrome Devtools 中进行的更改保存到计算机上相同文件的本地副本。")]),t._v(" "),a("p",[t._v("进入 Sources Menu, Filesystem 下 点击 Add folder to workspace 添加要同步的工作目录")]),t._v(" "),a("h1",{attrs:{id:"快捷键"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快捷键"}},[t._v("#")]),t._v(" 快捷键")]),t._v(" "),a("h2",{attrs:{id:"访问-devtools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问-devtools"}},[t._v("#")]),t._v(" 访问 DevTools")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("访问 DevTools")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Windows")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Mac")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("打开 Developer Tools (上一次停靠菜单)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("F12、Ctrl + Shift + I")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Cmd + Opt + I")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("打开/切换检查元素模式和浏览器窗口")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Ctrl + Shift + C")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Cmd + Shift + C")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("打开 Developer Tools 并聚焦到控制台")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Ctrl + Shift + J")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Cmd + Opt + J")])])])]),t._v(" "),a("h2",{attrs:{id:"全局键盘快捷键"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局键盘快捷键"}},[t._v("#")]),t._v(" 全局键盘快捷键")]),t._v(" "),a("p",[t._v("下列键盘快捷键可以在所有 DevTools 面板中使用:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("全局键盘快捷键")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Windows")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Mac")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("下一个面板")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Ctrl + ]")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Cmd + ]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("上一个面板")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Ctrl + [")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Cmd + [")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("更改 DevTools 停靠位置")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Ctrl + Shift + D")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Cmd + Shift + D")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("打开 Device Mode")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Ctrl + Shift + M")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Cmd + Shift + M")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("切换控制台")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Esc")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Esc")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("刷新页面")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("F5、Ctrl + R")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Cmd + R")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("刷新忽略缓存内容的页面")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Ctrl + F5、Ctrl + Shift + R")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Cmd + Shift + R")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("在当前文件或面板中搜索文本")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Ctrl + F")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Cmd + F")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("在所有源中搜索文本")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Ctrl + Shift + F")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Cmd + Opt + F")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("按文件名搜索（除了在 Timeline 上）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Ctrl + O、Ctrl + P")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Cmd + O、Cmd + P")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("放大（焦点在 DevTools 中时）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Ctrl + +")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Cmd + Shift + +")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("缩小")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Ctrl + -")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Cmd + Shift + -")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("恢复默认文本大小")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Ctrl + 0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Cmd + 0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("打开 command 菜单")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Ctrl + Shift + P")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Cmd + Shift + P")])])])]),t._v(" "),a("h2",{attrs:{id:"控制台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制台"}},[t._v("#")]),t._v(" 控制台")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("控制台快捷键")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Windows")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Mac")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("上一个命令/行")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("向上键")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("向上键")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("下一个命令/行")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("向下键")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("向下键")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("聚焦到控制台")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Ctrl + `")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Ctrl + `")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("清除控制台")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Ctrl + L")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Cmd + K")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("多行输入")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Shift + Enter")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Shift + Enter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("执行")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Enter")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Return")])])])])])}),[],!1,null,null,null);e.default=_.exports}}]);