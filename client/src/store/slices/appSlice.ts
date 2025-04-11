import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AppInterface } from '../../interfaces/appInterface';
import * as appServices from '../../services/app.service';

export const applicationInfo = createAsyncThunk('app/applicationInfo', async () => {
    return await appServices.getAppInformation();
});

interface AppState {
    items: AppInterface[];
    loading: boolean;
    error: string | null;
}

const initialState: AppState = {
    items: [],
    loading: false,
    error: null,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(applicationInfo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(applicationInfo.fulfilled, (state, action: PayloadAction<AppInterface[]>) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(applicationInfo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch Application Information';
            });
    },
});

export default appSlice.reducer;