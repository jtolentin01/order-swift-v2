import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import * as DashboardComponents from "./Components"
import { useCheckUserPermission } from "../../utils/userPermission";
import { useCheckUserReportAccess } from "../../utils/userAccessControl";
import { toastError, toastSuccess } from "../../components/toasters";

const DashboardComponent: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const params = new URLSearchParams(location.search);

    const paramsbrandId = params.get("brand")
    const paramsFrequency = params.get("frequency")

    const canUserExportReports = useCheckUserPermission(['HASPERMISSION_EXPORT_REPORTS']);

    const { items: client } = useAppSelector((state) => state.clients);
    const { items: brands } = useAppSelector((state) => state.brands);
    const [selectedBrandId, setSelectedBrandId] = useState<string>("")

    const handleBrandChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const brandId = event.target.value;
        setSelectedBrandId(brandId);
        const updatedBrand = brandId || "all";
        navigate(`?brand=${updatedBrand}&frequency=${paramsFrequency || "weekly"}`);
    };

    const handleReportFrequencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const frequency = event.target.value;
        navigate(`?brand=${selectedBrandId || "all"}&frequency=${frequency}`);
    };

    const handleExportTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const exportType = event.target.value;
        if(canUserExportReports){
            toastSuccess(`Exporting reports to ${exportType.toLocaleUpperCase()} ...`);
        } else {
            toastError("You do not have permission to export reports.");
        }
    };

    useEffect(() => {
        if (!paramsbrandId && brands?.length > 0) {
            const firstBrandId = brands[0].brandId;
            setSelectedBrandId(firstBrandId);
            navigate(`?brand=${firstBrandId}&frequency=${paramsFrequency || "weekly"}`);
        } else if (!paramsFrequency) {
            navigate(`?brand=${paramsbrandId || ""}&frequency=weekly`);
        }
    }, [paramsbrandId, paramsFrequency, brands, navigate]);

    const ordersData = [
        { id: 1, product: "Product A", quantity: 10, price: 100 },
        { id: 2, product: "Product B", quantity: 5, price: 50 },
        { id: 3, product: "Product C", quantity: 20, price: 200 },
    ];

    const brandsData = [
        { id: 1, name: "Helly Hansen", sales: 1000 },
        { id: 2, name: "Tukohoshi", sales: 500 },
        { id: 3, name: "Tachikara", sales: 2000 },
    ];

    const gaugeData = [
        { label: "Sales Target", value: 70 },
        { label: "Customer Satisfaction", value: 85 },
        { label: "Revenue Growth", value: 60 },
        { label: "Market Share", value: 50 },
    ];

    // const lineChartData = [
    //     { name: 'Jan', Sales: 4000, Customers: 2400 },
    //     { name: 'Feb', Sales: 3000, Customers: 1398 },
    //     { name: 'Mar', Sales: 2000, Customers: 9800 },
    //     { name: 'Apr', Sales: 2780, Customers: 3908 },
    //     { name: 'May', Sales: 1890, Customers: 4800 },
    //     { name: 'Jun', Sales: 2390, Customers: 3800 },
    //     { name: 'Jul', Sales: 3490, Customers: 4300 },
    // ];

    const barChartData = [
        { name: 'Product A', Sales: 4000 },
        { name: 'Product B', Sales: 3000 },
        { name: 'Product C', Sales: 2000 },
    ];

    const composedChartData = [
        { name: 'Jan', Sales: 4000, Revenue: 2400, Customers: 2400 },
        { name: 'Feb', Sales: 3000, Revenue: 1398, Customers: 2210 },
        { name: 'Mar', Sales: 2000, Revenue: 9800, Customers: 2290 },
        { name: 'Apr', Sales: 2780, Revenue: 3908, Customers: 2000 },
        { name: 'May', Sales: 1890, Revenue: 4800, Customers: 2181 },
        { name: 'Jun', Sales: 2390, Revenue: 3800, Customers: 2500 },
        { name: 'Jul', Sales: 3490, Revenue: 4300, Customers: 2100 },
    ];

    const userOrders = [
        { id: 1, name: "John Doe", email: "john@example.com", product: "Product A", quantity: 2, price: 200, date: "2025-03-01" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", product: "Product B", quantity: 1, price: 50, date: "2025-03-02" },
        { id: 3, name: "Alice Johnson", email: "alice@example.com", product: "Product C", quantity: 3, price: 600, date: "2025-03-03" },
        { id: 4, name: "Bob Brown", email: "bob@example.com", product: "Product A", quantity: 4, price: 400, date: "2025-03-04" },
        { id: 5, name: "Charlie Davis", email: "charlie@example.com", product: "Product B", quantity: 2, price: 100, date: "2025-03-05" },
        { id: 6, name: "Diana Evans", email: "diana@example.com", product: "Product C", quantity: 1, price: 200, date: "2025-03-06" },
        { id: 7, name: "Eve Foster", email: "eve@example.com", product: "Product A", quantity: 5, price: 500, date: "2025-03-07" },
    ];

    const candlestickData = [
        {
            data: [
                { x: new Date(2025, 2, 1), y: [51.98, 56.29, 51.59, 53.85] },
                { x: new Date(2025, 2, 2), y: [53.66, 54.99, 51.35, 52.95] },
                { x: new Date(2025, 2, 3), y: [52.96, 53.78, 51.54, 52.48] },
                { x: new Date(2025, 2, 4), y: [52.54, 52.79, 47.88, 49.24] },
                { x: new Date(2025, 2, 5), y: [49.10, 52.86, 47.70, 52.78] },
                { x: new Date(2025, 2, 6), y: [52.83, 53.48, 51.64, 52.31] },
                { x: new Date(2025, 2, 7), y: [52.32, 52.95, 51.68, 52.94] },
                { x: new Date(2025, 2, 8), y: [52.90, 53.50, 52.00, 52.45] },
                { x: new Date(2025, 2, 9), y: [52.40, 54.10, 52.20, 53.80] },
                { x: new Date(2025, 2, 10), y: [53.85, 55.00, 53.10, 54.60] },
                { x: new Date(2025, 2, 11), y: [54.50, 55.30, 53.90, 54.20] },
                { x: new Date(2025, 2, 12), y: [54.10, 56.00, 54.00, 55.50] },
                { x: new Date(2025, 2, 13), y: [55.40, 56.50, 54.90, 56.20] },
                { x: new Date(2025, 2, 14), y: [56.10, 57.00, 55.50, 56.80] },
                { x: new Date(2025, 2, 15), y: [56.70, 57.50, 56.30, 57.20] },
            ]
        }
    ];

    return (
        <div className="dark:bg-[#1a1a1a] bg-gray-100 w-full p-6 flex flex-col min-h-screen text-gray-900 dark:text-gray-300">
            <div className="w-full flex flex-row items-center justify-between mr-4">
                <h1 className="text-2xl font-bold mb-6 text-left text-[#3a3838]">Report Dashboard</h1>
                <p className="text-[#a6a3a3] text-sm flex items-center">
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full inline-block mr-1"></span>
                    Analysis as of March 04, 2025
                </p>
            </div>
            <div className="w-full h-full flex flex-col gap-3">
                <div className="w-full h-auto flex flex-row items-center justify-between">
                    <div>
                        <p className="text-sm">Reports for {client[0]?.clientName || ''}</p>
                    </div>
                    <div>
                        <select
                            onChange={handleBrandChange}
                            value={selectedBrandId || ""}
                            className="dark:bg-gray-700 dark:text-gray-300 bg-gray-200 text-gray-900 p-2 rounded-md mr-2"
                        >
                            <option value="">All Brands</option>
                            {brands?.map((brand) => (
                                <option value={brand.brandId} key={brand.brandId}>
                                    {brand.brandName}
                                </option>
                            ))}
                        </select>
                        <select
                            onChange={handleReportFrequencyChange}
                            value={paramsFrequency || "weekly"}
                            className="dark:bg-gray-700 dark:text-gray-300 bg-gray-200 text-gray-900 p-2 rounded-md mr-2"
                        >
                            <option value="weekly">Weekly</option>
                            <option value="bi-weekly">Bi-weekly</option>
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>
                        </select>
                        <select
                            onChange={handleExportTypeChange}
                            className="dark:bg-gray-700 dark:text-gray-300 bg-gray-200 text-gray-900 p-2 rounded-md"
                        >
                            <option value="">Export</option>
                            <option value="csv">CSV</option>
                            <option value="pdf">PDF</option>
                        </select>
                    </div>

                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
                    <div className="flex flex-row justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold mb-3">Order Summary</h2>
                        <div className="flex flex-row gap-2">

                        </div>
                    </div>
                    <DashboardComponents.OrderSummary data={composedChartData} />

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        useCheckUserReportAccess(['order_report']) &&
                        <>
                            <DashboardComponents.OrderReport ordersData={ordersData} />
                            <DashboardComponents.CustomerSatisfactionChart gaugeData={gaugeData} />
                        </>
                    }
                    {
                        useCheckUserReportAccess(['sales_report']) &&
                        <>
                            <DashboardComponents.OrderReport ordersData={ordersData} />
                            <DashboardComponents.BrandsReport brandsData={brandsData} />
                            <DashboardComponents.SalesTargetChart gaugeData={gaugeData} />
                        </>
                    }
                    {
                        useCheckUserReportAccess(['product_sales_Report']) &&
                        <DashboardComponents.ProductSalesBarChart barChartData={barChartData} />
                    }

                </div>

                <DashboardComponents.UserOrdersSummary userOrders={userOrders} />
                <DashboardComponents.DailySalesOrderChart candlestickData={candlestickData} />
            </div>
        </div>
    );
};

export default DashboardComponent;