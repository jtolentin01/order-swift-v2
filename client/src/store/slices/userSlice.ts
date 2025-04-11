import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { UserInterface } from '../../interfaces/userInterface';
import * as userServices from '../../services/users.service';

export const currentUser = createAsyncThunk('user/currentUser', async () => {
    return await userServices.getCurrentUSer();
});

interface UserState {
    items: UserInterface[];
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    items: [],
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(currentUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(currentUser.fulfilled, (state, action: PayloadAction<UserInterface[]>) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(currentUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch user';
            });
    },
});

export default userSlice.reducer;