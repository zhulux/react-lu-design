webpackJsonp([32,121],{336:function(n,t){"use strict";function a(){if("undefined"==typeof window)return function(){};if(window.requestAnimationFrame)return window.requestAnimationFrame;var n=["moz","ms","webkit"].filter(function(n){return n+"RequestAnimationFrame"in window})[0];return n?window[n+"RequestAnimationFrame"]:function(n){return setTimeout(n,1e3/60)}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a,n.exports=t["default"]},485:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(){return"undefined"!=typeof window?window:null}function o(n){if(!n)return 0;if(!n.getClientRects().length)return 0;var t=n.getBoundingClientRect();if(t.width||t.height){var a=n.ownerDocument,s=a.documentElement;return t.top-s.clientTop}return t.top}function p(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},s=(0,i["default"])(t(),!0),p=document.getElementById(n.substring(1));if(p){var c=o(p),l=s+c,u=Date.now(),r=function k(){var n=Date.now(),t=n-u;window.scrollTo(window.pageXOffset,d(t,s,l,450)),t<450?f(k):a()};f(r),history.pushState(null,"",n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.scrollTo=t.easeInOutCubic=t.reqAnimFrame=void 0;var c=a(3),l=s(c);t.getDefaultTarget=e,t.getOffsetTop=o;var u=a(337),i=s(u),r=a(336),k=s(r),f=t.reqAnimFrame=(0,k["default"])(),d=t.easeInOutCubic=function(n,t,a,s){var e=a-t;return n/=s/2,n<1?e/2*n*n*n+t:e/2*((n-=2)*n*n+2)+t};t.scrollTo=p;var h=function(){function n(){(0,l["default"])(this,n),this.links=[],this.currentAnchor=null,this._activeAnchor=""}return n.prototype.addLink=function(n){this.links.indexOf(n)===-1&&this.links.push(n)},n.prototype.getCurrentActiveAnchor=function(){return this.currentAnchor},n.prototype.setActiveAnchor=function(n){this.currentAnchor=n},n.prototype.getCurrentAnchor=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t="";return this.links.forEach(function(a){var s=document.getElementById(a.substring(1));if(s){var e=o(s),p=e+s.clientHeight;e<=n&&p>=-n&&(t=a)}}),this._activeAnchor=t||this._activeAnchor,this._activeAnchor},n.prototype.scrollTo=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};p(n,t,a)},n}();t["default"]=h},486:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var e=a(8),o=s(e),p=a(3),c=s(p),l=a(5),u=s(l),i=a(4),r=s(i),k=a(1),f=s(k),d=a(6),h=s(d),m=a(160),v=s(m),g=a(1076),A=s(g),x=a(225),y=s(x),C=a(485),w=s(C),L=function(n){function t(a){(0,c["default"])(this,t);var s=(0,u["default"])(this,n.call(this,a));return s.handleScroll=function(){s.setState({activeAnchor:s.anchorHelper.getCurrentAnchor(s.props.bounds)})},s.updateInk=function(){var n=s.anchorHelper.getCurrentActiveAnchor();n&&(s.refs.ink.style.top=n.offsetTop+n.clientHeight/2-4.5+"px")},s.clickAnchorLink=function(n,t){s.refs.ink.style.transition="top 0.01s ease-in-out",s._avoidInk=!0,s.refs.ink.style.top=t.offsetTop+t.clientHeight/2-4.5+"px",s.anchorHelper.scrollTo(n,C.getDefaultTarget,function(){s.refs.ink.style.transition="top 0.3s ease-in-out",s._avoidInk=!1})},s.renderAnchorLink=function(n){var t=n.props.href;return t?(s.anchorHelper.addLink(t),f["default"].cloneElement(n,{onClick:s.clickAnchorLink,prefixCls:s.props.prefixCls,bounds:s.props.bounds,affix:s.props.affix})):n},s.state={activeAnchor:null,animated:!0},s.anchorHelper=new w["default"],s}return(0,r["default"])(t,n),t.prototype.getChildContext=function(){return{anchorHelper:this.anchorHelper}},t.prototype.componentDidMount=function(){this.handleScroll(),this.updateInk(),this.scrollEvent=(0,v["default"])((this.props.target||C.getDefaultTarget)(),"scroll",this.handleScroll)},t.prototype.componentWillUnmount=function(){this.scrollEvent&&this.scrollEvent.remove()},t.prototype.componentDidUpdate=function(){this._avoidInk||this.updateInk()},t.prototype.render=function(){var n,t,a,s=this.props,e=s.prefixCls,p=s.offsetTop,c=s.style,l=s.className,u=void 0===l?"":l,i=s.affix,r=this.state,k=r.activeAnchor,d=r.animated,m=(0,h["default"])((n={},(0,o["default"])(n,e+"-ink-ball",!0),(0,o["default"])(n,"animated",d),(0,o["default"])(n,"visible",!!k),n)),v=(0,h["default"])((t={},(0,o["default"])(t,e+"-wrapper",!0),(0,o["default"])(t,u,!!u),t)),g=(0,h["default"])((a={},(0,o["default"])(a,""+e,!0),(0,o["default"])(a,"fixed",!i),a)),A=f["default"].createElement("div",{className:v,style:c},f["default"].createElement("div",{className:g},f["default"].createElement("div",{className:e+"-ink"},f["default"].createElement("span",{className:m,ref:"ink"})),f["default"].Children.map(this.props.children,this.renderAnchorLink)));return i===!1?A:f["default"].createElement(y["default"],{offsetTop:p},A)},t}(f["default"].Component);t["default"]=L,L.Link=A["default"],L.defaultProps={prefixCls:"lud-anchor",affix:!0},L.childContextTypes={anchorHelper:f["default"].PropTypes.any},n.exports=t["default"]},487:function(n,t,a){"use strict";a(11),a(1529)},736:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(a(487),a(486)),o=s(e),p=a(1),c=s(p),l=a(2);s(l);n.exports={content:{"zh-CN":[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"]],"en-US":[["p","The simplest usage."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/anchor/demo/basic.md",id:"components-anchor-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Anchor <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'react-lu-design\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> <span class="token punctuation" >{</span> Link <span class="token punctuation" >}</span> <span class="token operator" >=</span> Anchor<span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Anchor</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#components-anchor-demo-basic<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Basic</span> <span class="token attr-name" >demo"</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#components-anchor-demo-fixed<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Fixed</span> <span class="token attr-name" >demo"</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#API<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>API<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#Anchor-Props<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Anchor</span> <span class="token attr-name" >Props"</span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#Link-Props<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Link</span> <span class="token attr-name" >Props"</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Anchor</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=o["default"].Link;return c["default"].createElement(o["default"],null,c["default"].createElement(n,{href:"#components-anchor-demo-basic",title:"Basic demo"}),c["default"].createElement(n,{href:"#components-anchor-demo-fixed",title:"Fixed demo"}),c["default"].createElement(n,{href:"#API",title:"API"},c["default"].createElement(n,{href:"#Anchor-Props",title:"Anchor Props"}),c["default"].createElement(n,{href:"#Link-Props",title:"Link Props"})))},style:"\n.code-box-demo .lud-affix {\n  z-index: 11;\n}\n"}},737:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(a(487),a(486)),o=s(e),p=a(1),c=s(p),l=a(2);s(l);n.exports={content:{"zh-CN":[["p","\u4e0d\u6d6e\u52a8\uff0c\u72b6\u6001\u4e0d\u968f\u9875\u9762\u6eda\u52a8\u53d8\u5316\u3002"]],"en-US":[["p","Do not change state when page is scrolling."]]},meta:{order:2,title:{"zh-CN":"\u56fa\u5b9a","en-US":"Fixed Anchor"},filename:"components/anchor/demo/fixed.md",id:"components-anchor-demo-fixed"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Anchor <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'react-lu-design\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> <span class="token punctuation" >{</span> Link <span class="token punctuation" >}</span> <span class="token operator" >=</span> Anchor<span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Anchor</span> <span class="token attr-name" >affix</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#components-anchor-demo-basic<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Basic</span> <span class="token attr-name" >demo"</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#components-anchor-demo-fixed<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Fixed</span> <span class="token attr-name" >demo"</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#API<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>API<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#Anchor-Props<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Anchor</span> <span class="token attr-name" >Props"</span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#Link-Props<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Link</span> <span class="token attr-name" >Props"</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Anchor</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=o["default"].Link;return c["default"].createElement(o["default"],{affix:!1},c["default"].createElement(n,{href:"#components-anchor-demo-basic",title:"Basic demo"}),c["default"].createElement(n,{href:"#components-anchor-demo-fixed",title:"Fixed demo"}),c["default"].createElement(n,{href:"#API",title:"API"},c["default"].createElement(n,{href:"#Anchor-Props",title:"Anchor Props"}),c["default"].createElement(n,{href:"#Link-Props",title:"Link Props"})))}}},1076:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var e=a(8),o=s(e),p=a(3),c=s(p),l=a(5),u=s(l),i=a(4),r=s(i),k=a(1),f=s(k),d=a(6),h=s(d),m=a(485),v=function(n){function t(a,s){(0,c["default"])(this,t);var e=(0,u["default"])(this,n.call(this,a,s));return e.renderAnchorLink=function(n){var t=n.props.href;return t?(e.context.anchorHelper.addLink(t),f["default"].cloneElement(n,{onClick:e.props.onClick,prefixCls:e.props.prefixCls,affix:e.props.affix})):n},e.refsTo=function(n){e._component=n},e.scrollTo=function(n){var t=e.props,a=t.onClick,s=t.href,o=e.context.anchorHelper;if(n.preventDefault(),a)a(s,e._component);else{n.stopPreventDefault();var p=o?o.scrollTo:m.scrollTo;p(s)}},e}return(0,r["default"])(t,n),t.prototype.getChildContext=function(){return{anchorHelper:this.context.anchorHelper}},t.prototype.setActiveAnchor=function(){var n=this.props,t=n.bounds,a=n.href,s=n.affix,e=this.context.anchorHelper,o=s&&e&&e.getCurrentAnchor(t)===a;o&&e&&e.setActiveAnchor(this._component)},t.prototype.componentDidMount=function(){this.setActiveAnchor()},t.prototype.componentDidUpdate=function(){this.setActiveAnchor()},t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,s=t.href,e=t.children,p=t.title,c=t.bounds,l=t.affix,u=this.context.anchorHelper,i=l&&u&&u.getCurrentAnchor(c)===s,r=(0,h["default"])((n={},(0,o["default"])(n,a+"-link",!0),(0,o["default"])(n,a+"-link-active",i),n));return f["default"].createElement("div",{className:r},f["default"].createElement("a",{ref:this.refsTo,className:a+"-link-title",onClick:this.scrollTo,href:s,title:"string"==typeof p?p:""},p),f["default"].Children.map(e,this.renderAnchorLink))},t}(f["default"].Component);t["default"]=v,v.contextTypes={anchorHelper:f["default"].PropTypes.any},v.childContextTypes={anchorHelper:f["default"].PropTypes.any},v.defaultProps={href:"#",prefixCls:"lud-anchor"},n.exports=t["default"]},1186:function(n,t,a){n.exports={basic:a(736),fixed:a(737)}},1529:function(n,t){}});