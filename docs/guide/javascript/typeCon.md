# js类型转换

## 原始值转化boolean

6种基本类型 Boolean()

```
console.log(Boolean()) // false

console.log(Boolean(false)) // false

console.log(Boolean(undefined)) // false
console.log(Boolean(null)) // false
console.log(Boolean(+0)) // false
console.log(Boolean(-0)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean("")) // false
```

## 原始值转化为数字


 Number 函数将类型转换成数字类型，如果参数无法被转换为数字，则返回 NaN

 ```
 console.log(String()) // 空字符串

console.log(String(undefined)) // undefined
console.log(String(null)) // null

console.log(String(false)) // false
console.log(String(true)) // true

console.log(String(0)) // 0
console.log(String(-0)) // 0
console.log(String(NaN)) // NaN
console.log(String(Infinity)) // Infinity
console.log(String(-Infinity)) // -Infinity
console.log(String(1)) // 1
```

## 原始值转字符

如果 String 函数不传参数，返回空字符串，如果有参数，调用 ToString(value)，而 ToString 也给了一个对应的结果表

```
console.log(String()) // 空字符串

console.log(String(undefined)) // undefined
console.log(String(null)) // null

console.log(String(false)) // false
console.log(String(true)) // true

console.log(String(0)) // 0
console.log(String(-0)) // 0
console.log(String(NaN)) // NaN
console.log(String(Infinity)) // Infinity
console.log(String(-Infinity)) // -Infinity
console.log(String(1)) /
```
## 原始值转对象

原始值到对象的转换非常简单，原始值通过调用 String()、Number() 或者 Boolean() 构造函数，转换为它们各自的包装对象

## 对象转布尔值

对象到布尔值的转换非常简单：所有对象(包括数组和函数)都转换为 true

## 对象转字符串和数字

* 数组的 toString 方法将每个数组元素转换成一个字符串，并在元素之间添加逗号后合并成结果字符串。
函数的 toString 方法返回源代码字符串。
日期的 toString 方法返回一个可读的日期和时间字符串。
RegExp 的 toString 方法返回一个表示正则表达式直接量的字符串。

## JSON.stringify

* 处理基本类型时，与使用toString基本相同，结果都是字符串，除了 undefined

* 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。

* undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时）

* 如果一个被序列化的对象拥有 toJSON 方法，那么该 toJSON 方法就会覆盖该对象默认的序列化行为：不是那个对象被序列化，而是调用 toJSON 方法后的返回值会被序列化


## 一元操作符

* 当 + 运算符作为一元操作符的时候，查看 ES5规范1.4.6，会调用 ToNumber 处理该值，相当于 Number('1')，最终结果返回数字 1

```
console.log(+['1']); // 1
console.log(+['1', '2', '3']); // NaN
console.log(+{}); // NaN
```

## 二元操作符

* 当计算 value1 + value2时：

lprim = ToPrimitive(value1)
rprim = ToPrimitive(value2)
如果 lprim 是字符串或者 rprim 是字符串，那么返回 ToString(lprim) 和 ToString(rprim)的拼接结果
返回 ToNumber(lprim) 和 ToNumber(rprim)的运算结果


## == 相等

* x是布尔值，判断ToNumber(x) == y

y是布尔值，判断x ==ToNumber(y)

x不是字符串或者数字，y是对象，判断x == ToPrimitive(y)

x是对象，y不是字符串或者数字，判断ToPrimitive(x) == y