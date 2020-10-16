# javascript执行机制

## js执行上线文

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
