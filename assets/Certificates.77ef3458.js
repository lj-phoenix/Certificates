import{r as u,j as e,d,F as x,L as I}from"./vendor.07a30449.js";import{a as w,I as h,B as N,g as l,A as C}from"./index.0b99b3dd.js";import{C as y}from"./Card.9e07570d.js";import{M as L,T as t,P as A}from"./Modal.762f79a8.js";import{u as g,a as S}from"./useFetch.4de25823.js";import"./motion.b8bd9615.js";const _=({modalObj:o,editValue:r,setEditValue:s})=>{const[n,c]=u.exports.useState(null),[p,b]=u.exports.useState([]),{loadingDone:m,callback:f}=g();return u.exports.useEffect(()=>{f({method:"get",url:w,success:a=>{c(a.data)}})},[]),e(L,{...o,modalWidth:"700px",children:d("div",{className:"modal-body one-col-grid",children:[d("div",{className:"row",children:[e("div",{className:"col-md-6",children:e(h.LabelInput,{className:"form-control",type:"text",required:!0,value:r.first_name,onChange:a=>s({...r,first_name:a.target.value}),label:"First Name",invalidText:"First Name is required"})}),e("div",{className:"col-md-6",children:e(h.LabelInput,{className:"form-control",type:"text",value:r.last_name,onChange:a=>s({...r,last_name:a.target.value}),label:"Last Name",invalidText:"Last Name is required"})}),e("div",{className:"col-md-12",children:e(h.LabelInput,{className:"form-control",type:"text",required:!0,value:r.email,onChange:a=>s({...r,email:a.target.value}),label:"Email",invalidText:"Email is required"})})]}),d(h.LabelSelect,{required:!0,label:"Course",value:r.course,onChange:a=>{s({...r,course:a.target.value}),b(n.filter(T=>T.name==a.target.value)[0].types)},invalidText:"Need to select Course",children:[e("option",{value:"",children:"Select Course"}),n&&n.map(a=>e("option",{value:a.name,children:a.name},a.id))]}),d(h.LabelSelect,{value:r.completion,required:!0,label:"Type",onChange:a=>{s({...r,completion:a.target.value})},invalidText:"Need to select Type",children:[e("option",{value:"",children:"Select Type"}),n&&n.filter(a=>a.name==r.course)[0]?.types.map(a=>e("option",{value:a.name,children:a.name},a.id))]})]})})},O=()=>{const[o,r]=u.exports.useState({formId:"staff-member-form-edit",modalId:"staff-member-modal-edit",title:"Edit Certificate",visible:!1}),{isLoading:s,callback:n}=g(),{data:c,setData:p,loadingDone:b}=S({method:"get",url:C}),[m,f]=u.exports.useState({name:"",types:[]});function a(){n({method:"put",url:C+"/"+m._id,data:m,success:i=>{window.Notify({status:"success",message:"Certificate Updated Successfully"}),window.$(`#${o.modalId}`).modal("hide");let v={...m,...i.data};t.fn.updateTableWithId(c,v,p,"_id")},error:i=>{window.$(`#${o.modalId}`).modal("hide")}})}function T(i){i.types,f({...i}),r({...o,visible:!0}),window.$(`#${o.modalId}`).modal("show"),window.$(`#${o.formId}`).off("submit")}return d(x,{children:[e(N,{title:"Certificates",links:[{name:"Home",link:"/admin"},{name:"Certificates",link:"/admin/certificates"}],select:!0}),e(y,{title:"Certificates",button:{name:"Add",link:"certificates-add"},children:d(t,{tableId:".table-brand-staff",loadingDone:b,footerSelect:!0,children:[e(t.Header,{children:d(t.Row,{children:[e(t.TH,{children:"Id"}),e(t.TH,{children:"First Name"}),e(t.TH,{children:"Last Name"}),e(t.TH,{children:"Email"}),e(t.TH,{children:"Course"}),e(t.TH,{children:"Type"}),e(t.TH,{children:"Link"}),e(t.TH,{children:"url"}),e(t.TH,{children:"Created At"}),e(t.TH,{children:"Updated At"}),e(t.TH,{children:"Actions"})]})}),e(t.Body,{children:c&&c.map((i,v)=>d(t.Row,{children:[e(t.TH,{children:l(()=>i._id)}),e(t.TH,{children:l(()=>i.first_name)}),e(t.TH,{children:l(()=>i.last_name)}),e(t.TH,{children:l(()=>i.email)}),e(t.TH,{children:l(()=>i.course)}),e(t.TH,{children:l(()=>i.completion)}),e(t.TH,{children:l(()=>e(I,{to:"/"+i.course.replaceAll(" ","-").toLowerCase()+"/"+i._id,children:"Link"}))}),e(t.TH,{children:l(()=>"https://lj-phoenix.github.io/certificates/#/"+i.course.replaceAll(" ","-").toLowerCase()+"/"+i._id)}),e(t.TH,{children:l(()=>new Date(i.createdAt).toIndiaDate())}),e(t.TH,{children:l(()=>new Date(i.updatedAt).toIndiaDate())}),d(t.TH,{children:[e("i",{className:"feather icon-edit cursor-pointer",onClick:()=>T(i)}),e(A,{title:"Are you sure to delete this Certificate?",onConfirm:()=>new Promise(H=>{n({method:"delete",url:C+"/"+i._id,success:D=>(t.fn.deleteTableWithId(c,i,p,"_id"),window.Notify({status:"success",message:"Certificate Deleted Successfully"}),H())})}),okText:"Yes",cancelText:"No",children:e("i",{className:"feather pl-1 icon-trash cursor-pointer text-danger"})})]})]},i.id))})]})}),e(_,{editValue:m,setEditValue:f,modalObj:{...o,onSubmit:a,isLoading:s}})]})};export{O as default};