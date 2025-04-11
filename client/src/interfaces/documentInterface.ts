export interface DocumentInterface {
    id: string;
    navigation: string;
    documentTitle: string;
    secondaryTitle?: string;
    sections: Array<any>;
    isProtected: boolean;
    createdBy: string;
    createdDate: string;
    updatedBy: string;
    updatedDate: string;
}