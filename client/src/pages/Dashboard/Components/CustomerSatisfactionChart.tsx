import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CustomerSatisfactionChart: React.FC<{ gaugeData: { label: string; value: number }[] }> = ({ gaugeData }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center w-full h-full">
            <h2 className="text-xl font-semibold mb-3">Customer Satisfaction</h2>
            <div className="flex justify-center items-center w-full h-full">
                <PieChart width={200} height={200}>
                    <Pie
                        data={gaugeData}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    >
                        {gaugeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default CustomerSatisfactionChart;