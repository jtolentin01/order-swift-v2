export interface ComponentProps {
    isDisabled: boolean;
}

export interface commonProps<T> {
    data?: T; 
    highlightedItem?: string;
    onRowAction: (action: "edit" | "delete", data: T | any) => void;
}