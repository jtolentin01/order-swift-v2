import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { OrderManagerInterface } from '../../interfaces/orderManagerInterface';
import * as orderManagerService from '../../services/orderManager.service';

export const currentOrderManagers = createAsyncThunk('orderManager/currentOrderManagers', async () => {
    return await orderManagerService.getOrderManagers();
});

interface OrderManagerState {
    items: OrderManagerInterface[];
    loading: boolean;
    error: string | null;
}

const initialState: OrderManagerState = {
    items: [],
    loading: false,
    error: null,
};

const orderManagerSlice = createSlice({
    name: 'orderManager',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(currentOrderManagers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(currentOrderManagers.fulfilled, (state, action: PayloadAction<OrderManagerInterface[]>) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(currentOrderManagers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch Order Managers';
            });
    },
});

export default orderManagerSlice.reducer;