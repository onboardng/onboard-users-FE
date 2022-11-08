import React from 'react';

const Pagination = ({currentPage, perPage, setPagPage, page, totalPage }: {currentPage: number, perPage: number, setPagPage: Function, page: number, totalPage: number}) => {
    const pages = totalPage;
    let pageArray:any = [];
    function doPaging(current: number, {range, pages, start = 1}: {range: number, pages: number, start?: number}) {

        var i = Math.min(pages + start - range, Math.max(start, current - (range / 2 | 0)));
        const end = (i + range);
        while (i < end) { pageArray.push(`${i++}`) }
        return pageArray;
    }
    const paging = {range : 5, pages};
    for (let pageIndex = 0; pageIndex < pages; pageIndex++) {
        doPaging(page, paging)
    }
    
    const handleChange=(item: number)=>{
        const paging = {range : 5, pages};
        setPagPage(item);
        // if(searchParams.get("search")){
        //     setSearchParams({page: item, ...params}, {replace: true})
        // }else{
        //     setSearchParams({page: item, ...params})
        // }
        pageArray=[];
        doPaging(item, paging);

    };

  if(totalPage > 1 && totalPage !==0){
      return (
        <div className="pb-6 pt-2" >
        <div className="flex justify-center">
            <nav aria-label="Pagination">
            <ul className="flex list-style-none">
                <li 
                    className={`page-item ${page === 1 && "disabled"}`}>
                    <span 
                        onClick={()=>{
                            if(page  > 1){
                                setPagPage(page - 1);
                                // if(searchParams.get("search")){
                                //     setSearchParams({page: (parseInt(page) - 1), ...params}, {replace: true})
                                // }else{
                                //     setSearchParams({page: (parseInt(page) - 1), ...params})
                                // }
                            }
                        }}
                        className="page-link cursor-pointer relative block py-1.5 px-3 rounded border-0 font-medium text-lg bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 focus:shadow-none"
                        >Previous</span>
                </li>
                {pageArray && pageArray?.map((item: number,i: number) => {
                    if (i < 5 && item > 0){
                        return (
                            <li key={item} className={`page-item ${item === currentPage && "active"}`}>
                                <span onClick={()=>handleChange(item)} className="page-link cursor-pointer relative block py-1.5 px-3 rounded border-0 font-medium text-lg bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                >{item}</span>
                            </li>
                        )
                    } else return null
                })}
                {pages > 5 && (pages-currentPage > 2)  && pages !== currentPage && (
                            <>
                                {(pageArray) && (parseInt(pageArray[pageArray.length - 1]) !== pages-1) && <li className='mt-1.5'>...</li>}
                                <li className={`page-item ${pages === currentPage && "active"}`}>
                                    <span onClick={()=>handleChange(pages)} className="page-link cursor-pointer relative block py-1.5 px-3 rounded border-0 font-medium text-lg bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                    >{pages}</span>
                                </li>
                            </>
                        )
                }
                <li className={`page-item ${page === pages && "disabled"}`}><span onClick={()=>{
                    if(page  < pages){
                        setPagPage(page + 1);
                        // if(searchParams.get("search")){
                        //     setSearchParams({page: (parseInt(page) + 1), ...params}, {replace: true})
                        // }else{
                        //     setSearchParams({page: (parseInt(page) + 1), ...params})
                        // }
                    }
                }}
                    className="page-link cursor-pointer relative block py-1.5 px-3 rounded border-0 font-medium text-lg bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    >Next</span></li>
            </ul>
            </nav>
        </div>
    </div>
  )}else {
      return <></>
  }
}

export default Pagination