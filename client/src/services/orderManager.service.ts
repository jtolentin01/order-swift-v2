import { OrderManagerInterface, OrderManagerBrandsInterface, OrderManagerBrandOrdersInterface } from "../interfaces/orderManagerInterface";

export const getOrderManagers = async (): Promise<OrderManagerInterface[]> => {
    const orderManagersList = [
        {
            orderManagerId: "orderswift",
            orderManagerName: "Order Swift",
            description: "Feugiat iaculis nisi sit per sociosqu a vel aptent parturient ac.",
            thumbnail: "https://img.pikbest.com/wp/202408/online-shopping-cart-icon-made-realistic-3d-render-of-a-with-cardboard-box-against-red-background_9750969.jpg!sw800",
            createdBy: "Admin",
            isActive: true,
            createdDate: new Date(),
            updatedDate: new Date(),
            updatedBy: "Admin",
        },
        {
            orderManagerId: "123456",
            orderManagerName: "Work",
            description: "Nam iaculis est in malesuada malesuada. Praesent non elementum justo, et tristique libero",
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJn7D1ZslO6eJNCH6BxY0hRXSRNccRdpl6w&s",
            createdBy: "John Doe",
            brands: [
                {
                    orderManagerId: "123456",
                    brandId: "thorogood-123",
                    brandName: "Thorogood",
                    description: "Thorogood is an employee-owned, American company known for crafting high-quality, durable, and job-fitted footwear, particularly work boots, for hard-working individuals, with a history dating back to 1892.",
                    brandThumbnail: "thumbnail",
                    notes: ['Notes from Thorogood', 'Notes 2 from thorogood'],
                    createdBy: "string",
                    createdDate: new Date,
                    updatedDate: new Date,
                    updatedBy: "string",
                },
                {
                    orderManagerId: "123456",
                    brandId: "camper-4523",
                    brandName: "Camperszx",
                    description: "Camper is a footwear company with headquarters in Mallorca, Spain. Lorenzo Fluxà founded the company in 1975. The Camper brand is marketed globally and is present in 40 countries, with more than 400 stores and sales of around 4 million pairs of shoes annually.",
                    brandThumbnail: "thumbnail",
                    notes: ['Notes from Campers', 'Notes 2 from Camper'],
                    createdBy: "string",
                    createdDate: new Date,
                    updatedDate: new Date,
                    updatedBy: "string",
                }
            ],
            isActive: true,
            createdDate: new Date(),
            updatedDate: new Date(),
            updatedBy: "John Doe",
        },
        {
            orderManagerId: "654321",
            orderManagerName: "Active",
            description: "In id quam sed lacus bibendum interdum in sit amet dolor",
            thumbnail: "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_500,c_limit/64265cce-0cfc-4309-aa45-33835124eeaa/the-best-nike-high-top-sneakers-you-can-buy-right-now-articles-ogc.jpg",
            createdBy: "John Doe",
            isActive: true,
            brands: [
                {
                    orderManagerId: "654321",
                    brandId: "tachikara",
                    brandName: "Tachikara",
                    description: "Tachikara is a Japanese sports ball brand. It was established in Tokyo in 1915 by Iimuro Toyosaburo. The brand has been a sponsor of Olympic events and organizations, and is known primarily for its volleyballs.",
                    brandThumbnail: "thumbnail",
                    notes: ['Notes from Tachikara', 'Notes 2 from Tachikara'],
                    createdBy: "string",
                    createdDate: new Date,
                    updatedDate: new Date,
                    updatedBy: "string",
                },
                {
                    orderManagerId: "654321",
                    brandId: "tasmanians123",
                    brandName: "Tasminian",
                    description: "sociosqu a vel aptent parturient ac Feugiat iaculis nisi sit per ",
                    brandThumbnail: "thumbnail",
                    notes: ['Notes from Tasmianian', 'Feugiat iaculis nisi Tasmianian', 'vel aptent parturient'],
                    createdBy: "string",
                    createdDate: new Date,
                    updatedDate: new Date,
                    updatedBy: "string",
                }
            ],
            createdDate: new Date(),
            updatedDate: new Date(),
            updatedBy: "John Doe",
        }
    ]
    return orderManagersList;
};

export const getOrderManagerBrands = async (): Promise<OrderManagerBrandsInterface[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    orderManagerId: "123456",
                    brandId: "thorogood-123",
                    brandName: "Thorogood",
                    description: "Feugiat iaculis nisi sit per sociosqu a vel aptent parturient ac.",
                    brandThumbnail: "thumbnail",
                    notes: ['notes1', 'notes2'],
                    createdBy: "string",
                    createdDate: new Date,
                    updatedDate: new Date,
                    updatedBy: "string",
                },
                {
                    orderManagerId: "123456",
                    brandId: "camper-4523",
                    brandName: "Camper",
                    description: "sociosqu a vel aptent parturient ac Feugiat iaculis nisi sit per ",
                    brandThumbnail: "thumbnail",
                    notes: ['notes1', 'notes2'],
                    createdBy: "string",
                    createdDate: new Date,
                    updatedDate: new Date,
                    updatedBy: "string",
                },
                {
                    orderManagerId: "654321",
                    brandId: "tachikara",
                    brandName: "Tachikara",
                    description: "Feugiat iaculis nisi sit per sociosqu a vel aptent parturient ac.",
                    brandThumbnail: "thumbnail",
                    notes: ['notes1', 'notes2'],
                    createdBy: "string",
                    createdDate: new Date,
                    updatedDate: new Date,
                    updatedBy: "string",
                },
                {
                    orderManagerId: "654321",
                    brandId: "tasmanians123",
                    brandName: "Tasminian",
                    description: "sociosqu a vel aptent parturient ac Feugiat iaculis nisi sit per ",
                    brandThumbnail: "thumbnail",
                    notes: ['notes1', 'notes2'],
                    createdBy: "string",
                    createdDate: new Date,
                    updatedDate: new Date,
                    updatedBy: "string",
                }

            ]);
        }, 3000);
    });
};

export const getOrderManagerBrandOrders = async (omId: string, brandId: string): Promise<OrderManagerBrandOrdersInterface[]> => {
    return new Promise((resolve) => {
        const orderArr = [
            ...Array.from({ length: 40 }, (_, i) => ({
                orderManagerId: ["123456", "654321"][Math.floor(Math.random() * 2)],
                brandId: ["thorogood-123", "tachikara", "tasmanians123"][Math.floor(Math.random() * 3)],
                orderId: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
                poNumber: Math.floor(10000 + Math.random() * 90000),
                orderSku: `SKU-${Math.floor(1000 + Math.random() * 9000)}`,
                trackingNumber: Math.floor(100000000000 + Math.random() * 900000000000),
                customerName: `Customer ${i + 1}`,
                lesd: new Date(),
                quantity: Math.floor(1 + Math.random() * 5),
                purchaseDate: new Date(),
                orderDate: new Date(),
                status: ["Ordered", "Shipped", "Delivered", "Processing"][Math.floor(Math.random() * 4)],
                smNotes: `Note ${i + 1}`,
                csNotes: `Customer support note ${i + 1}`,
                primeChecker: ["Checked", "Unchecked"][Math.floor(Math.random() * 2)],
                doubleOrderChecker: Math.floor(Math.random() * 2),
                createdBy: "Admin",
                createdDate: new Date(),
                updatedDate: new Date(),
                updatedBy: "Admin",
            })),
        ]
        setTimeout(() => {
            resolve(orderArr.filter((order) => order.orderManagerId === omId && order.brandId === brandId));
        }, 3000);
    });
};
