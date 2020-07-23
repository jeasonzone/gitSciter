(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{326:function(t,e,v){"use strict";v.r(e);var _=v(28),l=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"url原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#url原理"}},[t._v("#")]),t._v(" URL原理")]),t._v(" "),v("div",[v("h1",{staticClass:"storytitle"},[t._v("为开发者介绍下URL的“原理”")])]),t._v(" "),v("div",{staticClass:"storycontent"},[v("p",[t._v("现在，我们使用过很多URL, 但是并不是所有人都明白URL到底是什么。")]),t._v(" "),v("p",[t._v("在这篇文章里，我将尝试解释它们的结构，以及Sciter/HTMLayout怎么处理它们的。"),v("br"),t._v(" \n      请注意这是一张非正式解释，我这里讲的“URL”，实际上更正确的名称应该是“URI”。")]),t._v(" "),v("p",[t._v("URL由5个主要部分组成:")]),t._v(" "),v("pre",[v("code",[t._v("\n<模式/协议> : [//] <资源唯一标识> [ ? <查询> ] [ # <片段/书签> ]")]),t._v("\n")]),t._v(" "),v("p",[t._v("其中:")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("模式/协议")]),t._v(" – 原则是是一个名称token – URL的协议名称。 如: “file:”, “http:”等。")]),t._v(" "),v("li",[v("code",[t._v("//")]),t._v(" 部分 – 如果有的话，它的含义是接下来的 “资源唯一标识”部分采用层次化的命名约定，并且以‘/’作为分隔符。")]),t._v(" "),v("li",[v("code",[t._v("资源唯一标识")]),t._v(" – 如果它之前有‘//’，则它是由‘/’分隔的路径名，否则它是一个“平”名称。")]),t._v(" "),v("li",[v("code",[t._v("查询")]),t._v(" 部分原则上只对“动态客户端/服务端”场景有意义。 它是客户端为服务端提供的资源的一些参数说明。")]),t._v(" "),v("li",[v("code",[t._v("片段/书签")]),t._v(" – 是一个名称，或者是资源中某一个位置或部分的ID。")])]),t._v(" "),v("p",[t._v("考虑下这种场景，当你在3个不同的位置上有一些相同的test-file.html文件: ")]),t._v(" "),v("ol",[v("li",[t._v("file:///c:/test-folder/test-file.htm")]),t._v(" "),v("li",[t._v("http://example.com/test-folder/test-file.htm")]),t._v(" "),v("li",[t._v("res:test-file.htm")])]),t._v(" "),v("p",[t._v("我们假设这个文档中包含一个有一个相对路径的图片:")]),t._v(" "),v("pre",[v("code",[t._v('\n  <html>\n  <img src="image.png">\n  </html>')]),t._v("\n")]),t._v(" "),v("p",[t._v("在加载这个文档时，Sciter将会按照以下步骤来处理“image.png”这个名称的路径:")]),t._v(" "),v("ol",[v("li",[t._v("file:///c:/test-folder/image.png – 作为基URL的一个分层。")]),t._v(" "),v("li",[t._v("http://example.com/test-folder/image.png – 同上。")]),t._v(" "),v("li",[t._v("res:image.png – 这里仅继承基URL的资源协议。")])]),t._v(" "),v("p",[t._v("原则上，你的Sciter应用程序可以定义你自己的URL协议。你只需要觉得它是分层的还是“平”的。")]),t._v(" "),v("p",[t._v("例如，如果你调用"),v("code",[t._v('SciterLoadHtml(html, "app://module/main.htm");')]),t._v("，则文档中的所有相对链接"),v("br"),t._v(" \n      将会把"),v("code",[t._v("app://module/")]),t._v("当做基地址。所以在你的SCN_LOAD_DATA处理事件中，你将会收到: “app://module/images/img1.png”, “app://module/styles.css” 等等。")]),t._v(" "),v("p",[t._v("但是，如果你计划将你的所有文件都放到你的应用程序的资源文件中时，你应该使用一种类似 “res:”的“平”协议。")]),t._v(" "),v("p",[t._v("最后需要注意的是: 如果你在SciterLoadHtml和SciterLoadFile中使用了层次URL，则这些URL必须是绝对定位，否则Sciter将不知道怎么处理它们。")])])])}),[],!1,null,null,null);e.default=l.exports}}]);