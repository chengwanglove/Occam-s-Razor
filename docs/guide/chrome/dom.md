# dom不完全指南

## 获取单个元素

* document.querySelector 传入任何css元素都可以获取单个dom

## 获取dom元素集合

* document.querySelectorAll 返回一个静态的NodeList 累数组转换为数组

## 元素的局部搜索

```
const $container = document.querySelector('#container');
$container.querySelector();


const $ = document.querySelector.bind(document);
```

## 添加dom元素

```
const eleA = document.createElement('a');
eleA.setAttribute();
eleA.className = '';
eleA.textContent();

document.body.appendChild();
```

## 移动元素

* insertAdjacentElement;


## 替换dom元素

* parentNode.replaceChild(newNode, oldNode);

## 移除dom元素

```
target.parentNode.removeChild(target);
```