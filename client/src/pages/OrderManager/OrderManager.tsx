import React, { useState, useEffect } from "react";
import { getOrderManagerBrandOrders } from "../../services/orderManager.service";
import { OrderManagerBrandOrdersInterface } from "../../interfaces/orderManagerInterface";
import { OrdersTableManagerSkeleton } from "../../components/skeletons/orderTableManagerSkeleton";
import { DisplayOrderDetailsTemplate } from "../../components/templates/orderDetailsTemplate";
import { OrderManagerNotesTemplate } from "../../components/templates/orderManagerNotes";
import { OrderManagerBrandInfoTemplate } from "../../components/templates/orderManagerBrandInfo";
import { ItemsModal } from "../../components/modalsPreset/itemsModal";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { currentOrderManagers } from "../../store/slices/orderManagerSlice";
import { FaBoxOpen, FaCalendarAlt, FaCog, FaEye, FaFileExport, FaRegTrashAlt } from "react-icons/fa"
import { FaBarcode } from "react-icons/fa6";
import { FaBoxes } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { MdDateRange, MdNoteAlt } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { toastError } from "../../components/toasters";
import { OrderManagerBrandsInterface } from "../../interfaces/orderManagerInterface";
import Pagination from "../../components/pagination";
import { ComponentProps } from "../../interfaces/globalComponentInterface";
import { PageNotAvailable } from "../../components/pageNotAvailable";

