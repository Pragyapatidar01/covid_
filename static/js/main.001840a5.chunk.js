(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{399:function(e,t,c){e.exports={graphContainer:"LineGraph_graphContainer__1JOkG"}},435:function(e,t,c){},436:function(e,t,c){},621:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),r=c(17),n=c.n(r),i=(c(435),c(655)),d=c(642),j=c(643),b=(c(436),c(27)),l=c(72),o=c.n(l),O=(c(341),c(7));var u=function(){var e=Object(a.useState)(),t=Object(b.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(),n=Object(b.a)(r,2),i=n[0],l=n[1],u=Object(a.useState)(),m=Object(b.a)(u,2),h=m[0],x=m[1],f=Object(a.useState)(),v=Object(b.a)(f,2),p=v[0],N=v[1],w=Object(a.useState)(),g=Object(b.a)(w,2),y=g[0],C=g[1],S=Object(a.useState)(),R=Object(b.a)(S,2),k=R[0],T=R[1],D=Object(a.useState)(),_=Object(b.a)(D,2),E=_[0],P=_[1],A=Object(a.useState)(),I=Object(b.a)(A,2),F=I[0],L=I[1],G=Object(a.useState)(),M=Object(b.a)(G,2),q=M[0],J=M[1];return Object(a.useEffect)((function(){o.a.request({method:"GET",url:"https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/India/ind",headers:{"x-rapidapi-key":"0b84bc8a96msh77982fdcfd85153p1d188cjsn5d52d2fa89e1","x-rapidapi-host":"vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"}}).then((function(e){s(e.data[0].ActiveCases),l(e.data[0].NewCases),x(e.data[0].NewDeaths),C(e.data[0].TotalCases),T(e.data[0].TotalDeaths),P(e.data[0].TotalRecovered),N(e.data[0].one_Caseevery_X_ppl),L(e.data[0].Infection_Risk),J(e.data[0].Test_Percentage)})).catch((function(e){console.error(e)}))}),[c]),Object(O.jsxs)("div",{children:[Object(O.jsx)(d.a,{children:Object(O.jsx)(j.a,{sm:!0,children:Object(O.jsx)("div",{className:"world-head",children:"INDIA"})})}),Object(O.jsx)(d.a,{className:"caseevery-text",children:Object(O.jsxs)(j.a,{sm:!0,children:["1 case per ",Object(O.jsx)("span",{className:"caseevery",children:p})," people"]})}),Object(O.jsx)("br",{}),Object(O.jsxs)(d.a,{children:[Object(O.jsx)(j.a,{sm:!0,children:Object(O.jsxs)("div",{className:"india-text",children:[Object(O.jsx)("div",{className:"india-numbers",children:i}),Object(O.jsx)("div",{className:"india-dummy",children:"New Cases"}),Object(O.jsx)("div",{className:"india-numbers",children:c}),Object(O.jsx)("div",{className:"india-dummy",children:"Active Cases"})]})}),Object(O.jsx)(j.a,{sm:!0,children:Object(O.jsxs)("div",{className:"india-text",children:[Object(O.jsx)("div",{className:"india-numbers",children:y}),Object(O.jsx)("div",{className:"india-dummy",children:"Total Cases"}),Object(O.jsx)("div",{className:"india-numbers",children:F}),Object(O.jsx)("div",{className:"india-dummy",children:"Infection Risk"})]})}),Object(O.jsx)(j.a,{sm:!0,children:Object(O.jsxs)("div",{className:"india-text",children:[Object(O.jsx)("div",{className:"india-numbers",children:q}),Object(O.jsx)("div",{className:"india-dummy",children:"Test Percentage"}),Object(O.jsx)("div",{className:"india-numbers",children:E}),Object(O.jsx)("div",{className:"india-dummy",children:"Total Recovered"})]})}),Object(O.jsx)(j.a,{sm:!0,children:Object(O.jsxs)("div",{className:"india-text",children:[Object(O.jsx)("div",{className:"india-numbers",children:h}),Object(O.jsx)("div",{className:"india-dummy",children:"New Deaths"}),Object(O.jsx)("div",{className:"india-numbers",children:k}),Object(O.jsx)("div",{className:"india-dummy",children:"Total Deaths"})]})})]})]})},m=c(26),h=c(399),x=c.n(h),f=c(418);var v=function(){var e=Object(a.useState)({}),t=Object(b.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){!function(){var e=[],t=[];o.a.get("https://api.covid19india.org/data.json").then((function(c){var a,r=Object(m.a)(c.data.cases_time_series);try{for(r.s();!(a=r.n()).done;){var n=a.value;e.push(n.dailyconfirmed),t.push(n.dateymd)}}catch(i){r.e(i)}finally{r.f()}s({labels:t,datasets:[{label:"Cases",data:e,backgroundColor:["rgba(46, 196, 182,0.8)"],borderColor:["rgba(46, 196, 182)"],borderWidth:.5,fill:!0,radius:0}]})})).catch((function(e){console.log(e)})),console.log(e,t)}()}),[]),Object(O.jsx)("div",{className:x.a.graphContainer,children:Object(O.jsx)(f.a,{data:c})})},p=c(644),N={col:{paddingLeft:0,paddingRight:0}};var w=function(e){var t=e.news;return Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)(j.a,{style:N.col,className:"image",children:Object(O.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:Object(O.jsx)("img",{src:t.urlToImage,alt:"",width:"100%",height:"100%"})})}),Object(O.jsx)(j.a,{style:N.col,className:"heading",children:Object(O.jsx)("div",{className:"news-title",children:Object(O.jsx)("a",{href:t.link,className:"news-line",target:"_blank",rel:"noreferrer",children:t.title})})})]})};var g=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){o.a.request({method:"GET",url:"https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0",headers:{"x-rapidapi-key":"0b84bc8a96msh77982fdcfd85153p1d188cjsn5d52d2fa89e1","x-rapidapi-host":"vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"}}).then((function(e){s(e.data.news)})).catch((function(e){console.error(e)}))}),[]),Object(O.jsxs)(p.a,{children:[Object(O.jsx)(d.a,{className:"news-row",children:Object(O.jsxs)(j.a,{className:"covid-news",children:[Object(O.jsx)("h6",{children:"COVID"}),Object(O.jsx)("h2",{children:"NEWS"})]})}),Object(O.jsx)("br",{}),Object(O.jsx)("section",{className:"contents",children:c.map((function(e){return Object(O.jsx)(w,{news:e},e.news_id)}))})]})},y=c(18),C=c(264),S=c.n(C),R=c(404),k=c.n(R),T=c(414),D=c.n(T),_=c(405),E=c.n(_),P=c(412),A=c.n(P),I=c(272),F=c.n(I),L=c(271),G=c.n(L),M=c(406),q=c.n(M),J=c(407),W=c.n(J),z=c(409),B=c.n(z),V=c(410),X=c.n(V),H=c(411),K=c.n(H),Q=c(415),U=c.n(Q),Y=c(408),Z=c.n(Y),$=c(413),ee=c.n($),te=c(416),ce=c.n(te),ae={Add:Object(a.forwardRef)((function(e,t){return Object(O.jsx)(k.a,Object(y.a)(Object(y.a)({},e),{},{ref:t}))})),Check:Object(a.forwardRef)((function(e,t){return Object(O.jsx)(E.a,Object(y.a)(Object(y.a)({},e),{},{ref:t}))})),Clear:Object(a.forwardRef)((function(e,t){return Object(O.jsx)(G.a,Object(y.a)(Object(y.a)({},e),{},{ref:t}))})),Delete:Object(a.forwardRef)((function(e,t){return Object(O.jsx)(q.a,Object(y.a)(Object(y.a)({},e),{},{ref:t}))})),DetailPanel:Object(a.forwardRef)((function(e,t){return Object(O.jsx)(F.a,Object(y.a)(Object(y.a)({},e),{},{ref:t}))})),Edit:Object(a.forwardRef)((function(e,t){return Object(O.jsx)(W.a,Object(y.a)(Object(y.a)({},e),{},{ref:t}))})),Export:Object(a.forwardRef)((function(e,t){return Object(O.jsx)(Z.a,Object(y.a)(Object(y.a)({},e),{},{ref:t}))})),Filter:Object(a.forwardRef)((function(e,t){return Object(O.jsx)(B.a,Object(y.a)(Object(y.a)({},e),{},{ref:t}))})),FirstPage:Object(a.forwardRef)((function(e,t){return Object(O.jsx)(X.a,Object(y.a)(Object(y.a)({},e),{},{ref:t}))})),LastPage:Object(a.forwardRef)((function(e,t){return Object(O.jsx)(K.a,Object(y.a)(Object(y.a)({},e),{},{ref:t}))})),NextPage:Object(a.forwardRef)((function(e,t){return Object(O.jsx)(F.a,Object(y.a)(Object(y.a)({},e),{},{ref:t}))})),PreviousPage:Object(a.forwardRef)((function(e,t){return Object(O.jsx)(A.a,Object(y.a)(Object(y.a)({},e),{},{ref:t}))})),ResetSearch:Object(a.forwardRef)((function(e,t){return Object(O.jsx)(G.a,Object(y.a)(Object(y.a)({},e),{},{ref:t}))})),Search:Object(a.forwardRef)((function(e,t){return Object(O.jsx)(ee.a,Object(y.a)(Object(y.a)({},e),{},{ref:t}))})),SortArrow:Object(a.forwardRef)((function(e,t){return Object(O.jsx)(D.a,Object(y.a)(Object(y.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(a.forwardRef)((function(e,t){return Object(O.jsx)(U.a,Object(y.a)(Object(y.a)({},e),{},{ref:t}))})),ViewColumn:Object(a.forwardRef)((function(e,t){return Object(O.jsx)(ce.a,Object(y.a)(Object(y.a)({},e),{},{ref:t}))}))};var se=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){o.a.get("https://api.covid19india.org/data.json").then((function(e){s(e.data.statewise)})).catch((function(e){console.log(e)}))}),[]),console.log(c),Object(O.jsx)("div",{children:Object(O.jsx)(S.a,{icons:ae,options:{rowStyle:{backgroundColor:"#181818",color:"#cccccc"},headerStyle:{backgroundColor:"#333333",color:"#cccccc"}},localization:{pagination:{},body:{emptyDataSourceMessage:"No records to display"}},title:"Indian States",data:c,columns:[{title:"State",field:"state"},{title:"Active",field:"active"},{title:"Confirmed",field:"confirmed"},{title:"Deaths",field:"deaths"},{title:"Recovered",field:"recovered"}]})})},re=c(0),ne=c(417);var ie=function(){var e=Object(a.useState)(),t=Object(b.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(),n=Object(b.a)(r,2),i=n[0],l=n[1],u=Object(a.useState)(),m=Object(b.a)(u,2),h=m[0],x=m[1],f=Object(a.useState)(),v=Object(b.a)(f,2),N=v[0],w=v[1],g=Object(a.useState)(),y=Object(b.a)(g,2),C=y[0],S=y[1],R=Object(a.useState)(),k=Object(b.a)(R,2),T=k[0],D=k[1],_=Object(a.useState)(),E=Object(b.a)(_,2),P=E[0],A=E[1],I=Object(a.useState)(),F=Object(b.a)(I,2),L=F[0],G=F[1];return Object(a.useEffect)((function(){o.a.request({method:"GET",url:"https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world",headers:{"x-rapidapi-key":"0b84bc8a96msh77982fdcfd85153p1d188cjsn5d52d2fa89e1","x-rapidapi-host":"vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"}}).then((function(e){s(e.data[0].ActiveCases),l(e.data[0].NewCases),x(e.data[0].NewDeaths),w(e.data[0].NewRecovered),S(e.data[0].TotCases_1M_Pop),D(e.data[0].TotalCases),A(e.data[0].TotalDeaths),G(e.data[0].TotalRecovered)})).catch((function(e){console.error(e)}))}),[c]),Object(O.jsx)(p.a,{children:Object(O.jsxs)(d.a,{children:[Object(O.jsx)(j.a,{sm:4,children:Object(O.jsxs)("div",{className:"world-text",children:[Object(O.jsx)("div",{className:"icon",children:Object(O.jsx)(re.b.Provider,{value:{color:"grey",margin:"30px",size:"70px",style:{verticalAlign:"middle"}},children:Object(O.jsx)(ne.a,{})})}),Object(O.jsx)("div",{className:"world-head",children:"WORLD"})]})}),Object(O.jsx)(j.a,{sm:8,children:Object(O.jsxs)(d.a,{children:[Object(O.jsx)(j.a,{sm:!0,children:Object(O.jsxs)("div",{className:"world-text",children:[Object(O.jsx)("div",{className:"world-numbers",children:i}),Object(O.jsx)("div",{className:"world-dummy",children:"New Cases"}),Object(O.jsx)("div",{className:"world-numbers",children:c}),Object(O.jsx)("div",{className:"world-dummy",children:"Active Cases"})]})}),Object(O.jsx)(j.a,{sm:!0,children:Object(O.jsxs)("div",{className:"world-text",children:[Object(O.jsx)("div",{className:"world-numbers",children:C}),Object(O.jsx)("div",{className:"world-dummy",children:"Cases / Million"}),Object(O.jsx)("div",{className:"world-numbers",children:T}),Object(O.jsx)("div",{className:"world-dummy",children:"Total Cases"})]})}),Object(O.jsx)(j.a,{sm:!0,children:Object(O.jsxs)("div",{className:"world-text",children:[Object(O.jsx)("div",{className:"world-numbers",children:h}),Object(O.jsx)("div",{className:"world-dummy",children:"New Deaths"}),Object(O.jsx)("div",{className:"world-numbers",children:P}),Object(O.jsx)("div",{className:"world-dummy",children:"Total Deaths"})]})}),Object(O.jsx)(j.a,{sm:!0,children:Object(O.jsxs)("div",{className:"world-text",children:[Object(O.jsx)("div",{className:"world-numbers",children:N}),Object(O.jsx)("div",{className:"world-dummy",children:"New Recovered"}),Object(O.jsx)("div",{className:"world-numbers",children:L}),Object(O.jsx)("div",{className:"world-dummy",children:"Total Recovered"})]})})]})})]})})};var de=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)(i.a,{className:"world-outer",children:[Object(O.jsx)("div",{className:"world-container",children:Object(O.jsx)(ie,{})}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]}),Object(O.jsx)(i.a,{children:Object(O.jsxs)(d.a,{children:[Object(O.jsxs)(j.a,{sm:!0,children:[Object(O.jsx)(j.a,{sm:!0,className:"india-container",children:Object(O.jsx)(u,{})}),Object(O.jsx)(j.a,{sm:!0,className:"graph-container",children:Object(O.jsx)(v,{})})]}),Object(O.jsxs)(j.a,{sm:!0,className:"table-container",children:[Object(O.jsx)(se,{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]})]})}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)(i.a,{children:Object(O.jsx)(g,{})}),Object(O.jsx)("br",{})]})},je=function(e){e&&e instanceof Function&&c.e(6).then(c.bind(null,1027)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),r(e),n(e)}))};c(620);n.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(de,{})}),document.getElementById("root")),je()}},[[621,1,2]]]);
//# sourceMappingURL=main.001840a5.chunk.js.map