import React, { useState, useRef, useEffect } from "react";
import { FaTrash, FaSave, FaPlus } from "react-icons/fa";

type EditableTableProps<T extends Record<string, any>> = {
    initialData: T[];
    onDataChange?: (updatedData: T[]) => void;
    excludeColumns?: (keyof T)[];
};

export const EditableTable = <T extends Record<string, any>>({
    initialData,
    onDataChange,
    excludeColumns = []
}: EditableTableProps<T>) => {
    const [tableData, setTableData] = useState<T[]>(initialData);
    const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});
    const [isResizing, setIsResizing] = useState(false);
    const [activeColumn, setActiveColumn] = useState<string | null>(null);
    const tableRef = useRef<HTMLTableElement>(null);
    const startXRef = useRef(0);
    const startWidthRef = useRef(0);

    const handleAddRow = () => {
        const blankRow = {} as T; // Create a blank row
        Object.keys(tableData[0]).forEach((key) => {
            const columnKey = key as keyof T;
            const columnValue = tableData[0][columnKey];

            if (typeof columnValue === "number") {
                blankRow[columnKey] = 0 as T[keyof T];
            } else if (typeof columnValue === "boolean") {
                blankRow[columnKey] = false as T[keyof T];
            } else {
                blankRow[columnKey] = "" as T[keyof T];
            }
        });
        setTableData((prevData) => [...prevData, blankRow]);
    };

    const handleDeleteRow = (rowIndex: number) => {
        setTableData(prevData => prevData.filter((_, index) => index !== rowIndex));
    };

    useEffect(() => {
        if (tableData.length > 0) {
            const columns = (Object.keys(tableData[0]) as (keyof T)[]).filter(
                (key) => !excludeColumns.includes(key)
            );

            const initialWidths: Record<string, number> = {};
            columns.forEach((col) => {
                initialWidths[String(col)] = 150;
            });

            setColumnWidths(initialWidths);
        }
    }, [tableData, excludeColumns]);

    const handleInputChange = (
        rowIndex: number,
        key: keyof T,
        value: string | number | boolean
    ) => {
        setTableData(prevData => {
            const updatedData = [...prevData];

            const originalValue = updatedData[rowIndex][key];
            let newValue: any = value;

            if (typeof originalValue === 'number') {
                newValue = Number(value);
            } else if (typeof originalValue === 'boolean') {
                newValue = typeof value === 'string'
                    ? value === 'true'
                    : Boolean(value);
            }

            updatedData[rowIndex] = {
                ...updatedData[rowIndex],
                [key]: newValue
            };

            return updatedData;
        });
    };

    const handleSave = () => {
        onDataChange?.(tableData);
    };

    const handleResizeStart = (columnName: string, e: React.MouseEvent) => {
        setIsResizing(true);
        setActiveColumn(columnName);
        startXRef.current = e.clientX;
        startWidthRef.current = columnWidths[columnName] || 150;

        document.addEventListener('mousemove', handleResizeMove);
        document.addEventListener('mouseup', handleResizeEnd);
    };

    const handleResizeMove = (e: MouseEvent) => {
        if (!isResizing || !activeColumn) return;

        const delta = e.clientX - startXRef.current;
        const newWidth = Math.max(50, startWidthRef.current + delta);

        setColumnWidths(prev => ({
            ...prev,
            [activeColumn]: newWidth
        }));
    };

    const handleResizeEnd = () => {
        setIsResizing(false);
        setActiveColumn(null);

        document.removeEventListener('mousemove', handleResizeMove);
        document.removeEventListener('mouseup', handleResizeEnd);
    };

    if (tableData.length === 0) {
        return (
            <div className="w-full h-full bg-white p-4 dark:bg-[#2A2A2A]">
                <p>No data available</p>
            </div>
        );
    }

    const columns = (Object.keys(tableData[0]) as (keyof T)[])
        .filter(key => !excludeColumns.includes(key));

    return (
        <div className="w-full h-full bg-white p-4 dark:bg-[#2A2A2A]">
            <table
                ref={tableRef}
                className="w-full border-collapse hidden sm:table"
                style={{
                    tableLayout: 'fixed',
                    pointerEvents: isResizing ? 'none' : 'auto'
                }}
            >
                <thead className="bg-gray-200 dark:bg-[#5e5d5d] text-sm font-medium top-0 z-10 dark:text-[#dad6d6]">
                    <tr>
                        {columns.map((key) => {
                            const columnName = String(key);
                            return (
                                <th
                                    key={columnName}
                                    className="p-2 border-b font-normal text-left py-3 relative group"
                                    style={{
                                        width: `${columnWidths[columnName] || 150}px`,
                                        minWidth: '50px'
                                    }}
                                >
                                    {columnName}
                                    <div
                                        className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize bg-gray-400 opacity-0 group-hover:opacity-100"
                                        onMouseDown={(e) => handleResizeStart(columnName, e)}
                                        style={{
                                            backgroundColor: activeColumn === columnName ? '#3b82f6' : '',
                                            opacity: activeColumn === columnName ? 1 : 0
                                        }}
                                    />
                                </th>
                            );
                        })}
                        <th
                            className="p-2 border-b font-normal text-center py-3"
                            style={{ width: '50px', minWidth: '50px' }}
                        >
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="text-xs">
                    {tableData.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={`hover:bg-gray-100 dark:hover:bg-[#818080] transition-colors dark:bg-[#575454] dark:text-[#e6e2e2] ${rowIndex % 2 === 0 ? "bg-gray-50 dark:bg-[#4a4a4a]" : "bg-white dark:bg-[#575454]"
                                }`}
                        >
                            {columns.map((key, colIndex) => {
                                const value = row[key];
                                const columnName = String(key);
                                const inputType =
                                    typeof value === "number"
                                        ? "number"
                                        : typeof value === "boolean"
                                            ? "checkbox"
                                            : "text";

                                return (
                                    <td
                                        key={colIndex}
                                        className="p-2 border-b text-left overflow-hidden text-ellipsis whitespace-nowrap"
                                        style={{
                                            width: `${columnWidths[columnName] || 150}px`,
                                            minWidth: '50px'
                                        }}
                                    >
                                        {inputType === "checkbox" ? (
                                            <input
                                                type="checkbox"
                                                checked={Boolean(value)}
                                                onChange={(e) =>
                                                    handleInputChange(rowIndex, key, e.target.checked)
                                                }
                                                className="h-4 w-4"
                                            />
                                        ) : (
                                            <input
                                                type={inputType}
                                                value={value as string | number}
                                                onChange={(e) =>
                                                    handleInputChange(rowIndex, key, e.target.value)
                                                }
                                                className="w-full bg-transparent border-none outline-none"
                                                step={inputType === "number" ? "any" : undefined}
                                            />
                                        )}
                                    </td>
                                );
                            })}
                            <td className="p-2 border-b text-center">
                                <button
                                    onClick={() => handleDeleteRow(rowIndex)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                    {tableData.length === 0 && (
                        <tr>
                            <td colSpan={columns.length + 1} className="text-center p-4 text-base">
                                No data available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            {/* Add an "Edit" button */}
            <div className="flex justify-end mt-4">
                <button
                    onClick={handleAddRow}
                    className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 flex items-center justify-center mr-2"
                    style={{ width: '40px', height: '40px' }}
                    title="Add Row"
                >
                    <FaPlus size={20} />
                </button>
                <button
                    onClick={handleSave}
                    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 flex items-center justify-center"
                    style={{ width: '40px', height: '40px' }}
                    title="Save"
                >
                    <FaSave size={20} />
                </button>
            </div>
        </div>
    )
};