const OrderManagerComponent: React.FC<ComponentProps> = ({ isDisabled }) => {
    const { om } = useParams<{ om: string }>();

    const [modalTitle, setModalTitle] = useState("");
    const [modalSubtitle, setModalSubtitle] = useState("");
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [orders, setOrders] = useState<OrderManagerBrandOrdersInterface[]>([]);
    const [displayDetails, setDisplayDetails] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const { items: orderManagerBrands, loading, error } = useAppSelector((state) => state.orderManager);
    const [currentBrand, setCurrentBrand] = useState<OrderManagerBrandsInterface | null>(null);

    const itemsPerPage = 15;
    const omBrands = orderManagerBrands.filter((brand) => brand.orderManagerId === om) || [];
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const params = new URLSearchParams(location.search);
    const [disabled, setDisabled] = useState<boolean>(isDisabled);

    useEffect(() => {
        setDisabled(isDisabled);
    }, [isDisabled]);

    useEffect(() => {
        const fetchBrandsAndOrders = async () => {
            setLoading(true);
            try {
                if (orderManagerBrands.length === 0) {
                    dispatch(currentOrderManagers());
                }

                if (!params.get("brand") && omBrands.length > 0) {
                    const firstBrandId = omBrands[0]?.brands?.[0]?.brandId;

                    if (firstBrandId) {

                        params.set("brand", String(firstBrandId));
                        navigate(`?${params.toString()}`, { replace: true });
                        params.set("page", String(currentPage));
                        navigate(`?${params.toString()}`, { replace: true });
                    }
                } else {
                    const brandId = params.get("brand");
                    const page = params.get("page");
                    const queryBrand = omBrands[0]?.brands?.find((brand) => brand.brandId === brandId);
                    setCurrentBrand(queryBrand || null)
                    setCurrentPage(Number(page) || 1);
                }
                const fetchedOrders = await getOrderManagerBrandOrders(om || '', currentBrand?.brandId || '');
                setOrders(fetchedOrders);
                setTotalPages(Math.ceil(fetchedOrders.length / itemsPerPage));

            } catch (error) {
                toastError(`Error: ${(error as Error)?.message ?? "Unknown error occurred"}`);
            } finally {
                setLoading(false);
            }
        };

        fetchBrandsAndOrders();
    }, [location.search, navigate, orderManagerBrands, om, currentBrand]);

    const handleViewNotes = () => {
        const brandNotes = omBrands[0]?.brands?.find((brand) => brand.brandId === currentBrand?.brandId)?.notes || [];
        setModalTitle(`${currentBrand?.brandName || ''} - Notes`);
        setModalSubtitle('');
        setModalContent(<OrderManagerNotesTemplate notes={brandNotes} />);
        setDisplayDetails(true);
    }

    const handleViewOrderDetails = (orderId: string) => {
        setModalTitle("Order Details");
        setModalSubtitle(orderId);
        setModalContent(<DisplayOrderDetailsTemplate />);
        setDisplayDetails(true);
    }

    const handleViewBrandInfo = () => {
        setModalTitle(`${currentBrand?.brandName || ''} Info`);
        setModalSubtitle('');
        setModalContent(<OrderManagerBrandInfoTemplate brand={currentBrand ? [currentBrand] : []} />);
        setDisplayDetails(true);
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        params.set("page", String(page));
        navigate(`?${params.toString()}`, { replace: true });
    };

    const handleBrandChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedBrandId = event.target.value;
        const queryBrand = omBrands[0]?.brands?.find((brand) => brand.brandId === selectedBrandId);
        setCurrentBrand(queryBrand || null)
        params.set("brand", String(selectedBrandId));
        navigate(`?${params.toString()}`, { replace: true });
    };

    return (
        <div className={`${disabled ? 'relative' : ''} dark:bg-[#2e2d2d] w-full h-full bg-white p-2 flex flex-col`}>
            <div className={`dark:bg-[#2e2d2d] w-full h-full bg-white p-2 flex flex-col ${disabled ? 'blur-sm' : ''}`}>
                {displayDetails && (
                    <ItemsModal onModalClose={() => { setDisplayDetails(false) }} enable={displayDetails} title={modalTitle} subtitle={modalSubtitle} content={modalContent} />
                )}
                <div className="w-full flex items-center justify-between h-16 bg-white dark:bg-[#585757] dark:text-gray-700 p-2 transition-colors">
                    <div className="flex items-center space-x-4">
                        <div className="">
                            <select
                                className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#d8d5d5] text-sm dark:text-gray-700 focus:outline-none"
                                name="status"
                                onChange={handleBrandChange}
                            >
                                {omBrands.length > 0 && omBrands.some((brand) => brand.brands && brand.brands.length > 0) ? (
                                    omBrands.map((brand) =>
                                        brand.brands?.map((item) => (
                                            <option key={item.brandId} value={item.brandId}>
                                                {item.brandName}
                                            </option>
                                        ))
                                    )
                                ) : (
                                    <option value="" disabled selected>
                                        No brands
                                    </option>
                                )}
                            </select>


                        </div>
                        <button className="text-sm px-4 py-1.5 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-[#d8d5d5] dark:hover:bg-[#eb7866] dark:hover:text-[#fff]" onClick={() => handleViewNotes()}>Notes </button>
                        <button onClick={() => handleViewBrandInfo()} className="text-sm px-4 py-1.5 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-[#d8d5d5] dark:hover:bg-[#eb7866] dark:hover:text-[#fff]">Brand Info </button>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="">
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
                                <OrdersTableManagerSkeleton />
                            ) : (
                                <div>
                                    <table className="w-full border-collapse hidden sm:table">
                                        <thead className="bg-gray-200 dark:bg-[#5e5d5d] text-sm font-medium top-0 z-10 dark:text-[#dad6d6]">
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
                                            {orders.map((item, index) => (
                                                <tr key={index} className={`hover:bg-gray-100 dark:hover:bg-[#818080] transition-colors dark:bg-[#575454] dark:text-[#e6e2e2] ${index % 2 === 0 ? 'bg-gray-50 dark:bg-[#4a4a4a]' : 'bg-white dark:bg-[#575454]'}`}>
                                                    <td className="p-1 border-b flex items-center gap-3" >
                                                        <div className="h-10 w-10 bg-gray-300 rounded flex items-center justify-center">
                                                            <span className="text-xs text-gray-600">IMG</span>
                                                        </div>
                                                        <div>
                                                            <p className="font-medium text-xs">{item.orderId}</p>
                                                            <p className="text-gray-500 text-xs dark:text-[#b9b3b3]">{item.poNumber}</p>
                                                        </div>
                                                    </td>
                                                    <td className="p-1 border-b text-left">{item.orderSku}</td>
                                                    <td className="p-1 border-b text-left"><div className="flex">{item.quantity} </div></td>
                                                    <td className="p-1 border-b">{item.customerName}</td>
                                                    <td className="p-1 border-b">{new Date(item.lesd).toLocaleString()}</td>
                                                    <td className="p-1 border-b truncate">{item.smNotes}</td>
                                                    <td className="p-1 border-b truncate">{item.csNotes}</td>
                                                    <td className="p-1 border-b">{item.trackingNumber}</td>
                                                    <td className="p-1 border-b">{item.updatedBy}</td>
                                                    <td className="p-1 border-b">{new Date(item.updatedDate).toLocaleString()}</td>

                                                    <td className="p-1 border-b text-left">
                                                        <span
                                                            className={`inline-block px-2 py-1 rounded text-white text-xs ${item.status === "Ordered"
                                                                ? "bg-green-500"
                                                                : item.status === "Draft"
                                                                    ? "bg-gray-400"
                                                                    : "bg-yellow-400"
                                                                }`}
                                                        >
                                                            {item.status === "Ordered"
                                                                ? "Ordered" : item.status
                                                            }
                                                        </span>
                                                    </td>
                                                    <td className="p-1 border-b space-x-2 text-left">
                                                        <button title="View" className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600" onClick={() => handleViewOrderDetails(item.orderId)}>{<FaEye />}</button>
                                                        <button title="Delete" className="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600">{<FaRegTrashAlt />}</button>
                                                        <button title="Export" className="px-2 py-1 bg-gray-500 text-white text-xs rounded hover:bg-gray-600"><FaFileExport /></button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
            {disabled && (<PageNotAvailable />)}
        </div>
    );
}

export default OrderManagerComponent;