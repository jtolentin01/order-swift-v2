import toast from "react-hot-toast";

const toastConfig:any = {
    duration: 4000,
    position: 'top-right',
}

export const toastSuccess = (message: string) => toast.success(message,toastConfig)
export const toastError = (message: string) => toast.error(message,toastConfig)
export const toastInfo = (message: string) => toast(message, {icon: 'ℹ️',position: 'top-right',});
