import React from 'react';

const Pagination = ({ currentPage, totalPages, onNextPage, onPreviousPage }) => {
  return (
    <div className="pagination">
      <button onClick={onPreviousPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span className="current-page">{currentPage}</span>
      <button onClick={onNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
