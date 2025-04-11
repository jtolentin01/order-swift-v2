import React from "react";

const BrandsReport: React.FC<{ brandsData: { id: number; name: string; sales: number }[] }> = ({ brandsData }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-3">Brands</h2>
            <ul className="space-y-2">
                {brandsData.map(brand => (
                    <li key={brand.id} className="border-b pb-2">
                        <span className="font-medium">{brand.name}</span>: ${brand.sales} in sales
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrandsReport;