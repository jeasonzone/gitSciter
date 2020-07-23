(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{357:function(v,_,t){"use strict";t.r(_);var e=t(28),o=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"net-socket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#net-socket"}},[v._v("#")]),v._v(" Net.Socket")]),v._v(" "),t("p",[v._v('Socket使用命名管道(windows)或TCP/IP协议Socket在相同机器("localhost"地址)或线连接的两个Sciter进程间进行双向数据交互。Socket支持服务端监听('),t("code",[v._v("Socket.listen()")]),v._v(")和客户端Socket("),t("code",[v._v("Socket.connect()")]),v._v(")。")]),v._v(" "),t("p",[v._v("Socket发送/接收的数据为序列化的二进制格式 - 你可以通过"),t("code",[v._v("socket.send(data)")]),v._v("发送数据，以及通过"),t("code",[v._v('socket.on("receive", function(data) {})')]),v._v("在其他端接收数据。")]),v._v(" "),t("dl",[t("h2",[v._v("属性")]),v._v(" "),t("dt",[v._v("active")]),v._v(" "),t("dd",[v._v("- "),t("em",[v._v("boolean")]),v._v(", socket状态, true - socket处于可用状态。")]),v._v(" "),t("dt",[v._v("address")]),v._v(" "),t("dd",[v._v("- string, 远程机器的地址。")]),v._v(" "),t("h2",[v._v("方法")]),v._v(" "),t("dt",[v._v("connect")]),v._v(" "),t("dd",[t("p",[t("strong",[v._v("(")]),t("strong",[v._v("name")]),v._v(": string [, "),t("b",[v._v("port")]),v._v(": integer] "),t("strong",[v._v(")")]),v._v(" : DataSocket")]),v._v(" "),t("p",[v._v("客户端DataSocket的创建方法。返回一个新的处于连接状态的socket。如果指定了"),t("i",[v._v("port")]),v._v("参数，则"),t("i",[v._v("name")]),v._v("被认为是通过TCP/IP连接时的域名或地址，否则name被认为是命名管道的名称(或局域网socket)。")])]),v._v(" "),t("dt",[v._v("listen")]),v._v(" "),t("dd",[t("p",[t("strong",[v._v("( acceptor")]),v._v(": function, "),t("strong",[v._v("name")]),v._v(": string [, "),t("b",[v._v("port")]),v._v(": integer] "),t("strong",[v._v(")")]),v._v(" : DataSocket")]),v._v(" "),t("p",[v._v("服务端DataSocket的创建方法。返回一个新的处于监听状态的socket。如果指定了"),t("i",[v._v("port")]),v._v("参数，则"),t("i",[v._v("name")]),v._v("被认为是通过TCP/IP连接时的域名或地址。")]),v._v(" "),t("p",[t("em",[v._v("acceptor")]),v._v("函数在每个新连接请求到达服务端是调用。该函数的签名:")]),v._v(" "),t("pre",{pre:!0},[t("code",[v._v("function acceptor( connectionSocket: DataSocket ) : true | false")])]),v._v(" "),t("p",[v._v("其中："),t("em",[v._v("connectionSocket")]),v._v("是用于与远程通信的另一个DataSocket示例。")]),v._v(" "),t("p",[v._v("若要接受和使用这个连接，你必须返回"),t("em",[v._v("true")]),v._v("。")])]),v._v(" "),t("dt",[v._v("on")]),v._v(" "),t("dd",[t("p",[t("strong",[v._v("( event")]),v._v(": string"),t("strong",[v._v(", callback")]),v._v(": function"),t("strong",[v._v(" )")]),v._v(" : this")]),v._v(" "),t("p",[v._v("将下面的Socket事件之一绑定到callback回调函数:")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v('"connect"')]),v._v(" -> "),t("code",[v._v("function()")]),v._v(", socket连接到主机;")]),v._v(" "),t("li",[t("strong",[v._v('"data"')]),v._v(" -> "),t("code",[v._v("function(data:string)")]),v._v(", 已经接收到数据;")]),v._v(" "),t("li",[t("strong",[v._v('"sent"')]),v._v(" -> "),t("code",[v._v("function()")]),v._v(", 上一次"),t("code",[v._v("send()")]),v._v("操作完成;")]),v._v(" "),t("li",[t("strong",[v._v('"error"')]),v._v(" -> "),t("code",[v._v("function(err: Error)")]),v._v(", 发生错误, 错误对象会传递给该回调函数;")]),v._v(" "),t("li",[t("strong",[v._v('"close"')]),v._v(" -> "),t("code",[v._v("function()")]),v._v(", socket被关闭;")])]),v._v(" "),t("p",[v._v('这些事件名称可以包含".namespace"名称空间。它被用在.off()函数中。')])]),v._v(" "),t("dt",[v._v("off")]),v._v(" "),t("dd",[t("p",[t("strong",[v._v("( event")]),v._v(": string | "),t("strong",[v._v("callback")]),v._v(": function"),t("strong",[v._v(" )")]),v._v(" : this")]),v._v(" "),t("p",[v._v("根据事件名或回调函数来解除事件绑定。")]),v._v(" "),t("p",[v._v("事件名可以只包含名称空间部分。所以这样的代码"),t("code",[v._v('socket.off(".namespace")')]),v._v(" 将会解除所以设置了该名称空间的事件绑定。")])]),v._v(" "),t("dt",[v._v("once")]),v._v(" "),t("dd",[t("p",[t("strong",[v._v("( event")]),v._v(": string"),t("strong",[v._v(", callback")]),v._v(": function"),t("strong",[v._v(" )")]),v._v(" : this")]),v._v(" "),t("p",[v._v("与on()功能相同，但是订阅的回调函数只会执行一次( 回调函数将会在第一次调用只会被移除)。")])]),v._v(" "),t("dt",[v._v("send")]),v._v(" "),t("dd",[t("p",[t("strong",[v._v("( data")]),v._v(": any "),t("strong",[v._v(")")])]),v._v(" "),t("p",[v._v("该方法用于将数据发送到远程端。data可以为任何可序列化的数据类型(对象、数字、字符串、数组等)。")])]),v._v(" "),t("dt",[v._v("close")]),v._v(" "),t("dd",[t("p",[t("strong",[v._v("( )")])]),v._v(" "),t("p",[v._v("关闭socket。")])])])])}),[],!1,null,null,null);_.default=o.exports}}]);