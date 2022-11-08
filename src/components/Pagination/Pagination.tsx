// import React from 'react';

import { DOTS, usePagination } from "../../hooks/usePagination";

// const Pagination = ({currentPage, perPage, setPagPage, page, totalPage }: {currentPage: number, perPage: number, setPagPage: Function, page: number, totalPage: number}) => {
//     console.log(currentPage, perPage, page, totalPage)
//     const pages = totalPage;
//     let pageArray:any = [];
//     function doPaging(current: number, {range, pages, start = 1}: {range: number, pages: number, start?: number}) {

//         var i = Math.min(pages + start - range, Math.max(start, current - (range / 2 | 0)));
//         const end = (i + range);
//         while (i < end) { pageArray.push(`${i++}`) }
//         return pageArray;
//     }
//     const paging = {range : 5, pages};
//     for (let pageIndex = 0; pageIndex < pages; pageIndex++) {
//         doPaging(page, paging)
//     }
    
//     const handleChange=(item: number)=>{
//         const paging = {range : 5, pages};
//         setPagPage(item);
//         // if(searchParams.get("search")){
//         //     setSearchParams({page: item, ...params}, {replace: true})
//         // }else{
//         //     setSearchParams({page: item, ...params})
//         // }
//         pageArray=[];
//         doPaging(item, paging);

//     };

//   if(totalPage > 1 && totalPage !==0){
//       return (
//         <div className="pb-6 pt-2" >
//         <div className="flex justify-center md:justify-end">
//             <nav aria-label="Pagination">
//             <ul className="flex list-style-none">
//                 <li 
//                     className={`${page === 1 && "disabled"}`}>
//                     <span 
//                         onClick={()=>{
//                             if(page  > 1){
//                                 setPagPage(page - 1);
//                                 // if(searchParams.get("search")){
//                                 //     setSearchParams({page: (parseInt(page) - 1), ...params}, {replace: true})
//                                 // }else{
//                                 //     setSearchParams({page: (parseInt(page) - 1), ...params})
//                                 // }
//                             }
//                         }}
//                         className="text-[16px] font-normal cursor-pointer relative block py-0.5 px-2 rounded border-0 bg-transparent outline-none transition-all duration-300"
//                         >Previous</span>
//                 </li>
//                 {pageArray && pageArray?.map((item: number,i: number) => {
//                     if (i < 5 && item > 0){
//                         return (
//                             <li key={item} className={``}>
//                                 <span onClick={()=>handleChange(item)} className={`text-[16px] font-normal cursor-pointer relative block py-0.5 px-2 rounded border-0 bg-transparent outline-none transition-all duration-300 ${item === currentPage && "bg-primary text-white"}`}
//                                 >{item}</span>
//                             </li>
//                         )
//                     } else return null
//                 })}
//                 {pages > 5 && (pages-currentPage > 2)  && pages !== currentPage && (
//                             <>
//                                 {(pageArray) && (parseInt(pageArray[pageArray.length - 1]) !== pages-1) && <li className='mt-1.5'>...</li>}
//                                 <li className={`page-item ${pages === currentPage && "bg-primary text-white"}`}>
//                                     <span onClick={()=>handleChange(pages)} className={`text-[16px] font-normal cursor-pointer relative block py-0.5 px-2 rounded border-0 bg-transparent outline-none transition-all duration-300 ${item === currentPage && "bg-primary text-white"} `}
//                                     >{pages}</span>
//                                 </li>
//                             </>
//                         )
//                 }
//                 <li className={`page-item ${page === pages && "disabled"}`}><span onClick={()=>{
//                     if(page  < pages){
//                         setPagPage(page + 1);
//                         // if(searchParams.get("search")){
//                         //     setSearchParams({page: (parseInt(page) + 1), ...params}, {replace: true})
//                         // }else{
//                         //     setSearchParams({page: (parseInt(page) + 1), ...params})
//                         // }
//                     }
//                 }}
//                     className="text-[16px] font-normal cursor-pointer relative block py-0.5 px-2 rounded border-0 bg-transparent outline-none transition-all duration-300"
//                     >Next</span></li>
//             </ul>
//             </nav>
//         </div>
//     </div>
//   )}else {
//       return <></>
//   }
// }

// export default Pagination

const Pagination = ({ onPageChange, totalCount, siblingCount = 1, currentPage, pageSize} : {onPageChange: Function; totalCount: number; siblingCount?: number, currentPage: number, pageSize: number} ) => {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
      });
    
      if (currentPage === 0 || paginationRange?.length < 2) {
        return null;
      }
    
      const onNext = () => {
        if(currentPage < lastPage){
            onPageChange(currentPage + 1); 
        }
      };
    
      const onPrevious = () => {
        if(currentPage  > 1){
            onPageChange(currentPage - 1);
        }
      };
    
      let lastPage = paginationRange[paginationRange.length - 1];
      return (
        <div className="pb-6 pt-2" >
            <div className="flex justify-center md:justify-end">
                <ul
                className={`flex list-style-none`}
                >
                <li
                    className={`${currentPage === 1 && "disabled"}`}
                    onClick={onPrevious}
                >
                    <span className="text-[16px] font-normal cursor-pointer relative block py-0.5 px-2 rounded border-0 bg-transparent outline-none transition-all duration-300" >Previous</span>
                </li>
                {paginationRange.map((pageNumber: any, index: number) => {
                    if (pageNumber === DOTS) {
                    return <li key={index} className="pagination-item dots">&#8230;</li>;
                    }
            
                    return (
                    <li
                        onClick={() => onPageChange(pageNumber)} key={index}
                    >
                        <span className={`text-[16px] font-normal cursor-pointer relative block py-0.5 px-2 rounded border-0 bg-transparent outline-none transition-all duration-300 ${pageNumber === currentPage && "bg-primary text-white"}`} >{pageNumber}</span>
                    </li>
                    );
                })}
                <li
                    className={`${currentPage === lastPage && "disabled"}`}
                    onClick={onNext}
                >
                    <span className="text-[16px] font-normal cursor-pointer relative block py-0.5 px-2 rounded border-0 bg-transparent outline-none transition-all duration-300" >Next</span>
                </li>
                </ul>
            </div>
        </div>
      )
}

export default Pagination