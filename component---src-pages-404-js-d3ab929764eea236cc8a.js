(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(165),o=a(163);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),s=a.n(c);a.d(t,"a",function(){return s.a});a(159),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},159:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},161:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},163:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(169),l=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,c=n.data.site,s=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=u},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Gopi Krishna",description:"Gopi Krishna, Frontend Developer.",author:"@_bgopikrishna"}}}}},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(144),s=a.n(c),l=a(158),u=a(160),m=a(162),d=function(e){var t=e.toggleDarkMode,a=e.darkMode,n=a?r.a.createElement(u.a,{icon:m.d}):r.a.createElement(u.a,{icon:m.c}),i=a?s.a.day:s.a.night;return r.a.createElement("div",{className:s.a.navsection},r.a.createElement("div",{className:s.a.logo},r.a.createElement(l.a,{to:"/"},"GK")),r.a.createElement("nav",null,r.a.createElement("ul",{className:s.a.navbar},r.a.createElement("li",{className:s.a.navitem},r.a.createElement(l.a,{className:s.a.navlink,to:"/about",activeClassName:s.a.linkActive},"About")),r.a.createElement("li",{className:s.a.navitem},r.a.createElement(l.a,{className:s.a.navlink,to:"/projects",activeClassName:s.a.linkActive},"Projects")),r.a.createElement("li",{className:s.a.navitem},r.a.createElement(l.a,{className:s.a.navlink,to:"/contact",activeClassName:s.a.linkActive},"Contact")),r.a.createElement("li",{className:s.a.navitem},r.a.createElement("button",{className:s.a.nightModeBtn+" "+i,to:"/contact",onClick:t},n)))))},p=(a(168),a(145)),f=a.n(p),v=function(){return r.a.createElement("footer",{style:{justifySelf:"end",opacity:"0.7",fontSize:"0.7rem",margin:"10px auto"}},"© 2019 Coded By"," ",r.a.createElement("a",{href:"https://twitter.com/_bgopikrishna",target:"_blank",rel:"noopener noreferrer"},"Gopi Krishna"))},g=function(){var e=Object(n.useState)("true"===localStorage.getItem("darkMode")),t=e[0],a=e[1];return Object(n.useEffect)(function(){var e;e=t,localStorage.setItem("darkMode",JSON.stringify(e)),e?(document.body.classList.remove("light"),document.body.classList.add("dark")):(document.body.classList.remove("dark"),document.body.classList.add("light"))},[t]),[t,a]};var E=function(e){var t=e.children,a=e.containerType,n=g(),i=n[0],o=n[1];return r.a.createElement("div",{className:f.a.box},r.a.createElement(d,{toggleDarkMode:function(){return o(!i)},darkMode:i}),r.a.createElement("div",{className:"fluid"===a?f.a.fluid:f.a.container},r.a.createElement("main",null,t)),r.a.createElement(v,null))};E.defaultProps={containerType:"fluid"},E.propTypes={children:o.a.node.isRequired};t.a=E}}]);
//# sourceMappingURL=component---src-pages-404-js-d3ab929764eea236cc8a.js.map