(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(43)},24:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),s=n.n(c),o=(n(24),n(2)),l=n(3),u=n(5),i=n(4),m=n(6),p=n(17),h=n.n(p),f=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",null,this.props.rates.map(function(e){return r.a.createElement("li",{key:e.currency},"Last rate:\xa0",r.a.createElement("span",{className:e.className},e.last," "),r.a.createElement("strong",null," ",e.currency,"\xa0(",e.symbol,")"))}))}}]),t}(a.Component),d=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).getData=function(){h.a.get("https://blockchain.info/pl/ticker").then(function(e){var t=e.data,a=n.state.currentRates,r=[];Object.keys(t).forEach(function(e){var n={currency:e,last:t[e].last,symbol:t[e].symbol,className:"blue"},c=a.find(function(e){return e.currency===n.currency});void 0!==c&&(n.last>c.last?n.className="green":n.last<c.last&&(n.className="red")),r.push(n)}),n.setState({currentRates:r}),console.log(t),Object.keys(t)}).catch(function(e){console.log(e)})},n.onFilter=function(e){var t=e.target.value;0===t.length&&n.getData(),t=t.trim().toUpperCase();var a=n.state.currentRates;a=a.filter(function(e){return console.log(t),e.currency.includes(t)}),n.setState({inputValue:t,currentRates:a})},n.state={currentRates:[],inputValue:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getData(),setInterval(function(){""===e.state.inputValue&&e.getData()},5e3)}},{key:"render",value:function(){return r.a.createElement("div",{className:"crypto"},r.a.createElement("h1",null,"Crypto list"),r.a.createElement("input",{type:"text",value:this.state.inputValue,onChange:this.onFilter}),r.a.createElement(f,{rates:this.state.currentRates}))}}]),t}(a.Component);n(42);var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"}),r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.fefe091f.chunk.js.map