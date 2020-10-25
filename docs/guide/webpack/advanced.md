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