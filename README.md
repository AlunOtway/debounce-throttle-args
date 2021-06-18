# debounce-throttle
If you want to use the debounce or throttling.
I'd be more than happy to introduce you to .
This tool not only supports parameter transfer, but also can customize the throttling threshold.
This encapsulation solves the of the this pointing problem and the parameter problem of the arguments


#Features 
- Support for parameter transfer
- Support for throttle value
- Use "this" and "envent" normally

#installation


    npm install debounce-throttle-args --save


#demo

**html**


    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Title</title>
    </head>
    <body>
    <input class="debounce-button" type="button" value="debounce-按钮">
    <input class="throttle-button" type="button" value="throttle-按钮">
    </body>
    <script src="../dist/bundle.js"></script>
    </html>


**main.js**

You may use webpack or browserify to package it

Finally, convert to a 'bundlejs' that the browser can recognize

    let {debounce,throttle}  = require('debounce-throttle-args')
    document.querySelector(".debounce-button").addEventListener("click",debounce(handleClick,2000,"zhangsan","lisi"))
    
    document.querySelector(".throttle-button").addEventListener("click",throttle(handleClick,2000,"wangwu","zhaoliu"))
    
    function handleClick(name1,name2) {
    console.log(this)
    console.log(event)
    console.log(arguments)
    console.log(name1,name2)
    }

