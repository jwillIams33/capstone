(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{239:function(e,a,l){"use strict";l.r(a);l(72);var t=l(0),n=l.n(t),r=(l(2),l(251),l(227)),c=l(231),m=l(233),u=l(234),E=l(99),o=l(232),s=l(16),i=l.n(s),p=l(106),g=l(228),N=g.a.get("checkInDate"),f=g.a.get("checkOutDate"),h=g.a.get("numberOfRooms"),d=g.a.get("numberOfGuests"),b=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("main",{className:i.a.container},n.a.createElement(E.a,null,n.a.createElement(p.a,null,n.a.createElement("p",null,"CHECK-IN:"),n.a.createElement(E.a,null,n.a.createElement("p",null,N))),n.a.createElement(p.a,null,n.a.createElement("p",null,"CHECK-OUT:"),n.a.createElement(E.a,null,n.a.createElement("p",null,f))),n.a.createElement(p.a,null,n.a.createElement("p",null,"GUESTS:"),n.a.createElement(E.a,null,n.a.createElement("p",null,d))),n.a.createElement(p.a,null,n.a.createElement("p",null,"ROOMS:"),n.a.createElement(E.a,null,n.a.createElement("p",null,h))),n.a.createElement(p.a,null,n.a.createElement("button",null,"Select")))))},k=l(3),v=l.n(k),w=l(230);a.default=function(e){var a=e.pageContext.room,l=a.color,t=a.type,s=r.g[t],p=s[l];return n.a.createElement("div",null,n.a.createElement(u.a,null),n.a.createElement(m.a,{style:Object(w.a)(p),className:i.a.roomImage}),n.a.createElement(o.a,null,n.a.createElement(b,null),n.a.createElement("section",{className:v.a.roomDetail},n.a.createElement("h1",{className:i.a.headline},s.name),n.a.createElement("p",null,s.copy)),n.a.createElement("section",{className:v.a.roomDetail},n.a.createElement("h2",{className:i.a.subhead},"Features:"),n.a.createElement(E.a,null,n.a.createElement("ul",null,n.a.createElement("li",null,"High Speed Internet"),n.a.createElement("li",null,"Kuerig coffee/tea maker"),n.a.createElement("li",null,"minibar")),n.a.createElement("ul",null,n.a.createElement("li",null,"Work Desk"),n.a.createElement("li",null,"Bluetooth Speakers"),n.a.createElement("li",null,"Direct TV")),n.a.createElement("ul",null,n.a.createElement("li",null,"In-Room Safe"),n.a.createElement("li",null,"Valet Parking"),n.a.createElement("li",null,"Cups/glassware"))))),n.a.createElement(c.a,null))}},251:function(e,a,l){"use strict";var t=l(0),n=l.n(t),r=l(16),c=l.n(r),m=l(229),u=(l(72),l(45)),E=l(3),o=l.n(E),s=l(230),i=function(e){var a=e.color,l=e.rooms.map((function(e){return n.a.createElement("div",{className:c.a.roomItem},n.a.createElement("div",{style:Object(s.a)(e[a]),className:c.a.roomImage},n.a.createElement(u.a,{className:o.a.linkStyles,to:"/"+e.url[a],state:a},e.name)),n.a.createElement("div",{className:c.a.row},n.a.createElement("p",{className:c.a.roomName},e.name),n.a.createElement("p",{className:c.a.roomPrice},e.price,n.a.createElement("span",null,"/night"))))}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:c.a.roomRow},l))},p=l(227);a.a=function(e){var a=e.color;return n.a.createElement(n.a.Fragment,null,n.a.createElement("main",null,n.a.createElement(m.a,null),n.a.createElement("h1",{className:c.a.headlineAlt},p.j[a]),n.a.createElement("p",null,p.b[a]),n.a.createElement(i,{rooms:p.h[a],color:a})))}}}]);
//# sourceMappingURL=component---src-templates-room-template-js-3eadccd29e1be5493e54.js.map