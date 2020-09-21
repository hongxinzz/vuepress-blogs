# JavaScript 变量、作用域

## 引用类型和基本类型

1. ES5中目前有`Undefined`、`Null`、`Boolean`、`Number`、`String`
2. 引用类型的值是保存在内存中的对象。
3. **基本类型**值指的是简单的数据段，而**引用类型**值指那些可能由多个值构成的对象

## 复制变量值

1. 基本类型的值是独立空间存储的并且存储在栈中
```js
//基本类型
var a = 1;
var b = a;
b = 2;
console.log(a,b)// 1 2
```

![基本类型](http://img.freddyhx.xyz/blog/scope/1.png '基本类型')

```js
//引用类型
var obj = {a:1};
var copyObj = obj;
obj.a = 2;
console.log(obj.a,copyObj.a)
```

2. 引用类型的值是也是独立空间存储并且存储在堆中，如果两个变量引用同个对象，指针会指向同一个对象。(所以引发出深浅拷贝的考点)

![引用类型](http://img.freddyhx.xyz/blog/scope/2.png '引用类型')

## 参数传递
1. 把函数外部的值复制给函数内部的参数，就和把值从一个变量复制到另一个变量一样(是引用类型那就是引用类型，是基本类型就是基本类型)

```js
//基本类型
var a = 1;
function fn(a) {
  a = 2;
  console.log(a)//2
}
fn(a)
console.log(a)//1

//引用类型
var obj = {
	a:1,
}
function fn1(o) {
  o.a = 2;
  console.log(o.a);
}
fn1(obj)
console.log(obj.a)
```

## 执行环境及作用域

> 作用域分为`全局作用域`和`局部作用域`

1. 全局下的作用域在程序关闭时才会注销
2. 局部作用域在执行完毕后会被注销

> 每个函数都有自己的***执行环境***

> 作用域链的用途，是保证对执行环境有权访问的所有变量和函数的有序访问 

1. 内部环境可以通过作用域链访问所有的外部环境
2. 外部环境不能访问内部环境中的任何变量和函数
3. 局部作用域可以足级向上搜索如果没有找到就是未定义，全局作用域不可以向下搜索

```js
//局部访问全局
var a = 1;
function fn() {
  console.log(a) //1 局部作用域没有1 所以向上找外一层作用域的a
}
fn()

// 局部作用域向上搜索
var a = 1;
function test() {
	var b = 2;
  function test2() {
    console.log(a,b)//1,2
  }
  test2()
}
test()

//全局作用域不可以向下搜索
function fn1() {
  var b = 1;
  console.log(b);
}
fn1();
console.log(b)// b is not defined
```

### 块级作用域
> 在`es5`里`javascript`不像`c++`语言相似有块级作用域这个说法

1. `JavaScript` 中，if语句中的变量声明会将变量添加到当前的执行环境;
2. 初始化变量时没有使用`var`声明，该变量会自动被添加到全局环境;

```js
// a相当于在全局作用域下
if(true){
	var a = 1;
}
console.log(a)

function fn() {
  if(true){
  	var b = 1;
  }
  if(true){
  	 c = 2;
  }
  if(false){
  	var d = 3;
  }
  console.log(b)//1
  console.log(d)//undefined 变量提升
}
fn()
console.log(c)//2 c没有var 声明 自动添加到全局环境
```

## 总结

- 基本类型值在内存中占据固定大小的空间，因此被保存在栈内存中；
- 引用类型的值是对象，保存在堆内存中(引用类型值的变量实际上包含的并不是对象本身，而是一个指向该对象的指针);
- 执行环境有全局执行环境和局部执行环境之分;
- 函数的局部环境不仅有权访问函数作用域中的变量，而且有权访问其包含（父）环境，乃至全局环境;
- 初始化变量时没有使用`var`声明，该变量会自动被添加到全局环境