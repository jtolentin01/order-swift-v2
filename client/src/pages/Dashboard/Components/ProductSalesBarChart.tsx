import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const ProductSalesBarChart: React.FC<{ barChartData: { name: string; Sales: number }[] }> = ({ barChartData }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center w-full h-full">
            <h2 className="text-xl font-semibold mb-3">Product Sales Bar Chart</h2>
            <div className="flex justify-center items-center w-full h-full">
                <BarChart
                    width={500} 
                    height={350}
                    data={barChartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }} 
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Sales" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
};

export default ProductSalesBarChart;