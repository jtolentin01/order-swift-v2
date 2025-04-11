import React, { useState } from "react";
import { FaBoxOpen, FaChevronDown, FaChevronRight, FaEye, FaRegTrashAlt, FaEdit } from "react-icons/fa";
import { commonProps } from "../../../interfaces/globalComponentInterface";
import { InvoiceAuditBrandOrderConfirmationInterface } from "../../../interfaces/invoiceAuditInterface";

const OrderConfirmationTableComponent: React.FC<commonProps<InvoiceAuditBrandOrderConfirmationInterface[]>> = ({ data = [] }) => {
    const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

    const toggleGroup = (poNumber: string) => {
        setExpandedGroups((prev) => ({
            ...prev,
            [poNumber]: !prev[poNumber],
        }));
    };


    const groupedData = data.reduce((acc, item) => {
        if (!acc[item.purchaseOrder]) {
            acc[item.purchaseOrder] = [];
        }
        acc[item.purchaseOrder].push(item);
        return acc;
    }, {} as Record<string, InvoiceAuditBrandOrderConfirmationInterface[]>);

    return (
        <div>
            <table className="w-full border-collapse hidden sm:table">
                <thead className="bg-gray-200 dark:bg-[#5e5d5d] text-sm font-medium top-0 z-10 dark:text-[#dad6d6]">
                    <tr>
                        <th className="p-2 border-b font-normal text-left py-3">Expand</th>
                        {[
                            { icon: <FaBoxOpen />, label: "PO#" },
                            { icon: <FaBoxOpen />, label: "UPC" },
                            { icon: <FaBoxOpen />, label: "SKU" },
                            { icon: <FaBoxOpen />, label: "ITEM COST" },
                            { icon: <FaBoxOpen />, label: "DISC. COST" },
                            { icon: <FaBoxOpen />, label: "OCQTY" },
                            { icon: <FaBoxOpen />, label: "TOTALCOST" },
                            { icon: <FaBoxOpen />, label: "OCvsDDDISCCOST" },
                            { icon: <FaBoxOpen />, label: "InDD?" },
                            { icon: <FaBoxOpen />, label: "Action" },
                        ].map((header, index) => (
                            <th key={index} className="p-1 border-b font-normal text-left py-2">
                                <div className="flex items-center gap-2">
                                    {header.icon}
                                    <span>{header.label}</span>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-xs">
                    {Object.keys(groupedData || {}).map((poNumber) => (
                        <React.Fragment key={poNumber}>

                            <tr
                                className="bg-gray-100 dark:bg-[#4a4a4a] hover:bg-gray-200 dark:hover:bg-[#575454] transition-colors"
                            >
                                <td className="p-2 border-b text-left">
                                    <button
                                        onClick={() => toggleGroup(poNumber)}
                                        className="flex items-center gap-1 text-blue-500 hover:text-blue-700"
                                    >
                                        {expandedGroups[poNumber] ? <FaChevronDown /> : <FaChevronRight />}
                                        <span>Expand</span>
                                    </button>
                                </td>
                                <td className="p-2 border-b text-left font-medium" colSpan={9}>
                                    {poNumber}
                                </td>
                                <td className="p-2 border-b text-left font-medium flex gap-2">
                                    <button
                                        className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 flex items-center gap-1"
                                    >
                                        <FaEdit />
                                        
                                    </button>
                                    <button
                                        title="Delete"
                                        className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                                    >
                                        {<FaRegTrashAlt />}
                                    </button>
                                </td>
                            </tr>

                            {expandedGroups[poNumber] &&
                                groupedData[poNumber]?.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={`hover:bg-gray-100 dark:hover:bg-[#818080] transition-colors dark:bg-[#575454] dark:text-[#e6e2e2] ${index % 2 === 0 ? 'bg-gray-50 dark:bg-[#4a4a4a]' : 'bg-white dark:bg-[#575454]'
                                            }`}
                                    >
                                        <td className="p-2 border-b"></td>
                                        <td className="p-2 border-b text-left">{item.purchaseOrder}</td>
                                        <td className="p-2 border-b text-left">{item.upc}</td>
                                        <td className="p-2 border-b text-left">{item.sku}</td>
                                        <td className="p-2 border-b text-left">{item.itemCost}</td>
                                        <td className="p-2 border-b text-left">{item.discountCost}</td>
                                        <td className="p-2 border-b text-left">{item.ocQuantity}</td>
                                        <td className="p-2 border-b text-left">{item.ocTotalCost}</td>
                                        <td className="p-2 border-b text-left">{item.ocDdDiscountedCost}</td>
                                        <td className="p-2 border-b text-left">{item.inDD ? 'YES' : 'NO'}</td>
                                        <td className="p-2 border-b text-left"> </td>
                                    </tr>
                                ))}
                        </React.Fragment>
                    ))}
                    {data.length === 0 && (
                        <tr>
                            <td colSpan={13} className="text-center p-4 text-base">
                                No data available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default OrderConfirmationTableComponent;