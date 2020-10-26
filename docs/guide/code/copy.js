
function deepCopy(source) {
    if (typeof obj !== 'object') return;
    var newObj = obj instanceof Array ? [] : {};
    for(var key in source) {
        if(obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }
}