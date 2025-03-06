import{_ as y}from"./BTmDp4_q.js";import{_ as M}from"./zTCrQtOG.js";import{e as N,c as k,o as w,j as P,N as m,a as o,b as n,w as s,d as l,_ as C,r as f,f as D,q as b,O as H,P as L,Q as E,i as d,n as R,R as T}from"./DGYORGXW.js";const V=N({__name:"NavigationDrawer",props:{isOpen:{type:Boolean}},emits:["close"],setup(g,{emit:t}){const a=t,u=()=>{a("close")};return(c,e)=>{const r=y,p=M;return w(),k("div",{class:m([{opened:c.isOpen},"p-spMenu"]),onClick:P(u,["self"])},[o("ul",null,[o("li",null,[n(r,{to:"/about",onClick:u},{default:s(()=>e[0]||(e[0]=[l("私たちについて")])),_:1})]),o("li",null,[n(r,{to:"/service",onClick:u},{default:s(()=>e[1]||(e[1]=[l("メニュー/料金")])),_:1})]),o("li",null,[n(r,{to:"/news",onClick:u},{default:s(()=>e[2]||(e[2]=[l("お知らせ")])),_:1})]),o("li",null,[n(r,{to:"/info",onClick:u},{default:s(()=>e[3]||(e[3]=[l("店舗情報")])),_:1})])]),n(p,{to:"/contact",label:"お問い合わせ",showIcon:!1,onClick:u})],2)}}}),Y=C(V,[["__scopeId","data-v-08fbd46d"]]),j=""+new URL("IMG_3475.Bw07bX7P.png",import.meta.url).href,z={class:"container"},U={class:"pc-menu"},q=N({__name:"TheHeader",setup(g){const t=f(!1),a=D(),u=b(()=>a.path==="/"),c=f(0),e=f(!1),r=f(!1),p=f(1),x=()=>{const v=window.scrollY;e.value=v>c.value,v>100&&e.value?(r.value=!0,p.value=0):(r.value=!1,p.value=1),c.value=v},B=()=>{t.value=!t.value},I=b(()=>({"header-transparent":u.value&&c.value<900})),O=b(()=>({opacity:p.value,transition:"opacity 0.5s ease-in-out"}));return H(()=>{window.addEventListener("scroll",x)}),L(()=>{window.removeEventListener("scroll",x)}),(v,i)=>{const _=y,S=M,$=Y;return w(),k("header",{class:m([d(I),"header"]),style:E(d(O))},[o("div",z,[(w(),R(T(d(u)?"h1":"div"),{class:"logo"},{default:s(()=>[n(_,{to:"/"},{default:s(()=>i[0]||(i[0]=[o("img",{src:j,alt:"Japalve",class:"h-12 w-auto relative top-1 ml-0"},null,-1)])),_:1})]),_:1})),o("nav",U,[o("ul",null,[o("li",null,[n(_,{to:"/"},{default:s(()=>i[1]||(i[1]=[l("Top")])),_:1})]),o("li",null,[n(_,{to:"/about"},{default:s(()=>i[2]||(i[2]=[l("About")])),_:1})]),o("li",null,[n(_,{to:"/service"},{default:s(()=>i[3]||(i[3]=[l("Menu")])),_:1})]),o("li",null,[n(_,{to:"/news"},{default:s(()=>i[4]||(i[4]=[l("News")])),_:1})]),o("li",null,[n(S,{to:"/contact",label:"Contact",showIcon:!1})])])]),o("div",{class:"hamburger",onClick:B},[o("span",{class:m({open:d(t)})},null,2),o("span",{class:m({open:d(t)})},null,2),o("span",{class:m({open:d(t)})},null,2)])]),n($,{isOpen:d(t),onClose:B},null,8,["isOpen"])],6)}}}),oo=C(q,[["__scopeId","data-v-067a8255"]]),A={},G={class:"footer"},J={class:"footer-content"},Q={class:"footer-top"},X={class:"footer-links"},F={class:"footer-menu"};function K(g,t){const a=y;return w(),k("footer",G,[o("div",J,[o("div",Q,[t[7]||(t[7]=o("div",{class:"company-info"},[o("small",{class:"catchphrase mb-1"},"代表"),o("h2",{class:"h-6 w-auto relative right-1.5 mb-4"},"重永 信太郎"),o("div",{class:"address-contact"},[o("p",null,[o("br"),l(" 熊本県熊本市中央区下通1丁目6-5 Modenaビル"),o("br"),l(" 熊本県熊本市中央区下通1丁目8-18 銀座ツインビル ")])])],-1)),o("div",X,[o("div",F,[t[6]||(t[6]=o("div",{class:"footer-menu-title font-bold mb-2"},"サイトマップ",-1)),o("ul",null,[o("li",null,[n(a,{to:"/about"},{default:s(()=>t[0]||(t[0]=[l(" 私たちについて ")])),_:1})]),o("li",null,[n(a,{to:"/service"},{default:s(()=>t[1]||(t[1]=[l(" メニュー/料金 ")])),_:1})]),o("li",null,[n(a,{to:"/news"},{default:s(()=>t[2]||(t[2]=[l(" お知らせ ")])),_:1})]),o("li",null,[n(a,{to:"/info"},{default:s(()=>t[3]||(t[3]=[l(" Bar情報 ")])),_:1})]),o("li",null,[n(a,{to:"/contact"},{default:s(()=>t[4]||(t[4]=[l(" お問い合わせ ")])),_:1})]),o("li",null,[n(a,{to:"/privacy-policy"},{default:s(()=>t[5]||(t[5]=[l(" 個人情報保護方針 ")])),_:1})])])])])]),t[8]||(t[8]=o("div",{class:"footer-bottom"},[o("p",{class:"copyright"},[o("span",{lang:"ja"},"©"),l(" 2025 MiyauchiNaoto ")])],-1))])])}const to=C(A,[["render",K],["__scopeId","data-v-f8b7a00b"]]);export{oo as _,to as a};
