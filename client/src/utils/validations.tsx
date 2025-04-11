import { useAppSelector } from "../store/hooks";

export const useIsBrandValid = (brand: string): boolean => {
    const { items: brands } = useAppSelector((state) => state.brands);

    if (!brands || brands.length === 0) {
        return false;
    }

    return brands.some((b) => b.brandId.toLowerCase() === brand.toLowerCase());
};
