import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { BrandInterface } from '../../interfaces/brandInterface';
import * as brandServices from '../../services/brands.service';

export const companyBrands = createAsyncThunk('brands/currentBrand', async () => {
    return await brandServices.getCompanyBrands();
});

interface BrandsState {
    items: BrandInterface[];
    loading: boolean;
    error: string | null;
}

const initialState: BrandsState = {
    items: [],
    loading: false,
    error: null,
};

const brandsSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(companyBrands.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(companyBrands.fulfilled, (state, action: PayloadAction<BrandInterface[]>) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(companyBrands.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch brands';
            });
    },
});

export default brandsSlice.reducer;