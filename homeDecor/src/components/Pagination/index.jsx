import "../Pagination/pagination.css";
import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, currentPage, handlePageClick }) => {
  const renderPage = ({ selected, page }) => {
    if (page <= 2 || page >= pageCount - 1 || (page >= currentPage - 3 && page <= currentPage + 3)) {
      return (
        <button
          key={page}
          onClick={() => handlePageClick({ selected: page })}
          className={currentPage === page ? "active" : "page"}
        >
          {page + 1}
        </button>
      );
    }
    return (
      <button key={page} className="break-link">
        {"..."}
      </button>
    );
  };
  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      pageCount={pageCount}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      previousLinkClassName={"previous"}
      nextLinkClassName={"next"}
      disabledClassName={"disabled"}
      activeClassName={"active"}
      pageClassName={"page"}
      pageLinkClassName={"page-link"}
      breakClassName={"break"}
      breakLinkClassName={"break-link"}
      marginPagesDisplayed={1} // Number of pages to display before and after the current page
      pageRangeDisplayed={2} // Display only three page links in the middle
      renderPage={renderPage}
    />
  );
};

export default Pagination;
