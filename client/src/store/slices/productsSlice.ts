import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductInterface } from '../../interfaces/productInterface';
import * as productServices from '../../services/products.service';

export const currentProducts = createAsyncThunk('products/currentProducts', async () => {
    return await productServices.getBrandProducts();
});

export const currentAllCartProducts = createAsyncThunk('products/currentAllCartProducts', async () => {
    return await productServices.getAllCartProducts();
});

interface ProductState {
    products: ProductInterface[];
    cartProducts: ProductInterface[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    products: [],
    cartProducts: [],
    loading: false,
    error: null,
};


const brandsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(currentProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(currentProducts.fulfilled, (state, action: PayloadAction<ProductInterface[]>) => {
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(currentProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch brands';
            })

            .addCase(currentAllCartProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(currentAllCartProducts.fulfilled, (state, action: PayloadAction<ProductInterface[]>) => {
                state.cartProducts = action.payload;
                state.loading = false;
            })
            .addCase(currentAllCartProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch all cart products';
            });
    },
});

export default brandsSlice.reducer;
