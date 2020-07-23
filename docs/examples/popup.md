# popup弹窗

## callout-bubble

<div>
  <ClientOnly>
    <demo-block><div slot="source">
    <img src="./imgs/popup1.jpg">
    </div>
    <div slot="highlight"><code>
    &lt;html&gt;<br />
&lt;head&gt;<br />
  &lt;style&gt;<br />
    popup.bubble<br />
    {<br />
      prototype: BubblePopup;<br />
      background-color: transparent; // must be exactly transparent to create transparent window <br />
      width:400dip;<br />
      height:300dip;<br />
      cursor:pointer;<br />
      padding:18dip; // room for the shadow <br />
      cursor: default;<br />
      margin:2dip; // offset from anchor element<br />
      border:1dip solid #ddd;<br />
      var(shape-color): #fff; // shape background color<br />
    }<br />
    popup.bubble &gt; .content {<br />
      padding:12dip;<br />
      size:*;<br />
    }<br />
    div#anchor<br />
    {<br />
      border:1dip solid blue;<br />
      width:50dip;<br />
      height:50dip;<br />
      cursor:pointer;<br />
    }<br />
  &lt;/style&gt;  <br />
  &lt;style #actions&gt;<br />
    div#anchor<br />
    {<br />
      behavior: button; <br />
      margin:0 *;<br />
    }<br />
  &lt;/style&gt;    <br />
  &lt;script type="text/tiscript"&gt;<br />
      $(div#anchor) &lt;&lt; event click<br />
      {<br />
        this.popup( $(popup.bubble), (8 /*popup middle-top*/ &lt;&lt; 16) | 2 /*at anchor's middle-bottom*/);<br />
      } <br />
      class BubblePopup: Element {<br />
        const RADIUS = 10dip;<br />
        const ARROW_HEIGHT = 12dip;<br />
        function attached() { <br />
          this.paintBackground = this.drawBackground;<br />
        }<br />
        function getShape()<br />
        {<br />
          var shape = this.shape;<br />
          if(!shape) <br />
          {<br />
            shape = this.shape = new Graphics.Path();<br />
            this.shapeWidth = null;<br />
            this.shapeHeight = null;<br />
          }<br />
          var (x,y,w,h) = this.$(div.content).box(#rectw,#border,#parent);<br />
          if( this.shapeWidth == w && this.shapeHeight == h)<br />
            return shape; // nothing to do already calculated<br />
          shape.reset();<br />
          const borderWidth = this.style#border-top-width;   <br />       
          const stoke_width = this.toPixels(borderWidth,#width);<br />
          // lines shall go through pixels middles:<br />
          x += stoke_width / 2; y -= stoke_width / 2; w -= stoke_width; h -= stoke_width;<br />
          const r = this.toPixels(RADIUS,#width);<br />
          const ah = this.toPixels(ARROW_HEIGHT,#height);<br />
          shape          <br />
            .moveTo(x+r, y)<br />
            // that arrow<br />
            .lineTo(x+w/2-ah,y) <br />
            .lineTo(x+w/2,y-ah)<br />
            .lineTo(x+w/2+ah,y)<br />
            // round rect<br />
            .arcTo(x+w, y,   x+w, y+h, r)<br />
            .arcTo(x+w, y+h, x,   y+h, r)<br />
            .arcTo(x,   y+h, x,   y,   r)<br />
            .arcTo(x,   y,   x+w, y,   r)          <br />    
            .close();<br />
          return shape; <br />
        }      <br />
        function drawBackground( gfx ) {<br />
          if(var shape = this.getShape()) {<br />
            const filter = [#drop-shadow: 6dip, 6dip, 6dip, rgba(0,0,0,0.60)]; // CSS: drop-sahdow(...);<br />
            const backColor = this.style.variable("shape-color");<br />
            const hasBorder = this.style#border-top-style == "solid";<br />
             gfx.pushLayer(#margin-box,filter);<br />
            if( hasBorder ) {<br />
              const borderColor = this.style#border-top-color;<br />
              const borderWidth = this.style#border-top-width;<br />
              gfx.lineWidth(borderWidth)<br />
                 .lineColor(borderColor)<br />
                 .fillColor(backColor)<br />
                 .drawPath( shape );<br />
            } else <br />
              gfx.fillColor(backColor)<br />
                 .drawPath( shape );<br />
            gfx.popLayer();<br />
            return true;<br />
          }<br />
        }<br />
      }<br />
    &lt;/script&gt;<br />
&lt;/head&gt;<br />
&lt;body&gt;<br />
   &lt;p&gt;HTML/CSS popup with custom shape&lt;/p&gt;<br />
   &lt;div#anchor&gt; <br />
      click to reveal popup<br />
   &lt;/div&gt;<br />
    &lt;popup .bubble&gt;<br />
      &lt;div.content&gt;Content&lt;/div&gt;<br />
    &lt;/popup&gt;<br />
&lt;/body&gt;<br />
&lt;/html&gt;<br />
    </code></div></demo-block>
    </ClientOnly>
  </div>

## popup-at

<div>
  <ClientOnly>
    <demo-block><div slot="source">
    <img src="./imgs/popup2.jpg">
    </div>
    <div slot="highlight"><code>
    &lt;html&gt;<br />
  &lt;head&gt;<br />
    &lt;title&gt;&lt;/title&gt;<br />
    &lt;style&gt;<br />
      div#test <br />
      { <br />
        behavior:button;<br />
        size:100dip; <br />
        border:1dip solid; <br />
        margin-left:*; <br />
      }<br />
      #test &gt; popup { background:gold; size:200dip 100dip; border: 1dip solid; margin:0 6dip; }<br />
      #test &gt; popup &gt; ol { overflow-y:auto; height:*; background:white; margin:0; }<br />
      #test &gt; popup &gt; ol &gt; li { <br />
        overflow-x:hidden;<br />
        text-overflow:ellipsis;<br />
        white-space:nowrap; }<br />
    &lt;/style&gt;<br />
    &lt;script type="text/tiscript"&gt;<br />
      $(div#test) &lt;&lt; event click<br />
      {<br />
        this.popup(this.$(popup),0x19 /*on the right/top, otherwise left/top */);<br />
      } <br />
    &lt;/script&gt;<br />
  &lt;/head&gt;<br />
&lt;body&gt;<br />
  &lt;div #test&gt;<br />
    Click to see popup<br />
    &lt;popup&gt;<br />
      Scrollable test:<br />
      &lt;ol&gt; <br />
        &lt;li&gt;111111111111111111111111111111111111&lt;/li&gt;<br />
        &lt;li&gt;2222222222222222222222222222222222222222&lt;/li&gt;<br />
        &lt;li&gt;3333&lt;/li&gt;<br />
        &lt;li&gt;4444&lt;/li&gt;<br />
        &lt;li&gt;5555&lt;/li&gt;<br />
        &lt;li&gt;6666&lt;/li&gt;<br />
        &lt;li&gt;7777&lt;/li&gt;<br />
        &lt;li&gt;8888&lt;/li&gt;<br />
        &lt;li&gt;9999&lt;/li&gt;<br />
      &lt;/ol&gt;<br />
    &lt;/popup&gt;<br />
  &lt;/div&gt;<br />
&lt;/body&gt;<br />
&lt;/html&gt;<br />
    </code></div></demo-block>
    </ClientOnly>
  </div>

## popup-at-coordinates

<div>
  <ClientOnly>
    <demo-block><div slot="source">
    <img src="./imgs/popup3.jpg">
    </div>
    <div slot="highlight"><code>
&lt;html&gt;<br />
  &lt;head&gt;<br />
    &lt;title&gt;&lt;/title&gt;<br />
    &lt;style&gt;<br />
      div#test<br /> 
      { <br />
        behavior:button;<br />
        size:100dip; <br />
        border:1dip solid; <br />
        margin-left:*;<br /> 
      }<br />
      #test &gt; popup { background:gold; size:200dip 100dip; border: 1dip solid; margin:0 6dip; }<br />
      #test &gt; popup &gt; ol { overflow-y:auto; height:*; background:white; margin:0; }<br />
      #test &gt; popup &gt; ol &gt; li {<br /> 
        overflow-x:hidden;<br />
        text-overflow:ellipsis;<br />
        white-space:nowrap; }<br />
    &lt;/style&gt;<br />
    &lt;script type="text/tiscript"&gt;<br />
      $(div#test) &lt;&lt; event mousedown (evt)<br />
      {<br />
        self.popup(this.$(popup),2 /*bottom/center of popup is at:*/, evt.xView, evt.yView );<br />
      } <br />
    &lt;/script&gt;<br />
  &lt;/head&gt;<br />
&lt;body&gt;<br />
  &lt;div #test&gt;<br />
    Click to see popup<br />
    &lt;popup&gt;<br />
      Scrollable test:<br />
      &lt;ol&gt; <br />
        &lt;li&gt;111111111111111111111111111111111111&lt;/li&gt;<br />
        &lt;li&gt;2222222222222222222222222222222222222222&lt;/li&gt;<br />
        &lt;li&gt;3333&lt;/li&gt;<br />
        &lt;li&gt;4444&lt;/li&gt;<br />
        &lt;li&gt;5555&lt;/li&gt;<br />
        &lt;li&gt;6666&lt;/li&gt;<br />
        &lt;li&gt;7777&lt;/li&gt;<br />
        &lt;li&gt;8888&lt;/li&gt;<br />
        &lt;li&gt;9999&lt;/li&gt;<br />
      &lt;/ol&gt;<br />
    &lt;/popup&gt;<br />
  &lt;/div&gt;<br />
&lt;/body&gt;<br />
&lt;/html&gt;<br />
    </code></div></demo-block>
    </ClientOnly>
  </div>

## popup-dynamic-sizing

<div>
  <ClientOnly>
    <demo-block><div slot="source">
    <img src="./imgs/popup4.jpg">
    </div>
    <div slot="highlight"><code>
    &lt;html&gt;<br />
&lt;head&gt;<br />
  &lt;style&gt;<br />
    @import url(../+plus/plus.css);<br />
    popup#test<br />
    {<br />
      background-color: gold;<br />
      border:2dip solid red;<br />
      width:100dip;<br />
      height:auto;<br />
    }<br />
    div#anchor<br />
    {<br />
      border:1dip solid blue;<br />
      width:50dip;<br />
      height:50dip;<br />
      cursor:pointer;<br />
    }<br />
  &lt;/style&gt;  <br />
  &lt;style #actions&gt;<br />
    div#anchor<br />
    {<br />
      behavior: button; <br />
    }<br />
  &lt;/style&gt;    <br />
  &lt;script type="text/tiscript"&gt;<br />
      // NOTE: this demo uses Plus bound Demo.list <br />
      namespace Demo <br />
      {<br />
        var list = ["item"];<br />
        function showPopup(anchor) <br />
        {<br />
          var anchorPoint = 1; // left/bottom<br />
          var popupPoint = 7;  // left/top<br />
          anchor.popup( $(popup#test), (popupPoint &lt;&lt; 16) | anchorPoint);<br />
        }<br />
        function addListItem() { <br />
          if( list.length &gt; 10 ) <br />
            touchList = removeListItem; <br />
          else <br />
            list.push("new item");<br />
        }<br />
        function removeListItem() { <br />
          if( list.length &lt;= 1 ) <br />
            touchList = addListItem; <br />
          else <br />
            list.pop();<br />
        }<br />
        var touchList = addListItem;<br />
      }        <br />
      self.timer(1s, function() { Demo.touchList(); return true; } );    <br />
    &lt;/script&gt;<br />
&lt;/head&gt;<br />
&lt;body model="Demo"&gt;<br />
    &lt;p&gt;This sample demonstrates automatic/dynamic popup sizing when its content changes and height:auto is set.&lt;/p&gt;<br />
    &lt;p&gt;Click below to see popup changing once per second.&lt;/p&gt;<br />
    &lt;div#anchor click="showPopup(this)"&gt;click me&lt;/div&gt;<br />
    &lt;popup#test each="i,item in list"&gt;<br />
      &lt;div&gt;&lt;(i)&gt; - &lt;(item)&gt;&lt;/div&gt;<br />
    &lt;/popup&gt;<br />
&lt;/body&gt;<br />
&lt;/html&gt;<br />
    </code></div></demo-block>
    </ClientOnly>
</div>

## popup-form

<div>
  <ClientOnly>
    <demo-block><div slot="source">
    <img src="./imgs/popup5.jpg">
    </div>
    <div slot="highlight"><code>
    &lt;html&gt;<br />
  &lt;head&gt;<br />
    &lt;title&gt;&lt;/title&gt;<br />
    &lt;style&gt;<br />
      popup { padding:1em; background:gold; }<br />
      popup &gt; button { display: block; margin:0.5em *;  }<br />
      popup &gt; form { flow:row(label,input); border-spacing: 4dip; }<br />
    &lt;/style&gt;<br />
    &lt;script type="text/tiscript"&gt;<br />
      $(#show) &lt;&lt; event click { <br />
        this.popup( $(popup#test));<br />
      }<br />
    &lt;/script&gt;<br />
    &lt;popup #test&gt;<br />
      &lt;form&gt;<br />
        &lt;label&gt;name&lt;/label&gt;&lt;input type=text&gt;<br />
        &lt;label&gt;surname&lt;/label&gt;&lt;input type=text&gt;<br />
      &lt;/form&gt;<br />
      &lt;button&gt;Test&lt;/button&gt;<br />
    &lt;/popup&gt;<br />
  &lt;/head&gt;<br />
&lt;body&gt;<br />
  &lt;button #show&gt;Show popup&lt;/button&gt;<br />
&lt;/body&gt;<br />
&lt;/html&gt;<br />
    </code></div></demo-block>
    </ClientOnly>
  </div>

## popup-resizing

<div>
  <ClientOnly>
    <demo-block><div slot="source">
    <img src="./imgs/popup6.jpg">
    </div>
    <div slot="highlight"><code>
    &&lt;html&gt;<br />
&lt;head&gt;<br />
  &lt;style&gt;<br />
    @import url(../../widgets/resizeable/resizeable.css);<br />
    popup#test<br />
    {<br />
      background-color: gold;<br />
      border:2dip solid red;<br />
      width:100dip;<br />
      height:100dip;<br />
      cursor:pointer;<br />
    }<br />
    popup#test.mouse-on-corner {<br />
      cursor:se-resize;<br />
    }<br />
    div#anchor<br />
    {<br />
      border:1dip solid blue;<br />
      width:50dip;<br />
      height:50dip;<br />
      cursor:pointer;<br />
    }<br />
  &lt;/style&gt;<br />  
  &lt;style #actions&gt;<br />
    div#anchor<br />
    {<br />
      behavior: button; <br />
    }<br />
  &lt;/style&gt;<br />    
  &lt;script type="text/tiscript"&gt;<br />
      $(div#anchor) &lt;&lt; event click<br />
      {<br />
        var anchorPoint = 1; // left/bottom<br />
        var popupPoint = 7;  // left/top<br />
        this.popup( $(popup#test), (popupPoint &lt;&lt; 16) | anchorPoint);<br />
      } <br />
    &lt;/script&gt;<br />
&lt;/head&gt;<br />
&lt;body&gt;<br />
    &lt;p&gt;This sample demonstrates popup interactive sizing.&lt;/p&gt;<br />
    &lt;div#anchor&gt; <br />
      click me<br />
    &lt;/div&gt;<br />
    &lt;popup#test resizeable &gt;<br />
      resize me<br />
    &lt;/popup&gt;<br />
&lt;/body&gt;<br />
&lt;/html&gt;
    </code></div></demo-block>
    </ClientOnly>
  </div>

## popup-resizing-moved

<div>
  <ClientOnly>
    <demo-block><div slot="source">
    <img src="./imgs/popup7.jpg">
    </div>
    <div slot="highlight"><code>
    &lt;html&gt;<br />
&lt;head&gt;<br />
  &lt;style&gt;<br />
    @import url(../../widgets/resizeable/resizeable.css);<br />
    popup#test<br />
    {<br />
      background-color: gold;<br />
      border:2dip solid red;<br />
      width:200dip;<br />
      height:100dip;<br />
      cursor:pointer;<br />
    }<br />
    popup#test.mouse-on-corner {<br />
      cursor:se-resize;<br />
    }  <br />
    div#anchor<br />
    {<br />
      border:1dip solid blue;<br />
      width:50dip;<br />
      height:50dip;<br />
      cursor:pointer;<br />
    }<br />
  &lt;/style&gt;  <br />
  &lt;style #actions&gt;<br />
    div#anchor<br />
    {<br />
      behavior: button; <br />
    }<br />
  &lt;/style&gt;    <br />
  &lt;script type="text/tiscript"&gt;<br />
      $(div#anchor) &lt;&lt; event click <br />
      {<br />
        $(popup#test).move( 400, 400, #view, #detached-window );<br />
      } <br />
    &lt;/script&gt;<br />
&lt;/head&gt;<br />
&lt;body&gt;<br />
    &lt;p&gt;This sample demonstrates moved popup interactive sizing.&lt;/p&gt;<br />
    &lt;div#anchor&gt; <br />
      click me<br />
    &lt;/div&gt;<br />
    &lt;popup#test resizeable &gt;<br />
      &lt;p&gt;Moved (to desktop) element.&lt;/p&gt;<br />
      &lt;p&gt;Resizeable.&lt;/p&gt;<br />
    &lt;/popup&gt;<br />
&lt;/body&gt;<br />
&lt;/html&gt;<br />
    </code></div></demo-block>
    </ClientOnly>
  </div>

## popup-trigger

<div>
  <ClientOnly>
    <demo-block><div slot="source">
    <img src="./imgs/popup8.jpg">
    </div>
    <div slot="highlight"><code>
    &lt;html&gt;<br />
&lt;head&gt;<br />
  &lt;style&gt;<br />
    popup#test<br />
    {<br />
      background-color: orange;<br />
      border:1dip solid red;<br />
      width:100dip;<br />
      height:100dip;<br />
      cursor:pointer;<br />
    }<br />
    div#anchor<br />
    {<br />
      behavior: button;    <br />
      border:1dip solid blue;<br />
      width:50dip;<br />
      height:50dip;<br />
      cursor:pointer;<br />
      aspect: PopupTrigger;<br />
    }<br />
  &lt;/style&gt;  <br />
  &lt;style #actions&gt;<br />
    div#anchor<br />
    {<br />
      behavior: button; <br />
    }<br />
  &lt;/style&gt;    <br />
  &lt;script type="text/tiscript"&gt;<br />
    function PopupTrigger() {<br />
      var popup;<br />
      if( var popupSelector = this.attributes["popup"] )<br />
        popup = self.select(popupSelector);<br />
      if( !popup )<br />
        popup = this.select("popup");<br />
      assert popup : "PopupTrigger: popup not found";<br />
      var popupShown = false;<br />
      var me = this;<br />
      this &lt;&lt; event click (evt) {<br />
        if( !evt.target.belongsTo(this,false,true) )<br />
          return false;<br />
        if(popupShown)<br />
          popup.state.popup = false;<br />
        else<br />
          this.popup(popup);<br />
      }<br />
      popup &lt;&lt; event popupready { popupShown = true; }<br />
            &lt;&lt; event popupdismissing { me.timer(500ms, ::popupShown = false); };<br />
    } <br />
    &lt;/script&gt;<br />
&lt;/head&gt;<br />
&lt;body&gt;<br />
   &lt;p&gt;Second click on the anchor closes the popup:&lt;/p&gt;<br />
    &lt;div#anchor popup="#test" title="hello"&gt; <br />
      anchor<br />
    &lt;/div&gt;<br />
    &lt;popup #test&gt;<br />
      popup<br />
    &lt;/popup&gt;<br />
&lt;/body&gt;<br />
&lt;/html&gt;<br />
    </code></div></demo-block>
    </ClientOnly>
</div>

## select-popup-positioning

<div>
  <ClientOnly>
    <demo-block><div slot="source">
    <img src="./imgs/popup9.jpg">
    </div>
    <div slot="highlight"><code>
    &lt;html&gt;<br />
  &lt;head&gt;<br />
    &lt;title&gt;&lt;/title&gt;<br />
    &lt;style&gt;<br />
      select &gt; popup { <br />
        width:max-content;<br />
        popup-position: top-right bottom-right; /*point-on-popup at point-on-anchor */<br />
        margin-top:4px;<br />
      }<br />
      select &gt; popup &gt; option {<br />
        padding: 2px 4px;<br />
      }<br />
    &lt;/style&gt;<br />
  &lt;/head&gt;<br />
&lt;body&gt;<br />
  &lt;p&gt;The popup on the select is positioned in the way that its top-right corner is placed at bottom-right corner<br />
  of the anchor element (the select itself here)&lt;/p&gt;<br />
  &lt;p&gt;As margin-top:4px is applied to the popup then it is offset from the anchor by that value.&lt;/p&gt;  <br />
  &lt;select&gt;<br />
    &lt;option&gt;First&lt;/option&gt;<br />
    &lt;option&gt;Second&lt;/option&gt;<br />
    &lt;option&gt;Third&lt;/option&gt;<br />
  &lt;/select&gt;<br />
&lt;/body&gt;<br />
&lt;/html&gt;<br />
    </code></div></demo-block>
    </ClientOnly>
  </div>

## show-popup

<div>
  <ClientOnly>
    <demo-block><div slot="source">
    <img src="./imgs/popup10.jpg">
    </div>
    <div slot="highlight"><code>
    &lt;html&gt;<br />
&lt;head&gt;<br />
  &lt;style&gt;<br />
    popup#test<br />
    {<br />
      background-color: orange;<br />
      border:1dip solid red;<br />
      width:100dip;<br />
      height:100dip;<br />
      cursor:pointer;<br />
      border-radius: 12dip;<br /> 
    }<br />
    div#anchor<br />
    {<br />
      border:1px solid blue;<br />
      width:50dip;<br />
      height:50dip;<br />
      cursor:pointer;<br />
    }<br />
    popup#test &gt; div {<br />
      background:red; size:10dip;<br />
    }<br />
    popup#test &gt; div:hover {<br />
      background:blue;<br />
    }<br />
  &lt;/style&gt;<br />  
  &lt;style #actions&gt;<br />
    div#anchor<br />
    {<br />
      behavior: button;<br /> 
    }<br />
  &lt;/style&gt;<br />    
  &lt;script type="text/tiscript"&gt;<br />
      $(div#anchor) &lt;&lt; event mousedown<br />
      {<br />
        if(!this.state.ownspopup) {<br />
          var anchorPoint = $(select#anchor-point).value;<br />
          var popupPoint = $(select#popup-point).value;<br />
          this.popup( $(popup#test), (popupPoint &lt;&lt; 16) | anchorPoint);<br />
        }<br />
      } <br />
      // close popup on mouseup inside it<br />
      event ~mouseup $(popup) {<br />
        this.state.popup = false;<br />
      }<br />
    &lt;/script&gt;<br />
&lt;/head&gt;<br />
&lt;body&gt;<br />
   popup point (see num keypad):<br />
   &lt;select #popup-point&gt;<br />
     &lt;option value=1&gt;1 - left/bottom&lt;/option&gt;   <br />
     &lt;option value=2&gt;2 - middle/bottom&lt;/option&gt;   <br />
     &lt;option value=3&gt;3 - right/bottom&lt;/option&gt;   <br />
     &lt;option value=4&gt;4 - left/middle&lt;/option&gt;   <br />
     &lt;option value=5&gt;5 - middle/middle&lt;/option&gt;   <br />
     &lt;option value=6&gt;6 - right/middle&lt;/option&gt;   <br />
     &lt;option value=7&gt;7 - left/top&lt;/option&gt;   <br />
     &lt;option value=8 selected&gt;8 - middle/top&lt;/option&gt;<br />   
     &lt;option value=9&gt;9 - right/top&lt;/option&gt;   <br />
   &lt;/select&gt; is on anchor point:<br />
   &lt;select #anchor-point&gt;<br />
     &lt;option value=1&gt;1 - left/bottom&lt;/option&gt;   <br />
     &lt;option value=2 selected&gt;2 - middle/bottom&lt;/option&gt;<br />   
     &lt;option value=3&gt;3 - right/bottom&lt;/option&gt;   <br />
     &lt;option value=4&gt;4 - left/middle&lt;/option&gt;   <br />
     &lt;option value=5&gt;5 - middle/middle&lt;/option&gt;   <br />
     &lt;option value=6&gt;6 - right/middle&lt;/option&gt;   <br />
     &lt;option value=7&gt;7 - left/top&lt;/option&gt;   <br />
     &lt;option value=8&gt;8 - middle/top&lt;/option&gt;   <br />
     &lt;option value=9&gt;9 - right/top&lt;/option&gt;   <br />
   &lt;/select&gt;<br />
   &lt;p&gt;Choose position above and click on the anchor:&lt;/p&gt;<br />
    &lt;div#anchor&gt; <br />
      anchor<br />
    &lt;/div&gt;<br />
    &lt;popup #test&gt;<br />
      popup<br />
      &lt;div&gt;&lt;/div&gt;<br />
    &lt;/popup&gt;<br />
&lt;/body&gt;<br />
&lt;/html&gt;<br />
    </code></div></demo-block>
    </ClientOnly>
  </div>