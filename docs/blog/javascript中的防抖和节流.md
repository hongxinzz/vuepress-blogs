#  javascript中的防抖和节流

## debounce
函数防抖（debounce）：当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时.

```js
function debounce(fn, wait) {
    var timeout = null;
    return function() {
        if(timeout !== null) 
                clearTimeout(timeout);
        timeout = setTimeout(fn, wait);
    }
}
// 处理函数
function handle() {
    console.log(Math.random()); 
}
// 滚动事件
window.addEventListener('scroll', debounce(handle, 1000));
```

## throttle

函数节流（throttle）：当持续触发事件时，保证一定时间段内只调用一次事件处理函数。节流通俗解释就比如我们水龙头放水，阀门一打开，水哗哗的往下流，秉着勤俭节约的优良传统美德，我们要把水龙头关小点，最好是如我们心意按照一定规律在某个时间间隔内一滴一滴的往下滴。
```js
function throttle (fn,time){
  var fristTime =  Date.now();
  return function(){
    var self = this,
        args = arguments;
    var nowTime =  Date.now();
    if(nowTime - fristTime > time){
      fn.apply(self, args);
      fristTime = Date.now();
    }
  }
}
function handle() {
  console.log(Math.random());
}
window.addEventListener('scroll', throttle(handle, 1000));
```