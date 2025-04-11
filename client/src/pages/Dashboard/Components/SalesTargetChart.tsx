import React from "react";
import { RadialBarChart, RadialBar, Tooltip } from "recharts";

const SalesTargetChart: React.FC<{ gaugeData: { label: string; value: number }[] }> = ({ gaugeData }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center w-full h-full">
            <h2 className="text-xl font-semibold mb-3">Sales Target</h2>
            <div className="flex justify-center items-center w-full h-full">
                <RadialBarChart
                    width={200}
                    height={200}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={90}
                    barSize={15}
                    data={gaugeData}
                >
                    <RadialBar background dataKey="value" />
                    <Tooltip />
                </RadialBarChart>
            </div>
        </div>
    );
};

export default SalesTargetChart;