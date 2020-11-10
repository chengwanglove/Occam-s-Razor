# 对象的拓展

## 对象的属性

- Object.getOwnPropertyDescriptors(obj, key) writeable

* 忽略 enumerable 为 false 的属性 for...in 循环：只遍历对象自身的和继承的可枚举的属性。 Object.keys()：返回对象自身的所有可枚举的属性的键名。 JSON.stringify()：只串行化对象自身的可枚举的属性。 Object.assign()： 忽略 enumerable 为 false 的属性，只拷贝对象自身的可枚举的属性。

* ES6 规定，所有 Class 的原型的方法都是不可枚举的。

* for in 循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）
* Object.keys 返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名
* Object.getOwnPropertyNames 返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
* Object.getOwnPropertySymbols(obj) Object.getOwnPropertySymbols 返回一个数组，包含对象自身的所有 Symbol 属性的键名

## super 关键字

- 关键字 super，指向当前对象的原型对象 Object.setPrototypeOf(obj, proto);

* super.foo 等同于 Object.getPrototypeOf(this).foo（属性）或 Object.getPrototypeOf(this).foo.call(this)
