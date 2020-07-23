(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{313:function(l,n,_){"use strict";_.r(n);var v=_(28),e=Object(v.a)({},(function(){var l=this,n=l.$createElement,_=l._self._c||n;return _("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[_("h2",{attrs:{id:"本地化-i18n-处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#本地化-i18n-处理"}},[l._v("#")]),l._v(" 本地化(i18n)处理")]),l._v(" "),_("h2",[l._v("1. 静态本地化：使用SGML实体")]),l._v(" "),_("p",[l._v("“静态”的意思是你提前知道你的UI语言，并且在运行期不会发生改变。")]),l._v(" "),_("p",[l._v("假设你有下面这样的文档:")]),l._v(" "),_("pre",[_("code",[l._v('<html>\n  <head>\n    <include src="lang:words.htm"/>\n  </head>\n<body>\n  <p>&hello; &world; !</p>\n</body>\n</html>')])]),l._v(" "),_("p",[l._v("并且还有两个entity表文件, words-en.htm :")]),l._v(" "),_("pre",[_("code",[l._v('<!ENTITY hello                "Hello">\n<!ENTITY world                "World">')])]),l._v(" "),_("p",[l._v("和 words-zh.htm :")]),l._v(" "),_("pre",[_("code",[l._v('<!ENTITY hello                "你好">\n<!ENTITY world                "世界">')])]),l._v(" "),_("p",[l._v("那么当加载这个主HTML文档时，你将在SCN_LOAD_DATA中接收到“lang:words.htm”的URL请求(见上面的"),_("code",[l._v("<include>")]),l._v("中的声明)。"),_("br"),l._v(" \n  对于这个请求的响应，你可以根据你的应用程序的需要觉得是返回“words-en.htm”或“words-zh.htm”的内容。")]),l._v(" "),_("h2",[l._v("2. 静态本地化：使用内嵌方式")]),l._v(" "),_("p",[l._v("假设你有下面这样的文档:")]),l._v(" "),_("pre",[_("code",[l._v('<html>\n<body>\n  <p>\n     <include src="lang:fragment:hello-world">Hello World</include>\n  </p>\n</body>\n</html>\n')])]),l._v(" "),_("p",[l._v("它使用"),_("code",[l._v("<include>")]),l._v("来请求HTML片段。正常情况下在这里你将只会看到“Hello World”。不过当你的"),_("br"),l._v(" \n  应用程序一旦处理SCN_LOAD_DATA / “lang:fragment:hello-world” 请求, 则你的响应内容将会自动替换"),_("code",[l._v("<include>...</include>")]),l._v("中的内容。")]),l._v(" "),_("h2",[l._v("3. 动态本地化：使用CSS")]),l._v(" "),_("p",[l._v("“动态”的意思是可以动态加载UI的翻译内容 – 即运行期可切换语言。")]),l._v(" "),_("p",[l._v("假设你有下面这样的文档:")]),l._v(" "),_("pre",[_("code",[l._v('<html lang="en">\n  <head>\n    <style>\n      @import url(lang.css);\n    </style>\n  </head>\n<body>\n  <p>\n     <span class="hello-world">Hello World</span>\n  </p>\n</body>\n</html>')])]),l._v(" "),_("p",[l._v("以及下面这样的lang.css内容")]),l._v(" "),_("pre",[_("code",[l._v('span.hello-world:lang(en) { content:"Hello World"; }\n...\nspan.hello-world:lang(zh) { content:"你好，世界"; }\n...')])]),l._v(" "),_("p",[l._v("那么当你切换"),_("code",[l._v("<html lang=...>")]),l._v("中lang属性的值时(在加载时或运行期)，你将看到"),_("code",[l._v("span.hello-world")]),l._v("中的内容会自动切换不同的语言。")]),l._v(" "),_("h2",[l._v("4. 动态本地化：使用脚本")]),l._v(" "),_("p",[l._v("dk/samples/+lang/目录中提供了一种脚本切换语言的脚本实现。 它使用了CSS aspect特性 – 为特定的DOM元素声明和绑定脚本代码。")]),l._v(" "),_("p",[l._v("除了支持简单的文本翻译和替换，它还支持语言智能排版和多元化(pluralization)。 ")]),l._v(" "),_("h2",[l._v("5. 预处理方式")]),l._v(" "),_("p",[l._v("原则上，你也可以混合使用上面说的所有方法。")]),l._v(" "),_("p",[l._v("同时, 在某些情况下，你也可以考虑使用某种本地代码或脚本的预处理器。")]),l._v(" "),_("p",[l._v("比如，像下面这样的文档:")]),l._v(" "),_("pre",[_("code",[l._v("<html>\n<body>\n  <p>%HELLO% %WORLD% !</p>\n</body>\n</html>")])]),l._v(" "),_("p",[l._v("这是一张很简单的预处理方式：通过本地代码在将内容提交给Sciter引擎之前，查找所有类似"),_("code",[l._v("%HELLO%")]),l._v("这样的字符串，并替换它。")]),l._v(" "),_("p",[l._v("在脚本中，你可以使用内置的预处理特性，比如像下面这样的代码:")]),l._v(" "),_("pre",[_("code",[l._v("<html>\n<body>\n  <p><% =words.hello %> <% =words.world %> !</p>\n</body>\n</html>")])]),l._v(" "),_("p",[l._v("预处理方式有一个共同的问题: 当需要替换html内容时，你需要替换整个html内容。而如果你使用实体(上面讲的第一种方式)时，你只需要下面这样的代码即可:")]),l._v(" "),_("pre",[_("code",[l._v('el.html = "&hello; &world";\n')])]),l._v(" "),_("h2",[l._v("总之")]),l._v(" "),_("p",[l._v("使用哪种方式取决于你的选择。第一种和第二种方式是最有效的，通常它们可以一起使用。"),_("br"),l._v(" \n  因为动态填充和切换语言这种场景并不是很普遍，即使遇到这种情况也可以通过特定的函数来处理。")])])}),[],!1,null,null,null);n.default=e.exports}}]);