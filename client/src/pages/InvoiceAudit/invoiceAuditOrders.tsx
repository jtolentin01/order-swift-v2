import React, { useState, useEffect } from "react";
import { getInvoiceAuditBrandDataSegments } from "../../services/invoiceAudit.service";
import * as invoiceInterfaces from "../../interfaces/invoiceAuditInterface";
import { InvoiceAuditTableSkeleton } from "../../components/skeletons/invoiceAuditTableSkeleton";
import { ItemsModal } from "../../components/modalsPreset/itemsModal";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { currentInvoiceAudit } from "../../store/slices/invoiceAuditSlice";
import { toastError } from "../../components/toasters";
import { InvoiceAuditBrandsInterface } from "../../interfaces/invoiceAuditInterface";
import Pagination from "../../components/pagination";
import { ComponentProps } from "../../interfaces/globalComponentInterface";
import { PageNotAvailable } from "../../components/pageNotAvailable";

import { camelToProperCase } from "../../utils/helpers";

import ListingDataTableComponent from "./components/ListingDataTable";
import InvoiceAuditBrandOrderConfirmationInterface from "./components/OrderConfirmationTable";
import InvoiceTableComponent from "./components/InvoiceDataTable";
import { ImportNewPOComponent } from "./components/importNewPO";

import { EditableTable } from "../../components/editableTable";

