import { useCheckUserPermission } from "../../utils/userPermission";

export const useUserPermissions = () => {
    return {
        permissionCreateUser: useCheckUserPermission(['HASPERMISSION_CREATE_USER']),
        permissionReadUser: useCheckUserPermission(['HASPERMISSION_READ_USER']),
        permissionUpdateUser: useCheckUserPermission(['HASPERMISSION_UPDATE_USER']),
        permissionDeleteUser: useCheckUserPermission(['HASPERMISSION_DELETE_USER']),

        permissionPlaceOrder: useCheckUserPermission(['HASPERMISSION_PLACE_ORDER']),

        permissionCreateOM: useCheckUserPermission(['HASPERMISSION_CREATE_OM']),
        permissionReadOM: useCheckUserPermission(['HASPERMISSION_READ_OM']),
        permissionUpdateOM: useCheckUserPermission(['HASPERMISSION_UPDATE_OM']),
        permissionDeleteOM: useCheckUserPermission(['HASPERMISSION_DELETE_OM']),
        permissionExportOM: useCheckUserPermission(['HASPERMISSION_EXPORT_OM']),

        permissionReadTracking: useCheckUserPermission(['HASPERMISSION_READ_TRACKING']),
        permissionUpdateTracking: useCheckUserPermission(['HASPERMISSION_UPDATE_TRACKING']),
        permissionDeleteTracking: useCheckUserPermission(['HASPERMISSION_DELETE_TRACKING']),
        permissionExportTracking: useCheckUserPermission(['HASPERMISSION_EXPORT_TRACKING']),

        permissionReadReports: useCheckUserPermission(['HASPERMISSION_READ_REPORTS']),
        permissionDeleteReports: useCheckUserPermission(['HASPERMISSION_DELETE_REPORTS']),
        permissionExportReports: useCheckUserPermission(['HASPERMISSION_EXPORT_REPORTS']),

        permissionCreateDocs: useCheckUserPermission(['HASPERMISSION_CREATE_DOCUMENTS']),
        permissionUpdateDocs: useCheckUserPermission(['HASPERMISSION_UPDATE_DOCUMENTS']),
        permissionDeleteDocs: useCheckUserPermission(['HASPERMISSION_DELETE_DOCUMENTS']),
        permissionUpdateProtectedDocs: useCheckUserPermission(['HASPERMISSION_UPDATE_PROTECTED_DOCUMENTS']),
        permissionDeleteProtectedDocs: useCheckUserPermission(['HASPERMISSION_DELETE_PROTECTED_DOCUMENTS']),
        permissionProtectDocs: useCheckUserPermission(['HASPERMISSION_PROTECT_DOCUMENTS']),

        permissionCreateInvoiceAudit: useCheckUserPermission(['HASPERMISSION_CREATE_INVOICEAUDIT']),
        permissionReadInvoiceAudit: useCheckUserPermission(['HASPERMISSION_READ_INVOICEAUDIT']),
        permissionUpdateInvoiceAudit: useCheckUserPermission(['HASPERMISSION_UPDATE_INVOICEAUDIT']),
        permissionDeleteInvoiceAudit: useCheckUserPermission(['HASPERMISSION_DELETE_INVOICEAUDIT']),
        permissionExportInvoiceAudit: useCheckUserPermission(['HASPERMISSION_EXPORT_INVOICEAUDIT']),

        permissionCreateAdmins: useCheckUserPermission(['HASPERMISSION_CREATE_ADMINS']),
        permissionCreateOrganizations: useCheckUserPermission(['HASPERMISSION_CREATE_ORGANIZATIONS']),
        permissionCreateClients: useCheckUserPermission(['HASPERMISSION_CREATE_CLIENTS']),

        permissionReadAdmins: useCheckUserPermission(['HASPERMISSION_READ_ADMINS']),
        permissionReadOrganizations: useCheckUserPermission(['HASPERMISSION_READ_ORGANIZATIONS']),
        permissionReadClients: useCheckUserPermission(['HASPERMISSION_READ_CLIENTS']),

        permissionUpdateAdmins: useCheckUserPermission(['HASPERMISSION_UPDATE_ADMINS']),
        permissionUpdateOrganizations: useCheckUserPermission(['HASPERMISSION_UPDATE_ORGANIZATIONS']),
        permissionUpdateClients: useCheckUserPermission(['HASPERMISSION_UPDATE_CLIENTS']),

        permissionDeleteAdmins: useCheckUserPermission(['HASPERMISSION_DELETE_ADMINS']),
        permissionDeleteOrganizations: useCheckUserPermission(['HASPERMISSION_DELETE_ORGANIZATIONS']),
        permissionDeleteClients: useCheckUserPermission(['HASPERMISSION_DELETE_CLIENTS']),
        permissionDisableClients: useCheckUserPermission(['HASPERMISSION_DISABLE_CLIENTS']),
    };
};
