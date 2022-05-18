import React from "react";
import ReactPaginate from "react-paginate";
function Pagination ({handlePageClick}){
    return (
        <>
            <ReactPaginate
                previousLabel={"<<"}
                nextLabel={">>"}
                breakLabel={"..."}
                pageCount={6}
                marginPagesDisplayed={2}
                pageRangeDisplayed={6}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center my-5"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </>
    )
}
export default Pagination;