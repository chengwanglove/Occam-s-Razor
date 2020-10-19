

// function reverseStr(x) {
//     if (typeof x != number) {
//         return
//     }
//     const max = Number.POSITIVE_INFINITY;
//     const min = Number.NEGATIVE_INFINITY;

//     const rest = x > 0 ? 
//     x.toString()
//      .split('')
//      .reverse()
//      .join('') 
//     : x.toString()
//         .split('')
//         .slice(1)
//         .reverse()
//         .join('')
//     const result = x > 0 ? parseInt(rest, 10) : 0 - parseInt(rest, 10);
//     if (result <= max && result >= min) {
//         return result;
//     }
//     return 0;
// }

// function reverseStr(x) {
//     let int = Math.abs(x);
//     const max = Number.POSITIVE_INFINITY;
//     const min = Number.NEGATIVE_INFINITY;

//     let num = 0;
//     while(int != 0) {
//         num = (int % 10) + (num * 10);
//         int = Math.floor(int / 10);
//     }
//     if (num >= max || num < min) {
//         return 0;
//     }
//     if (x < 0) {
//         num *= -1;
//     }
//     return num;
// }

// console.log(reverseStr(-123));

// const isAnagram = function(s, t) {
//     if (s.length != t.length) {
//         return false;
//     }
//     const sArr = s.split('');
//     const tArr = t.split('');
//     const sortFn = (a, b) => {
//         return a.charCodeAt() - b.charCodeAt();
//     }
//     sArr.sort(sortFn);
//     tArr.sort(sortFn);
//     return sArr.join('') == sArr.join('');
// }

// const isAnagram = function (s, t) {
//     if (s.length != t.length) {
//         return false;
//     }
//     const hashK = {}
//     for(k of s) {
//         if (hashK[k]) {
//             hashK[k] = hashK[k] + 1;
//         } else {
//             hashK[k] = 1;
//         }
//     }
//     for(kt of t) {
//         if (hashK[kt]) {
//             hashK[kt] = hashK[kt] - 1;
//         } else {
//             return false;
//         }
//     }
//     return true;
// }

// const constcountAndSay = function(n) {
//     if (n == 1) {
//         return '1';
//     }
//     const preResult = constcountAndSay(n - 1);
//     return preResult.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`);
// }

// const constcountAndSay = function(n) {
//     if (n == 1) {
//         return '1';
//     }
//     let j = 1;
//     let preResult = '';
//     while(n > j) {
//         if (j == 1) {
//             preResult = '1';
//         }
//         ++j;
//         preResult = preResult.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`);
//     }
//     return preResult;
// }
// console.log(constcountAndSay(4));

// 输入：["h","e","l","l","o"]1输出：["o","l","l","e","h"]

// const constreverseString = function(s) {
//     for(let i = 0; i < s.length / 2; i++) {
//         console.log(s.length - i - 1)
//         let temp = s[s.length - i - 1];
//         s[s.length - i - 1] = s[i];
//         s[i] = temp;
//     }
//     return s;
// }

// console.log(constreverseString(["h","e","l","l","o"]));

// const firstUniqChar = function(str) {
//    let sHash = {}
//    for(let i = 0; i < str.length; i++) {
//        if (sHash[str[i]]) {
//            sHash[str[i]] = sHash[str[i]] + 1;
//        } else {
//          sHash[str[i]] = 1;
//        } 
//    }
//    let sHashArr = Object.keys(sHash).filter((item) => sHash[item] === 1);
//    return sHashArr.length ? str.indexOf(sHashArr[0]) : -1;
// }

// console.log(firstUniqChar('loveleetcode'));

// const isPalindrome = function(e) {
//     const str = e.toLocaleLowerCase().replace(/[^\da-zA-Z]/g, '');
//     const reverseStr = str.split('').reverse().join('');
//     if(str === reverseStr) {
//         return true;
//     }
//     return false;
// }

// console.log(isPalindrome('A man, a plan, a canal Panama'));


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