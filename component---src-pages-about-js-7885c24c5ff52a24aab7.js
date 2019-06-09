(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{157:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(165),i=a(163),c=(a(148),a(167)),l=a(158),s=a(170);t.default=function(){return r.a.createElement(o.a,{containerType:"container"},r.a.createElement(i.a,{title:"About Me"}),r.a.createElement("article",{className:"about"},r.a.createElement("h2",{className:"pageHeader",style:{textAlign:"center"}},"About Me"),r.a.createElement("section",{className:""},r.a.createElement("h3",{className:"pageHeader"},"Background"),r.a.createElement("p",null,"I am originally from Hyderabad, India. I'm currently pursuing my final year of under graduation in Electronics & Communication Engineering from Bharath University, Chennai. I'm doing web development from past one year and I'm on my way to becoming a Full Stack Engineer. I have learned programming from various resources like"," ",r.a.createElement("a",{href:"https://freeCodeCamp.org/bgopikrishna",target:"_blank",rel:"noopener noreferrer"},"freeCodeCamp"),","," ",r.a.createElement("a",{href:"https://twitter.com/rwieruch",target:"_blank",rel:"noopener noreferrer"},"Robin Wieruch"),", blog posts etc. As a self-taught programmer and learner at freeCodeCamp, I completed freeCodeCamp's ",r.a.createElement("a",{href:"http://",target:"_blank",rel:"noopener noreferrer"},"Front End Libraries Certification"),".")),r.a.createElement("section",{className:""},r.a.createElement("h3",{className:"pageHeader"},"Knowledgle In"),r.a.createElement("p",null,"I'm knowledgeble in JavaScript, HTML5, CSS, React, Redux, Firebase, and Sass. You can checkout my ",r.a.createElement(l.a,{to:"/projects"},"projects")," ","(or) at my"," ",r.a.createElement("a",{href:"https://github.com/bgopikrishna",target:"_blank",rel:"noopener noreferrer"},"github")," ","page."))),r.a.createElement(s.a,null),r.a.createElement(c.a,null))}},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(159),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},159:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},161:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},163:function(e,t,a){"use strict";var n=a(164),r=a(0),o=a.n(r),i=a(4),c=a.n(i),l=a(169),s=a.n(l);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,c=n.data.site,l=t||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:l}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=m},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Gopi Krishna",description:"Gopi Krishna, Frontend Developer.",author:"@_bgopikrishna"}}}}},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(144),l=a.n(c),s=a(158),m=a(160),u=a(162),d=function(e){var t=e.toggleDarkMode,a=e.darkMode,n=a?r.a.createElement(m.a,{icon:u.d}):r.a.createElement(m.a,{icon:u.c}),o=a?l.a.day:l.a.night;return r.a.createElement("div",{className:l.a.navsection},r.a.createElement("div",{className:l.a.logo},r.a.createElement(s.a,{to:"/"},"GK")),r.a.createElement("nav",null,r.a.createElement("ul",{className:l.a.navbar},r.a.createElement("li",{className:l.a.navitem},r.a.createElement(s.a,{className:l.a.navlink,to:"/about",activeClassName:l.a.linkActive},"About")),r.a.createElement("li",{className:l.a.navitem},r.a.createElement(s.a,{className:l.a.navlink,to:"/projects",activeClassName:l.a.linkActive},"Projects")),r.a.createElement("li",{className:l.a.navitem},r.a.createElement(s.a,{className:l.a.navlink,to:"/contact",activeClassName:l.a.linkActive},"Contact")),r.a.createElement("li",{className:l.a.navitem},r.a.createElement("button",{className:l.a.nightModeBtn+" "+o,to:"/contact",onClick:t},n)))))},p=(a(168),a(145)),f=a.n(p),g=function(){return r.a.createElement("footer",{style:{justifySelf:"end",opacity:"0.7",fontSize:"0.7rem",margin:"10px auto"}},"© 2019 Coded By"," ",r.a.createElement("a",{href:"https://twitter.com/_bgopikrishna",target:"_blank",rel:"noopener noreferrer"},"Gopi Krishna"))},h=function(){var e="undefined"==typeof window?Object(n.useState)(!1):Object(n.useState)("true"===localStorage.getItem("darkMode")),t=e[0],a=e[1];return Object(n.useEffect)(function(){var e;e=t,"undefined"!=typeof window&&(localStorage.setItem("darkMode",JSON.stringify(e)),e?(document.body.classList.remove("light"),document.body.classList.add("dark")):(document.body.classList.remove("dark"),document.body.classList.add("light")))},[t]),[t,a]};var b=function(e){var t=e.children,a=e.containerType,n=h(),o=n[0],i=n[1];return r.a.createElement("div",{className:f.a.box},r.a.createElement(d,{toggleDarkMode:function(){return i(!o)},darkMode:o}),r.a.createElement("div",{className:"fluid"===a?f.a.fluid:f.a.container},r.a.createElement("main",null,t)),r.a.createElement(g,null))};b.defaultProps={containerType:"fluid"},b.propTypes={children:i.a.node.isRequired};t.a=b},166:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return o}),a.d(t,"d",function(){return i}),a.d(t,"c",function(){return c});var n=a(171),r="I'm a self-taught Front-End Web Dev and learner at freeCodeCamp. I love JavaScript and React. I'm currently looking for internships, If you have any let me know. If I'm not coding, I'll be binge-watching or reading books (fiction) or playing FPS games. ",o="If you have any queries, feel free to message me on ",i=[{platfrom:"Gopi Krishna on Twitter",profileUrl:"https://twitter.com/_bgopikrishna",icon:n.d,className:"twitterIcon"},{platfrom:"Gopi Krishna on Freecodecap",profileUrl:"https://www.freecodecamp.org/bgopikrishna",icon:n.a,className:"fccIcon"},{platfrom:"Gopi Krishna on Github",profileUrl:"https://github.com/bgopikrishna",icon:n.b,className:"githubIcon"},{platfrom:"Gopi Krishna on linkedin",profileUrl:"https://linkedin.com/in/bgopikrishna",icon:n.c,className:"linkedinIcon"}],c=[{name:"Moviebase",liveDemoUrl:"https://movie-base.netlify.com/",sourceCodeUrl:"https://github.com/bgopikrishna/moviebase",desc:"A movie lists, movie info, movie search  web app using the themoviedb API.",technologies:["JavaScript","ReactJS","Firebase","Firestore Database","HTML5","Sass"]},{name:"MyBookShelf",liveDemoUrl:"https://mybookshelf.netlify.com/",sourceCodeUrl:"https://github.com/bgopikrishna/book-shelf",desc:"A bookshelf app inspired from Udacity React nanodegree project using Google Books API.",technologies:["JavaScript","ReactJS","HTML5","Materilize CSS"]},{name:"Pomodoro Timer",liveDemoUrl:"https://pomotimer.netlify.com/",sourceCodeUrl:"https://github.com/bgopikrishna/react-pomotimer",desc:"A minimalistic pomodoro timer based on pomodoro technique.",technologies:["JavaScript","ReactJS","HTML5","CSS"]}]},167:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(160),i=a(158),c=a(162),l=function(e){var t=e.to,a=e.arrowIconDirection,n=e.children,l="left"===a?c.a:c.b;return r.a.createElement(i.a,{to:t},r.a.createElement(o.a,{icon:l})," ",n)};l.defaultProps={to:"/",arrowIconDirection:"left",children:"Back To Home"},t.a=l},170:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(166),i=a(146),c=a.n(i),l=a(160);t.a=function(){return r.a.createElement("ul",{className:c.a.socialGrid},o.d.map(function(e){var t=e.profileUrl,a=e.platfrom,n=e.icon,o=""+c.a.icon;return r.a.createElement("li",{key:t},r.a.createElement("a",{href:t,title:a,className:o},r.a.createElement(l.a,{icon:n})))}))}}}]);
//# sourceMappingURL=component---src-pages-about-js-7885c24c5ff52a24aab7.js.map