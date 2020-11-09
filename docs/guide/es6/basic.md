# 解构

## 数组解构

- 只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值 默认值必须严格相等于 undefined 才行

```
let [a, b, c] = [1, 2, 3];
let [a = 1] = [null];  // null
let [foo, [[bar], baz]] = [1, [[2], 3]];

// 默认值赋值
let [x = 1, y = x] = [];     // x=1; y=1
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = [];

```

## 对象的解构赋值

- 对象的属性没有次序，变量必须与属性同名，才能取到正确的值

```
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
```

- 对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量

```
// 例一
let { log, sin, cos } = Math;

// 例二
const { log } = console;
log('hello') // hello
```

- 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

```
let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' }; // 先找到属性名 然后赋值给后面变量  后面是变量
```

- 解构也可以用于嵌套结构的对象 注意前面是模式 不是变量

```
let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p: [x, { y }] } = obj;
x // "Hello"
y // "World"


let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p, p: [x, { y }] } = obj;
```

- 对象的解构赋值可以取到继承的属性（对象的属性值严格等于 undefined）

## 字符串的解构赋值

```
const [a, b, c, d, e] = 'hello';

const {length: len} = 'hello;

```

## 数值和布尔值的解构赋值

- 只要等号右边的值不是对象或数组，就先将其转为对象。由于 undefined 和 null 无法转为对象，所以对它们进行解构赋值，都会报错

```
let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError
```

## 函数的解构赋值

```
function move({x = 0, y = 0} = {}) {
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]
```

## 圆括号问题

- 不能使用圆括号问题 变量声明语句 函数参数 赋值语句 可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号

## 用途

```
1.交换变量的值
let x = 1;
let y = 2;

[x, y] = [y, x];

2. 从函数返回多个值

// 返回一个数组

function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();

// 返回一个对象

function example() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example();

// 函数参数的定义 函数参数的默认值 函数参数的定义 遍历map结构 输出模块的指定方法
```
