import React, { useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo-clean.png';
import isAuthenticated from "../../../services/Authentication/AuthGuard.service";
import { revokeUserAuth } from "../../../services/Authentication/Authentication.service";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { currentUser } from "../../../store/slices/userSlice";
import * as misc from "../../../enum/Misc";
import * as errorMsg from "../../../enum/ErrorMessage";
import toast from "react-hot-toast";
import { SiGoogleanalytics } from "react-icons/si";
import { IoMdCart, IoMdList } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineSettings, MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { RiAdminFill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { PiInvoiceDuotone } from "react-icons/pi";

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarComponent: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { items: user } = useAppSelector((state) => state.user);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAuthenticated()) {
                toast.success(errorMsg.AuthError.REVOKED_AUTH);
                navigate('/login');
            }
        }, 15000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        dispatch(currentUser())
    }, [dispatch]);

    const handleLogout = (): void => {
        revokeUserAuth();
        navigate('/login');
    };

    const navLinkClasses = ({ isActive }: { isActive: boolean }): string => (
        `w-full flex flex-row items-center h-auto p-3 rounded-sm ${isActive ? 'bg-red-100  dark:bg-[#ab4a3c]' : 'border-white dark:border-transparent hover:border-[#EF5350]'}`
    );

    return (
        <aside className={`fixed top-0 left-0 h-screen z-50 bg-white dark:bg-[#212121] border-r dark:border-[#242323] p-2 shadow-lg flex flex-col justify-between items-center transition-width duration-300 ${isOpen ? 'w-52' : 'w-20'}`}>
            <div className="w-full flex flex-col items-center space-y-1 mt-6">
                <NavLink to="/dashboard" className="scale-75">
                    <img src={logo} alt='order Swift' width="35px" height="35px" />
                </NavLink>

                {[{
                    to: misc.SideNavLabel.SU_DASHBOARD,
                    icon: <SiGoogleanalytics className="text-[#ea4b33] dark:text-[#fff]" />,
                    label: misc.SideNavLabel.SN_DASHBOARD
                }, {
                    to: misc.SideNavLabel.SU_ORDER,
                    icon: <IoMdCart className="text-[#ea4b33] dark:text-[#fff]" />,
                    label: misc.SideNavLabel.SN_ORDER
                }, {
                    to: misc.SideNavLabel.SU_OM,
                    icon: <IoMdList className="text-[#ea4b33] dark:text-[#fff]" />,
                    label: misc.SideNavLabel.SN_OM
                }, {
                    to: misc.SideNavLabel.SU_INVOICE_AUDIT,
                    icon: <PiInvoiceDuotone className="text-[#ea4b33] dark:text-[#fff]" />,
                    label: misc.SideNavLabel.SN_INVOICE_AUDIT
                }].map((item, index) => (
                    <>
                        <NavLink key={index} to={item.to} className={navLinkClasses}>
                            <div className={`flex flex-row items-center space-x-2 ${isOpen ? 'justify-start' : 'justify-center w-full'}`}>
                                {item.icon}
                                <h1 className={`text-xs dark:text-[#E0E0E0] ${isOpen ? 'block' : 'hidden'} flex-1 text-center`}>{item.label}</h1>
                            </div>

                        </NavLink>
                    </>
                ))}
                <hr className="border-t-2 border-[#e5e2e2] dark:border-gray-600 my-6 w-full" />
                <div className="w-full flex flex-col items-left">
                    <p className="text-xs text-[#6b6868] ml-3 dark:text-[#989493]">{isOpen ? 'Configuration' : ''}</p>
                </div>
                {[
                    {
                        to: misc.SideNavLabel.SU_SETTINGS,
                        icon: <MdOutlineSettings className="text-[#ea4b33] dark:text-[#fff]" />,
                        label: misc.SideNavLabel.SN_SETTINGS
                    },
                    {
                        to: misc.SideNavLabel.SU_USERS,
                        icon: <FaUsers className="text-[#ea4b33] dark:text-[#fff]" />,
                        label: misc.SideNavLabel.SN_USERS
                    },
                    {
                        to: misc.SideNavLabel.SU_ADMINISTRATOR,
                        icon: <RiAdminFill className="text-[#ea4b33] dark:text-[#fff]" />,
                        label: misc.SideNavLabel.SN_ADMINISTRATOR
                    }].map((item, index) => (
                        <NavLink key={index} to={item.to} className={navLinkClasses}>
                            <div className={`flex flex-row items-center space-x-2 ${isOpen ? 'justify-start' : 'justify-center w-full'}`}>
                                {item.icon}
                                <h1 className={`text-xs dark:text-[#E0E0E0] ${isOpen ? 'block' : 'hidden'} flex-1 text-center`}>
                                    {item.label}
                                </h1>
                            </div>
                        </NavLink>
                    ))}
                <hr className="border-t-2 border-[#e5e2e2] dark:border-gray-600 my-6 w-full" />
                <div className="w-full flex flex-col items-left">
                    <p className="text-xs text-[#6b6868] ml-3 dark:text-[#989493]">{isOpen ? 'Documents' : ''}</p>
                </div>
                {[
                    {
                        to: misc.SideNavLabel.SU_DOCUMENTATION,
                        icon: <FaBook className="text-[#ea4b33] dark:text-[#fff]" />,
                        label: misc.SideNavLabel.SN_DOCUMENTATION
                    }
                ].map((item, index) => (
                    <NavLink key={index} to={item.to} className={navLinkClasses}>
                        <div className={`flex flex-row items-center space-x-2 ${isOpen ? 'justify-start' : 'justify-center w-full'}`}>
                            {item.icon}
                            <h1 className={`text-xs dark:text-[#E0E0E0] ${isOpen ? 'block' : 'hidden'} flex-1 text-center`}>
                                {item.label}
                            </h1>
                        </div>
                    </NavLink>
                ))}

            </div>

            <div className="w-full flex flex-col items-center justify-center space-y-2">
                <div className="w-full flex flex-row justify-end">
                    <button onClick={() => setIsOpen(!isOpen)} className="mt-4 mr-3">
                        {isOpen ? (
                            <MdKeyboardDoubleArrowLeft className="text-[#ea4b33] scale-150" />
                        ) : (
                            <MdKeyboardDoubleArrowRight className="text-[#ea4b33] scale-150" />
                        )}
                    </button>
                </div>

                <NavLink to="/profile" className="w-full flex flex-col justify-center items-center h-auto p-2 rounded-md">
                    <div className="flex flex-row space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                            {user[0]?.profile?.avatarUrl ? (
                                <img src={user[0].profile.avatarUrl} alt="User Avatar" className="w-full h-full rounded-full object-cover" />
                            ) : (
                                <p className="font-bold text-[#ffffff]">{user[0]?.firstName.charAt(0) || 'A'}</p>
                            )}
                        </div>
                        <h1 className={`mt-2 text-xs dark:text-[#E0E0E0] ${isOpen ? 'block' : 'hidden'} flex-1 text-center`}>
                            {`${user[0]?.firstName} ${user[0]?.lastName}`}
                        </h1>
                    </div>
                </NavLink>

                <div onClick={handleLogout} className="hover:bg-[#f1cece] dark:hover:bg-[#4a4848] bg-[#f2f0f0] dark:bg-[#272626] w-full flex flex-row justify-center items-center h-auto p-2 space-x-2 rounded-md cursor-pointer" title="Sign out">
                    <CiLogout className="text-[#ea4b33] scale-125 " />
                    <h1 className={`p-0.5 text-xs dark:text-[#E0E0E0] ${isOpen ? 'block' : 'hidden'}`}>
                        signout
                    </h1>
                </div>
            </div>
        </aside>
    );
};

export default SidebarComponent;
