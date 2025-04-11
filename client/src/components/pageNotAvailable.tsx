import React from "react";
import { useNavigate } from "react-router-dom";

export const PageNotAvailable: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="absolute inset-0 flex items-center justify-center flex-col dark:bg-opacity-30 z-50">
            <img src="https://media.tenor.com/-ty_FRrcykcAAAAi/loading.gif" alt="Loading" />
            <p className="text-xl font-bold mt-4 text-[#bd4747]">This Page is temporarily unavailable.</p>
            <p className="text-md mt-2 text-[#bd4747]">Page is down for maintenance</p>
            <button
                onClick={() => navigate("/dashboard")}
                className="mt-4 px-6 py-2 bg-[#bd4747] text-white rounded-lg shadow-md hover:bg-[#a33e3e] transition-all duration-200"
            >
                Go to Dashboard
            </button>
        </div>
    );
};