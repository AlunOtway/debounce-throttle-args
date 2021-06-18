function debounce(fn,delay,...args) {
    let temp = null;
    let coolDowned = true;
    return function callback() {
        if (!coolDowned){
            return false
        }
        if (temp){
            clearTimeout(temp)
        }
        [].unshift.apply(arguments,args)
        if (coolDowned){
            fn.apply(this,arguments)
        }
        coolDowned = false;
        temp = setTimeout(function () {
            coolDowned = true;
        },delay)
    }
}
function throttle(fn,delay,...args) {
    let preTime = 0;
    return function callback() {
        [].unshift.apply(arguments,args)
        let currentTime = new Date().getTime()
        if (currentTime-preTime > delay){
            fn.apply(this,arguments)
            preTime = currentTime
        }
    }
}

module.exports = {
    debounce,
    throttle
}
