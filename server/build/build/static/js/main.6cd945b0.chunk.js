(this["webpackJsonpdissertation-survey"]=this["webpackJsonpdissertation-survey"]||[]).push([[0],{345:function(e,t,n){},346:function(e,t,n){"use strict";n.r(t);var a,i,r=n(1),o=n.n(r),c=n(52),s=n(51),l=n(58),d=Object(s.b)({name:"stepper",initialState:{currentStep:0},reducers:{nextStep:function(e){e.currentStep++},prevStep:function(e){e.currentStep--},goStep:function(e,t){e.currentStep=t.payload}}}),u=d.actions,p=u.nextStep,j=(u.prevStep,u.goStep),h=d.reducer,x=n(45);!function(e){e.PERSONAL="personal",e.PROFESSIONAL="professional",e.PERCEPTION="perception",e.MATURITY="maturity",e.CULTURE="culture",e.TOOLS="tools",e.BENEFITS="benefits",e.CHALLENGES="challenges"}(a||(a={}));var m,b,O,g,v,f,y,w,C,S,I,k,A,D,T=(i={consentFormAccepted:!1},Object(x.a)(i,a.PROFESSIONAL,{}),Object(x.a)(i,a.PERCEPTION,{}),Object(x.a)(i,a.MATURITY,{}),Object(x.a)(i,a.CULTURE,{}),Object(x.a)(i,a.BENEFITS,{}),Object(x.a)(i,a.CHALLENGES,{}),i),N=Object(s.b)({name:"survey",initialState:T,reducers:{acceptAgreement:function(e){e.consentFormAccepted=!0},resetAgreement:function(e){e.consentFormAccepted=!1},setStepData:function(e,t){var n=t.payload,a=n.key,i=n.stepData;e[a]=i},resetStepData:function(e,t){e[t.payload]={}},resetSurvey:function(){return T}}}),z=N.actions,E=z.setStepData,F=(z.resetStepData,z.acceptAgreement),R=(z.resetAgreement,z.resetSurvey,N.reducer),P=n(126),L=n.n(P),M=n(166),B=n(183),U=n(167),q=n.n(U),W={loading:!1,error:null,success:!1},H=Object(s.b)({name:"save-survey",initialState:W,reducers:{saveSurveyInit:function(e){e.error=null,e.loading=!0,e.success=!1},saveSurveySuccess:function(e){e.loading=!1,e.success=!0},saveSurveyFailure:function(e,t){e.loading=!1,e.error=t.payload},resetSaveSurveyState:function(){return W}}}),Y=H.actions,G=Y.saveSurveyInit,Q=Y.saveSurveySuccess,J=Y.saveSurveyFailure,K=(H.actions.resetSaveSurveyState,H.reducer),X=Object(l.b)({stepper:h,survey:R,save:K}),_=Object(c.a)(Object(s.c)({immutableCheck:!1})),V=Object(s.a)({reducer:X,middleware:_,devTools:!1}),Z=n(29),$=n.n(Z),ee=n(31),te=n(23),ne=n(24),ae=ne.a.div(m||(m=Object(te.a)(["\n  display: grid;\n  grid-template-columns: minmax(200px, 350px) auto;\n  @media (max-width: 1024px) {\n    grid-template-columns: 1fr;\n    grid-template-rows: 80px auto;\n  }\n"]))),ie=ne.a.main(b||(b=Object(te.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n"]))),re=ne.a.div(O||(O=Object(te.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 12px 48px;\n  min-height: calc(100vh - 100px);\n  width: 100%;\n  max-width: 1440px;\n  @media (max-width: 1024px) {\n    min-height: auto;\n    padding: 24px 24px 24px 24px;\n    justify-content: start;\n  }\n"]))),oe=n(353),ce=n(352),se=ne.a.aside(g||(g=Object(te.a)(["\n  background-color: #f9f9f9;\n  padding: 48px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  z-index: 2;\n  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);\n  @media (max-width: 1024px) {\n    display: none;\n  }\n"]))),le=ne.a.div(v||(v=Object(te.a)(["\n  width: 100%;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);\n  z-index: 2;\n  > span {\n    margin-right: 12px;\n    font-size: 16px;\n    font-weight: 600;\n  }\n  @media (min-width: 1023px) {\n    display: none;\n  }\n"]))),de=n(2),ue=function(){var e=Object(ee.b)(),t=Object(ee.c)((function(e){return e.stepper.currentStep})),n=function(t){e(j(t))};return Object(de.jsxs)(de.Fragment,{children:[Object(de.jsxs)(le,{children:[Object(de.jsx)("span",{children:"Step ".concat(t+1,"/").concat(pe.length)}),Object(de.jsx)(oe.a,{style:{width:"70%",maxWidth:"250px"},size:"large",value:t.toString(),onChange:function(e){return n(+e)},children:pe.map((function(e,t){return Object(de.jsx)(oe.a.Option,{value:t.toString(),children:e.title})}))})]}),Object(de.jsx)(se,{children:Object(de.jsx)(ce.a,{current:t,onChange:n,direction:"vertical",children:pe.map((function(e){return Object(de.jsx)(ce.a.Step,{title:e.title,description:e.description})}))})})]})},pe=[{title:"Professional Background",description:""},{title:"DevOps Perception",description:""},{title:"DevOps Maturity",description:""},{title:"DevOps Culture",description:""},{title:"DevOps Benefits",description:""},{title:"DevOps Challenges",description:""}],je=n(182),he=ne.a.div(f||(f=Object(te.a)(["\n  width: 100%;\n  padding: 12px 32px;\n\n  @media (max-width: 1024px) {\n    padding: 24px;\n  }\n\n  .topbar {\n    padding: 12px;\n    border-radius: 4px;\n    background-color: #f9f9f9;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    button {\n      min-width: 50px;\n    }\n    .contact-button {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding: 6px !important;\n      svg {\n        margin-right: 4px;\n      }\n      @media (max-width: 768px) {\n        margin: 6px 0;\n      }\n    }\n    @media (max-width: 768px) {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n  }\n"]))),xe=n(128),me="dpetrov1@sheffield.ac.uk",be=function(){return Object(de.jsx)(he,{children:Object(de.jsxs)("div",{className:"topbar",children:[Object(de.jsxs)(je.a,{type:"link",onClick:function(){var e=document.createElement("textarea");e.innerText=me,document.body.appendChild(e),e.select(),document.execCommand("copy"),e.remove(),B.b.success("Email address was coppied to clipboard!")},size:"small",className:"contact-button",children:[Object(de.jsx)(xe.b,{size:24}),me]}),Object(de.jsxs)(je.a,{type:"link",size:"small",className:"contact-button",href:"https://www.linkedin.com/in/dayanpetrow/",target:"_blank",children:[Object(de.jsx)(xe.a,{size:24}),"Dayan Petrow"]})]})})},Oe=n(25),ge=n(351),ve=n(349),fe=n(350),ye=ne.a.div(y||(y=Object(te.a)(["\n  width: 100%;\n  background-color: #f9f9f9;\n  padding: 8px 12px;\n  margin: 12px 0px 6px 0px;\n  border-radius: 4px;\n  > h3 {\n    letter-spacing: 1;\n    text-transform: uppercase;\n    padding: 0;\n    margin: 0;\n    @media (max-width: 600px) {\n      font-size: 16px;\n      line-height: 20px;\n    }\n  }\n"]))),we=function(e){var t=e.title;return Object(de.jsx)(ye,{children:Object(de.jsx)("h3",{children:t})})},Ce=n(348),Se=n(354),Ie=n(359),ke=function(e){var t=e.options,n=void 0===t?[]:t,a=e.selectedOptions,i=void 0===a?[]:a,o=e.onChange,s=e.disableAdd,l=void 0!==s&&s,d=(e.disabled,e.limit),u=Object(r.useState)([]),p=Object(Oe.a)(u,2),j=p[0],h=p[1],x=Object(r.useState)(""),m=Object(Oe.a)(x,2),b=m[0],O=m[1],g=Object(r.useState)(!1),v=Object(Oe.a)(g,2),f=v[0],y=v[1],w=function(e){O(e.target.value)},C=function(){h([].concat(Object(c.a)(j),[b])),O("")},S=[].concat(Object(c.a)(n),Object(c.a)(j)).filter((function(e){return!i.includes(e)}));return Object(de.jsx)(oe.a,{size:"large",mode:"multiple",placeholder:"Select multiple...",value:i,onChange:function(e){if(y(!1),d&&d<e.length)return y(!0),void B.b.error("You cannot select more than ".concat(d," options."));o(e)},style:{width:"100%"},className:f?"limit-error":"",onBlur:function(){return y(!1)},dropdownRender:l?void 0:function(e){return Object(de.jsxs)("div",{children:[e,Object(de.jsx)(Ce.a,{style:{margin:"4px 0"}}),Object(de.jsxs)("div",{style:{display:"flex",flexWrap:"nowrap",padding:8},children:[Object(de.jsx)(Se.a,{style:{flex:"auto"},value:b,onChange:w}),Object(de.jsxs)("a",{style:{flex:"none",padding:"8px",display:"block",cursor:"pointer"},onClick:C,href:"#",children:[Object(de.jsx)(Ie.a,{})," Add"]})]})]})},children:S.map((function(e){return Object(de.jsx)(oe.a.Option,{value:e,children:e},e)}))})},Ae=(ne.a.main(w||(w=Object(te.a)(["\n  width: 100%;\n  max-width: 1280px;\n"]))),ne.a.div(C||(C=Object(te.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #f9f9f9;\n  padding: 12px 16px;\n  margin-top: 16px;\n  border-radius: 4px;\n  .ant-checkbox-wrapper {\n    margin: 12px 0;\n  }\n  button {\n    height: 48px;\n    width: 300px;\n    font-size: 18px;\n  }\n"])))),De=function(e){return Object(de.jsx)(Ae,{children:e.children})},Te=n(72),Ne=n(175),ze=n(176),Ee=function(e){switch(e){case a.PERSONAL:return Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(Te.e,{})," Personal Information"]});case a.PROFESSIONAL:return Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(Ne.a,{})," Professional Background"]});case a.MATURITY:return Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(Te.a,{})," DevOps Maturity"]});case a.PERCEPTION:return Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(Te.b,{})," DevOps Perception"]});case a.CULTURE:return Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(Te.f,{})," DevOps Culture"]});case a.TOOLS:return Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(Te.d,{})," DevOps Tools"]});case a.BENEFITS:return Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(Te.c,{})," DevOps Benefits"]});case a.CHALLENGES:return Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(ze.a,{})," DevOps Challenges"]});default:return Object(de.jsx)(de.Fragment,{})}},Fe=ne.a.div(S||(S=Object(te.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: 32px;\n  font-weight: 600;\n  letter-spacing: 1;\n  padding: 12px 0;\n  svg {\n    margin-right: 8px;\n  }\n  @media (max-width: 992px) {\n    padding: 24px;\n    justify-content: center;\n  }\n  @media (max-width: 600px) {\n    font-size: 20px;\n  }\n"]))),Re=function(e){var t=e.step;return Object(de.jsx)(Fe,{className:"step-title",children:Ee(t)})},Pe=n(357),Le=ne.a.div(I||(I=Object(te.a)(["\n  min-height: 42px;\n  display: grid;\n  grid-template-columns: 7fr 5fr;\n  padding: 8px 8px;\n  transition: 0.3s ease all;\n\n  @media (max-width: 768px) {\n    margin: 6px 0;\n    border-bottom: 1px solid #e9e9e9;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto;\n  }\n\n  .options {\n    display: grid;\n    grid-template-columns: repeat(5, 2fr);\n  }\n\n  &:hover {\n    transition: 0.3s ease all;\n    background-color: #e8f3ff;\n  }\n  &.headings {\n    font-weight: 600;\n    text-align: center;\n    border-radius: 4px;\n    background-color: #f9f9f9;\n    @media (max-width: 768px) {\n      display: none;\n    }\n  }\n  .option,\n  .ant-radio-wrapper {\n    display: flex;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    margin-right: 2px;\n    > span {\n      padding: 0px;\n    }\n\n    @media (max-width: 769px) {\n      > span {\n        text-align: center;\n      }\n    }\n    @media (max-width: 769px) {\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: center;\n    }\n  }\n  .ant-radio-inner {\n    border: 1px solid #424242;\n  }\n  .label {\n    text-align: center;\n    font-size: 11px;\n    line-height: 11px;\n    @media (min-width: 769px) {\n      display: none;\n    }\n  }\n\n  .title {\n    display: flex;\n    align-items: center;\n  }\n\n  .ant-radio {\n    margin: 4px;\n  }\n"]))),Me=function(e){var t=e.title,n=e.value,a=e.onChange,i=function(e){a(e.target.value)};return Object(de.jsxs)(Le,{children:[Object(de.jsx)("div",{className:"title",children:t}),Object(de.jsx)("div",{className:"options",children:Ue.map((function(e,t){return Object(de.jsx)("div",{className:"option",onClick:function(){return a(e.value)},children:Object(de.jsx)(Pe.a.Group,{onChange:i,value:n,size:"large",style:{width:"100%"},children:Object(de.jsx)(Pe.a,{value:e.value,children:Object(de.jsx)("span",{className:"label",children:Ue[t].label})})})})}))})]})},Be=function(){return Object(de.jsxs)(Le,{className:"headings",children:[Object(de.jsx)("div",{className:"title"}),Object(de.jsx)("div",{className:"options",children:Ue.map((function(e){return Object(de.jsx)("div",{className:"option",children:e.label})}))})]})},Ue=[{value:"1",label:"Strongly Disagree"},{value:"2",label:"Disagree"},{value:"3",label:"Neutral or N/A"},{value:"4",label:"Agree"},{value:"5",label:"Strongly Agree"}],qe=n(93),We=function(e){var t=Object(ee.b)(),n=Object(ee.c)((function(t){return t.survey[e]})),a=Object(r.useState)({}),i=Object(Oe.a)(a,2),o=i[0],c=i[1],s=Object(r.useRef)(o);return Object(r.useEffect)((function(){return c(n),function(){!function(){var n={key:e,stepData:s.current};t(E(n))}()}}),[]),Object(r.useEffect)((function(){s.current=o}),[o]),[o,function(e){var t=e.target,n=t.name,a=t.value;c(Object(qe.a)(Object(qe.a)({},o),{},Object(x.a)({},n,a)))},function(e,t){c(Object(qe.a)(Object(qe.a)({},o),{},Object(x.a)({},e,t)))},function(){t(p())}]},He=function(){var e=We(a.PROFESSIONAL),t=Object(Oe.a)(e,4),n=t[0],i=(t[1],t[2]),r=t[3];return Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(Re,{step:a.PROFESSIONAL}),Object(de.jsxs)(ge.a,{layout:"vertical",className:"step-wrapper",children:[Object(de.jsx)(we,{title:"Your Position"}),Object(de.jsxs)(ve.a,{gutter:[16,16],children:[Object(de.jsx)(fe.a,{xs:24,lg:8,children:Object(de.jsx)(ge.a.Item,{label:"Position",children:Object(de.jsx)(oe.a,{placeholder:"Select one...",onChange:function(e){return i("position",e)},value:null===n||void 0===n?void 0:n.position,size:"large",children:[{value:"1",text:"Software Development"},{value:"2",text:"Cloud/DevOps"},{value:"3",text:"Leadership/Management"},{value:"4",text:"Design"},{value:"5",text:"Testing"},{value:"6",text:"Other"}].map((function(e){return Object(de.jsx)(oe.a.Option,{value:e.value,children:e.text})}))})})}),Object(de.jsx)(fe.a,{xs:24,lg:8,children:Object(de.jsx)(ge.a.Item,{label:"Years of Experience",children:Object(de.jsx)(oe.a,{placeholder:"Select one...",onChange:function(e){return i("experience",e)},value:null===n||void 0===n?void 0:n.experience,size:"large",children:[{value:"1",text:"0-2"},{value:"2",text:"3-5"},{value:"3",text:"6-10"},{value:"4",text:"11-20"},{value:"5",text:"More than 20"}].map((function(e){return Object(de.jsx)(oe.a.Option,{value:e.value,children:e.text})}))})})})]}),Object(de.jsx)(we,{title:"Your Company"}),Object(de.jsxs)(ve.a,{gutter:[16,16],children:[Object(de.jsx)(fe.a,{xs:24,lg:12,xl:8,children:Object(de.jsx)(ge.a.Item,{label:"Company Nationality",children:Object(de.jsx)(oe.a,{placeholder:"Select one...",onChange:function(e){return i("companyNationality",e)},value:null===n||void 0===n?void 0:n.companyNationality,size:"large",children:[{value:"1",text:"Bulgarian and operates in Bulgaria"},{value:"2",text:"Bulgarian and operates internationally"},{value:"3",text:"Multinational"}].map((function(e){return Object(de.jsx)(oe.a.Option,{value:e.value,children:e.text})}))})})}),Object(de.jsx)(fe.a,{xs:24,lg:12,xl:8,children:Object(de.jsx)(ge.a.Item,{label:"Company Size",children:Object(de.jsx)(oe.a,{placeholder:"Select one...",onChange:function(e){return i("companySize",e)},value:null===n||void 0===n?void 0:n.companySize,size:"large",children:[{value:"1",text:"1-19"},{value:"2",text:"20-99"},{value:"3",text:"100-249"},{value:"4",text:"250-499"},{value:"5",text:"500-1999"},{value:"6",text:"More than 2000"}].map((function(e){return Object(de.jsx)(oe.a.Option,{value:e.value,children:e.text})}))})})}),Object(de.jsx)(fe.a,{xs:24,lg:12,xl:8,children:Object(de.jsx)(ge.a.Item,{label:"Company Orientation",children:Object(de.jsx)(oe.a,{placeholder:"Select one...",onChange:function(e){return i("companyOrientation",e)},value:null===n||void 0===n?void 0:n.companyOrientation,size:"large",children:[{value:"1",text:"Service"},{value:"2",text:"Product"},{value:"3",text:"Mixed"}].map((function(e){return Object(de.jsx)(oe.a.Option,{value:e.value,children:e.text})}))})})})]}),Object(de.jsx)(De,{children:Object(de.jsx)(je.a,{type:"primary",onClick:r,size:"large",children:"Next"})})]})]})},Ye=function(){var e=We(a.PERCEPTION),t=Object(Oe.a)(e,4),n=t[0],i=t[1],r=t[2],o=t[3];return Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(Re,{step:a.PERCEPTION}),Object(de.jsxs)(ge.a,{layout:"vertical",className:"step-wrapper",children:[Object(de.jsx)(ve.a,{gutter:[16,16],children:Object(de.jsx)(fe.a,{span:24,children:Object(de.jsx)(ge.a.Item,{label:"What is your definition of DevOps?",children:Object(de.jsx)(Se.a.TextArea,{autoSize:{minRows:2,maxRows:6},onChange:i,name:"devOpsDefinition",value:null===n||void 0===n?void 0:n.devOpsDefinition,placeholder:"Describe DevOps?",size:"large"})})})}),Object(de.jsx)(ve.a,{gutter:[16,16],children:Object(de.jsx)(fe.a,{xs:24,xl:24,children:Object(de.jsx)(ge.a.Item,{label:"How would you describe DevOps in relation to Agile?",children:Object(de.jsx)(oe.a,{placeholder:"Select one...",value:null===n||void 0===n?void 0:n.agileRelation,onChange:function(e){return r("agileRelation",e)},size:"large",children:[{value:"0",text:"DevOps has no relation with Agile"},{value:"1",text:"DevOps aims to replace Agile"},{value:"2",text:"DevOps extends Agile"},{value:"3",text:"I don't know"}].map((function(e){return Object(de.jsx)(oe.a.Option,{value:e.value,children:e.text})}))})})})}),Object(de.jsx)(De,{children:Object(de.jsx)(je.a,{type:"primary",onClick:o,size:"large",children:"Next"})})]})]})},Ge=function(){var e=We(a.MATURITY),t=Object(Oe.a)(e,4),n=t[0],i=(t[1],t[2]),r=t[3];return Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(Re,{step:a.MATURITY}),Object(de.jsxs)(ge.a,{layout:"vertical",className:"step-wrapper",children:[Object(de.jsxs)(ve.a,{gutter:[16,16],children:[Object(de.jsx)(fe.a,{xs:24,xl:12,children:Object(de.jsx)(ge.a.Item,{label:"How long does it take to go from code committed to code successfully running in production?",children:Object(de.jsx)(oe.a,{placeholder:"Select one...",onChange:function(e){return i("leadTime",e)},value:null===n||void 0===n?void 0:n.leadTime,size:"large",children:[{value:"0",text:"More than one month"},{value:"2",text:"One week to one month"},{value:"4",text:"One day to one week"},{value:"6",text:"Less than one day"},{value:"8",text:"Less than one hour"}].map((function(e){return Object(de.jsx)(oe.a.Option,{value:e.value,children:e.text})}))})})}),Object(de.jsx)(fe.a,{xs:24,xl:12,children:Object(de.jsx)(ge.a.Item,{label:"How often does your team deploy code to production?",children:Object(de.jsx)(oe.a,{placeholder:"Select one...",onChange:function(e){return i("deploymentFrequency",e)},value:null===n||void 0===n?void 0:n.deploymentFrequency,size:"large",children:[{value:"8",text:"Multiple deploys per day or on demand"},{value:"6",text:"Once per day"},{value:"4",text:"Multiple deploys per week"},{value:"2",text:"Between once per week and once per month"},{value:"0",text:"Fewer than once per month"}].map((function(e){return Object(de.jsx)(oe.a.Option,{value:e.value,children:e.text})}))})})})]}),Object(de.jsxs)(ve.a,{gutter:[16,16],children:[Object(de.jsx)(fe.a,{xs:24,xl:12,children:Object(de.jsx)(ge.a.Item,{label:"How long does it take to restore a service after an infrastructure incident or defect?",children:Object(de.jsx)(oe.a,{placeholder:"Select one...",onChange:function(e){return i("timeToRestore",e)},value:null===n||void 0===n?void 0:n.timeToRestore,size:"large",children:[{value:"0",text:"More than a month"},{value:"2",text:"One week to one month"},{value:"4",text:"One day to one week"},{value:"6",text:"Less than one day"},{value:"8",text:"Less than one hour"}].map((function(e){return Object(de.jsx)(oe.a.Option,{value:e.value,children:e.text})}))})})}),Object(de.jsx)(fe.a,{xs:24,xl:12,children:Object(de.jsx)(ge.a.Item,{label:"What percentage of production changes result in degraded service?",tooltip:"Production changes that cause issues and later require additional work be resolved, including hotfixes, bugfixes, UX improvements, etc",children:Object(de.jsx)(oe.a,{placeholder:"Select one...",onChange:function(e){return i("changeFailPercentage",e)},value:null===n||void 0===n?void 0:n.changeFailPercentage,size:"large",children:[{value:"10",text:"0\u201315%"},{value:"8",text:"16\u201330%"},{value:"6",text:"31\u201345%"},{value:"4",text:"46\u201360%"},{value:"2",text:"61\u201375%"},{value:"0",text:"76\u2013100%"}].map((function(e){return Object(de.jsx)(oe.a.Option,{value:e.value,children:e.text})}))})})})]}),Object(de.jsxs)(ve.a,{gutter:[16,16],children:[Object(de.jsx)(fe.a,{xs:24,xl:12,children:Object(de.jsx)(ge.a.Item,{label:"Who has the responsibility for creating and maintaining your team's CI/CD toolchain?",children:Object(de.jsx)(oe.a,{placeholder:"Select one...",onChange:function(e){return i("toolchainResponsibility",e)},value:null===n||void 0===n?void 0:n.toolchainResponsibility,size:"large",children:[{value:"4",text:"My team has full autonomy to choose and configure its own toolchain"},{value:"3",text:"The toolchain is maintained by a centralized team within my company"},{value:"2",text:"My team uses a toolchain with preconfigured scripts, and we have the ability to override it"},{value:"1",text:"Other"}].map((function(e){return Object(de.jsx)(oe.a.Option,{value:e.value,children:e.text})}))})})}),Object(de.jsx)(fe.a,{xs:24,xl:12,children:Object(de.jsx)(ge.a.Item,{label:"Which tools are part of your team's toolchain?",children:Object(de.jsx)(ke,{selectedOptions:n.toolchainIncludes,onChange:function(e){return i("toolchainIncludes",e)},options:["Automated unit tests","Automated build","Automated deployment to testing environments","Automated deployment to production","Automated performance testing","Automated security testing","Automated acceptance testing","Integration with monitoring tools","Integration with logging tools"]})})})]}),Object(de.jsx)(Be,{}),Object(de.jsx)(Me,{title:"My team has the ability to deploy our system to production at any time, on demand",onChange:function(e){return i("onDemandDeployment",e)},value:n.onDemandDeployment}),Object(de.jsx)(Me,{title:"My team can release software to production during normal business hours with negligible downtime",onChange:function(e){return i("businessHoursDeployments",e)},value:n.businessHoursDeployments}),Object(de.jsx)(Me,{title:"Code commits results in automated tests being run and an automated build of the system",onChange:function(e){return i("commitAutomation",e)},value:n.commitAutomation}),Object(de.jsx)(Me,{title:"Failing tests will prevent a commit to progress through the pipeline",onChange:function(e){return i("failingTests",e)},value:n.failingTests}),Object(de.jsx)(Me,{title:"My team actively identifies and automates repetitive manual work",onChange:function(e){return i("activelyAutomates",e)},value:n.activelyAutomates}),Object(de.jsx)(Me,{title:"My team has predefined protocols for handling production incidents",onChange:function(e){return i("productionIncidents",e)},value:n.productionIncidents}),Object(de.jsx)(Me,{title:"My team has access to tools that help us understand, trace and diagnose system and infrastructure problems",onChange:function(e){return i("monitoringIssues",e)},value:n.monitoringIssues}),Object(de.jsx)(Me,{title:"My team has access to tools that monitor key business and system metrics",onChange:function(e){return i("monitorMetrics",e)},value:n.monitorMetrics}),Object(de.jsx)(Me,{title:"Security reviews are regularly performed during the development process",onChange:function(e){return i("securityReviews",e)},value:n.securityReviews}),Object(de.jsx)(Me,{title:"Most of the code for the product I work on is documented and I can easily access and find the documentation that I need",onChange:function(e){return i("documentation",e)},value:n.documentation}),Object(de.jsx)(Me,{title:"My team prioritizes keeping the software in deployable state over development of new features",onChange:function(e){return i("deployableState",e)},value:n.deployableState}),Object(de.jsx)(De,{children:Object(de.jsx)(je.a,{type:"primary",onClick:r,size:"large",children:"Next"})})]})]})},Qe=function(){var e=We(a.CULTURE),t=Object(Oe.a)(e,4),n=t[0],i=(t[1],t[2]),r=t[3];return Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(Re,{step:a.CULTURE}),Object(de.jsx)(Be,{}),Object(de.jsxs)(ge.a,{layout:"vertical",className:"step-wrapper",children:[Object(de.jsx)(we,{title:"In my organization..."}),Object(de.jsx)(Me,{title:"Teams are generally cross-functional (developers, designers, QAs and business analysts work together in the same team)",onChange:function(e){return i("multidiscplinaryTeams",e)},value:n.multidiscplinaryTeams}),Object(de.jsx)(Me,{title:"Cross-functional collaboration is encouraged",onChange:function(e){return i("collaboration",e)},value:n.collaboration}),Object(de.jsx)(Me,{title:"Open communication and knowledge sharing is encouraged",onChange:function(e){return i("communication",e)},value:n.communication}),Object(de.jsx)(Me,{title:"Initiative and ideas are welcomed",onChange:function(e){return i("initiative",e)},value:n.initiative}),Object(de.jsx)(Me,{title:"Teams have the freedom to choose their technology stack independently from other teams depending on business requirements",onChange:function(e){return i("technologyStack",e)},value:n.technologyStack}),Object(de.jsx)(we,{title:"In my team..."}),Object(de.jsx)(Me,{title:"There is a feeling of shared ownership and responsibility",onChange:function(e){return i("sharedResponsibility",e)},value:n.sharedResponsibility}),Object(de.jsx)(Me,{title:"Failures are generally treated as learning and improvement opportunities",onChange:function(e){return i("failures",e)},value:n.failures}),Object(de.jsx)(Me,{title:"I feel comfortable sharing a different perspective, opinion or approach on a work issue",onChange:function(e){return i("differentPerspective",e)},value:n.differentPerspective}),Object(de.jsx)(Me,{title:"I don't need to communicate and coordinate with people outside of my team to complete my work",onChange:function(e){return i("outsideCommunication",e)},value:n.outsideCommunication}),Object(de.jsx)(Me,{title:"I feel connected with my team members",onChange:function(e){return i("teamConnection",e)},value:n.teamConnection}),Object(de.jsx)(De,{children:Object(de.jsx)(je.a,{type:"primary",onClick:r,size:"large",children:"Next"})})]})]})},Je=function(){var e=We(a.BENEFITS),t=Object(Oe.a)(e,4),n=t[0],i=t[1],r=t[2],o=t[3];return Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(Re,{step:a.BENEFITS}),Object(de.jsxs)(ge.a,{layout:"vertical",className:"step-wrapper",children:[Object(de.jsx)(ve.a,{gutter:[16,16],children:Object(de.jsx)(fe.a,{span:24,children:Object(de.jsx)(ge.a.Item,{label:"What are the most important benefts of DevOps on a company level? (maximum 3)",children:Object(de.jsx)(ke,{options:["Competitive advantage","Faster time-to-market","Ability to develop software faster","Quality of products and services provided","Quantity of products and services provided","Improved customer experience","Operational efficiency","Cost reduction","Rapid delivery cycle","Scalability","Responsiveness to customer needs","Quicker innovation"],selectedOptions:null===n||void 0===n?void 0:n.organizationalBenefits,onChange:function(e){return r("organizationalBenefits",e)},limit:3,disableAdd:!0})})})}),Object(de.jsx)(ve.a,{gutter:[16,16],children:Object(de.jsx)(fe.a,{span:24,children:Object(de.jsx)(ge.a.Item,{label:"What are the most important benefits of DevOps on a project/team level? (maximum 3)",children:Object(de.jsx)(ke,{options:["Higher productivity","Higher motivation and engagement","Improved communication & collaboration between team members","Reduce infrastructure problems","Automation of repetitive work, focus on development","Risk mitigation","Improved incident handling","Rolling back to previous build versions","Continuous customer feedback","Lower failure rate of new releases","Improved code quality","Rapid delivery cycle","Scalability","Improved deployment frequency","Alignment and unification of goals","Sense of shared ownership and responsibility  between team members"],selectedOptions:null===n||void 0===n?void 0:n.projectBenefits,onChange:function(e){return r("projectBenefits",e)},limit:3,disableAdd:!0})})})}),Object(de.jsx)(ve.a,{gutter:[16,16],children:Object(de.jsx)(fe.a,{span:24,children:Object(de.jsx)(ge.a.Item,{label:"Could you think of any other DevOps benefits that were not listed above?",children:Object(de.jsx)(Se.a.TextArea,{autoSize:{minRows:2,maxRows:6},onChange:i,name:"otherBenefits",value:null===n||void 0===n?void 0:n.otherBenefits,placeholder:"Other benefits...",size:"large"})})})}),Object(de.jsx)(De,{children:Object(de.jsx)(je.a,{type:"primary",onClick:o,size:"large",children:"Next"})})]})]})},Ke=n(125),Xe=n.n(Ke),_e=function(){var e=Object(r.useState)(!1),t=Object(Oe.a)(e,2),n=t[0],i=t[1],o=We(a.CHALLENGES),c=Object(Oe.a)(o,4),s=c[0],l=c[1],d=c[2],u=(c[3],Object(ee.b)()),p=Object(ee.c)((function(e){return e.save}));return Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(Re,{step:a.CHALLENGES}),Object(de.jsxs)(ge.a,{layout:"vertical",className:"step-wrapper",children:[Object(de.jsx)(ve.a,{gutter:[16,16],children:Object(de.jsx)(fe.a,{span:24,children:Object(de.jsx)(ge.a.Item,{label:"What challenges do you associate DevOps with on a company level? (maximum 3)",children:Object(de.jsx)(ke,{options:["Coping with cultural changes","Upskilling current staff","Recruitment","Changing technology stack","Transition to DevOps way of working","Transitioning legacy infrastructure/projects to DevOps"],selectedOptions:null===s||void 0===s?void 0:s.organizationalChallenges,onChange:function(e){return d("organizationalChallenges",e)},limit:3,disableAdd:!0})})})}),Object(de.jsx)(ve.a,{gutter:[16,16],children:Object(de.jsx)(fe.a,{span:24,children:Object(de.jsx)(ge.a.Item,{label:"What challenges do you associate DevOps with on a team level? (maximum 3)",children:Object(de.jsx)(ke,{options:["Changing technology stack","Coping with changing requirements","Complexity of the tools and technologies","Too many tools in existence","Lack of documentation/resources"],selectedOptions:null===s||void 0===s?void 0:s.teamChallenges,onChange:function(e){return d("teamChallenges",e)},limit:3,disableAdd:!0})})})}),Object(de.jsx)(ve.a,{gutter:[16,16],children:Object(de.jsx)(fe.a,{span:24,children:Object(de.jsx)(ge.a.Item,{label:"Could you think of any DevOps challenges that were not listed above?",children:Object(de.jsx)(Se.a.TextArea,{autoSize:{minRows:2,maxRows:6},onChange:l,name:"otherBenefits",value:null===s||void 0===s?void 0:s.otherChallenges,placeholder:"Other challenges...",size:"large"})})})}),Object(de.jsxs)(De,{children:[Object(de.jsx)(Xe.a,{onChange:function(e){i(e.target.checked)},value:n,children:"I am ready to submit my responses."}),Object(de.jsx)(je.a,{type:"primary",onClick:function(){return u(function(){var e=Object(M.a)(L.a.mark((function e(t,n){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(G()),e.prev=1,a=n().survey,e.next=5,q.a.post("/api/response",a);case 5:t(Q()),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(J(e.t0)),B.b.error("We failed to save your responses!");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}())},size:"large",disabled:!n,loading:p.loading,children:"Complete Questionnaire"})]})]})]})},Ve=n(111),Ze=function(e){switch(e+1){case 1:return Object(de.jsx)(He,{});case 2:return Object(de.jsx)(Ye,{});case 3:return Object(de.jsx)(Ge,{});case 4:return Object(de.jsx)(Qe,{});case 5:return Object(de.jsx)(Je,{});case 6:return Object(de.jsx)(_e,{});default:return Object(de.jsx)("h1",{children:"Step not found!"})}},$e=function(){var e=Object(ee.c)((function(e){return e.stepper.currentStep}));return Object(r.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[e]),Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(Ve.a,{children:Object(de.jsxs)("title",{children:["".concat(e+1,"/6")," DevOps Research"]})}),Object(de.jsxs)(ae,{children:[Object(de.jsx)(ue,{}),Object(de.jsxs)(ie,{children:[Object(de.jsx)(be,{}),Object(de.jsx)(re,{children:Ze(e)})]})]})]})},et=n(355),tt=n(358),nt=ne.a.div(k||(k=Object(te.a)(["\n  width: 100%;\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 64px 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  header {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    img {\n      width: 250px;\n    }\n    .title {\n      text-align: center;\n      font-size: 32px;\n      padding: 6px;\n      margin: 0;\n      line-height: 44px;\n      width: 80%;\n      margin: 0 auto;\n      @media (max-width: 992px) {\n        font-size: 28px;\n        line-height: 32px;\n      }\n      @media (max-width: 600px) {\n        font-size: 22px;\n        line-height: 25px;\n      }\n    }\n  }\n\n  .consent-wrapper {\n    width: 100%;\n    padding: 32px 6px 6px 6px;\n    max-width: 580px;\n    p {\n      margin-bottom: 6px;\n    }\n    .agreement {\n      padding: 12px;\n      width: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n  }\n"]))),at=n.p+"static/media/logo.f29c8fa8.png",it=et.a.Panel,rt=["I have read and understood the project information sheet dated 20/07/2021 or the project has been fully explained to me.","I have been given the opportunity to ask questions about the project.","I agree to take part in the project. I understand that taking part in the project will include completing a questionnaire. I understand that the questionnaire is expected to take approximately 10 to 15 minutes to complete.\n","I understand that my survey responses are completely anonymous. I understand that once the questionnaire is submitted the researchers will not be able to identify or remove my responses.\n","I understand and agree that my words may be quoted in publications, reports, web pages, and other research outputs. I understand that I will not be named in these outputs.\n","I understand that taking part is voluntary and that I can withdraw from the study at any time before the submission of the questionnaire. I do not have to give any reasons for why I no longer want to take part and there will be no adverse consequences if I choose to withdraw.\n","I understand that by choosing to participate as a volunteer in this research, this does not create a legally binding agreement nor is it intended to create an employment relationship with the University of Sheffield.\n"],ot=function(){var e=Object(r.useState)(!1),t=Object(Oe.a)(e,2),n=t[0],a=t[1],i=Object(ee.b)();return Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(be,{}),Object(de.jsxs)(nt,{children:[Object(de.jsxs)("header",{children:[Object(de.jsx)("img",{src:at,alt:"logo"}),Object(de.jsx)("div",{className:"title-wrapper",children:Object(de.jsx)("h1",{className:"title",children:"Investigation of the adoption of DevOps practices and related challenges in the Bulgarian Software Development Industry"})})]}),Object(de.jsxs)("div",{className:"consent-wrapper",children:[Object(de.jsxs)(et.a,{defaultActiveKey:["1"],accordion:!1,children:[Object(de.jsxs)(it,{header:"Project Information (20/07/2021)",children:[Object(de.jsx)("p",{children:"This research aims to investigate the adoption of DevOps practices and related challenges in the Bulgarian Software Industry. The motivation for the research is that despite the growing popularity of DevOps on a global level it remains an under-researched area with very limited quantity of academic resources. In addition, there is no research that explores the DevOps phenomenon in the context of the Bulgarian Software Industry. We believe that the concentration of international companies in Bulgaria will serve towards forming a common knowledge and understanding of DevOps. The objective of this research is to answer the following questions:"}),Object(de.jsxs)("ul",{children:[Object(de.jsx)("li",{children:"What is the most common definition of DevOps?"}),Object(de.jsx)("li",{children:"What is the perception of DevOps in relation to Agile?"}),Object(de.jsx)("li",{children:"What is the state of technical DevOps adoption and maturity?"}),Object(de.jsx)("li",{children:"What is the state of DevOps cultural adoption?"}),Object(de.jsx)("li",{children:"What are the most common benefits and challenges on organizational and team/project levels?"}),Object(de.jsx)("li",{children:"Is there a relation between company nationality, size and orientation and DevOps technical maturity and cultural adoption?"})]})]},"1"),Object(de.jsx)(it,{header:"Consent Agreement",children:rt.map((function(e){return Object(de.jsx)("p",{children:e})}))},"2")]}),Object(de.jsx)("div",{className:"agreement",children:Object(de.jsx)(tt.a,{onChange:function(e){a(e.target.checked)},value:n,children:"I have read and understood the Consent Agreement."})})]}),Object(de.jsx)("div",{children:Object(de.jsx)(je.a,{type:"primary",block:!0,disabled:!n,onClick:function(){return i(F())},size:"large",children:"Continue"})})]})]})},ct=n(356),st=Object(ne.b)(A||(A=Object(te.a)(["\n    0% { opacity: 0; transform: scale(0.5) },\n    100% { opacity: 1; transform: scale(1) }\n"]))),lt=ne.a.div(D||(D=Object(te.a)(["\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  > div {\n    animation-name: ",";\n    animation-duration: 0.5s;\n  }\n"])),st),dt=function(){return Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(Ve.a,{children:Object(de.jsx)("title",{children:"Thank you!"})}),Object(de.jsxs)(lt,{children:[Object(de.jsx)(ct.a,{status:"success",title:"Thank you!",subTitle:"The questionnaire was completed successfully!"}),","]})]})},ut=function(){var e=Object(ee.c)((function(e){return e.survey.consentFormAccepted}));return Object(ee.c)((function(e){return e.save.success}))?Object(de.jsx)(dt,{}):Object(de.jsx)(de.Fragment,{children:e?Object(de.jsx)($e,{}):Object(de.jsx)(ot,{})})},pt=(n(344),n(345),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,360)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),r(e),o(e)}))});$.a.render(Object(de.jsx)(o.a.StrictMode,{children:Object(de.jsx)(ee.a,{store:V,children:Object(de.jsx)(ut,{})})}),document.getElementById("root")),pt()}},[[346,1,2]]]);
//# sourceMappingURL=main.6cd945b0.chunk.js.map