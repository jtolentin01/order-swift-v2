import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import FooterComponent from './LayoutComponents/Footer/Footer';
import HeaderComponent from './LayoutComponents/Header/Header';
import SidebarComponent from './LayoutComponents/Sidebar/Sidebar';
import { useAppDispatch } from '../store/hooks';
import { applicationInfo } from '../store/slices/appSlice';
import { appNotification } from '../store/slices/notificationSlice';

const Layout: React.FC = () => {
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        dispatch(applicationInfo());
        dispatch(appNotification());
    }, [dispatch]);


    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="flex flex-1">
                    <SidebarComponent isOpen={isOpen} setIsOpen={setIsOpen} />
                    <main className={`flex-1 p-4 bg-[#f3f0f0] dark:bg-[#1E1E1E] flex flex-col transition-all duration-300 ${isOpen ? 'ml-52' : 'ml-20'}`}>
                        <HeaderComponent />
                        <div className="flex-1 w-full mb-4 md:mb-0 h-full">
                            <Outlet />
                        </div>
                    </main>
                </div>
                <FooterComponent />
            </div>
        </>
    );
}

export default Layout;