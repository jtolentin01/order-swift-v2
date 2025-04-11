import { useAppSelector } from "../store/hooks";

export const useCheckUserPermission = (permissions: string[]): boolean => {
    const { items: currentUser } = useAppSelector((state) => state.user);

    if (!currentUser || currentUser.length === 0) {
        return false;
    }

    return permissions.every(permission => currentUser[0].permissions.includes(permission));
};
