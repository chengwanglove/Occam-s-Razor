# debounce and throttle

## debounce

```
// 第六版
function debounce(func, wait, immediate) {

    var timeout, result;

    var debounced = function () {
        var context = this;
        var args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timeout;
            timeout = setTimeout(function(){
                timeout = null;
            }, wait)
            if (callNow) result = func.apply(context, args)
        }
        else {
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
        return result;
    };

    debounced.cancel = function() {
        clearTimeout(timeout);
        timeout = null;
    };

    return debounced;
}
```

## 节流

* 如果你持续触发事件，每隔一段时间，只执行一次事件。

```
 function throttle(func, wait) {
    var startTime = 0;
    var timerOut;
    return function() {
        var context = this;
        var args = arguments;
        var now = new Date().getTime();
        if (!startTime) {
            func.apply(context, args);
            startTime = now;
            timerOut = setTimeout(()=> {
                timerOut = null;
            }, wait);
        }
        if (!timerOut && startTime) {
            timerOut = setTimeout(()=> {
                func.apply(context, args);
                timerOut = null;
            }, wait);
        }
    }
}
```