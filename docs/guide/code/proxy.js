
/**
 * 
 * @param {*} fn
 * @param {*} proxy
 * 代理模式 
 */
const fnProxy = (fn, proxy) => {
    return (...args) =>{
        return proxy(args, fn);
    }
}


let obj = {};
let p = new Proxy(obj, {
    set: (target, prop, value) => {
        target[prop] = value * 2;
    },
    get: (target, prop) => {
        return 1;
    }
})

p.a = 2;
console.log(p.a);