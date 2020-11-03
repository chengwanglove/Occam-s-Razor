# 栈和队列

```
方法栈
class Stack{
    constructor() {
        this.data = [];
        this.top = 0;
    }
    add(item) {
        this.data[this.top++] = item;
    }
    clear () {
        this.data = [];
        this.top = 0;
    }
    pop() {
        if (this.top == 0) {
            return null;
        }
        return this.data[--this.top];
    }
    getLength() {
        return this.top;
    }
}
```

## 队列

- 先进先出

## 汉明距离

- 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目给出两个整数 x 和 y，计算它们之间的汉明距离

```

```
