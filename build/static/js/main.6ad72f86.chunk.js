(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t){t.exports=[{id:1,content:"Deep ocean"},{id:2,content:"Forest"},{id:3,content:"Birth of life"},{id:4,content:"Heartbeat"},{id:5,content:"Bonfire"},{id:6,content:"Crunching through the snow"},{id:7,content:"Iceberg grounding on seafloor"},{id:8,content:"Music of the spheres"},{id:9,content:"Waves"},{id:10,content:"The first tool"},{id:11,content:"Dialing antique telephone"},{id:12,content:"Film running out on 16mm projector"},{id:13,content:"Temple bell"},{id:14,content:"Cafe"},{id:15,content:"Shutter click of SLR camera"},{id:16,content:"Chimpanzee"},{id:17,content:"Raining with distant thunder"},{id:18,content:"*"},{id:19,content:"*"},{id:20,content:"*"},{id:21,content:"*"},{id:22,content:"*"},{id:23,content:"*"},{id:24,content:"*"},{id:25,content:"*"},{id:26,content:"*"},{id:27,content:"*"},{id:28,content:"*"},{id:29,content:"*"},{id:30,content:"*"},{id:31,content:"*"},{id:32,content:"*"},{id:33,content:"*"},{id:34,content:"*"},{id:35,content:"*"},{id:36,content:"*"},{id:37,content:"*"},{id:38,content:"*"},{id:39,content:"*"},{id:40,content:"*"},{id:41,content:"*"},{id:42,content:"*"},{id:43,content:"*"},{id:44,content:"*"},{id:45,content:"*"},{id:46,content:"*"},{id:47,content:"*"},{id:48,content:"*"},{id:49,content:"*"},{id:50,content:"*"},{id:51,content:"*"},{id:52,content:"*"},{id:53,content:"*"},{id:54,content:"*"},{id:55,content:"*"},{id:56,content:"*"},{id:57,content:"*"},{id:58,content:"*"},{id:59,content:"*"},{id:60,content:"*"},{id:61,content:"*"},{id:62,content:"*"},{id:63,content:"*"},{id:64,content:"*"},{id:65,content:"*"},{id:66,content:"*"},{id:67,content:"*"},{id:68,content:"*"},{id:69,content:"*"},{id:70,content:"*"},{id:71,content:"*"},{id:72,content:"*"},{id:73,content:"*"},{id:74,content:"*"},{id:75,content:"*"},{id:76,content:"*"},{id:77,content:"*"},{id:78,content:"*"},{id:79,content:"*"},{id:80,content:"*"},{id:81,content:"*"},{id:82,content:"*"},{id:83,content:"*"},{id:84,content:"*"},{id:85,content:"*"},{id:86,content:"*"},{id:87,content:"*"},{id:88,content:"*"},{id:89,content:"*"},{id:90,content:"*"},{id:91,content:"*"},{id:92,content:"*"},{id:93,content:"*"},{id:94,content:"*"},{id:95,content:"*"},{id:96,content:"*"},{id:97,content:"*"},{id:98,content:"*"},{id:99,content:"*"},{id:100,content:"*"}]},function(t,n,e){t.exports=e(29)},,,,,,function(t,n,e){},,function(t,n,e){},,function(t,n,e){},,function(t,n,e){},,function(t,n,e){var c={"./1.wav":24,"./2.wav":25,"./3.wav":26,"./4.wav":27,"./5.wav":28};function i(t){var n=o(t);return e(n)}function o(t){var n=c[t];if(!(n+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n}i.keys=function(){return Object.keys(c)},i.resolve=o,t.exports=i,i.id=23},function(t,n,e){t.exports=e.p+"static/media/1.ff76ae21.wav"},function(t,n,e){t.exports=e.p+"static/media/2.a99b42c0.wav"},function(t,n,e){t.exports=e.p+"static/media/3.2e3cb892.wav"},function(t,n,e){t.exports=e.p+"static/media/4.539ede99.wav"},function(t,n,e){t.exports=e.p+"static/media/5.9351d372.wav"},function(t,n,e){"use strict";e.r(n);var c=e(0),i=e.n(c),o=e(7),a=e.n(o),d=(e(15),e(1)),r=e(2),l=e(4),s=e(3),u=e(5),m=(e(17),e(19),function(t){function n(){return Object(d.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){var t=this.props.list,n=this.props.showContent,e=t.map(function(t){for(;t.id<=25;)return t.id<10?i.a.createElement("div",{className:"content",key:t.id},i.a.createElement("form",{onClick:function(){n(t.id,t.content)}},i.a.createElement("div",null,i.a.createElement("span",{className:"index"},t.id,". \xa0")," ",t.content))):i.a.createElement("div",{className:"content",key:t.id},i.a.createElement("form",{onClick:function(){n(t.id,t.content)}},i.a.createElement("div",null,i.a.createElement("span",{className:"index"},t.id,".")," ",t.content)))}),c=t.map(function(t){for(;t.id>25&&t.id<=50;)return i.a.createElement("div",{className:"content",key:t.id},i.a.createElement("form",{onClick:function(){n(t.id,t.content)}},i.a.createElement("div",null,i.a.createElement("span",{className:"index"},t.id,".")," ",t.content)))}),o=t.map(function(t){for(;t.id>50&&t.id<=75;)return i.a.createElement("div",{className:"content",key:t.id},i.a.createElement("form",{onClick:function(){n(t.id,t.content)}},i.a.createElement("div",null,i.a.createElement("span",{className:"index"},t.id,".")," ",t.content)))}),a=t.map(function(t){for(;t.id>75&&t.id<=100;)return i.a.createElement("div",{className:"content",key:t.id},i.a.createElement("form",{onClick:function(){n(t.id,t.content)}},i.a.createElement("div",null,i.a.createElement("span",{className:"index"},t.id,".")," ",t.content)))});return i.a.createElement("div",{className:"list"},i.a.createElement("div",{className:"content-wrapper",group:"1"},e),i.a.createElement("div",{className:"content-wrapper",group:"2"},c),i.a.createElement("div",{className:"content-wrapper",group:"3"},o),i.a.createElement("div",{className:"content-wrapper",group:"4"},a))}}]),n}(c.Component));e(21);var p=function(t){var n={};return t.keys().map(function(e){n[e.replace("./","")]=t(e)}),n}(e(23)),f=function(t){function n(){return Object(d.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){var t=this.props.index,n=this.props.content,e=null!=t?i.a.createElement("div",{className:"page"},i.a.createElement("div",null,n),i.a.createElement("audio",{src:p[t+".wav"],controls:!0})):null;return i.a.createElement("div",{className:"page-wrapper"},e)}}]),n}(c.Component),v=e(8),h=function(t){function n(){var t,e;Object(d.a)(this,n);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(e=Object(l.a)(this,(t=Object(s.a)(n)).call.apply(t,[this].concat(i)))).state={list:v,index:null,content:null},e.showContent=function(t,n){e.setState({index:t,content:n})},e}return Object(u.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Subjective List of Meaningful Sounds on the Earth"),i.a.createElement(m,{list:this.state.list,showContent:this.showContent}),i.a.createElement(f,{index:this.state.index,content:this.state.content}),i.a.createElement("p",{className:"author"},"by Joohyun Park"))}}]),n}(c.Component);a.a.render(i.a.createElement(h,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.6ad72f86.chunk.js.map