(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{354:function(v,_,t){"use strict";t.r(_);var n=t(28),d=Object(n.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"length-长度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#length-长度"}},[v._v("#")]),v._v(" Length(长度)")]),v._v(" "),t("dl",[t("div",[v._v("长度类型，代表长度(距离)值。如mm, cm, px, in, pt等。")]),v._v(" "),t("p",[v._v("长度是使用下面的构造函数构建。")]),v._v(" "),t("h2",[v._v("构造函数")]),v._v(" "),t("dt",[v._v("em")]),v._v(" "),t("dd",[t("div",[v._v("("),t("strong",[v._v(" v")]),v._v(": int | float ) : length, 这些函数根据对应类型构建长度值。")])]),v._v(" "),t("dt",[v._v("ex")]),v._v(" "),t("dd",[t("div",[v._v("("),t("strong",[v._v(" v")]),v._v(": int | float ) : length")])]),v._v(" "),t("dt",[v._v("pr")]),v._v(" "),t("dd",[t("div",[v._v("("),t("strong",[v._v(" v")]),v._v(": int | float ) : length/percentage")])]),v._v(" "),t("dt",[v._v("fx")]),v._v(" "),t("dd",[t("div",[v._v("("),t("strong",[v._v(" v")]),v._v(": int | float ) : length")])]),v._v(" "),t("dt",[v._v("px")]),v._v(" "),t("dd",[t("div",[v._v("("),t("strong",[v._v(" v")]),v._v(": int | float ) : length")])]),v._v(" "),t("dt",[v._v("in")]),v._v(" "),t("dd",[t("div",[v._v("("),t("strong",[v._v(" v")]),v._v(": int | float ) : length")])]),v._v(" "),t("dt",[v._v("cm")]),v._v(" "),t("dd",[t("div",[v._v("("),t("strong",[v._v(" v")]),v._v(": int | float ) : length")])]),v._v(" "),t("dt",[v._v("mm")]),v._v(" "),t("dd",[t("div",[v._v("("),t("strong",[v._v(" v")]),v._v(": int | float ) : length")])]),v._v(" "),t("dt",[v._v("pt")]),v._v(" "),t("dd",[t("div",[v._v("("),t("strong",[v._v(" v")]),v._v(": int | float ) : length")])]),v._v(" "),t("dt",[v._v("pc")]),v._v(" "),t("dd",[t("div",[v._v("("),t("strong",[v._v(" v")]),v._v(": int | float ) : length")])]),v._v(" "),t("dt",[v._v("dip")]),v._v(" "),t("dd",[t("div",[v._v("("),t("strong",[v._v(" v")]),v._v(": int | float ) : length")])]),v._v(" "),t("dt",[v._v("length")]),v._v(" "),t("dd",[t("div",[v._v("("),t("strong",[v._v(" v")]),v._v(": int | float, units: symbol ) : length")])]),v._v(" "),t("h2",[v._v("常量")]),v._v(" "),t("div",[t("strong",[v._v("N/A")])]),v._v(" "),t("h2",[v._v("属性")]),v._v(" "),t("dt",[v._v("units")]),v._v(" "),t("dd",[v._v("只读, "),t("em",[v._v("symbol")]),v._v(", 返回值为下面值之一:\n          "),t("ul",[t("li",[v._v("#em - em 字体单位;")]),v._v(" "),t("li",[v._v("#ex - ex 字体单位;")]),v._v(" "),t("li",[v._v("#pr - 百分比 '%';")]),v._v(" "),t("li",[v._v("#fx - 弹力单位(h-smile CSS特有单位): 1fx = '1*' or '100%%';")]),v._v(" "),t("li",[v._v("#px - 像素, 通常依赖于设备;")]),v._v(" "),t("li",[v._v("#in - 英尺;")]),v._v(" "),t("li",[v._v("#cm - 厘米;")]),v._v(" "),t("li",[v._v("#mm - 毫米;")]),v._v(" "),t("li",[v._v("#pt - 打印点(1/72 每英尺)")]),v._v(" "),t("li",[v._v("#pc - typographical pica (1/12 每点)")]),v._v(" "),t("li",[v._v("#dip - 设备独立像素 ( 1/96 每英尺)")])])]),v._v(" "),t("h2",[v._v("方法")]),v._v(" "),t("dt",[v._v("parse")]),v._v(" "),t("dd",[t("p",[v._v("( "),t("strong",[v._v("text")]),v._v(": string [, defval: undefined ) : length | defval")]),v._v(" "),t("p",[v._v("静态方法, 解析字符串为长度值。如果解析失败则返回定义的defval值。")])]),v._v(" "),t("dt",[v._v("make")]),v._v(" "),t("dd",[t("div",[v._v("("),t("strong",[v._v(" v")]),v._v(": int | float, "),t("strong",[v._v("units")]),v._v(": symbol ) : length")]),v._v(" "),t("p",[v._v("静态方法, 根据"),t("strong",[v._v("units")]),v._v("构建对应对象的长度值。")])]),v._v(" "),t("dt",[v._v("toString")]),v._v(" "),t("dd",[t("p",[v._v("( ) : string")]),v._v(" "),t("p",[v._v('返回长度值的字符串表示形式。例如"12.5pt"、"1px"等。')])]),v._v(" "),t("dt",[v._v("toInteger")]),v._v(" "),t("dd",[t("p",[v._v("( ) : int")]),v._v(" "),t("p",[v._v("转换长度为整数值。")])]),v._v(" "),t("dt",[v._v("toFloat")]),v._v(" "),t("dd",[t("p",[v._v("( ["),t("strong",[v._v("unit")]),v._v(": symbol [, "),t("strong",[v._v("defvalue")]),v._v(": any ]) : float")]),v._v(" "),t("p",[v._v("转换长度为浮点值。如果"),t("em",[v._v("unit")]),v._v("参数指定了上面定义的单位之一，则结果返回该单位的浮点表示。如果转换失败则返回定义的defval值(如果defvalue参数被省略则返回0.0)。")])]),v._v(" "),t("dt",[v._v("morph")]),v._v(" "),t("dd",[t("p",[v._v("( "),t("strong",[v._v("lengthFrom")]),v._v(", "),t("strong",[v._v("lengthTo")]),v._v(", ratio ) : length")]),v._v(" "),t("p",[v._v("使用下面的公式计算平均值: (lengthTo - lengthFrom) * ratio + lengthFrom;")])]),v._v(" "),t("dt"),v._v(" "),t("dd")])])}),[],!1,null,null,null);_.default=d.exports}}]);