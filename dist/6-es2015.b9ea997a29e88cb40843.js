(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"uP/6":function(l,n,e){"use strict";e.r(n);var u=e("8Y7J"),t=e("CmMg");class o{constructor(l){this.apiService=l,this.resposeArray=[],this.lineChartData1=[{data:[0,150,110,240,200,200,300,200,380,300,400,380],label:"Sales"}],this.lineChartLabels1=["January","February","March","April","May","June","July"],this.lineChartOptions1={scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{color:"rgba(0, 0, 0, 0.1)"}}],xAxes:[{gridLines:{color:"rgba(0, 0, 0, 0.1)"}}]},lineTension:10,responsive:!0,maintainAspectRatio:!1,elements:{line:{tension:0}}},this.lineChartColors1=[{backgroundColor:"rgba(6,215,156,0.0)",borderColor:"rgba(57,139,247,1)",pointBackgroundColor:"rgba(57,139,247,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(57,139,247,0.5)"},{backgroundColor:"rgba(57,139,247,0.0)",borderColor:"rgba(57,139,247,1)",pointBackgroundColor:"rgba(57,139,247,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(57,139,247,0.5)"}],this.lineChartLegend1=!1,this.lineChartType1="line",this.doughnutChartLabels=["Tablet","Desktop","Mobile","Other"],this.doughnutChartOptions={borderWidth:1,maintainAspectRatio:!1},this.doughnutChartData=[30,10,40,50],this.doughnutChartType="doughnut",this.doughnutChartLegend=!1,this.lineChartData=[{data:[0,5,6,8,25,9,8,24],label:"Site A"},{data:[0,3,1,2,8,1,5,1],label:"Site B"}],this.lineChartLabels=["1","2","3","4","5","6","7","8"],this.lineChartOptions={scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{color:"rgba(120, 130, 140, 0.13)"}}],xAxes:[{gridLines:{color:"rgba(120, 130, 140, 0.13)"}}]},responsive:!0,maintainAspectRatio:!1},this.lineChartColors=[{backgroundColor:"rgba(6,215,156,0.1)",borderColor:"rgba(6,215,156,1)",pointBackgroundColor:"rgba(6,215,156,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(6,215,156,0.5)"},{backgroundColor:"rgba(57,139,247,0.2)",borderColor:"rgba(57,139,247,1)",pointBackgroundColor:"rgba(57,139,247,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(57,139,247,0.5)"}],this.lineChartLegend=!1,this.lineChartType="line",this.subtitle="This is some text within a card block.",this.getResponse(),this.screenWidth=window.innerWidth,console.log(window.innerWidth)}ngAfterViewInit(){}getResponse(){this.resposeArray=[],this.apiService.getReposnse().subscribe(l=>{this.resposeArray=l&&l.data,this.loaded=!0,console.log(this.resposeArray)})}colorStyle(l){return l&&"Verified"===l.status?"green":"red"}}const r={title:"Dashboard",urls:[{title:"Dashboard",url:"/dashboard"},{title:"Dashboard"}]};class i{}var d=e("pMnS"),a=e("SVse"),s=u["\u0275crt"]({encapsulation:0,styles:[[".header[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width:940px){.pvw-title[_ngcontent-%COMP%]{content:'whatever it is you want to add'}}@media only screen and (min-width:940px){.pvw-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}}"]],data:{}});function c(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"p",[["id","hint"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Swipe Right To View More Details"]))],null,null)}function p(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u["\u0275ted"](2,null,[" "," "])),(l()(),u["\u0275eld"](3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u["\u0275ted"](4,null,["",""])),(l()(),u["\u0275eld"](5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u["\u0275ted"](6,null,["",""])),(l()(),u["\u0275eld"](7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u["\u0275ted"](8,null,["",""])),(l()(),u["\u0275eld"](9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u["\u0275ted"](10,null,["",""])),(l()(),u["\u0275eld"](11,0,null,null,1,"td",[["style","font-weight: bold;"]],[[4,"color",null]],null,null,null,null)),(l()(),u["\u0275ted"](12,null,["",""]))],null,function(l,n){var e=n.component;l(n,2,0,n.context.$implicit.childName),l(n,4,0,n.context.$implicit.age),l(n,6,0,n.context.$implicit.gender),l(n,8,0,n.context.$implicit.city),l(n,10,0,n.context.$implicit.state),l(n,11,0,e.colorStyle(n.context.$implicit)),l(n,12,0,n.context.$implicit.status?n.context.$implicit.status:"Pending")})}function h(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"tr",[["style","color:grey;font-weight:bold;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["No Record Found"]))],null,null)}function g(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,29,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,28,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,27,"div",[["class","card"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,26,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u["\u0275eld"](4,0,null,null,2,"h4",[["class","card-title"]],null,null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,null,0,"span",[["class","lstick"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Covid Orphan Kids Tracker"])),(l()(),u["\u0275and"](16777216,null,null,1,null,c)),u["\u0275did"](8,16384,null,0,a.m,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](9,0,null,null,20,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),u["\u0275eld"](10,0,null,null,19,"table",[["class","table vm no-th-brd pro-of-month mb-0 v-middle"]],null,null,null,null,null)),(l()(),u["\u0275eld"](11,0,null,null,13,"thead",[],null,null,null,null,null)),(l()(),u["\u0275eld"](12,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),u["\u0275eld"](13,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Child Name"])),(l()(),u["\u0275eld"](15,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Age"])),(l()(),u["\u0275eld"](17,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Gender"])),(l()(),u["\u0275eld"](19,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["City"])),(l()(),u["\u0275eld"](21,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["State"])),(l()(),u["\u0275eld"](23,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Status"])),(l()(),u["\u0275eld"](25,0,null,null,4,"tbody",[],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,p)),u["\u0275did"](27,278528,null,0,a.l,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,h)),u["\u0275did"](29,16384,null,0,a.m,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,8,0,e.screenWidth<=850),l(n,27,0,e.resposeArray),l(n,29,0,e.resposeArray&&0===e.resposeArray.length)},null)}function b(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,g,s)),u["\u0275did"](1,4243456,null,0,o,[t.a],null,null)],null,null)}var C=u["\u0275ccf"]("ng-component",o,b,{},{},[]),f=e("s7LF"),m=e("iInd"),v=e("xdbM");e.d(n,"DashboardModuleNgFactory",function(){return y});var y=u["\u0275cmf"](i,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[d.a,C]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,f.z,f.z,[]),u["\u0275mpd"](4608,a.o,a.n,[u.LOCALE_ID,[2,a.D]]),u["\u0275mpd"](1073742336,f.y,f.y,[]),u["\u0275mpd"](1073742336,f.j,f.j,[]),u["\u0275mpd"](1073742336,a.b,a.b,[]),u["\u0275mpd"](1073742336,m.s,m.s,[[2,m.x],[2,m.o]]),u["\u0275mpd"](1073742336,v.ChartsModule,v.ChartsModule,[]),u["\u0275mpd"](1073742336,i,i,[]),u["\u0275mpd"](1024,m.m,function(){return[[{path:"",data:r,component:o}]]},[])])})}}]);