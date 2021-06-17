let {debounce}  = require('../lib/debounce')
document.querySelector(".button").addEventListener("click",debounce(handleClick,2000))
function handleClick() {
    console.log("点击")
}