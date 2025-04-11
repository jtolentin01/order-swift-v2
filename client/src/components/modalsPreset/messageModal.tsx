import React, { useState, useEffect } from "react";
import ModalComponent from "../modal";

type EulaProps = {
    enable: boolean;
    message: string;
    title: string;
    subtitle?: string;
};

export const MessageModal: React.FC<EulaProps> = ({ enable,message,title,subtitle }) => {
    const [isModalOpen, setIsModalOpen] = useState(enable);

    useEffect(() => {
        setIsModalOpen(enable);
    }, [enable]);

    return (
        <ModalComponent
            isOpen={isModalOpen}
            title={title}
            onClose={() => setIsModalOpen(false)}
            size="medium"
            enableClose={true}
            subtitle={subtitle}
        >
            <div>
                <p>
                    {message}
                </p>
            </div>
        </ModalComponent>
    );
};
