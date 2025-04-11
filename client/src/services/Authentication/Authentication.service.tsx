import { removeCookie } from "../../utils/helpers";

export const AuthenticateUser = async (email:string, password:string): Promise<Boolean> => {
    (()=>{
        const date = new Date();
        date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `session=value123; ${expires}; path=/`;
    })();
    return true;
}

export const revokeUserAuth = (): void => {
    removeCookie('session');
}