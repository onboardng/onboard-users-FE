import{z as x,j as i,b as e,Q as m}from"./index.2629f38d.js";import{I as s}from"./index.ac1e03eb.js";const u=({track:d})=>{var a,c,p;const{state:{data:t,applicationData:n}}=x(),r=l=>{navigator.clipboard.writeText(l),m.info("Copied Successfully",{position:m.POSITION.TOP_CENTER,progressStyle:{backgroundColor:"#6FA7B4"},icon:!1})};return i("div",{className:"bg-white md:rounded-[40px] rounded-[10px] md:mr-10 lg:my-5",children:[i("div",{className:"relative",children:[e("img",{alt:"success",src:"/svgs/Booking Image Card.svg",className:"md:rounded-t-[40px] rounded-t-[10px] w-full"}),d&&e("div",{className:"absolute z-[1] w-full h-full bg-[#00000060] top-0 md:rounded-t-[40px] rounded-t-[10px] flex items-center justify-center text-white font-medium text-[24px] leading-[38.4px] ",children:"Application Successful"})]}),i("div",{className:"px-5 md:px-10",children:[i("div",{className:"text-center md:pb-3 pt-5",children:[e("p",{className:"text-[16px] leading-[25.6px]",children:"Application ID"}),i("div",{className:"flex md:flex-row flex-col justify-center items-center py-1",children:[e("h3",{className:"font-semibold text-[28px] leading-[39.2px] md:mr-3",children:d?t==null?void 0:t.application.tracking_id:(a=n==null?void 0:n.data)==null?void 0:a.tracking_id}),i("span",{onClick:()=>{var l;return r(d?t==null?void 0:t.application.tracking_id:(l=n==null?void 0:n.data)==null?void 0:l.tracking_id)},className:"flex justify-between items-center cursor-pointer",children:[e(s,{id:"copy-icon",height:24,width:24})," ",e("span",{className:"pl-1 text-primary font-medium text-[14px] leading-[22.4px]",children:"Copy"})]})]}),d&&e("p",{className:"text-[16px] leading-[25.6px] text-[#8B8BA4] py-1",children:"An Email and a Text message has been sent to you containing your application ID"})]}),i("div",{className:"text-center pb-5 pt-2",children:[e("h4",{className:"font-medium text-[24px] leading-[38.4px] capitalize",children:t==null?void 0:t.application.school_name}),i("p",{className:"flex text-[16px] leading-[25.6px] justify-center capitalize items-center text-[#8B8BA4] py-2",children:[e(s,{id:"graduation-icon2",height:24,width:24}),i("span",{className:"px-2",children:["Bachelor of ",d?(c=t==null?void 0:t.application)==null?void 0:c.course_name:(p=n==null?void 0:n.data)==null?void 0:p.intending_course]})]}),e("div",{className:"tab:flex tab:justify-center",children:i("div",{children:[i("div",{className:"flex flex-col md:justify-around  md:flex-row md:py-1",children:[i("p",{className:"flex text-[14.5px] leading-[22.4px] md:text-[16px] md:leading-[25.6px] justify-start items-center font-medium md:w-1/2 tab:py-1",children:[e(s,{id:"clock-icon",height:24,width:24}),e("span",{className:"px-2",children:"Course Duration: 4 years"})]}),i("p",{className:"flex text-[14.5px] leading-[22.4px] md:text-[16px] md:leading-[25.6px] justify-start items-center font-medium md:w-1/2 tab:py-1",children:[e(s,{id:"calendar-icon",height:24,width:24}),e("span",{className:"px-2",children:"Application opens: currently"})]})]}),i("div",{className:"flex flex-col md:justify-around  md:flex-row md:py-1",children:[i("p",{className:"flex text-[14.5px] leading-[22.4px] md:text-[16px] md:leading-[25.6px] justify-start items-center font-medium md:w-1/2 tab:py-1",children:[e(s,{id:"calendar-icon",height:24,width:24}),e("span",{className:"px-2",children:"Application closes: Jan 1, 2023"})]}),i("p",{className:"flex text-[14.5px] leading-[22.4px] md:text-[16px] md:leading-[25.6px] justify-start items-center font-medium md:w-1/2 tab:py-1",children:[e(s,{id:"money-bill-icon",height:24,width:24}),e("span",{className:"px-2",children:"Estimated Admission Fee: \u20A610,000"})]})]})]})})]})]})]})};export{u as B};