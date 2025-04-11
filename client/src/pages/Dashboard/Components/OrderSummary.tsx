import React from "react";
import { ResponsiveContainer, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area, Bar, Line, Scatter } from "recharts";

interface OrderSummaryProps {
    data: Array<{ name: string; Sales: number; Revenue: number; Customers: number }>;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={data}>
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="Revenue" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="Sales" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="Customers" stroke="#ff7300" />
                <Scatter dataKey="Customers" fill="red" />
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default OrderSummary;