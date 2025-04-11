import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import isAuthenticated from './AuthGuard.service'; 

const UnauthenticatedService: React.FC = () => {
    return !isAuthenticated() ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default UnauthenticatedService;
