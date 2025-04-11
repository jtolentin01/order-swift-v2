import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const SalesLineChart: React.FC<{ lineChartData: { name: string; Sales: number; Customers: number }[] }> = ({ lineChartData }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center w-full h-full">
            <h2 className="text-xl font-semibold mb-3">Sales Line Chart</h2>
            <div className="flex justify-center items-center w-full h-full">
                <LineChart
                    width={500} 
                    height={350}
                    data={lineChartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }} // Added margin for spacing
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Sales" stroke="#8884d8" />
                    <Line type="monotone" dataKey="Customers" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

export default SalesLineChart;