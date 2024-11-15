import{b as N,c as b,d as w,e as M,f as P,g as l,i as E,j as T,l as x,m as d}from"./chunk-DUW3U4BV.js";import{Aa as v,Ga as A,Hb as _,Ia as C,Ka as R,Na as F,Rb as D,U as u,W as h,Z as m,aa as i,cb as I,ea as f,ha as g,ta as y,zb as S}from"./chunk-ICMSHEE7.js";var O=(n,t)=>{let e=i(d),r=i(l);return e.isAuthenticated()?!0:(r.navigate(["/auth/login"]),!1)};var j=(n,t)=>{let e=i(d),r=i(l);if(e.isAuthenticated()){let o=e.getUserRole();return o==="EXPERTO"?r.navigate(["/experto"]):o==="ESTUDIANTE"?r.navigate(["/estudiante"]):o==="ADMIN"&&r.navigate(["/admin"]),!1}return!0};var k=[{path:"",redirectTo:"auth/login",pathMatch:"full"},{path:"auth",loadChildren:()=>import("./chunk-XWATTNIC.js").then(n=>n.authroutes),canActivate:[j]},{path:"estudiante",loadChildren:()=>import("./chunk-OP2PPLQ7.js").then(n=>n.estudianteRoutes),canActivate:[O]}];var L="@",V=(()=>{class n{constructor(e,r,o,a,s){this.doc=e,this.delegate=r,this.zone=o,this.animationType=a,this.moduleImpl=s,this._rendererFactoryPromise=null,this.scheduler=i(C,{optional:!0}),this.loadingSchedulerFn=i(X,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-VWTNJY67.js").then(o=>o),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(e):r=e(),r.catch(o=>{throw new u(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:a})=>{this._engine=o(this.animationType,this.doc);let s=new a(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(e,r){let o=this.delegate.createRenderer(e,r);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let a=new c(o);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let H=s.createRenderer(e,r);a.use(H),this.scheduler?.notify(10)}).catch(s=>{a.use(o)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(r){A()}}static{this.\u0275prov=h({token:n,factory:n.\u0275fac})}}return n})(),c=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,r,o){this.delegate.insertBefore(t,e,r,o)}removeChild(t,e,r){this.delegate.removeChild(t,e,r)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,r,o){this.delegate.setAttribute(t,e,r,o)}removeAttribute(t,e,r){this.delegate.removeAttribute(t,e,r)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,r,o){this.delegate.setStyle(t,e,r,o)}removeStyle(t,e,r){this.delegate.removeStyle(t,e,r)}setProperty(t,e,r){this.shouldReplay(e)&&this.replay.push(o=>o.setProperty(t,e,r)),this.delegate.setProperty(t,e,r)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(t,e,r)),this.delegate.listen(t,e,r)}shouldReplay(t){return this.replay!==null&&t.startsWith(L)}},X=new m("");function G(n="animations"){return F("NgAsyncAnimations"),g([{provide:R,useFactory:(t,e,r)=>new V(t,e,r,n),deps:[D,w,y]},{provide:v,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var U=(n,t)=>{let r=i(x).getAuthData();if(r&&r.token){let o=n.clone({headers:n.headers.set("Authorization",`Bearer ${r.token}`)});return t(o)}return t(n)};var B={providers:[_({eventCoalescing:!0}),E(k),G(),N(b([U]))]};var p=class n{title="frontend-orientanet";static \u0275fac=function(e){return new(e||n)};static \u0275cmp=f({type:n,selectors:[["app-root"]],standalone:!0,features:[S],decls:1,vars:0,template:function(e,r){e&1&&I(0,"router-outlet")},dependencies:[P,T]})};M(p,B).catch(n=>console.error(n));