import React, { useState, useEffect } from "react";
import { getAllUser } from "../../services/users.service";
import { UserInterface } from "../../interfaces/userInterface";
import { FaUser, FaCog, FaRegTrashAlt, FaRegEdit } from "react-icons/fa"
import { ItemsModal } from "../../components/modalsPreset/itemsModal";
import { EditUserTemplate } from "../../components/templates/editUserTemplate";
import { UsersTableSkeleton } from "../../components/skeletons/usersTableSkeleton";
import config from "../../config/config";
import { ComponentProps } from "../../interfaces/globalComponentInterface";
import { PageNotAvailable } from "../../components/pageNotAvailable";

export const UsersComponent: React.FC<ComponentProps> = ({ isDisabled }) => {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<UserInterface[]>([]);
    const [displayDetails, setDisplayDetails] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const itemsPerPage = config.itemsPerPage
    const [selectedUser, setSelectedUser] = useState<UserInterface>();
    const [disabled, setDisabled] = useState<boolean>(isDisabled);

    useEffect(() => {
        setDisabled(isDisabled);
    }, [isDisabled]);

    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true);
            try {
                const fetchedOrders = await getAllUser();
                setUsers(fetchedOrders);
                setTotalPages(Math.ceil(fetchedOrders.length / itemsPerPage));
            } catch (error) {
                console.error('Error fetching orders:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className={`w-full h-full  ${disabled ? 'relative' : ''}`}>
            <div className={`dark:bg-[#2e2d2d] w-full h-full bg-white p-2 flex flex-col ${disabled ? 'blur-sm' : ''}`}>
                {selectedUser && (
                    <ItemsModal
                        enable={displayDetails}
                        title={`${selectedUser.firstName} ${selectedUser.lastName}`}
                        subtitle={`${selectedUser.email}`}
                        content={<EditUserTemplate userObject={selectedUser} />}
                        onModalClose={() => setDisplayDetails(false)}
                    />
                )}
                <div className="w-full flex items-center justify-between h-[10%] bg-white dark:bg-[#585757] dark:text-gray-700 p-2 transition-colors">
                    <div className="w-full flex items-center justify-between h-[10%] bg-white dark:bg-[#585757] dark:text-gray-700 p-2 transition-colors">
                        <div className="flex items-center space-x-4">
                            <button className="px-4 py-1.5 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-[#d8d5d5] dark:hover:bg-[#eb7866] dark:hover:text-[#fff]">
                                All <span className="text-sm font-medium text-gray-500 dark:text-[#fff]">(25)</span>
                            </button>
                            <button className="px-4 py-1.5 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-[#d8d5d5] dark:hover:bg-[#eb7866] dark:hover:text-[#fff]">
                                Item <span className="text-sm font-medium text-gray-500 dark:text-[#fff]">(100)</span>
                            </button>

                            <div className="relative">
                                <select
                                    className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#d8d5d5] text-sm dark:text-gray-700 focus:outline-none"
                                    name="status"
                                >
                                    <option value="">Status</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="px-4 py-2 rounded-lg bg-gray-200 text-sm focus:outline-none placeholder-gray-500 dark:placeholder-gray-400"
                                />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-full h-[90%] bg-gray-100 dark:bg-[#424141]">
                    <div className="w-full h-[93%]">
                        <div className="w-full h-full overflow-auto bg-white dark:bg-[#575454] shadow-sm rounded-lg">
                            {isLoading ? (
                                <UsersTableSkeleton />

                            ) : (
                                <div>
                                    <table className="w-full border-collapse hidden sm:table ">
                                        <thead className="bg-gray-200 dark:bg-[#5e5d5d] text-sm font-medium top-0 z-10 dark:text-[#dad6d6]">
                                            <tr>
                                                {[
                                                    { icon: <FaUser />, label: "User Name" },
                                                    { icon: <></>, label: "Role" },
                                                    { icon: <></>, label: "Organization" },
                                                    { icon: <></>, label: "Status" },
                                                    { icon: <></>, label: "Last active" },
                                                    { icon: <></>, label: "Date added" },
                                                    { icon: <FaCog />, label: "Action" },
                                                ].map((header, index) => (
                                                    <th key={index} className="p-2 border-b font-normal text-left py-2.5">
                                                        <div className="flex items-center gap-2">
                                                            {header.icon}
                                                            <span>{header.label}</span>
                                                        </div>
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                            {users.map((item, index) => (
                                                <tr key={index} className="hover:bg-gray-100 dark:hover:bg-[#818080] transition-colors dark:bg-[#575454] dark:text-[#e6e2e2]">
                                                    <td className="p-1 border-b">
                                                        <div className="flex items-center gap-3">
                                                            <div className="h-12 w-12 bg-gray-300 rounded flex items-center justify-center">
                                                                {item.profile?.avatarUrl ? (
                                                                    <img src={item.profile.avatarUrl} alt="Profile Avatar" className="h-full w-full object-cover rounded" />
                                                                ) : (
                                                                    <span className="text-xs text-gray-600">IMG</span>
                                                                )}
                                                            </div>

                                                            <div>
                                                                <p className="font-medium text-sm">{`${item.firstName} ${item.lastName}`}</p>
                                                                <p className="text-gray-500 text-xs dark:text-[#b9b3b3]">{item.email}</p>
                                                            </div>
                                                        </div>

                                                    </td>
                                                    <td className="p-1 border-b">{item.role}</td>
                                                    <td className="p-1 border-b">{item.organization.join(', ')}</td>
                                                    <td className="p-1 border-b text-left">
                                                        <span
                                                            className={`inline-block px-3 py-1 rounded text-white text-xs ${item.isActive === true
                                                                ? "bg-green-500" : "bg-gray-400"}`} >
                                                            {item.isActive === true
                                                                ? "Active"
                                                                : "Inactive"
                                                            }
                                                        </span>
                                                    </td>
                                                    <td className="p-1 border-b">{new Date(item.lastActive).toLocaleString()}</td>
                                                    <td className="p-1 border-b">{new Date(item.createdAt).toLocaleString()}</td>
                                                    <td className="p-1 border-b space-x-2 text-left">
                                                        <button
                                                            onClick={() => {
                                                                setSelectedUser(item);
                                                                setDisplayDetails(true);
                                                            }}
                                                            title="Export" className="px-3 py-1.5 bg-gray-500 text-white text-xs rounded hover:bg-gray-600"><FaRegEdit /></button>
                                                        <button title="Delete" className="px-3 py-1.5 bg-red-500 text-white text-xs rounded hover:bg-red-600">{<FaRegTrashAlt />}</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center justify-center space-x-2 px-4 py-2 shadow-sm bg-white dark:bg-[#2e2d2d]">
                        <button
                            className={`px-3 py-1 flex items-center rounded-md border border-gray-300 dark:border-gray-600 ${currentPage === 1
                                ? "text-gray-400 dark:text-gray-500 cursor-not-allowed"
                                : "text-[#eb7866] hover:bg-purple-100 dark:hover:bg-gray-700"
                                }`}
                            disabled={currentPage === 1}
                            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                        >
                            <span className="material-icons text-sm"> </span> Previous
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => {
                            const page = i + 1;

                            if (
                                page !== 1 &&
                                page !== totalPages &&
                                Math.abs(page - currentPage) > 2
                            ) {
                                if (
                                    Math.abs(page - currentPage) === 3 &&
                                    (page < currentPage || page > currentPage)
                                ) {
                                    return (
                                        <span
                                            key={`ellipsis-${page}`}
                                            className="px-2 py-1 text-gray-500 dark:text-gray-400"
                                        >
                                            ...
                                        </span>
                                    );
                                }
                                return null;
                            }

                            return (
                                <button
                                    key={page}
                                    className={`px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 ${currentPage === page
                                        ? "bg-[#eb7866] text-[#fff] dark:bg-[#eb7866] dark:text-white"
                                        : "hover:bg-[#b9b8b8] text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                                        }`}
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </button>
                            );
                        })}

                        <button
                            className={`px-3 py-1 flex items-center rounded-md border border-gray-300 dark:border-gray-600 ${currentPage === totalPages
                                ? "text-gray-400 dark:text-gray-500 cursor-not-allowed"
                                : "text-[#eb7866] hover:bg-purple-100 dark:hover:bg-gray-700"
                                }`}
                            disabled={currentPage === totalPages}
                            onClick={() =>
                                currentPage < totalPages && setCurrentPage(currentPage + 1)
                            }
                        >
                            Next <span className="material-icons text-sm"> </span>
                        </button>
                    </div>

                </div>

            </div>
            {disabled && (<PageNotAvailable />)}
        </div>
    )
}