import React from 'react';
import styles from './pagination.module.css';

const Pagination = ({page, setPage, totalPages}) => {
  return (
    <div className={styles['pagination']}>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          { [...Array(totalPages)].map((item, index) => (
            <li
              className="page-item"
              key={index + 1}
              onClick={() => {
                setPage(index + 1)
              }}
            ><a className="page-link" href="#">{ index + 1 }</a></li>
          )) }
        </ul>
      </nav>
    </div>
  )
}

export default Pagination;