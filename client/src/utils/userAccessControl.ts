import { useAppSelector } from "../store/hooks";

export const useCheckUserReportAccess = (reportAccess: string[]): boolean => {
    const { items: currentUser } = useAppSelector((state) => state.user);

    if (!currentUser || currentUser.length === 0) {
        return false;
    }

    return reportAccess.every(reports => currentUser[0].reportAccess.includes(reports));
};
