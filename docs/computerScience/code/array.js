
const rotate = function (nums, k) {
    const l = nums.length;
    k = k % l;
    for(let i = 1; i <= n; i ++) {
        nums.unshift(nums.pop());
    }
}