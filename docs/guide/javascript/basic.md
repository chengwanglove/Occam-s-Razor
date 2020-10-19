# javascript基础

## 原型

### 构造函数创建对象

我们先使用构造函数创建一个对象：

```js
function Person() {

}
var person = new Person();
person.name = 'Kevin';
console.log(person.name) // Kevin
```

在这个例子中，Person 就是一个构造函数，我们使用 new 创建了一个实例对象 person。

很简单吧，接下来进入正题：

### prototype

每个函数都有一个 prototype 属性，就是我们经常在各种例子中看到的那个 prototype ，比如：

```js
function Person() {

}
// 虽然写在注释里，但是你要注意：
// prototype是函数才会有的属性
Person.prototype.name = 'Kevin';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name) // Kevin
console.log(person2.name) // Kevin
```

那这个函数的 prototype 属性到底指向的是什么呢？是这个函数的原型吗？

其实，函数的 prototype 属性指向了一个对象，这个对象正是调用该构造函数而创建的**实例**的原型，也就是这个例子中的 person1 和 person2 的原型。

那什么是原型呢？你可以这样理解：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。

让我们用一张图表示构造函数和实例原型之间的关系：

![构造函数和实例原型的关系图](https://github.com/mqyqingfeng/Blog/raw/master/Images/prototype1.png)

在这张图中我们用 Object.prototype 表示实例原型。

那么我们该怎么表示实例与实例原型，也就是 person 和 Person.prototype 之间的关系呢，这时候我们就要讲到第二个属性：

### \_\_proto\_\_

这是每一个JavaScript对象(除了 null )都具有的一个属性，叫\_\_proto\_\_，这个属性会指向该对象的原型。

为了证明这一点,我们可以在火狐或者谷歌中输入：

```js
function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
```

于是我们更新下关系图：

![实例与实例原型的关系图](https://github.com/mqyqingfeng/Blog/raw/master/Images/prototype2.png)

既然实例对象和构造函数都可以指向原型，那么原型是否有属性指向构造函数或者实例呢？

### constructor

指向实例倒是没有，因为一个构造函数可以生成多个实例，但是原型指向构造函数倒是有的，这就要讲到第三个属性：constructor﻿，每个原型都有一个 constructor 属性指向关联的构造函数。

为了验证这一点，我们可以尝试：

```js
function Person() {

}
console.log(Person === Person.prototype.constructor); // true
```

所以再更新下关系图：

![实例原型与构造函数的关系图](https://github.com/mqyqingfeng/Blog/raw/master/Images/prototype3.png)

综上我们已经得出：

```js
function Person() {

}

var person = new Person();

console.log(person.__proto__ == Person.prototype) // true
console.log(Person.prototype.constructor == Person) // true
// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person) === Person.prototype) // true
```

了解了构造函数、实例原型、和实例之间的关系，接下来我们讲讲实例和原型的关系：

### 实例与原型

当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。

举个例子：

```js
function Person() {

}

Person.prototype.name = 'Kevin';

var person = new Person();

person.name = 'Daisy';
console.log(person.name) // Daisy

delete person.name;
console.log(person.name) // Kevin
```

在这个例子中，我们给实例对象 person 添加了 name 属性，当我们打印 person.name 的时候，结果自然为 Daisy。

但是当我们删除了 person 的 name 属性时，读取 person.name，从 person 对象中找不到 name 属性就会从 person 的原型也就是 person.\_\_proto\_\_ ，也就是 Person.prototype中查找，幸运的是我们找到了  name 属性，结果为 Kevin。

但是万一还没有找到呢？原型的原型又是什么呢？

### 原型的原型

在前面，我们已经讲了原型也是一个对象，既然是对象，我们就可以用最原始的方式创建它，那就是：

```js
var obj = new Object();
obj.name = 'Kevin'
console.log(obj.name) // Kevin
```

所以原型对象是通过 Object 构造函数生成的，结合之前所讲，实例的 \_\_proto\_\_ 指向构造函数的 prototype ，所以我们再更新下关系图：

![原型的原型关系图](https://github.com/mqyqingfeng/Blog/raw/master/Images/prototype4.png)

### 原型链

那 Object.prototype 的原型呢？

null，我们可以打印：

```js
console.log(Object.prototype.__proto__ === null) // true
```

然而 null 究竟代表了什么呢？

引用阮一峰老师的 [《undefined与null的区别》](http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html) 就是：

> null 表示“没有对象”，即该处不应该有值。

所以 Object.prototype.\_\_proto\_\_ 的值为 null 跟 Object.prototype 没有原型，其实表达了一个意思。

所以查找属性的时候查到 Object.prototype 就可以停止查找了。

最后一张关系图也可以更新为：

![原型链示意图](https://github.com/mqyqingfeng/Blog/raw/master/Images/prototype5.png)

顺便还要说一下，图中由相互关联的原型组成的链状结构就是原型链，也就是蓝色的这条线。

### 补充

最后，补充三点大家可能不会注意的地方：

#### constructor

首先是 constructor 属性，我们看个例子：

```js
function Person() {

}
var person = new Person();
console.log(person.constructor === Person); // true
```

当获取 person.constructor 时，其实 person 中并没有 constructor 属性,当不能读取到constructor 属性时，会从 person 的原型也就是 Person.prototype 中读取，正好原型中有该属性，所以：

```js
person.constructor === Person.prototype.constructor
```

#### \_\_proto\_\_

其次是 \_\_proto\_\_ ，绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于 Person.prototype 中，实际上，它是来自于 Object.prototype ，与其说是一个属性，不如说是一个 getter/setter，当使用 obj.\_\_proto\_\_ 时，可以理解成返回了 Object.getPrototypeOf(obj)。

### 真的是继承吗？

最后是关于继承，前面我们讲到“每一个对象都会从原型‘继承’属性”，实际上，继承是一个十分具有迷惑性的说法，引用《你不知道的JavaScript》中的话，就是：

继承意味着复制操作，然而 JavaScript 默认并不会复制对象的属性，相反，JavaScript 只是在两个对象之间创建一个关联，这样，一个对象就可以通过委托访问另一个对象的属性和函数，所以与其叫继承，委托的说法反而更准确些。

## call and apply

一句话介绍 call：

>call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。

举个例子：

```js
var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

bar.call(foo); // 1
```

注意两点：

1. call 改变了 this 的指向，指向到 foo
2. bar 函数执行了

### 模拟实现第一步

那么我们该怎么模拟实现这两个效果呢？

试想当调用 call 的时候，把 foo 对象改造成如下：

```js
var foo = {
    value: 1,
    bar: function() {
        console.log(this.value)
    }
};

foo.bar(); // 1
```

这个时候 this 就指向了 foo，是不是很简单呢？

但是这样却给 foo 对象本身添加了一个属性，这可不行呐！

不过也不用担心，我们用 delete 再删除它不就好了~

所以我们模拟的步骤可以分为：

1. 将函数设为对象的属性
2. 执行该函数
3. 删除该函数

以上个例子为例，就是：

```js
// 第一步
foo.fn = bar
// 第二步
foo.fn()
// 第三步
delete foo.fn
```

fn 是对象的属性名，反正最后也要删除它，所以起成什么都无所谓。

根据这个思路，我们可以尝试着去写第一版的 **call2** 函数：

```js
// 第一版
Function.prototype.call2 = function(context) {
    // 首先要获取调用call的函数，用this可以获取
    context.fn = this;
    context.fn();
    delete context.fn;
}

// 测试一下
var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

bar.call2(foo); // 1
```

正好可以打印 1 哎！是不是很开心！(～￣▽￣)～

### 模拟实现第二步

最一开始也讲了，call 函数还能给定参数执行函数。举个例子：

```js
var foo = {
    value: 1
};

function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}

bar.call(foo, 'kevin', 18);
// kevin
// 18
// 1

```

注意：传入的参数并不确定，这可咋办？

不急，我们可以从 Arguments 对象中取值，取出第二个到最后一个参数，然后放到一个数组里。

比如这样：

```js
// 以上个例子为例，此时的arguments为：
// arguments = {
//      0: foo,
//      1: 'kevin',
//      2: 18,
//      length: 3
// }
// 因为arguments是类数组对象，所以可以用for循环
var args = [];
for(var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
}

// 执行后 args为 ["arguments[1]", "arguments[2]", "arguments[3]"]
```

不定长的参数问题解决了，我们接着要把这个参数数组放到要执行的函数的参数里面去。

```js
// 将数组里的元素作为多个参数放进函数的形参里
context.fn(args.join(','))
// (O_o)??
// 这个方法肯定是不行的啦！！！
```

也许有人想到用 ES6 的方法，不过 call 是 ES3 的方法，我们为了模拟实现一个 ES3 的方法，要用到ES6的方法，好像……，嗯，也可以啦。但是我们这次用 eval 方法拼成一个函数，类似于这样：

```js
eval('context.fn(' + args +')')
```

这里 args 会自动调用 Array.toString() 这个方法。

所以我们的第二版克服了两个大问题，代码如下：

```js
// 第二版
Function.prototype.call2 = function(context) {
    context.fn = this;
    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    eval('context.fn(' + args +')');
    delete context.fn;
}

// 测试一下
var foo = {
    value: 1
};

function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}

bar.call2(foo, 'kevin', 18); 
// kevin
// 18
// 1
```

(๑•̀ㅂ•́)و✧

### 模拟实现第三步

模拟代码已经完成 80%，还有两个小点要注意：

**1.this 参数可以传 null，当为 null 的时候，视为指向 window**

举个例子：

```js

var value = 1;

function bar() {
    console.log(this.value);
}

bar.call(null); // 1
```

虽然这个例子本身不使用 call，结果依然一样。

**2.函数是可以有返回值的！**

举个例子：

```js

var obj = {
    value: 1
}

function bar(name, age) {
    return {
        value: this.value,
        name: name,
        age: age
    }
}

console.log(bar.call(obj, 'kevin', 18));
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }
```

不过都很好解决，让我们直接看第三版也就是最后一版的代码：

```js
// 第三版
Function.prototype.call2 = function (context) {
    var context = context || window;
    context.fn = this;

    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }

    var result = eval('context.fn(' + args +')');

    delete context.fn
    return result;
}

// 测试一下
var value = 2;

var obj = {
    value: 1
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.call(null); // 2

console.log(bar.call2(obj, 'kevin', 18));
// 1
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }
```

到此，我们完成了 call 的模拟实现，给自己一个赞 ｂ（￣▽￣）ｄ

### apply的模拟实现

apply 的实现跟 call 类似，在这里直接给代码，代码来自于知乎 @郑航的实现：

```js
Function.prototype.apply = function (context, arr) {
    var context = Object(context) || window;
    context.fn = this;

    var result;
    if (!arr) {
        result = context.fn();
    }
    else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')')
    }

    delete context.fn
    return result;
}
```