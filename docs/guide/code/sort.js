const tree = {
	name: 'root',
	children: [
		{
			name: 'c1',
			children: [
				{
						name: 'c11',
					children: []		
					},
					{
						name: 'c12',
					children: []		
				}
			]
		},
		{
			name: 'c2',
			children: [
				{
						name: 'c21',
					children: []		
					},
					{
						name: 'c22',
					children: []		
				}
			]
		}
	]
}

// 深度优先的方式遍历 打印 name
// ['root', 'c1','c11', 'c12', 'c2', 'c21', 'c22']
// function dfs(tree) {
// 	let result = [];
// 	let nameArr = [];
// 	result.push(tree);
// 	while(result.length > 0) {
// 		let item = result.pop();
// 		nameArr.push(item.name);
// 		item.children.forEach(child => {
// 			result.push(child);
// 		});
// 	}
// 	return nameArr;
// }
// function dfs(tree, result = []) {
// 	if (tree) {
// 		result.push(tree.name);
// 		for(let i = 0; i < tree.children.length ; i++) {
// 			dfs( tree.children[i], result);
// 		}
// 	}
// 	return result;
// }


// console.log(dfs(tree));

const maxDepth = (root) => {
	if (!root) 0;
	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}