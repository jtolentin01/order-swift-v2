import React from "react";
import { FaUser, FaCog, } from "react-icons/fa"

export const UsersTableSkeleton: React.FC = () => {
    return (
        <>
            <div className="animate-pulse">
                <div className="w-full border-collapse hidden sm:table">
                    <table className="w-full border border-gray-200 dark:border-[#5e5d5d]">
                        <thead className="bg-gray-200 dark:bg-[#5e5d5d] text-sm font-medium top-0 dark:text-[#dad6d6]">
                            <tr>
                                {[
                                    { icon: <FaUser />, label: "User Name" },
                                    { icon: <></>, label: "Role" },
                                    { icon: <></>, label: "Organization" },
                                    { icon: <></>, label: "Status" },
                                    { icon: <></>, label: "Last active" },
                                    { icon: <></>, label: "Date added" },
                                    { icon: <FaCog />, label: "Action" },
                                ].map((header, index) => (
                                    <th key={index} className="p-2 border-b font-normal text-left py-2.5">
                                        <div className="flex items-center gap-2">
                                            {header.icon}
                                            <span>{header.label}</span>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(5)].map((_, index) => (
                                <tr key={index} className="hover:bg-gray-100 dark:hover:bg-[#818080] transition-colors">
                                    <td className="p-1 border-b flex items-center gap-2">
                                        <div className="h-10 w-10 bg-gray-300 rounded"></div>
                                        <div className="flex flex-col space-y-1">
                                            <div className="h-4 w-20 bg-gray-300 rounded"></div>
                                            <div className="h-3 w-12 bg-gray-200 rounded"></div>
                                        </div>
                                    </td>
                                    <td className="p-1 border-b">
                                        <div className="h-4 w-12 bg-gray-300 rounded"></div>
                                    </td>
                                    <td className="p-1 border-b">
                                        <div className="h-4 w-16 bg-gray-300 rounded"></div>
                                    </td>
                                    <td className="p-1 border-b">
                                        <div className="h-4 w-12 bg-gray-300 rounded"></div>
                                    </td>
                                    <td className="p-1 border-b">
                                        <div className="h-4 w-16 bg-gray-300 rounded"></div>
                                    </td>
                                    <td className="p-1 border-b">
                                        <div className="h-4 w-20 bg-gray-300 rounded"></div>
                                    </td>
                                    <td className="p-1 border-b">
                                        <div className="h-4 w-20 bg-gray-300 rounded"></div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="block sm:hidden">
                    {[...Array(5)].map((_, index) => (
                        <div
                            key={index}
                            className="border rounded-lg mb-2 shadow-sm bg-white p-4 text-sm"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <div className="h-10 w-10 bg-gray-300 rounded"></div>
                                <div className="flex flex-col space-y-1">
                                    <div className="h-4 w-20 bg-gray-300 rounded"></div>
                                    <div className="h-3 w-12 bg-gray-200 rounded"></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-4 w-24 bg-gray-300 rounded"></div>
                                <div className="h-4 w-16 bg-gray-300 rounded"></div>
                                <div className="h-4 w-20 bg-gray-300 rounded"></div>
                                <div className="h-4 w-24 bg-gray-300 rounded"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}