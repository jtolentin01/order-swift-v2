import React, { useState, useEffect } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toastError } from "../../components/toasters";
import { CommonError } from "../../enum/ErrorMessage";
import { FaRegEye } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { currentDocuments } from "../../store/slices/documentSlice";
import { modules } from "./ReactQuillModule"
import DocumentationSkeleton from "../../components/skeletons/documentSkeleton";
import { generateRandomMD5, formatDate, formatDateToString } from "../../utils/helpers";
import { useUserPermissions } from "../../services/Permissions/permissions.service";

import { ComponentProps } from "../../interfaces/globalComponentInterface";
import { PageNotAvailable } from "../../components/pageNotAvailable";

const DocumentationComponent: React.FC<ComponentProps> = ({ isDisabled }) => {
    const dispatch = useAppDispatch();
    const [disabled, setDisabled] = useState<boolean>(isDisabled);
    const { items, loading } = useAppSelector((state) => state.documents);
    const { items: currentUser } = useAppSelector((state) => state.user);

    const [preview, setPreview] = useState(false);
    const [dataSources, setDataSources] = useState(items);
    const [currentDataIndex, setCurrentDataIndex] = useState(0);
    const [data, setData] = useState(dataSources[currentDataIndex] || {
        id: "",
        navigation: "",
        documentTitle: "",
        secondaryTitle: "",
        sections: []
    });
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [editSection, setEditSection] = useState({ h3: "", h4: "", img: "", p1: "" });
    const [newDocument, setNewDocument] = useState({ id: generateRandomMD5(), navigation: "", documentTitle: "", secondaryTitle: "", createdBy: "", updatedBy: "", updatedDate: "", isProtected: false, sections: [] });
    const permissionManager = useUserPermissions();

    useEffect(() => {
        dispatch(currentDocuments());
    }, [dispatch]);

    useEffect(() => {
        setDisabled(isDisabled);
    }, [isDisabled]);

    useEffect(() => {
        setDataSources(items);
    }, [items]);

    useEffect(() => {
        if (dataSources.length > 0) {
            setData(dataSources[currentDataIndex] || { id: "", navigation: "", documentTitle: "", secondaryTitle: "", sections: [] });
        }
    }, [dataSources, currentDataIndex]);

    const handleEdit = (index: number) => {
        setEditIndex(index);
        setEditSection(data.sections[index]);
    };

    const handleSave = () => {
        const isDocProtected = dataSources.filter((_, i) => i == currentDataIndex);
        if (!isDocProtected[0].isProtected || permissionManager.permissionUpdateProtectedDocs) {
            const updatedSections = [...data.sections];
            if (editIndex !== null) {
                updatedSections[editIndex] = editSection;
                const updatedData = { ...data, sections: updatedSections };
                setData(updatedData);

                const updatedDataSources = [...dataSources];
                updatedDataSources[currentDataIndex] = updatedData;
                setDataSources(updatedDataSources);

                setEditIndex(null);
            }
        } else {
            setEditIndex(null);
            toastError("You don't have permission to Update protected documents")
        }

    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditSection({ ...editSection, [name]: value });
    };

    const handleParagraphChange = (value: string) => {
        setEditSection({ ...editSection, p1: value });
    };

    const handleDeleteSection = (index: number) => {
        const updatedSections = data.sections.filter((_, i) => i !== index);
        const updatedData = { ...data, sections: updatedSections };
        setData(updatedData);

        const updatedDataSources = [...dataSources];
        updatedDataSources[currentDataIndex] = updatedData;
        setDataSources(updatedDataSources);
    };

    const handleAddSection = () => {
        const isDocProtected = dataSources.filter((_, i) => i == currentDataIndex);
        if (!isDocProtected[0].isProtected || permissionManager.permissionUpdateProtectedDocs) {
            const newSection = { h3: "New Section", h4: "New Subtitle", img: "", p1: "New content" };
            const updatedData = { ...data, sections: [...data.sections, newSection] };
            setData(updatedData);

            const updatedDataSources = [...dataSources];
            updatedDataSources[currentDataIndex] = updatedData;
            setDataSources(updatedDataSources);
        } else {
            toastError("You don't have permission to Update protected documents")
        }

    };

    const handleDataChange = (index: number) => {
        setCurrentDataIndex(index);
        setData(dataSources[index]);
    };

    const handleAddDocument = () => {
        if (newDocument.id && newDocument.navigation && newDocument.documentTitle) {
            const newDoc = {
                id: newDocument.id,
                navigation: newDocument.navigation,
                documentTitle: newDocument.documentTitle,
                secondaryTitle: newDocument.secondaryTitle,
                createdBy: `${currentUser[0].firstName} ${currentUser[0].middleName} ${currentUser[0].lastName}`,
                updatedBy: `${currentUser[0].firstName} ${currentUser[0].middleName} ${currentUser[0].lastName}`,
                updatedDate: formatDateToString(new Date(), 'MMMM dd, yyyy hh:mm a'),
                createdDate: formatDateToString(new Date(), 'MMMM dd, yyyy hh:mm a'),
                isProtected: newDocument.isProtected,
                sections: [],

            };
            const updatedDataSources = [...dataSources, newDoc];
            setDataSources(updatedDataSources);
            setNewDocument({ id: "", navigation: "", documentTitle: "", secondaryTitle: "", createdBy: "", updatedBy: "", updatedDate: "", isProtected: false, sections: [] });
        } else {
            toastError(CommonError.ALL_FIELDS_REQUIRED)
        }

    };

    const handleDeleteDocument = (index: number) => {
        const isDocProtected = dataSources.filter((_, i) => i == index);
        if (!isDocProtected[0].isProtected || permissionManager.permissionDeleteDocs) {
            const updatedDataSources = dataSources.filter((_, i) => i !== index);
            setDataSources(updatedDataSources);

            if (index === currentDataIndex) {
                setCurrentDataIndex(0);
                setData(updatedDataSources[0] || { id: "", navigation: "", documentTitle: "", secondaryTitle: "", sections: [] });
            }
        } else {
            toastError("You don't have permission to delete protected documents")
        }

    };

    return (
        <div className={`${disabled ? 'relative' : ''} dark:bg-[#2a2a2a] w-full bg-white p-4 flex flex-col min-h-screen`}>
            {disabled && <PageNotAvailable />}
            <div className={`flex ${disabled ? 'blur-sm' : ''}`}>
                <div className={`flex w-3/4 h-full dark:bg-[#2A2A2A] p-6 rounded-lg`}>
                    
                    <div className="h-full w-full">
                        {
                            !loading ? <div className="w-full h-full overflow-auto dark:bg-[#2A2A2A] dark:text-gray-300 p-4">
                                <div className="flex w-full items-center justify-between">
                                    <div>
                                        <h1 className="text-2xl font-bold">{data.documentTitle}</h1>
                                        <h2 className="text-md mb-6">{data.secondaryTitle}</h2>
                                    </div>
                                    <div>
                                        <h2 className="text-sm text-gray-500">Updated {data.updatedDate}</h2>
                                        <h2 className="text-xs text-gray-500">by {data.updatedBy}</h2>
                                    </div>
                                </div>


                                {data.sections.map((section, index) => (
                                    <div key={index} id={`section-${index}`} className="mb-8">
                                        {editIndex === index ? (
                                            <div>
                                                <input
                                                    type="text"
                                                    name="h3"
                                                    value={editSection.h3}
                                                    onChange={handleChange}
                                                    className="mb-2 p-2 border rounded"
                                                />
                                                <input
                                                    type="text"
                                                    name="h4"
                                                    value={editSection.h4}
                                                    onChange={handleChange}
                                                    className="mb-2 p-2 border rounded"
                                                />
                                                <input
                                                    type="text"
                                                    name="img"
                                                    value={editSection.img}
                                                    onChange={handleChange}
                                                    className="mb-2 p-2 border rounded"
                                                />
                                                <ReactQuill
                                                    value={editSection.p1}
                                                    onChange={handleParagraphChange}
                                                    theme="snow"
                                                    modules={modules}
                                                    className="mb-4"
                                                />
                                                <IoIosSave onClick={handleSave} className="scale-105 cursor-pointer" />
                                            </div>
                                        ) : (
                                            <div>
                                                <h3 className="text-xl font-bold mb-1 text-[#353434] dark:text-gray-300">{section.h3}</h3>
                                                <h4 className="text-lg mb-2 text-[#353434] dark:text-gray-300">{section.h4}</h4>
                                                <img src={section.img} alt={section.h3} className={`${section.img ? 'block' : 'hidden'} w-32 h-32 object-cover mb-4 rounded-lg shadow-md`} />
                                                <div
                                                    className="text-base text-[#353434] dark:text-gray-300 
               [&_ul]:list-disc [&_ul]:pl-10 
               [&_ol]:list-decimal [&_ol]:pl-10 
               [&_ul_ul]:list-[circle] [&_ul_ul]:pl-10 
               [&_ol_ol]:list-[lower-roman] [&_ol_ol]:pl-10 
               [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:my-4 
               [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:my-3 
               [&_h3]:text-xl [&_h3]:font-bold [&_h3]:my-2 
               [&_h4]:text-lg [&_h4]:font-bold [&_h4]:my-2 
               [&_h5]:text-base [&_h5]:font-bold [&_h5]:my-2 
               [&_h6]:text-sm [&_h6]:font-bold [&_h6]:my-2 
               [&_a]:text-blue-500 [&_a]:underline [&_a]:hover:text-blue-700"
                                                    dangerouslySetInnerHTML={{ __html: section.p1 }}
                                                />
                                                {
                                                    permissionManager.permissionUpdateDocs || permissionManager.permissionUpdateProtectedDocs && !preview ? <div className="flex flex-row items-center mt-4">
                                                        <MdEdit onClick={() => handleEdit(index)} className="scale-105 cursor-pointer" />
                                                        <MdDelete onClick={() => handleDeleteSection(index)} className="scale-105 ml-2 cursor-pointer" />
                                                    </div> : null
                                                }
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div> : <DocumentationSkeleton />
                        }
                    </div>
                </div>
                <div className={`w-1/4 h-full p-6 ml-4 border-l border-gray-200 dark:border-gray-700`}>
                    <div className="mb-6">
                        <div className="flex w-full items-center mb-4 justify-between">
                            <h2 className="text-lg font-bold dark:text-gray-300">Documents</h2>
                            {

                                permissionManager.permissionUpdateDocs || permissionManager.permissionUpdateProtectedDocs ? < div onClick={() => { setPreview(!preview); handleSave() }} className="hover:bg-[#e1dede] flex items-center gap-1 bg-[#ece9e9] p-1 rounded-md px-2 cursor-pointer">
                                    {preview ? <MdEdit /> : <FaRegEye />}
                                    <p className="text-sm">{preview ? 'Edit Docs' : 'Preview'}</p>
                                </div> : null

                            }

                        </div>

                        <ul>
                            {dataSources.map((doc, index) => (
                                <li key={doc.id} className="mb-2 flex justify-between items-center">
                                    <a
                                        href="#"
                                        onClick={() => handleDataChange(index)}
                                        className={`text-blue-500 hover:underline ${currentDataIndex === index ? 'underline' : ''}`}
                                    >
                                        {doc.navigation}
                                    </a>
                                    {permissionManager.permissionUpdateDocs || permissionManager.permissionUpdateProtectedDocs && !preview ? <MdDelete onClick={() => handleDeleteDocument(index)} className="text-red-500 cursor-pointer" /> : null
                                    }

                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold mb-4 dark:text-gray-300">Navigation</h2>
                        <ul>
                            {data.sections.map((section, index) => (
                                <li key={index} className="mb-2">
                                    <a href={`#section-${index}`} className="text-blue-500 hover:underline">{section.h3}</a>
                                </li>
                            ))}
                        </ul>
                        {
                            permissionManager.permissionUpdateDocs || permissionManager.permissionUpdateProtectedDocs && !preview ?
                                <div onClick={handleAddSection} className="flex flex-row items-center">
                                    <FaPlus className="mr-2 text-[#ea4b33]" />
                                    <span className="text-[#ea4b33] cursor-pointer">Add Section</span>
                                </div>
                                : null
                        }
                    </div>
                    {
                        permissionManager.permissionCreateDocs && !preview ? <div className="mt-6">
                            <h2 className="text-lg font-bold mb-4 dark:text-gray-300">Add New Document</h2>
                            <input
                                type="text"
                                placeholder="Navigation (Required)"
                                value={newDocument.navigation}
                                onChange={(e) => setNewDocument({ ...newDocument, navigation: e.target.value })}
                                className="mb-2 p-2 border rounded w-full"
                            />
                            <input
                                type="text"
                                placeholder="Document Title (Required)"
                                value={newDocument.documentTitle}
                                onChange={(e) => setNewDocument({ ...newDocument, documentTitle: e.target.value })}
                                className="mb-2 p-2 border rounded w-full"
                            />
                            <input
                                type="text"
                                placeholder="Secondary Title (Optional)"
                                value={newDocument.secondaryTitle}
                                onChange={(e) => setNewDocument({ ...newDocument, secondaryTitle: e.target.value })}
                                className="mb-2 p-2 border rounded w-full"
                            />
                            {
                                permissionManager.permissionProtectDocs ? <div className="flex items-center mb-3 mt-2">
                                    <input
                                        type="checkbox"
                                        checked={newDocument.isProtected || false}
                                        onChange={(e) => setNewDocument({ ...newDocument, isProtected: e.target.checked })}
                                        className="form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-blue-500"
                                    />
                                    <label className="ml-2 text-gray-500 text-sm">Protect this Document</label>
                                </div> : null
                            }
                            <button
                                onClick={handleAddDocument}
                                className="text-[#efebeb] hover:bg-[#b45b5b] bg-[#9a5151] dark:text-gray-300 font-normal p-2 rounded w-full"
                            >
                                Add Document
                            </button>
                        </div> : null
                    }
                </div>

            </div>
        </div >
    );
};

export default DocumentationComponent;