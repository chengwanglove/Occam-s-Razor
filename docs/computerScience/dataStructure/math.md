
# 数学


## 罗马数字转整数
* 罗马数字包含以下七种字符:I， V， X， L，C，D 和 M。 分别对应的数值为:1 ，5，10，50，100，500，1000 。
例如， 罗马数字 3 写做 III，即为三个并列的 1。12 写做 XII，即为 X+II。 26 写做 XXVII, 即为 XX+V+I。
通常情况下，不能出现超过连续三个相同的罗马数字并且罗马数字中小的数字在大的数字的右边。 但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小 数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况:
 
1 I 可以放在 V(5) 和 X(10) 的左边，来表示 4 和 9。
2 X 可以放在 L(50) 和 C(100) 的左边，来表示 40 和90。
3 C 可以放在 D(500) 和 M(1000) 的左边，来表示 400 和 900。

```
方法一:
const romanToIntOne = function(num) {
    const roman = {
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }
    const list = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let result = 0;
    for(key in roman) {
        const key = new RegExp(key);
        if (num.includes(key)) {
            num.replace(key, '');
            result += num[key];
        }
    }

    for(key in num) {
        result += num[key];
    }
    return result;
}

方法二: 全加上 遇到特殊的减去多加的  很棒的思路
```

## Fizz Buzz

* 写一个程序，输出从 1 到 n 数字的字符串表示。
1. 如果 n 是 3 的倍数，输出“Fizz”;
2. 如果 n 是 5 的倍数，输出“Buzz”;
3. 如果 n 同时是 3 和 5 的倍数，输出 “FizzBuzz”。

```
方法一:
constfizzBuzz= (n)=>{
const arr = []; for(leti=1;i<=n;i+=1){
if(i%15===0){// 被15整除 arr.push('FizzBuzz');
}elseif(i%3===0){// 被3整除 arr.push('Fizz');
}elseif(i%5===0){// 被5整除 arr.push('Buzz');
}else{ arr.push(i.toString());
} }
return arr; };


```

## 3的幂
* 给定一个整数，写一个函数来判断它是否是 3 的幂次方。 循环递归解法

```
const isPowerOfThree = function(n){ 
    if(n<1){
    return false;
    while(n>1){
    // 如果该数字不能被 3 整除，则直接输出 false if(n%3!==0){
    return false; }else{
    n = n / 3; }
    }
return true; };

```

## excel的序列号

* 给定一个Excel表格中的列名称，返回其相应的列序号。 说明26进制转换为10进制 从第一位到后一位都可以做 方法一和方法二的区别

```
const titleToNumber = function(s){ 
    let sum=0;
    let i = s.length - 1;
    let carry = 1;
    while(i>=0){
        const cur = s[i].charCodeAt() - 64; 
        sum += cur * carry;
        carry *= 26;
        i--;
    }
return sum; };
```

## 快乐数

* 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后 重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个 数就是快乐数。

```
 /**
 * 
 * @param {number} num 
 * @description 是否是个快乐数
 */
const fn = function(num, once) {
    if (once[num]) {
        return false;
    }
    const list = num.toString().split('');
    let result = 0;
    list.forEach((item) => {
        result += Math.pow(parseInt(item, 10), 2);
    });
    if (result == 1) {
        return true;
    } else {
        fn(num, once);
    }
}

const isHappy = (num) => {
    const once = {};
    return fn(num, once)
}
```

## 阶乘后是0

* 给定一个整数 n，返回 n! 结果尾数中零的数量。

```
方法一: 暴力法 算出阶乘 得到末尾0
方法二：分解多少5的倍数

function zeroNum(n) {
    let j = 0;
    for(let i = 1; i <= n; i ++) {
        let num = i;
        let a = i % 5;
        if (a == 0) {
            while(num % 5 == 0 && num != 0) {
                j ++;
                num = num % 5;
            }
        }
    }
    return j;
}

function zeroNum(num) {
    let count = 0;
    while(num > 0) {
        num = parseInt(num / 5);
        count += num;
    }
    return count;
}
```

## 实现 pow(x, n)

* 即计算 x 的 n 次幂函数

```
暴力法:
function myPow(x, n) {
    if (n == 0) {
        return 1;
    }
    const base = n > 0 ? x : 1 / x;
    let result = 1;
    for(let i = 1; i <= Math.abs(n); i ++) {
        result = x * result;
    }
    return result;
}

二分法：

function myPow(x, n) {
    if (n == 0) {
        return 1;
    } else if (n == 1) {
        return x;
    } else if (n == -1) {
        return 1 / x;
    }

    const base = n > 0 ? x : 1/ x;
    const half = parseInt(n / 2, 10);
    const result = myPow(x, half);
    if (n % 2 != 0) {
        return base * result * result
    }
    return result * result;
}
```

## x的平方根

```
// 顺序暴力法
const mySqrt= function(x) {
    for (let i = 1; i <= x; i++) {
        if(i * i > x) {
            return (i - 1);
        }else if(i * i == x) {
            return i;
        }
    }
    return 0;
}
// 二分查找法
function mySqrt(n) {
    let max = n;
    let min = 0;
    let flag = true;
    let middle;
    while(flag) {
        middle = Math.round((max - min) / 2 + min);
        if (middle * middle > n) {
            max = middle;
        } else if (middle * middle < n) {
            if ((middle + 1) * (middle + 1) > n) {
                flag = false;
            }
            min = middle;
        } else {
            return middle;
        }
    }
    return middle;
}
```