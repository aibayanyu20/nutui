import{c as t}from"./mobile.aa250e6d.js";import{x as e,y as o,r as a,o as r,c as p,f as d,s as l,j as i}from"./vendor.36ea9f7d.js";import"./index.d26ed273.js";const{createDemo:n}=t("drag");var s=n({setup:()=>({right:function(){return document.documentElement.clientWidth-300-9},bottom:function(){return document.documentElement.clientHeight-559}})});const u=l();e("data-v-7de0c5ea");const c={class:"demo full"},f=d("h2",null,"基础用法",-1),y=i("触摸移动"),m=d("h2",{style:{top:"30px",position:"relative"}},"限制拖拽方向",-1),x=i("只能X轴拖拽"),_=i("只能Y轴拖拽"),h=d("h2",{style:{top:"60px",position:"relative"}},"自动吸边",-1),v=i("拖动我"),b=d("h2",{style:{top:"90px",position:"relative"}},"限制拖动边界",-1),g=d("div",{class:"drag-boundary"},null,-1),j=i("限制拖拽边界");o();const E=u(((t,e,o,l,i,n)=>{const s=a("nut-button"),E=a("nut-drag");return r(),p("div",c,[f,d(E,{style:{top:"120px",left:"8px"}},{default:u((()=>[d(s,{type:"primary"},{default:u((()=>[y])),_:1})])),_:1}),m,d(E,{direction:"x",style:{top:"200px",left:"8px"}},{default:u((()=>[d(s,{type:"primary"},{default:u((()=>[x])),_:1})])),_:1}),d(E,{direction:"y",style:{top:"200px",right:"50px"}},{default:u((()=>[d(s,{type:"primary"},{default:u((()=>[_])),_:1})])),_:1}),h,d(E,{direction:"x",attract:!0,style:{top:"275px",left:"8px"}},{default:u((()=>[d(s,{type:"primary"},{default:u((()=>[v])),_:1})])),_:1}),b,g,d(E,{boundary:{top:361,left:9,bottom:t.bottom(),right:t.right()},style:{top:"400px",left:"50px"}},{default:u((()=>[d(s,{type:"primary"},{default:u((()=>[j])),_:1})])),_:1},8,["boundary"])])}));s.render=E,s.__scopeId="data-v-7de0c5ea";export default s;
