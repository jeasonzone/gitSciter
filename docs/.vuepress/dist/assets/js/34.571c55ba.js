(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{286:function(_,v,t){"use strict";t.r(v);var e=t(28),d=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"request对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request对象"}},[_._v("#")]),_._v(" Request对象")]),_._v(" "),t("p",[_._v('该对象可用于对请求添加其他处理。注意它是可以"then able"的类似promise的对象，即它也可以使用'),t("code",[_._v("await")]),_._v("。")]),_._v(" "),t("dl",[t("h2",[_._v("常量")]),_._v(" "),t("p",[t("code",[_._v("Request.requestedDataType")]),_._v("属性的返回值")]),_._v(" "),t("dt",[_._v("DATA_HTML")]),_._v(" "),t("dd",[_._v("- html文档请求;")]),_._v(" "),t("dt",[_._v("DATA_IMAGE")]),_._v(" "),t("dd",[_._v("- 图片请求;")]),_._v(" "),t("dt",[_._v("DATA_STYLE")]),_._v(" "),t("dd",[_._v("- css请求;")]),_._v(" "),t("dt",[_._v("DATA_CURSOR")]),_._v(" "),t("dd",[_._v("- 光标(cursor)请求;")]),_._v(" "),t("dt",[_._v("DATA_FONT")]),_._v(" "),t("dd",[_._v("- 字体数据请求;")]),_._v(" "),t("dt",[_._v("DATA_RAW_DATA")]),_._v(" "),t("dd",[_._v("- 任意数据请求, "),t("code",[_._v("view.request()")]),_._v("产生的请求是这个类型;")]),_._v(" "),t("h2",[_._v("属性")]),_._v(" "),t("dt",[_._v("status")]),_._v(" "),t("dd",[_._v("- "),t("em",[_._v("integer")]),_._v(", 响应状态 - http响应代码: 200 - OK, 404 - not found, etc.")]),_._v(" "),t("dt",[_._v("requestedDataType")]),_._v(" "),t("dd",[_._v("- "),t("em",[_._v("integer")]),_._v(", 上面的DATA_***值之一, 请求数据的类型。")]),_._v(" "),t("dt",[_._v("response")]),_._v(" "),t("dd",[_._v("- string, value, stream or byte array - 请求的响应数据。具体的类型取决于"),t("code",[_._v("view.request()")]),_._v("方法的"),t("code",[_._v("output")]),_._v("参数。")]),_._v(" "),t("dt",[_._v("responseData")]),_._v(" "),t("dd",[_._v("- Bytes (byte array) - 服务端返回的请求数据。")]),_._v(" "),t("dt",[_._v("responseMimeType")]),_._v(" "),t("dd",[_._v("- string, 服务端响应数据的mime type。")]),_._v(" "),t("dt",[_._v("isConsumed")]),_._v(" "),t("dd",[_._v("- boolean, 如果请求已被处理(被目标元素)则返回true。")]),_._v(" "),t("dt",[_._v("isSucceeded")]),_._v(" "),t("dd",[_._v("- boolean, 如果请求已成功处理这返回true。")]),_._v(" "),t("dt",[_._v("destination")]),_._v(" "),t("dd",[_._v("- 请求数据的Element或View对象。")]),_._v(" "),t("h2",[_._v("方法")]),_._v(" "),t("dt",[_._v("fulfill")]),_._v(" "),t("dd",[t("strong",[_._v("( data")]),_._v(": Bytes ,"),t("strong",[_._v(" mime")]),_._v(": string "),t("strong",[_._v(")")]),_._v(" : this\n      "),t("p",[_._v("当做从服务端返回的数据来履行请求。")])]),_._v(" "),t("dt",[_._v("reject")]),_._v(" "),t("dd",[t("strong",[_._v("( status")]),_._v(": integer"),t("strong",[_._v(" )")]),_._v(" : this\n      "),t("p",[_._v("当做服务端返回数据失败来拒绝请求。")])]),_._v(" "),t("dt",[_._v("then")]),_._v(" "),t("dd",[t("strong",[_._v("( onSuccess")]),_._v(": function [, "),t("b",[_._v("onFailure")]),_._v(": function]"),t("strong",[_._v(" )")]),_._v(" : this\n      "),t("p",[_._v("订阅这个请求上的"),t("i",[_._v("success")]),_._v("、"),t("i",[_._v("failure")]),_._v("事件。")]),_._v(" "),t("p",[_._v("其中:")]),_._v(" "),t("ul",[t("li",[t("code",[_._v("function onSuccess(data, status)")]),_._v(" - 接收响应数据和状态码;")]),_._v(" "),t("li",[t("code",[_._v("function onFailure(err)")]),_._v(" - 失败时返回一个Error对象实例。")])]),_._v(" "),t("p",[_._v("两个方法被调用时，"),t("i",[_._v("this")]),_._v("被设置为该请求对象。")])]),_._v(" "),t("dt",[_._v("catch")]),_._v(" "),t("dd",[t("strong",[_._v("( ")]),t("strong",[_._v("callback")]),_._v(": function"),t("strong",[_._v(" )")]),_._v(" : this\n      "),t("p",[_._v("订阅"),t("i",[_._v("failure")]),_._v("的回调函数。")])]),_._v(" "),t("dt",[_._v("finally")]),_._v(" "),t("dd",[t("strong",[_._v("( ")]),t("strong"),t("strong",[_._v("callback")]),_._v(": function"),t("strong",[_._v(" )")]),_._v(" : this\n      "),t("p",[_._v("订阅"),t("i",[_._v("completion")]),_._v("事件的回调函数，即不管请求处理成功或失败都会调用它。")])])])])}),[],!1,null,null,null);v.default=d.exports}}]);