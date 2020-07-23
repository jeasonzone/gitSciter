(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{378:function(v,e,_){"use strict";_.r(e);var t=_(28),n=Object(t.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"自定义组件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#自定义组件"}},[v._v("#")]),v._v(" 自定义组件")]),v._v(" "),_("p",[v._v("Sciter提供了三种DOM元素的扩展方式:")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("行为(Behavior)")]),v._v(" - 任意DOM元素, 无论已存在的或自定义的元素, 都可以通过一个脚本类进行扩展。这个类可以定义新的属性、方法和事件处理器。 行为(Behavior)可以通过声明进行赋值 - 通过使用CSS中的"),_("code",[v._v("prototype")]),v._v("属性 或者 在代码中手动的修改已存在DOM元素的"),_("code",[v._v("prototype")]),v._v("属性。")]),v._v(" "),_("li",[_("strong",[v._v("切面(Aspect)")]),v._v(" - 任意DOM元素可以有一个声明在它之上调用的函数集合。这些切面(aspect)函数当被调用时，可以根据需要配置该元素，比如: 修改属性、附加事件处理器等等。切面(Aspect)可以通过声明进行赋值 - 通过使用CSS中的"),_("code",[v._v("aspect")]),v._v("属性。")]),v._v(" "),_("li",[v._v("特别的"),_("strong",[v._v("事件处理器")]),v._v(" - 它是一个函数，可以在代码中显示地设置到DOM元素上。")])]),v._v(" "),_("h2",[v._v("行为(Behavior)")]),v._v(" "),_("p",[v._v("Behavior类是在代码中定义的从stock Element类派生的脚本类。")]),v._v(" "),_("h3",[v._v("声明式行为(Behavior)赋值")]),v._v(" "),_("p",[v._v("行为的声明式赋值是在CSS中使用prototype属性:")]),v._v(" "),_("pre",{pre:!0},[_("code",[_("em",[v._v("selector")]),v._v(" {\n    prototype: "),_("em",[v._v("ClassName")]),v._v(" "),_("em",[v._v("url(file.tis)")]),v._v(";\n    /* ... 其他CSS属性 */\n}\n")])]),v._v(" "),_("p",[v._v("其中:")]),v._v(" "),_("ul",[_("li",[_("em",[v._v("selector")]),v._v("是一个有效的CSS选择器, 示例:")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("input[type=foo] { prototype: MyWidget; }")]),v._v("  ")]),v._v(" "),_("li",[_("code",[v._v("foo { display:block; prototype: MyWidget; }")])]),v._v(" "),_("li",[_("code",[v._v("widget { prototype: MyWidget; }")])])]),v._v(" "),_("li",[_("em",[v._v("ClassName")]),v._v("是你的脚本类的名称;")]),v._v(" "),_("li",[_("em",[v._v("url(file.tis)")]),v._v("是包含该脚本类的脚本文件的url。如果脚本类是定义在文档本身的script节中的话，这个字段是可省略的。")])]),v._v(" "),_("h3",[v._v("Behavior类的声明")]),v._v(" "),_("p",[v._v("Behavior是一个从stock "),_("code",[v._v("Element")]),v._v("类或其他行为类派生的类。下面是一个行为类的模板:")]),v._v(" "),_("pre",{pre:!0},[_("code",[_("u",[v._v("class")]),v._v(" MyWidget : "),_("u",[v._v("Element\n")]),v._v("{\n   // 实例变量, 每个元素将拥有这些变量的一份副本。\n   "),_("u",[v._v("this var")]),v._v(' foo = "foo";\n   ...\n   // 类变量, 所有实例共享这个类的这些变量\n   '),_("u",[v._v("var")]),v._v(' bar = "bar";\n   ...\n   // 生命周期方法:\n   // behavior的"constructor", 当元素获取到该类时被调用\n   '),_("u",[v._v("function")]),v._v(" "),_("em",[v._v("attached")]),v._v("() { /* "),_("em",[v._v("this ")]),v._v('指代该元素 */ }\n   // behavior的"destructor", 当元素失去该类时被调用\n   '),_("u",[v._v("function")]),v._v(" "),_("em",[v._v("detached")]),v._v("() { /* "),_("em",[v._v("this")]),v._v("指代该元素 */ }\n   // 虚拟(virtual)属性\n   "),_("u",[v._v("property")]),v._v(" baz(v) { ... }\n   // 和方法\n   "),_("u",[v._v("function")]),v._v(" boo() { ... }\n   // 事件处理器:\n   // 点击事件\n   "),_("u",[v._v("event")]),v._v(" click (evt, that) { /* 注意: "),_("em",[v._v("this")]),v._v("指代生成click事件的元素\n                                "),_("em",[v._v("that")]),v._v('为订阅元素 - 一个MyWidget类的实例 */ }\n   // 在 <a class="next">元素上的点击事件\n   '),_("u",[v._v("event")]),v._v(" click $(a.next) (evt, that) { ... /* 注意: "),_("em",[v._v("this")]),v._v("指代a.next元素，即生成click事件的元素 */  }\n   ...\n}\n")])]),v._v(" "),_("h4",[_("em",[v._v("this")]),v._v("环境变量")]),v._v(" "),_("p",[v._v("所有的方法、事件处理器和属性在运行期被调用时，"),_("code",[v._v("this")]),v._v("变量被设置为该行为类绑定的元素实例上。")]),v._v(" "),_("h2",[v._v("切面(Aspect)")]),v._v(" "),_("p",[v._v("行为(Behavior)类的主要问题是元素在同一时间上只能绑定一个行为类。不过切面(Aspect)却可以通过向DOM元素上定义一个(切面)函数集合来解决这个问题。")]),v._v(" "),_("h3",[v._v("切面(Aspect)声明式赋值")]),v._v(" "),_("p",[_("font",{attrs:{size:"2"}},[v._v("切面(Aspect)可以通过"),_("code",[v._v("aspect")]),v._v(" CSS属性进行赋值")]),v._v(":")],1),v._v(" "),_("pre",{pre:!0},[_("code",[v._v("  aspect: function-name [ url(of-function-implementation-file) ];\n")])]),v._v(" "),_("p",[v._v("其中，"),_("code",[v._v('"function-name"')]),v._v("是“aspect”函数的完整名称，它用于在元素上配置/装载一些扩展功能。"),_("code",[v._v("url(...)")]),v._v("是定义该切面函数的所在脚本文件。")]),v._v(" "),_("p",[v._v("切面处理的原则:")]),v._v(" "),_("p",[v._v("“aspect”函数是一个普通的脚本函数，当它被调用时:")]),v._v(" "),_("ol",[_("li",[_("code",[v._v("this")]),v._v("变量被设置为满足CSS规则的DOM元素实例。")]),v._v(" "),_("li",[v._v("在DOM元素的每个生命周期中仅被触发一次。")])]),v._v(" "),_("p",[v._v("CSS的aspect属性使用非标准的继承方式 – 如果元素匹配了多个定义了"),_("code",[v._v("aspect")]),v._v("属性的CSS规则，该元素会生成一个来自所有这些规则定义的aspect函数列表。比如，如果你有下面这样的规则(示例取自Plus框架):")]),v._v(" "),_("pre",{pre:!0},[_("code",[v._v("[click] { aspect:Plus.Click; }\n[dblclick] { aspect:Plus.DblClick; }\n")])]),v._v(" "),_("p",[v._v("并且在HTML标记中定义了这样的元素：")]),v._v(" "),_("pre",{pre:!0},[_("code",[v._v('<b id="clickable" click="..." dblclick="...">text</b>\n')])]),v._v(" "),_("p",[v._v("则该元素将产生两次调用 – "),_("code",[v._v("Plus.Click()")]),v._v("和"),_("code",[v._v("Plus.DblClick()")]),v._v(", 你也可以在CSS中将它们定义为下面这种形式:")]),v._v(" "),_("pre",{pre:!0},[_("code",[v._v('#clickable { aspect:"Plus.Click" "Plus.DblClick"; }\n')])]),v._v(" "),_("p",[v._v("aspect机制已经在Sciter SDK中的Plus( /samples/+plus/ )和Lang( /samples/+lang/ )中被广泛的使用。Plus提供了类似AngularJS的数据绑定功能，Lang提供了i18n的相关支持。")]),v._v(" "),_("h4",[v._v("含参数切面定义")]),v._v(" "),_("p",[v._v("Aspect函数在CSS中赋值时可以包含一个参数:")]),v._v(" "),_("pre",{pre:!0},[_("code",[v._v("#chart { aspect: MicroChart.Donut(fill: #f00 #0f0 #00f, thickness:0.2 ); }\n")])]),v._v(" "),_("p",[v._v("这样在"),_("code",[v._v("MicroChart.Donut")]),v._v("函数被调用时，它将有一个对象参数:")]),v._v(" "),_("pre",{pre:!0},[_("code",[v._v("const params = {\n  fill: [ color(255,0,0), color(0,255,0), color(0,0,255) ],\n  thickness: 0.2\n};\nMicroChart.Donut(params); // 实际上是调用MicroChart.Donut.call(domElement,params);\n")])]),v._v(" "),_("p",[v._v("如果你的切面函数支持参数，则它的签名应该为:")]),v._v(" "),_("pre",{pre:!0},[_("code",[v._v("namespace MicroChart {\n  function Donut(params = {}) {\n    // do something with this element ...\n  }\n}\n")])]),v._v(" "),_("p",[v._v("这样就可以既支持有参数的，也可以支持无参数的切面函数。")]),v._v(" "),_("h2",[v._v("事件(Event)处理器")]),v._v(" "),_("p",[v._v("UI编程就是各种各样的事件处理。在Sciter中，事件处理器是一个通过下列方法赋值到元素上的普通函数:")]),v._v(" "),_("h3",[v._v("事件函数")]),v._v(" "),_("p",[v._v("你可以在某处定义"),_("a",{attrs:{href:"../script/language/Functions.htm#event-functions"}},[v._v("事件函数")]),v._v("，然后在合适的位置通过移位运算符赋值到DOM元素上:")]),v._v(" "),_("pre",{pre:!0},[_("code",[v._v("// 一个基础的事件处理器\nelem << "),_("u",[v._v("event")]),v._v(" click () { ... }\n")])]),v._v(" "),_("p",[v._v("注意上面的"),_("code",[v._v("click")]),v._v("语句, 它是一个事件定义，它的格式为: "),_("em",[v._v("name")]),v._v("["),_("code",[v._v(".")]),_("em",[v._v("namespace")]),v._v("] ["),_("code",[v._v("$(")]),_("em",[v._v("selector")]),_("code",[v._v(")")]),v._v("]， 其中:")]),v._v(" "),_("ul",[_("li",[_("em",[v._v("name")]),v._v("是一个"),_("a",{attrs:{href:"Event.htm#symbolic-event-names"}},[v._v("已知事件")]),v._v(" 或 自定义事件 的名称;")]),v._v(" "),_("li",[_("em",[_("code",[v._v(".")]),v._v(" namespace")]),v._v("是类似jQuery中的任意的事件namespace的名称, 可省略;")]),v._v(" "),_("li",[_("em",[v._v("selector")]),v._v("是一个CSS选择器。如果提供了，则仅有满足条件的DOM元素上才能接收到事件, 可省略。")])]),v._v(" "),_("p",[v._v('这里是一个"change"事件的处理示例，它绑定到文档中任意一个<input type=text>元素上:')]),v._v(" "),_("pre",{pre:!0},[_("code",[v._v("elem << "),_("u",[v._v("event")]),v._v(" change $(input[type=text]) { \n  "),_("em",[v._v("// this")]),v._v(" 指代input[type=text]\n  var changedValue = this.value;\n  ...\n}\n")])]),v._v(" "),_("p",[v._v("事件的名称空间用于在必要时唯一标识该事件, 比如要"),_("strong",[v._v("unsubscribe")]),v._v("某个特定的事件处理器组:")]),v._v(" "),_("pre",{pre:!0},[_("code",[v._v('elem >> ".mygroup"; // 移除所有包含.mygroup名称空间的事件处理器\n')])]),v._v(" "),_("h3",[v._v("传统的事件处理函数")]),v._v(" "),_("p",[v._v("Element类的"),_("code",[v._v('Element.on("name.namespace", "selector", function )')]),v._v('方法可以用于根据指定的"name"向元素附加事件处理器。 ')]),v._v(" "),_("p",[v._v("还有，"),_("code",[v._v("Element.off(...) ")]),v._v("可用于解绑事件处理器。")])])}),[],!1,null,null,null);e.default=n.exports}}]);