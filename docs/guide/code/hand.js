
/**
 * 
 * @param {*} promises all的写法
 */
Promise.all = function(promises) {
    let count = 0;
    let result = [];
    return new Promise((resolve, reject) => {
        promises.forEach(item, index => {
            Promise.resolve(item).then((data) => {
                result[index] = data;
                if (++count === promises.length) {
                    resolve(result);
                }
            }, (err) => {
                reject(err);
            })
        });
    })
}

/**
 * 
 * @param {*} promises 
 */
Promise.race = function(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(item, index => {
            Promise.resolve(item).then((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            })
        });
    })
}

class MyPromise{
    REJECTED = 'rejected';
    RESOLVED = 'resolved';
    PENDING = 'pending';

    constructor(handle) {
        this.status = MyPromise.PENDING;
        this.value = undefined;
        this.onFullFilledCallBacks = [];
        this.onRejectCallBacks = [];

        handle(this._resolve.bind(this), this._reject.bind(this));


    }

    _resolve(value) {
        if(this.status == MyPromise.PENDING) return;
        this.value = value;
        this.status = MyPromise.RESOLVED;

        this.onFullFilledCallBacks.forEach((callBack) => {
            callBack(this.value);
        })
    }

    _reject() {
        if(this.status == MyPromise.PENDING) return;
        this.value = value;
        this.status = MyPromise.REJECTED;

        this.onRejectCallBacks.forEach((callBack) => {
            callBack(this.value);
        })
    }
}