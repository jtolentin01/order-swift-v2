import React from "react";

const UserOrdersSummary: React.FC<{ userOrders: { id: number; name: string; email: string; product: string; quantity: number; price: number; date: string }[] }> = ({ userOrders }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
            <h2 className="text-xl font-semibold mb-3">User Orders Summary</h2>
            <table className="w-full table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-[#837e7e] dark:text-gray-300">ID</th>
                        <th className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-[#837e7e] dark:text-gray-300">Name</th>
                        <th className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-[#837e7e] dark:text-gray-300">Email</th>
                        <th className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-[#837e7e] dark:text-gray-300">Product</th>
                        <th className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-[#837e7e] dark:text-gray-300">Quantity</th>
                        <th className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-[#837e7e] dark:text-gray-300">Price</th>
                        <th className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-[#837e7e] dark:text-gray-300">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {userOrders.map(order => (
                        <tr key={order.id}>
                            <td className="border px-4 py-2">{order.id}</td>
                            <td className="border px-4 py-2">{order.name}</td>
                            <td className="border px-4 py-2">{order.email}</td>
                            <td className="border px-4 py-2">{order.product}</td>
                            <td className="border px-4 py-2">{order.quantity}</td>
                            <td className="border px-4 py-2">${order.price}</td>
                            <td className="border px-4 py-2">{order.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserOrdersSummary;