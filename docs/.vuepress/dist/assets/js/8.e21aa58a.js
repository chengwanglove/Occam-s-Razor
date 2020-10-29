(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{358:function(n,t,s){"use strict";s.r(t);var e=s(42),a=Object(e.a)({},(function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[n._v("#")]),n._v(" 数组")]),n._v(" "),s("h2",{attrs:{id:"旋转数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#旋转数组"}},[n._v("#")]),n._v(" 旋转数组")]),n._v(" "),s("ul",[s("li",[n._v("给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。")])]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("const rotate = function (nums, k) {\n    const l = nums.length;\n    k = k % l;\n    for(let i = 1; i <= n; i ++) {\n        nums.unshift(nums.pop());\n    }\n}\nconst rotate = function(nums, k) {\n    const l = nums.length;\n    k = k % l;\n    nums.unshift(...nums.split(l - k, k));\n}\n")])])]),s("h2",{attrs:{id:"只出现一次的数字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#只出现一次的数字"}},[n._v("#")]),n._v(" 只出现一次的数字")]),n._v(" "),s("ul",[s("li",[n._v("给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出 现了一次的元素。")])]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("分组\nconst singleNumber = function(nums) {\n    const numsGroup = nums.map((num) => nums.filter((v) => v === num));\n    return numsGroup.filter((item) => item.length === 1)[0];\n}\n暴力方法\n")])])]),s("h2",{attrs:{id:"两数之和"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两数之和"}},[n._v("#")]),n._v(" 两数之和")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("暴力法\n\nconst twoSum = function (nums, target) {\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[j] === target - nums[i]) {\n        return [i, j];\n      }\n    }\n  }\n};\n\n\n方法二  数组=》变为表  数组进行map 找到对应的索引\n\n")])])]),s("h2",{attrs:{id:"从排序数组中删除重复项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从排序数组中删除重复项"}},[n._v("#")]),n._v(" 从排序数组中删除重复项")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("方法一:\nconst removeDuplicates = function (nums) {\n  // 遍历数组\n  for (let i = 1; i < nums.length; i++) {\n    // 若该元素的相邻项与之相同，则删除该元素\n    if (nums[i - 1] === nums[i]) {\n      nums.splice(i - 1, 1);\n      // 因删除该元素后，数组长度会减一，故 i 也需要减一\n      i--;\n    }\n  };\n  return nums.length;\n};\n")])])]),s("h2",{attrs:{id:"加一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加一"}},[n._v("#")]),n._v(" 加一")]),n._v(" "),s("ul",[s("li",[n._v("给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。你可以假设除了整数 0 之外，这个整数不会以零开头。")])]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("/**\n * @param {number[]} digits\n * @return {number[]}\n */\nconst plusOne = function (digits) {\n  return (BigInt(digits.join('')) + 1n).toString().split('');\n};\n")])])]),s("h2",{attrs:{id:"买卖股票的最佳时机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#买卖股票的最佳时机"}},[n._v("#")]),n._v(" 买卖股票的最佳时机")]),n._v(" "),s("ul",[s("li",[n._v("给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。")])]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("方法一: 正向遍历 允许多次\nconst maxProfit = function (prices) {\n    // 总收益\n    const totalBenefit = 0;\n    // 当前日下标\n    const offset = 1;\n    const len = prices.length;\n    while (offset <= len - 1) {\n        // 如果当日价格比前一天价格高，则相减得出收益\n        const curPrice = prices[offset];\n        const prePrice = prices[offset - 1];\n        if (curPrice > prePrice) {\n            totalBenefit += curPrice - prePrice;\n        }\n        offset += 1;\n    }\n    return totalBenefit;\n};\n")])])]),s("h2",{attrs:{id:"移动零"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动零"}},[n._v("#")]),n._v(" 移动零")]),n._v(" "),s("ul",[s("li",[n._v("给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序")])]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("方法一：\nconst moveZeroes = function (nums) {\n  let j = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] !== 0) {\n      nums[j] = nums[i];\n      j++;\n    }\n  }\n  // 遍历完了，把尾部的元素填充 0 即可\n  nums.fill(0, j, nums.length);\n};\n\n方法二：\nconst moveZeroes = function (nums) {\n  let j = 0;\n  let temp = '';\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] !== 0) {\n      temp = nums[j];\n      nums[j] = nums[i];\n      nums[i] = temp;\n      j++;\n    }\n  }\n};\n\n")])])]),s("h2",{attrs:{id:"两个数组的交集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两个数组的交集"}},[n._v("#")]),n._v(" 两个数组的交集")]),n._v(" "),s("ul",[s("li",[n._v("给定两个数组，计算数组交集。输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。我们可以不考虑输出结果的顺序")])])])}),[],!1,null,null,null);t.default=a.exports}}]);