# 数值的拓展

- 二进值和八进值的表示方法

```
console.log(0o11 === 011);
```

- Number.isFinite()和 Number.isNaN()

```
// 严格为数字类型
Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite('foo'); // false
Number.isFinite('15'); // false
Number.isFinite(true); // false
```

- Number.parseInt(), Number.parseFloat() 方法移入到 Number 上

* 是否为整数 Number.isInteger() 需要 babel 支持

* Number.EPSILON 最小值

```
x = 0.2;
y = 0.3;
z = 0.1;
equal = (Math.abs(x - y + z) < Number.EPSILON);
```

- 安全整数和 Number.isSafeInteger()

```
Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1
// true
Number.MAX_SAFE_INTEGER === 9007199254740991
// true

Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER
// true
Number.MIN_SAFE_INTEGER === -9007199254740991
// true
```

## math 对象的拓展

## bigint 数值对象拓展
