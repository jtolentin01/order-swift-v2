import { BrandInterface } from "./brandInterface";

export interface ClientInterface {
    clientId: string,
    clientName: string,
    logo?: string,
    description?: string,
    brands?:BrandInterface,
    isActive: Boolean,
    createdBy: string,
    createdDate: string,
}