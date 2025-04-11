import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { currentProducts } from "../../../store/slices/productsSlice";
import { ImportOrderSkeleton } from "../../../components/skeletons/importOrderSkeleton";
import { MdOutlineFileUpload } from "react-icons/md";
import { TbShoppingCartSearch } from "react-icons/tb";

const ImportOrderComponent: React.FC = () => {
    const dispatch = useAppDispatch();
    const { products, loading } = useAppSelector((state) => state.products);
    const [view, setView] = useState<"orders" | "bulkImport">("orders");

    useEffect(() => {
        dispatch(currentProducts());
    }, [dispatch]);

    const selectedProducts = [
        { id: 1, name: "Luxemburgs Insanity Kit", code: "P001", description: "Description 1", price: 10.0, units: 2, totalUnits: 10, availableDate: "2025-03-01", imageUrl: "https://placehold.co/150" },
        { id: 2, name: "Iphone 20 Pro Max", code: "P002", description: "Description 2", price: 20.0, units: 1, totalUnits: 5, availableDate: "2025-03-01", imageUrl: "https://placehold.co/150" },
    ];

    return (
        <>
            <div className="w-full h-full bg-white p-4 dark:bg-[#2e2d2d] flex flex-col lg:flex-row gap-4 justify-between">
                <div className="w-full lg:w-[30%] bg-[#f5f2f2] dark:bg-[#474646] rounded-[6px] flex flex-col p-2 dark:text-[#c9c8c8]">
                    <div className="h-14 border-b dark:border-[#998383] flex items-center justify-between">
                        <div>
                            <p>Eagle Creek</p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                className={`flex items-center gap-1 bg-[#d8d5d5] text-[#fff] px-2 py-1 rounded-lg text-sm font-medium hover:bg-[#eb7866] hover:text-[#fff] ${view === "bulkImport" ? "bg-[#eb7866] text-[#fff]" : ""}`}
                                onClick={() => setView("bulkImport")}
                            >
                                <MdOutlineFileUpload className="text-lg" />Import</button>

                            <button
                                className={`flex items-center gap-2 bg-[#d8d5d5] text-[#fff] px-2 py-1 rounded-lg text-sm font-medium hover:bg-[#eb7866] hover:text-[#fff] ${view === "orders" ? "bg-[#eb7866] text-[#fff]" : ""}`}
                                onClick={() => setView("orders")}
                            >
                                <TbShoppingCartSearch className="text-lg" />
                                Orders
                            </button>

                        </div>
                    </div>
                    <div className="flex flex-col justify-between h-full dark:text-[#d6d2d2] mt-4">
                        {view === "orders" ? (
                            <div className="dark:bg-[#5f5d5d] bg-[#eeebeb] h-full overflow-auto p-2">
                                {selectedProducts.map((product) => (
                                    <div key={product.id} className="border border-gray-300 rounded-lg p-4 shadow-sm w-full dark:bg-[#504e4e] dark:text-[#fff] bg-white mt-2">
                                        <div className="flex flex-col md:flex-row justify-between items-start">
                                            <div className="flex gap-4">
                                                <img src={product.imageUrl} alt={product.name} className="w-16 h-16 rounded-md object-cover" />
                                                <div>
                                                    <h3 className="font-semibold text-sm md:text-xs">{product.name}</h3>
                                                    <p className="text-sm text-gray-500 dark:text-[#fff] md:text-xs">{product.description}</p>
                                                    <input className="appearance-none block w-full md:w-20 h-8 text-[#a77d7d] dark:text-[#dfdcdc] bg-gray-100 dark:bg-[#726e6e] border rounded py-3 px-4 leading-tight focus:outline-none dark:border-gray-300 focus:border-red-200" value={product.units} type="number" />
                                                </div>

                                            </div>
                                            <div className="text-right mt-4 md:mt-0">
                                                <p className="text-sm text-gray-500 dark:text-[#c9c8c8] md:text-xs">Price ($)</p>
                                                <p className="font-semibold text-lg md:text-base">${product.price.toFixed(2)}</p>
                                                <button
                                                    className="mt-2 bg-[#d8d5d5] text-gray-700 px-2 py-1 rounded-lg text-sm font-medium hover:bg-[#eb7866] hover:text-[#fff]">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="dark:bg-[#5f5d5d] bg-[#eeebeb] h-full overflow-auto p-2 flex items-center justify-center">
                                <div className="border border-dashed border-gray-400 rounded-lg p-4 w-full text-center">
                                    <p className="text-gray-500 dark:text-[#c9c8c8]">Drag and drop your files here</p>
                                    <p className="text-gray-500 dark:text-[#c9c8c8]">or</p>
                                    <button className="bg-[#d8d5d5] text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#eb7866] hover:text-[#fff]">
                                        Browse Files
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="w-full lg:w-[69.5%] flex flex-col p-2 border border-red-200 dark:border-[#998383] rounded-[7px] text-[#4d4c4c] dark:text-[#c2c1c1]">
                    <div className="h-14 border-b border-[#E0E0E0] dark:border-[#998383] flex items-center">
                        <div className="flex flex-row items-center gap-2 w-full">
                            <input
                                className="appearance-none block w-full md:w-48 h-8 text-[#a77d7d] dark:text-[#dfdcdc] bg-gray-100 dark:bg-[#726e6e] border rounded py-3 px-4 leading-tight focus:outline-none dark:border-gray-300 focus:border-red-200"
                                type="text"
                                placeholder="Search..."
                            />
                            <p className="text-sm">Results: {products.length}</p>
                        </div>
                        <div className="flex items-center w-20 h-8 justify-center">
                            <p>Logo</p>
                        </div>
                    </div>
                    <div className="h-full">
                        {products?.map((product) => (
                            <div
                                key={product.id}
                                className="border border-gray-300 rounded-lg p-4 shadow-sm w-full dark:bg-[#504e4e] dark:text-[#fff] bg-white mt-2"
                            >
                                <div className="flex flex-col md:flex-row justify-between items-start">
                                    <div className="flex gap-4">
                                        <img
                                            src={product.imageUrl}
                                            alt={product.name}
                                            className="w-16 h-16 rounded-md object-cover"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-lg md:text-base">{product.name}</h3>
                                            <p className="text-sm text-gray-500 dark:text-[#fff] md:text-xs">{product.code}</p>
                                            <p className="text-sm text-gray-500 dark:text-[#fff] md:text-xs">{product.description}</p>
                                            <a href={`#details?productid=${product.id}`} className="text-blue-500 text-sm underline md:text-xs">
                                                More Details
                                            </a>
                                            <p className="text-sm text-gray-500 mt-1 dark:text-[#fff] md:text-xs">
                                                Available as of <span className="font-medium">{product.availableDate}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right mt-4 md:mt-0">
                                        <p className="text-sm text-gray-500 dark:text-[#c9c8c8] md:text-xs">Price ($)</p>
                                        <p className="font-semibold text-lg md:text-base">${product.price.toFixed(2)}</p>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mt-4 border-t border-gray-200 pt-4">
                                    <div className="flex items-center gap-2">
                                        <input
                                            className="appearance-none block w-full md:w-20 h-8 text-[#a77d7d] dark:text-[#dfdcdc] bg-gray-100 dark:bg-[#726e6e] border rounded py-3 px-4 leading-tight focus:outline-none dark:border-gray-300 focus:border-red-200"
                                            value={product.units}
                                            type="number"
                                        />
                                        <p className="text-sm text-gray-500 dark:text-[#fff]">
                                            / {product.totalUnits} Units{" "}
                                            <span className="ml-2 font-medium">
                                                ${(product.units * product.price).toFixed(2)} Total
                                            </span>
                                        </p>
                                    </div>

                                    <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#eb7866] hover:text-[#fff]">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                        ))}
                        {loading == true ?

                            <ImportOrderSkeleton />

                            :
                            <>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImportOrderComponent;