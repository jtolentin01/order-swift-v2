import React from "react";
import { OrderManagerBrandsInterface } from "../../interfaces/orderManagerInterface";

type OrderManagerBrandInfoTemplateProps = {
    brand: OrderManagerBrandsInterface[];
};

export const OrderManagerBrandInfoTemplate: React.FC<OrderManagerBrandInfoTemplateProps> = (brandProps) => {
    return (
        <div className="space-y-2">
            <div
                className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg bg-white dark:bg-[#333] dark:border-[#444] transition-all duration-300 hover:bg-gray-100 dark:hover:bg-[#444]"
            >
                <p className="text-gray-800 dark:text-gray-200 text-sm"><strong>Brand ID : </strong>{brandProps.brand[0].brandId}</p>
            </div>
            <div
                className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg bg-white dark:bg-[#333] dark:border-[#444] transition-all duration-300 hover:bg-gray-100 dark:hover:bg-[#444]"
            >
                <p className="text-gray-800 dark:text-gray-200 text-sm"><strong>About : </strong>{brandProps.brand[0].description}</p>
            </div>
        </div>

    );
}