(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],h=0,p=[];h<o.length;h++)r=o[h],i[r]&&p.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],n=!0,o=1;o<s.length;o++){var c=s[o];0!==i[c]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},i={app:0},a=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/KIT_MoCIoT_webseite/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},"0c71":function(t,e,s){},"0f02":function(t,e,s){"use strict";var n=s("44b3"),i=s.n(n);i.a},"2bd4":function(t,e,s){},"44b3":function(t,e,s){},5331:function(t,e,s){},"5c0b":function(t,e,s){"use strict";var n=s("5e27"),i=s.n(n);i.a},"5e27":function(t,e,s){},8494:function(t,e,s){"use strict";var n=s("ace2"),i=s.n(n);i.a},ace2:function(t,e,s){},adae:function(t,e,s){t.exports=s.p+"img/teco.0f8e6208.jpg"},cd49:function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/"}},[t._v("Demo")]),t._v(" |\n    "),s("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" |\n    "),s("router-link",{attrs:{to:"/sensor"}},[t._v("Raw sensor")]),t._v(" |\n    "),s("router-link",{attrs:{to:"/settings"}},[t._v("Settings")])],1),s("router-view",{ref:"main",staticStyle:{"grid-area":"main"}}),s("span",{staticClass:"status left"},[t._v("App resolution: "+t._s(t.appSize.width)+" x "+t._s(t.appSize.height))]),s("span",{staticClass:"status right"},[t._v(t._s(t.found)+" of "+t._s(t.total)+" sensors online")])],1)},a=[],r=s("d225"),o=s("b0b4"),c=s("308d"),l=s("6bb5"),u=s("4e2b"),h=s("9ab4"),p=s("60a3"),f=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.total=4,t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"handleResize",value:function(){var t=this.$refs.main;this.$store.state.appSize.width=t.$el.clientWidth,this.$store.state.appSize.height=t.$el.clientHeight}},{key:"mounted",value:function(){window.addEventListener("resize",this.handleResize),this.handleResize()}},{key:"beforeDestroy",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"found",get:function(){var t=0;return t+=this.$store.state.sensors.hasAccel?1:0,t+=this.$store.state.sensors.hasAccelWithGravity?1:0,t+=this.$store.state.sensors.hasRotationRate?1:0,t+=this.$store.state.sensors.hasOrientation?1:0,t}},{key:"appSize",get:function(){return this.$store.state.appSize}}]),e}(p["c"]);f=h["a"]([p["a"]],f);var v=f,d=v,m=(s("5c0b"),s("2877")),b=Object(m["a"])(d,i,a,!1,null,null,null),g=b.exports,y=s("8c4f"),_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"demo"},[s("Tile",{ref:"tile",attrs:{count:"20"}})],1)},O=[],k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tile",style:{left:t.pos.x+"px",top:t.pos.y+"px"}},t._l(t.content,function(e,n,i){return s("div",{key:i,staticClass:"text"},[s("h4",[t._v(t._s(i)+" -- "+t._s(n))]),s("span",[t._v(t._s(e))])])}),0)},$=[],j=s("cc86"),w=s.n(j),x=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.ts={w:0,h:0},t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"tileSize",value:function(){return this.$el?{w:this.$el.clientWidth,h:this.$el.clientHeight}:{w:0,h:0}}},{key:"mounted",value:function(){this.ts=this.tileSize()}},{key:"content",get:function(){for(var t={},e=0;e<this.count;e++){var s=w()({count:3,units:"words"});t[s]=w()({count:2,units:"sentences"})}return t}},{key:"pos",get:function(){this.ts=this.tileSize();var t=this.$store.state.appSize,e=this.$store.state.motion;if(this.ts.w<=0||this.ts.h<=0)return{x:0/t.width,y:0/t.height};var s={x:t.width/2-this.ts.w/2,y:t.height/2-this.ts.h/2};return s.x+=e.x*this.$store.state.settings.sliders.mx.val,s.y+=e.y*this.$store.state.settings.sliders.my.val,s}}]),e}(p["c"]);h["a"]([Object(p["b"])()],x.prototype,"count",void 0),x=h["a"]([p["a"]],x);var S=x,z=S,A=(s("8494"),Object(m["a"])(z,k,$,!1,null,"58f97221",null)),C=A.exports,R=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.lastScroll=new Date,t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"mounted",value:function(){var t=this,e=this.$parent;e.handleResize(),this.$store.state.sensors.start(),this.$store.state.sensors.callback=function(e,s){t.$store.state.orientation=e,t.$store.state.motion=s;var n=e.gamma,i=1;if(n<0&&(n*=-1,i=-1),n>t.settings.tscroll.val){var a=new Date;if(a.getTime()-t.lastScroll.getTime()>t.settings.twait.val){t.lastScroll=a;var r=t.$refs.tile;r.$el.scrollTop+=i*(.75*r.$el.clientHeight)}}}}},{key:"beforeDestroy",value:function(){this.$store.state.sensors.stop()}},{key:"settings",get:function(){return this.$store.state.settings.sliders}}]),e}(p["c"]);R=h["a"]([Object(p["a"])({components:{Tile:C}})],R);var E=R,V=E,T=(s("0f02"),Object(m["a"])(V,_,O,!1,null,"322d729b",null)),G=T.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h2",[t._v("Developed with Vue.js by Daniel Mensinger")]),n("img",{attrs:{alt:"Vue logo",src:s("cf05")}}),n("h2",[t._v("As an assignment for")]),n("img",{attrs:{alt:"Vue logo",src:s("adae")}})])}],M=(s("f26d"),{}),P=Object(m["a"])(M,D,B,!1,null,null,null),F=P.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"sensor"}},[s("h3",[t._v("Device capabilities")]),s("div",{staticClass:"block"},t._l(t.capabilities,function(e,n){return s("div",{key:n,staticClass:"gridBlock"},[s("span",[t._v(t._s(n))]),e?s("span",{staticClass:"cTrue"},[t._v("TRUE")]):s("span",{staticClass:"cFalse"},[t._v("FALSE")])])}),0),s("h3",[t._v("Acceleration")]),s("div",{staticClass:"block"},t._l(t.accel,function(e,n){return s("div",{key:n,staticClass:"gridBlock"},[s("span",[t._v(t._s(n))]),s("span",[t._v(t._s(e))])])}),0),s("h3",[t._v("Acceleration with Gravity")]),s("div",{staticClass:"block"},t._l(t.accelGrav,function(e,n){return s("div",{key:n,staticClass:"gridBlock"},[s("span",[t._v(t._s(n))]),s("span",[t._v(t._s(e))])])}),0),s("h3",[t._v("Rotation rate")]),s("div",{staticClass:"block"},t._l(t.accelAngle,function(e,n){return s("div",{key:n,staticClass:"gridBlock"},[s("span",[t._v(t._s(n))]),s("span",[t._v(t._s(e))])])}),0),s("h3",[t._v("Orientation")]),s("div",{staticClass:"block"},t._l(t.orientation,function(e,n){return s("div",{key:n,staticClass:"gridBlock"},[s("span",[t._v(t._s(n))]),s("span",[t._v(t._s(e))])])}),0)])},H=[],I=function(t){function e(){return Object(r["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"mounted",value:function(){var t=this;this.$store.state.sensors.start(),this.$store.state.sensors.callback=function(e,s){t.$store.state.orientation=e,t.$store.state.motion=s}}},{key:"beforeDestroy",value:function(){this.$store.state.sensors.stop()}},{key:"capabilities",get:function(){return{Acceleration:this.$store.state.sensors.hasAccel,"Acceleration with Gravity":this.$store.state.sensors.hasAccelWithGravity,"Rotation rate":this.$store.state.sensors.hasRotationRate,Orientation:this.$store.state.sensors.hasOrientation}}},{key:"accel",get:function(){return{x:this.$store.state.motion.x,y:this.$store.state.motion.y,z:this.$store.state.motion.z}}},{key:"accelGrav",get:function(){return{gx:this.$store.state.motion.gx,gy:this.$store.state.motion.gy,gz:this.$store.state.motion.gz}}},{key:"accelAngle",get:function(){return{Alpha:this.$store.state.motion.alpha,Beta:this.$store.state.motion.beta,Gamma:this.$store.state.motion.gamma}}},{key:"orientation",get:function(){return{Alpha:this.$store.state.orientation.alpha,Beta:this.$store.state.orientation.beta,Gamma:this.$store.state.orientation.gamma,Absolute:this.$store.state.orientation.absolute}}}]),e}(p["c"]);I=h["a"]([p["a"]],I);var L=I,J=L,q=(s("d337"),Object(m["a"])(J,W,H,!1,null,null,null)),K=q.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"settings"},[s("h1",[t._v("Settings")]),t._l(t.sliders,function(e,n,i){return s("div",{key:i,staticClass:"slider"},[s("h3",[t._v(t._s(e.name))]),s("vue-slider",{attrs:{min:e.min,max:e.max,interval:e.step,marks:function(t){return t%e.modulo==0},lazy:!0},model:{value:e.val,callback:function(s){t.$set(e,"val",s)},expression:"data.val"}})],1)})],2)},U=[],X=s("4971"),Y=s.n(X),Z=(s("24df"),function(t){function e(){return Object(r["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"updateStore",value:function(t,e){this.sliders[e].val=t}},{key:"sliders",get:function(){return this.$store.state.settings.sliders}}]),e}(p["c"]));Z=h["a"]([Object(p["a"])({components:{VueSlider:Y.a}})],Z);var Q=Z,tt=Q,et=(s("e1c8"),Object(m["a"])(tt,N,U,!1,null,null,null)),st=et.exports;n["default"].use(y["a"]);var nt=new y["a"]({routes:[{path:"/",name:"demo",component:G},{path:"/about",name:"about",component:F},{path:"/sensor",name:"sensor",component:K},{path:"/settings",name:"settings",component:st}]}),it=s("2f62"),at=function t(e){Object(r["a"])(this,t),null!=e?(this.alpha=e.alpha,this.beta=e.beta,this.gamma=e.gamma,this.absolute=e.absolute):this.alpha=this.beta=this.gamma=this.absolute=0},rt=function t(e){if(Object(r["a"])(this,t),null==e)return this.x=this.gx=0,this.y=this.gy=0,this.z=this.gz=0,void(this.alpha=this.beta=this.gamma=0);this.x=e.x,this.y=e.y,this.z=e.z,this.gx=e.gx,this.gy=e.gy,this.gz=e.gz,this.alpha=e.alpha,this.beta=e.beta,this.gamma=e.gamma},ot=s("4317"),ct=function(){function t(){Object(r["a"])(this,t),this.isSetupVar=!1,this.hasErrorVar=!1,this.supportedOps=null,this.gn=new ot.GyroNorm,this.callbackFunc=function(t,e){}}return Object(o["a"])(t,[{key:"start",value:function(){var t=this;this.isSetupVar&&this.gn.stop();var e={frequency:2};this.gn.init(e).then(function(){t.isSetupVar=!0,t.supportedOps=t.gn.isAvailable(),t.gn.start(function(e){t.callbackFunc(new at(e.do),new rt(e.dm))})}).catch(function(e){t.hasErrorVar=!0})}},{key:"stop",value:function(){this.isSetupVar&&(this.gn.end(),this.isSetupVar=!1)}},{key:"isSetup",get:function(){return this.isSetupVar}},{key:"hasError",get:function(){return this.hasErrorVar}},{key:"callback",set:function(t){this.callbackFunc=t}},{key:"hasAccel",get:function(){return!(null==this.supportedOps||!this.supportedOps.accelerationAvailable)}},{key:"hasAccelWithGravity",get:function(){return!(null==this.supportedOps||!this.supportedOps.accelerationIncludingGravityAvailable)}},{key:"hasRotationRate",get:function(){return!(null==this.supportedOps||!this.supportedOps.rotationRateAvailable)}},{key:"hasOrientation",get:function(){return!(null==this.supportedOps||!this.supportedOps.deviceOrientationAvailable)}}]),t}();n["default"].use(it["a"]);var lt={state:{sensors:new ct,orientation:new at,motion:new rt,appSize:{width:0,height:0},settings:{sliders:{mx:{name:"X multiplier",min:-4,max:4,step:.1,modulo:1,val:-1.5},my:{name:"Y multiplier",min:-4,max:4,step:.1,modulo:1,val:-1.5},mz:{name:"Z multiplier",min:-4,max:4,step:.1,modulo:1,val:-1.5},tscroll:{name:"Scroll tilt threshold",min:10,max:90,step:1,modulo:10,val:25},twait:{name:"Scroll action timeout in ms",min:200,max:2e3,step:1,modulo:250,val:500}}}},mutations:{},actions:{}},ut=new it["a"].Store(lt);n["default"].config.productionTip=!1,new n["default"]({router:nt,store:ut,render:function(t){return t(g)}}).$mount("#app")},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"},d337:function(t,e,s){"use strict";var n=s("2bd4"),i=s.n(n);i.a},e1c8:function(t,e,s){"use strict";var n=s("0c71"),i=s.n(n);i.a},f26d:function(t,e,s){"use strict";var n=s("5331"),i=s.n(n);i.a}});
//# sourceMappingURL=app.dab8374f.js.map