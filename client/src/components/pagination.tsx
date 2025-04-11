import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex items-center justify-center space-x-2 px-4 py-2 shadow-sm bg-white dark:bg-[#2e2d2d]">
            <button
                className={`px-3 py-1 flex items-center rounded-md border border-gray-300 dark:border-gray-600 ${currentPage === 1
                    ? "text-gray-400 dark:text-gray-500 cursor-not-allowed"
                    : "text-[#eb7866] hover:bg-purple-100 dark:hover:bg-gray-700"
                    }`}
                disabled={currentPage === 1}
                onClick={handlePrevPage}
            >
                Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => {
                const page = i + 1;

                if (
                    page !== 1 &&
                    page !== totalPages &&
                    Math.abs(page - currentPage) > 2
                ) {
                    if (
                        Math.abs(page - currentPage) === 3 &&
                        (page < currentPage || page > currentPage)
                    ) {
                        return (
                            <span
                                key={`ellipsis-${page}`}
                                className="px-2 py-1 text-gray-500 dark:text-gray-400"
                            >
                                ...
                            </span>
                        );
                    }
                    return null;
                }

                return (
                    <button
                        key={page}
                        className={`px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 ${currentPage === page
                            ? "bg-[#eb7866] text-[#fff] dark:bg-[#eb7866] dark:text-white"
                            : "hover:bg-[#b9b8b8] text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                            }`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                );
            })}

            <button
                className={`px-3 py-1 flex items-center rounded-md border border-gray-300 dark:border-gray-600 ${currentPage === totalPages
                    ? "text-gray-400 dark:text-gray-500 cursor-not-allowed"
                    : "text-[#eb7866] hover:bg-purple-100 dark:hover:bg-gray-700"
                    }`}
                disabled={currentPage === totalPages}
                onClick={handleNextPage}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;