import React from "react";
import arrayGenerate from "../../utils/arrayGenerate";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = arrayGenerate(pagesCount);
  if (pagesCount === 1) return null;
  else
    return (
      <nav className="page navigation">
        <ul className="pagination">
          {pages.map(page => (
            <li
              className={
                currentPage === page ? "page-item active" : "page-item"
              }
              key={page}
              style={{ cursor: "pointer" }}
            >
              <button className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
