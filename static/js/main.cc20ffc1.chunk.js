(window["webpackJsonpmarkdown-previewer"]=window["webpackJsonpmarkdown-previewer"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),o=n.n(i),s=(n(14),n(4)),l=n(5),c=n(8),d=n(6),h=n(1),u=n(7);n(15);var m=function(e){return r.a.createElement("div",{className:"toolbar"},r.a.createElement("i",{className:"icon-leaf"}),e.text)};n(16);var f=function(e){return r.a.createElement("div",{className:"editor-container"},r.a.createElement(m,{text:"Editor"}),r.a.createElement("textarea",{id:"editor",type:"text",wrap:"hard",value:e.text,onChange:function(t){e.handleChange(t.target.value)}}))};n(17);var w=function(e){var t=n(18).sanitize(e.html);return r.a.createElement("div",{className:"preview-container"},r.a.createElement(m,{text:"Previewer"}),r.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:t}}))},g=n(19),v={baseUrl:null,breaks:!0,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1},b={start:function(e){return g(e,v)}},p="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)",k=(n(21),n(22),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={text:p,html:{}},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({html:b.start(this.state.text)})}},{key:"handleChange",value:function(e){this.setState({text:e,html:b.start(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,{text:this.state.text,handleChange:this.handleChange}),r.a.createElement(w,{html:this.state.html}))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.cc20ffc1.chunk.js.map