(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},48:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),i=c.n(a),r=c(17),o=c.n(r),s=(c(28),c(29),c(4));c(30);var l=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),c=t[0],i=t[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?i(!0):i(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(n.jsxs)("div",{className:"header ".concat(c&&"header__black"),children:[Object(n.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png",alt:"Netflix Logo",className:"header__logo"}),Object(n.jsx)("img",{src:"",alt:"",className:"header__avatar"})]})},d=c(5),h=c.n(d),u=c(6),f=c(18),b=c.n(f).a.create({baseURL:"https://api.themoviedb.org/3"}),j="f48c83f1a2f413186327be34e394dd5c",v={fetchTrending:"/trending/all/week?api_key=".concat(j,"&language=zh-TW"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(j,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(j,"&language=zh-TW"),fetchActionMovies:"/discover/movie?api_key=".concat(j,"&with_genres=28"),fetchComdeyMovies:"/discover/movie?api_key=".concat(j,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(j,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(j,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(j,"&with_genres=99")};c(48);var p=function(){var e,t,c=Object(a.useState)([]),i=Object(s.a)(c,2),r=i[0],o=i[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(v.fetchNetflixOriginals);case 2:t=e.sent,o(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(r),Object(n.jsxs)("header",{className:"banner",style:{backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===r||void 0===r?void 0:r.backdrop_path,'")'),backgroundSize:"cover",backgroundPosition:"center center"},children:[Object(n.jsxs)("div",{className:"banner__contents",children:[Object(n.jsx)("h1",{className:"banner__title",children:(null===r||void 0===r?void 0:r.name)||(null===r||void 0===r?void 0:r.title)||(null===r||void 0===r?void 0:r.original_name)}),Object(n.jsxs)("div",{className:"banner__btns",children:[Object(n.jsx)("button",{className:"banner__btn",children:"\u64ad\u653e"}),Object(n.jsx)("button",{className:"banner__btn",children:"\u6211\u7684\u7247\u55ae"})]}),Object(n.jsx)("h1",{className:"banner__description",children:(e=null===r||void 0===r?void 0:r.overview,t=200,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(n.jsx)("div",{className:"banner__fadeBottom"})]})},m=c(19),g=c(22),_=c.n(g);c(64);var O=function(e){var t=e.title,c=e.fetchUrl,i=e.isLargeRow,r=Object(a.useState)([]),o=Object(s.a)(r,2),l=o[0],d=o[1],f=Object(a.useState)(""),j=Object(s.a)(f,2),v=j[0],p=j[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(c);case 2:return t=e.sent,d(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(n.jsxs)("div",{className:"movieRow",children:[Object(n.jsx)("h2",{children:t}),Object(n.jsx)("div",{className:"row__poster",children:l.map((function(e){return Object(n.jsx)("img",{onClick:function(){return function(e){v?p(""):_()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);p(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"posters__image ".concat(i&&"poster__largeRow"),src:"".concat("https://image.tmdb.org/t/p/original").concat(i?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),v&&Object(n.jsx)(m.a,{videoId:v,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})};var x=function(){return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(l,{}),Object(n.jsx)(p,{}),Object(n.jsx)(O,{title:"NETFLIX ORIGINALS",fetchUrl:v.fetchNetflixOriginals,isLargeRow:!0}),Object(n.jsx)(O,{title:"\u71b1\u9580",fetchUrl:v.fetchTrending}),Object(n.jsx)(O,{title:"\u597d\u8a55\u71b1\u7247",fetchUrl:v.fetchTopRated}),Object(n.jsx)(O,{title:"\u52d5\u4f5c",fetchUrl:v.fetchActionMovies}),Object(n.jsx)(O,{title:"\u559c\u5287",fetchUrl:v.fetchComdeyMovies}),Object(n.jsx)(O,{title:"\u6050\u6016",fetchUrl:v.fetchHorrorMovies}),Object(n.jsx)(O,{title:"\u6d6a\u6f2b",fetchUrl:v.fetchRomanceMovies}),Object(n.jsx)(O,{title:"\u7d00\u9304\u7247",fetchUrl:v.fetchDocumentaries})]})};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.cf24068d.chunk.js.map