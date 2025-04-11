import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { CiCircleList } from "react-icons/ci";
import { HiOutlineViewGrid } from "react-icons/hi";
import { currentInvoiceAudit } from "../../store/slices/invoiceAuditSlice";
import { FaPlus } from "react-icons/fa";
import { useCheckUserPermission } from "../../utils/userPermission";
import { ComponentProps } from "../../interfaces/globalComponentInterface";
import { PageNotAvailable } from "../../components/pageNotAvailable";

const InvoiceAuditComponent: React.FC<ComponentProps> = ({ isDisabled }) => {
    const dispatch = useAppDispatch();
    const [disabled, setDisabled] = useState<boolean>(isDisabled);
    const { items: invoiceSegments, loading, error } = useAppSelector((state) => state.invoiceAudit);
    const { items: currentUser } = useAppSelector((state) => state.user);
    const [viewType, setViewType] = useState<'card' | 'list'>('card');

    useEffect(() => {
        setDisabled(isDisabled);
    }, [isDisabled]);


    useEffect(() => {
        dispatch(currentInvoiceAudit());
    }, [dispatch, invoiceSegments.length]);

    return (
        <div className={`${disabled ? 'relative' : ''} w-full h-full bg-white p-4 dark:bg-[#2A2A2A] `}>
            <div className={`${disabled ? 'blur-sm' : ''} w-full h-full flex flex-col justify-between`}>
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-md font-bold text-red-600 mb-4">Invoice Audit Segments</h1>
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
                    {invoiceSegments.length > 0 ? (
                        <div className={`grid gap-4 ${viewType === 'card' ? 'sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
                            {invoiceSegments
                                .filter((segmentAccess) => currentUser[0].invoiceAuditSegments.includes(segmentAccess.segmentId))
                                .map((item) => (
                                    <NavLink key={item.segmentId} to={item.segmentId}>
                                        <div className={`flex ${viewType === 'card' ? 'flex-col hover:scale-105 h-64' : 'flex-row items-center h-24'} bg-white border border-gray-200 p-2 rounded-lg shadow-lg dark:bg-[#333333] dark:border-[#444444] hover:bg-[#F9F9F9] dark:hover:bg-[#444444]`}>
                                            {viewType === 'card' && (
                                                <div className="w-full h-20 mb-2 overflow-hidden rounded-t-lg">
                                                    <img src={item.thumbnail} alt="Cover" className="w-full h-full object-cover" />
                                                    <p className="text-xs text-[#e4e1e1] flex items-center gap-1 mt-1">
                                                        <span className={`w-2.5 h-2.5 rounded-full ${item.isActive ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                                        {item.isActive ? 'Active' : 'Inactive'}
                                                    </p>
                                                </div>
                                            )}
                                            <div className={`flex ${viewType === 'card' ? 'items-center justify-left mb-2' : 'items-center justify-center mr-4'}`}>
                                                <div className="w-16 h-16 rounded-full border p-1 border-[#E0E0E0]">
                                                    <img src={item.thumbnail} alt={`${item.segmentName} logo`} className="h-full w-full rounded-full object-cover" />
                                                </div>
                                                {viewType === 'card' && <hr className="border-t dark:border-[#E0E0E0] border-gray-300 w-full" />}
                                            </div>
                                            <div className="flex flex-col items-start flex-grow overflow-hidden">
                                                <h2 className="text-lg font-bold text-black dark:text-white mb-1">{item.segmentName}</h2>
                                                <p className="text-sm text-gray-500 dark:text-[#E0E0E0] overflow-hidden text-ellipsis">{item.segmentDescription}</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                ))}
                        </div>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <h1>No Segments Found</h1>
                        </div>
                    )}
                </div>
                <div>
                    <p className="text-gray-600 dark:text-[#E0E0E0] mt-4">{invoiceSegments.length} Active brand(s) for Ordering</p>
                </div>
                {
                    useCheckUserPermission(['HASPERMISSION_CREATE_OM']) ? <button className="fixed bottom-14 right-14 bg-[#ea4b33] text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors">
                        <FaPlus size={20} />
                    </button> : null
                }
            </div>
            {disabled && (<PageNotAvailable />)}
        </div>
    );
};

export default InvoiceAuditComponent;
