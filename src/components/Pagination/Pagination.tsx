import { DOTS, usePagination } from "../../hooks/usePagination";

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
    
      let lastPage = paginationRange && paginationRange[paginationRange?.length - 1];
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
                {paginationRange?.map((pageNumber: any, index: number) => {
                    if (pageNumber === DOTS) {
                    return <li key={index} className="pagination-item dots">&#8230;</li>;
                    }
            
                    return (
                    <li
                        onClick={() => onPageChange(pageNumber)} key={index}
                    >
                        <span className={`text-[16px] font-normal cursor-pointer mx-1 md:mx-1.5 relative block py-0.5 px-2 rounded border-0  outline-none transition-all duration-300 ${pageNumber === currentPage ? "bg-primary text-white": "bg-white text-black"}`} >{pageNumber}</span>
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