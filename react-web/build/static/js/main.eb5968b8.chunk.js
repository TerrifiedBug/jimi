(this["webpackJsonpreact-web"]=this["webpackJsonpreact-web"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},,,function(e){e.exports=JSON.parse("{}")},,,,,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),a=n(25),i=n.n(a),r=(n(33),n(34),n(10)),o=n(7),l=n(74),u=function(){return sessionStorage.getItem("active")||!0},d=function(){return sessionStorage.getItem("CSRF")||null},b=function(){(new l.a).remove("jimiAuth"),sessionStorage.setItem("active",!1),sessionStorage.removeItem("CSRF")},j=function(e){sessionStorage.setItem("active",!0),sessionStorage.setItem("CSRF",e)},h=n(17),m=n(20),f=n(11),O=n(3),p=n(4),x=n(2),g=n(6),v=n(5),C=(n(12),function(){var e=window.location.hostname,t=window.location.port;return"localhost"===e&&"3000"===t?"http://127.0.0.1:5002/api/1.0/":"/api/1.0/"});n(9),n(35);function N(e){fetch(C()+"auth/logout/",{method:"GET",credentials:"include"}),b();var t=Object(o.g)();return setTimeout((function(){t.push("/login")}),2500),Object(s.jsxs)("div",{className:"fullscreen",children:[Object(s.jsx)("h1",{children:"jimi"}),Object(s.jsx)("div",{className:"outer",children:Object(s.jsx)("div",{className:"inner",children:Object(s.jsx)("h3",{children:"Successfully logged out"})})})]})}var k=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(e){var s;return Object(O.a)(this,n),(s=t.call(this,e)).state={username:null,password:null,otpRequired:!1,otp:null,failedLogin:!1},s.submit=s.submit.bind(Object(x.a)(s)),s.change=s.change.bind(Object(x.a)(s)),s}return Object(p.a)(n,[{key:"submit",value:function(e){var t=this;if(e.preventDefault(),this.setState({failedLogin:!1}),this.state.otpRequired){var n={method:"POST",body:JSON.stringify({username:this.state.username,password:this.state.password,otp:this.state.otp})};fetch(C()+"auth/",n).then((function(e){if(e.ok)return e;throw e})).then((function(e){t.props.history.push("/index")})).catch((function(e){t.setState({otpRequired:!1}),t.setState({failedLogin:!0})}))}else{var s={method:"POST",body:JSON.stringify({username:this.state.username,password:this.state.password})};fetch(C()+"auth/",s).then((function(e){if(e.ok)return e.json();throw e})).then((function(e){j(e.CSRF),t.props.history.push("/")})).catch((function(e){t.setState({otpRequired:!0})}))}}},{key:"change",value:function(e){var t=e.target,n=t.value,s=t.name;"checkbox"===t.type?t.checked?this.state.hobbies[n]=n:this.state.hobbies.splice(n,1):this.setState(Object(f.a)({},s,n))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"fullscreen",children:[Object(s.jsx)("h1",{children:"jimi"}),Object(s.jsx)("div",{className:"outer",children:Object(s.jsx)("div",{className:"inner ".concat(this.state.failedLogin?"shake":""),children:Object(s.jsxs)("form",{onSubmit:this.submit,children:[Object(s.jsx)("h3",{children:"Login"}),this.state.failedLogin?Object(s.jsx)("p",{className:"failedLoginAlert",children:Object(s.jsx)("b",{children:"Login details appear to be invalid!"})}):Object(s.jsx)("p",{className:"failedLoginAlert",children:Object(s.jsx)("b",{children:"\xa0"})}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("input",{type:"text",name:"username",className:"form-control textbox",placeholder:"Username",autoComplete:"off",onChange:this.change})}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("input",{type:"password",name:"password",className:"form-control textbox",placeholder:"password",autoComplete:"off",onChange:this.change})}),this.state.otpRequired&&Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("input",{type:"text",name:"otp",className:"form-control textbox",placeholder:"One Time Password",autoComplete:"off",onChange:this.change})}),Object(s.jsx)("button",{type:"submit",className:"btn btn-primary btn-block button",children:"Login"})]})})})]})}}]),n}(c.Component);var y=function(e){var t=e.component,n=Object(m.a)(e,["component"]);return Object(s.jsx)(o.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return Object(s.jsx)(t,Object(h.a)({},e))}}))};var S=function(e){var t=e.component,n=Object(m.a)(e,["component"]);return function(e){var t=Object(o.g)();fetch(C()+"auth/poll/",{method:"GET",credentials:"include"}).then((function(e){if(e.ok)return e.json();throw e})).then((function(e){j(e.CSRF)})).catch((function(e){b(),t.push("/login")}))}(),Object(s.jsx)(o.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return u()?Object(s.jsx)(t,Object(h.a)({},e)):Object(s.jsx)(o.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},w=n(27);n(44);var T=function(e){var t=new Date(0);return t.setUTCSeconds(e.lastUpdateTime),Object(s.jsx)("div",{className:"conductItemContainer",children:Object(s.jsxs)("div",{className:"conductItem",children:[Object(s.jsxs)("div",{className:"conductLeft",children:[Object(s.jsx)("a",{className:"conductTitle",href:"/conduct/?conductID="+e.id,title:e.name,children:e.name}),Object(s.jsxs)("p",{className:"conductState",children:["State: ",e.state]})]}),Object(s.jsxs)("div",{className:"conductRight",children:[Object(s.jsxs)("p",{className:"conductLastEdit",children:["Last Edit: ",t.toLocaleString()]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"conductRightLinks",children:[Object(s.jsx)("a",{className:"conductDeleteLink",onClick:function(t){return e.deleteConductClickHandler(t,e.id,e.name)},children:"Delete"}),Object(s.jsx)("p",{className:"conductRightOptions",children:"/"}),Object(s.jsx)("a",{className:"conductEditLink",href:"/conductSettings/?conductID="+e.id+"&edit=True",children:"Edit"})]})]})]})})};n(45);function D(e){var t=Date.now()/1e3;return Object(s.jsx)("div",{className:"statusItemContainer",children:Object(s.jsx)("div",{className:"statusItem ".concat(e.enabled?"statusItemEnabled":"statusItemDisabled"," ").concat(e.startCheck>0&&e.startCheck+e.maxDuration>t||e.lastCheck+2.5>t?"statusItemRunning":""," ").concat(e.enabled&&e.startCheck>0&&e.startCheck+e.maxDuration<t?"statusItemCrashed":""," "),title:e.name})})}var I=function(e){if(0==e.showDisabled){for(var t=[],n=0;n<e.triggers.length;n++)e.triggers[n].enabled&&t.push(e.triggers[n]);e.triggers=t}if(e.showCluster){var c={};for(n=0;n<e.triggers.length;n++)c[e.triggers[n].systemID]||(c[e.triggers[n].systemID]=[]),c[e.triggers[n].systemID].push(e.triggers[n]);return Object.entries(c).map((function(e){var t=Object(w.a)(e,2),n=t[0],c=t[1];return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h2",{children:["System ",n]},n),c.map((function(e){return Object(s.jsx)(D,{name:e.name,enabled:e.enabled,startCheck:e.startCheck,lastCheck:e.lastCheck,maxDuration:0==e.maxDuration?60:e.maxDuration},e._id)})),Object(s.jsx)("span",{children:"\xa0\xa0"}),Object(s.jsx)("br",{})]})}))}return Object(s.jsx)("div",{children:e.triggers.map((function(e){return Object(s.jsx)(D,{name:e.name,enabled:e.enabled,startCheck:e.startCheck,lastCheck:e.lastCheck,maxDuration:0==e.maxDuration?60:e.maxDuration},e._id)}))})};n(46);var L=function(e){return Object(s.jsx)("span",{children:"Loading page..."})},R=(n(47),!1),E=!1;function J(){return fetch(C()+"models/trigger/all/",{method:"GET",credentials:"include"}).then((function(e){if(e.ok)return e.json()})).then((function(e){return e.results}))}var P=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(e){var s;return Object(O.a)(this,n),(s=t.call(this,e)).state={triggers:[],loading:!0},s.mounted=!0,s.updateTriggers=s.updateTriggers.bind(Object(x.a)(s)),J().then((function(e){s.setState({triggers:e,loading:!1}),s.updateTriggers()})),s}return Object(p.a)(n,[{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"updateTriggers",value:function(){var e=this;this.mounted&&setTimeout((function(){J().then((function(t){e.setState({triggers:t}),e.updateTriggers()}))}),500)}},{key:"toggleDisabled",value:function(){R=!R}},{key:"toggleCluster",value:function(){E=!E}},{key:"render",value:function(){return this.state.loading?Object(s.jsx)(L,{}):Object(s.jsxs)("div",{className:"pageContent1",children:[Object(s.jsx)("h1",{children:"Trigger Status"}),Object(s.jsx)("hr",{}),Object(s.jsx)("button",{className:"btn btn-primary btn-block button medium marSmall",onClick:this.toggleDisabled,children:"Toggle Disabled"}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"btn btn-primary btn-block button medium marSmall",onClick:this.toggleCluster,children:"Toggle Cluster"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"pageCenter-outer",children:Object(s.jsx)("div",{className:"pageCenter-inner",children:Object(s.jsx)(I,{triggers:this.state.triggers,showDisabled:R,showCluster:E})})})]})}}]),n}(c.Component),U=(n(48),function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(e){var s;Object(O.a)(this,n),(s=t.call(this,e)).state={username:null,name:null,password:"",password1:"",password2:"",updated:!1,updateFailed:!1,msg:"",loading:!0},s.change=s.change.bind(Object(x.a)(s)),s.submit=s.submit.bind(Object(x.a)(s));return fetch(C()+"auth/myAccount/",{method:"GET",credentials:"include"}).then((function(e){if(e.ok)return e.json()})).then((function(e){s.setState({username:e.username,name:e.name,loading:!1})})),s}return Object(p.a)(n,[{key:"submit",value:function(e){var t=this;if(e.preventDefault(),this.state.password1!==this.state.password2)return this.setState({msg:"Passwords do not match"}),this.setState({updateFailed:!0}),void setTimeout((function(){t.setState({updateFailed:!1})}),1e3);var n={CSRF:d(),name:this.state.name};""!==this.state.password1&&(n.password=this.state.password,n.password1=this.state.password1);var s={method:"POST",credentials:"include",body:JSON.stringify(n)};fetch(C()+"auth/myAccount/",s).then((function(e){if(e.ok)return e;throw e})).then((function(e){t.setState({msg:"Saved"}),t.setState({updated:!0}),setTimeout((function(){t.setState({updated:!1})}),1e3)})).catch((function(e){t.setState({msg:"Error: Could not save data"}),t.setState({updateFailed:!0})}))}},{key:"change",value:function(e){this.setState({updateFailed:!1,msg:""});var t=e.target,n=t.value,s=t.name;"checkbox"===t.type?t.checked?this.state.hobbies[n]=n:this.state.hobbies.splice(n,1):this.setState(Object(f.a)({},s,n))}},{key:"render",value:function(){return this.state.loading?Object(s.jsx)(L,{}):Object(s.jsx)("div",{className:"pageContent2",children:Object(s.jsxs)("form",{onSubmit:this.submit,children:[Object(s.jsx)("h3",{children:"Your Details"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"form-group",children:["General Details",Object(s.jsx)("hr",{})]}),Object(s.jsxs)("div",{className:"form-group",children:["Username:",Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"username",className:"form-control textbox",autoComplete:"off",value:this.state.username,disabled:"true",onChange:this.change})]}),Object(s.jsxs)("div",{className:"form-group",children:["Name:",Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"name",className:"form-control textbox",autoComplete:"off",value:this.state.name,onChange:this.change})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"form-group",children:["Change Password",Object(s.jsx)("hr",{})]}),Object(s.jsxs)("div",{className:"form-group",children:["Current Password:",Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"password",name:"password",className:"form-control textbox",autoComplete:"off",onChange:this.change})]}),Object(s.jsxs)("div",{className:"form-group",children:["New Password:",Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"password",name:"password1",className:"form-control textbox ".concat("Passwords do not match"==this.state.msg?"alertErrorBorder":""),autoComplete:"off",onChange:this.change})]}),Object(s.jsxs)("div",{className:"form-group",children:["Confirm New Password:",Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"password",name:"password2",className:"form-control textbox ".concat("Passwords do not match"==this.state.msg?"alertErrorBorder":""),autoComplete:"off",onChange:this.change})]}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{type:"submit",className:"btn btn-primary btn-block button small ".concat(this.state.updated?"saved":""," ").concat(this.state.updateFailed?"error":""),children:"Update"}),Object(s.jsx)("p",{className:"resultMessage ".concat(this.state.updateFailed?"alertError":"alert"," ").concat(this.state.updated||this.state.updateFailed?"":"hide"),children:Object(s.jsx)("b",{children:this.state.msg})})]})})}}]),n}(c.Component));n(49);var F=function(e){return Object(s.jsx)("div",{children:e.conducts.filter((function(t){return t.name.toLowerCase().includes(e.filter.toLowerCase())})).map((function(t){return Object(s.jsx)(T,{id:t._id,name:t.name,lastUpdateTime:t.lastUpdateTime,state:t.enabled?"Enabled":"Disabled",deleteConductClickHandler:e.deleteConductClickHandler},t._id)}))})},A=(n(50),function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(e){var s;Object(O.a)(this,n),(s=t.call(this,e)).state={conducts:[],filter:"",loading:!0};return fetch(C()+"conducts/",{method:"GET",credentials:"include"}).then((function(e){if(e.ok)return e.json()})).then((function(e){s.setState({conducts:e.results,loading:!1})})),s.change=s.change.bind(Object(x.a)(s)),s.DeleteConduct=s.DeleteConduct.bind(Object(x.a)(s)),s.NewConduct=s.NewConduct.bind(Object(x.a)(s)),s}return Object(p.a)(n,[{key:"NewConduct",value:function(){this.props.history.push("/conductSettings/")}},{key:"DeleteConduct",value:function(e,t,n){var s=this;if(window.confirm("Please confirm removal of conduct named "+n)){var c={method:"DELETE",credentials:"include",body:JSON.stringify({CSRF:d()})};fetch(C()+"models/conduct/"+t+"/",c).then((function(e){throw e.ok&&s.setState({conducts:s.state.conducts.filter((function(e){return e._id!==t}))}),e})).catch((function(e){console.log("Could not delete conduct: "+t)}))}}},{key:"change",value:function(e){var t=e.target,n=t.value,s=t.name;"checkbox"===t.type?t.checked?this.state.hobbies[n]=n:this.state.hobbies.splice(n,1):this.setState(Object(f.a)({},s,n))}},{key:"render",value:function(){return this.state.loading?Object(s.jsx)(L,{}):Object(s.jsxs)("div",{className:"pageContent1",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{type:"text",name:"filter",className:"form-control textbox conductSearch",placeholder:"Search Conducts",onChange:this.change}),Object(s.jsx)("button",{className:"btn btn-primary btn-block button conductNew",onClick:this.NewConduct,children:"+ Create New"})]}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{children:Object(s.jsx)(F,{conducts:this.state.conducts,filter:this.state.filter,deleteConductClickHandler:this.DeleteConduct})})]})}}]),n}(c.Component)),G=(n(51),function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(e){var s;Object(O.a)(this,n),(s=t.call(this,e)).state={location:""};var c=e.location.search,a=new URLSearchParams(c).get("conductID");return/^[A-Za-z0-9]+$/.test(a)&&(s.state.location=a),s}return Object(p.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"pageContent0",children:Object(s.jsx)("iframe",{className:"conductFrame",src:"/conductEditor/?conductID="+this.state.location})})}}]),n}(c.Component)),M=(n(52),function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(e){var s;Object(O.a)(this,n),(s=t.call(this,e)).state={type:"New",name:"",status:!1,comment:"",loading:!0,updateStatus:{id:null,msg:""}},s.change=s.change.bind(Object(x.a)(s)),s.submit=s.submit.bind(Object(x.a)(s));var c=e.location.search,a=new URLSearchParams(c).get("conductID");if("True"===new URLSearchParams(c).get("edit")){fetch(C()+"models/conduct/"+a+"/",{method:"GET",credentials:"include"}).then((function(e){if(e.ok)return e.json()})).then((function(e){s.setState({name:e.name,status:e.status,comment:e.comment,type:"Update",loading:!1})}))}else s.state.loading=!1;return s}return Object(p.a)(n,[{key:"submit",value:function(e){var t=this;e.preventDefault();var n=this.props.location.search,s=new URLSearchParams(n).get("conductID"),c=new URLSearchParams(n).get("edit"),a={CSRF:d(),name:this.state.name,comment:this.state.comment,enabled:this.state.enabled};if("True"===c){var i={method:"POST",credentials:"include",body:JSON.stringify(a)};fetch(C()+"models/conduct/"+s+"/",i).then((function(e){if(e.ok)return e;throw e})).then((function(e){})).catch((function(e){}))}else{var r={method:"PUT",credentials:"include",body:JSON.stringify({CSRF:d()})};fetch(C()+"models/conduct/",r).then((function(e){if(e.ok)return e.json();throw e})).then((function(e){r.method="POST",r.body=JSON.stringify(a);var n=e._id;fetch(C()+"models/conduct/"+n+"/",r).then((function(e){if(e.ok)return e;throw e})).then((function(e){t.props.history.push("?conductID="+n+"&edit=True"),window.location.reload(!1)})).catch((function(e){}))})).catch((function(e){}))}}},{key:"change",value:function(e){this.setState({updateFailed:!1,msg:""});var t=e.target,n=t.value,s=t.name;"checkbox"===t.type?t.checked?this.state.hobbies[n]=n:this.state.hobbies.splice(n,1):this.setState(Object(f.a)({},s,n))}},{key:"render",value:function(){return this.state.loading?Object(s.jsx)(L,{}):Object(s.jsx)("div",{className:"pageContent2",children:Object(s.jsxs)("form",{onSubmit:this.submit,children:[Object(s.jsx)("h3",{children:"Conduct Details"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"form-group",children:["General Details",Object(s.jsx)("hr",{})]}),Object(s.jsxs)("div",{className:"form-group",children:["Name:",Object(s.jsx)("input",{type:"text",name:"name",className:"form-control textbox",autoComplete:"off",value:this.state.name,onChange:this.change})]}),Object(s.jsxs)("div",{className:"form-group",children:["Comment:",Object(s.jsx)("textarea",{type:"text",name:"comment",className:"form-control textarea",autoComplete:"off",value:this.state.comment,onChange:this.change})]}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{type:"submit",className:"btn btn-primary btn-block button small",children:this.state.type})]})})}}]),n}(c.Component));n(53);var _=function(e){return Object(s.jsx)("div",{className:"pluginItemContainer",children:Object(s.jsx)("a",{className:"pluginLink",href:"plugin/?pluginName="+e.name,children:Object(s.jsx)("div",{className:"pluginItem",children:Object(s.jsx)("span",{className:"pluginTitle",children:e.name})})})})};n(54);var q=function(e){return Object(s.jsx)("div",{children:e.plugins.filter((function(t){return t.name.toLowerCase().includes(e.filter.toLowerCase())})).map((function(e){return Object(s.jsx)(_,{name:e.name},e._id)}))})},H=(n(55),function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(e){var s;Object(O.a)(this,n),(s=t.call(this,e)).state={plugins:[],filter:"",loading:!0};return fetch(C()+"plugins/",{method:"GET",credentials:"include"}).then((function(e){if(e.ok)return e.json()})).then((function(e){s.setState({plugins:e.results,loading:!1})})),s.change=s.change.bind(Object(x.a)(s)),s}return Object(p.a)(n,[{key:"change",value:function(e){var t=e.target,n=t.value,s=t.name;"checkbox"===t.type||this.setState(Object(f.a)({},s,n))}},{key:"render",value:function(){return this.state.loading?Object(s.jsx)(L,{}):Object(s.jsxs)("div",{className:"pageContent1",children:[Object(s.jsx)("div",{children:Object(s.jsx)("input",{type:"text",name:"filter",className:"form-control textbox pluginSearch",placeholder:"Search Plugins",onChange:this.change})}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"pageCenter-outer",children:Object(s.jsx)("div",{className:"pageCenter-inner",children:Object(s.jsx)(q,{plugins:this.state.plugins,filter:this.state.filter})})})]})}}]),n}(c.Component)),B=(n(56),function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(e){var s;Object(O.a)(this,n),(s=t.call(this,e)).state={location:""};var c=e.location.search,a=new URLSearchParams(c).get("pluginName");return/^[A-Za-z]+$/.test(a)&&(s.state.location=a),s}return Object(p.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"pageContent0",children:Object(s.jsx)("iframe",{className:"pluginFrame",src:"/plugin/"+this.state.location+"/"})})}}]),n}(c.Component)),z=(n(57),function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(e){return Object(O.a)(this,n),t.call(this,e)}return Object(p.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"pageContent0",children:Object(s.jsx)("iframe",{className:"modelEditorFrame",src:"model/"})})}}]),n}(c.Component)),W=(n(58),function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(e){return Object(O.a)(this,n),t.call(this,e)}return Object(p.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"pageContent0",children:Object(s.jsx)("iframe",{className:"codifyFrame",src:"/codify/"})})}}]),n}(c.Component));n(59);var Y=function(e){var t=new Date(0),n=Date.now()/1e3;return t.setUTCSeconds(e.lastSyncTime),Object(s.jsx)("div",{className:"clusterItemContainer",children:Object(s.jsxs)("div",{className:"clusterItem",children:[Object(s.jsxs)("div",{className:"clusterLeft",children:[Object(s.jsxs)("p",{className:"clusterTitle",children:[e.systemID," - ",e.systemUID]}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{className:"clusterLeftItem",children:["Address: ",e.bindSecure?"https://":"http://",e.bindAddress,":",e.bindPort]}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{className:"clusterLeftItem",children:["Checksum: ",Object(s.jsx)("a",{href:"#",onClick:function(){var t;t=e.systemID,window.confirm("Are you sure you want to recalculate the checksum on system "+t+"?")&&fetch(C()+"system/checksum/"+t+"/",{method:"GET",credentials:"include"}).then((function(e){if(e.ok)return e.json()})).then((function(e){alert(JSON.stringify(e))}))},children:e.checksum})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{className:"clusterLeftItem",children:["Status: ",e.lastSyncTime>n-120?"Online":"Offline"]})]}),Object(s.jsxs)("div",{className:"clusterRight",children:[Object(s.jsxs)("p",{className:"clusterRightItem",children:["Last Sync: ",t.toLocaleString()]}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{className:"clusterRightItem",children:["Sync Count: ",e.syncCount]}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{className:"clusterRightItem",children:["Master: ",e.master?"Yes":"No"]}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"clusterRightItem",children:Object(s.jsx)("a",{href:"#",onClick:function(){!function(e){var t=window.prompt("Updated system "+e+" from which system i.e. 0?");t&&fetch(C()+"system/update/"+e+"/"+t+"/",{method:"GET",credentials:"include"}).then((function(e){if(e.ok)return e.json()})).then((function(e){alert(JSON.stringify(e))}))}(e.systemID)},children:"Update"})})]})]})})};n(60);var Z=function(e){return Object(s.jsx)("div",{children:e.clusterMembers.map((function(e){return Object(s.jsx)(Y,{id:e._id,systemID:e.systemID,systemUID:e.systemUID,lastSyncTime:e.lastSyncTime,master:e.master,syncCount:e.syncCount,bindSecure:e.bindSecure,bindAddress:e.bindAddress,bindPort:e.bindPort,checksum:e.checksum},e._id)}))})};n(61);var $=function(e){var t=new Date(0);return Date.now(),t.setUTCSeconds(e.startTime),Object(s.jsx)("div",{className:"clusterJobItemContainer",children:Object(s.jsxs)("div",{className:"clusterJobItem",children:[Object(s.jsxs)("div",{className:"clusterJobLeft",children:[Object(s.jsx)("p",{className:"clusterJobTitle",children:e.name}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{className:"clusterJobLeftItem",children:["id: ",e.id]}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{className:"clusterJobLeftItem",children:["Server Address: ",e.server]})]}),Object(s.jsx)("div",{className:"clusterJobRight",children:Object(s.jsxs)("p",{className:"clusterJobRightItem",children:["Start Time: ",t.toLocaleString()]})})]})})};n(62);var K=function(e){return Object(s.jsx)("div",{className:"clusterJobListContainer",children:e.jobs.map((function(e){return Object(s.jsx)($,{id:e.id,server:e.server,createdTime:e.createdTime,name:e.name,startTime:e.startTime},e.id)}))})};n(63);function Q(){return fetch(C()+"cluster/",{method:"GET",credentials:"include"}).then((function(e){if(e.ok)return e.json()})).then((function(e){return e.results}))}function V(){return fetch(C()+"workers/",{method:"GET",credentials:"include"}).then((function(e){if(e.ok)return e.json()})).then((function(e){return e.results}))}var X=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(e){var s;return Object(O.a)(this,n),(s=t.call(this,e)).state={clusterMembers:[],jobs:[],loading:!0},s.mounted=!0,s.updateclusterMembers=s.updateClusterMembers.bind(Object(x.a)(s)),Q().then((function(e){s.setState({clusterMembers:e,loading:!1}),s.updateClusterMembers()})),s.updateJobs=s.updateJobs.bind(Object(x.a)(s)),V().then((function(e){s.setState({jobs:e}),s.updateJobs()})),s.clearCache=s.clearCache.bind(Object(x.a)(s)),s.clearStartChecks=s.clearStartChecks.bind(Object(x.a)(s)),s.deleteDebugSessions=s.deleteDebugSessions.bind(Object(x.a)(s)),s.redistributeCluster=s.redistributeCluster.bind(Object(x.a)(s)),s.deleteUnusedObjects=s.deleteUnusedObjects.bind(Object(x.a)(s)),s}return Object(p.a)(n,[{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"updateJobs",value:function(){var e=this;this.mounted&&setTimeout((function(){V().then((function(t){e.setState({jobs:t}),e.updateJobs()}))}),2500)}},{key:"updateClusterMembers",value:function(){var e=this;this.mounted&&setTimeout((function(){Q().then((function(t){e.setState({clusterMembers:t}),e.updateClusterMembers()}))}),15e3)}},{key:"clearCache",value:function(){fetch(C()+"clearCache/",{method:"GET",credentials:"include"}).then((function(e){if(e.ok)return e.json()})).then((function(e){alert(JSON.stringify(e.results))}))}},{key:"clearStartChecks",value:function(){fetch(C()+"clearStartChecks/",{method:"GET",credentials:"include"}).then((function(e){if(e.ok)return e.json()})).then((function(e){alert(JSON.stringify(e))}))}},{key:"deleteDebugSessions",value:function(){fetch(C()+"debug/clear/",{method:"GET",credentials:"include"}).then((function(e){if(e.ok)return e.json()})).then((function(e){alert(JSON.stringify(e))}))}},{key:"redistributeCluster",value:function(){fetch(C()+"cluster/distribute/",{method:"GET",credentials:"include"}).then((function(e){if(e.ok)return e.json()})).then((function(e){alert(JSON.stringify(e))}))}},{key:"deleteUnusedObjects",value:function(){this.props.history.push("/cleanup/")}},{key:"render",value:function(){return this.state.loading?Object(s.jsx)(L,{}):Object(s.jsxs)("div",{className:"pageContent1",children:[Object(s.jsx)("h1",{children:"Controls"}),Object(s.jsx)("hr",{}),Object(s.jsx)("button",{className:"btn btn-primary btn-block button medium marSmall",onClick:this.clearCache,children:"Clear Cache"}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"btn btn-primary btn-block button medium marSmall",onClick:this.clearStartChecks,children:"Clear StartChecks"}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"btn btn-primary btn-block button medium marSmall",onClick:this.deleteDebugSessions,children:"Delete Debug Sessions"}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"btn btn-primary btn-block button medium marSmall",onClick:this.redistributeCluster,children:"Redistribute Cluster"}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"btn btn-primary btn-block button medium marSmall",onClick:this.deleteUnusedObjects,children:"Delete Unused Objects"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("h1",{children:"Cluster Status"}),Object(s.jsx)("hr",{}),Object(s.jsx)(Z,{clusterMembers:this.state.clusterMembers}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("h1",{children:"Job Status"}),Object(s.jsx)("hr",{}),Object(s.jsx)(K,{jobs:this.state.jobs})]})}}]),n}(c.Component),ee=(n(64),function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(e){return Object(O.a)(this,n),t.call(this,e)}return Object(p.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"pageContent0",children:Object(s.jsx)("iframe",{className:"cleanupFrame",src:"/cleanup/"})})}}]),n}(c.Component));n(65);var te=function(e){return Object(s.jsx)("div",{className:"marketplaceItemContainer",children:Object(s.jsx)("a",{className:"marketplaceLink",href:"#",onClick:function(){var t,n;t=e.name,n=e.githubRepo,window.confirm("Are you sure you want to install / update "+t+"?")&&fetch(C()+"plugins/store/install/?pluginName="+t+"&githubRepo="+n,{method:"GET",credentials:"include"}).then((function(e){if(e.ok)return e.json()})).then((function(e){alert(JSON.stringify(e))}))},children:Object(s.jsxs)("div",{className:"marketplaceItem",children:[Object(s.jsx)("span",{className:"marketplaceTitle",children:e.name}),Object(s.jsx)("span",{className:"marketplaceInstalled",children:e.installed?"Installed":"Not Installed"})]})})})};n(66);var ne=function(e){return Object(s.jsx)("div",{children:e.storePlugins.filter((function(t){return t.name.toLowerCase().includes(e.filter.toLowerCase())})).map((function(e){return Object(s.jsx)(te,{name:e.name,installed:e.installed,githubRepo:e.githubRepo},e._id)}))})},se=(n(67),function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(e){var s;Object(O.a)(this,n),(s=t.call(this,e)).state={storePlugins:[],filter:"",loading:!0};return fetch(C()+"plugins/store/list/",{method:"GET",credentials:"include"}).then((function(e){if(e.ok)return e.json()})).then((function(e){s.setState({storePlugins:e.results,loading:!1})})),s.change=s.change.bind(Object(x.a)(s)),s}return Object(p.a)(n,[{key:"change",value:function(e){var t=e.target,n=t.value,s=t.name;"checkbox"===t.type||this.setState(Object(f.a)({},s,n))}},{key:"render",value:function(){return this.state.loading?Object(s.jsx)(L,{}):Object(s.jsxs)("div",{className:"pageContent1",children:[Object(s.jsx)("div",{children:Object(s.jsx)("input",{type:"text",name:"filter",className:"form-control textbox marketplaceSearch",placeholder:"Search Marketplace",onChange:this.change})}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"pageCenter-outer",children:Object(s.jsx)("div",{className:"pageCenter-inner",children:Object(s.jsx)(ne,{storePlugins:this.state.storePlugins,filter:this.state.filter})})})]})}}]),n}(c.Component));n(68);var ce=function(e){return Object(s.jsxs)(r.a,{children:[Object(s.jsxs)("div",{class:"container",id:"topbar",children:[Object(s.jsx)(r.b,{exact:!0,className:"home",activeClassName:"homeActive",to:"/",children:"jimi"}),Object(s.jsx)(r.b,{exact:!0,className:"link",activeClassName:"active",to:"/status",children:"Status"}),Object(s.jsx)(r.b,{exact:!0,className:"link",activeClassName:"active",to:"/conducts",children:"Conducts"}),Object(s.jsx)(r.b,{exact:!0,className:"link",activeClassName:"active",to:"/plugins",children:"Plugins"}),Object(s.jsx)(r.b,{exact:!0,className:"link",activeClassName:"active",to:"/codify",children:"Codify"}),Object(s.jsx)(r.b,{exact:!0,className:"link",activeClassName:"active",to:"/modelEditor",children:"Model Editor"}),Object(s.jsxs)("div",{class:"container",id:"topbar-right",children:[u?Object(s.jsx)(r.b,{exact:!0,className:"link linkRight",activeClassName:"active",to:"/logout",children:"Logout"}):null,u?Object(s.jsx)(r.b,{exact:!0,className:"link linkRight",activeClassName:"active",to:"/myAccount",children:"My Account"}):null,u?Object(s.jsx)(r.b,{exact:!0,className:"link linkRight",activeClassName:"active",to:"/administration",children:"Administration"}):null]})]}),Object(s.jsxs)(o.d,{children:[Object(s.jsx)(y,{path:"/login",component:k}),Object(s.jsx)(S,{path:"/logout",component:N}),Object(s.jsx)(S,{path:"/status",component:P}),Object(s.jsx)(S,{path:"/conducts",component:A}),Object(s.jsx)(S,{path:"/conduct",component:G}),Object(s.jsx)(S,{path:"/conductSettings",component:M}),Object(s.jsx)(S,{path:"/plugins",component:H}),Object(s.jsx)(S,{path:"/plugin",component:B}),Object(s.jsx)(S,{path:"/codify",component:W}),Object(s.jsx)(S,{path:"/modelEditor",component:z}),Object(s.jsx)(S,{path:"/myAccount",component:U}),Object(s.jsx)(S,{path:"/administration",component:X}),Object(s.jsx)(S,{path:"/marketplace",component:se}),Object(s.jsx)(S,{path:"/cleanup",component:ee}),Object(s.jsx)(S,{path:"/",component:P})]})]})};n(69);n(70);var ae=function(){return Object(s.jsx)("div",{id:"pageContent-wrapper",children:Object(s.jsx)(ce,{})})};i.a.render(Object(s.jsx)(ae,{}),document.getElementById("root"))}],[[71,1,2]]]);
//# sourceMappingURL=main.eb5968b8.chunk.js.map