(this["webpackJsonpfe-pokemon-app"]=this["webpackJsonpfe-pokemon-app"]||[]).push([[0],{15:function(e,a,t){e.exports={pokemons:"Pokemons_pokemons__1jMAA","list-container":"Pokemons_list-container__2_TXd",comparing:"Pokemons_comparing__2EtUu",list:"Pokemons_list__l4n_e",loader:"Pokemons_loader__1CEs4",comparing__title:"Pokemons_comparing__title__1BDaP",comparing__name:"Pokemons_comparing__name__39tZ8"}},16:function(e,a,t){e.exports={"nav-container":"Nav_nav-container__oWM1r",nav:"Nav_nav__KViWQ",nav__items:"Nav_nav__items__1y9cF",nav__item:"Nav_nav__item__2z-uS",nav__link:"Nav_nav__link__2zQKC","nav__link--pokemons":"Nav_nav__link--pokemons__2iaPm","nav__link--home":"Nav_nav__link--home__3tFqe"}},2:function(e,a,t){e.exports={"button--compare":"Details_button--compare__3C7BH",content:"Details_content__1a2m6","info__img-container":"Details_info__img-container__1_HHL",info__img:"Details_info__img__1Yo3Q",info__attributes:"Details_info__attributes__2d5Wo",info__text:"Details_info__text__1INBA",info:"Details_info__mhwJJ",info__content:"Details_info__content__B1IwV"}},20:function(e,a,t){e.exports={card:"Card_card__3Nlj0","card__img-container":"Card_card__img-container__1KFX1",card__img:"Card_card__img__1l5OR",card__description:"Card_card__description__2okAJ",card__name:"Card_card__name__uzlaA"}},27:function(e,a,t){e.exports={search:"Search_search__1YRqH",search__input:"Search_search__input__38jWT"}},30:function(e,a,t){e.exports={modal:"Modal_modal__3Sw5R",details:"Modal_details__1WczI"}},31:function(e,a,t){e.exports={graphics__title:"Graphics_graphics__title__wwyzh"}},35:function(e,a,t){e.exports=t.p+"static/media/whos_that_pokemon.50ab3c9f.png"},39:function(e,a,t){e.exports={home:"Home_home__2ifuu"}},44:function(e,a,t){e.exports=t(82)},7:function(e,a,t){e.exports={content:"Comparison_content__3KZna",images:"Comparison_images__3gCQg",img:"Comparison_img__1h1wy",info:"Comparison_info__3-OTQ",info__row:"Comparison_info__row__2rB1r",info__title:"Comparison_info__title__2SXfd",info__ability:"Comparison_info__ability__3APj2"}},82:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(23),i=t.n(o),c=t(8),s=t(17),l=t(38),m=t(6),_=t(14),p=t.n(_),u=t(19);function f(e,a){var t="";return a.forEach((function(a){e[a]&&(t+=" "+e[a])})),t}function d(e){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(p.a.mark((function e(a){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(a);case 2:return t=e.sent,e.next=5,h(t);case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return k.apply(this,arguments)}function k(){return(k=Object(u.a)(p.a.mark((function e(a){var t,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a.species.url).then((function(e){return e.json()}));case 2:t=e.sent,n=t.flavor_text_entries.find((function(e){return"en"===e.language.name})),a.description=n?n.flavor_text.replace(/(\r\n|\n|\r)/gm," "):"No description provided",(r=t.gender_rate)>=0?r>4?(a.gender="Female",a.sprites.front_female&&(a.imageUrl=a.sprites.front_female)):a.gender="Male":a.gender="Genderless",a.stats_data=a.stats.map((function(e){return e.base_stat}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return b.apply(this,arguments)}function b(){return(b=Object(u.a)(p.a.mark((function e(a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(a).then((function(e){return e.json()}));case 3:if(!(n=e.sent).forms[0]){e.next=11;break}return e.next=7,fetch(n.forms[0].url).then((function(e){return e.json()}));case 7:(r=e.sent).sprites.front_default?n.imageUrl=r.sprites.front_default:n.imageUrl=t(35),e.next=12;break;case 11:n.imageUrl=t(35);case 12:return e.abrupt("return",n);case 15:e.prev=15,e.t0=e.catch(0),console.error("%cThere was an error fecthing one pokemon at: "+a,"color: orange;"),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}var v=function(e,a){return{type:"SHOW",payload:{pokemonToShow:e,pokemonToCompare:a}}},N={isInitializing:!0,isShowing:!1,isComparing:!1,isLoading:!1,isSearching:!1,pokemonsList:[],pokemonsFiltered:[],pokemonToShow:null,pokemonToCompare:null,currURL:"",nextURL:"https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"};var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"INIT":return 0===e.pokemonsList.length?Object(m.a)(Object(m.a)({},e),{},{isLoading:!0,isInitializing:!1,currURL:e.nextURL}):Object(m.a)(Object(m.a)({},e),{},{isLoading:!1,isInitializing:!1});case"SHOW":return Object(m.a)(Object(m.a)({},e),{},{isShowing:!0,pokemonToShow:a.payload.pokemonToShow?a.payload.pokemonToShow:e.pokemonToShow,pokemonToCompare:a.payload.pokemonToCompare?a.payload.pokemonToCompare:null});case"STOP_SHOW":return Object(m.a)(Object(m.a)({},e),{},{isShowing:!1});case"COMPARE":return Object(m.a)(Object(m.a)({},e),{},{isShowing:!1,isComparing:!0});case"STOP_COMPARE":return Object(m.a)(Object(m.a)({},e),{},{isShowing:!1,isComparing:!1});case"UPDATE_POKEMONS":return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1,pokemonsList:e.pokemonsList.concat(a.payload.pokemons),nextURL:a.payload.nextURL});case"LOADING":return Object(m.a)(Object(m.a)({},e),{},{isLoading:!0,currURL:e.nextURL});case"SEARCH":return Object(m.a)(Object(m.a)({},e),{},{isSearching:!0,pokemonsFiltered:a.payload.pokemonsFiltered});case"STOP_SEARCH":return Object(m.a)(Object(m.a)({},e),{},{isSearching:!1,pokemonsFiltered:[]});default:return e}},C=Object(s.c)({global:O}),S=Object(s.d)(C,Object(s.a)(l.a)),x=t(22),w=t(5),y=t(16),L=t.n(y),j=t(27),T=t.n(j),P=Object(c.b)((function(e){return{pokemonsList:e.global.pokemonsList}}),(function(e){return{show:function(){return e(v())},stopShow:function(){return e({type:"STOP_SHOW"})},search:function(a,t){return e(function(e,a){return{type:"SEARCH",payload:{pokemonsFiltered:a.filter((function(a){return a.name.includes(e)}))}}}(a,t))},stopSearch:function(){return e({type:"STOP_SEARCH"})}}}))((function(e){var a=e.search,t=e.stopSearch,o=e.pokemonsList,i=Object(n.useRef)();return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=i.current.value.trim().replace(/\s+/g,"-");""===n?t():a(n,o),i.current.blur()}},r.a.createElement("div",{className:T.a.search},r.a.createElement("input",{className:T.a.search__input,type:"search",id:"mySearch",name:"q",placeholder:"Search",onChange:function(e){var n=e.target.value.trim().replace(/\s+/g,"-");""===n?t():a(n,o)},ref:i})))})),U=function(){return r.a.createElement("div",{className:L.a["nav-container"]},r.a.createElement("nav",{className:L.a.nav},r.a.createElement("ul",{className:L.a.nav__items},r.a.createElement("li",{className:L.a.nav__item},r.a.createElement(x.b,{className:f(L.a,["nav__link","nav__link--home"]),to:"".concat("/pokemon-react-app","/")},"Pok\xe9App")),r.a.createElement("li",{className:L.a.nav__item},r.a.createElement(x.b,{className:f(L.a,["nav__link","nav__link--pokemons"]),to:"".concat("/pokemon-react-app","/pokemons")},"Pokemons")))),r.a.createElement(P,null))},R=t(39),A=t.n(R),I=function(){return r.a.createElement("div",{className:A.a.home},r.a.createElement("h1",null,"Welcome to PokeApp"))},H=t(20),z=t.n(H),W=Object(c.b)((function(e){return{isShowing:e.global.isShowing,isComparing:e.global.isComparing}}),(function(e){return{showThisPokemon:function(a,t){return e(v(a,t))}}}))((function(e){var a=e.pokemon,t=a.name,o=a.imageUrl,i=e.isComparing,c=e.showThisPokemon,s=Object(n.useRef)();return r.a.createElement("div",{className:z.a.card,onClick:function(a){i?c(null,e.pokemon):c(e.pokemon)}},r.a.createElement("div",{className:z.a["card__img-container"]},r.a.createElement("img",{className:z.a.card__img,src:o,alt:"pokemon"})),r.a.createElement("div",{className:z.a.card__description},r.a.createElement("p",{className:z.a.card__name,ref:s},t.toUpperCase())))})),D=t(15),M=t.n(D),F=t(40),B=t(41),G=Object(c.b)((function(e){return{isInitializing:e.global.isInitializing,isLoading:e.global.isLoading,isSearching:e.global.isSearching,nextURL:e.global.nextURL,currURL:e.global.currURL,isComparing:e.global.isComparing,pokemonToShow:e.global.pokemonToShow,pokemonToCompare:e.global.pokemonToCompare}}),(function(e){return{update:function(a){return e((t=a,function(){var e=Object(u.a)(p.a.mark((function e(a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t).then((function(e){return e.json()}));case 3:return n=e.sent,e.next=6,Promise.all(n.results.map((function(e){return d(e.url)})));case 6:r=e.sent,a({type:"UPDATE_POKEMONS",payload:{isLoading:!1,nextURL:n.next,pokemons:r}}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("There was a problem in loading pokemons"),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}()));var t},load:function(){return e({type:"LOADING"})},initList:function(){return e({type:"INIT"})}}}))((function(e){var a=e.isInitializing,t=e.currURL,o=e.pokemons,i=e.isSearching,c=e.isLoading,s=e.isComparing,l=e.pokemonToShow,m=e.pokemonToCompare,_=e.update,p=e.load,u=e.initList,f=null!==e.nextURL;return Object(n.useEffect)((function(){c&&_(t)}),[t]),Object(n.useEffect)((function(){u()}),[]),r.a.createElement("div",{className:M.a.pokemons},r.a.createElement(F.a,{dataLength:o.length,next:function(){i||a||p()},hasMore:f},r.a.createElement("div",{className:M.a["list-container"]},s&&null===m&&r.a.createElement("div",{className:M.a.comparing},r.a.createElement("p",{className:M.a.comparing__title},"Comparing pokemon"),r.a.createElement("p",{className:M.a.comparing__name},l.name.toUpperCase())),r.a.createElement("div",{className:M.a.list},o.map((function(e){return r.a.createElement(W,{key:e.id,pokemon:e})}))))),c&&r.a.createElement("div",{className:M.a.loader},r.a.createElement(B.SyncLoader,{className:M.a.loader__spiner}),r.a.createElement("h2",{className:M.a.loader__text},"Loading...")))})),K=t(30),J=t.n(K),Q=function(e){return r.a.createElement("div",{className:J.a.modal},r.a.createElement("div",{className:J.a.details},e.children))},q=t(9),X=t.n(q),Z=t(2),V=t.n(Z),Y=t(32),$=t(31),ee=t.n($),ae=t(43),te=t.n(ae),ne=function(e){var a=Object(n.useRef)();return Object(n.useEffect)((function(){var t,n=a.current.getContext("2d");t=e.dataset?Object(Y.a)(e.dataset):[{data:[0,0,0,0,0,0]}];var r=["rgba(62, 130, 115)","rgba(102, 209, 188)"],o=r.length;t.forEach((function(e,a){e.categoryPercentage=.8,e.backgroundColor=r[a%o]})),new te.a(n,{labels:"",type:"bar",data:{labels:["hp","attack","defense","special-attack","special-defense","speed"],datasets:Object(Y.a)(t)},options:{legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0,max:100,stepSize:25,padding:5},gridLines:{display:!0,drawBorder:!0,drawOnChartArea:!1,zeroLineColor:"rgb(0,0,0)",color:"rgba(0, 0, 0)",tickMarkLength:5},scaleLabel:{align:"center"}}],xAxes:[{ticks:{padding:5},gridLines:{display:!0,drawBorder:!0,drawOnChartArea:!1,zeroLineColor:"rgb(0,0,0)",color:"rgba(0, 0, 0)",offsetGridLines:!1,tickMarkLength:5},scaleLabel:{align:"center"}}]}}})}),[e.data,e.datal,e.dataset]),r.a.createElement("div",{className:ee.a.graphics__container},r.a.createElement("h2",{className:ee.a.graphics__title},"Stats"),r.a.createElement("canvas",{ref:a}))},re=Object(c.b)((function(e){return e}),(function(e){return{close:function(){return e({type:"STOP_SHOW"})},compare:function(){return e({type:"COMPARE"})}}}))((function(e){var a=e.pokemon,t=e.close,n=e.compare;return r.a.createElement("div",{className:f(V.a,["details__container"])},r.a.createElement("div",{className:X.a.header},r.a.createElement("div",{className:X.a.header__info},r.a.createElement("h2",null,a.name.toUpperCase()),r.a.createElement("button",{className:V.a["button--compare"],onClick:function(){n()}},"Compare to...")),r.a.createElement("button",{className:X.a["button--close"],onClick:function(){t()}},"x")),r.a.createElement("hr",{className:X.a["break-line"]}),r.a.createElement("div",{className:V.a.content},r.a.createElement("div",{className:V.a.info},r.a.createElement("div",{className:V.a["info__img-container"]},r.a.createElement("img",{className:V.a.info__img,src:a.imageUrl,alt:"Pokemon ".concat(a.name)})),r.a.createElement("div",{className:V.a.info__content},r.a.createElement("p",{className:V.a.info__text},a.description),r.a.createElement("hr",null),r.a.createElement("div",{className:V.a.info__attributes},r.a.createElement("div",{className:V.a.info__attribute},r.a.createElement("strong",{className:V.a.info__text},"Height"),r.a.createElement("p",{className:V.a.info__text},a.height,"m")),r.a.createElement("div",{className:V.a.info__attribute},r.a.createElement("strong",{className:V.a.info__text},"Weight"),r.a.createElement("p",{className:V.a.info__text},a.weight,"kg")),r.a.createElement("div",{className:V.a.info__attribute},r.a.createElement("strong",{className:V.a.info__text},"Gender"),r.a.createElement("p",{className:V.a.info__text},a.gender))),r.a.createElement("div",{className:V.a.info__attributes},r.a.createElement("div",{className:V.a.info__attribute},r.a.createElement("strong",{className:V.a.info__text},"Abilities"),r.a.createElement("ul",null,a.abilities.map((function(e,a){return r.a.createElement("li",{key:e+a,className:V.a.info__text},e.ability.name)})))),r.a.createElement("div",{className:V.a.info__attribute},r.a.createElement("strong",{className:V.a.info__text},"Type"),r.a.createElement("ul",null,a.types.map((function(e,a){return r.a.createElement("li",{key:e+a,className:V.a.info__text},e.type.name)}))))))),r.a.createElement("hr",{className:X.a["break-line"]}),r.a.createElement("div",{className:X.a.stats},r.a.createElement(ne,{dataset:[{data:a.stats_data}]}))))})),oe=t(7),ie=t.n(oe),ce=Object(c.b)((function(e){return e}),(function(e){return{close:function(){return e({type:"STOP_COMPARE"})}}}))((function(e){var a=e.pokemonToShow,t=e.pokemonToCompare;return r.a.createElement("div",{className:X.a.details__container},r.a.createElement("div",{className:X.a.header},r.a.createElement("div",{className:X.a.header__info},r.a.createElement("h2",null,(a.name+" vs. "+t.name).toUpperCase())),r.a.createElement("button",{className:X.a["button--close"],onClick:function(){e.close()}},"x")),r.a.createElement("hr",{className:X.a["break-line"]}),r.a.createElement("div",{className:ie.a.content},r.a.createElement("div",{className:ie.a.images},r.a.createElement("img",{className:ie.a.img,src:a.imageUrl,alt:"Pokemon ".concat(a.name)}),r.a.createElement("img",{className:ie.a.img,src:t.imageUrl,alt:"Pokemon ".concat(t.name)})),r.a.createElement("hr",{className:X.a["break-line"]}),r.a.createElement("div",{className:ie.a.info},r.a.createElement("div",{className:ie.a.info__row},r.a.createElement("p",null,a.height,"m"),r.a.createElement("p",{className:ie.a.info__title},"Height"),r.a.createElement("p",null,t.height,"m")),r.a.createElement("div",{className:ie.a.info__row},r.a.createElement("p",null,a.weight,"kg"),r.a.createElement("p",{className:ie.a.info__title},"Weight"),r.a.createElement("p",null,t.weight,"kg")),r.a.createElement("div",{className:ie.a.info__row},r.a.createElement("p",null,a.gender),r.a.createElement("p",{className:ie.a.info__title},"Gender"),r.a.createElement("p",null,t.gender)),r.a.createElement("div",{className:ie.a.info__row},r.a.createElement("div",{className:ie.a.info__abilities},a.abilities.map((function(e,a){return r.a.createElement("p",{className:ie.a.info__ability,key:e+a},e.ability.name)}))),r.a.createElement("p",{className:ie.a.info__title},"Abilities"),r.a.createElement("div",{className:ie.a.info__abilites},t.abilities.map((function(e,a){return r.a.createElement("p",{className:ie.a.info__ability,key:e+a},e.ability.name)}))))),r.a.createElement("hr",{className:X.a["break-line"]})),r.a.createElement("div",{className:ie.a.stats},r.a.createElement(ne,{dataset:[{data:a.stats_data},{data:t.stats_data}]})))})),se=Object(c.b)((function(e){return{isComparing:e.global.isComparing,pokemonToShow:e.global.pokemonToShow,pokemonToCompare:e.global.pokemonToCompare}}))((function(e){var a=e.isComparing,t=e.pokemonToShow,n=e.pokemonToCompare;return a?r.a.createElement(Q,null,r.a.createElement(ce,{pokemonToShow:t,pokemonToCompare:n})):r.a.createElement(Q,null,r.a.createElement(re,{pokemon:t}))})),le=Object(c.b)((function(e){return{isShowing:e.global.isShowing,isSearching:e.global.isSearching,pokemonsList:e.global.pokemonsList,pokemonsFiltered:e.global.pokemonsFiltered}}))((function(e){var a=e.isShowing,t=e.isSearching,n=e.pokemonsList,o=e.pokemonsFiltered,i=t?o:n;return r.a.createElement(x.a,{basename:"/pokemon-react-app"},r.a.createElement(U,null),r.a.createElement(w.c,null,r.a.createElement(w.a,{path:"/pokemons"},r.a.createElement(G,{pokemons:i})),r.a.createElement(w.a,{path:"/"},r.a.createElement(I,null))),a&&r.a.createElement(se,null))})),me=function(){return r.a.createElement(c.a,{store:S},r.a.createElement(le,null))};i.a.render(r.a.createElement(me,null),document.getElementById("root"))},9:function(e,a,t){e.exports={header:"Index_header__1W7Kt",header__info:"Index_header__info__16Lzl","button--close":"Index_button--close__fiWFi","break-line":"Index_break-line__GSb5t"}}},[[44,1,2]]]);
//# sourceMappingURL=main.717225b1.chunk.js.map