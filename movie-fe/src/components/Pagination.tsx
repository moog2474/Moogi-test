import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Pagination = ({
  rowCount,
  pageSize
}: {
  rowCount: number;
  pageSize: number
}) => {
  const totalPages = Math.floor(rowCount / pageSize);



  const {query} = useRouter();
const pg = query ? query.pageSize ? query.pageSize: 1 : 1;
  const [currentPage, setCurrentPage] = useState(pg);


  useEffect(()=>{
    console.log({query});
    
    setCurrentPage(query?.pageSize ? query.pageSize :  1)
  },[query])

  const startIndex = (currentPage - 1) * 20;
  const endIndex = Math.min(startIndex + 20, totalPages);

  const pageData = new Array(endIndex - startIndex).fill(0).map((_, i) => startIndex + i + 1);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage)=>currentPage - 1)
    }
  };


  const handleNextClick = () => {
    console.log(currentPage);

    
    if (currentPage > 0) {
      setCurrentPage(currentPage + 1 );
    }
  }

  // const pageData = new Array(page).fill(0);


  const activeClass = {
    active: "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
    other: "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
  }
  return (

    <nav aria-label="Page navigation example">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <a
            href="#"
            className={`block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
            }`}
            onClick={handlePrevClick}
            >
            <span className="sr-only">Previous</span>
            <svg 
            aria-hidden="true" 
            className="w-5 h-5" 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
            >
              <path 
              fill-rule="evenodd" 
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" 
              clip-rule="evenodd"
              ></path></svg>
          </a>
        </li>
        {
          pageData.map((page) => {
            return (
              <Link
                key={page}
                href={{
                  pathname: "/movie",
                  query: {
                    pageSize: page
                  }
                }}
                as={`/movie?pageSize=${page}`}
                aria-current={currentPage === page ? "page" : undefined}
                className={
                  currentPage === page ? activeClass.active : activeClass.other
                }
              >
                {page}
              </Link>
            );
          })
        }
        <li>
          <a 
          href="#" 
          className={`block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          onClick={handleNextClick}
          >
            <span className="sr-only">Next</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          </a>
        </li>
      </ul>
    </nav>

  )
}
