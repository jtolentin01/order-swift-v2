import React from "react";
import Chart from "react-apexcharts";

const DailySalesOrderChart: React.FC<{ candlestickData: { data: { x: Date; y: number[] }[] }[] }> = ({ candlestickData }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-6 w-full">
            <h2 className="text-xl font-semibold mb-3">Daily Sales Order</h2>
            <Chart
                options={{
                    chart: {
                        type: "candlestick",
                        height: 350,
                    },
                    xaxis: {
                        type: "datetime",
                    },
                    yaxis: {
                        tooltip: {
                            enabled: true,
                        },
                    },
                }}
                series={candlestickData}
                type="candlestick"
                height={350}
            />
        </div>
    );
};

export default DailySalesOrderChart;