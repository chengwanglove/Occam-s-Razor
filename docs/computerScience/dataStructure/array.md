# 数组

## 旋转数组

- 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

```
const rotate = function (nums, k) {
    const l = nums.length;
    k = k % l;
    for(let i = 1; i <= n; i ++) {
        nums.unshift(nums.pop());
    }
}
const rotate = function(nums, k) {
    const l = nums.length;
    k = k % l;
    nums.unshift(...nums.split(l - k, k));
}
```

## 只出现一次的数字

- 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出 现了一次的元素。

```
分组
const singleNumber = function(nums) {
    const numsGroup = nums.map((num) => nums.filter((v) => v === num));
    return numsGroup.filter((item) => item.length === 1)[0];
}
暴力方法
```

## 两数之和

```
暴力法

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        return [i, j];
      }
    }
  }
};


方法二  数组=》变为表  数组进行map 找到对应的索引

```

## 从排序数组中删除重复项

```
方法一:
const removeDuplicates = function (nums) {
  // 遍历数组
  for (let i = 1; i < nums.length; i++) {
    // 若该元素的相邻项与之相同，则删除该元素
    if (nums[i - 1] === nums[i]) {
      nums.splice(i - 1, 1);
      // 因删除该元素后，数组长度会减一，故 i 也需要减一
      i--;
    }
  };
  return nums.length;
};
```

## 加一

- 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。你可以假设除了整数 0 之外，这个整数不会以零开头。

```
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  return (BigInt(digits.join('')) + 1n).toString().split('');
};
```

## 买卖股票的最佳时机

- 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

```
方法一: 正向遍历 允许多次
const maxProfit = function (prices) {
    // 总收益
    const totalBenefit = 0;
    // 当前日下标
    const offset = 1;
    const len = prices.length;
    while (offset <= len - 1) {
        // 如果当日价格比前一天价格高，则相减得出收益
        const curPrice = prices[offset];
        const prePrice = prices[offset - 1];
        if (curPrice > prePrice) {
            totalBenefit += curPrice - prePrice;
        }
        offset += 1;
    }
    return totalBenefit;
};
```

## 移动零

- 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序

```
方法一：
const moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }
  // 遍历完了，把尾部的元素填充 0 即可
  nums.fill(0, j, nums.length);
};

方法二：
const moveZeroes = function (nums) {
  let j = 0;
  let temp = '';
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++;
    }
  }
};

```

## 两个数组的交集

- 给定两个数组，计算数组交集。输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。我们可以不考虑输出结果的顺序

```
方法一:
const intersect = function (nums1, nums2) {
  const hashObject = {};
  for (let i = 0; i < nums1.length; i++) {
    if (hashObject[nums1[i]]) {
      hashObject[nums1[i]] += 1;
    } else {
      hashObject[nums1[i]] = 1;
    }
  }
  const result = [];
  for (let j = 0; j < nums2.length; j++) {
    if (hashObject[nums2[j]]) {
      result.push(nums2[j]);
      hashObject[nums2[j]] -= 1;
    }
  }
  return result;
};

方法二:
const intersect = function (nums1, nums2) {
  const longerArr = nums1.length > nums2.length ? nums1 : nums2;
  const shorterArr = nums1.length > nums2.length ? nums2 : nums1;
  const result = [];
  for (let i = 0; i < shorterArr.length; i++) {
    if (longerArr.indexOf(shorterArr[i]) > -1) {
      result.push(shorterArr[i]);
      longerArr.splice(longerArr.indexOf(shorterArr[i]), 1);
    }
  }
  return result;
};
```

## 一周中的第几天

- 给你一个日期，请你设计一个算法来判断它是对应一周中的哪一天 输入为三个整数：day、month 和 year，分别表示日、月、年。您返回的结果必须是这几个值中的一个 {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}。说明：给出的日期一定是在 1971 到 2100 年之间的有效日期。

```
const dayOfTheWeek = function (day, month, year) {
  const date = new Date(Date.parse(`${year}/${month}/${day}`));
  const Week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return Week[date.getDay()];
};
```

## 字谜分组

- 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串

```
输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

方法一:
const groupAnagrams = function (strs) {
  const obj = {};
  const arr = [];
  // 遍历数组
  for (let i = 0; i < strs.length; i++) {
    // 将每个字母异位词进行排序，并将排序后的字符串作为 key
    const unit = Array.from(strs[i]).sort().join('');
    // 将 key 值一样的字母异位词置于同一个数组中
    if (!obj[unit]) {
      obj[unit] = [];
    }
    obj[unit].push(strs[i]);
  }
  for (const i in obj) {
    arr.push(obj[i]);
  }
  return arr;
};
```

## 三数之和

- 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组

```
例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]

const threeSum = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    let left = i + 1;
    let right = length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);

        const leftValue = nums[left];

        // 这两步是为了去重
        while (left < length && nums[left] === leftValue) {
          left++;
        }
        const rightValue = nums[right];
        while (right > left && nums[right] === rightValue) {
          right--;
        }
      } else if (sum < 0) {
        // 小于 0 说明太小了，需要向右移动
        left++;
      } else {
        // 太大了，把右边的指针向左移动
        right--;
      }
    }
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++;
    }
  }
  return res;
};
```

## 无重复字符的最长子串

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度

## 递增的三元子序列

- 给定一个未排序的数组，判断这个数组中是否存在长度为 3 的递增子序列
