# 进阶webpack 

## 自动清除构建产物

```
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

new CleanWebpackPlugin()
```

## 自动补全css3前缀

* autoprefixer 后置处理器

## 移动端px-2-rem

* px转化为rem 配合wrap-resize

## 资源内联

* 代码层面 页面框架的初始化脚本  上报相关打点 css内敛避免页面闪动
* 请求层面 base64

* js内联  raw-loader
* css内联  style-loader 或者html-inline-css-webpack-plugin


## 多页面应用打包

* 动态entry 和 创建html-webpack-plugin的数量

## source map 

* 开发环境开启 生产环境关闭  inline-source-map

## 提取页面公共资源

* 基础库分离  cdn引入 或者 html-webpack-external-plugin
* 利用splitChunksPlugin

## tree-shaking 

* 必须是es6方法 不能是cjs deadcode 代码不会执行 结果不会用到 只会影响死变量

## scope hositing 

* 包含大量闭包代码
* 租用栈过多 内存开销过大

* webpack 模块机制分析   减少声明代码和内存开销

* 如何开启 production  默认开启必须es6 不能cjs

## 代码分割和动态import 
* 使用场景 抽离相同代码到一个共享块  脚本懒加载 
* 实现方式  cjs require.ensure  动态import (需要babel转化)

* babel插件  plugin-syntax-dynamic-import

## eslint的必要性

* ci和cd集成
* webpack集成

```
方案一
husky 开发阶段增加precommit 钩子 lint-staged 

方案2
eslint-loader
```

## webpack打包基础库和组件

* 压缩未压缩版 导出包的名称 发布npm 包的入口名称 

## webpack srr打包

* 和egg配合使用
* 客户端渲染 html -> css -> js -> data -> 渲染后的html
* 服务端： 所有模板等资源都存储在服务端内⽹网机器器拉取数据更更快⼀一个HTML 返回所有数据

![create](/Occam-s-Razor.github.io/ssr.jpg)
![create](/Occam-s-Razor.github.io/ssrrender.jpg)

* 优点： seo好 减少白屏时间

## 优化构建命令行显示日志

* stats: 'errors-only' 只有发生错误出输出  none 不输出 minimal 发生错误或者新编译时输出 verbose 全部输出 normal 标准输出

* new FriendlyErrorsWebpackPlugin() 插件来日志的输出

## 构建异常中断处理

plugins: [function() {this.hooks.done.tap('done', (stats) => {if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') == -1){console.log('build error');process.exit(1);}})}]compiler 在每次构建结束后会触发done这个hookprocess.exit主动处理理构建报错

