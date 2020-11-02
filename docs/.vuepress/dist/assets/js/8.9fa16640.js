(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{358:function(n,t,s){"use strict";s.r(t);var e=s(42),a=Object(e.a)({},(function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[n._v("#")]),n._v(" 数组")]),n._v(" "),s("h2",{attrs:{id:"旋转数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#旋转数组"}},[n._v("#")]),n._v(" 旋转数组")]),n._v(" "),s("ul",[s("li",[n._v("给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。")])]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("const rotate = function (nums, k) {\n    const l = nums.length;\n    k = k % l;\n    for(let i = 1; i <= n; i ++) {\n        nums.unshift(nums.pop());\n    }\n}\nconst rotate = function(nums, k) {\n    const l = nums.length;\n    k = k % l;\n    nums.unshift(...nums.split(l - k, k));\n}\n")])])]),s("h2",{attrs:{id:"只出现一次的数字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#只出现一次的数字"}},[n._v("#")]),n._v(" 只出现一次的数字")]),n._v(" "),s("ul",[s("li",[n._v("给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出 现了一次的元素。")])]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("分组\nconst singleNumber = function(nums) {\n    const numsGroup = nums.map((num) => nums.filter((v) => v === num));\n    return numsGroup.filter((item) => item.length === 1)[0];\n}\n暴力方法\n")])])]),s("h2",{attrs:{id:"两数之和"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两数之和"}},[n._v("#")]),n._v(" 两数之和")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("暴力法\n\nconst twoSum = function (nums, target) {\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[j] === target - nums[i]) {\n        return [i, j];\n      }\n    }\n  }\n};\n\n\n方法二  数组=》变为表  数组进行map 找到对应的索引\n\n")])])]),s("h2",{attrs:{id:"从排序数组中删除重复项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从排序数组中删除重复项"}},[n._v("#")]),n._v(" 从排序数组中删除重复项")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("方法一:\nconst removeDuplicates = function (nums) {\n  // 遍历数组\n  for (let i = 1; i < nums.length; i++) {\n    // 若该元素的相邻项与之相同，则删除该元素\n    if (nums[i - 1] === nums[i]) {\n      nums.splice(i - 1, 1);\n      // 因删除该元素后，数组长度会减一，故 i 也需要减一\n      i--;\n    }\n  };\n  return nums.length;\n};\n")])])]),s("h2",{attrs:{id:"加一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加一"}},[n._v("#")]),n._v(" 加一")]),n._v(" "),s("ul",[s("li",[n._v("给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。你可以假设除了整数 0 之外，这个整数不会以零开头。")])]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("/**\n * @param {number[]} digits\n * @return {number[]}\n */\nconst plusOne = function (digits) {\n  return (BigInt(digits.join('')) + 1n).toString().split('');\n};\n")])])]),s("h2",{attrs:{id:"买卖股票的最佳时机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#买卖股票的最佳时机"}},[n._v("#")]),n._v(" 买卖股票的最佳时机")]),n._v(" "),s("ul",[s("li",[n._v("给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。")])]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("方法一: 正向遍历 允许多次\nconst maxProfit = function (prices) {\n    // 总收益\n    const totalBenefit = 0;\n    // 当前日下标\n    const offset = 1;\n    const len = prices.length;\n    while (offset <= len - 1) {\n        // 如果当日价格比前一天价格高，则相减得出收益\n        const curPrice = prices[offset];\n        const prePrice = prices[offset - 1];\n        if (curPrice > prePrice) {\n            totalBenefit += curPrice - prePrice;\n        }\n        offset += 1;\n    }\n    return totalBenefit;\n};\n")])])]),s("h2",{attrs:{id:"移动零"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动零"}},[n._v("#")]),n._v(" 移动零")]),n._v(" "),s("ul",[s("li",[n._v("给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序")])]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("方法一：\nconst moveZeroes = function (nums) {\n  let j = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] !== 0) {\n      nums[j] = nums[i];\n      j++;\n    }\n  }\n  // 遍历完了，把尾部的元素填充 0 即可\n  nums.fill(0, j, nums.length);\n};\n\n方法二：\nconst moveZeroes = function (nums) {\n  let j = 0;\n  let temp = '';\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] !== 0) {\n      temp = nums[j];\n      nums[j] = nums[i];\n      nums[i] = temp;\n      j++;\n    }\n  }\n};\n\n")])])]),s("h2",{attrs:{id:"两个数组的交集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两个数组的交集"}},[n._v("#")]),n._v(" 两个数组的交集")]),n._v(" "),s("ul",[s("li",[n._v("给定两个数组，计算数组交集。输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。我们可以不考虑输出结果的顺序")])]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("方法一:\nconst intersect = function (nums1, nums2) {\n  const hashObject = {};\n  for (let i = 0; i < nums1.length; i++) {\n    if (hashObject[nums1[i]]) {\n      hashObject[nums1[i]] += 1;\n    } else {\n      hashObject[nums1[i]] = 1;\n    }\n  }\n  const result = [];\n  for (let j = 0; j < nums2.length; j++) {\n    if (hashObject[nums2[j]]) {\n      result.push(nums2[j]);\n      hashObject[nums2[j]] -= 1;\n    }\n  }\n  return result;\n};\n\n方法二:\nconst intersect = function (nums1, nums2) {\n  const longerArr = nums1.length > nums2.length ? nums1 : nums2;\n  const shorterArr = nums1.length > nums2.length ? nums2 : nums1;\n  const result = [];\n  for (let i = 0; i < shorterArr.length; i++) {\n    if (longerArr.indexOf(shorterArr[i]) > -1) {\n      result.push(shorterArr[i]);\n      longerArr.splice(longerArr.indexOf(shorterArr[i]), 1);\n    }\n  }\n  return result;\n};\n")])])]),s("h2",{attrs:{id:"一周中的第几天"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一周中的第几天"}},[n._v("#")]),n._v(" 一周中的第几天")]),n._v(" "),s("ul",[s("li",[n._v('给你一个日期，请你设计一个算法来判断它是对应一周中的哪一天 输入为三个整数：day、month 和 year，分别表示日、月、年。您返回的结果必须是这几个值中的一个 {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}。说明：给出的日期一定是在 1971 到 2100 年之间的有效日期。')])]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("const dayOfTheWeek = function (day, month, year) {\n  const date = new Date(Date.parse(`${year}/${month}/${day}`));\n  const Week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n  return Week[date.getDay()];\n};\n")])])]),s("h2",{attrs:{id:"字谜分组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字谜分组"}},[n._v("#")]),n._v(" 字谜分组")]),n._v(" "),s("ul",[s("li",[n._v("给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串")])]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('输入: ["eat", "tea", "tan", "ate", "nat", "bat"],\n输出:\n[\n  ["ate","eat","tea"],\n  ["nat","tan"],\n  ["bat"]\n]\n\n方法一:\nconst groupAnagrams = function (strs) {\n  const obj = {};\n  const arr = [];\n  // 遍历数组\n  for (let i = 0; i < strs.length; i++) {\n    // 将每个字母异位词进行排序，并将排序后的字符串作为 key\n    const unit = Array.from(strs[i]).sort().join(\'\');\n    // 将 key 值一样的字母异位词置于同一个数组中\n    if (!obj[unit]) {\n      obj[unit] = [];\n    }\n    obj[unit].push(strs[i]);\n  }\n  for (const i in obj) {\n    arr.push(obj[i]);\n  }\n  return arr;\n};\n')])])]),s("h2",{attrs:{id:"三数之和"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三数之和"}},[n._v("#")]),n._v(" 三数之和")]),n._v(" "),s("ul",[s("li",[n._v("给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组")])]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，\n\n满足要求的三元组集合为：\n[\n  [-1, 0, 1],\n  [-1, -1, 2]\n]\n\nconst threeSum = function (nums) {\n  const res = [];\n  nums.sort((a, b) => a - b);\n  const length = nums.length;\n\n  for (let i = 0; i < length; i++) {\n    let left = i + 1;\n    let right = length - 1;\n    while (left < right) {\n      const sum = nums[i] + nums[left] + nums[right];\n      if (sum === 0) {\n        res.push([nums[i], nums[left], nums[right]]);\n\n        const leftValue = nums[left];\n\n        // 这两步是为了去重\n        while (left < length && nums[left] === leftValue) {\n          left++;\n        }\n        const rightValue = nums[right];\n        while (right > left && nums[right] === rightValue) {\n          right--;\n        }\n      } else if (sum < 0) {\n        // 小于 0 说明太小了，需要向右移动\n        left++;\n      } else {\n        // 太大了，把右边的指针向左移动\n        right--;\n      }\n    }\n    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {\n      i++;\n    }\n  }\n  return res;\n};\n")])])]),s("h2",{attrs:{id:"无重复字符的最长子串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无重复字符的最长子串"}},[n._v("#")]),n._v(" 无重复字符的最长子串")]),n._v(" "),s("p",[n._v("给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度")]),n._v(" "),s("h2",{attrs:{id:"递增的三元子序列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#递增的三元子序列"}},[n._v("#")]),n._v(" 递增的三元子序列")]),n._v(" "),s("ul",[s("li",[n._v("给定一个未排序的数组，判断这个数组中是否存在长度为 3 的递增子序列")])])])}),[],!1,null,null,null);t.default=a.exports}}]);