const InvoiceAuditOrdersComponent: React.FC<ComponentProps> = ({ isDisabled }) => {
    const { segment } = useParams<{ segment: string }>();
    const [isLoading, setLoading] = useState<boolean>(true);
    const [listingsData, setListingsData] = useState<invoiceInterfaces.InvoiceAuditBrandListingDataInterface[]>([]);
    const [orderConfirmationData, setOrderConfirmationData] = useState<invoiceInterfaces.InvoiceAuditBrandOrderConfirmationInterface[]>([]);
    const [invoiceData, setInvoiceData] = useState<invoiceInterfaces.InvoiceAuditBrandInvoiceInterface[]>([]);

    const [displayDetails, setDisplayDetails] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentViewType, setCurrentViewType] = useState<string>("listingsData");
    const [highlightedItem, setHighlightedItem] = useState<string>("");
    const [totalPages, setTotalPages] = useState<number>(0);
    const { items: segmentsBrands, loading, error } = useAppSelector((state) => state.invoiceAudit);
    const [currentBrand, setCurrentBrand] = useState<InvoiceAuditBrandsInterface | null>(null);

    const [modalTitle, setModalTitle] = useState("");
    const [modalSubtitle, setModalSubtitle] = useState("");
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);

    const [modalSize, setModalSize] = useState<"small" | "medium" | "large" | "xl">("xl");

    const itemsPerPage = 15;
    const currentSegmentBrands = segmentsBrands.filter((brand) => brand.segmentId === segment) || [];
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
                if (segmentsBrands.length === 0) {
                    dispatch(currentInvoiceAudit());
                }

                if (!params.get("brand") && currentSegmentBrands.length > 0) {
                    const firstBrandId = currentSegmentBrands[0]?.segmentbrands?.[0]?.brandId;

                    if (firstBrandId) {
                        params.set("brand", String(firstBrandId));
                        navigate(`?${params.toString()}`, { replace: true });
                        params.set("viewtype", String(currentViewType));
                        navigate(`?${params.toString()}`, { replace: true });
                        params.set("page", String(currentPage));
                        navigate(`?${params.toString()}`, { replace: true });
                    }
                } else {
                    const brandId = params.get("brand");
                    const page = params.get("page");
                    const viewType = params.get("viewtype");
                    const highlightedItem = params.get("hpo");
                    const queryBrand = currentSegmentBrands[0]?.segmentbrands?.find((brand) => brand.brandId === brandId);
                    setCurrentBrand(queryBrand || null)
                    setCurrentPage(Number(page) || 1);
                    setCurrentViewType(viewType || "listingsData");
                    setHighlightedItem(highlightedItem || "");
                }
                const fetchedBrandData = await getInvoiceAuditBrandDataSegments(segment || '', currentBrand?.brandId || "");
                setListingsData(fetchedBrandData.map((item) => item.listingData).flat());
                setOrderConfirmationData(fetchedBrandData.map((item) => item.orderConfirmation).flat());
                setInvoiceData(fetchedBrandData.map((item) => item.invoice).flat());

                setTotalPages(Math.ceil(fetchedBrandData.length / itemsPerPage));

            } catch (error) {
                toastError(`Error: ${(error as Error)?.message ?? "Unknown error occurred"}`);
            } finally {
                setLoading(false);
            }
        };

        fetchBrandsAndOrders();
    }, [location.search, navigate, segmentsBrands, segment, currentBrand]);


    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        params.set("page", String(page));
        navigate(`?${params.toString()}`, { replace: true });
    };

    const handleViewType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedViewType = event.target.value;
        params.set("viewtype", String(selectedViewType));
        navigate(`?${params.toString()}`, { replace: true });
    };

    const handleBrandChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedBrandId = event.target.value;
        const queryBrand = currentSegmentBrands[0]?.segmentbrands?.find((brand) => brand.brandId === selectedBrandId);
        setCurrentBrand(queryBrand || null)
        params.set("brand", String(selectedBrandId));
        navigate(`?${params.toString()}`, { replace: true });
    };

    const handleRowAction = (action: "edit" | "delete", data: any) => {
        if (action === "delete") {
            alert('Delete action triggered!');
        } else if (action === "edit") {
            setModalTitle(`${data[0].purchaseOrder}`);
            setModalSubtitle(`has ${data.length} item/s under ${camelToProperCase(currentViewType)}`);
            setModalContent(<EditableTable<invoiceInterfaces.InvoiceAuditBrandListingDataInterface | invoiceInterfaces.InvoiceAuditBrandOrderConfirmationInterface | invoiceInterfaces.InvoiceAuditBrandInvoiceInterface>
                initialData={data}
                onDataChange={(updated) => {
                    alert(`PO# ${data[0].purchaseOrder} Updated data: ${JSON.stringify(updated)}`);
                    setDisplayDetails(false);
                }
                }
                excludeColumns={["purchaseOrder"]}
            />);
            setDisplayDetails(true);
        }
    };

    const handleNewPO = () => {
        setModalSize("medium")
        setModalTitle(`New PO#`);
        setModalSubtitle(`Manually Add new PO or Import bulk PO`);
        setModalContent(<ImportNewPOComponent />);
        setDisplayDetails(true);
    }

    return (
        <div className={`${disabled ? 'relative' : ''} dark:bg-[#2e2d2d] w-full h-full bg-white p-2 flex flex-col`}>
            <div className={`dark:bg-[#2e2d2d] w-full h-full bg-white p-2 flex flex-col ${disabled ? 'blur-sm' : ''}`}>
                {displayDetails && (
                    <ItemsModal onModalClose={() => { setDisplayDetails(false) }} size={modalSize} enable={displayDetails} title={modalTitle} subtitle={modalSubtitle} content={modalContent} />
                )}
                <div className="w-full flex items-center justify-between h-16 bg-white dark:bg-[#585757] dark:text-gray-700 p-2 transition-colors">
                    <div className="flex items-center space-x-4">
                        <div className="">
                            <select
                                className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#d8d5d5] text-sm dark:text-gray-700 focus:outline-none"
                                name="status"
                                value={currentViewType}
                                onChange={handleViewType}
                            >
                                <option value="listingsData">Listings Data</option>
                                <option value="orderconfirmation">Order Confirmation</option>
                                <option value="invoice">Invoice</option>
                            </select>

                        </div>
                        <div className="">
                            <select
                                className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#d8d5d5] text-sm dark:text-gray-700 focus:outline-none"
                                name="status"
                                onChange={handleBrandChange}
                            >
                                {currentSegmentBrands.length > 0 && currentSegmentBrands.some((brand) => brand.segmentbrands && brand.segmentbrands.length > 0) ? (
                                    currentSegmentBrands.map((brand) =>
                                        brand.segmentbrands?.map((item) => (
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
                        <button onClick={() => handleNewPO()} className="text-sm px-4 py-1.5 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-[#d8d5d5] dark:hover:bg-[#eb7866] dark:hover:text-[#fff]">New PO</button>
                    </div>

                    <div className="flex items-center space-x-4">

                        <div className="">
                            <input
                                type="text"
                                placeholder="Search"
                                className="px-4 py-2 rounded-lg bg-gray-200 text-sm focus:outline-none placeholder-gray-500 dark:placeholder-gray-400"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full h-[90%] bg-gray-100 dark:bg-[#424141]">
                    <div className="w-full h-[93%]">
                        <div className="w-full h-full overflow-auto bg-white dark:bg-[#575454] shadow-sm rounded-lg">
                            {isLoading ? (
                                <InvoiceAuditTableSkeleton />
                            ) : (
                                <>
                                    {currentViewType === "listingsData" && (
                                        <ListingDataTableComponent onRowAction={handleRowAction} data={listingsData} highlightedItem={highlightedItem} />
                                    )}
                                    {currentViewType === "orderconfirmation" && (
                                        <InvoiceAuditBrandOrderConfirmationInterface onRowAction={handleRowAction} data={orderConfirmationData} />
                                    )}
                                    {currentViewType === "invoice" && (
                                        <InvoiceTableComponent onRowAction={handleRowAction} data={invoiceData} />
                                    )}
                                </>
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

export default InvoiceAuditOrdersComponent;