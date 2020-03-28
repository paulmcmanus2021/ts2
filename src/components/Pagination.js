import React from 'react';

const Pagination = ({productsPerPage, totalProducts, paginate}) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }



  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => {
           return (
             <p key={number} className="page-item">
              <a onClick={() => paginate(number)} href={number} className="page-link">
                {number}
              </a>
            </p>
            )
        })}
      </ul>
    </nav>
  )
}
export default Pagination;
