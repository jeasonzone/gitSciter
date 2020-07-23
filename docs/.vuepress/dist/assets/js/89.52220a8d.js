(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{346:function(v,_,t){"use strict";t.r(_);var e=t(28),s=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"bytes-字节"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bytes-字节"}},[v._v("#")]),v._v(" Bytes(字节)")]),v._v(" "),t("p",[v._v("Bytes是一个字节数组。")]),v._v(" "),t("dl",[t("h2",[v._v("常量")]),v._v(" "),t("div",[v._v("N/A")]),v._v(" "),t("h2",[v._v("属性")]),v._v(" "),t("dt",[v._v("[index]")]),v._v(" "),t("dd",[t("strong",[v._v("- ")]),t("em",[v._v("integer")]),v._v(", 读写属性。数组中在"),t("em",[v._v("index")]),v._v("位置的元素。Index基于0开始。")]),v._v(" "),t("dt",[v._v("length")]),v._v(" "),t("dd",[v._v("- "),t("em",[v._v("integer")]),v._v(", 只读属性。数组中字节的数量。")]),v._v(" "),t("dt",[v._v("type")]),v._v(" "),t("dd",[v._v("- "),t("em",[v._v("any")]),v._v(", 可用于任何目的。但目前sciter用它来报告接收的或request()方法发送的数据mime-type (字符串)。")]),v._v(" "),t("dt",[v._v("name")]),v._v(" "),t("dd",[v._v("- "),t("em",[v._v("any")]),v._v(", 可用于任何目的。但目前siter用它来报告接收的或request()方法发送的数据的文件名或url。")]),v._v(" "),t("h2",[v._v("方法")]),v._v(" "),t("dt",[v._v("this")]),v._v(" "),t("dd",[t("p",[v._v("( "),t("em",[v._v("numBytes")]),v._v(": integer )")]),v._v(" "),t("p",[v._v("Bytes类型对象的构造函数 —— "),t("em",[v._v("numBytes")]),v._v("为Bytes的长度。")])]),v._v(" "),t("dt",[v._v("toString")]),v._v(" "),t("dd",[t("p",[t("strong",[v._v("( ")]),v._v("["),t("em",[v._v("encoding")]),v._v(":string] "),t("strong",[v._v(")")]),v._v(" returns: "),t("em",[v._v("string")])]),v._v(" "),t("p",[v._v('如果encoding未指定或是"base64"时，返回字节数组的'),t("em",[v._v("base64")]),v._v("编码格式的字符串。否则如果编码是IANA字符集列表"),t("a",{attrs:{href:"http://www.iana.org/assignments/character-sets"}},[v._v("http://www.iana.org/assignments/character-sets")]),v._v("支持的一种，则返回对应的编码格式字符串。")]),v._v(" "),t("p",[v._v("示例： "),t("code",[v._v('var str = bytes.toString("UTF-8");')]),v._v(" 返回UTF-8编码的字符串。")])]),v._v(" "),t("dt",[v._v("fromString")]),v._v(" "),t("dd",[t("p",[t("strong",[v._v("( ")]),t("em",[v._v("str")]),v._v(": string[, "),t("em",[v._v("encoding")]),v._v(":string] "),t("strong",[v._v(")")]),v._v(" returns: "),t("em",[v._v("Bytes")])]),v._v(" "),t("p",[v._v("静态方法, 从"),t("em",[v._v("str")]),v._v("字符串根据"),t("em",[v._v("encoding")]),v._v("编码创建一个Bytes对象(字节数组)。")]),v._v(" "),t("p",[v._v('如果encoding未指定或是"base64"时，则认为是"base64"。否则如果编码是IANA字符集列表'),t("a",{attrs:{href:"http://www.iana.org/assignments/character-sets"}},[v._v("http://www.iana.org/assignments/character-sets")]),v._v("支持的一种，则返回对应的编码格式字符串。")]),v._v(" "),t("p",[v._v("示例："),t("code",[v._v('var bytes = Bytes.fromString("Привет, мир!", "utf-8");')]),v._v(" 返回UTF-8编码的字符串。")])]),v._v(" "),t("dt",[v._v("md5")]),v._v(" "),t("dd",[t("p",[t("strong",[v._v("( ")]),v._v(" "),t("strong",[v._v(")")]),v._v(" returns: "),t("em",[v._v("string")])]),v._v(" "),t("p",[v._v("返回表示该字节数组的MD5的32个字符的字符串。")])]),v._v(" "),t("dt",[v._v("crc32")]),v._v(" "),t("dd",[t("p",[t("strong",[v._v("( ")]),v._v(" "),t("strong",[v._v(")")]),v._v(" returns: "),t("em",[v._v("integer")])]),v._v(" "),t("p",[v._v("返回该字节数组的CRC32技术结果的整数值。")])]),v._v(" "),t("dt",[v._v("compare")]),v._v(" "),t("dd",[v._v("( other: Bytes ) returns : integer, -1,0,1\n    "),t("p",[v._v("比较两个Bytes对象的内容是否相等, 返回-1,0或1，其中当两个对象的内容相等时返回0。")])]),v._v(" "),t("dt",[v._v("save")]),v._v(" "),t("dd",[t("div",[t("strong",[v._v("( ")]),t("em",[v._v("filename")]),v._v(":string "),t("strong",[v._v(")")]),v._v(" returns: "),t("em",[v._v("true|false")])]),v._v(" "),t("p",[v._v("保存字节数组到文件。如果文件已经存在，则覆盖。")])]),v._v(" "),t("dt",[v._v("load")]),v._v(" "),t("dd",[t("div",[t("strong",[v._v("( ")]),t("em",[v._v("filename")]),v._v(":string "),t("strong",[v._v(")")]),v._v(" returns: "),t("em",[v._v("Bytes")])]),v._v(" "),t("p",[v._v("静态方法。创建一个新的Bytes对象，并将filename文件加载到它，并返回该对象。")])]),v._v(" "),t("dt",[v._v("compress")]),v._v(" "),t("dd",[t("div",[t("strong",[v._v("( ")]),t("strong",[v._v(")")]),v._v(" returns: "),t("em",[v._v("Bytes")])]),v._v(" "),t("p",[v._v("创建一个新的Bytes对象 - 原始字节数组的压缩版本。")])]),v._v(" "),t("dt",[v._v("decompress")]),v._v(" "),t("dd",[t("div",[t("strong",[v._v("( ")]),t("strong",[v._v(")")]),v._v(" returns: "),t("em",[v._v("Bytes | null")])]),v._v(" "),t("p",[v._v("创建一个新的Bytes对象, 恢复先前压缩的字节数组。如果数组之前为压缩则返回"),t("i",[v._v("null")]),v._v("。")])])])])}),[],!1,null,null,null);_.default=s.exports}}]);