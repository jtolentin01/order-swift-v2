import React from 'react';
import { Navigate, Outlet, RouteObject, matchPath,useLocation } from 'react-router-dom';
import Layout from '../containers/appLayout';
import DashboardComponent from '../pages/Dashboard/Dashboard';
import OrdersComponent from '../pages/Orders/Orders';
import PageNotFoundComponent from '../pages/404/NotFound';
import OrderManagerComponent from '../pages/OrderManager/OrderManager';
import OrderManagementPageComponent from '../pages/OrderManager/OrderManagementList';
import ImportOrderComponent from '../pages/Orders/Components/importOrders';
import isAuthenticated from '../services/Authentication/AuthGuard.service';
import ValidateBrand from '../services/Guards/BrandGuard.service';
import UserProfileComponent from '../pages/UserProfile/UserProfile';
import CartPageComponent from '../pages/Orders/Components/cart';
import AdministrationComponent from '../pages/Administration/Administration';
import { UsersComponent } from '../pages/Users/Users';
import { SettingsComponent } from '../pages/Settings/Settings';
import DocumentationComponent from '../pages/Documentation/Documentation';
import InvoiceAuditComponent from '../pages/InvoiceAudit/InvoiceAudit';
import OrderSwiftManagerComponent from '../pages/OrderManager/OrderswiftManager';
import InvoiceAuditOrdersComponent from '../pages/InvoiceAudit/invoiceAuditOrders';
import { useAppSelector } from '../store/hooks';

const RequireAuth: React.FC = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

const ProtectedRoute: React.FC<{ path: string; Component: React.FC<any> }> = ({ path, Component }) => {
    const location = useLocation();
    const { items: appInfo } = useAppSelector((state) => state.application);
    const pageControl = appInfo[0]?.pageControl?.find(
        (p) => p.path === location.pathname || matchPath(p.path, location.pathname)
    );
    const isDisabled = pageControl ? pageControl.disabled : false;
    return <Component isDisabled={isDisabled} />;
};

const privateRoutes: RouteObject[] = [
    {
        path: '/',
        element: <RequireAuth />,
        children: [
            {
                path: '/',
                element: <Layout />,
                children: [
                    { path: 'dashboard', element: <DashboardComponent /> },
                    { path: 'order-manager', element: <ProtectedRoute path="/order-manager" Component={OrderManagementPageComponent} /> },
                    { path: 'order', element: <ProtectedRoute path="/order" Component={OrdersComponent} /> },
                    {
                        path: 'order-manager/:om',
                        element: <ProtectedRoute path="/order-manager/om" Component={OrderManagerComponent} />,
                    },
                    {
                        path: 'order-manager/orderswift',
                        element: <OrderSwiftManagerComponent />,
                    },
                    { path: 'order/cart', element: <ProtectedRoute path="order/cart" Component={CartPageComponent} /> },
                    {
                        path: 'order/:brand',
                        element: (
                            <ValidateBrand>
                                <ImportOrderComponent />
                            </ValidateBrand>
                        ),
                    },
                    { path: 'users', element: <ProtectedRoute path="/users" Component={UsersComponent} /> },
                    { path: 'settings', element: <SettingsComponent /> },
                    { path: 'profile', element: <UserProfileComponent /> },
                    { path: 'administration', element: <AdministrationComponent /> },
                    { path: 'documentation', element: <ProtectedRoute path="/documentation" Component={DocumentationComponent} /> },
                    {
                        path: 'invoice-audit',
                        element: <ProtectedRoute path="/invoice-audit" Component={InvoiceAuditComponent} />
                    },
                    {
                        path: 'invoice-audit/:segment',
                        element: <ProtectedRoute path="/invoice-audit/:segment" Component={InvoiceAuditOrdersComponent} />,
                    },
                    { path: '*', element: <PageNotFoundComponent /> },
                ],
            },
        ],
    },
];

export default privateRoutes;
