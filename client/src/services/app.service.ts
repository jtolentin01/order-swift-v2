import { AppInterface, NotificationInterface } from "../interfaces/appInterface";

export const getAppInformation = async (): Promise<AppInterface[]> => {
    return [
        {
            environment: "Development",
            version: "1.5.2",
            name: "Nebula",
            description: "A simple and clean React Typescript Admin Dashboard",
            releaseDate: "2021-10-01",
            buildDate: new Date().toISOString(),
            buildVersion: "1.0.0",
            license: "MIT",
            developerContact: "jtolentin@outdoorequipped.com",
            pageControl: [
                {
                    path: "/order-manager/:om",
                    message: "This page is no longer supported and will be removed in the next release",
                    type: "warning",
                    disabled: false
                },
                {
                    path: "/dashboard",
                    message: "Hello as the week's over, we have a new report for the progress you've made!",
                    type: "success",
                    disabled: false
                },
                {
                    path: "/invoice-audit",
                    message: "Page is disabled",
                    type: "info",
                    disabled: false
                },
                {
                    path: "/documentation",
                    message: "This page is currently under maintenance mode",
                    type: "warning",
                    disabled: false
                },
                {
                    path: "/users",
                    message: "This page is currently under maintenance mode",
                    type: "warning",
                    disabled: false
                },
                {
                    path: "/settings",
                    message: "This page is currently under maintenance mode",
                    type: "warning",
                    disabled: false
                },
                {
                    path: "/order",
                    message: "This page is currently under maintenance mode",
                    type: "warning",
                    disabled: false
                },
                {
                    path: "/order-manager",
                    message: "This page is currently under maintenance mode",
                    type: "warning",
                    disabled: false
                },
                {
                    path: "/order/cart",
                    message: "This page is currently under maintenance mode",
                    type: "warning",
                    disabled: false
                },

            ]
        }
    ]
};

export const getAppNotification = async (): Promise<NotificationInterface[]> => {
    const messages = [
        "Just added you to the group",
        "Mentioned you in a comment",
        "Reacted to your post",
        "Sent you a friend request",
        "Liked your photo",
        "Shared your post",
        "Tagged you in a story",
        "Invited you to an event",
        "Started following you",
        "Commented on your post"
    ]

    const persons = [
        "James Walter", "Alice Johnson", "Bob Smith", "Charlie Brown", "David White",
        "Emma Davis", "Frank Miller", "Grace Lee", "Henry Adams", "Isabella Martinez",
        "Jack Wilson", "Karen Thompson", "Liam Robinson", "Mia Clark", "Nathan Hall"
    ];


    return Array.from({ length: 10 }, (_, i) => ({
        notificationId: Math.floor(100000000000 + Math.random() * 900000000000).toString(),
        from: {
            name: persons[Math.floor(Math.random() * messages.length)],
            avatarUrl: `https://i.pravatar.cc/150?img=${i % 70}`
        },
        message: messages[Math.floor(Math.random() * messages.length)],
        type: "low",
        isRead: Math.random() > 0.5,
        createdDate: new Date().toISOString(),
        updatedDate: new Date().toISOString(),
    }));
}