import{r as c,a as N,j as a,F as p,d as g,L as v}from"./vendor.07a30449.js";import{R as b}from"./index.d60a0a5e.js";const C=(e,t)=>{const{onComplete:o=d=>{},success:l=d=>{},error:m=d=>{},...u}=e,[w,i]=c.exports.useState(null),[h,r]=c.exports.useState(!1),[x,f]=c.exports.useState(!0);return c.exports.useEffect(function(){let d=N.CancelToken.source();return r(!1),f(!0),window.api(u).then(s=>{if(b(),o(s),l(s),t)if(typeof t=="function")i(t(s));else if(typeof t=="string")i(s.data[t]);else throw{response:{data:{message:"Please select responsekey as funciton or string"}}};else i(s.data);r(!0),f(!1)}).catch(s=>{window.Notify({status:"error",message:window.handleError(s)}),o(s),m(s),r(!0),f(!1)}),function(){d.cancel("Cancelling in cleanup")}},[]),{data:w,setData:i,loadingDone:h,isLoading:x}},D=()=>{const[e,t]=c.exports.useState(null),[o,l]=c.exports.useState(!1),[m,u]=c.exports.useState(!1);return{data:e,setData:t,loadingDone:o,isLoading:m,callback:function(i,h){const{onComplete:r=n=>{},success:x=n=>{},error:f=n=>{},...d}=i;let s=N.CancelToken.source();return l(!1),u(!0),window.api(d).then(n=>{b(),r(n),x(n),t(h?n.data[h]:n.data),l(!0),u(!1)}).catch(n=>{window.Notify({status:"error",message:window.handleError(n)}),r(n),f(n),l(!0),u(!1)}),function(){s.cancel("Cancelling in cleanup")}}}},y=e=>{let{loadingDone:t=!0,className:o="",style:l={},...m}=e;return a(p,{children:t?g("div",{className:"card "+o,style:{borderRadius:"7px",overflow:"hidden",...l},children:[e.title&&a("div",{className:"card-header",children:g("h4",{className:"card-title",children:[e.iconLeft&&a("i",{style:{paddingRight:"5px"},className:e.iconLeft}),e.title,e.button&&a(v,{to:e.button.link,children:g("button",{type:"button",className:"btn btn-dark  float-right","aria-haspopup":"true","aria-expanded":"false",children:[a("i",{className:"fa fa-plus"}),"\xA0",e.button.name]})})]})}),a("div",{className:"card-content collapse show",children:a("div",{className:"card-body card-dashboard pt-0",children:e.children})})]}):g("div",{className:"w3samples_table_loader p-2 mb-2",children:[e.title&&a("div",{className:"row mb-1",children:a("div",{className:"col-sm-4",children:a("span",{className:"large"})})}),a("div",{className:"row",children:a("div",{className:"col-sm-12",children:a("span",{className:"large",style:{minHeight:"200px"}})})})]})})};export{y as C,C as a,D as u};