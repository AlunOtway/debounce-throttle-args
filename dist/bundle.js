(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

module.exports = {
    debounce
}

},{}],2:[function(require,module,exports){
let {debounce}  = require('../lib/debounce')
document.querySelector(".button").addEventListener("click",debounce(handleClick,2000))
function handleClick() {
    console.log("点击")
}
},{"../lib/debounce":1}]},{},[2]);
