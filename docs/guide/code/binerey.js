
// 二叉树最大深度
// function maxDepth(root) {
//     if (!root) return 0;
//     let queue = [root];
//     let res = 0;
//     while(queue.length > 0) {
//         let temp = [];
//         queue.forEach((item) => {
//             if (item.left) temp.push(item.left);
//             if (item.right) temp.push(item.right);
//         })
//         res += 1;
//         queue = temp;
//     }
//     return res;    
// }
// // 二叉树最小深度

// function minDepth(root) {
//     if (!root) return 0;
//     let queue = [root];
//     let res = 0;
//     while(queue.length) {
//         let temp = [];
//         queue.forEach((item) => {
//             if (item.left && item.right) {
//                 temp.push(item.left);
//                 temp.push(item.right);
//             } else {
//                 return;
//             }
//         })
//         res += 1;
//         queue = temp;
//     }
// }

// 二叉树层序遍历 层次遍历
// function levelOrder (root) {
//     if (!root) return;
//     let queue = [root];
//     let result = [];
//     while(queue.length) {
//         let temp = [];
//         let levelResult = [];
//         queue.forEach((item) => {
//             levelResult.push(item.value);
//             if(item.left) temp.push(item.left);
//             if(item.right) temp.push(item.left);
//         });
//         result.push(levelResult);
//         queue = temp;
//     }
// }

// function getLen(str) {
//     if (!str) return;
//     let i = 0;
//     let j = 0;
//     while(i < str.length) {

//     }
// }