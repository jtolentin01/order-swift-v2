import React from "react";

export const ImportOrderSkeleton: React.FC = () => {
    return (
        <>
            <div className="border border-gray-300 rounded-lg p-4 shadow-sm w-full dark:bg-[#504e4e] bg-white mt-2 animate-pulse">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="flex gap-4">
                        <div className="w-16 h-16 bg-gray-300 rounded-md dark:bg-[#d1cbcb]"></div>
                        <div>
                            <div className="h-4 bg-gray-300 dark:bg-[#d1cbcb] rounded w-32 mb-2"></div>
                            <div className="h-3 bg-gray-300 dark:bg-[#d1cbcb] rounded w-20 mb-2"></div>
                            <div className="h-3 bg-gray-300 dark:bg-[#d1cbcb] rounded w-40 mb-2"></div>
                            <div className="h-3 bg-gray-300 dark:bg-[#d1cbcb] rounded w-24"></div>
                        </div>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                        <div className="h-3 bg-gray-300 dark:bg-[#d1cbcb] rounded w-16 mb-2"></div>
                        <div className="h-4 bg-gray-300 dark:bg-[#d1cbcb] rounded w-12"></div>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-4 border-t border-gray-200 pt-4">
                    <div className="h-3 bg-gray-300 dark:bg-[#d1cbcb] rounded w-32"></div>
                    <div className="w-20 h-8 bg-gray-300 dark:bg-[#d1cbcb] rounded-lg"></div>
                </div>
            </div>
            <div className="border border-gray-300 rounded-lg p-4 shadow-sm w-full dark:bg-[#504e4e] bg-white mt-2 animate-pulse">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="flex gap-4">
                        <div className="w-16 h-16 bg-gray-300 rounded-md dark:bg-[#d1cbcb]"></div>
                        <div>
                            <div className="h-4 bg-gray-300 dark:bg-[#d1cbcb] rounded w-32 mb-2"></div>
                            <div className="h-3 bg-gray-300 dark:bg-[#d1cbcb] rounded w-20 mb-2"></div>
                            <div className="h-3 bg-gray-300 dark:bg-[#d1cbcb] rounded w-40 mb-2"></div>
                            <div className="h-3 bg-gray-300 dark:bg-[#d1cbcb] rounded w-24"></div>
                        </div>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                        <div className="h-3 bg-gray-300 dark:bg-[#d1cbcb] rounded w-16 mb-2"></div>
                        <div className="h-4 bg-gray-300 dark:bg-[#d1cbcb] rounded w-12"></div>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-4 border-t border-gray-200 pt-4">
                    <div className="h-3 bg-gray-300 dark:bg-[#d1cbcb] rounded w-32"></div>
                    <div className="w-20 h-8 bg-gray-300 dark:bg-[#d1cbcb] rounded-lg"></div>
                </div>
            </div>
        </>
    )
}