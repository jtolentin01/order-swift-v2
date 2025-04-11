import React from "react";
import { FaBoxOpen, FaCalendarAlt, FaCog, FaEye, FaFileExport, FaRegTrashAlt } from "react-icons/fa"
import { FaBarcode } from "react-icons/fa6";
import { FaBoxes } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { MdDateRange, MdNoteAlt } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export const OrdersTableManagerSkeleton: React.FC = () => {
    return (
        <>
            <div className="animate-pulse">
                <div className="w-full border-collapse hidden sm:table">
                    <thead className="bg-gray-200 dark:bg-[#5e5d5d] text-sm font-medium sticky top-0 z-10 dark:text-[#dad6d6]">
                        <tr>
                            {[
                                { icon: <FaBoxOpen />, label: "Order ID" },
                                { icon: <FaBarcode />, label: "SKU" },
                                { icon: <FaBoxes />, label: "Quantity" },
                                { icon: <IoMdPerson />, label: "Customer Name" },
                                { icon: <MdDateRange />, label: "Lesd" },
                                { icon: <MdNoteAlt />, label: "SM Notes" },
                                { icon: <MdNoteAlt />, label: "CS Notes" },
                                { icon: <FaLocationDot />, label: "Tracking No." },
                                { icon: <IoMdPerson />, label: "Updated By" },
                                { icon: <FaCalendarAlt />, label: "Updated Date" },
                                { icon: <FaCalendarAlt />, label: "Status" },
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
                        {[...Array(15)].map((_, index) => (
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
                                    <div className="h-4 w-16 bg-gray-300 rounded"></div>
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
                                <td className="p-1 border-b">
                                    <div className="h-4 w-20 bg-gray-300 rounded"></div>
                                </td>
                                <td className="p-1 border-b">
                                    <div className="h-4 w-20 bg-gray-300 rounded"></div>
                                </td>
                                <td className="p-1 border-b">
                                    <div className="h-4 w-20 bg-gray-300 rounded"></div>
                                </td>
                                <td className="p-1 border-b">
                                    <div className="h-4 w-20 bg-gray-300 rounded"></div>
                                </td>
                                <td className="p-1 border-b">
                                    <div className="h-4 w-12 bg-gray-300 rounded"></div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
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