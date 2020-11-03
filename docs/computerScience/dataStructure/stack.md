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
