(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{217:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(219);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},218:function(e,t,a){"use strict";a(56);var n=a(51),r=a(5);t.__esModule=!0,t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},t.PageRenderer=t.StaticQuery=t.StaticQueryContext=void 0;var i=r(a(1)),u=r(a(0)),o=n(a(227));t.Link=o.default,t.withPrefix=o.withPrefix,t.push=o.push,t.replace=o.replace,t.navigateTo=o.navigateTo;var l=r(a(224)),s=r(a(53)),c=r(a(223)),d=function(e){var t=e.location,a=s.default.getResourcesForPathname(t.pathname);return i.default.createElement(c.default,{pages:l.default,location:t,pageResources:a})};t.PageRenderer=d,d.propTypes={location:u.default.shape({pathname:u.default.string.isRequired}).isRequired};var p=i.default.createContext({});t.StaticQueryContext=p;var m=function(e){return i.default.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=m,m.propTypes={data:u.default.object,query:u.default.string.isRequired,render:u.default.func,children:u.default.func}},219:function(e,t,a){"use strict";var n=a(225),r=a(1),i=a.n(r),u=a(0),o=a.n(u),l=a(228),s=a.n(l),c=a(218),d=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},p=(a(221),function(e){var t=e.children;return e.data,i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"GMentor - найди своего Ментора."},{name:"keywords",content:"ментор, ментор это, менторство это, gmentor, курсы программирования, обучение программированию, программирование с нуля, онлайн курсы, программирование, уроки программирования, веб программирование, курс онлайн"}]}),i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});p.propTypes={children:o.a.element.isRequired},t.a=p},221:function(e,t,a){},222:function(e,t,a){"use strict";var n=a(5);t.__esModule=!0,t.default=function(){return null},t.getIsInitialized=t.getPageQueryData=t.getStaticQueryData=void 0,n(a(50));var r={},i={};t.getStaticQueryData=function(){return r},t.getPageQueryData=function(){return i},t.getIsInitialized=function(){return!1}},223:function(e,t,a){"use strict";var n=a(51),r=a(5);t.__esModule=!0,t.default=void 0;var i=r(a(50)),u=r(a(226)),o=r(a(33)),l=r(a(52)),s=r(a(54)),c=r(a(1)),d=r(a(105)),p=a(218),m=n(a(222)),f=function(e){var t,a;return null===(t=e.pageResources)||void 0===t?void 0:null===(a=t.page)||void 0===a?void 0:a.path},h=function(e){function t(t){var a;return a=e.call(this,t)||this,(0,s.default)((0,l.default)((0,l.default)(a)),"handleMittEvent",function(e,t){}),a.state={staticQueryData:(0,m.getStaticQueryData)(),pageQueryData:(0,m.getPageQueryData)(),path:null},a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.componentWillUnmount=function(){},a.componentDidUpdate=function(){var e=this.state.path,t=f(this.props);e!==t&&(this.unregisterPath(e),this.registerPath(t))},a.registerPath=function(e){},a.unregisterPath=function(e){},a.render=function(){var e=this.state.pageQueryData[f(this.props)],t=this.props,a=(t.pages,(0,u.default)(t,["pages"]));return e?c.default.createElement(p.StaticQueryContext.Provider,{value:this.state.staticQueryData},c.default.createElement(d.default,(0,i.default)({},a,e))):c.default.createElement("div",null)},t}(c.default.Component);t.default=h},224:function(e){e.exports=[{componentChunkName:"component---src-pages-404-js",jsonName:"404-22d",path:"/404/"},{componentChunkName:"component---src-pages-index-js",jsonName:"index",path:"/"},{componentChunkName:"component---src-pages-page-2-js",jsonName:"page-2-fbc",path:"/page-2/"},{componentChunkName:"component---src-pages-404-js",jsonName:"404-html-516",path:"/404.html"}]},225:function(e){e.exports={data:{site:{siteMetadata:{title:"GMentor - найти своего Ментора"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-ed421ebbf89d74429a77.js.map