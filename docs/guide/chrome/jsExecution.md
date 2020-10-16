# javascript执行机制

## js执行上下文

* 只有理解了 JavaScrip 的执行上下文，你才能更好地理解 JavaScript 语言本身,比如变量提升、作用域和闭包等.


### 变量提升

```
showName()
console.log(myname)
var myname = '极客时间'
function showName() {   
  console.log('函数 showName 被执行');
}
当执行到第 1 行的时候，由于函数 showName 还没有定义，所以执行应该会报错；同样执行第 2 行的时候，由于变量 myname 函数也未定义，所以同样也会报错。
```

![create](/Occam-s-Razor.github.io/complie.jpg)


#### 编译阶段

* 变量提升部分的代码。


#### 总结
JavaScript 代码执行过程中，需要先做变量提升，而之所以需要实现变量提升，是因为JavaScript 代码在执行之前需要先编译。在编译阶段，变量和函数会被存放到变量环境中，变量的默认值会被设置为undefined；在代码执行阶段，JavaScript 引擎会从变量环境中去查找自定义的变量和函数。如果在编译阶段，存在两个相同的函数，那么最终存放在变量环境中的是最后定义的那个，这是因为后定义的会覆盖掉之前定义的  <strong>javascript的执行机制 先编译再执行</strong>。