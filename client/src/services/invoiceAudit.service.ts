import { InvoiceAuditInterface, InvoiceAuditBrandsInterface, InvoiceAuditBrandDataInterface } from "../interfaces/invoiceAuditInterface";

export const getInvoiceAuditSegments = async (): Promise<InvoiceAuditInterface[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    segmentId: "active-B09523S-523ZX",
                    segmentName: "Active",
                    segmentDescription: "Description for Active",
                    thumbnail: "https://www.rei.com/dam/20210315-f21-portland-1112030-torrent-2-osat-08_htc-road-running-shoes_torrent.jpg",
                    isActive: true,
                    segmentbrands: [
                        {
                            segmentId: "active-B09523S-523ZX",
                            brandId: "Brand1",
                            brandName: "Active-B1",
                            brandThumbnail: "thumbnail1.jpg",
                            description: "Description for Brand 1",
                            createdBy: "User 1",
                            createdDate: new Date(),
                            updatedDate: new Date(),
                            updatedBy: "User 1"
                        },
                        {
                            segmentId: "active-B09523S-523ZX",
                            brandId: "Brand2",
                            brandName: "Active-B2",
                            brandThumbnail: "thumbnail2.jpg",
                            description: "Description for Brand 2",
                            createdBy: "User 2",
                            createdDate: new Date(),
                            updatedDate: new Date(),
                            updatedBy: "User 2"
                        }
                    ],
                    createdDate: new Date(),
                    updatedDate: new Date(),
                    createdBy: "User 1",
                    updatedBy: "User 1"
                },
                {
                    segmentId: "lifestyle-RSXZ123-BBSXZ",
                    segmentName: "Lifestyle",
                    segmentDescription: "Description for Lifestyle",
                    thumbnail: "https://i.ebayimg.com/images/g/Xf0AAOSw4kpgm0s7/s-l1600.webp",
                    isActive: false,
                    segmentbrands: [
                        {
                            segmentId: "lifestyle-RSXZ123-BBSXZ",
                            brandId: "Brand1",
                            brandName: "Lifestyle-B1",
                            brandThumbnail: "thumbnail1.jpg",
                            description: "Description for Brand 1",
                            createdBy: "User 1",
                            createdDate: new Date(),
                            updatedDate: new Date(),
                            updatedBy: "User 1"
                        },
                        {
                            segmentId: "lifestyle-RSXZ123-BBSXZ",
                            brandId: "Brand2",
                            brandName: "Lifestyle-B2",
                            brandThumbnail: "thumbnail2.jpg",
                            description: "Description for Brand 2",
                            createdBy: "User 2",
                            createdDate: new Date(),
                            updatedDate: new Date(),
                            updatedBy: "User 2"
                        }
                    ],
                    createdDate: new Date(),
                    updatedDate: new Date(),
                    createdBy: "User 2",
                    updatedBy: "User 2"
                }
            ]);
        }, 1000);
    });
};

export const getInvoiceAuditBrandSegments = async (): Promise<InvoiceAuditBrandsInterface[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    segmentId: "lifestyle-RSXZ123-BBSXZ",
                    brandId: "Brand1",
                    brandName: "Tachikara",
                    brandThumbnail: "thumbnail1.jpg",
                    description: "Description for Brand 1",
                    createdBy: "User 1",
                    createdDate: new Date(),
                    updatedDate: new Date(),
                    updatedBy: "User 1"
                },
                {
                    segmentId: "lifestyle-RSXZ123-BBSXZ",
                    brandId: "Brand2",
                    brandName: "Tasmanian",
                    brandThumbnail: "thumbnail2.jpg",
                    description: "Description for Brand 2",
                    createdBy: "User 2",
                    createdDate: new Date(),
                    updatedDate: new Date(),
                    updatedBy: "User 2"
                }
            ]);
        }, 1000);
    });
};

export const getInvoiceAuditBrandDataSegments = async (segmentId: string, brandId: string): Promise<InvoiceAuditBrandDataInterface[]> => {
    return new Promise((resolve) => {
        const staticBrandData = [
            {
                segmentId: "lifestyle-RSXZ123-BBSXZ",
                brandId: "Brand1",
                purchaseOrder: "PO1234",
                listingData: [{
                    purchaseOrder: "PO1234",
                    upc: "123456789012",
                    asin: "B000123456",
                    sku: "SKU123",
                    title: "Product Title 1",
                    itemCost: 10.0,
                    discountCost: 2.0,
                    quantity: 5,
                    total: 40.0,
                    quantityDiscrepancy: 0,
                    ddInvTotalQuantity: 5,
                    remainingQuantityLeft: 0,
                },
                {
                    purchaseOrder: "PO1234",
                    upc: "123456789022",
                    asin: "B000123466",
                    sku: "SKU552",
                    title: "Product Title 2",
                    itemCost: 10.0,
                    discountCost: 3.0,
                    quantity: 5,
                    total: 50.0,
                    quantityDiscrepancy: 0,
                    ddInvTotalQuantity: 5,
                    remainingQuantityLeft: 0,
                },
                {
                    purchaseOrder: "PO555",
                    upc: "1234567893256",
                    asin: "B000123478",
                    sku: "SKU511",
                    title: "Product Title 3",
                    itemCost: 12.0,
                    discountCost: 3.0,
                    quantity: 5,
                    total: 55.0,
                    quantityDiscrepancy: 0,
                    ddInvTotalQuantity: 5,
                    remainingQuantityLeft: 0,
                }
                ],
                orderConfirmation: [
                    {
                        purchaseOrder: "PO1234",
                        upc: "123456789012",
                        sku: "SKU123",
                        itemCost: 10.0,
                        discountCost: 2.0,
                        ocTotalCost: 40.0,
                        ocDdDiscountedCost: 38.0,
                        inDD: true,
                        ocQuantity: 5,
                    },
                    {
                        purchaseOrder: "PO1234",
                        upc: "5123123213",
                        sku: "5123123213",
                        itemCost: 10.0,
                        discountCost: 2.0,
                        ocTotalCost: 40.0,
                        ocDdDiscountedCost: 38.0,
                        inDD: true,
                        ocQuantity: 5,
                    }
                ],
                invoice: [
                    {
                        purchaseOrder: "PO1234",
                        pullPo: "PO1234",
                        invQuantity: 5,
                        totalInvCost: 40.0,
                        invDdDiscountedCost: 38.0,
                        upc: "123456789012",
                        sku: "SKU123",
                        itemCost: 10.0,
                        discountCost: 2.0,
                        inDD: true,
                    }
                ],
                shippingPlanCreation: ["SPC1", "SPC2"],
                createdBy: "User 1",
                createdDate: new Date(),
                updatedDate: new Date(),
                updatedBy: "User 1"
            }
        ]
        setTimeout(() => {
            resolve(staticBrandData.filter((data) => data.segmentId === segmentId && data.brandId === brandId));;
        }, 1000);
    });
};