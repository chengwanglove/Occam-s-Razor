# 核心概念

## entry 

* 依赖图的⼊口是entry 可以是对象

```
module.exports = {entry: {app: './src/app.js',adminApp: './src/adminApp.js'}};
```
## output 

* Output⽤用来告诉webpack如何将编译后的⽂文件输出到磁盘

```
output : {
    filename: '[name][chunkhash].js',
    path:'',
    publicPath: '',
}
```

## loaders 


* webpack开箱即用只支持JS 和JSON 两种文件类型，通过Loaders 去支持其它文件类型并且把它们转化成有效的模块，并且可以添加到依赖图中


![create](/Occam-s-Razor.github.io/loader.jpg)

### 用法

* test 指定匹配规则 loader名称  loader数组 从右到左执行


### 资源解析

* es6 react babel-loader  .babelrc babel-preset 
* css css-loader style-loader less-loader
* picture file-loader url-loader base64设置



## plugins 


插件⽤用于bundle⽂文件的优化，资源管理理和环境变量量注⼊入


![create](/Occam-s-Razor.github.io/plugins.jpg)

## mode 

* 分为三种环境 production development none 

## webpack 文件监听

* --watch watchOptions 

### 热更新 webpack-dev-server   HotModuleReplacementPlugin 插件

![create](/Occam-s-Razor.github.io/wds.jpg)

## 文件指纹

* hash 整个应用

* Chunkhash js内容

* Contenthash css内容


## 代码压缩

* html html-webpack-plugin css optimize-css-assets-webpack-plugin js uglifyjs-webpack-plugin





