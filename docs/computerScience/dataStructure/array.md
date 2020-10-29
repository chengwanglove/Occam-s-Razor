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
