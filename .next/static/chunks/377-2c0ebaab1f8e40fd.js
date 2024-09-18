"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[377],{31162:function(e,t,n){Object.defineProperty(t,"$",{enumerable:!0,get:function(){return i}});let r=n(15355);function i(e){let{createServerReference:t}=n(6671);return t(e,r.callServer)}},93850:function(e,t,n){n.d(t,{R:function(){return i}});var r,i=((r=i||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},16856:function(e,t,n){n.d(t,{u:function(){return k}});var r,i=n(2265),u=n(11931),o=n(25306),l=n(60597),a=n(80634),s=n(32600),c=n(61858),f=n(48957),d=n(46618),m=n(85390);function v(e,...t){e&&t.length>0&&e.classList.add(...t)}function p(e,...t){e&&t.length>0&&e.classList.remove(...t)}var h=n(82769),E=n(12950),g=n(63960),b=n(83329);function y(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let w=(0,i.createContext)(null);w.displayName="TransitionContext";var F=((r=F||{}).Visible="visible",r.Hidden="hidden",r);let N=(0,i.createContext)(null);function O(e){return"children"in e?O(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function S(e,t){let n=(0,c.E)(e),r=(0,i.useRef)([]),o=(0,a.t)(),s=(0,h.G)(),f=(0,E.z)((e,t=u.l4.Hidden)=>{let i=r.current.findIndex(({el:t})=>t===e);-1!==i&&((0,l.E)(t,{[u.l4.Unmount](){r.current.splice(i,1)},[u.l4.Hidden](){r.current[i].state="hidden"}}),s.microTask(()=>{var e;!O(r)&&o.current&&(null==(e=n.current)||e.call(n))}))}),d=(0,E.z)(e=>{let t=r.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>f(e,u.l4.Unmount)}),m=(0,i.useRef)([]),v=(0,i.useRef)(Promise.resolve()),p=(0,i.useRef)({enter:[],leave:[],idle:[]}),g=(0,E.z)((e,n,r)=>{m.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),null==t||t.chains.current[n].push([e,new Promise(e=>{m.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(p.current[n].map(([e,t])=>t)).then(()=>e())})]),"enter"===n?v.current=v.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),b=(0,E.z)((e,t,n)=>{Promise.all(p.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=m.current.shift())||e()}).then(()=>n(t))});return(0,i.useMemo)(()=>({children:r,register:d,unregister:f,onStart:g,onStop:b,wait:v,chains:p}),[d,f,r,g,b,p,v])}function T(){}N.displayName="NestingContext";let A=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function P(e){var t;let n={};for(let r of A)n[r]=null!=(t=e[r])?t:T;return n}let L=u.AN.RenderStrategy,C=(0,u.yV)(function(e,t){let{show:n,appear:r=!1,unmount:l=!0,...a}=e,c=(0,i.useRef)(null),m=(0,d.T)(c,t);(0,f.H)();let v=(0,o.oJ)();if(void 0===n&&null!==v&&(n=(v&o.ZM.Open)===o.ZM.Open),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[p,h]=(0,i.useState)(n?"visible":"hidden"),g=S(()=>{h("hidden")}),[b,y]=(0,i.useState)(!0),F=(0,i.useRef)([n]);(0,s.e)(()=>{!1!==b&&F.current[F.current.length-1]!==n&&(F.current.push(n),y(!1))},[F,n]);let T=(0,i.useMemo)(()=>({show:n,appear:r,initial:b}),[n,r,b]);(0,i.useEffect)(()=>{if(n)h("visible");else if(O(g)){let e=c.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")},[n,g]);let A={unmount:l},P=(0,E.z)(()=>{var t;b&&y(!1),null==(t=e.beforeEnter)||t.call(e)}),C=(0,E.z)(()=>{var t;b&&y(!1),null==(t=e.beforeLeave)||t.call(e)});return i.createElement(N.Provider,{value:g},i.createElement(w.Provider,{value:T},(0,u.sY)({ourProps:{...A,as:i.Fragment,children:i.createElement(x,{ref:m,...A,...a,beforeEnter:P,beforeLeave:C})},theirProps:{},defaultTag:i.Fragment,features:L,visible:"visible"===p,name:"Transition"})))}),x=(0,u.yV)(function(e,t){var n,r,F;let T;let{beforeEnter:A,afterEnter:C,beforeLeave:x,afterLeave:M,enter:k,enterFrom:R,enterTo:j,entered:H,leave:I,leaveFrom:D,leaveTo:U,...V}=e,_=(0,i.useRef)(null),z=(0,d.T)(_,t),Z=null==(n=V.unmount)||n?u.l4.Unmount:u.l4.Hidden,{show:q,appear:G,initial:$}=function(){let e=(0,i.useContext)(w);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[Y,B]=(0,i.useState)(q?"visible":"hidden"),J=function(){let e=(0,i.useContext)(N);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:K,unregister:W}=J;(0,i.useEffect)(()=>K(_),[K,_]),(0,i.useEffect)(()=>{if(Z===u.l4.Hidden&&_.current){if(q&&"visible"!==Y){B("visible");return}return(0,l.E)(Y,{hidden:()=>W(_),visible:()=>K(_)})}},[Y,_,K,W,q,Z]);let X=(0,c.E)({base:y(V.className),enter:y(k),enterFrom:y(R),enterTo:y(j),entered:y(H),leave:y(I),leaveFrom:y(D),leaveTo:y(U)}),Q=(F={beforeEnter:A,afterEnter:C,beforeLeave:x,afterLeave:M},T=(0,i.useRef)(P(F)),(0,i.useEffect)(()=>{T.current=P(F)},[F]),T),ee=(0,f.H)();(0,i.useEffect)(()=>{if(ee&&"visible"===Y&&null===_.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[_,Y,ee]);let et=G&&q&&$,en=ee&&(!$||G)?q?"enter":"leave":"idle",er=(0,b.V)(0),ei=(0,E.z)(e=>(0,l.E)(e,{enter:()=>{er.addFlag(o.ZM.Opening),Q.current.beforeEnter()},leave:()=>{er.addFlag(o.ZM.Closing),Q.current.beforeLeave()},idle:()=>{}})),eu=(0,E.z)(e=>(0,l.E)(e,{enter:()=>{er.removeFlag(o.ZM.Opening),Q.current.afterEnter()},leave:()=>{er.removeFlag(o.ZM.Closing),Q.current.afterLeave()},idle:()=>{}})),eo=S(()=>{B("hidden"),W(_)},J);!function({immediate:e,container:t,direction:n,classes:r,onStart:i,onStop:u}){let o=(0,a.t)(),f=(0,h.G)(),d=(0,c.E)(n);(0,s.e)(()=>{e&&(d.current="enter")},[e]),(0,s.e)(()=>{let e=(0,m.k)();f.add(e.dispose);let n=t.current;if(n&&"idle"!==d.current&&o.current){var a,s,c;let t,o,f,h,E,g,b;return e.dispose(),i.current(d.current),e.add((a=r.current,s="enter"===d.current,c=()=>{e.dispose(),u.current(d.current)},o=s?"enter":"leave",f=(0,m.k)(),h=void 0!==c?(t={called:!1},(...e)=>{if(!t.called)return t.called=!0,c(...e)}):()=>{},"enter"===o&&(n.removeAttribute("hidden"),n.style.display=""),E=(0,l.E)(o,{enter:()=>a.enter,leave:()=>a.leave}),g=(0,l.E)(o,{enter:()=>a.enterTo,leave:()=>a.leaveTo}),b=(0,l.E)(o,{enter:()=>a.enterFrom,leave:()=>a.leaveFrom}),p(n,...a.base,...a.enter,...a.enterTo,...a.enterFrom,...a.leave,...a.leaveFrom,...a.leaveTo,...a.entered),v(n,...a.base,...E,...b),f.nextFrame(()=>{p(n,...a.base,...E,...b),v(n,...a.base,...E,...g),function(e,t){let n=(0,m.k)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[u,o]=[r,i].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),l=u+o;if(0!==l){n.group(n=>{n.setTimeout(()=>{t(),n.dispose()},l),n.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&n.dispose()})});let r=n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),r())})}else t();n.add(()=>t()),n.dispose}(n,()=>(p(n,...a.base,...E),v(n,...a.base,...a.entered),h()))}),f.dispose)),e.dispose}},[n])}({immediate:et,container:_,classes:X,direction:en,onStart:(0,c.E)(e=>{eo.onStart(_,e,ei)}),onStop:(0,c.E)(e=>{eo.onStop(_,e,eu),"leave"!==e||O(eo)||(B("hidden"),W(_))})});let el=V;return et?el={...el,className:(0,g.A)(V.className,...X.current.enter,...X.current.enterFrom)}:(el.className=(0,g.A)(V.className,null==(r=_.current)?void 0:r.className),""===el.className&&delete el.className),i.createElement(N.Provider,{value:eo},i.createElement(o.up,{value:(0,l.E)(Y,{visible:o.ZM.Open,hidden:o.ZM.Closed})|er.flags},(0,u.sY)({ourProps:{ref:z},theirProps:el,defaultTag:"div",features:L,visible:"visible"===Y,name:"Transition.Child"})))}),M=(0,u.yV)(function(e,t){let n=null!==(0,i.useContext)(w),r=null!==(0,o.oJ)();return i.createElement(i.Fragment,null,!n&&r?i.createElement(C,{ref:t,...e}):i.createElement(x,{ref:t,...e}))}),k=Object.assign(C,{Child:M,Root:C})},82769:function(e,t,n){n.d(t,{G:function(){return u}});var r=n(2265),i=n(85390);function u(){let[e]=(0,r.useState)(i.k);return(0,r.useEffect)(()=>()=>e.dispose(),[e]),e}},12950:function(e,t,n){n.d(t,{z:function(){return u}});var r=n(2265),i=n(61858);let u=function(e){let t=(0,i.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},83329:function(e,t,n){n.d(t,{V:function(){return u}});var r=n(2265),i=n(80634);function u(e=0){let[t,n]=(0,r.useState)(e),u=(0,i.t)(),o=(0,r.useCallback)(e=>{u.current&&n(t=>t|e)},[t,u]),l=(0,r.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:o,hasFlag:l,removeFlag:(0,r.useCallback)(e=>{u.current&&n(t=>t&~e)},[n,u]),toggleFlag:(0,r.useCallback)(e=>{u.current&&n(t=>t^e)},[n])}}},75606:function(e,t,n){n.d(t,{M:function(){return a}});var r,i=n(2265),u=n(32600),o=n(48957),l=n(52057);let a=null!=(r=i.useId)?r:function(){let e=(0,o.H)(),[t,n]=i.useState(e?()=>l.O.nextId():null);return(0,u.e)(()=>{null===t&&n(l.O.nextId())},[t]),null!=t?""+t:void 0}},80634:function(e,t,n){n.d(t,{t:function(){return u}});var r=n(2265),i=n(32600);function u(){let e=(0,r.useRef)(!1);return(0,i.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}},32600:function(e,t,n){n.d(t,{e:function(){return u}});var r=n(2265),i=n(52057);let u=(e,t)=>{i.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},61858:function(e,t,n){n.d(t,{E:function(){return u}});var r=n(2265),i=n(32600);function u(e){let t=(0,r.useRef)(e);return(0,i.e)(()=>{t.current=e},[e]),t}},90583:function(e,t,n){n.d(t,{O:function(){return a}});var r=n(2265),i=n(65410),u=n(61858);function o(e,t,n){let i=(0,u.E)(t);(0,r.useEffect)(()=>{function t(e){i.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}var l=n(27976);function a(e,t,n=!0){let u=(0,r.useRef)(!1);function a(n,r){if(!u.current||n.defaultPrevented)return;let o=r(n);if(null!==o&&o.getRootNode().contains(o)&&o.isConnected){for(let t of function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e)){if(null===t)continue;let e=t instanceof HTMLElement?t:t.current;if(null!=e&&e.contains(o)||n.composed&&n.composedPath().includes(e))return}return(0,i.sP)(o,i.tJ.Loose)||-1===o.tabIndex||n.preventDefault(),t(n,o)}}(0,r.useEffect)(()=>{requestAnimationFrame(()=>{u.current=n})},[n]);let s=(0,r.useRef)(null);o("pointerdown",e=>{var t,n;u.current&&(s.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),o("mousedown",e=>{var t,n;u.current&&(s.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),o("click",e=>{s.current&&(a(e,()=>s.current),s.current=null)},!0),o("touchend",e=>a(e,()=>e.target instanceof HTMLElement?e.target:null),!0),(0,l.s)("blur",e=>a(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}},48957:function(e,t,n){n.d(t,{H:function(){return o}});var r,i=n(2265),u=n(52057);function o(){let e;let t=(e="undefined"==typeof document,(0,(r||(r=n.t(i,2))).useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[o,l]=i.useState(u.O.isHandoffComplete);return o&&!1===u.O.isHandoffComplete&&l(!1),i.useEffect(()=>{!0!==o&&l(!0)},[o]),i.useEffect(()=>u.O.handoff(),[]),!t&&o}},46618:function(e,t,n){n.d(t,{T:function(){return l},h:function(){return o}});var r=n(2265),i=n(12950);let u=Symbol();function o(e,t=!0){return Object.assign(e,{[u]:t})}function l(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,i.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[u]))?void 0:n}},27976:function(e,t,n){n.d(t,{s:function(){return u}});var r=n(2265),i=n(61858);function u(e,t,n){let u=(0,i.E)(t);(0,r.useEffect)(()=>{function t(e){u.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}},58227:function(e,t,n){n.d(t,{A:function(){return u},_:function(){return o}});var r,i=n(11931),u=((r=u||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let o=(0,i.yV)(function(e,t){let{features:n=1,...r}=e,u={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,i.sY)({ourProps:u,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})})},25306:function(e,t,n){n.d(t,{ZM:function(){return o},oJ:function(){return l},up:function(){return a}});var r,i=n(2265);let u=(0,i.createContext)(null);u.displayName="OpenClosedContext";var o=((r=o||{})[r.Open=1]="Open",r[r.Closed=2]="Closed",r[r.Closing=4]="Closing",r[r.Opening=8]="Opening",r);function l(){return(0,i.useContext)(u)}function a({value:e,children:t}){return i.createElement(u.Provider,{value:e},t)}},35863:function(e,t,n){function r(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{P:function(){return r}})},63960:function(e,t,n){n.d(t,{A:function(){return r}});function r(...e){return Array.from(new Set(e.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}},85390:function(e,t,n){n.d(t,{k:function(){return function e(){let t=[],n={addEventListener:(e,t,r,i)=>(e.addEventListener(t,r,i),n.add(()=>e.removeEventListener(t,r,i))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add(()=>cancelAnimationFrame(t))},nextFrame:(...e)=>n.requestAnimationFrame(()=>n.requestAnimationFrame(...e)),setTimeout(...e){let t=setTimeout(...e);return n.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return(0,r.Y)(()=>{t.current&&e[0]()}),n.add(()=>{t.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(t){let n=e();return t(n),this.add(()=>n.dispose())},add:e=>(t.push(e),()=>{let n=t.indexOf(e);if(n>=0)for(let e of t.splice(n,1))e()}),dispose(){for(let e of t.splice(0))e()}};return n}}});var r=n(55195)},52057:function(e,t,n){n.d(t,{O:function(){return l}});var r=Object.defineProperty,i=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t,n)=>(i(e,"symbol"!=typeof t?t+"":t,n),n);class o{constructor(){u(this,"current",this.detect()),u(this,"handoffState","pending"),u(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}let l=new o},65410:function(e,t,n){n.d(t,{C5:function(){return g},GO:function(){return v},TO:function(){return f},fE:function(){return d},jA:function(){return y},sP:function(){return h},tJ:function(){return p},z2:function(){return b}});var r,i,u,o,l,a=n(60597),s=n(54851);let c=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var f=((r=f||{})[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r),d=((i=d||{})[i.Error=0]="Error",i[i.Overflow=1]="Overflow",i[i.Success=2]="Success",i[i.Underflow=3]="Underflow",i),m=((u=m||{})[u.Previous=-1]="Previous",u[u.Next=1]="Next",u);function v(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(c)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var p=((o=p||{})[o.Strict=0]="Strict",o[o.Loose=1]="Loose",o);function h(e,t=0){var n;return e!==(null==(n=(0,s.r)(e))?void 0:n.body)&&(0,a.E)(t,{0:()=>e.matches(c),1(){let t=e;for(;null!==t;){if(t.matches(c))return!0;t=t.parentElement}return!1}})}var E=((l=E||{})[l.Keyboard=0]="Keyboard",l[l.Mouse=1]="Mouse",l);function g(e){null==e||e.focus({preventScroll:!0})}function b(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),i=t(n);if(null===r||null===i)return 0;let u=r.compareDocumentPosition(i);return u&Node.DOCUMENT_POSITION_FOLLOWING?-1:u&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function y(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:i=[]}={}){var u,o,l;let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?b(e):e:v(e);i.length>0&&s.length>1&&(s=s.filter(e=>!i.includes(e))),r=null!=r?r:a.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(r))-1;if(4&t)return Math.max(0,s.indexOf(r))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=32&t?{preventScroll:!0}:{},m=0,p=s.length,h;do{if(m>=p||m+p<=0)return 0;let e=f+m;if(16&t)e=(e+p)%p;else{if(e<0)return 3;if(e>=p)return 1}null==(h=s[e])||h.focus(d),m+=c}while(h!==a.activeElement);return 6&t&&null!=(l=null==(o=null==(u=h)?void 0:u.matches)?void 0:o.call(u,"textarea,input"))&&l&&h.select(),2}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0))},60597:function(e,t,n){n.d(t,{E:function(){return r}});function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let i=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,r),i}},55195:function(e,t,n){n.d(t,{Y:function(){return r}});function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}},54851:function(e,t,n){n.d(t,{r:function(){return i}});var r=n(52057);function i(e){return r.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},11931:function(e,t,n){n.d(t,{AN:function(){return a},l4:function(){return s},oA:function(){return v},sY:function(){return c},yV:function(){return m}});var r,i,u=n(2265),o=n(63960),l=n(60597),a=((r=a||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),s=((i=s||{})[i.Unmount=0]="Unmount",i[i.Hidden=1]="Hidden",i);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:u=!0,name:o}){let a=d(t,e);if(u)return f(a,n,r,o);let s=null!=i?i:0;if(2&s){let{static:e=!1,...t}=a;if(e)return f(t,n,r,o)}if(1&s){let{unmount:e=!0,...t}=a;return(0,l.E)(e?0:1,{0:()=>null,1:()=>f({...t,hidden:!0,style:{display:"none"}},n,r,o)})}return f(a,n,r,o)}function f(e,t={},n,r){let{as:i=n,children:l,refName:a="ref",...s}=p(e,["unmount","static"]),c=void 0!==e.ref?{[a]:e.ref}:{},f="function"==typeof l?l(t):l;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let m={};if(t){let e=!1,n=[];for(let[r,i]of Object.entries(t))"boolean"==typeof i&&(e=!0),!0===i&&n.push(r);e&&(m["data-headlessui-state"]=n.join(" "))}if(i===u.Fragment&&Object.keys(v(s)).length>0){if(!(0,u.isValidElement)(f)||Array.isArray(f)&&f.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=f.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>(0,o.A)(null==e?void 0:e.className(...t),s.className):(0,o.A)(null==e?void 0:e.className,s.className);return(0,u.cloneElement)(f,Object.assign({},d(f.props,v(p(s,["ref"]))),m,c,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(f.ref,c.ref),t?{className:t}:{}))}return(0,u.createElement)(i,Object.assign({},p(s,["ref"]),i!==u.Fragment&&c,i!==u.Fragment&&m),f)}function d(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let i of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;i(t,...r)}}});return t}function m(e){var t;return Object.assign((0,u.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function v(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function p(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}}}]);