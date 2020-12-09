

// Function.prototype.call2 = function(_this) {
//     const context = _this;
//     context.fn = this;
//     const args = [].slice.call(arguments, 1);
//     context.fn(...args);
//     delete context.fn()
// }


// function f1() {
//    console.log(1);
// }

// function f2() {
//  console.log(2);
// }

// f1.call.call.call(f2);

// Array.prototype.reduce2 = function(internal, init = '') {
//     // todo 数组判断 否则抛出错误
//     let prev = init || this[0];
//     for(let i = 0; i < this.length; i++) {
//         prev = internal(prev, this[i], i, this);
//     }
//     return prev;
// }

// function myInstanceOf(left, right) {
//     let proto = left._proto_;
//     const prototype = right.prototype;
//     while(true) {
//         if (left === null) {
//             return false;
//         }
//         if (proto == prototype) {
//             return true
//         }
//         proto = proto._proto_;
//     }
// }

// 实现一个object.create函数
// function create(proto) {
//     function Fn() {};
//     // 将Fn的原型指向传入的 proto
//     Fn.prototype = proto;
//     Fn.prototype.constructor = Fn;
//     return new Fn();
// };

// 颗粒化函数

// 判断传递的参数是否达到执行函数的fn个数
// 没有达到的话，继续返回新的函数，将fn函数继续返回并将剩余参数累加
// 达到fn参数个数时，将累加后的参数传给fn执行

// function throttle (fn, delay) {
//     let flag = true;
//     return function(...args) {
//         if (!flag) return;
//         flag = false;
//         setTimeout(() => {
//             fn.apply(this, args)
//         }, delay)
//     }
// }

/**
 * 
 * @param  {...any} fns 
 */

const pipe = (...fns) => (...args) => {
    const lastFn = fns.shift();
    fns.reduceRight((prev, next) => {
        prev(next)
    }, lastFn(...args))
}

// 组合函数
const compose = (...fns) => fns.reduce((a, b) => (...args) => b(a(args)))


// mixin的实现方式
const logMixin = {
    // todo 方法名
}

function User() {

}

const target = Object.assign(User.prototype, logMixin);

// mixins 实现代码公用

// 危害 相互依赖 相互耦合 不利于代码维护 不同mixin方法可能存在冲突 react已经不再推荐使用minxin来实现代码复用


// 装饰者模式是在程序运行期间 不改变对象的基础上 给对象增加新的属性

// hoc 是什么 function 返回是个组件 实现方式是 属性代理 加 反向继承


// function WrapperComponent(component) {
//     // 可以加prop ref通过回调添加 可操作static方法 可操作props 可操作refs 可操作生命周期
//     return class A extends Component{
//         constructor
//         return (
//             <component  {...this.props}></component>
//         )
//     }
// }
// 反向继承 都可以操作生命周期 state props statics refs render 修改dom树

// 实现功能 组合渲染 条件渲染 操作props 获取refs 渲染劫持

// 如何使用hoc

const compose = (...fns) => fns.reduce((prev, next) => (...args) => next(prev(args)));