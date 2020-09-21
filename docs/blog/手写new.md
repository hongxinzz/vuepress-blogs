# 手写new

```js
/**
 * 1.创建一个新的对象
 * 2.将函授的作用域赋值给了新对象(改变this)
 * 3.为这个对象添加属性
 * 4.返回一个新的对象
 * @returns {*}
 */
function _new(){
    let obj = {};
    let result;
    //arguments 是一个伪数组 所以不能用shift 所以创建一个空数组
    let Con = [].shift.call(arguments);
    //指向原型
    obj.__proto__ = Con.prototype;
    //绑定this。 apply方式
    result = Con.apply(obj,arguments);
    // 类型判断
    return result instanceof Object ? result : obj;
}
```