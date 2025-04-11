export interface InvoiceAuditInterface {
    segmentId: string,
    segmentName: string,
    segmentDescription?: string,
    thumbnail?: string,
    segmentbrands?: InvoiceAuditBrandsInterface[],
    isActive: boolean,
    createdDate: Date,
    updatedDate: Date,
    createdBy: string,
    updatedBy: string,
}

export interface InvoiceAuditBrandsInterface {
    segmentId: string,
    brandId: string,
    brandName: string,
    brandThumbnail?: string,
    description: string,
    createdBy: string,
    createdDate: Date,
    updatedDate: Date,
    updatedBy: string,
}

export interface InvoiceAuditBrandDataInterface {
    segmentId: string,
    brandId: string,
    purchaseOrder: string,
    listingData: InvoiceAuditBrandListingDataInterface[],
    orderConfirmation: InvoiceAuditBrandOrderConfirmationInterface[],
    invoice: InvoiceAuditBrandInvoiceInterface[],
    shippingPlanCreation: string[],
    createdBy: string,
    createdDate: Date,
    updatedDate: Date,
    updatedBy: string,
}

export interface InvoiceAuditBrandListingDataInterface {
    purchaseOrder: string,
    upc: string,
    asin: string,
    sku: string,
    title: string,
    itemCost: number,
    discountCost: number,
    quantity: number,
    total: number,
    quantityDiscrepancy: number,
    ddInvTotalQuantity: number,
    remainingQuantityLeft: number,
}

export interface InvoiceAuditBrandOrderConfirmationInterface {
    purchaseOrder: string,
    upc: string,
    sku: string,
    itemCost: number,
    discountCost: number,
    ocQuantity: number,
    ocTotalCost: number,
    ocDdDiscountedCost: number,
    inDD: boolean,
}

export interface InvoiceAuditBrandInvoiceInterface {
    purchaseOrder: string,
    pullPo: string,
    upc: string,
    sku: string,
    itemCost: number,
    discountCost: number,
    invQuantity: number,
    totalInvCost: number,
    invDdDiscountedCost: number,
    inDD: boolean,
}

