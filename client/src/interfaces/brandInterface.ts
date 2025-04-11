export interface BrandInterface {
    brandId: string,
    brandName: string,
    segment?: string,
    logo?: string,
    description?: string,
    handler?: string,
    lastUpdatedOrder?: Date,
    isActive: Boolean,
    createdBy: string,
    createdDate: string,
}