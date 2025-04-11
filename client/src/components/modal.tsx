import React, { ReactNode } from "react";
import { IoIosClose } from "react-icons/io";

type ModalProps = {
    isOpen: boolean;
    title?: string;
    subtitle?: string;
    enableClose: boolean;
    children: ReactNode;
    onClose: () => void;
    footer?: ReactNode;
    size?: "small" | "medium" | "large" | "xl";
};

export type ModalPresetProps = {
    enable: boolean;
    disable?: boolean;
    message?: string;
    content?: any;
    title: string;
    subtitle?: string;
};


const ModalComponent: React.FC<ModalProps> = ({
    isOpen,
    title,
    subtitle,
    children,
    onClose,
    enableClose,
    footer,
    size = "medium",
}) => {
    if (!isOpen) return null;

    const sizeClasses = {
        small: "max-w-sm",
        medium: "max-w-md",
        large: "max-w-3xl",
        xl: "max-w-7xl",
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget && enableClose) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={handleOverlayClick}
        >
            <div
                className={`bg-white rounded-lg shadow-lg ${sizeClasses[size]} w-full p-6`}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? "modal-title" : undefined}
            >
                <div className="flex justify-between flex-col items-center border-b pb-1">
                    <div className="flex w-full flex-row-reverse">
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 focus:outline-none text-2xl"
                            aria-label="Close modal"
                        >
                            {enableClose ? <IoIosClose /> : ""}
                        </button>
                    </div>
                    <div className="flex w-full flex-row">
                        {title && (
                            <h2
                                id="modal-title"
                                className="text-lg font-semibold text-[#ea4b33]"
                            >
                                {title}
                            </h2>
                        )}
                    </div>
                    <div className="flex w-full flex-row mb-2">
                        {subtitle && (
                            <p
                                className="text-sm font-normal text-gray-800"
                            >
                                {subtitle}
                            </p>
                        )}
                    </div>
                </div>

                <div className="mt-4 max-h-[60vh] overflow-y-auto">
                    {children}
                </div>

                {footer && <div className="mt-2">{footer}</div>}
            </div>
        </div>
    );
};

export default ModalComponent;
