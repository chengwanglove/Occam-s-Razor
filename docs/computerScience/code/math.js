

// const romanToIntOne = function(num) {
//     const roman = {
//         IV: 4,
//         IX: 9,
//         XL: 40,
//         XC: 90,
//         CD: 400,
//         CM: 900
//     }
//     const list = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     }
//     let result = 0;
//     for(key in roman) {
//         const key = new RegExp(key);
//         if (num.includes(key)) {
//             num.replace(key, '');
//             result += num[key];
//         }
//     }

//     for(key in num) {
//         result += num[key];
//     }
//     return result;
// }

/**
 * 
 * @param {number} num 
 * @description 是否是个快乐数
 */
// const fn = function(num, once) {
//     if (once[num]) {
//         return false;
//     }
//     const list = num.toString().split('');
//     let result = 0;
//     list.forEach((item) => {
//         result += Math.pow(parseInt(item, 10), 2);
//     });
//     if (result == 1) {
//         return true;
//     } else {
//         fn(num, once);
//     }
// }

// const isHappy = (num) => {
//     const once = {};
//     return fn(num, once)
// }


// function zeroNum(n) {
//     let j = 0;
//     for(let i = 1; i <= n; i ++) {
//         let a = i % 5;
//         if (a == 0) {
//             j ++;
//         }
//     }
//     return j;
// }

// console.log(zeroNum(10))

// function myPow(x, n) {
//     if (n == 0) {
//         return 1;
//     }
//     const base = n > 0 ? x : 1 / x;
//     let result = 1;
//     for(let i = 1; i <= Math.abs(n); i ++) {
//         result = x * result;
//     }
//     return result;
// }

// function myPow(x, n) {
//     if (n == 0) {
//         return 1;
//     } else if (n == 1) {
//         return x;
//     } else if (n == -1) {
//         return 1 / x;
//     }

//     const base = n > 0 ? x : 1/ x;
//     const half = parseInt(n / 2, 10);
//     const result = myPow(x, half);
//     if (n % 2 != 0) {
//         return base * result * result
//     }
//     return result * result;
// }

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

console.log(mySqrt(7));