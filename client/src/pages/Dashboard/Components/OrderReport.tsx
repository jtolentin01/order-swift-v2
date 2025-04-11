import React from "react";

const OrderReport: React.FC<{ ordersData: { id: number; product: string; quantity: number; price: number }[] }> = ({ ordersData }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-3">Order Report</h2>
            <ul className="space-y-2">
                {ordersData.map(order => (
                    <li key={order.id} className="border-b pb-2">
                        <span className="font-medium">{order.product}</span>: {order.quantity} units @ ${order.price} each
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderReport;