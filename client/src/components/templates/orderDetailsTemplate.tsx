import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export const DisplayOrderDetailsTemplate: React.FC = () => {

    return (
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center space-x-4 mb-6 justify-center w-full flex-col">
                <div className="mb-3">
                    <FaCheckCircle className="w-8 h-8 text-[#64b459]" />
                </div>
                <div className="mb-4 text-center">
                    <h2 className="text-lg font-semibold">Ordered Succesfully </h2>
                    <p className="text-sm text-gray-500">Shipping Date: Dec 23, 2024</p>
                    <p className="text-sm text-gray-500">Shipped by: Outdoor Equipped (OE)</p>
                </div>
            </div>
            <div>
                <div className="mb-6">
                    <p className="text-sm text-gray-500 w-full flex justify-between"><span className="font-medium">Order ID: </span><div className="text-blue-600 hover:underline"><button>111-0955095-3573825</button></div></p>
                    <p className="text-sm text-gray-500 w-full flex justify-between"> <span className="font-medium">PO Number: </span>7855170</p>
                    <p className="text-sm text-gray-500 w-full flex justify-between"> <span className="font-medium">Ref. Number: </span>253730</p>
                    <p className="text-sm text-gray-500 w-full flex justify-between"> <span className="font-medium">Customer Name: </span>Scott Wagner</p>
                    <p className="text-sm text-gray-500 w-full flex justify-between"> <span className="font-medium">Address: </span>41 HIGH ST UNIT A, GREENWICH, CT</p>
                    <p className="text-sm text-gray-500 w-full flex justify-between"> <span className="font-medium">Products: </span><div className="text-blue-600 hover:underline"><button>View Products</button></div></p>
                    <p className="text-sm text-gray-500 w-full flex justify-between">
                        <span className="font-medium">Status:</span>{" "}
                        <span className="text-green-600 font-semibold">Processed</span>
                    </p>
                </div>

                <div className="mb-6">
                    <p className="text-sm text-gray-500 w-full flex justify-between"><span className="font-medium">Order ID: </span><div className="text-blue-600 hover:underline"><button>111-0955095-3573825</button></div></p>
                    <p className="text-sm text-gray-500 w-full flex justify-between"> <span className="font-medium">PO Number: </span>7855170</p>
                    <p className="text-sm text-gray-500 w-full flex justify-between"> <span className="font-medium">Ref. Number: </span>253730</p>
                    <p className="text-sm text-gray-500 w-full flex justify-between"> <span className="font-medium">Customer Name: </span>Scott Wagner</p>
                    <p className="text-sm text-gray-500 w-full flex justify-between"> <span className="font-medium">Address: </span>HOUSEKEEPING STATEROOM STEWARD, SEATTLE, WA</p>
                    <p className="text-sm text-gray-500 w-full flex justify-between"> <span className="font-medium">Products: </span><div className="text-blue-600 hover:underline"><button>View Products</button></div></p>
                    <p className="text-sm text-gray-500 w-full flex justify-between">
                        <span className="font-medium">Status:</span>{" "}
                        <span className="text-green-600 font-semibold">Processed</span>
                    </p>
                </div>

                <div className="mb-6">
                    <p className="text-sm text-gray-500 w-full flex justify-between"><span className="font-medium">Order ID: </span><div className="text-blue-600 hover:underline"><button>111-0955095-3573825</button></div></p>
                    <p className="text-sm text-gray-500 w-full flex justify-between"> <span className="font-medium">PO Number: </span>7855170</p>
                    <p className="text-sm text-gray-500 w-full flex justify-between"> <span className="font-medium">Ref. Number: </span>253730</p>
                    <p className="text-sm text-gray-500 w-full flex justify-between"> <span className="font-medium">Customer Name: </span>Scott Wagner</p>
                    <p className="text-sm text-gray-500 w-full flex justify-between"> <span className="font-medium">Address: </span>1127 W 34TH PL, CHICAGO, IL</p>
                    <p className="text-sm text-gray-500 w-full flex justify-between"> <span className="font-medium">Products: </span><div className="text-blue-600 hover:underline"><button>View Products</button></div></p>
                    <p className="text-sm text-gray-500 w-full flex justify-between">
                        <span className="font-medium">Status:</span>{" "}
                        <span className="text-green-600 font-semibold">Processed</span>
                    </p>
                </div>

                <hr className="border-t-2 border-dotted border-gray-400 mb-5" />

                <div className="mb-6">
                    <p className="text-sm text-gray-500 w-full flex justify-between mb-2"><span className="font-medium">Subtotal: </span>$ 5620.00</p>
                    <p className="text-sm text-gray-500 w-full flex justify-between mb-2"> <span className="font-medium">Sales Tax: </span>$ 0.00</p>
                    <p className="text-sm text-gray-500 w-full flex justify-between mb-2"> <span className="font-medium">VAT (21%): </span>$ 5.00</p>
                    <p className="text-sm text-gray-500 w-full flex justify-between mb-2"> <span className="font-medium">Total Amout: </span><div className="font-bold">$ 5625.00</div></p>
                </div>

                <div className="mt-12 flex justify-center items-center">
                    <p className="text-sm text-gray-500 w-full flex justify-center"><div className="text-blue-600 hover:underline"><button>Download as PDF</button></div></p>
                </div>

            </div>

        </div>
    );
}