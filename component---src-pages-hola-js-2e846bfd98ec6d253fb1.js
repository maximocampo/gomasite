(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3Z9Z":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("TSYQ"),s=a.n(o),c=a("q1tI"),l=a.n(c),i=a("vUet"),u=["xl","lg","md","sm","xs"],f=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,c=e.noGutters,f=e.as,d=void 0===f?"div":f,p=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),v=Object(i.a)(a,"row"),m=v+"-cols",b=[];return u.forEach((function(e){var t,a=p[e];delete p[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&b.push(""+m+n+"-"+t)})),l.a.createElement(d,Object(n.a)({ref:t},p,{className:s.a.apply(void 0,[o,v,c&&"no-gutters"].concat(b))}))}));f.displayName="Row",f.defaultProps={noGutters:!1},t.a=f},"7vrA":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("TSYQ"),s=a.n(o),c=a("q1tI"),l=a.n(c),i=a("vUet"),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.fluid,c=e.as,u=void 0===c?"div":c,f=e.className,d=Object(r.a)(e,["bsPrefix","fluid","as","className"]),p=Object(i.a)(a,"container"),v="string"==typeof o?"-"+o:"-fluid";return l.a.createElement(u,Object(n.a)({ref:t},d,{className:s()(f,o?""+p+v:p)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},DS0Q:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("7vrA"),s=a("3Z9Z"),c=a("JI6e");t.default=function(){var e=Object(n.useState)(0),t=e[0],a=e[1],l=function(){var e=document.body.scrollTop||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight;a(e/t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l)}}),[]),Object(n.useEffect)((function(){console.log("scroll",t)}),[t]),r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(s.a,null,r.a.createElement(c.a,{style:{padding:"7%"}},r.a.createElement("p",{style:{fontSize:"1.5rem",fontWeight:"bold",color:"rgb("+(50*t+200)+", "+(20*t+0)+", "+200*t,fontFamily:"Business"}},"Yerba Mala es una publicación impresa anualmente desde 2017, creada y editada por Pedro Ponce (",r.a.createElement("span",{style:{backgroundColor:"black"}},"@nedtemp"),"), en la Ciudad de México. En ésta se recopilan las obras de las personas que han participado a través de las convocatorias y se han incluido trabajos de fotografía, poesía, cuento corto, ilustración, música, entre otros.",r.a.createElement("br",null),"La revista o “fanzine” se ha presentado en Ciudad de México y Puebla, Berkeley, Oakland y San Francisco en California, Filadelfia PA y el año pasado en Bogotá, Colombia :-)")))))}},JI6e:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("TSYQ"),s=a.n(o),c=a("q1tI"),l=a.n(c),i=a("vUet"),u=["xl","lg","md","sm","xs"],f=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,c=e.as,f=void 0===c?"div":c,d=Object(r.a)(e,["bsPrefix","className","as"]),p=Object(i.a)(a,"col"),v=[],m=[];return u.forEach((function(e){var t,a,n,r=d[e];if(delete d[e],"object"==typeof r&&null!=r){var o=r.span;t=void 0===o||o,a=r.offset,n=r.order}else t=r;var s="xs"!==e?"-"+e:"";t&&v.push(!0===t?""+p+s:""+p+s+"-"+t),null!=n&&m.push("order"+s+"-"+n),null!=a&&m.push("offset"+s+"-"+a)})),v.length||v.push(p),l.a.createElement(f,Object(n.a)({},d,{ref:t,className:s.a.apply(void 0,[o].concat(v,m))}))}));f.displayName="Col",t.a=f},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"===o)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},vUet:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("wx14");var n=a("q1tI"),r=a.n(n),o=r.a.createContext({});o.Consumer,o.Provider;function s(e,t){var a=Object(n.useContext)(o);return e||a[t]||t}},wx14:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-hola-js-2e846bfd98ec6d253fb1.js.map