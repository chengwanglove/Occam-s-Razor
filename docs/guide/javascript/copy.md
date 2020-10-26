# 拷贝

## 数组

* 浅拷贝 slice concat 进行拷贝

```
const arr = ['old', 1, true, null, undefined];
let new_arr = arr.concat();
new_arr[0] = 'new';
console.log(arr);
console.log(new_arr);
```

* slice

```
var new_arr = arr.slice();
```

如果数组元素是基本类型，就会拷贝一份，互不影响，而如果是对象或者数组，就会只拷贝对象和数组的引用，这样我们无论在新旧数组进行了修改，两者都会发生变化。  concat 和 slice 是一种浅拷贝。

### 数组深拷贝

```
方法一:
var arr = ['old', 1, true, ['old1', 'old2'], {old: 1}]

var new_arr = JSON.parse( JSON.stringify(arr) );

console.log(new_arr); // 不能拷贝函数

方法二:
function deepCopy(source) {
    if (typeof obj !== 'object') return;
    var newObj = obj instanceof Array ? [] : {};
    for(var key in source) {
        if(obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }
}
```