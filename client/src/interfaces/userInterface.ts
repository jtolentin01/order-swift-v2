export interface UserInterface {
    id: string; 
    email: string; 
    firstName: string;
    lastName: string;
    middleName: string;
    isActive: boolean; 
    organization: string[]; 
    orderManagerAccess: string[];
    reportAccess: string[];
    invoiceAuditSegments: string[];
    brandAccess: string[];
    createdAt: string;
    lastActive: string;
    addedBy: string;
    resetPasswordCode: string;
    resetPasswordDate: string;
    role: 'Admin' | 'Super' | 'User' | 'Manager' ;
    organizationRole: string;
    permissions: string[];
    profile?: {
        avatarUrl?: string; 
        bio?: string; 
    };
}