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

## 报数

* 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数  输入:4， 输出: "1211"

1
11
21
1211
111221

```
方法一: 递归
const constcountAndSay = function(n) {
    if (n == 1) {
        return '1';
    }
    const preResult = constcountAndSay(n - 1);
    return preResult.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`);
}

方法二:循环

const constcountAndSay = function(n) {
    if (n == 1) {
        return '1';
    }
    let j = 1;
    let preResult = '';
    while(n > j) {
        if (j == 1) {
            preResult = '1';
        }
        ++j;
        preResult = preResult.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`);
    }
    return preResult;
}

时间复杂度: O(n) 空间复杂度: O(1);
```

## 反转字符串

* 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间


```
const constreverseString = function(s) {
    for(let i = 0; i < s.length / 2; i++) {
        console.log(s.length - i - 1)
        let temp = s[s.length - i - 1];
        s[s.length - i - 1] = s[i];
        s[i] = temp;
    }
    return s;
}

时间复杂O(n) 空间复杂度O(1)
```

## 字符串中唯一字符

* 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

```
方法一:
const firstUniqChar = function(str) {
   for(let i = 0; i < str.length; i++) {
       if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
           return i;
       }
   }
   return -1;
}
时间复杂度O(n^2) 空间复杂度O(1)

方法二: 哈希


const firstUniqChar = function(str) {
   let sHash = {}
   for(let i = 0; i < str.length; i++) {
       if (sHash[str[i]]) {
           sHash[str[i]] = sHash[str[i]] + 1;
       } else {
         sHash[str[i]] = 1;
       } 
   }
   let sHashArr = Object.keys(sHash).filter((item) => sHash[item] === 1);
   return sHashArr.length ? str.indexOf(sHashArr[0]) : -1;
}
```

## 验证回文字符串

* 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。说明：本题中，我们将空字符串定义为有效的回文串  输入: "A man, a plan, a canal: Panama"1输出: true2示例 2:输入: "race a car"1输出: false2

```
const isPalindrome = function(e) {
    const str = e.toLocaleLowerCase().replace(/[^\da-zA-Z]/g, '');
    const reverseStr = str.split('').reverse().join('');
    if(str === reverseStr) {
        return true;
    }
    return false;
}
```

## 实现strStr()

* 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回 -1。 给定 haystack = 'hello world', needle = 'll'12返回23

```
const strStr = function (haystack, needle) {
    const hayLen = hayLen.length;
    const needLen = needLen.length;
    if (hayLen < needLen) {
        return -1;
    } else if (hayLen == needLen) {
        return haystack === needle ? 0 : -1;
    } else {
        for(let i = 0; i <= hayLen - needLen; i ++) {
            if (haystack[i] != needLen[i]) {
                continue;
            } else {
                if (haystack.subString(i, i + needLen) === needle) {
                    return i;
                }
            }
        }
    }
    return -1;
}

```

## 最长公共前缀

* 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""  输入: ["flower","flow","flight"]1输出: "fl"

```
方法一: 获取最大公共前缀
function getCommonPrefix(a, b) {
    let j = 0;
    while(j < a.length && j < b.length && a[j] == b[j]) {
        j++;
    }
    return j > 0 ? a.subString(0, j) : '';
}
function longestCommonPrefix(strs) {
    for(let i = 1; i < strs.length; i ++) {
        let commonPrefix = strs[0];
        commonPrefix = getCommonPrefix(commonPrefix, strs[i]);
    }
    return commonPrefix;
}

方法二:

function longestCommonPrefix(strs) {
    let i = 0;
    let flag = true;
    while(flag) {
        let firstCommon = strs[0];
        if (i < firstCommon.length) {
            for(let j = 1; j < strs.length; j++) {
                if (firstCommon[i] !== strs[j][i] || i > strs[i].length) {
                    flag = false;
                    break;
                }
            }
        } else {
            flag = false;
        };
        i++;
    }
    return strs[0].substring(0, i -1);
}
```

## 最大回文字符串