import React from "react";

const DocumentationSkeleton: React.FC = () => {
    return (
        <div className="dark:bg-[#2a2a2a] w-full bg-white flex flex-col min-h-screen">
            <div className="flex">
                <div className="w-full h-full dark:bg-[#2A2A2A] rounded-lg">
                    <div className="w-full h-full">
                        <div className="w-full h-full overflow-auto dark:bg-[#2A2A2A] dark:text-gray-300 p-4">
                            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4 animate-pulse"></div>
                            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-6 animate-pulse"></div>
                            {[1, 2, 3].map((index) => (
                                <div key={index} className="mb-8">
                                    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-2 animate-pulse"></div>
                                    <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-2 animate-pulse"></div>
                                    <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
                                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2 animate-pulse"></div>
                                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2 animate-pulse"></div>
                                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3 mb-2 animate-pulse"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocumentationSkeleton;