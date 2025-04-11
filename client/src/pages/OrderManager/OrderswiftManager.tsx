import React, { useState, useEffect } from "react";
import { getAllOrders } from "../../services/orders.service";
import { OrderInterface } from "../../interfaces/ordersInterface";
import { FaBoxOpen, FaClipboardList, FaDollarSign, FaStickyNote, FaUser, FaInfoCircle, FaCalendarAlt, FaCog, FaEye, FaFileExport, FaRegTrashAlt } from "react-icons/fa"
import { IoTrendingUp, IoTrendingDown } from "react-icons/io5";
import { OrdersTableSkeleton } from "../../components/skeletons/ordersTableSkeleton";
import { DisplayOrderDetailsTemplate } from "../../components/templates/orderDetailsTemplate";
import { ItemsModal } from "../../components/modalsPreset/itemsModal";

const OrderSwiftManagerComponent: React.FC = () => {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [orders, setOrders] = useState<OrderInterface[]>([]);
    const [displayDetails, setDisplayDetails] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true);
            try {
                const fetchedOrders = await getAllOrders();
                setOrders(fetchedOrders);
                setTotalPages(Math.ceil(fetchedOrders.length / itemsPerPage));
            } catch (error) {
                console.error('Error fetching orders:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="dark:bg-[#2e2d2d] w-full h-full bg-white p-2 flex flex-col">
            {displayDetails && (
                <ItemsModal onModalClose={()=>{setDisplayDetails(false)}} enable={displayDetails} title="Sony A7ii Camera" subtitle="523523" content={<DisplayOrderDetailsTemplate />} />
            )}
            <div className="w-full flex items-center justify-between h-[10%] bg-white dark:bg-[#585757] dark:text-gray-700 p-2 transition-colors">
                <div className="flex items-center space-x-4">
                    <button className="px-4 py-1.5 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-[#d8d5d5] dark:hover:bg-[#eb7866] dark:hover:text-[#fff]">
                        All <span className="text-sm font-medium text-gray-500 dark:text-[#fff]">(150)</span>
                    </button>
                    <button className="px-4 py-1.5 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-[#d8d5d5] dark:hover:bg-[#eb7866] dark:hover:text-[#fff]">
                        Item <span className="text-sm font-medium text-gray-500 dark:text-[#fff]">(100)</span>
                    </button>
                    <button className="px-4 py-1.5 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-[#d8d5d5] dark:hover:bg-[#eb7866] dark:hover:text-[#fff]">
                        Service <span className="text-sm font-medium text-gray-500 dark:text-[#fff]">(50)</span>
                    </button>

                    <div className="relative">
                        <select
                            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#d8d5d5] text-sm dark:text-gray-700 focus:outline-none"
                            name="status"
                        >
                            <option value="">Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="px-4 py-2 rounded-lg bg-gray-200 text-sm focus:outline-none placeholder-gray-500 dark:placeholder-gray-400"
                        />
                    </div>

                    <div className="flex space-x-2">
                        <button className="p-2 rounded-lg bg-gray-200 dark:hover:text-[#fff] dark:hover:bg-[#eb7866]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h7v7H3zM14 4h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
                            </svg>
                        </button>
                        <button className="p-2 rounded-lg bg-gray-200 dark:hover:text-[#fff] dark:hover:bg-[#eb7866]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full h-[90%] bg-gray-100 dark:bg-[#424141]">
                <div className="w-full h-[93%]">
                    <div className="w-full h-full overflow-auto bg-white dark:bg-[#575454] shadow-sm rounded-lg">
                        {isLoading ? (
                            <OrdersTableSkeleton />
                        ) : (
                            <div>
                                <table className="w-full border-collapse hidden sm:table">
                                    <thead className="bg-gray-200 dark:bg-[#5e5d5d] text-sm font-medium sticky top-0 z-10 dark:text-[#dad6d6]">
                                        <tr>
                                            {[
                                                { icon: <FaBoxOpen />, label: "Orders" },
                                                { icon: <FaClipboardList />, label: "Total Items" },
                                                { icon: <FaDollarSign />, label: "Total Sales" },
                                                { icon: <FaStickyNote />, label: "Note" },
                                                { icon: <FaUser />, label: "Ordered By" },
                                                { icon: <FaInfoCircle />, label: "Status" },
                                                { icon: <FaCalendarAlt />, label: "Created At" },
                                                { icon: <FaCog />, label: "Action" },
                                            ].map((header, index) => (
                                                <th key={index} className="p-1 border-b font-normal text-left py-1.5">
                                                    <div className="flex items-center gap-2">
                                                        {header.icon}
                                                        <span>{header.label}</span>
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="text-xs">
                                        {orders.map((item, index) => (
                                            <tr key={index} className={`hover:bg-gray-100 dark:hover:bg-[#818080] transition-colors dark:bg-[#575454] dark:text-[#e6e2e2] ${index % 2 === 0 ? 'bg-gray-50 dark:bg-[#4a4a4a]' : 'bg-white dark:bg-[#575454]'}`}>
                                                <td className="p-1 border-b flex items-center gap-3" onClick={() => setDisplayDetails(true)}>
                                                    <div className="h-10 w-10 bg-gray-300 rounded flex items-center justify-center">
                                                        <span className="text-xs text-gray-600">IMG</span>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-xs">{item.batchName}</p>
                                                        <p className="text-gray-500 text-xs dark:text-[#b9b3b3]">{item.orderId}</p>
                                                    </div>
                                                </td>
                                                <td className="p-1 border-b text-left">{item.totalItems}</td>
                                                <td className="p-1 border-b text-left"><div className="flex">$ {item.totalSales} {item.trend ? <IoTrendingUp className="font-bold ml-1 text-[#26ad44]" /> : <IoTrendingDown className="font-bold ml-1 text-[#b43333]" />}</div></td>
                                                <td className="p-1 border-b">{item.orderNote}</td>
                                                <td className="p-1 border-b">{item.orderedBy}</td>
                                                <td className="p-1 border-b text-left">
                                                    <span
                                                        className={`inline-block px-2 py-1 rounded text-white text-xs ${item.orderedFlag === true
                                                            ? "bg-green-500"
                                                            : item.draftFlag === true
                                                                ? "bg-gray-400"
                                                                : "bg-yellow-400"
                                                            }`}
                                                    >
                                                        {item.orderedFlag === true
                                                            ? "Ordered"
                                                            : item.draftFlag === true
                                                                ? "Draft"
                                                                : "Processed"
                                                        }
                                                    </span>
                                                </td>
                                                <td className="p-1 border-b">{new Date(item.orderedDate).toLocaleString()}</td>
                                                <td className="p-1 border-b space-x-2 text-left">
                                                    <button title="View" className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600">{<FaEye />}</button>
                                                    <button title="Delete" className="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600">{<FaRegTrashAlt />}</button>
                                                    <button title="Export" className="px-2 py-1 bg-gray-500 text-white text-xs rounded hover:bg-gray-600"><FaFileExport /></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                {/* <div className="block sm:hidden">
                                    {orders.map((item, index) => (
                                        <div
                                            key={index}
                                            className="border rounded-lg mb-2 shadow-sm bg-white p-4 text-sm"
                                        >
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="h-10 w-10 bg-gray-300 rounded flex items-center justify-center">
                                                    <span className="text-xs text-gray-600">IMG</span>
                                                </div>
                                                <div>
                                                    <p className="font-medium">{item.product}</p>
                                                    <p className="text-gray-500 text-xs">{item.type}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p>
                                                    <span className="font-medium">Price:</span> {item.price}
                                                </p>
                                                <p>
                                                    <span className="font-medium">Status:</span>{" "}
                                                    <span
                                                        className={`inline-block px-2 py-1 rounded text-white text-xs ${item.status === "Published"
                                                            ? "bg-green-500"
                                                            : item.status === "Draft"
                                                                ? "bg-gray-400"
                                                                : "bg-red-500"
                                                            }`}
                                                    >
                                                        {item.status}
                                                    </span>
                                                </p>
                                                <p>
                                                    <span className="font-medium">Total Sales:</span> {item.sales}
                                                </p>
                                                <p>
                                                    <span className="font-medium">Total Revenue:</span>{" "}
                                                    {item.revenue}
                                                </p>
                                                <p>
                                                    <span className="font-medium">Created At:</span> {item.date}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div> */}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex items-center justify-center space-x-2 px-4 py-2 shadow-sm bg-white dark:bg-[#2e2d2d]">
                    <button
                        className={`px-3 py-1 flex items-center rounded-md border border-gray-300 dark:border-gray-600 ${currentPage === 1
                            ? "text-gray-400 dark:text-gray-500 cursor-not-allowed"
                            : "text-[#eb7866] hover:bg-purple-100 dark:hover:bg-gray-700"
                            }`}
                        disabled={currentPage === 1}
                        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                    >
                        <span className="material-icons text-sm"> </span> Previous
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
                                onClick={() => setCurrentPage(page)}
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
                        onClick={() =>
                            currentPage < totalPages && setCurrentPage(currentPage + 1)
                        }
                    >
                        Next <span className="material-icons text-sm"> </span>
                    </button>
                </div>

            </div>

        </div>

    );
}

export default OrderSwiftManagerComponent;