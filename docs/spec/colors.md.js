webpackJsonp([47,129],{1081:function(t,e,r){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}var n=r(1),i=s(n),o=r(2);s(o);t.exports={content:["article",["h2","\u6709\u610f\u4e49\u7684\u8272\u5f69"],["p","\u8272\u5f69\u5728\u754c\u9762\u8bbe\u8ba1\u4e2d\u7684\u4f7f\u7528\u5e94\u540c\u65f6\u5177\u5907\u54c1\u724c\u8bc6\u522b\u6027\u4ee5\u53ca\u754c\u9762\u8bbe\u8ba1\u529f\u80fd\u6027\u3002\u8272\u5f69\u662f\u76f8\u5f53\u611f\u6027\u7684\u4e1c\u897f\uff0c\u8bbe\u8ba1\u4e2d\u5bf9\u8272\u5f69\u7684\u8fd0\u7528\u9996\u8981\u5e94\u8003\u8651\u5230\u54c1\u724c\u5c42\u9762\u7684\u8868\u8fbe\uff0c\u53e6\u5916\u5f88\u91cd\u8981\u7684\u4e00\u70b9\u662f\u8272\u5f69\u7684\u8fd0\u7528\u5e94\u8fbe\u5230\u4fe1\u606f\u4f20\u9012\uff0c\u52a8\u4f5c\u6307\u5f15\uff0c\u4ea4\u4e92\u53cd\u9988\uff0c\u6216\u662f\u5f3a\u5316\u548c\u51f8\u73b0\u67d0\u4e00\u4e2a\u5143\u7d20\u7684\u76ee\u7684\u3002\u4efb\u4f55\u989c\u8272\u7684\u9009\u53d6\u548c\u4f7f\u7528\u5e94\u8be5\u662f\u6709\u610f\u4e49\u7684\u3002"],["h2","Ant Design Colors"],["p","Ant Design \u7684\u8272\u677f\u7531 9 \u79cd\u57fa\u672c\u8272\u5f69\u7ec4\u6210\uff0c\u6bcf\u79cd\u57fa\u672c\u8272\u53c8\u884d\u751f\u51fa\u4e5d\u5bab\u683c\u8272\u677f\uff0c\u5728\u6b64\u57fa\u7840\u4e0a\u8fd8\u53ef\u4ee5\u901a\u8fc7\u9ed1\u767d\u53e0\u52a0\u7684\u65b9\u5f0f\u5b9e\u73b0\u8272\u5f69\u660e\u6697\u7684\u6548\u679c\u3002"],function(){var t=i["default"].createClass({displayName:"Palette",render:function(){var t=this.props.color;return i["default"].createElement("div",{className:"color-palette"},i["default"].createElement("div",{className:"main-color"},t.colors.map(function(t){return i["default"].createElement("div",{key:t,style:{backgroundColor:t}})})),i["default"].createElement("div",{className:"color-msg"},i["default"].createElement("p",{className:"color-msg-title"},t.title),i["default"].createElement("p",{className:"color-msg-description"},t.description)))}}),e=i["default"].createClass({displayName:"ExtendPalettes",render:function(){var e=[{title:"Primary Color",description:"\u5c3d\u7ba1\u540c\u4e00\u79cd\u989c\u8272\u4f20\u8fbe\u7684\u542b\u4e49\u4f1a\u56e0\u4eba\u800c\u5f02\uff0c\u53d7\u5230\u6587\u5316\u548c\u5730\u57df\u7684\u5f71\u54cd\u3002\u4f46\u989c\u8272\u8fd8\u662f\u53ef\u4ee5\u63d0\u53d6\u51fa\u4e00\u4e9b\u5171\u901a\u7684\u7279\u6027\uff0c\u4f8b\u5982\u6696\u8272\u7cfb\u7684\u7ea2\u3001\u6a59\u3001\u9ec4\u901a\u5e38\u7528\u4e8e\u8c61\u5f81\u6d3b\u529b\uff0c\u6fc0\u60c5\uff0c\u79ef\u6781\uff1b\u800c\u51b7\u8272\u7cfb\u7684\u7eff\u3001\u84dd\u3001\u7d2b\u901a\u5e38\u7ed9\u4eba\u611f\u89c9\u662f\u5b89\u5168\u3001\u7a33\u5b9a\u3001\u4e13\u4e1a\u3002",colors:["#E01515","#FF6600","#FAC450","#E4249B","#CCCCCC","#5FBC29","#582DAA","#0097DA","#01B3CA"]},{title:"Grey #CCCCCC",description:"\u7070\u8272\u662f\u4e2d\u6027\u5316\u7684\u989c\u8272\uff0c\u901a\u5e38\u4f20\u9012\u51fa\u6765\u7684\u611f\u89c9\u662f\u6c89\u7a33\uff0c\u5728\u914d\u8272\u5fc3\u7406\u5b66\u4e2d\u63cf\u8ff0 \u201c\u4e13\u4e1a\u5316\u3001\u7cfb\u7edf\u5316\u201d\u7684\u8bcd\u6761\u4e2d\u7070\u8272\u7684\u4f7f\u7528\u5360\u4e86\u8f83\u9ad8\u7684\u6bd4\u4f8b\u3002\u5efa\u8bae\u53ef\u7528\u4e8e\u5b57\u4f53\u989c\u8272\u7684\u9009\u62e9\u4ee5\u53ca\u754c\u9762\u4e2d\u5927\u9762\u79ef\u80cc\u666f\u7684\u5e95\u8272\u642d\u914d\u3002",colors:["#FFFFFF","#FCFCFC","#ECECEC","#989898","#CCCCCC","#D9D9D9","#666666","#323232","#000000"]},{title:"Red #E01515",description:"\u7ea2\u8272\u662f\u5177\u6709\u5f3a\u70c8\u60c5\u611f\u56e0\u7d20\u7684\u989c\u8272\uff0c\u901a\u5e38\u7ea2\u8272\u4f20\u9012\u7684\u5fc3\u7406\u6697\u793a\u6709\u6fc0\u60c5\u3001\u6b32\u671b\u3001\u6218\u4e89\u4ee5\u53ca\u5371\u9669\u3002\u8003\u8651\u5230\u7ea2\u8272\u7684\u7279\u6027\uff0c\u5728\u540e\u53f0\u7cfb\u7edf\u7684\u8bbe\u8ba1\u4e2d\u5efa\u8bae\u4f5c\u4e3a\u8f85\u52a9\u8272\u6765\u7a81\u51fa\u5143\u7d20\u7279\u6027\u6216\u662f\u5f3a\u5316\u4fe1\u606f\uff0c\u5e38\u89c1\u7684\u6709\u56fe\u8868\u5143\u7d20\uff0c\u72b6\u6001\uff0c\u5371\u9669\u4fe1\u53f7\uff0c\u9519\u8bef\u63d0\u793a\u7b49\u3002",colors:["#F9CCD6","#FFA5B4","#FA727D","#BB0606","#E01515","#FF3858","#881414","#4E1212","#260404"]},{title:"Green #60BE29",description:"\u7eff\u8272\u662f\u975e\u5e38\u52a1\u5b9e\u7684\u989c\u8272\uff0c\u5b83\u5438\u6536\u4e86\u84dd\u8272\u7684\u6c89\u7a33\u540c\u65f6\u5177\u5907\u9ec4\u8272\u7684\u6d3b\u529b\u3002\u7eff\u8272\u8574\u542b\u7740\u548c\u5e73\u3001\u751f\u547d\u3001\u5e0c\u671b\u3001\u8f7b\u677e\u3001\u5bcc\u9976\u7684\u542b\u4e49\u3002\u5728\u6211\u4eec\u7684\u8bbe\u8ba1\u5b9e\u4f8b\u4e2d\u7eff\u8272\u53ef\u7528\u6765\u4f20\u8fbe\u4efb\u52a1\u5b8c\u6210\u3001\u5065\u5eb7\u72b6\u6001\u4ee5\u53ca\u5b89\u5168\u611f\u7b49\u72b6\u6001\u3002",colors:["#E2F582","#D0EE9C","#A6E33C","#39A30E","#60BE29","#70D445","#18791B","#1F4A12","#102803"]},{title:"Blue #00A0E9",description:"\u8fd9\u91cc\u7684\u84dd\u8272\u6cbf\u7528\u7684\u662f\u8682\u8681\u91d1\u670d\u7684\u54c1\u724c\u8272\uff0c\u6df1\u84dd\u8272\u7684\u8fd0\u7528\u53ef\u4ee5\u4f20\u9012\u51fa\u53ef\u9760\u548c\u7a33\u5b9a\u7684\u60c5\u7eea\uff0c\u800c\u6d45\u84dd\u8272\u7cfb\u5219\u66f4\u4e3a\u53cb\u597d\u548c\u6e05\u65b0\uff0c\u540c\u65f6\u8fd8\u4ee3\u8868\u4e86\u79d1\u6280\u611f\u4e0e\u60f3\u8c61\u529b\u3002\u5728\u5f88\u591a\u4e13\u4e1a\u7c7b\u3001\u7ba1\u7406\u7c7b\u7684\u540e\u53f0\u7cfb\u7edf\u8bbe\u8ba1\u4e2d\u84dd\u8272\u7cfb\u5e38\u5e38\u4f1a\u88ab\u9009\u62e9\u4f5c\u4e3a\u8bbe\u8ba1\u7684\u4e3b\u8272\u6765\u4f7f\u7528\u3002",colors:["#CCE4F6","#95CCF5","#6AC2F5","#1D80D3","#00A0E9","#2DB7F5","#1F5AA3","#0B366A","#08172F"]},{title:"Magenta #E9259",description:"\u73ab\u7ea2\u8272\u662f\u8f83\u4e3a\u6b63\u9762\u7684\u8272\u5f69\uff0c\u542b\u6709\u9f13\u52b1\u3001\u53cb\u597d\u3001\u6d3b\u529b\u7684\u610f\u4e49\u3002\u4f46\u8003\u8651\u5230\u6d0b\u7ea2\u8272\u7684\u7279\u6027\uff0c\u5efa\u8bae\u4f5c\u4e3a\u8f85\u52a9\u8272\u6765\u4f7f\u7528\u3002",colors:["#F8C5ED","#F5A6D3","#F387C0","#BC0F69","#E9259E","#F056AD","#890B4C","#5E0B36","#230213"]},{title:"Orange #FF6100",description:"\u4ecb\u4e8e\u7ea2\u8272\u548c\u9ec4\u8272\u4e4b\u95f4\uff0c\u4f20\u8fbe\u6109\u60a6\uff0c\u521b\u9020\u529b\uff0c\u70ed\u60c5\uff0c\u5438\u5f15\u529b\u3002\u4f46\u6a59\u8272\u53c8\u4e0d\u5982\u7ea2\u8272\u90a3\u6837\u5177\u4fb5\u7565\u6027\uff0c\u540c\u65f6\u53c8\u80fd\u591f\u5f88\u597d\u7684\u5f15\u8d77\u89c6\u89c9\u7684\u6ce8\u610f\u529b\u3002\u53ef\u4ee5\u4f5c\u4e3a\u8bbe\u8ba1\u7684\u4e3b\u8272\u4e5f\u53ef\u4ee5\u7528\u4e8e\u8f85\u52a9\u8272\u3002\u4f46\u5927\u9762\u79ef\u4f7f\u7528\u65f6\u9700\u8981\u614e\u91cd\u3002",colors:["#F1DDBD","#FBCA72","#FDAC23","#CE630F","#FF6100","#FF8A0C","#8B4A04","#523A13","#341F0B"]},{title:"Purple #5E30B5",description:"\u7d2b\u8272\u662f\u8d64\u9ec4\u9ec4\u7eff\u9752\u84dd\u7d2b\u4e2d\u6700\u540e\u4e00\u540d\uff0c\u4e5f\u662f\u4eba\u7c7b\u53ef\u89c1\u5149\u8c31\u4e2d\u6ce2\u957f\u6700\u77ed\u7684\u5149\uff0c\u6709\u534e\u8d35\u3001\u4fe1\u4ef0\u3001\u795e\u79d8\u7b49\u542b\u4e49\uff0c\u540c\u65f6\u662f\u7ea2\u4e0e\u84dd\u7684\u7ed3\u5408\u4f53\uff0c\u4f20\u8fbe\u4e2d\u6027\u3001\u4e2d\u7acb\u7b49\u4fe1\u606f\u3002\u5728\u754c\u9762\u8bbe\u8ba1\u4e2d\u5efa\u8bae\u4f5c\u4e3a\u8f85\u52a9\u989c\u8272\u4f7f\u7528\u3002",colors:["#E8DFFA","#B196EE","#8867D2","#581CB6","#5E30B5","#7A43E2","#3F187D","#2B1845","#0F061B"]},{title:"Yellow #FAC450",description:"\u9ec4\u8272\u4f20\u8fbe\u4e86\u6109\u60a6\uff0c\u6d3b\u529b\uff0c\u521b\u9020\u529b\u7b49\u6b63\u9762\u7684\u60c5\u7eea\uff0c\u662f\u5177\u6b63\u80fd\u91cf\u7684\u8272\u5f69\u3002\u5728\u5177\u4f53\u8bbe\u8ba1\u4e2d\u9ec4\u8272\u5e38\u5e38\u4e8e\u8868\u8fbe\u8b66\u793a\u6027\u7684\u4fe1\u606f\u3002\u5efa\u8bae\u4f5c\u4e3a\u8f85\u52a9\u8272\u6765\u4f7f\u7528\u3002",colors:["#FAF4B2","#FDF161","#FDE023","#D9B416","#FAC450","#F7CD07","#B48513","#6B4C01","#241A06"]},{title:"Cyan #01BAD2",description:"\u4ecb\u4e8e\u84dd\u8272\u548c\u7eff\u8272\u4e4b\u95f4\uff0c\u5e26\u6709\u4e13\u4e1a\u3001\u51b7\u9759\u3001\u4ece\u5bb9\u7684\u5fc3\u7406\u6697\u793a\u3002\u5728\u4f53\u9a8c\u4e13\u4e1a\u5316\u548c\u7ed3\u6784\u5316\u7684\u8bbe\u8ba1\u4e2d\u5e38\u5e38\u88ab\u7528\u5230\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u7cfb\u7edf\u4e3b\u8272\u6765\u4f7f\u7528\u3002",colors:["#E0F7FA","#B2EBF2","#80DEEA","#00ACC2","#01BAD2","#26C6DA","#00708F","#014B62","#031213"]}];return i["default"].createElement("div",null,e.map(function(e,r){return i["default"].createElement(t,{key:r,color:e})}))}});return i["default"].createElement(e,{key:"palettes"})},["h2","\u8272\u5f69\u548c\u4ea4\u4e92"],["p","\u8bbe\u8ba1\u5143\u7d20\u672c\u8eab\u7531\u4e8e\u4ea4\u4e92\u884c\u4e3a\u4f1a\u5f15\u53d1\u4e00\u7cfb\u5217\u7ec6\u5fae\u7684\u89c6\u89c9\u53d8\u5316\uff0c\u800c\u5143\u7d20\u672c\u8eab\u7684\u989c\u8272\u53d8\u5316\u6709\u65f6\u4e5f\u80fd\u5f88\u597d\u7684\u5b9e\u73b0\u8fd9\u4e00\u76ee\u7684\u3002\u5728\u8fdb\u884c\u8fd9\u7c7b\u8bbe\u8ba1\u7684\u540c\u65f6\uff0c\u5efa\u8bae\u91c7\u53d6\u5728\u989c\u8272\u4e0a\u6dfb\u52a0\u9ed1\u8272\u6216\u8005\u767d\u8272\u5e76\u6309\u7167 ",["code","n+5%"]," \u7684\u89c4\u5f8b\u9012\u589e\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u3002\u4ee5\u4e0b\u56fe\u4e3a\u4f8b\uff0c\u5f53\u9f20\u6807 hover \u67d0\u4e2a\u7279\u5b9a\u5143\u7d20\uff0c\u5c31\u89c6\u4e3a\u6d6e\u8d77\uff0c\u5bf9\u5e94\u989c\u8272\u5c31\u76f8\u5e94\u589e\u52a0\u767d\u8272\u53e0\u52a0\uff0c\u76f8\u53cd\u70b9\u51fb\u7684\u884c\u4e3a\u53ef\u4ee5\u7406\u89e3\u4e3a\u6309\u4e0b\u53bb\uff0c\u5728\u989c\u8272\u4e0a\u5c31\u76f8\u5e94\u7684\u589e\u52a0\u9ed1\u8272\u7684\u53e0\u52a0\u3002"],["p",["img",{src:"https://t.alipayobjects.com/images/T1ZHxhXdNmXXXXXXXX.png",width:"100%"}]],["p",["img",{src:"https://t.alipayobjects.com/images/T1fZJhXahgXXXXXXXX.png",width:"100%"}]],["h2","\u8272\u5f69\u8bc6\u522b"],["p","\u5408\u9002\u7684\u8272\u5f69\u5bf9\u6bd4\u4e3a\u4fe1\u606f\u4f20\u8fbe\u52a0\u5206\uff0c\u540c\u65f6\u4e5f\u5e94\u653e\u8003\u8651\u5230\u6709\u989c\u8272\u8bc6\u522b\u969c\u788d\u4eba\u7fa4\u7684\u9700\u6c42\u3002\u6211\u4eec\u5c06\u6bcf\u79cd\u4e3b\u8272\u884d\u751f\u51fa\u6765\u7684\u989c\u8272\u8fdb\u884c\u4e86\u6253\u6807\uff0c\u5728\u8003\u8651\u5bf9\u6bd4\u989c\u8272\u7684\u9009\u62e9\u65f6\u5efa\u8bae\u4e24\u79cd\u989c\u8272\u5bf9\u5e94\u6807\u7b7e\u6570\u503c\u7684\u5dee\u8981\u5927\u4e8e\u7b49\u4e8e 5\u3002"],["p",["img",{src:"https://t.alipayobjects.com/images/rmsweb/T1hLphXgXcXXXXXXXX.png",width:"100%"}]],["p",["img",{src:"https://t.alipayobjects.com/images/rmsweb/T1v2phXj8bXXXXXXXX.png",width:"100%"}]],["h2","\u8272\u5f69\u6362\u7b97\u5de5\u5177"],["blockquote",["p","\u6b63\u6570\u4e3a\u53d8\u6de1 ",["code","tint"]," \uff0c\u8d1f\u6570\u4e3a\u52a0\u6df1 ",["code","shade"],"\u3002"]],function(){var t=r(1782),e=r(701),s=r(3),n=r(!function(){var t=new Error('Cannot find module "antd"');throw t.code="MODULE_NOT_FOUND",t}()),o=(n.Button,n.InputNumber),a=n.Slider,l=n.Tooltip,h=i["default"].createClass({displayName:"TintShadeTool",getInitialState:function(){return{result:"#2db7f5",color:"#2db7f5",justCopied:!1,darkBackground:!1,value:80}},handleChangeColor:function(t){this.setState({color:t.target.value},this.calculate)},handleChangeValue:function(t){this.setState({value:t},this.calculate)},componentDidMount:function(){this.calculate()},calculate:function(){if(0===this.state.value)return void this.setState({result:this.state.color});var e=this.state.value>0?"tint":"shade",r=new t(this.state.color),s=r[e](Math.abs(this.state.value));this.setState({result:"#"+s.hex,darkBackground:s.getBrightness()<50})},copySuccess:function(t){var e=this;this.setState({justCopied:!0},function(){setTimeout(function(){e.setState({justCopied:!1})},1e3)})},render:function(){var t={"-100":"\u52a0\u9ed1",0:"\u539f\u8272",100:"\u52a0\u767d"},r=s({"color-block":!0,copied:this.state.justCopied,dark:this.state.darkBackground});return i["default"].createElement("div",{style:{margin:"40px 0"}},i["default"].createElement("div",null,i["default"].createElement(l,{title:"\u70b9\u51fb\u8272\u5757\u590d\u5236\u8272\u503c"},i["default"].createElement(e,{className:r,onCopy:this.copySuccess,text:this.state.result},i["default"].createElement("div",{style:{backgroundColor:this.state.result}}))),i["default"].createElement("span",{style:{width:188,display:"inline-block",fontFamily:"Consolas"}},this.state.result),i["default"].createElement("input",{className:"ant-input",style:{width:80,color:this.state.color,marginRight:8},value:this.state.color,onChange:this.handleChangeColor}),i["default"].createElement(o,{style:{width:70},value:this.state.value,onChange:this.handleChangeValue,min:-100,max:100,step:5}),i["default"].createElement("span",{style:{margin:"0 0 0 8px"}},"%")),i["default"].createElement("div",{style:{width:420,margin:"40px 10px 60px"}},i["default"].createElement(a,{value:this.state.value,onChange:this.handleChangeValue,min:-100,max:100,step:5,marks:t})))}});return i["default"].createElement(h,{key:"tintShadeTool"})},["p","Ant Design \u4e13\u7528\u8272\u5f69\u6362\u7b97\u5de5\u5177\uff0c\u7528\u4e8e\u89e3\u6790\u7c7b\u4f3c ",["code","#2db7f5 tint 80%"]," \u7684\u8272\u5f69\u6807\u6ce8\u3002"],["p","less \u6216 scss \u8bed\u8a00\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",["code","tint(#2db7f5, 80%)"]," \u548c  ",["code","shade(#2db7f5, 80%)"]," \u7684\u8bed\u6cd5\u3002"]],meta:{category:{"zh-CN":"\u8bbe\u8ba1\u57fa\u7840","en-US":"Design Fundamental"},order:2,title:{"zh-CN":"\u8272\u5f69","en-US":"Colors"},filename:"docs/spec/colors.md"},toc:["ul",["li",["a",{href:"#\u6709\u610f\u4e49\u7684\u8272\u5f69"},"\u6709\u610f\u4e49\u7684\u8272\u5f69"]],["li",["a",{href:"#Ant-Design-Colors"},"Ant Design Colors"]],["li",["a",{href:"#\u8272\u5f69\u548c\u4ea4\u4e92"},"\u8272\u5f69\u548c\u4ea4\u4e92"]],["li",["a",{href:"#\u8272\u5f69\u8bc6\u522b"},"\u8272\u5f69\u8bc6\u522b"]],["li",["a",{href:"#\u8272\u5f69\u6362\u7b97\u5de5\u5177"},"\u8272\u5f69\u6362\u7b97\u5de5\u5177"]]]}},1782:function(t,e){/**
	 * values.js - Get the tints and shades of a color
	 * @version v1.0.3
	 * @link http://noeldelgado.github.io/Values.js/
	 * @license MIT
	 */
!function(){function e(t){return this.hex="",this.hsl={},this.rgb={},t?this.setColor(t):this}var r={reHash:new RegExp("^#"),reHEX:new RegExp("^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$"),reRGB:new RegExp("rgba?\\s*\\((\\d+)\\,\\s*(\\d+)\\,\\s*(\\d+)(,\\s*((\\d+)?(\\.\\d+)?))?\\)","i"),reHSL:new RegExp("hsla?\\((\\d+),\\s*([\\d.]+)%,\\s*([\\d.]+)%,?\\s*(?:0?(\\.\\d+)?|1(\\.0)?)?\\)","i"),isHEX:function(t){return this.reHEX.test(t)},isRGB:function(t){var e=t.match(this.reRGB);return!!(e&&e[1]<=255&&e[2]<=255&&e[3]<=255)},isHSL:function(t){var e=t.match(this.reHSL);return!!(e&&e[1]<=360&&e[2]<=100&&e[3]<=100)},HEXtoRGB:function(t){if(t=t.replace("#",""),3===t.length){var e=t.charAt(0),r=t.charAt(1),s=t.charAt(2);t=e+e+r+r+s+s}var n=parseInt(t,16);return{r:n>>16&255,g:n>>8&255,b:255&n}},RGBtoHEX:function(t,e,r){return(16777216+(t<<16)+(e<<8)+r).toString(16).slice(1)},RGBtoHSL:function(t,e,r){var s,n,i,o,a;if(t/=255,e/=255,r/=255,n=Math.max(t,e,r),s=Math.min(t,e,r),a=(n+s)/2,n===s)i=o=0;else{var l=n-s;o=a>.5?l/(2-n-s):l/(n+s),n===t?i=(e-r)/l+(e<r?6:0):n===e?i=(r-t)/l+2:n===r&&(i=(t-e)/l+4),i/=6}return{h:Math.round(360*i),s:Math.round(100*o),l:Math.round(100*a)}},HUEtoRGB:function(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),6*r<1?t+6*(e-t)*r:2*r<1?e:3*r<2?t+(e-t)*(2/3-r)*6:t},HSLtoRGB:function(t,e,r){var s,n,i;if(t/=360,e/=100,r/=100,0===e)s=n=i=r;else{var o=r<.5?r*(1+e):r+e-r*e,a=2*r-o;s=this.HUEtoRGB(a,o,t+1/3),n=this.HUEtoRGB(a,o,t),i=this.HUEtoRGB(a,o,t-1/3)}return{r:Math.round(255*s),g:Math.round(255*n),b:Math.round(255*i)}},mix:function(t,s,n){n="undefined"==typeof n?50:n;var i=n/100,o=2*i-1,a=0,l=((o*a===-1?o:(o+a)/(1+o*a))+1)/2,h=1-l,c=Math.round(t.rgb.r*l+s.rgb.r*h),u=Math.round(t.rgb.g*l+s.rgb.g*h),d=Math.round(t.rgb.b*l+s.rgb.b*h);return new e(r.RGBtoHEX(c,u,d))}};e.Utils=r,e.prototype.setColor=function(t){return r.isHEX(t)?this._setFromHexString(t):r.isRGB(t)?this._setFromRGBString(t):r.isHSL(t)?this._setFromHSLString(t):new Error("Invalid Color Format")},e.prototype.tint=function(t){return r.mix({rgb:{r:255,g:255,b:255}},this,t)},e.prototype.shade=function(t){return r.mix({rgb:{r:0,g:0,b:0}},this,t)},e.prototype.tints=function(t){for(var e=t=t||10,r=[];e<=100;)r.push(this.tint(e)),e+=t;return r},e.prototype.shades=function(t){for(var e=t=t||10,r=[];e<=100;)r.push(this.shade(e)),e+=t;return r},e.prototype.all=function(t){t=t;var e=this.tints(t).reverse(),r=this.shades(t);return e.push(this),e.concat(r)},e.prototype.getBrightness=function(){var t=this.rgb.r+this.rgb.g+this.rgb.b;return Math.round(t/765*100)},e.prototype.hexString=function(){return"#"+this.hex},e.prototype.rgbString=function(){return"rgb("+this.rgb.r+", "+this.rgb.g+", "+this.rgb.b+")"},e.prototype.hslString=function(){return"hsl("+this.hsl.h+", "+this.hsl.s+"%, "+this.hsl.l+"%)"},e.prototype._setFromHexString=function(t){return this.hex=r.reHash.test(t)?t.replace("#",""):t,this.rgb=r.HEXtoRGB(t),this.hsl=r.RGBtoHSL(this.rgb.r,this.rgb.g,this.rgb.b),this},e.prototype._setFromRGBString=function(t){var e=t.replace(/[^\d,]/g,"").split(","),s=parseInt(e[0],10),n=parseInt(e[1],10),i=parseInt(e[2],10);return this.rgb={r:s,g:n,b:i},this.hex=r.RGBtoHEX(s,n,i),this.hsl=r.RGBtoHSL(this.rgb.r,this.rgb.g,this.rgb.b),this},e.prototype._setFromHSLString=function(t){var e=t.match(r.reHSL),s=Math.round(e[1]),n=Math.round(e[2]),i=Math.round(e[3]);return this.hsl={h:s,s:n,l:i},this.rgb=r.HSLtoRGB(s,n,i),this.hex=r.RGBtoHEX(this.rgb.r,this.rgb.g,this.rgb.b),this},"undefined"!=typeof t&&"undefined"!=typeof t.exports?t.exports=e:window.Values=e}()}});