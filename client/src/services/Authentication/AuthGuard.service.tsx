import { getCookie } from "../../utils/helpers";

const isAuthenticated = (): boolean => {
    const checkCookie = getCookie('session');
    return Boolean(checkCookie)
};

export default isAuthenticated;
