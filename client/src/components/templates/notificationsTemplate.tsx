import React, { useEffect, useState } from "react";
import { NotificationInterface } from "../../interfaces/appInterface";
import { useAppSelector } from "../../store/hooks";

export const NotificationsTemplate: React.FC = () => {
    const { items: appNotification } = useAppSelector((state) => state.notification);
    const [notifications, setNotifications] = useState<NotificationInterface[]>([]);

    useEffect(() => {
        if (appNotification?.length > 0) {
            setNotifications(appNotification);
        }
    }, [appNotification]);

    return (
        <div className="space-y-3 p-1 bg-white dark:bg-[#222] rounded-lg shadow-lg max-w-lg mx-auto">
            {notifications.length > 0 ? (
                notifications.map((notif) => (
                    <div
                        key={notif.notificationId}
                        className="flex items-center gap-4 px-2 py-3 border border-gray-300 dark:border-gray-600 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        {notif.from?.avatarUrl ? <img
                            src={notif.from?.avatarUrl || "/default-avatar.png"}
                            alt={notif.from?.name || ""}
                            className="w-10 h-10 rounded-full object-cover border border-gray-400 dark:border-gray-500"
                        /> : null
                        }
                        <div className="flex-1">
                            <p className="text-gray-900 dark:text-gray-200 text-md font-semibold">
                                {`${notif.from?.name || ""} `}
                                <span className="text-gray-700 dark:text-gray-400 text-base font-normal">
                                    {`${notif.message || ""}`}
                                </span>
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                                {new Date(notif.createdDate).toLocaleString()}
                            </p>
                        </div>
                        {!notif.isRead && <span className="w-3 h-3 bg-blue-500 rounded-full"></span>}
                    </div>
                ))
            ) : (
                <p className="text-gray-500 dark:text-gray-400 text-center text-lg">No notifications</p>
            )}
        </div>
    );
};
