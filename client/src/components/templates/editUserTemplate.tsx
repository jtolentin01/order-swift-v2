import React from "react";
import { UserInterface } from "../../interfaces/userInterface";

interface EditUserTemplateProps {
    userObject: UserInterface;
}

export const EditUserTemplate: React.FC<EditUserTemplateProps> = ({ userObject }) => {
    return (
        <>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <form>

                    <div className="mb-4 flex justify-center items-center">
                        <div className="relative w-40 h-40 flex items-center justify-center overflow-hidden bg-gray-200 rounded-full">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                                <div className="relative w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                                    {userObject.profile?.avatarUrl ? (
                                        <img
                                            src={userObject.profile.avatarUrl}
                                            alt="User Profile"
                                            className="object-cover w-full h-full rounded-full"
                                        />
                                    ) : (
                                        <span className="text-gray-500 text-sm">No Image Available</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">First name</label>
                        <input
                            type="text"
                            placeholder="User first name"
                            value={userObject.firstName}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Middle name</label>
                        <input
                            type="text"
                            value={userObject.middleName}
                            placeholder="User middle name"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Last name</label>
                        <input
                            type="text"
                            value={userObject.lastName}
                            placeholder="User last name"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <select
                            value=""
                            // onChange={(e) => setSelectedOption(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white"
                        >
                            <option value="option2">Active</option>
                            <option value="option3">Inactive</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Role</label>
                        <select
                            value=""
                            // onChange={(e) => setSelectedOption(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white"
                        >
                            <option value="option2">Standard user</option>
                            <option value="option3">Admin</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Organization</label>
                        <select
                            value=""
                            // onChange={(e) => setSelectedOption(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white"
                        >
                            <option value="option2">Outdoor Equipped</option>
                            <option value="option3">HD Websoft</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Access Workspaces</label>
                        <div className="flex items-center space-x-2 mt-1">
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Thorogood</span>
                            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Helly Hansen</span>
                            <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">Eagle Creek</span>
                            <button
                                type="button"
                                className="bg-gray-200 text-gray-600 text-sm px-3 py-1 rounded-full focus:ring-2 focus:ring-blue-400">
                                +
                            </button>
                        </div>
                    </div>

                    <div className="mt-10">
                        <div className="flex flex-row space-x-2 w-full justify-end">
                            <button className="px-4 py-1.5 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-[#eb7866] dark:hover:bg-[#eb7866] dark:hover:text-[#fff]">
                                Cancel
                            </button>
                            <button className="px-4 py-1.5 rounded-lg bg-[#eb7866] text-[#f7f3f3] hover:bg-[#e98c7e] dark:bg-[#d8d5d5] dark:hover:bg-[#eb7866] dark:hover:text-[#fff]">
                                Save Changes
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </>
    );
};
