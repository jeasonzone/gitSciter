(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{306:function(t,n,a){"use strict";a.r(n);var s=a(28),i=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"更好的css精灵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更好的css精灵"}},[t._v("#")]),t._v(" 更好的CSS精灵")]),t._v(" "),a("div",{staticClass:"post",attrs:{id:"post-41679"}}),t._v(" "),a("div",{staticClass:"storycontent"},[a("p",[t._v("首先我要承认，目前的做法"),a("a",{attrs:{href:"http://coding.smashingmagazine.com/2009/04/27/the-mystery-of-css-sprites-techniques-tools-and-tutorials/"}},[t._v("CSS精灵")]),t._v("的做法类似于一个黑客。")]),t._v(" "),a("p",[t._v("好吧, CSS精灵是什么? (准确的说，精灵一词对于实体来说是一个错误的名称，不过谁让它已经广泛传播了呢，那我也只能无奈接受了)")]),t._v(" "),a("p",[t._v("这里的'精灵'其实是一些基本图像的部分片段。这个图像只加载一次，但是它的'片段'被当做一张完整的图片用在各个位置上。")]),t._v(" "),a("p",[t._v("这是演示了如果使用标准CSS来实现'精灵'。这里取工具条作为一个典型示例 – 工具条上有一系列按钮，并且每个按钮都有它自己的图标。")]),t._v(" "),a("p",[t._v("首先，我们需要为所有的按钮定义通用的样式:")]),t._v(" "),a("pre",{staticClass:"brush: css;"},[a("code",[t._v("\n  .toolbar li a { width: 25px; height: 25px; display: block; background:no-repeat url(tb-icons.png); }\n")])]),t._v(" "),a("p",[t._v("然后，为每个按钮的背景图像定义负偏移值，以便图像的某部分滚动到当前元素的“视图”上。像下面这样: \n")]),t._v(" "),a("pre",{staticClass:"brush: css;"},[a("code",[t._v("\n.toolbar li a.btn-formatting { background-position: -25px 0; }\n.toolbar li a.btn-bold       { background-position: -50px 0; }\n.toolbar li a.btn-italic     { background-position: -75px 0; }\n.toolbar li a.btn-font-size  { background-position: -125px 0; }")]),t._v("\n")]),t._v(" "),a("p",[t._v("因为按钮的“font-size”的图像位置是负值，所以渲染的结果如下:"),a("br"),t._v(" "),a("a",{attrs:{href:"images/css-sprites.png"}},[a("img",{staticClass:"aligncenter size-full wp-image-41680",attrs:{src:"images/css-sprites.png",alt:"",title:"css-sprites",width:"246",height:"45"}})])]),t._v(" "),a("p",[t._v("到目前为止这工作地很好。")]),t._v(" "),a("p",[t._v("不过现在设想一下，你的一个'土豪'用户有一个225 DPI的屏幕，这时你需要给他/她一个更大的图标以便有更好的体验。 专为96dpi设计的图像在225dpi的浏览器上看起来缩放的很厉害。")]),t._v(" "),a("p",[t._v("所以，你最终需要设置一个新的样式集:")]),t._v(" "),a("pre",{staticClass:"brush: css;"},[a("code",[t._v("\nmedia ... {\n  .toolbar li a { width: 25px; height: 25px; display: block; background:no-repeat url(tb-icons-x2.png); }\n  .toolbar li a.btn-formatting\t { background-position: -41px 0; }\n  .toolbar li a.btn-bold\t { background-position: -96px 0; }\n  .toolbar li a.btn-italic\t { background-position: -143px 0; }\n  .toolbar li a.btn-font-size    { background-position: -246px 0; }\n}")]),t._v("\n")]),t._v(" "),a("p",[t._v("上面所说的这种做法不是很好的管理方式 – 每次你都需要重新计算图像的位置。 这种功能很贫乏的精灵方式还有许多其他问题。例如，你无法将图像定位到按钮的中间，每个图像的尺寸都必须完全精确的。")]),t._v(" "),a("p",[t._v("所以，我决定在Sciter中提供一种更好的图像编目机制，这里引入了@image-map的 at-规则 和image-map() 函数。下面延时如果使用这种新方式来声明工具条。")]),t._v(" "),a("p",[t._v("首先，定义我们的图像映射声明:\n")]),t._v(" "),a("pre",{staticClass:"brush: css;"},[a("code",[t._v("\n      @image-map tb-icons \n      {\n        /* 我们在下面的单一逻辑实体中定义3张图片 */\n        src:   url(tb-icons.png) 120dpi,    /* <= 120dpi */\n               url(tb-icons-x2.png) 240dpi, /* <= 240dpi */\n               url(tb-icons-jumbo.png);     /* 其他  */\n        cells: 15 2;                        /* 图片中有15列, 2 行 */\n        /* 图片中某部分的逻辑名称，参见tb-icons.png */ \n        items: bold, italic, underline, strike,\n               font-family, font-size, text-color, text-back-color;\n      }")]),t._v("\n")]),t._v(" "),a("p",[t._v("这里演示如何使用上面的声明:")]),t._v(" "),a("pre",{staticClass:"brush: css;"},[a("code",[t._v("\n.toolbar > button {\n  size:2em;\n  background:no-repeat 50% 50%; padding:3px; /* 注意 - 居中对齐 */\n}")]),t._v("\n")]),t._v(" "),a("p",[t._v("接下来就可以通过它们的逻辑名称来将它们当做普通图像使用了:")]),t._v(" "),a("pre",{staticClass:"brush: css;"},[a("code",[t._v("\n.toolbar > button.bold      { background-image:image-map(tb-icons,bold); } \n.toolbar > button.italic    { background-image:image-map(tb-icons,italic); } \n.toolbar > button.underline { background-image:image-map(tb-icons,underline); } \n.toolbar > button.strike    { background-image:image-map(tb-icons,strike); } ")]),t._v("\n")]),t._v(" "),a("p",[t._v("注意：当你需要支持其他分辨率时，你无需重新设计你的CSS设计，只需修改下 @image-map 的声明。")]),t._v(" "),a("p",[t._v("这里是半正式的"),a("a",{attrs:{href:"http://www.terrainformatica.com/wp-content/uploads/2012/11/image-map.htm"}},[t._v("image-map feature")]),t._v("规范。")])])])}),[],!1,null,null,null);n.default=i.exports}}]);