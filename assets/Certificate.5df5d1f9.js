import{o as g,g as u,r as s,j as e,F as f,d as a}from"./vendor.07a30449.js";import{u as N}from"./useFetch.33a611d7.js";import{A as b,p as y}from"./index.232ae780.js";const k=()=>{const{id:r}=g(),l=u().search,n=s.exports.useRef(null),{isLoading:v,loadingDone:t,callback:o}=N(),[i,m]=s.exports.useState(null),[x,p]=s.exports.useState(!1);let[d,h]=s.exports.useState(null);return s.exports.useEffect(()=>(new URLSearchParams(l).get("print")&&p(!0),document.body.classList.add("certificate-page"),()=>{document.body.classList.remove("certificate-page")}),[]),s.exports.useEffect(()=>{o({url:b+"/"+r,method:"get",success:c=>{m(c.data)}})},[]),s.exports.useEffect(()=>{t&&h(n.current.innerText)},[t]),e(f,{children:a("div",{ref:n,className:"wrapper-view",children:[e("div",{className:"wrapper-header",children:e("div",{className:"header-app",role:"banner",children:a("h1",{className:"header-app-title",children:[e("a",{className:"logo",href:"#",children:e("img",{className:"logo-img",src:"/certificates/public/phoenix-logo-1-removebg-preview.png",alt:"phoenix Home"})}),e("span",{className:"sr-only",children:"Certificate Validation"})]})})}),e("hr",{className:"divider sr-only"}),t&&i&&i.course=="30 Days Of Code"&&a("main",{className:"accomplishment accomplishment-main",children:[e("div",{id:"print-div",className:"wrapper-accomplishment-rendering",children:a("div",{className:"accomplishment-rendering",children:[a("div",{className:"wrapper-accomplishment-title verified",children:[a("div",{className:"accomplishment-title",children:[e("img",{className:"lj-university-logo",src:"/certificates/public/meta_image.png",alt:""}),e("span",{className:"sr-only",children:"Verified Certificate"})]}),a("div",{className:"wrapper-accomplishment-orgs",children:[e("h3",{className:"accomplishment-orgs-title sr-only",children:"Supported by the following organizations"}),e("ul",{className:"wrapper-orgs list-orgs",children:e("li",{className:"wrapper-organization",children:a("div",{className:"organization badge-cnt",children:[e("img",{className:"badge-img",src:function(){if(i.completion=="1st")return"/certificates/public/badge-1.png";if(i.completion=="2nd")return"/certificates/public/badge-2.png";if(i.completion=="3rd")return"/certificates/public/badge-3.png";if(i.completion=="mentor")return"/certificates/public/mentor-badge-1.png";if(i.completion=="exceptional commitment and consistency")return"/certificates/public/badge-4.png";if(i.completion=="participation")return"/certificates/public/badge-5.png"}()}),e("img",{className:" w-120px",src:"/certificates/public/phoenix-logo-1-removebg-preview.png",alt:"MITx logo"})]})})})]})]}),a("div",{className:"wrapper-accomplishment-statement",children:[e("div",{className:"accomplishment-statement",children:a("p",{className:"accomplishment-statement-lead",children:[e("span",{className:"accomplishment-statement-detail copy sm-font",children:"We are deeply honoured to present this certificate to"}),a("strong",{className:"accomplishment-recipient",children:[i.first_name," ",i.last_name]}),e("span",{className:"accomplishment-summary sm-font",children:function(){return i.completion=="1st"||i.completion=="2nd"||i.completion=="3rd"?`for securing ${i.completion} rank by performing exceptionally in the event`:i.completion=="participation"?"for their participation in the event":i.completion=="mentor"?"for their outstanding contribution as a mentor in the event":i.completion=="exceptional commitment and consistency"?"for their exceptional commitment and consistency in the event":"for their participation in the event"}()}),e("span",{className:"accomplishment-course",children:e("span",{className:"accomplishment-course-name",children:i.course})}),e("span",{className:"accomplishment-statement-detail copy sm-font",children:"Organised by The Phoenix Club."})]})}),a("div",{className:"accomplishment-signatories d-flex-column-reverse",children:[e("h3",{className:"accomplishment-signatories-title sr-only",children:"Noted by"}),e("div",{className:"wrapper-signatories",children:a("div",{className:"list-signatories",children:[a("div",{className:"signatory",children:[e("img",{className:"signatory-signature",src:"/certificates/public/jatin_signature_2.png",alt:"Jatin Chawla"}),e("h4",{className:"signatory-name",children:"Jatin Chawla"}),a("p",{className:"signatory-credentials",children:[e("span",{className:"role",children:"Co-Founder, Phoenix Club"}),e("span",{className:"organization"})]})]}),a("div",{className:"signatory",children:[e("img",{className:"signatory-signature",src:"/certificates/public/jainam_signature.png",alt:"Jainam Parikh"}),e("h4",{className:"signatory-name",children:"Jainam Parikh"}),a("p",{className:"signatory-credentials",children:[e("span",{className:"role",children:"Co-Founder, Phoenix Club"}),e("span",{className:"organization"})]})]}),a("div",{className:"signatory",children:[e("img",{className:"signatory-signature",src:"/certificates/public/nisarg_signature.png",alt:"Nisarg Bhatt"}),e("h4",{className:"signatory-name",children:"Nisarg Bhatt"}),a("p",{className:"signatory-credentials",children:[e("span",{className:"role",children:"Co-Founder, Phoenix Club"}),e("span",{className:"organization"})]})]})]})})]})]}),e("div",{className:"wrapper-accomplishment-stamps",children:a("ul",{className:"accomplishment-stamps copy-list",children:[e("li",{className:"accomplishment-stamp-platform",children:e("a",{className:"img-link",href:"#",children:e("img",{className:"logo-img w-50px",src:"/certificates/public/phoenix-logo-half-removebg-preview.png",alt:"phoenix"})})}),a("li",{className:"accomplishment-stamp-date",children:[e("span",{className:"title",children:"Verified Certificate"}),a("span",{className:"copy-micro emphasized",children:["Issued"," ",new Date(i.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]})]}),a("li",{className:"accomplishment-stamp-validity",children:[e("span",{className:"title",children:"Valid Certificate Link"}),e("span",{className:"emphasized",children:e("a",{target:"_blank",href:window.location.href,link:window.location.href,children:window.location.href.replace("https://","").replace("http://","")})})]})]})}),a("div",{className:"print-button",onClick:()=>{d==n.current.innerText?y("print-div","certificate_"+(i.first_name+" "+i.last_name).toLowerCase().replaceAll(" ","_")):window.Notify({status:"error",message:"Sorry Buddy, This trick is not workd \u{1F601}\u{1F601}"})},children:[e("i",{className:"fa fa-print"}),"Print"]})]})}),e("div",{className:"",children:a("div",{className:"accomplishment-metadata",children:[a("div",{className:"accomplishment-metadata-bit accomplishment-metadata-aboutedx",children:[e("h3",{className:"accomplishment-metadata-title",children:"About phoenix"}),e("p",{className:"accomplishment-metadata-copy",children:"Phoenix is a place where you get the opportunity to connect with people, learn new stuff, improve your life skills and grow as a better person."})]}),a("div",{className:"accomplishment-metadata-bit accomplishment-metadata-aboutcert",children:[e("h3",{className:"accomplishment-metadata-title",children:"About phoenix Verified Certificates"}),e("p",{className:"accomplishment-metadata-copy",children:"A phoenix Verified Certificate signifies that the learner has agreed to abide by the phoenix honor code and completed all of the required tasks of this course under its guidelines."})]})]})})]}),t&&!i&&e("div",{className:"sorry-page",children:a("h5",{children:["SORRY BUDDY, ",e("br",{})," THIS TRICK WON'T WORK!!!"]})}),e("hr",{className:"divider sr-only"})]})})};export{k as default};
