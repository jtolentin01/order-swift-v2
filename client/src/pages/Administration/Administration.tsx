import React from "react";

const AdministrationComponent: React.FC = () => {
    return (
        <div className="dark:bg-[#2a2a2a] w-full bg-white p-2 flex flex-col min-h-screen">
            <div className="w-full h-full bg-gray-100 dark:bg-[#2A2A2A]">
                <div className="w-full h-full">
                    <div className="w-full h-full overflow-auto dark:bg-[#2A2A2A] shadow-sm dark:text-gray-300">
                        <h1>Administration here!</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdministrationComponent;