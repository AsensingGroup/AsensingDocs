"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[234],{846:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=i(4848),t=i(8453);const r={sidebar_position:1},l="IMU \u7cfb\u5217\u4ea7\u54c1\u4ecb\u7ecd",o={id:"imu/intro",title:"IMU \u7cfb\u5217\u4ea7\u54c1\u4ecb\u7ecd",description:"MEMS \u60ef\u5bfc\u82af\u7247",source:"@site/docs/imu/intro.md",sourceDirName:"imu",slug:"/imu/intro",permalink:"/AsensingDocs/docs/imu/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/imu/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd17 \u6587\u6863\u4e2d\u5fc3",permalink:"/AsensingDocs/docs/intro"},next:{title:"GNSS \u4ea7\u54c1\u4ecb\u7ecd",permalink:"/AsensingDocs/docs/gnss/intro"}},d={},c=[{value:"MEMS \u60ef\u5bfc\u82af\u7247",id:"mems-\u60ef\u5bfc\u82af\u7247",level:2},{value:"IMU \u60ef\u6027\u6d4b\u91cf\u5355\u5143",id:"imu-\u60ef\u6027\u6d4b\u91cf\u5355\u5143",level:2},{value:"IMU5115 \u7d27\u51d1\u578b/\u8f66\u89c4\u7ea7",id:"imu5115-\u7d27\u51d1\u578b\u8f66\u89c4\u7ea7",level:3},{value:"IMU5104 \u529f\u80fd\u5b89\u5168/\u8f66\u89c4\u7ea7",id:"imu5104-\u529f\u80fd\u5b89\u5168\u8f66\u89c4\u7ea7",level:3},{value:"10DoF IMU \u6a21\u7ec4",id:"10dof-imu-\u6a21\u7ec4",level:2},{value:"\u9ad8\u52a8\u6001\u503e\u89d2\u4f20\u611f\u5668",id:"\u9ad8\u52a8\u6001\u503e\u89d2\u4f20\u611f\u5668",level:2},{value:"\u9ad8\u6027\u80fd\u5fae\u578b\u503e\u89d2\u4f20\u611f\u5668",id:"\u9ad8\u6027\u80fd\u5fae\u578b\u503e\u89d2\u4f20\u611f\u5668",level:2},{value:"9DoF \u59ff\u6001\u4f20\u611f\u5668",id:"9dof-\u59ff\u6001\u4f20\u611f\u5668",level:2}];function u(e){const n={h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"imu-\u7cfb\u5217\u4ea7\u54c1\u4ecb\u7ecd",children:"IMU \u7cfb\u5217\u4ea7\u54c1\u4ecb\u7ecd"}),"\n",(0,s.jsx)(n.h2,{id:"mems-\u60ef\u5bfc\u82af\u7247",children:"MEMS \u60ef\u5bfc\u82af\u7247"}),"\n",(0,s.jsx)(n.p,{children:"GST80 \u662f\u5177\u5907\u9ad8\u521b\u65b0\u6027\u3001\u9ad8\u96c6\u6210\u5ea6\u548c\u9ad8\u6027\u4ef7\u6bd4\u7684 MEMS \u60ef\u6027\u5bfc\u822a\u82af\u7247\u3002\u51dd\u805a\u767e\u4e07\u7ea7\u4ea4\u4ed8\u91cf\u7ecf\u9a8c\u8bbe\u8ba1\u7684 MotionTrack \u7cfb\u5217\u516d\u8f74\u8fd0\u52a8\u4f20\u611f\u5668\uff0c\u4e1a\u5185\u9996\u6b3e\u5185\u7f6e MCU \u548c\u591a\u79cd\u63a5\u53e3\u7684\u53ef\u7f16\u7a0b\u6c7d\u8f66\u60ef\u6027\u4f20\u611f\u5668\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u53c2\u6570\u4fe1\u606f\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u516d\u8f74\u8fd0\u52a8\u4f20\u611f\u5668\uff1a3\u8f74\u9640\u87ba\u4eea + 3\u8f74\u52a0\u901f\u5ea6\u8ba1"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u7f6e\u96c6\u6210 MCU, RAM, eFLASH, Safety Controller"}),"\n",(0,s.jsx)(n.li,{children:"\u591a\u79cd\u63a5\u53e3\uff1aPPS \u540c\u6b65\uff1bSPI, UART(LIN)"}),"\n",(0,s.jsx)(n.li,{children:"\u529f\u80fd\u5b89\u5168\uff1aASIL B/D"}),"\n",(0,s.jsx)(n.li,{children:"\u5c3a\u5bf8\uff1a7x7 mm"}),"\n",(0,s.jsx)(n.li,{children:"\u5c01\u88c5\uff1a\u9676\u74f7\u6c14\u5bc6"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"imu-\u60ef\u6027\u6d4b\u91cf\u5355\u5143",children:"IMU \u60ef\u6027\u6d4b\u91cf\u5355\u5143"}),"\n",(0,s.jsx)(n.p,{children:"\u5bfc\u8fdc IMU \u7cfb\u5217\u6a21\u7ec4\u91c7\u7528\u4e0d\u9508\u94a2\u5916\u58f3\uff0c\u4e3a\u82db\u523b\u7684\u5e94\u7528\u573a\u666f\u63d0\u4f9b\u53ef\u9760\u7684\u60ef\u6027\u6d4b\u91cf\u6027\u80fd\u3002\u8bbe\u5907\u51fa\u5382\u524d\u5df2\u7ecf\u8fc7\u822a\u7a7a\u7ea7\u7cbe\u5bc6\u8f6c\u53f0\u7684\u6e29\u5ea6\u548c\u52a8\u6001\u6821\u51c6\uff0c\u786e\u4fdd\u5728\u6076\u52a3\u7684\u73af\u5883\u4e0b\u6b63\u5e38\u5de5\u4f5c\u7684\u53ef\u9760\u6027\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"imu5115-\u7d27\u51d1\u578b\u8f66\u89c4\u7ea7",children:"IMU5115 \u7d27\u51d1\u578b/\u8f66\u89c4\u7ea7"}),"\n",(0,s.jsx)(n.h3,{id:"imu5104-\u529f\u80fd\u5b89\u5168\u8f66\u89c4\u7ea7",children:"IMU5104 \u529f\u80fd\u5b89\u5168/\u8f66\u89c4\u7ea7"}),"\n",(0,s.jsx)(n.h2,{id:"10dof-imu-\u6a21\u7ec4",children:"10DoF IMU \u6a21\u7ec4"}),"\n",(0,s.jsx)(n.p,{children:"IMU5121 \u662f\u4e00\u6b3e\u5b8c\u6574\u7684\u60ef\u6027\u7cfb\u7edf\uff0c\u5185\u7f6e\u4e00\u4e2a\u4e09\u8f74\u9640\u87ba\u4eea\u3001\u4e00\u4e2a\u4e09\u8f74\u52a0\u901f\u5ea6\u8ba1\u3001\u4e00\u4e2a\u4e09\u8f74\u78c1\u529b\u8ba1\u548c\u4e00\u4e2a\u538b\u529b\u4f20\u611f\u5668\uff0c\u53ef\u63d0\u4f9b\u4f18\u5316\u7684\u52a8\u6001\u6027\u80fd\u3002\u5168\u6e29\u6807\u5b9a\u8865\u507f\uff0c\u53ef\u63d0\u4f9b\u7cbe\u786e\u7684\u4f20\u611f\u5668\u6d4b\u91cf\u3002\u4e3a\u7cbe\u786e\u7684\u591a\u8f74\u60ef\u6027\u68c0\u6d4b\u4e0e\u5de5\u4e1a\u7cfb\u7edf\u7684\u96c6\u6210\u63d0\u4f9b\u4e86\u7b80\u5355\u800c\u9ad8\u6548\u7684\u65b9\u6cd5\u3002\u91c7\u752836mm\xd744mm\xd714mm\u5c01\u88c5\uff0c\u63d0\u4f9b\u6807\u51c624\u5f15\u811a\u3001\u53cc\u6392\u30011mm\u95f4\u8ddd\u8fde\u63a5\u5668\uff0c\u5927\u5927\u7f29\u77ed\u4e86\u7cfb\u7edf\u96c6\u6210\u65f6\u95f4\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u9ad8\u52a8\u6001\u503e\u89d2\u4f20\u611f\u5668",children:"\u9ad8\u52a8\u6001\u503e\u89d2\u4f20\u611f\u5668"}),"\n",(0,s.jsx)(n.p,{children:"IMS5561 \u662f\u4e00\u6b3e\u9ad8\u52a8\u6001\u89d2\u5ea6\u6d4b\u91cf\u4f20\u611f\u5668\uff0c\u91c7\u7528\u575a\u56fa\u8010\u7528\u7684\u5916\u58f3\u3002\u80fd\u591f\u5b9e\u65f6\u6d4b\u91cf\u51fa\u7269\u4f53\u5728\u7a7a\u95f4\u4e2d\u7684\u89d2\u5ea6\u3001\u89d2\u901f\u5ea6\u7b49\u6570\u636e\u4fe1\u606f\u3002\u8be5\u6b3e\u4f20\u611f\u5668\u5185\u90e8\u96c6\u6210\u9ad8\u901f\u89e3\u7b97\u5355\u5143\uff0c\u4e13\u4e3a\u9ad8\u901f\u8fd0\u52a8\u6d4b\u91cf\u91cf\u8eab\u5b9a\u5236\uff0c\u5177\u6709\u975e\u5e38\u9ad8\u7684\u54cd\u5e94\u901f\u5ea6\uff0c\u80fd\u591f\u5feb\u901f\u51c6\u786e\u6d4b\u91cf\u8fd0\u52a8\u4e2d\u7684\u7269\u4f53\u7a7a\u95f4\u89d2\u5ea6\u53d8\u5316\uff0c\u5177\u5907\u826f\u597d\u7684\u6297\u6270\u52a8\u6d4b\u91cf\u80fd\u529b\u3002\u5373\u4f7f\u5728\u5927\u5e45\u8fd0\u52a8\u6216\u632f\u52a8\u60c5\u51b5\u4e0b\uff0c\u4f9d\u7136\u80fd\u591f\u4fdd\u6301\u8f83\u9ad8\u7684\u6d4b\u91cf\u7cbe\u5ea6\u3002\u6700\u9ad8 100hz \u7684\u6570\u636e\u8f93\u51fa\uff0c\u80fd\u591f\u5e2e\u52a9\u7528\u6237\u5b9e\u73b0\u5b9e\u65f6\u95ed\u73af\u63a7\u5236\u7b56\u7565\uff0c\u4f18\u5316\u63a7\u5236\u6027\u80fd\u3002\u9002\u5408\u5e94\u7528\u4e8e\u6316\u6398\u673a\u5b9a\u6df1\u63a7\u5236\u3001\u6cf5\u8f66\u81c2\u67b6\u51cf\u632f\u63a7\u5236\u3001\u591a\u673a\u68b0\u81c2\u8054\u52a8\u63a7\u5236\u3001\u9ad8\u7a7a\u4f5c\u4e1a\u8f66\u5e73\u53f0\u7a33\u5b9a\u63a7\u5236\u7b49\u5e94\u7528\u9886\u57df\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u9ad8\u6027\u80fd\u5fae\u578b\u503e\u89d2\u4f20\u611f\u5668",children:"\u9ad8\u6027\u80fd\u5fae\u578b\u503e\u89d2\u4f20\u611f\u5668"}),"\n",(0,s.jsx)(n.p,{children:"IMS5562 \u662f\u4e00\u6b3e\u9ad8\u7cbe\u5ea6\u3001\u5c0f\u4f53\u79ef\u89d2\u5ea6\u6d4b\u91cf\u4f20\u611f\u5668\uff0c\u80fd\u591f\u5b9e\u65f6\u6d4b\u91cf\u51fa\u7269\u4f53\u5728\u7a7a\u95f4\u4e2d\u7684\u89d2\u5ea6\u3001\u6700\u9ad8 100hz \u7684\u6570\u636e\u8f93\u51fa\uff0c\u80fd\u591f\u5e2e\u52a9\u7528\u6237\u5b9e\u73b0\u5b9e\u65f6\u95ed\u73af\u63a7\u5236\u7b56\u7565\uff0c\u4f18\u5316\u63a7\u5236\u6027\u80fd\u3002\u9002\u5408\u5e94\u7528\u4e8e\u6316\u6398\u673a\u5b9a\u6df1\u63a7\u5236\u3001\u6cf5\u8f66\u81c2\u67b6\u51cf\u632f\u63a7\u5236\u3001\u591a\u673a\u68b0\u81c2\u8054\u52a8\u63a7\u5236\u3001\u9ad8\u7a7a\u4f5c\u4e1a\u8f66\u5e73\u53f0\u7a33\u5b9a\u63a7\u5236\u7b49\u5e94\u7528\u9886\u57df\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"9dof-\u59ff\u6001\u4f20\u611f\u5668",children:"9DoF \u59ff\u6001\u4f20\u611f\u5668"}),"\n",(0,s.jsx)(n.p,{children:"IMS5563 \u662f\u4e00\u6b3e\u59ff\u6001\u4f20\u611f\u5668\uff0c\u91c7\u7528\u8d85\u5c0f\u5c3a\u5bf8\u5916\u5f62\u7684\u8bbe\u8ba1\u3002"})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(6540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);