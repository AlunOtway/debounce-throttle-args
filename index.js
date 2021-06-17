function debounce(fn,timer) {
    let temp = null;
    let coolDowned = true;
    return function callback() {
        if (!coolDowned){
            return false
        }
        if (temp){
            clearTimeout(temp)
        }
        if (coolDowned){
            fn.apply(this,arguments)
        }
        coolDowned = false;
        temp = setTimeout(function () {
            coolDowned = true;
        },timer)
    }
}
function throttle(fn,timer) {
    let preTime = 0;
    return function callback() {
        let currentTime = new Date().getTime()
        if (currentTime-preTime > timer){
            fn.apply(this,arguments)
            preTime = currentTime
        }
    }
}

module.exports = {
    debounce,
    throttle
}
