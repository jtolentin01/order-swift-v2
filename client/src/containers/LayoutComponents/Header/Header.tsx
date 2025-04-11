import React, { useEffect, useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import SystemUI from "../../../utils/systemUI";
import { LuSun } from "react-icons/lu";
import { FaMoon, FaAngleUp, FaAngleDown, FaBell } from "react-icons/fa6";
import { FaInfoCircle, FaCheckCircle } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { ClientInterface } from "../../../interfaces/clientInterface";
import "flag-icons/css/flag-icons.min.css";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { currentClients } from "../../../store/slices/clientsSlice";
import { companyBrands } from "../../../store/slices/brandsSlice";
import { matchPath } from "react-router-dom";
import { NotificationsTemplate } from "../../../components/templates/notificationsTemplate";
import { ItemsModal } from "../../../components/modalsPreset/itemsModal";

const HeaderComponent: React.FC = () => {
    const dispatch = useAppDispatch();
    const { items: client, loading, error } = useAppSelector((state) => state.clients);
    const { items: appInfo } = useAppSelector((state) => state.application);
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter(Boolean);
    const [themeMode, setThemeMode] = useState<string>("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedClient, setSelectedClient] = useState<ClientInterface | null>(null);
    const [appEnvironment, setAppEnvironment] = useState<string>("");
    const [pageMessage, setPageMessage] = useState<string | null>(null);
    const [pageMessageType, setPageMessageType] = useState<string | null>(null);
    const [displayDetails, setDisplayDetails] = useState<boolean>(false)

    const toggleTheme = () => {
        SystemUI.toggleDarkMode();
        const updatedTheme = SystemUI.getLocalStorageValue("theme");
        setThemeMode(updatedTheme);
    };

    const handleClientSelect = (selected: ClientInterface) => {
        setSelectedClient(selected);
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        SystemUI.toggleDarkMode();
        const initialTheme = SystemUI.getLocalStorageValue("theme");
        setThemeMode(initialTheme);
        dispatch(currentClients());
    }, [dispatch]);

    useEffect(() => {
        dispatch(companyBrands());
    }, [dispatch]);

    useEffect(() => {
        if (client.length > 0) {
            setSelectedClient(client[0]);
        }
    }, [client]);

    useEffect(() => {
        if (appInfo?.length > 0) {
            setAppEnvironment(appInfo[0]?.environment ?? "");

            const currentPageControl = appInfo[0]?.pageControl?.find(
                (page) =>
                    page.path === location.pathname ||
                    matchPath(page.path, location.pathname)
            );

            setPageMessage(currentPageControl?.message ?? null);
            setPageMessageType(currentPageControl?.type ?? null);
        }
    }, [appInfo, location.pathname]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <div className="w-full h-16 flex lg:flex-row xs:flex-col justify-between">

                <div className="flex items-start flex-col h-full justify-center text-[#767474] ">
                    {appEnvironment === "Production" ? (
                        <h2 className="text-sm">
                            {appInfo[0]?.name || '-'}{' '}
                            <a href="/documentation/releasenotes" className="text-blue-500 underline hover:text-blue-700">
                                v{appInfo[0]?.version || '-'}
                            </a>
                        </h2>
                    ) : (
                        <h2 className={`text-sm ${appEnvironment === 'Production' ? null : "bg-yellow-200"} px-2 py-1`}>
                            {appInfo[0]?.environment || '-'} Environment - {appInfo[0]?.name || '-'}{' '}
                            <a href="/documentation/releasenotes" className="text-blue-500 underline hover:text-blue-700">
                                v{appInfo[0]?.version || '-'}
                            </a>
                        </h2>
                    )}
                </div>

                <div className="h-full flex items-center">
                    <div className="flex flex-row h-auto items-center scale-75 dark:text-[#E0E0E0]">
                        <NavLink to="/order/cart" className="mr-2 hover:cursor-pointer" title="Cart">
                            <TiShoppingCart className="w-7 h-7 ml-2" />
                        </NavLink>

                        <div className="relative z-50">
                            <div
                                className="mr-2 hover:cursor-pointer relative"
                                title="Notification"
                                onClick={() => setDisplayDetails(!displayDetails)}
                            >
                                <FaBell className="w-6 h-6 ml-2" />
                            </div>

                            {displayDetails && (
                                <div className="fixed right-0 mt-3 w-[24rem] bg-white dark:bg-[#333] shadow-lg border dark:border-[#444] rounded-lg z-[99999] p-3 transition-all duration-300">
                                    <div className="max-h-96 overflow-y-auto space-y-2">
                                        <NotificationsTemplate />
                                    </div>
                                    <div className="w-full flex items-center justify-center p-3 border-t border-gray-300 dark:border-gray-600">
                                        <button
                                            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                                            onClick={() => console.log('View all clicked')}
                                        >
                                            View All
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                            
                        <div className="relative">
                            <div
                                className="mr-2 hover:cursor-pointer flex items-center p-2 rounded"
                                title={`${selectedClient?.clientName || "Select a Client"} Workspace`}
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <p>{selectedClient?.clientName || "Select a Client"}</p>
                                {isDropdownOpen ? (
                                    <FaAngleUp className="w-6 h-6 ml-2" />
                                ) : (
                                    <FaAngleDown className="w-6 h-6 ml-2" />
                                )}
                            </div>
                            {isDropdownOpen && (
                                <div className="absolute bg-white border shadow-lg mt-2 w-full rounded z-10">
                                    {client.map((clientItem) => (
                                        <div
                                            key={clientItem.clientId}
                                            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                            onClick={() => handleClientSelect(clientItem)}
                                        >
                                            {clientItem.clientName}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="mr-2 hover:cursor-pointer" title="English (US)">
                            <span className="fi fi-us ml-4 h-6 w-6"></span>
                        </div>
                        <div className="flex flex-col ml-3">
                            <div
                                className="relative cursor-pointer"
                                onClick={toggleTheme}
                                title="Switch Theme"
                            >
                                {themeMode === "light" ? (
                                    <FaMoon className="h-6 w-6" />
                                ) : (
                                    <LuSun className="h-6 w-6" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="border-t dark:border-[#E0E0E0] border-gray-300 my-4 w-full" />

            <div className="mb-3 flex w-full justify-between items-center">
                <div>
                    <Link to="/dashboard" className="opacity-60 hover:text-red-200 dark:text-[#E0E0E0]">
                        Home
                    </Link>
                    {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;

                        return (
                            <span key={to}>
                                <span className="mx-2">/</span>
                                {isLast ? (
                                    <span className="text-[#ea4b33] hover:text-red-200">
                                        {value.charAt(0).toUpperCase() + value.slice(1)}
                                    </span>
                                ) : (
                                    <Link to={to} className="opacity-60 hover:text-red-200">
                                        {value.charAt(0).toUpperCase() + value.slice(1)}
                                    </Link>
                                )}
                            </span>
                        );
                    })}
                </div>

                <div className="h-8 flex items-center">
                    {pageMessage ? (
                        <div className={`${pageMessageType === 'warning' ? 'bg-yellow-200 text-yellow-700' : pageMessageType === 'error' ? 'bg-red-200 text-red-700' : pageMessageType === 'success' ? 'bg-[#b5f5a1] text-green-800' : 'bg-blue-200 text-blue-800'} px-2 py-1 rounded-lg flex items-center w-full`}>
                            <div className="flex items-center gap-2">
                                {pageMessageType === 'success' ? <FaCheckCircle />  : <FaInfoCircle />} 
                                <p className="text-sm">{pageMessage}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full"></div>
                    )}
                </div>
            </div>
        </>
    );
};

export default HeaderComponent;
