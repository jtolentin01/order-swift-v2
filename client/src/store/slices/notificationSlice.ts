import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { NotificationInterface } from '../../interfaces/appInterface';
import * as appServices from '../../services/app.service';

export const appNotification = createAsyncThunk('notification/appNotification', async () => {
    return await appServices.getAppNotification();
});

interface NotificationState {
    items: NotificationInterface[];
    loading: boolean;
    error: string | null;
}

const initialState: NotificationState = {
    items: [],
    loading: false,
    error: null,
};

const appSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(appNotification.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(appNotification.fulfilled, (state, action: PayloadAction<NotificationInterface[]>) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(appNotification.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch Application Notification';
            });
    },
});

export default appSlice.reducer;