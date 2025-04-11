import React from "react";
import { useAppSelector } from "../../store/hooks";

const UserProfileComponent: React.FC = () => {
    const { items: user } = useAppSelector((state) => state.user);
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user[0]?.firstName}-${user[0]?.lastName}`;

    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4 flex justify-center">
                <img src={qrCodeUrl} alt="QR Code" className="w-32 h-32" />
            </div>
            <div className="flex items-center px-6 py-4">
                <img className="w-16 h-16 rounded-full object-cover" src={user[0]?.profile?.avatarUrl} alt="Profile" />
                <div className="mx-3">
                    <h2 className="text-xl font-semibold text-gray-800">{user[0]?.firstName} {user[0]?.lastName}</h2>
                    <p className="text-gray-600">{user[0]?.email}</p>
                    <p className="text-gray-600">{user[0]?.organization}</p>
                </div>
            </div>
        </div>
    );
}

export default UserProfileComponent;
