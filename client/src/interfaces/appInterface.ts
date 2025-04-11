export interface AppInterface {
    environment: 'Development' | 'Production' | 'Staging' | 'Testing',
    version: string,
    name: string,
    description: string,
    releaseDate: string,
    buildDate: string,
    buildVersion: string,
    license: string,
    developerContact: string,
    pageControl?: PageControlInterface[]
}

interface PageControlInterface {
    path: string,
    message: string
    type: 'info' | 'warning' | 'error' | 'success'
    disabled: boolean
}

export interface NotificationInterface {
    notificationId: string,
    from?: {
        name: string,
        avatarUrl: string,
    },
    message: string,
    type: 'high' | 'medium' | 'low',
    redirectUrl?: string,
    createdDate: string,
    updatedDate: string,
    isRead: boolean,
}