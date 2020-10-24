# 数组

## 旋转数组

* 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

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

* 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出 现了一次的元素。

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

## 旋转图像