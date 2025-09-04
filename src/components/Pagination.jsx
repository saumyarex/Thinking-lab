import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ currentPage = 1, totalPages = 1, onPageChange }) {
  // Don't render pagination if there's only one page or no pages
  if (totalPages <= 1) return null;

  // Generate page numbers to display
  const generatePageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      // Show all pages if total pages <= 7
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show smart pagination with ellipsis
      if (currentPage <= 4) {
        // Show pages 1-5, ellipsis, last page
        pages.push(1, 2, 3, 4, 5, "ellipsis", totalPages);
      } else if (currentPage >= totalPages - 3) {
        // Show first page, ellipsis, last 5 pages
        pages.push(
          1,
          "ellipsis",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        // Show first page, ellipsis, current-1, current, current+1, ellipsis, last page
        pages.push(
          1,
          "ellipsis",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "ellipsis",
          totalPages
        );
      }
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (pageNum) => {
    if (pageNum !== "ellipsis" && pageNum !== currentPage) {
      onPageChange(pageNum);
    }
  };

  return (
    <div className="flex gap-2 sm:gap-3 items-center flex-wrap justify-center">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`flex items-center gap-1 sm:py-2 sm:px-3 py-1 px-2 rounded-lg transition-colors
          ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300 active:bg-gray-400 cursor-pointer"
          }`}
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((pageNum, index) => {
        if (pageNum === "ellipsis") {
          return (
            <span
              key={`ellipsis-${index}`}
              className="sm:py-2 sm:px-2 py-1 px-1 text-gray-500"
            >
              ...
            </span>
          );
        }

        const isActive = pageNum === currentPage;
        return (
          <button
            key={pageNum}
            onClick={() => handlePageClick(pageNum)}
            className={`sm:py-2 sm:px-4 py-1 px-3 rounded-lg transition-colors min-w-[2rem] sm:min-w-[2.5rem]
              ${
                isActive
                  ? "bg-[#E2AD28] text-white hover:bg-[#e28e28]"
                  : "bg-gray-200 hover:bg-gray-300 active:bg-gray-400 cursor-pointer"
              }
              ${pageNum > 5 ? "hidden sm:block" : ""}
            `}
          >
            {pageNum}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`flex items-center gap-1 sm:py-2 sm:px-3 py-1 px-2 rounded-lg transition-colors
          ${
            currentPage === totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300 active:bg-gray-400 cursor-pointer"
          }`}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export default Pagination;
