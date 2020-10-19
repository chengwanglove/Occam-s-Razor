# 字符串操作


## 反转数组 

* 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转


```
方法一:
function reverseStr(x) {
    if (typeof x != number) {
        return
    }
    const max = Number.POSITIVE_INFINITY;
    const min = Number.NEGATIVE_INFINITY;

    const rest = x > 0 ? 
    x.toString()
     .split('')
     .reverse()
     .join('') 
    : x.toString()
        .split('')
        .slice(1)
        .reverse()
        .join('')
    const result = x > 0 ? parseInt(rest, 10) : 0 - parseInt(rest, 10);
    if (result <= max && result >= min) {
        return result;
    }
    return 0;
}


方法二:

function reverseStr(x) {
    let int = Math.abs(x);
    const max = Number.POSITIVE_INFINITY;
    const min = Number.NEGATIVE_INFINITY;

    let num = 0;
    while(int != 0) {
        num = (int % 10) + (num * 10);
        int = Math.floor(int / 10);
    }
    if (num >= max || num < min) {
        return 0;
    }
    if (x < 0) {
        num *= -1;
    }
    return num;
}

console.log(reverseStr(-123));
```

* 复杂度分析 时间复杂度: O(n) 空间复杂度 O(1)


## 有效的字母异位词

* 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。字母异位词 s = "anagram", t = "nagaram" 是字母异位词  输入:s="rat",t="car" 2 输出: false

```
const isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false;
    }
    const sArr = s.split('');
    const tArr = t.split('');
    const sortFn = (a, b) => {
        return a.charCodeAt() - b.charCodeAt();
    }
    sArr.sort(sortFn);
    tArr.sort(sortFn);
    return sArr.join('') == sArr.join('');
}
```

* 
时间复杂度: O(nlogn)
JavaScript 的 sort 方法的实现原理，当数组长度小于等于 10 的时候，采用插入排序，大
于10的时候，采用快排，快排的平均时间复杂度是 O(nlogn)。
空间复杂度: O(n) 算法中申请了 2 个数组变量用于存放字符串分割后的字符串数组，所以数 组 空间长度跟字符串长度线性相关，所以为 O(n)。


```
方法二: 
const isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }
    const hashK = {}
    for(k of s) {
        if (hashK[k]) {
            hashK[k] = hashK[k] + 1;
        } else {
            hashK[k] = 1;
        }
    }
    for(kt of t) {
        if (hashK[kt]) {
            hashK[kt] = hashK[kt] - 1;
        } else {
            return false;
        }
    }
    return true;
}
```

* 复杂度分析:时间复杂度: O(n)  空间复杂度: O(1)

## 字符串转整数