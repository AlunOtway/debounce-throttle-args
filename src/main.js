let {debounce,throttle}  = require('../index')
document.querySelector(".debounce-button").addEventListener("click",debounce(handleClick,2000,"zhangsan","lisi"))

document.querySelector(".throttle-button").addEventListener("click",throttle(handleClick,2000,"wangwu","zhaoliu"))

function handleClick(name1,name2) {
    console.log(this)
    console.log(event)
    console.log(arguments)
    console.log(name1,name2)
}