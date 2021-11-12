(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{176:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(83),o=a.n(r),c=(a(176),a(7)),l=a(8),s=a(11),u=a(9),h=a(10),m=a(1),d=(a(177),a(178),a(179),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={name:"",modifier:0},e.handleChange=e.handleChange.bind(Object(m.a)(Object(m.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(m.a)(Object(m.a)(e))),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){var t={};t[e.target.id]=e.target.value,this.setState(t)}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.state.name&&(this.props.onSubmit(Object.assign({},this.state)),this.setState({name:"",modifier:0}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"inputCardContainer"},i.a.createElement("form",{id:"characterInput",ref:"form",onSubmit:this.handleSubmit,className:"inputForm"},"Character Name:",i.a.createElement("input",{type:"text",name:"characterName",id:"name",value:this.state.name,onChange:this.handleChange}),i.a.createElement("br",null),"Initiative Modifier:",i.a.createElement("input",{type:"number",name:"initiativeModifer",id:"modifier",value:this.state.modifier,onChange:this.handleChange}),i.a.createElement("br",null),i.a.createElement("input",{type:"submit",value:"Add"})))}}]),t}(i.a.Component)),b=(a(180),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={name:e.name,modifier:e.modifier,roll:null,initiative:null},a.handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a.handleClick=a.handleClick.bind(Object(m.a)(Object(m.a)(a))),a.removeCharacter=a.removeCharacter.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({roll:e.target.value})}},{key:"handleClick",value:function(e){e.preventDefault();var t=parseInt(this.state.modifier,10),a=parseInt(this.state.roll,10);if(!(a<1||a>20||isNaN(a))){var n=t+a;n<0&&(n=0),this.setState({initiative:n},function(){this.submitInitiative()})}}},{key:"submitInitiative",value:function(){this.props.handleChange(this.state)}},{key:"removeCharacter",value:function(){this.props.removeCharacter(this.state)}},{key:"render",value:function(){return i.a.createElement("div",{className:"characterInfoCard"},i.a.createElement("div",null,i.a.createElement("p",null,"Name: ",this.state.name),i.a.createElement("p",null,"Initiative Modifier: ",this.state.modifier),i.a.createElement("form",{onSubmit:this.handleClick},"Roll:",i.a.createElement("input",{type:"number",name:"initiativeRoll",onChange:this.handleChange}),i.a.createElement("input",{type:"submit",value:"OK"})),i.a.createElement("p",null,"Initiative: ",this.state.initiative)),i.a.createElement("div",null,i.a.createElement("button",{type:"button",onClick:this.removeCharacter},"X")))}}]),t}(i.a.Component)),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentWillReceiveProps(e),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(Object(m.a)(a))),a.handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a.removeCharacter=a.removeCharacter.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){}},{key:"handleSubmit",value:function(e){this.props.handleChange(e)}},{key:"handleChange",value:function(e){this.props.handleChange(e)}},{key:"removeCharacter",value:function(e){this.props.removeCharacter(e)}},{key:"render",value:function(){var e=this,t=this.props.characterData.map(function(t){return i.a.createElement(b,{name:t.name,modifier:t.modifier,handleChange:e.handleChange,key:t.name,removeCharacter:e.removeCharacter})});return i.a.createElement("div",{className:"characterInfoPane"},i.a.createElement("h3",null,i.a.createElement("b",null,"Characters")),i.a.createElement("div",null,t),i.a.createElement("div",null,i.a.createElement(d,{onSubmit:this.handleSubmit})),i.a.createElement("div",{className:"startCombatButton"},i.a.createElement("button",{onClick:this.props.startCombat},"Start Combat")))}}]),t}(i.a.Component),v=(a(181),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={name:e.player.name,initiative:e.player.initiative},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({name:e.player.name,initiative:e.player.initiative})}},{key:"render",value:function(){return i.a.createElement("div",{className:"activePlayer"},i.a.createElement("p",null,"Name:",this.state.name),i.a.createElement("p",null,"Initiative:",this.state.initiative))}}]),t}(i.a.Component)),p=(a(182),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"multiRoundEffect"},i.a.createElement("p",null,this.props.details.effectName),i.a.createElement("p",null,"Rounds Remaining: ",this.props.details.roundValue," "))}}]),t}(i.a.Component)),C=(a(183),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={turn:0,round:1,activePlayer:e.sortedCharacters[0]},a.nextTurn=a.nextTurn.bind(Object(m.a)(Object(m.a)(a))),a.showActivePlayer=a.showActivePlayer.bind(Object(m.a)(Object(m.a)(a))),a.updateRemainingRounds=a.updateRemainingRounds.bind(Object(m.a)(Object(m.a)(a))),a.resortPlayers=a.resortPlayers.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"nextTurn",value:function(){this.state.turn+1===this.props.sortedCharacters.length?this.setState({round:this.state.round+1,turn:0},this.triggerNextRound):this.setState({turn:this.state.turn+1},this.showActivePlayer)}},{key:"showActivePlayer",value:function(){this.setState({activePlayer:this.props.sortedCharacters[this.state.turn]})}},{key:"resortPlayers",value:function(){this.props.determineCombatOrder(),this.showActivePlayer()}},{key:"triggerNextRound",value:function(){this.showActivePlayer(),this.props.toolData.length>=1&&this.updateRemainingRounds()}},{key:"updateRemainingRounds",value:function(){var e=this.props.toolData.filter(function(e){return e.roundValue-1>0});e.forEach(function(e){e.roundValue-=1}),this.props.updateToolData(e)}},{key:"render",value:function(){var e=this,t=this.props.toolData.map(function(t){return"multi"===t.toolName?i.a.createElement(p,{details:t,round:e.state.round,key:t.key,removeToolFromCombat:e.removeToolFromCombat}):null});return i.a.createElement("div",{className:"combatOrderPane"},i.a.createElement("h2",null,i.a.createElement("b",null,"Battle!")),i.a.createElement("div",null,"Round: ",this.state.round,"\xa0\xa0\xa0 Turn: ",this.state.turn+1),i.a.createElement("div",{className:"MultiRoundEffectContainer"},t),i.a.createElement("div",null,i.a.createElement(v,{player:this.state.activePlayer})),i.a.createElement("div",null,i.a.createElement("button",{onClick:this.nextTurn},"Next Turn"),i.a.createElement("button",{onClick:this.resortPlayers},"Resort Players"),i.a.createElement("button",{onClick:this.props.endCombat},"End Combat")))}}]),t}(i.a.Component)),O=(a(184),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={effectName:"",roundValue:1,toolName:"multi"},e.handleChange=e.handleChange.bind(Object(m.a)(Object(m.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(m.a)(Object(m.a)(e))),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){var t={};t[e.target.id]=e.target.value,this.setState(t)}},{key:"handleSubmit",value:function(e){e.preventDefault(),!this.state.effectName||this.state.roundValue<=0||(this.props.onSubmit(Object.assign({},this.state)),this.setState({effectName:"",roundValue:1}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"multiRoundEffectCreator"},i.a.createElement("h4",null,"Add Multi-round Effect"),i.a.createElement("form",{id:"effectInfoInputForm",ref:"form",onSubmit:this.handleSubmit},"Effect Name:",i.a.createElement("input",{type:"text",name:"effectName",id:"effectName",value:this.state.effectName,onChange:this.handleChange}),i.a.createElement("br",null),"Number of Rounds:",i.a.createElement("input",{type:"number",name:"roundValue",id:"roundValue",value:this.state.roundValue,onChange:this.handleChange}),i.a.createElement("br",null),i.a.createElement("input",{type:"submit",value:"Add"})))}}]),t}(i.a.Component)),j=(a(185),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleSubmit",value:function(e){this.props.onSubmit(e)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"toolsPane"},i.a.createElement("h3",null,i.a.createElement("b",null,"Tools")),i.a.createElement("div",{className:"multiRoundEffectCreatorContainter"},i.a.createElement(O,{onSubmit:function(t){e.handleSubmit(t)}})))}}]),t}(i.a.Component)),E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={characterData:[],sortedCharacters:[],renderCombat:!1,toolData:[]},e.handleChange=e.handleChange.bind(Object(m.a)(Object(m.a)(e))),e.startCombat=e.startCombat.bind(Object(m.a)(Object(m.a)(e))),e.determineCombatOrder=e.determineCombatOrder.bind(Object(m.a)(Object(m.a)(e))),e.removeCharacter=e.removeCharacter.bind(Object(m.a)(Object(m.a)(e))),e.addToolToCombat=e.addToolToCombat.bind(Object(m.a)(Object(m.a)(e))),e.updateToolData=e.updateToolData.bind(Object(m.a)(Object(m.a)(e))),e.endCombat=e.endCombat.bind(Object(m.a)(Object(m.a)(e))),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){for(var t=!1,a=0;a<this.state.characterData.length;a++){if(this.state.characterData[a].name===e.name){var n=this.state.characterData.slice();n[a]=e,this.setState({characterData:n}),t=!0}if(t)break}if(!t){var i=this.state.characterData.slice();i.push(e),this.setState({characterData:i})}}},{key:"startCombat",value:function(){this.state.characterData.length<1||!0===this.renderCombat||(this.determineCombatOrder(),this.setState({renderCombat:!0}))}},{key:"determineCombatOrder",value:function(){if(!(this.state.characterData.length<1)){var e=this.sortCharacters(this.state.characterData);this.setState({sortedCharacters:e})}}},{key:"sortCharacters",value:function(e){return e.slice().sort(function(e,t){if(e.initiative>t.initiative)return-1;if(e.initiative<t.initiative)return 1;if(e.initiative===t.initiative){if(e.modifier>t.modifer)return-1;if(e.modifer<t.modifer)return 1}return 0})}},{key:"removeCharacter",value:function(e){for(var t=0;t<this.state.characterData.length;t++){var a=this.state.characterData[t];if(a.name===e.name&&a.modifier===e.modifier){var n=this.state.characterData.slice();n.splice(t,1),this.setState({characterData:n})}}}},{key:"addToolToCombat",value:function(e){if(!0===this.state.renderCombat){var t=[];t=this.state.toolData.slice(),e.key=Date.now(),t.push(e),this.setState({toolData:t})}}},{key:"updateToolData",value:function(e){this.setState({toolData:e})}},{key:"renderCombatPane",value:function(){if(this.state.renderCombat)return i.a.createElement(C,{sortedCharacters:this.state.sortedCharacters,endCombat:this.endCombat,toolData:this.state.toolData,updateToolData:this.updateToolData,determineCombatOrder:this.determineCombatOrder})}},{key:"endCombat",value:function(){this.state.renderCombat&&(this.setState({renderCombat:!1}),this.updateToolData([]))}},{key:"render",value:function(){return i.a.createElement("div",{className:"appContainer"},i.a.createElement("div",{className:"header"}),i.a.createElement("div",{className:"characterInfoPaneContainer"},i.a.createElement(f,{characterData:this.state.characterData,handleChange:this.handleChange,startCombat:this.startCombat,removeCharacter:this.removeCharacter})),i.a.createElement("div",{className:"comabatOrderPaneContainer"},this.renderCombatPane()),i.a.createElement("div",{className:"toolsPane"},i.a.createElement(j,{onSubmit:this.addToolToCombat})))}}]),t}(i.a.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(i.a.createElement(E,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/initiative-tracker",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/initiative-tracker","/service-worker.js");y?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):g(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):g(e)})}}()},84:function(e,t,a){e.exports=a(186)}},[[84,1,2]]]);
//# sourceMappingURL=main.3923cba5.chunk.js.map