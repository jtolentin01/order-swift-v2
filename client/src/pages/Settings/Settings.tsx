import React, { useState } from "react";
import { GeneralSettingsComponent } from "./Components/generalSettings";
import { AccountSettingsComponent } from "./Components/accountSettings";

export const SettingsComponent: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('account');

    const renderContent = () => {
        switch (activeTab) {
            case 'account':
                return <AccountSettingsComponent />;
            case 'general':
                return <GeneralSettingsComponent />;
            default:
                return <AccountSettingsComponent />;
        }
    };

    return (
        <div className="dark:bg-[#2a2a2a] w-full h-full bg-white p-2 flex flex-col">
            <div>
                <div className="dark:text-[#ccc8c8]">
                    <div className="p-4 bg-white dark:bg-[#575454]">
                        <h1 className="text-xl font-semibold text-gray-800 dark:text-[#f6f4f4] mb-4">Settings</h1>

                        <div className="flex space-x-4 border-b border-gray-200 dark:border-[#c4c1c1]">
                            <button
                                className={`text-sm font-medium py-2 ${activeTab === 'account' ? 'border-b-2 border-indigo-600' : 'hover:text-indigo-600'}`}
                                onClick={() => setActiveTab('account')}
                            >
                                Account
                            </button>

                            <button
                                className={`text-sm font-medium py-2 ${activeTab === 'general' ? 'border-b-2 border-indigo-600' : 'hover:text-indigo-600'}`}
                                onClick={() => setActiveTab('general')}
                            >
                                General
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[90%] bg-gray-100 dark:bg-[#424141]">
                <div className="w-full h-full">
                    <div className="w-full h-full overflow-auto dark:bg-[#575454] shadow-sm">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};