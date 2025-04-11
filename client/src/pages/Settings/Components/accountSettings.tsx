import React from "react";
import { useAppSelector } from "../../../store/hooks";
import { MdModeEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const AccountSettingsComponent: React.FC = () => {
    const { items: user } = useAppSelector((state) => state.user);

    return (
        <div className="bg-gray-100 dark:bg-[#575454] p-6">
            <div className="max-w-full mx-auto bg-white dark:bg-[#484747] dark:text-gray-200 shadow-lg rounded-lg p-6">

                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                    <div className="relative w-24 h-24 bg-[#b3afaf] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        {user[0]?.profile?.avatarUrl ? (
                            <img
                                src={user[0].profile.avatarUrl}
                                alt="User Avatar"
                                className="w-full h-full rounded-full object-cover"
                            />
                        ) : (
                            <p className="font-bold text-3xl text-[#ffffff]">
                                {user[0]?.firstName?.charAt(0) || 'A'}
                            </p>
                        )}
                        <div className="hover:scale-105 hover:bg-purple-700 absolute bottom-0 right-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center border-2 border-white">
                            <MdModeEdit className="text-[#fff] hover:scale-105" />
                        </div>
                    </div>

                    <div className="text-center sm:text-left">
                        <p className="text-gray-600 dark:text-gray-400">PNG, JPEG under 15MB</p>
                        <div className="flex justify-center sm:justify-start space-x-2 mt-2">
                            <FaTrash className="text-[#e76161]" />
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full name
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <input
                            type="text"
                            value={user[0]?.firstName}
                            placeholder="First name"
                            className="outline-none border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-1 focus:ring-blue-500 dark:bg-[#7a7878] dark:text-gray-200"
                        />
                        <input
                            type="text"
                            value={user[0]?.middleName}
                            placeholder="Middle name"
                            className="outline-none border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-1 focus:ring-blue-500 dark:bg-[#7a7878] dark:text-gray-200"
                        />
                        <input
                            type="text"
                            value={user[0]?.lastName}
                            placeholder="Last name"
                            className="outline-none border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-1 focus:ring-blue-500 dark:bg-[#7a7878] dark:text-gray-200"
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Contact email
                    </label>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        Manage your account's email address for the invoices.
                    </p>
                    <div>
                        <input
                            type="email"
                            value={user[0]?.email}
                            className="outline-none border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 w-full focus:ring-1 focus:ring-blue-500 dark:bg-[#7a7878] dark:text-gray-200"
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Password
                    </label>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        Modify your current password.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="password"
                            placeholder="Current password"
                            className="outline-none border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-1 focus:ring-blue-500 dark:bg-[#7a7878] dark:text-gray-200"
                        />
                        <input
                            type="password"
                            placeholder="New password"
                            className="outline-none border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-1 focus:ring-blue-500 dark:bg-[#7a7878] dark:text-gray-200"
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Integrated account
                    </label>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        Manage your current integrated accounts.
                    </p>
                    <div className="flex items-center justify-between border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 dark:bg-[#7a7878]">
                        <div className="flex items-center space-x-2">
                            <FcGoogle className="w-6 h-6" />
                            <p className="text-gray-700 dark:text-gray-200">Google analytics</p>
                        </div>
                        <button className="text-green-500 dark:text-green-400 font-medium">
                            Connected
                        </button>
                    </div>
                </div>

                <div className="flex justify-end mt-6">
                    <button className="px-6 py-2 bg-[#c95340] text-white font-medium rounded-lg hover:bg-[#e1604c]">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};
