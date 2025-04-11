import React, { useEffect, useState } from "react";
import { currentAllCartProducts } from "../../../store/slices/productsSlice";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { CartProductSkeleton } from "../../../components/skeletons/cartProductSkeleton";
import { ComponentProps } from "../../../interfaces/globalComponentInterface";
import { PageNotAvailable } from "../../../components/pageNotAvailable";

const CartPageComponent: React.FC<ComponentProps> = ({ isDisabled }) => {
    const dispatch = useAppDispatch();
    const { items: brands } = useAppSelector((state) => state.brands);
    const { cartProducts, loading } = useAppSelector((state) => state.products);
    const [disabled, setDisabled] = useState<boolean>(isDisabled);

    useEffect(() => {
        setDisabled(isDisabled);
    }, [isDisabled]);

    useEffect(() => {
        dispatch(currentAllCartProducts());
    }, [dispatch, cartProducts.length]);

    return (
        <div className={`${disabled ? 'relative' : ''} dark:bg-[#2e2d2d] w-full h-full bg-white p-4 flex flex-col lg:flex-row gap-4 justify-between`}>
            <div className={`w-full h-full flex flex-col lg:flex-row justify-between gap-4 ${disabled ? 'blur-sm' : ''}`}>
                <div className="lg:w-[74.5%] w-full">
                    <div className="h-14 border-b dark:border-[#998383] flex items-center justify-between">
                        <div className="flex gap-2">
                            <select
                                className="bg-[#d8d5d5] text-gray-700 px-2 py-1 rounded-lg text-sm font-medium cursor-pointer"
                            >
                                <option value="1">All Brands</option>
                                {
                                    brands.map((brand) => (
                                        <option key={brand.brandId} value={brand.brandId}>{brand.brandName}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    {
                        cartProducts.map((product) => (
                            <div key={product.id} className="border border-gray-300 rounded-lg p-4 shadow-sm w-full dark:bg-[#504e4e] dark:text-[#fff] bg-white mt-2">
                                <div className="flex flex-col md:flex-row justify-between items-start">
                                    <div className="flex gap-4">
                                        <img
                                            src={product.imageUrl}
                                            alt="Product"
                                            className="w-12 h-12 rounded-md object-cover"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-base">{product.name}</h3>
                                            <p className="text-xs text-gray-500 dark:text-[#fff]">
                                                {product.id}
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-[#fff]">
                                                {product.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right mt-4 md:mt-0">
                                        <p className="text-xs text-gray-500 dark:text-[#c9c8c8]">Total ($)</p>
                                        <p className="font-semibold text-base">{(product.price * product.units).toFixed(2)}</p>
                                        <p className="text-xs text-gray-500 dark:text-[#c9c8c8]">
                                            Item price {(product.price).toFixed(2)}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mt-4 border-t border-gray-200 pt-4">
                                    <div className="flex items-center gap-2">
                                        <input
                                            className="appearance-none block w-full md:w-16 h-8 text-[#a77d7d] dark:text-[#dfdcdc] bg-gray-100 dark:bg-[#726e6e] border rounded py-1 px-2 leading-tight focus:outline-none dark:border-gray-300 focus:border-red-200"
                                            value={product.units}
                                            type="number"
                                            readOnly
                                        />
                                        <p className="text-xs text-gray-500 dark:text-[#fff]">
                                            / {product.totalUnits} Units Available
                                        </p>
                                    </div>

                                    <button className="bg-gray-200 text-gray-500 px-3 py-1 rounded-lg text-xs font-medium hover:bg-[#eb7866] hover:text-[#fff]">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                    {
                        loading ? <CartProductSkeleton /> : null
                    }
                </div>

                <div className="bg-[#f5f2f2] dark:bg-[#474646] rounded-[6px] p-4 dark:text-[#c9c8c8] lg:w-[25%] w-full">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg font-bold">Order Summary</h2>
                        <ul className="space-y-2">
                            {
                                cartProducts.map((product) => (
                                    <li key={product.id} className="flex justify-between">
                                        <span className="text-xs">{product.name}</span>
                                        <span className="text-xs">{(product.price * product.units).toFixed(2)}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        <hr className="my-4 border-gray-300" />
                        <div className="flex justify-between">
                            <span className="text-xs font-medium">SALES TAX</span>
                            <span className="text-xs font-medium">Included</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-xs font-medium">VAT</span>
                            <span className="text-xs font-medium">Included</span>
                        </div>
                        <hr className="my-4 border-gray-300" />
                        <div className="flex justify-between">
                            <span className="text-base font-bold">TOTAL</span>
                            <span className="text-base font-bold">${(cartProducts.reduce((sum, product) => sum + product.price * product.units, 0)).toFixed(2)}</span>
                        </div>
                        <button className="bg-[#eb7866] text-white text-xs font-semibold py-2 rounded mt-4 hover:bg-[#d46958]">
                            PROCEED TO CHECKOUT
                        </button>
                    </div>
                </div>
            </div>
            {disabled && (<PageNotAvailable />)}
        </div>
    );
};

export default CartPageComponent;