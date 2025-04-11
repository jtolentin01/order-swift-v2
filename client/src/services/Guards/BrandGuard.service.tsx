import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useIsBrandValid } from '../../utils/validations';

type BrandValidationProps = {
    children: React.ReactNode
}

const ValidateBrand: React.FC<BrandValidationProps> = ({ children }) => {
    const { brand } = useParams<{ brand: string }>();
    const isValid = useIsBrandValid(brand || '');

    if (!brand || !isValid) {
        return <Navigate to="/order" replace />;
    }

    return <>{children}</>;
};

export default ValidateBrand;
