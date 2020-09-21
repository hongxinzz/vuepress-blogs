# JavaScript 预编译AO、GO

## 浏览器编译过程:

> 检查通篇的语法错误

> 解释一行 执行一行

```js
<script>
    console.log(a;)//Uncaught SyntaxError: missing ) after argument list
    console.log(a) //Uncaught ReferenceError: a is not defined
</script>
```

## 声明提升:

> 函数声明整体提升
> 变量只有生命提升，赋值不提升

```js
test()
function test(){
    console.log(1) //1
}

console.log(a)// undefined                var a;
var a = 1;                                   =>      console.log(a)
                                                             a = 1;

```

>  抛出一个问题:下面输出什么？

```js
console.log(a); 
function a (a){
    var a = 10;
    var a = function(){
        
    }
}
var a = 1;

//ƒ a (a){
    var a = 10;
    var a = function(){
        
    }
}
```

## 变量的声明:

> 在声明一个变量时不管有没有var 都会默认挂载在window身上


```js
var a = 1;                         window = { a:1,b:2}
b =2;                   =>      console.log(a,window.b)// 1,2
```

## 函数体内的预编译:
 

>  `AO Activation Object`  活跃对象，函数上下文

> 可以理解成一个`AO`对象并且存储了函数体内执行和未执行的变化

```js
function test(a){
    console.log(a); //function a(){} 函数提升
    var a = 1;
    console.log(a);//1 赋值
    function a(){}
    console.log(a) //1 赋值
    var b = function(){}
    console.log(b) //function(){} 函数提升
    function d(){}
}
//函数未运行时 预编译
//AO = {
//    a: 变量提升 undefined -> 形参 2 -> 函数体 function a(){}
//    b: 变量提升 undefined
//    d: 变量提升 function d(){}
// }
test(2)
//运行函数
//AO = {
//    a: 变量提升 undefined -> 形参 2 -> 函数体 function a(){} -> 赋值 1 
//    b: 变量提升 undefined-> 赋值 function(){}
//    d: 函数提升 function d(){}
// }

//总结:
//    1.寻找形参和变量声明
//    2.实参赋值给形参
//    3.找函数声明，进行赋值操作
//    4.执行



//再试试一题
   function test2(a,b){
        console.log(a);//1  形参赋值
        c = 0;
        var c;
        a = 5;
        b = 6;
        console.log(b);//6 赋值
        function b(){};
        function d(){};
        console.log(b)//6 赋值
    }

    test2(1)
// AO = {
//    a: 变量提升 undefined -> 形参 1 -> 赋值 5
//    b: 函数提升 function b(){} -> 赋值6;
//    d: 变量提升 function d(){}
//    c: not defined  -> 赋值 0
//    d: function d(){}
// }
```

> 2.`GO Global Object `全局上下文

> 相对于`AO` 少了一个参数的操作

```js
console.log(a) //function a(){}
var a = 1;
function a(){}
console.log(a)//1

//GO = {
//    a:undefined ->functiona a(){} -> 1
//}

//总结:
//    1.找变量声明
//    2.找函数声明
//    3.赋值

```
## 实战:
```js
//AO GO 结合实战
function test(){
    console.log(b); //undefind
    if(a){ //函数执行时 a为undefined，undefined为false
        var b = 2;
    }
    c = 3; 
    console.log(c) //3
}
var a;
test();
a = 1;
console.log(a)// 1

// // 未执行AO GO 分析
// AO = {
//     b:undefined //为什么会直接undefined 因为在预编译阶段var变量该提升还是提升 当函数执行时才会去执行if语句
// }
// GO = {
//     a:undefined,
//     test:function test(){},
//     c:3 //在函数体内不是通过 var声明都会挂载在window身上
// }

// 执行AO GO 分析
// AO = {
//     b:undefined 
// }
// GO = {
//     a:undefined -> 1,
//     test:function test(){},
//     c:3 
// }
```