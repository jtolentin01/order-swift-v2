import { UserInterface } from "../interfaces/userInterface";

export const getAllUser = async (): Promise<UserInterface[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                [
                    {
                        id: "42235232523DGdDSDFS",
                        email: "alvaro@outdoorequipped.com",
                        firstName: "Alvaro",
                        lastName: "Portillo",
                        middleName: "Del",
                        invoiceAuditSegments: ['1','2'],
                        brandAccess: ['4234'],
                        orderManagerAccess: ['eagle-creek','helly-hansen'],
                        reportAccess: ['order_report'],
                        resetPasswordCode: "",
                        resetPasswordDate: new Date().toISOString(),
                        isActive: true,
                        organization: ['4425', '1234', '5232'],
                        createdAt: new Date().toISOString(),
                        lastActive: new Date().toISOString(),
                        addedBy: "Super Admin",
                        role: 'User',
                        organizationRole: 'Data Analyst',
                        permissions: [],
                        profile: {
                            avatarUrl: 'https://yara-web.s3.ap-southeast-2.amazonaws.com/img/35837.jpeg',
                            bio: "Simple but cool"
                        },
                    },
                    {
                        id: "42235232523DGdDSDFS",
                        email: "sashaLopez@outdoorequipped.com",
                        firstName: "Sasha",
                        lastName: "Lopez",
                        middleName: "",
                        brandAccess: ['4234'],
                        orderManagerAccess: ['eagle-creek','helly-hansen'],
                        invoiceAuditSegments: ['1','2'],
                        reportAccess: ['order_report'],
                        resetPasswordCode: "",
                        resetPasswordDate: new Date().toISOString(),
                        isActive: true,
                        organization: ['4425', '1234', '5232'],
                        createdAt: new Date().toISOString(),
                        lastActive: new Date().toISOString(),
                        addedBy: "Super Admin",
                        role: 'Super',
                        organizationRole: 'Data Analyst',
                        permissions: [],
                        profile: {
                            avatarUrl: '',
                            bio: "Simple but cool"
                        },
                    },
                    {
                        id: "42235232523DGdDSDFS",
                        email: "jamesAlcover@outdoorequipped.com",
                        firstName: "James",
                        lastName: "Alcover",
                        middleName: "",
                        brandAccess: ['4234'],
                        orderManagerAccess: ['eagle-creek','helly-hansen'],
                        reportAccess: ['order_report'],
                        invoiceAuditSegments: ['1','2'],
                        resetPasswordCode: "",
                        resetPasswordDate: new Date().toISOString(),
                        isActive: false,
                        organization: ['4425', '1234', '5232'],
                        createdAt: new Date().toISOString(),
                        lastActive: new Date().toISOString(),
                        addedBy: "Super Admin",
                        role: 'Admin',
                        organizationRole: 'Data Analyst',
                        permissions: [],
                        profile: {
                            avatarUrl: 'https://yara-web.s3.ap-southeast-2.amazonaws.com/img/89172.jpeg',
                            bio: "Simple but cool"
                        },
                    }
                ]
            )
        }, 2000)
    })
};

export const getCurrentUSer = async (): Promise<UserInterface[]> => {
    return [
        {
            id: "42235232523DGdDSDFS",
            email: "jtolentin@outdoorequipped.com",
            firstName: "J",
            lastName: "Tolentin",
            middleName: "",
            brandAccess: ['eagle-creek','helly-hansen'],
            orderManagerAccess: ['123456', '654321', 'orderswift'],
            reportAccess: ['order_report', 'sales_report', 'product_sales_Report'],
            resetPasswordCode: "",
            resetPasswordDate: new Date().toISOString(),
            invoiceAuditSegments: ['active-B09523S-523ZX','lifestyle-RSXZ123-BBSXZ'],
            isActive: true,
            organization: ['4425', '1234', '5232'],
            createdAt: new Date().toISOString(),
            lastActive: new Date().toISOString(),
            addedBy: "Super Admin",
            role: 'Admin',
            organizationRole: 'Data Analyst',
            permissions: [
                // "HASPERMISSION_CREATE_USER",
                // "HASPERMISSION_READ_USER",
                // "HASPERMISSION_UPDATE_USER",
                // "HASPERMISSION_DELETE_USER",
                // "HASPERMISSION_PLACE_ORDER",
                "HASPERMISSION_CREATE_OM",
                // "HASPERMISSION_READ_OM",
                // "HASPERMISSION_UPDATE_OM",
                // "HASPERMISSION_DELETE_OM",
                // "HASPERMISSION_EXPORT_OM",
                // "HASPERMISSION_READ_TRACKING",
                // "HASPERMISSION_UPDATE_TRACKING",
                // "HASPERMISSION_DELETE_TRACKING",
                // "HASPERMISSION_EXPORT_TRACKING",
                "HASPERMISSION_READ_REPORTS",
                "HASPERMISSION_EXPORT_REPORTS",
                "HASPERMISSION_DELETE_REPORTS",
                "HASPERMISSION_CREATE_DOCUMENTS",
                "HASPERMISSION_UPDATE_DOCUMENTS",
                // "HASPERMISSION_DELETE_DOCUMENTS",
                // "HASPERMISSION_UPDATE_PROTECTED_DOCUMENTS",
                // "HASPERMISSION_DELETE_PROTECTED_DOCUMENTS",
                // "HASPERMISSION_PROTECT_DOCUMENTS",
                // "HASPERMISSION_CREATE_INVOICEAUDIT",
                // "HASPERMISSION_READ_INVOICEAUDIT",
                // "HASPERMISSION_UPDATE_INVOICEAUDIT",
                // "HASPERMISSION_DELETE_INVOICEAUDIT",
                // "HASPERMISSION_EXPORT_INVOICEAUDIT",
                // "HASPERMISSION_CREATE_ADMINS",
                // "HASPERMISSION_CREATE_ORGANIZATIONS",
                // "HASPERMISSION_CREATE_CLIENTS",
                // "HASPERMISSION_READ_ADMINS",
                // "HASPERMISSION_READ_ORGANIZATIONS",
                // "HASPERMISSION_READ_CLIENTS",
                // "HASPERMISSION_UPDATE_ADMINS",
                // "HASPERMISSION_UPDATE_ORGANIZATIONS",
                // "HASPERMISSION_UPDATE_CLIENTS",
                // "HASPERMISSION_DELETE_ADMINS",
                // "HASPERMISSION_DELETE_ORGANIZATIONS",
                // "HASPERMISSION_DELETE_CLIENTS",
                // "HASPERMISSION_DISABLE_CLIENTS",
            ],
            profile: {
                avatarUrl: '',
                bio: "Simple but cool"
            },
        }
    ]
};
