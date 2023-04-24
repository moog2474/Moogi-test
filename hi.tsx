// import React, { useState } from 'react';
// import Link from 'next/link';

// export const Pagination = ({
//   rowCount,
//   pageSize,
// }: {
//   rowCount: number;
//   pageSize: number;
// }) => {
//   const totalPages = Math.ceil(rowCount / pageSize); // Calculate total number of pages
//   const [currentPage, setCurrentPage] = useState(1); // Initialize current page to 1

//   const activeClass = {
//     active:
//       'relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
//     other:
//       'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0',
//   };

//   // Calculate start and end indexes for pages to display based on currentPage
//   const startIndex = (currentPage - 1) * 20;
//   const endIndex = Math.min(startIndex + 20, totalPages);

//   // Create array of page numbers to display based on startIndex and endIndex
//   const pageData = new Array(endIndex - startIndex)
//     .fill(0)
//     .map((_, i) => startIndex + i + 1);

//   const handlePrevClick = () => {
//     // Decrease currentPage by 1, unless already at first page
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextClick = () => {
//     // Increase currentPage by 1, unless already at last page
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   return (
//     <nav aria-label="Page navigation example">
//       <ul className="inline-flex items-center -space-x-px">
//         <li>
//           <a
//             href="#"
//             className={`block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
//               currentPage === 1 && 'opacity-50 pointer-events-none'
//             }`}
//             onClick={handlePrevClick}
//           >
//             <span className="sr-only">Previous</span>
//             <svg
//               aria-hidden="true"
//               className="w-5 h-5"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
//                 clipRule="evenodd"
//               ></path>
//             </svg>
