import{u as k,r as a,d as s,F,j as t}from"./vendor.07a30449.js";import{a as I,B as j,F as q,I as r,A as w}from"./index.aea3ddb5.js";import{C as E}from"./Card.9e07570d.js";import{u as m}from"./useFetch.87195165.js";const H=()=>{const u="Add Certificate",p=[{name:"Home",link:"/Admin"},{name:"Certificates",link:"/Admin/certificates"},{name:"Add Certificate",link:"/Admin/certificate-add"}];let f=k();const{isLoading:b,callback:h}=m(),{loadingDone:v,callback:C}=m(),[i,N]=a.exports.useState(null);a.exports.useState("");const[l,g]=a.exports.useState(""),[n,x]=a.exports.useState(""),[o,A]=a.exports.useState(""),[c,y]=a.exports.useState([]),[d,S]=a.exports.useState(""),T=function(){h({method:"post",url:w,data:{first_name:l,last_name:n,course:d,completion:o},success:e=>{window.Notify({message:"Certificate Added Successfully",status:"success"}),f.push("/admin/certificates")}}),console.log("Add Certificate")};return a.exports.useEffect(()=>{C({method:"get",url:I,success:e=>{N(e.data)}})},[]),s(F,{children:[t(j,{title:u,links:p}),t(q,{id:"form-certificate-validation",onSubmit:e=>{e.preventDefault(),window.formValidate("form-certificate-validation")(T)},children:s("div",{className:"row",children:[t("div",{className:"col-md-8",children:s(E,{loadingDone:v,title:"Certificate Information",iconLeft:"feather icon-certificate",children:[s("div",{className:"row",children:[t("div",{className:"col-md-6",children:t(r.LabelInput,{className:"form-control",type:"text",required:!0,value:l,onChange:e=>g(e.target.value),label:"First Name",invalidText:"First Name is required"})}),t("div",{className:"col-md-6",children:t(r.LabelInput,{className:"form-control",type:"text",required:!0,value:n,onChange:e=>x(e.target.value),label:"Last Name",invalidText:"Last Name is required"})})]}),s(r.LabelSelect,{value:d,required:!0,label:"Course",onChange:e=>{S(e.target.value),y(i.filter(L=>L.name==e.target.value)[0].types)},invalidText:"Need to select Course",children:[t("option",{value:"",children:"Select Course"}),console.log(i),i&&i.map(e=>t("option",{value:e.name,children:e.name},e.id))]}),s(r.LabelSelect,{value:o,required:!0,label:"Type",onChange:e=>A(e.target.value),invalidText:"Need to select Type",children:[t("option",{value:"",children:"Select Type"}),c&&c.map(e=>t("option",{value:e.name,children:e.name},e.id))]})]})}),t("div",{className:"col-md-3"}),t("div",{className:"col-md-2",children:b?s("div",{className:"mb-4 btn btn-primary btn-lg btn-block",children:[t("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"\xA0 Loading..."]}):s("button",{type:"submit",className:"mb-4 btn btn-primary btn-lg btn-block",children:[t("i",{className:"feather icon-plus"})," Add Certificate"]})})]})})]})};export{H as default};