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


## 调用栈


### js引擎编译并创建执行上下文

* 全局代码，只有一份全局执行上下文

* 调用一个函数时，会创建一个函数执行的上下文，函数执行结束后，上下文销毁

* eval后也会创建一个函数执行上下文，执行完毕后，销毁。


### 作用

* 调用栈就是用来管理函数调用关系的一种数据结构.

* 函数调用 和 栈数据结构


```
var a = 2
function add(b,c){  
  return b+c
}
function addAll(b,c){
    var d = 10;
    result = add(b,c);
    return = a+result+d;
}
addAll(3,6);
```

## 块极作用域

* 块级作用域就是通过词法环境的栈结构来实现的，而变量提升是通过变量环境来实现，通过这两者的结合，JavaScript 引擎也就同时支持了变量提升和块级作用域了


* 暂时性死区 变量在未创建之间使用
```
let myname = a;

{
  console.log('------');
  let myname = 'b';
}

```

## 作用域链和闭包

* 作用域链是词法作用域 和声明位置有关  词法作用域是代码阶段就决定好的，和函数是怎么调用的没有关系。


### 块级作用域中的变量查找
![create](/Occam-s-Razor.github.io/chain.jpg)

### 闭包

* 在 JavaScript 中，根据词法作用域的规则，内部函数总是可以访问其外部函数中声明的变量，当通过调用一个外部函数返回一个内部函数后，即使该外部函数已经执行结束了，但是内部函数引用外部函数的变量依然保存, 在内存中，我们就把这些变量的集合称为闭包


## this执行机制


* 当函数作为对象的方法调用时，函数中的 this 就是该对象；2.
* 当函数被正常调用时，在严格模式下，this 值是 undefined，非严格模式下 this 指向的是全局对象 window；
* 嵌套函数中的 this 不会继承外层函数的 this 值。