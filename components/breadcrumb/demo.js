webpackJsonp([30,121],{120:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var p=s(338),e=t(p),o=s(226),c=t(o);e["default"].Item=c["default"],a["default"]=e["default"],n.exports=a["default"]},121:function(n,a,s){"use strict";s(11),s(426)},226:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(7),e=t(p),o=s(15),c=t(o),l=s(3),u=t(l),i=s(5),k=t(i),r=s(4),d=t(r),m=s(1),g=t(m),f=s(18),h=t(f),b=function(n){function a(){return(0,u["default"])(this,a),(0,k["default"])(this,n.apply(this,arguments))}return(0,d["default"])(a,n),a.prototype.render=function(){var n=(0,h["default"])(this.props,["prefixCls","separator","children"]),a=(0,c["default"])(n,2),s=a[0],t=s.prefixCls,p=s.separator,o=s.children,l=a[1],u=void 0;return u="href"in this.props?g["default"].createElement("a",(0,e["default"])({className:t+"-link"},l),o):g["default"].createElement("span",(0,e["default"])({className:t+"-link"},l),o),g["default"].createElement("span",null,u,g["default"].createElement("span",{className:t+"-separator"},p))},a}(g["default"].Component);a["default"]=b,b.defaultProps={prefixCls:"lud-breadcrumb",separator:"/"},b.propTypes={prefixCls:g["default"].PropTypes.string,separator:g["default"].PropTypes.oneOfType([g["default"].PropTypes.string,g["default"].PropTypes.element]),href:g["default"].PropTypes.string},n.exports=a["default"]},338:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function p(n,a){if(!n.breadcrumbName)return null;var s=Object.keys(a).join("|"),t=n.breadcrumbName.replace(new RegExp(":("+s+")","g"),function(n,s){return a[s]||n});return t}function e(n,a,s,t){var e=s.indexOf(n)===s.length-1,o=p(n,a);return e?d["default"].createElement("span",null,o):d["default"].createElement("a",{href:"#/"+t.join("/")},o)}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var o=s(3),c=t(o),l=s(5),u=t(l),i=s(4),k=t(i),r=s(1),d=t(r),m=s(62),g=t(m),f=s(226),h=t(f),b=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.componentDidMount=function(){var n=this.props;(0,g["default"])(!("linkRender"in n||"nameRender"in n),"`linkRender` and `nameRender` are removed, please use `itemRender` instead.")},a.prototype.render=function(){var n=void 0,a=this.props,s=a.separator,t=a.prefixCls,p=a.routes,o=a.params,c=void 0===o?{}:o,l=a.children,u=a.itemRender,i=void 0===u?e:u;return p&&p.length>0?!function(){var a=[];n=p.map(function(n){n.path=n.path||"";var t=n.path.replace(/^\//,"");return Object.keys(c).forEach(function(n){t=t.replace(":"+n,c[n])}),t&&a.push(t),n.breadcrumbName?d["default"].createElement(h["default"],{separator:s,key:n.breadcrumbName},i(n,c,p,a)):null})}():l&&(n=d["default"].Children.map(l,function(n,a){return(0,r.cloneElement)(n,{separator:s,key:a})})),d["default"].createElement("div",{className:t},n)},a}(d["default"].Component);a["default"]=b,b.defaultProps={prefixCls:"lud-breadcrumb",separator:"/"},b.propTypes={prefixCls:d["default"].PropTypes.string,separator:d["default"].PropTypes.oneOfType([d["default"].PropTypes.string,d["default"].PropTypes.element]),routes:d["default"].PropTypes.array,params:d["default"].PropTypes.object,linkRender:d["default"].PropTypes.func,nameRender:d["default"].PropTypes.func},n.exports=a["default"]},426:function(n,a){},754:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(121),s(120)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"]],"en-US":[["p","The simplest use"]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic Usage"},filename:"components/breadcrumb/demo/basic.md",id:"components-breadcrumb-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Breadcrumb <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'react-lu-design\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Breadcrumb</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span>Home<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span><span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Application Center<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span><span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Application List<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span>An Application<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Breadcrumb</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(e["default"],null,c["default"].createElement(e["default"].Item,null,"Home"),c["default"].createElement(e["default"].Item,null,c["default"].createElement("a",{href:""},"Application Center")),c["default"].createElement(e["default"].Item,null,c["default"].createElement("a",{href:""},"Application List")),c["default"].createElement(e["default"].Item,null,"An Application"))}}},755:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(121),s(120)),e=t(p),o=s(1),c=t(o),l=s(2),u=(t(l),s(138));n.exports={content:{"zh-CN":[["p","\u548c ",["code","react-router@2.x"]," \u8fdb\u884c\u7ed3\u5408\u4f7f\u7528\u3002"]],"en-US":[["p","Used together with ",["code","react-router@2.x"],"."]]},meta:{order:2,iframe:!0,title:{"zh-CN":"\u8def\u7531","en-US":"React Router Integration"},filename:"components/breadcrumb/demo/router.md",id:"components-breadcrumb-demo-router"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Router<span class="token punctuation" >,</span> Route<span class="token punctuation" >,</span> Link<span class="token punctuation" >,</span> hashHistory <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'react-router\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Breadcrumb <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'react-lu-design\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Apps <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ul</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>app-list<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/apps/1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Application1<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span>\uff1a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/apps/1/detail<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Detail<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/apps/2<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Application2<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span>\uff1a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/apps/2/detail<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Detail<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>ul</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Home <span class="token operator" >=</span> props <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>demo-nav<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Home<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/apps<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Application List<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >{</span>props<span class="token punctuation" >.</span>children <span class="token operator" >||</span> <span class="token string" >\'Home\'</span><span class="token punctuation" >}</span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span>\n      <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span>\n        marginBottom<span class="token punctuation" >:</span> <span class="token number" >15</span><span class="token punctuation" >,</span>\n        marginTop<span class="token punctuation" >:</span> <span class="token number" >15</span><span class="token punctuation" >,</span>\n        paddingBottom<span class="token punctuation" >:</span> <span class="token number" >15</span><span class="token punctuation" >,</span>\n        borderBottom<span class="token punctuation" >:</span> <span class="token string" >\'1px dashed #ccc\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >></span></span>\n      Click the navigation above to <span class="token keyword" >switch</span><span class="token punctuation" >:</span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token operator" >&lt;</span>Breadcrumb <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>props<span class="token punctuation" >}</span> <span class="token operator" >/</span><span class="token operator" >></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Router</span> <span class="token attr-name" >history</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>hashHistory<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Route</span> <span class="token attr-name" >name</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>home<span class="token punctuation" >"</span></span> <span class="token attr-name" >breadcrumbName</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Home<span class="token punctuation" >"</span></span> <span class="token attr-name" >path</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/<span class="token punctuation" >"</span></span> <span class="token attr-name" >component</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>Home<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Route</span> <span class="token attr-name" >name</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>apps<span class="token punctuation" >"</span></span> <span class="token attr-name" >breadcrumbName</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Application</span> <span class="token attr-name" >List"</span> <span class="token attr-name" >path</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>apps<span class="token punctuation" >"</span></span> <span class="token attr-name" >component</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>Apps<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Route</span> <span class="token attr-name" >name</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>app<span class="token punctuation" >"</span></span> <span class="token attr-name" >breadcrumbName</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Application:id<span class="token punctuation" >"</span></span> <span class="token attr-name" >path</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>:id<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Route</span> <span class="token attr-name" >name</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>detail<span class="token punctuation" >"</span></span> <span class="token attr-name" >breadcrumbName</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Detail<span class="token punctuation" >"</span></span> <span class="token attr-name" >path</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>detail<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Route</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Route</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Route</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Router</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){return c["default"].createElement("ul",{className:"app-list"},c["default"].createElement("li",null,c["default"].createElement(u.Link,{to:"/apps/1"},"Application1"),"\uff1a",c["default"].createElement(u.Link,{to:"/apps/1/detail"},"Detail")),c["default"].createElement("li",null,c["default"].createElement(u.Link,{to:"/apps/2"},"Application2"),"\uff1a",c["default"].createElement(u.Link,{to:"/apps/2/detail"},"Detail")))},a=function(n){return c["default"].createElement("div",null,c["default"].createElement("div",{className:"demo-nav"},c["default"].createElement(u.Link,{to:"/"},"Home"),c["default"].createElement(u.Link,{to:"/apps"},"Application List")),n.children||"Home",c["default"].createElement("div",{style:{marginBottom:15,marginTop:15,paddingBottom:15,borderBottom:"1px dashed #ccc"}},"Click the navigation above to switch:"),c["default"].createElement(e["default"],n))};return c["default"].createElement(u.Router,{history:u.hashHistory},c["default"].createElement(u.Route,{name:"home",breadcrumbName:"Home",path:"/",component:a},c["default"].createElement(u.Route,{name:"apps",breadcrumbName:"Application List",path:"apps",component:n},c["default"].createElement(u.Route,{name:"app",breadcrumbName:"Application:id",path:":id"},c["default"].createElement(u.Route,{name:"detail",breadcrumbName:"Detail",path:"detail"})))))},style:"#components-breadcrumb-demo-router iframe {\n  height: 180px;\n}\n.demo-nav {\n  height: 30px;\n  line-height: 30px;\n  margin-bottom: 15px;\n  background: #f8f8f8;\n}\n.demo-nav a {\n  line-height: 30px;\n  padding: 0 10px;\n}\n.app-list {\n  margin-top: 15px;\n}",highlightedStyle:'<span class="token selector" ><span class="token id" >#components-breadcrumb-demo-router</span> iframe </span><span class="token punctuation" >{</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >180</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.demo-nav</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >30</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >line-height</span><span class="token punctuation" >:</span> <span class="token number" >30</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >margin-bottom</span><span class="token punctuation" >:</span> <span class="token number" >15</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >background</span><span class="token punctuation" >:</span> <span class="token hexcode" >#f8f8f8</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.demo-nav</span> a </span><span class="token punctuation" >{</span>\n  <span class="token property" >line-height</span><span class="token punctuation" >:</span> <span class="token number" >30</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >0</span> <span class="token number" >10</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.app-list</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-top</span><span class="token punctuation" >:</span> <span class="token number" >15</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>',src:"/demo-0.43199207895841263.html"}},756:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(121),s(120)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u4f7f\u7528 ",["code",'separator=">"']," \u53ef\u4ee5\u81ea\u5b9a\u4e49\u5206\u9694\u7b26\u3002"]],"en-US":[["p",'The separator can be customized by setting the separator property: separator=">"']]},meta:{order:3,title:{"zh-CN":"\u5206\u9694\u7b26","en-US":"Configuring the Separator"},filename:"components/breadcrumb/demo/separator.md",id:"components-breadcrumb-demo-separator"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Breadcrumb <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'react-lu-design\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Breadcrumb</span> <span class="token attr-name" >separator="</span><span class="token punctuation" >></span><span class="token attr-name" >"</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span>Home<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Breadcrumb.Item</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span><span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Application Center<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Breadcrumb.Item</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span><span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Application List<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span>An Application<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Breadcrumb</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(e["default"],{separator:">"},c["default"].createElement(e["default"].Item,null,"Home"),c["default"].createElement(e["default"].Item,{href:""},"Application Center"),c["default"].createElement(e["default"].Item,{href:""},"Application List"),c["default"].createElement(e["default"].Item,null,"An Application"))}}},757:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(121),s(120)),e=t(p),o=(s(17),s(12)),c=t(o),l=s(1),u=t(l),i=s(2);t(i);n.exports={content:{"zh-CN":[["p","\u56fe\u6807\u653e\u5728\u6587\u5b57\u524d\u9762\u3002"]],"en-US":[["p","The icon should be placed in front of the text."]]},meta:{order:1,title:{"zh-CN":"\u5e26\u6709\u56fe\u6807\u7684","en-US":"With an Icon"},filename:"components/breadcrumb/demo/withIcon.md",id:"components-breadcrumb-demo-withIcon"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Breadcrumb<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'react-lu-design\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Breadcrumb</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Breadcrumb.Item</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span><span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>home<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Breadcrumb.Item</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span><span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>user<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>Application List<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span>\n      Application\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Breadcrumb</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'
}],preview:function(){return u["default"].createElement(e["default"],null,u["default"].createElement(e["default"].Item,{href:""},u["default"].createElement(c["default"],{type:"home"})),u["default"].createElement(e["default"].Item,{href:""},u["default"].createElement(c["default"],{type:"user"}),u["default"].createElement("span",null,"Application List")),u["default"].createElement(e["default"].Item,null,"Application"))}}},1190:function(n,a,s){n.exports={basic:s(754),router:s(755),separator:s(756),withIcon:s(757)}}});