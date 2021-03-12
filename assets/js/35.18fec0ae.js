(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{396:function(t,s,a){"use strict";a.r(s);var e=a(24),_=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),a("h2",{attrs:{id:"如果创建对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果创建对象"}},[t._v("#")]),t._v(" 如果创建对象")]),t._v(" "),a("ul",[a("li",[t._v("在Javascript中我们可以通过三种方式创建对象。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"通过面向对象分析原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过面向对象分析原型链"}},[t._v("#")]),t._v(" 通过面向对象分析原型链")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" test "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("在上述代码中我们创建了一个Test函数，并通过"),a("code",[t._v("new")]),t._v("关键字将实例赋值给了"),a("code",[t._v("test")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("接下来我们可以尝试在控制台 输出"),a("code",[t._v("Test")]),t._v("和 "),a("code",[t._v("test")]),t._v("。")])])]),t._v(" "),a("p",[a("strong",[t._v("Test")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/TestFn.png",alt:"构造函数"}})]),t._v(" "),a("ul",[a("li",[t._v("构造函数中有2个属性分别为"),a("code",[t._v("__proto__")]),t._v("和"),a("code",[t._v("prototype")]),t._v("。")]),t._v(" "),a("li",[t._v("其中 "),a("code",[t._v("prototype")]),t._v("还有一个"),a("code",[t._v("constructor")]),t._v("指向"),a("code",[t._v("Test")]),t._v("本身。")])]),t._v(" "),a("p",[a("strong",[t._v("test")]),t._v(" "),a("img",{attrs:{src:"/img/test.png",alt:"实例化对象"}})]),t._v(" "),a("ul",[a("li",[t._v("而在实例化对象"),a("code",[t._v("test")]),t._v(" 我们只看到了"),a("code",[t._v("__proto__")]),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"小总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小总结"}},[t._v("#")]),t._v(" 小总结")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("prototype")]),t._v(" 是函数中独有的，并且"),a("code",[t._v("function")]),t._v("本质是一个对象所以也有"),a("code",[t._v("__proto__")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"原型链的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型链的关系"}},[t._v("#")]),t._v(" 原型链的关系")]),t._v(" "),a("h3",{attrs:{id:"从实例化对象-test-入手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从实例化对象-test-入手"}},[t._v("#")]),t._v(" 从实例化对象 "),a("code",[t._v("test")]),t._v(" 入手")]),t._v(" "),a("ul",[a("li",[t._v("上图中我们发现"),a("code",[t._v("test.__proto__")]),t._v("也有一个"),a("code",[t._v("constructor")]),t._v("并且也指向了"),a("code",[t._v("Test")]),t._v(",所以我们可以得出。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("ul",[a("li",[a("code",[t._v("test.__proto__")]),t._v(" 中还有一个"),a("code",[t._v("__proto__")]),t._v("属性，我们可以推断出"),a("code",[t._v("test.__proto__.__proto__")]),t._v("的"),a("code",[t._v("constructor")]),t._v("是不是也是指向一个构造函数本身呢？我们可以在控制台输出来看下。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("ul",[a("li",[t._v("我们可以继续向上推 "),a("code",[t._v("test.__proto__.__proto__.__proto__")]),t._v("，结果输出了"),a("code",[t._v("null")]),t._v(",我们可以推断出，原型链的顶端就是"),a("code",[t._v("null")]),t._v("。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// null")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"/img/test-null.png",alt:"null"}})]),t._v(" "),a("ul",[a("li",[t._v("到此我们分析完了"),a("code",[t._v("test")]),t._v("上的原型链。")])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"从构造函数-test-入手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从构造函数-test-入手"}},[t._v("#")]),t._v(" 从构造函数 "),a("code",[t._v("Test")]),t._v(" 入手")]),t._v(" "),a("p",[a("strong",[t._v("prototype")])]),t._v(" "),a("ul",[a("li",[t._v("上图中我们发现"),a("code",[t._v("Test.prototype.__proto__")]),t._v("也有一个"),a("code",[t._v("constructor")]),t._v("并且也指向了"),a("code",[t._v("Object")]),t._v(",所以我们可以得出。这个和分析"),a("code",[t._v("test")]),t._v("是一样的。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//null")]),t._v("\n")])])]),a("p",[a("strong",[a("code",[t._v("__proto__")])])]),t._v(" "),a("blockquote",[a("p",[t._v("注意: 我们刚刚说过构造函数"),a("code",[t._v("Test")]),t._v("本质也是一个对象。")])]),t._v(" "),a("ul",[a("li",[t._v("上图中我们发现"),a("code",[t._v("Test.__proto__")]),t._v("也有一个"),a("code",[t._v("constructor")]),t._v("并且指向了"),a("code",[t._v("Function")]),t._v(",我们就知道了原来"),a("code",[t._v("function")]),t._v("是通过"),a("code",[t._v("Function")]),t._v("产生的。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("ul",[a("li",[t._v("图中的 "),a("code",[t._v("Test.__proto__.__proto__")]),t._v("又指向了向了"),a("code",[t._v("Object")]),t._v("，所以我们也可以知道.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])])]),a("ul",[a("li",[t._v("到此我们分析完了"),a("code",[t._v("Test")]),t._v("上的原型链。")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("在上面的分析中我们清楚的知道")])]),t._v(" "),a("ul",[a("li",[t._v("实例化对象和我们的"),a("code",[t._v("Object")]),t._v("有直接关联，我们可以称为"),a("code",[t._v("Object")]),t._v("是数理化对象的宿主。")]),t._v(" "),a("li",[t._v("而在函数对象上的 "),a("code",[t._v("__propt__")]),t._v(" 会指向一个 "),a("code",[t._v("Function")]),t._v("构造函数，而"),a("code",[t._v("Function")]),t._v("构造函数的上一层就是 "),a("code",[t._v("Object")]),t._v("这个构造函数。")])]),t._v(" "),a("blockquote",[a("p",[t._v("宿主关系：实例化对象 -> Function -> Object")])]),t._v(" "),a("h2",{attrs:{id:"instanceof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instanceof"}},[t._v("#")]),t._v(" instanceof")]),t._v(" "),a("p",[t._v("为了验证我们刚刚的总结是否真确，我们可以通过"),a("code",[t._v("instanceof")]),t._v("用来判断运算符用于检测构造函数的"),a("code",[t._v("prototype")]),t._v("属性是否出现在某个实例对象的原型链上。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//实例和构造函数Tets的关系")]),t._v("\ntest "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//构造函数")]),t._v("\nTest "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\nTest "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//实例化对象")]),t._v("\ntest "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\ntest "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Function构造函数")]),t._v("\nFunction "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])])]),a("hr"),t._v(" "),a("ul",[a("li",[t._v("附上一张原型链神图\n"),a("img",{attrs:{src:"/img/prototype.jpg",alt:"null"}})])])])}),[],!1,null,null,null);s.default=_.exports}}]);