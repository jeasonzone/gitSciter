(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{288:function(_,v,t){"use strict";t.r(v);var e=t(28),n=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"tokenizer对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tokenizer对象"}},[_._v("#")]),_._v(" Tokenizer对象")]),_._v(" "),t("p",[_._v("Tokenizer对象是一个用于支持为加载到DOM元素中的源代码的高亮显示的渲染辅助类: <pre>,<code>,<textarea>,<plaintext>。")]),_._v(" "),t("p",[_._v("它需要与Selection.applyMark()函数一起使用。")]),_._v(" "),t("dl",[t("h2",[_._v("常量")]),_._v(" "),t("p",[_._v("N/A")]),_._v(" "),t("h2",[_._v("属性")]),_._v(" "),t("dt",[_._v("tokenStart")]),_._v(" "),t("dd",[_._v("- "),t("a",{attrs:{href:"Selection.htm#bookmark"}},[_._v("bookmark")]),_._v(", token的起始位置。")]),_._v(" "),t("dt",[_._v("tokenEnd")]),_._v(" "),t("dd",[_._v("- "),t("a",{attrs:{href:"Selection.htm#bookmark"}},[_._v("bookmark")]),_._v(", token的结束位置。")]),_._v(" "),t("dt",[_._v("tag")]),_._v(" "),t("dd",[_._v("- string, tokenizer的标记代码 - 标签名称, 在token为#TAG-START和#TAG-END时有效。")]),_._v(" "),t("dt",[_._v("attr")]),_._v(" "),t("dd",[_._v("- string, tokenizer的标记代码 - 属性名称, 在token为#TAG-ATTR时有效。")]),_._v(" "),t("dt",[_._v("value")]),_._v(" "),t("dd",[_._v("- string, token文本内容 或 属性值(token为#TAG-ATTR时)。")]),_._v(" "),t("dt",[_._v("type")]),_._v(" "),t("dd",[_._v("- symbol, #source 或 #markup - 当前tokenizer模型的类型。")]),_._v(" "),t("dt",[_._v("element")]),_._v(" "),t("dd",[_._v("- 被解析的DOM元素。")]),_._v(" "),t("h2",[_._v("方法")]),_._v(" "),t("dt",[_._v("this")]),_._v(" "),t("dd",[t("strong",[_._v("( element")]),_._v(": Element, "),t("strong",[_._v("tokenizerType")]),_._v(": symbol [, "),t("strong",[_._v("subType")]),_._v(": symbol] "),t("strong",[_._v(")")]),_._v(" : Tokenizer\n      "),t("p",[_._v("Tokenizer实例的构造器, 参数:")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("element")]),_._v(" - 待渲染源代码文本的DOM元素。")]),_._v(" "),t("li",[t("strong",[_._v("tokenizerType")]),_._v(" - 定义使用的tokenizer类型: "),t("code",[_._v("#markup")]),_._v(" 或 "),t("code",[_._v("#source")]),_._v("。")]),_._v(" "),t("li",[t("strong",[_._v("subType")]),_._v(" - symbol, 当前它可以为"),t("code",[_._v("#style")]),_._v("或其他任何值。当为#style时，tokenizer会修改#NAME token解析的行为 - 允许如CSS那样使用"),t("code",[_._v("-")]),_._v("来分隔token的名称。")])])]),_._v(" "),t("dt",[_._v("push")]),_._v(" "),t("dd",[t("strong",[_._v("( tokenizerType")]),_._v(": symbol"),t("strong",[_._v(", until")]),_._v(": string"),t("strong"),_._v("[, "),t("strong",[_._v("subType")]),_._v(": symbol]"),t("strong",[_._v(" )")]),_._v(" : this\n      "),t("p",[_._v('为"island"的不同语法添加(入栈)sub-tokenizer。该规则应用于'),t("code",[_._v("#markup")]),_._v(" tokenizer来为<style> 和<script>元素解析内容。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("tokenizerType")]),_._v(" - 定义使用的tokenizer类型: "),t("code",[_._v("#markup")]),_._v(" 或 "),t("code",[_._v("#source")]),_._v("。")]),_._v(" "),t("li",[t("strong",[_._v("until")]),_._v(' - string, 定义"island"的结束位置, 例如: '),t("code",[_._v('<\/script>"')]),_._v(", "),t("code",[_._v('"</style>"')]),_._v(" .当tokenizer返回until指定的"),t("code",[_._v("#END-OF-ISLAND")]),_._v("时结束。")]),_._v(" "),t("li",[t("strong",[_._v("subType")]),_._v(" - 参见上一个函数方法。")])])]),_._v(" "),t("dt",[_._v("pop")]),_._v(" "),t("dd",[t("strong",[_._v("( )")]),_._v(" : this\n      "),t("p",[_._v("移除(出栈)上一个tokenizer。该规则用于响应获取到"),t("code",[_._v("#END-OF-ISLAND")]),_._v(" token。")])]),_._v(" "),t("dt",[_._v("token")]),_._v(" "),t("dd",[t("strong",[_._v("( )")]),_._v(" : symbol\n      "),t("p",[_._v("解析输入，并且返回token类型:")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("#markup")]),_._v(" tokenizer的Token类型有:")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("#TAG-START")]),_._v(" -  标签(tag)的起始, 如解析到"),t("code",[_._v("<div")]),_._v("时;")]),_._v(" "),t("li",[t("strong",[_._v("#TAG-HEAD-END")]),_._v(" - 标签(tag)头的结束, 如当"),t("code",[_._v('<div id="some">')]),_._v("解析完成后;")]),_._v(" "),t("li",[t("strong",[_._v("#TAG-EMPTY-END")]),_._v(" - 空标签结束, 如当"),t("code",[_._v('<div id="some" />')]),_._v("解析完成后;")]),_._v(" "),t("li",[t("strong",[_._v("#TAG-END")]),_._v(" - 标签(tag)的结束, 如解析到"),t("code",[_._v("</div>")]),_._v("时; ")]),_._v(" "),t("li",[t("strong",[_._v("#TAG-ATTR")]),_._v(" - 当解析到标签头中的属性名称/值时;")]),_._v(" "),t("li",[t("strong",[_._v("#TEXT")]),_._v(" - 当解析到文本时, tokenizer.value为文本内容;")]),_._v(" "),t("li",[t("strong",[_._v("#COMMENT")]),_._v(" - 当解析到注释时, tokenizer.value为注释内容;")]),_._v(" "),t("li",[t("strong",[_._v("#CDATA")]),_._v(" - 当解析到CDATA SGML节时;")]),_._v(" "),t("li",[t("strong",[_._v("#PI")]),_._v(" - 当解析到SGML处理指令时;")]),_._v(" "),t("li",[t("strong",[_._v("#DOCTYPE")]),_._v(" - 当解析到doctype声明时;")]),_._v(" "),t("li",[t("strong",[_._v("#ENTITY")]),_._v(" - 当HTML/XML实体解析后, tokenizer.value为实体的文本内容;")]),_._v(" "),t("li",[t("strong",[_._v("#ERROR")]),_._v(" - 当发生HTML/XML基础语法错误时。")])]),_._v(" "),t("li",[t("strong",[_._v("#source ")]),_._v("特有的token类型:")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("#NUMBER")]),_._v(" - 解析到数值: 123, 456.09, 0xFF, 等.")]),_._v(" "),t("li",[t("strong",[_._v("#NUMBER-UNIT")]),_._v(" - 解析到包含单位指示器的数字: 100px, 400ms, 等.")]),_._v(" "),t("li",[t("strong",[_._v("#STRING")]),_._v(" - 解析到字符串, 目前仅为\"string\" 或'string'。")]),_._v(" "),t("li",[t("strong",[_._v("#NAME")]),_._v(" - 解析到name token - 一个字符串序列，它看起来像关键字或变量名。")]),_._v(" "),t("li",[t("strong",[_._v("#COMMENT")]),_._v(" - 解析到注释, 单行注释"),t("code",[_._v("//")]),_._v("   或 多行注释"),t("code",[_._v("/* ... */")]),_._v(" .")]),_._v(" "),t("li",[t("strong",[_._v("#OPERATOR")]),_._v(' - 解析到"操作符" 如: '),t("code",[_._v(":!%+-/*;")]),_._v(" ,等。")]),_._v(" "),t("li",[t("strong",[_._v("#O-PAREN")]),_._v(" 和 "),t("strong",[_._v("#C-PAREN")]),_._v(" - 当遇到"),t("code",[_._v("(")]),_._v(" 或 "),t("code",[_._v(")")]),_._v(" 时。")]),_._v(" "),t("li",[t("strong",[_._v("#ERROR")]),_._v(" - 基础语法错误，例如未关闭的字符串。")]),_._v(" "),t("li",[t("strong",[_._v("#END-OF-ISLAND")]),_._v(" - 当被压栈的tokeinizer获取到"),t("em",[_._v("until ")]),_._v("参数指定的字符序列时。")])])])]),_._v(" "),t("dt",[_._v("elementType")]),_._v(" "),t("dd",[_._v("( tag: string ) : (elementType, contentModelType, parsingType)\n      "),t("p",[_._v("这个静态方法返回sciter默认已知的HTML标记元素类型。")]),_._v(" "),t("p",[t("i",[_._v("elementType")]),_._v("是以下值之一:")]),_._v(" "),t("pre",{pre:!0},[t("code",[_._v("const UNKNOWN_TAG = 0;      // 未知 \nconst INLINE_BLOCK_TAG = 1; // <img>, <input> ...\nconst BLOCK_TAG = 2;        // <div>,<ul>,<p> ... \nconst INLINE_TAG = 3;       // <span>,<b>,<strong> ...\nconst TABLE_TAG = 4;        // <table>\nconst TABLE_BODY_TAG = 5;   // <thead>,<tbody>,<tfoot>\nconst TABLE_ROW_TAG = 6;    // <tr>\nconst TABLE_CELL_TAG = 7;   // <td>,<th>\nconst INFO_TAG = 8;         // <link>,<style>,<head> ...  \n")])]),_._v(" "),t("p",[t("i",[_._v("contentModelType")]),_._v("描述该元素内蒙被允许存在的内容类型:")]),_._v(" "),t("pre",{pre:!0},[t("code",[_._v("const CMODEL_BLOCKS = 0;      // 流元素 - 块和内联元素: <div>\nconst CMODEL_INLINES = 1;     // 段落元素 - inlines: <p>\nconst CMODEL_TRANSPARENT = 2; // <del>, <a>, etc. \nconst CMODEL_TEXT = 3;        // 仅文本: <title> \nconst CMODEL_TABLE = 4;       // 仅表格组件元素\n")])]),_._v(" "),t("p",[t("i",[_._v("parsingType")]),_._v(" 描述HTML解析结果:")]),_._v(" "),t("pre",{pre:!0},[t("code",[_._v("const PMODEL_NORMAL = 0;  // 正常的头/为: <div></div> ...\nconst PMODEL_NO_TAIL = 1; // 没有尾: <img>, <br>, <hr> ...\nconst PMODEL_CDATA = 2;   // 头/尾, 已知包含CDATA: <script>,<style>,...\n")])])])])])}),[],!1,null,null,null);v.default=n.exports}}]);