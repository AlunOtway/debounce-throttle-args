(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
let {debounce,throttle}  = require('../index')
document.querySelector(".debounce-button").addEventListener("click",debounce(handleClick,2000,"zhangsan","lisi"))

document.querySelector(".throttle-button").addEventListener("click",throttle(handleClick,2000,"wangwu","zhaoliu"))

function handleClick(name1,name2) {
    console.log(this)
    console.log(event)
    console.log(arguments)
    console.log(name1,name2)
}
},{"../index":1}]},{},[2]);
