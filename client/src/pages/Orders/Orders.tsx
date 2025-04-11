import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useAppSelector } from "../../store/hooks";
import { CiCircleList } from "react-icons/ci";
import { HiOutlineViewGrid } from "react-icons/hi";
import { ComponentProps } from "../../interfaces/globalComponentInterface";
import { PageNotAvailable } from "../../components/pageNotAvailable";

const OrdersComponent: React.FC<ComponentProps> = ({ isDisabled }) => {
    const { items: brands, loading, error } = useAppSelector((state) => state.brands);
    const { items: currentUser } = useAppSelector((state) => state.user);
    const [viewType, setViewType] = useState<'card' | 'list'>('card');
    const [disabled, setDisabled] = useState<boolean>(isDisabled);

    useEffect(() => {
        setDisabled(isDisabled);
    }, [isDisabled]);
    return (
        <div className={`${disabled ? 'relative' : ''} w-full h-full bg-white p-4 dark:bg-[#2A2A2A] flex flex-col justify-between`}>
            <div className={`${disabled ? 'blur-sm' : ''} w-full h-full flex flex-col justify-between`}>
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-md font-bold text-red-600 mb-4">Brands</h1>
                        <div className="flex gap-2">
                            < HiOutlineViewGrid
                                onClick={() => setViewType('card')}
                                className={`cursor-pointer p-2 rounded-full ${viewType === 'card' ? 'bg-red-200 text-red-600' : 'bg-gray-300 text-blue-600'}`}
                                size={24}
                            />
                            < CiCircleList
                                onClick={() => setViewType('list')}
                                className={`cursor-pointer p-2 rounded-full ${viewType === 'list' ? 'bg-red-200 text-red-600' : 'bg-gray-300 text-blue-600'}`}
                                size={24}
                            />
                        </div>
                    </div>
                    {brands.length > 0 ? (
                        <div className={`grid gap-4 ${viewType === 'card' ? 'sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
                            {brands
                                .filter((brand) => currentUser[0].brandAccess.includes(brand.brandId))
                                .map((brand) => (
                                    <NavLink key={brand.brandId} to={brand.brandId}>
                                        <div className={`flex ${viewType === 'card' ? 'flex-col hover:scale-105' : 'flex-row'} bg-white border border-gray-200 p-2 rounded-lg shadow-lg dark:bg-[#333333] dark:border-[#444444] hover:bg-[#F9F9F9] dark:hover:bg-[#444444]`}>
                                            <p className="text-xs text-gray-500 text-right">Tile label</p>
                                            <div className={`flex ${viewType === 'card' ? 'items-center justify-left mb-2' : 'items-center justify-center mr-4'}`}>
                                                <div className="w-16 h-16 rounded-full">
                                                    <img src={brand.logo} alt={`${brand.brandName} logo`} className="rounded-full border p-1 border-[#E0E0E0]" />
                                                </div>
                                                {viewType === 'card' && <hr className="border-t dark:border-[#E0E0E0] border-gray-300 w-full" />}
                                            </div>
                                            <div className="flex flex-col items-start">
                                                <p className="text-sm text-gray-500 dark:text-[#E0E0E0]">{brand.createdBy}</p>
                                                <h2 className="text-lg font-bold text-black dark:text-white mb-1">{brand.brandName}</h2>
                                                <p className="text-sm text-gray-600 dark:text-[#E0E0E0]">{brand.description}</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                ))}
                        </div>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <h1>No Brands</h1>
                        </div>
                    )}

                </div>
                <div>
                    <p className="text-gray-600 dark:text-[#E0E0E0] mt-4">{brands.length} Active brand(s) for Ordering</p>
                </div>

            </div>
            {disabled && (<PageNotAvailable />)}
        </div>

    );
};

export default OrdersComponent;