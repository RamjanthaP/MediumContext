import React from 'react';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';

interface PaginationProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  paginate: (_pageNumber: number) => void;
}
const Pagination = ({
  currentPage,
  itemsPerPage,
  totalItems,
  paginate,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers: number[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='container mx-auto w-full max-w-fit flex  pt-10 pb-20'>
      <button
        className='btn'
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowLeftIcon scale='4' className='w-8 h-8 mr-20 lg:mr-1' />
      </button>
      <div className='hidden lg:flex'>
        {pageNumbers.map((number) => (
          <a
            key={number}
            href='#'
            onClick={(e) => {
              e.preventDefault();
              paginate(number);
            }}
            className={`items-center text-xxl mx-10 ${
              currentPage === number ? 'text-bold' : 'text-secondary-500'
            }`}
          >
            <h1>{number}</h1>
          </a>
        ))}
      </div>
      <button
        className='btn'
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ArrowRightIcon scale='4' className='w-8 h-8 ml-20 lg:ml-1' />
      </button>
    </div>
  );
};

export default Pagination;
