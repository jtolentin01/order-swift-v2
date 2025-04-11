import { RouteObject, Navigate } from 'react-router-dom';
import LoginComponent from '../pages/Login/Login';
import UnauthenticatedService from '../services/Authentication/Unathenticated.service';

const publicRoutes: RouteObject[] = [
    {
        path: "/",
        element: <UnauthenticatedService />,
        children: [
            { path: "/", element: <Navigate to="/login" replace /> },
            { path: "login", element: <LoginComponent /> },
        ],
    },
];

export default publicRoutes;
