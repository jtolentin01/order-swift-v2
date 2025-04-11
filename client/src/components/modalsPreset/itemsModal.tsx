import React, { useState, useEffect } from "react";
import ModalComponent from "../modal";
import { ModalPresetProps } from "../modal";

interface ItemsModalProps extends ModalPresetProps {
    onModalClose: () => void;
    size?: "small" | "medium" | "large" | "xl";
}

export const ItemsModal: React.FC<ItemsModalProps> = ({ enable, content, title, subtitle, onModalClose, size = "medium" }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(enable);

    useEffect(() => {
        setIsModalOpen(enable);
    }, [enable]);

    const handleClose = () => {
        setIsModalOpen(false);
        onModalClose();
    };

    return (
        <ModalComponent
            isOpen={isModalOpen}
            title={title}
            onClose={handleClose}
            size={size}
            enableClose={true}
            subtitle={subtitle}
        >
            {content}
        </ModalComponent>
    );
};
