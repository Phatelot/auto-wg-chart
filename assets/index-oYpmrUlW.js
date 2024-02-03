var ot=Object.defineProperty;var it=(t,e,n)=>e in t?ot(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var D=(t,e,n)=>(it(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function L(){}function st(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function et(t){return t()}function X(){return Object.create(null)}function O(t){t.forEach(et)}function nt(t){return typeof t=="function"}function lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ct(t){return Object.keys(t).length===0}function u(t,e){t.appendChild(e)}function E(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode&&t.parentNode.removeChild(t)}function at(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function z(t){return document.createElement(t)}function c(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ut(t){return document.createTextNode(t)}function ft(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function o(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function dt(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function ht(t){return Array.from(t.childNodes)}let N;function v(t){N=t}function pt(){if(!N)throw new Error("Function called outside component initialization");return N}const H=[],Y=[];let C=[];const Z=[],gt=Promise.resolve();let U=!1;function mt(){U||(U=!0,gt.then(K))}function q(t){C.push(t)}const F=new Set;let A=0;function K(){if(A!==0)return;const t=N;do{try{for(;A<H.length;){const e=H[A];A++,v(e),wt(e.$$)}}catch(e){throw H.length=0,A=0,e}for(v(null),H.length=0,A=0;Y.length;)Y.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];F.has(n)||(F.add(n),n())}C.length=0}while(H.length);for(;Z.length;)Z.pop()();U=!1,F.clear(),v(t)}function wt(t){if(t.fragment!==null){t.update(),O(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}function _t(t){const e=[],n=[];C.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),C=e}const T=new Set;let x;function yt(){x={r:0,c:[],p:x}}function bt(){x.r||O(x.c),x=x.p}function rt(t,e){t&&t.i&&(T.delete(t),t.i(e))}function vt(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),x.c.push(()=>{T.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function $t(t,e){const n=e.token={};function r(i,l,a,_){if(e.token!==n)return;e.resolved=_;let f=e.ctx;a!==void 0&&(f=f.slice(),f[a]=_);const s=i&&(e.current=i)(f);let m=!1;e.block&&(e.blocks?e.blocks.forEach((d,p)=>{p!==l&&d&&(yt(),vt(d,1,1,()=>{e.blocks[p]===d&&(e.blocks[p]=null)}),bt())}):e.block.d(1),s.c(),rt(s,1),s.m(e.mount(),e.anchor),m=!0),e.block=s,e.blocks&&(e.blocks[l]=s),m&&K()}if(st(t)){const i=pt();if(t.then(l=>{v(i),r(e.then,1,e.value,l),v(null)},l=>{if(v(i),r(e.catch,2,e.error,l),v(null),!e.hasCatch)throw l}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function kt(t,e,n){const r=e.slice(),{resolved:i}=t;t.current===t.then&&(r[t.value]=i),t.current===t.catch&&(r[t.error]=i),t.block.p(r,n)}function Q(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Pt(t,e,n){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),q(()=>{const l=t.$$.on_mount.map(et).filter(nt);t.$$.on_destroy?t.$$.on_destroy.push(...l):O(l),t.$$.on_mount=[]}),i.forEach(q)}function xt(t,e){const n=t.$$;n.fragment!==null&&(_t(n.after_update),O(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Et(t,e){t.$$.dirty[0]===-1&&(H.push(t),mt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Lt(t,e,n,r,i,l,a=null,_=[-1]){const f=N;v(t);const s=t.$$={fragment:null,ctx:[],props:l,update:L,not_equal:i,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:X(),dirty:_,skip_bound:!1,root:e.target||f.$$.root};a&&a(s.root);let m=!1;if(s.ctx=n?n(t,e.props||{},(d,p,...k)=>{const P=k.length?k[0]:p;return s.ctx&&i(s.ctx[d],s.ctx[d]=P)&&(!s.skip_bound&&s.bound[d]&&s.bound[d](P),m&&Et(t,d)),p}):[],s.update(),m=!0,O(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){const d=ht(e.target);s.fragment&&s.fragment.l(d),d.forEach($)}else s.fragment&&s.fragment.c();e.intro&&rt(t.$$.fragment),Pt(t,e.target,e.anchor),K()}v(f)}class Gt{constructor(){D(this,"$$");D(this,"$$set")}$destroy(){xt(this,1),this.$destroy=L}$on(e,n){if(!nt(n))return L;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const At="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(At);function Ht(t){const e=[],n=t.split(`
`);for(const r of n){const i=Ct(r);i&&e.push(i)}return e}function Ct(t){const[e,n]=t.split("	");return!e||!n?null:{character:e,amount:parseInt(n)}}function Wt(t){const e={};for(const r of t)e[r.character]||(e[r.character]=0),e[r.character]+=r.amount;const n=[];for(const r in e)n.push({name:r,totalAmount:e[r]});return n}const Nt="/auto-wg-chart/assets/Shamir-YcWxaN01.webp",Ot="/auto-wg-chart/assets/Edelgard-WXRdNHhm.webp",St="/auto-wg-chart/assets/Kronya_Portrait-ddahhRbo.webp",Mt="/auto-wg-chart/assets/Hilda_Portrait--GM4uaBR.webp",It="/auto-wg-chart/assets/annette-NUyppjxg.png",Bt={Shamir:{heightInMeters:1.65,baseWeight:120,pictureLink:Nt,color:"WHITE"},Edelgard:{heightInMeters:1.6,baseWeight:120,pictureLink:Ot,color:"RED"},Kronya:{heightInMeters:1.6,baseWeight:120,pictureLink:St,color:"GREY"},Hilda:{heightInMeters:1.6,baseWeight:120,pictureLink:Mt,color:"YELLOW"},Annette:{heightInMeters:1.6,baseWeight:120,pictureLink:It,color:"BLUE"}};function Rt(t){return Bt[t]}function jt(t){return{characters:t.sort((i,l)=>i.totalAmount-l.totalAmount).map((i,l)=>{const _=90-(30+i.totalAmount),f=Rt(i.name);return{...i,...f,height:30+i.totalAmount,width:10,x:10+20*l,y:_,picHeight:17.6,barGradient:f.color.toLowerCase()+"Gradient"}}),viewPortHeight:100,viewPortWidth:220}}function J(t,e,n){const r=t.slice();return r[3]=e[n],r}function Tt(t){let e;return{c(){e=z("p"),e.textContent=`error: ${t[6]}`},m(n,r){E(n,e,r)},p:L,d(n){n&&$(e)}}}function Dt(t){let e,n,r,i,l,a,_,f,s,m,d,p,k,P,y,S,M,b,W,I,B,R,G=Q(t[2].characters),w=[];for(let g=0;g<G.length;g+=1)w[g]=tt(J(t,G,g));return{c(){e=c("svg"),n=c("defs"),r=c("linearGradient"),i=c("stop"),l=c("stop"),a=c("linearGradient"),_=c("stop"),f=c("stop"),s=c("linearGradient"),m=c("stop"),d=c("stop"),p=c("linearGradient"),k=c("stop"),P=c("stop"),y=c("linearGradient"),S=c("stop"),M=c("stop"),b=c("pattern"),W=c("rect"),I=c("polyline"),B=c("polyline"),R=c("polyline");for(let g=0;g<w.length;g+=1)w[g].c();o(i,"offset","0%"),o(i,"stop-color","#303080"),o(l,"offset","100%"),o(l,"stop-color","#5050ff"),o(r,"id","whiteGradient"),o(r,"x1","0"),o(r,"x2","0"),o(r,"y1","1"),o(r,"y2","0"),o(_,"offset","0%"),o(_,"stop-color","#6e1126"),o(f,"offset","100%"),o(f,"stop-color","#f32529"),o(a,"id","redGradient"),o(a,"x1","0"),o(a,"x2","0"),o(a,"y1","1"),o(a,"y2","0"),o(m,"offset","0%"),o(m,"stop-color","#362e46"),o(d,"offset","100%"),o(d,"stop-color","#594743"),o(s,"id","greyGradient"),o(s,"x1","0"),o(s,"x2","0"),o(s,"y1","1"),o(s,"y2","0"),o(k,"offset","0%"),o(k,"stop-color","#af6f49"),o(P,"offset","100%"),o(P,"stop-color","#ffcf43"),o(p,"id","yellowGradient"),o(p,"x1","0"),o(p,"x2","0"),o(p,"y1","1"),o(p,"y2","0"),o(S,"offset","0%"),o(S,"stop-color","#303080"),o(M,"offset","100%"),o(M,"stop-color","#5050ff"),o(y,"id","blueGradient"),o(y,"x1","0"),o(y,"x2","0"),o(y,"y1","1"),o(y,"y2","0"),o(W,"width","100"),o(W,"height","100"),o(W,"class","lower-bg-base svelte-1iax146"),o(I,"points","0,0 5,0 100,95 100,100 95,100 0,5"),o(I,"class","lower-bg-line svelte-1iax146"),o(B,"points","100,0 100,5 5,100 0,100 0,95 95,0"),o(B,"class","lower-bg-line svelte-1iax146"),o(b,"id","lowerBgPattern"),o(b,"viewBox","0,0,100,100"),o(b,"width","10%"),o(b,"height",10*t[2].viewPortWidth/t[2].viewPortHeight/.8+"%"),o(R,"points","0,"+t[2].viewPortHeight+" 0,"+t[2].viewPortHeight*.7+" "+t[2].viewPortWidth+","+t[2].viewPortHeight*.2+" "+t[2].viewPortWidth+","+t[2].viewPortHeight),o(R,"fill","url(#lowerBgPattern)"),o(e,"viewBox","0 0 "+t[2].viewPortWidth+" "+t[2].viewPortHeight),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"class","chart svelte-1iax146")},m(g,j){E(g,e,j),u(e,n),u(n,r),u(r,i),u(r,l),u(n,a),u(a,_),u(a,f),u(n,s),u(s,m),u(s,d),u(n,p),u(p,k),u(p,P),u(n,y),u(y,S),u(y,M),u(n,b),u(b,W),u(b,I),u(b,B),u(e,R);for(let h=0;h<w.length;h+=1)w[h]&&w[h].m(e,null)},p(g,j){if(j&1){G=Q(g[2].characters);let h;for(h=0;h<G.length;h+=1){const V=J(g,G,h);w[h]?w[h].p(V,j):(w[h]=tt(V),w[h].c(),w[h].m(e,null))}for(;h<w.length;h+=1)w[h].d(1);w.length=G.length}},d(g){g&&$(e),at(w,g)}}}function tt(t){let e,n,r,i=t[3].name+" "+t[3].totalAmount,l,a,_;function f(){return t[1](t[3])}return{c(){e=c("rect"),n=c("image"),r=c("text"),l=ut(i),o(e,"x",t[3].x+"%"),o(e,"y",t[3].y+"%"),o(e,"width",t[3].width+"%"),o(e,"height",t[3].height+"%"),o(e,"rx","1px"),o(e,"ry","1px"),o(e,"stroke","white"),o(e,"stroke-width","1"),o(e,"stroke-linecap","round"),o(e,"fill","url(#"+t[3].barGradient+")"),o(n,"class","oooo"),dt(n,"xlink:href",t[3].pictureLink),o(n,"x",t[3].x+"%"),o(n,"y",t[3].y+t[3].height-t[3].picHeight+"%"),o(n,"height",t[3].picHeight+"%"),o(n,"preserveAspectRatio","true"),o(r,"x",t[3].x+"%"),o(r,"y",t[3].y+t[3].height+"%"),o(r,"class","small svelte-1iax146"),o(r,"transform","translate(0, 8)")},m(s,m){E(s,e,m),E(s,n,m),E(s,r,m),u(r,l),a||(_=ft(e,"click",f),a=!0)},p(s,m){t=s},d(s){s&&($(e),$(n),$(r)),a=!1,_()}}}function Ft(t){let e;return{c(){e=z("p"),e.textContent="loading data..."},m(n,r){E(n,e,r)},p:L,d(n){n&&$(e)}}}function Ut(t){let e,n={ctx:t,current:null,token:null,hasCatch:!0,pending:Ft,then:Dt,catch:Tt,value:2,error:6};return $t(t[0](),n),{c(){e=z("main"),n.block.c()},m(r,i){E(r,e,i),n.block.m(e,n.anchor=null),n.mount=()=>e,n.anchor=null},p(r,[i]){t=r,kt(n,t,i)},i:L,o:L,d(r){r&&$(e),n.block.d(),n.token=null,n=null}}}function qt(t){console.log(`${t} is selected`)}function zt(t){async function e(){let r=await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQOpOuCk5XUTvH8hTd2dVSaZ9o_uSNgvB8mb8ythFFEtMz0ohnNmsC-Il3su8HqMdx9xz8L2ePt7qrZ/pub?gid=0&single=true&output=tsv");return jt(Wt(Ht(await r.text())))}return[e,r=>qt(r.name)]}class Kt extends Gt{constructor(e){super(),Lt(this,e,zt,Ut,lt,{})}}new Kt({target:document.getElementById("app")});
