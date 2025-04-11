import React from "react";

type OrderManagerNotesTemplateProps = {
    notes: string[];
};

export const OrderManagerNotesTemplate: React.FC<OrderManagerNotesTemplateProps> = ({ notes }) => {
    return (
        <div className="space-y-2">
            {notes.length > 0 ? notes.map((note, index) => (
                <div
                    key={index}
                    className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg bg-white dark:bg-[#333] dark:border-[#444] transition-all duration-300 hover:bg-gray-100 dark:hover:bg-[#444]"
                >
                    <p className="text-gray-800 dark:text-gray-200 text-sm">{note}</p>
                </div>
            )) :
                <div
                    className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg bg-white dark:bg-[#333] dark:border-[#444] transition-all duration-300 hover:bg-gray-100 dark:hover:bg-[#444]"
                >
                    <p className="text-gray-800 dark:text-gray-200 text-sm">Empty</p>
                </div>
            }
        </div>

    );
}