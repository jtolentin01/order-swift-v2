import React from "react";

export const GeneralSettingsComponent: React.FC = () => {
    return (
        <div className="bg-gray-100 dark:bg-[#575454] p-6">
            <div className="max-w-full bg-white dark:bg-[#484747] dark:text-gray-200 shadow-lg rounded-lg p-6">
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Organization
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <input
                            type="text"
                            placeholder="Organization 1"
                            className="outline-none border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-1 focus:ring-blue-500 dark:bg-[#7a7878] dark:text-gray-200"
                        />
                        <input
                            type="text"
                            placeholder="Organization 2"
                            className="outline-none border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-1 focus:ring-blue-500 dark:bg-[#7a7878] dark:text-gray-200"
                        />
                        <input
                            type="text"
                            placeholder="Organization 3"
                            className="outline-none border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-1 focus:ring-blue-500 dark:bg-[#7a7878] dark:text-gray-200"
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Role
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <input
                            type="text"
                            placeholder="Role 1"
                            className="outline-none border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-1 focus:ring-blue-500 dark:bg-[#7a7878] dark:text-gray-200"
                        />
                        <input
                            type="text"
                            placeholder="Role 2"
                            className="outline-none border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-1 focus:ring-blue-500 dark:bg-[#7a7878] dark:text-gray-200"
                        />
                        <input
                            type="text"
                            placeholder="Role 3"
                            className="outline-none border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-1 focus:ring-blue-500 dark:bg-[#7a7878] dark:text-gray-200"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}