import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ClientInterface } from '../../interfaces/clientInterface';
import * as clientServices from '../../services/clients.service';

export const currentClients = createAsyncThunk('clients/currentClient', async () => {
    return await clientServices.getClients();
});

interface ClientState {
    items: ClientInterface[];
    loading: boolean;
    error: string | null;
}

const initialState: ClientState = {
    items: [],
    loading: false,
    error: null,
};

const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(currentClients.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(currentClients.fulfilled, (state, action: PayloadAction<ClientInterface[]>) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(currentClients.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch clients';
            });
    },
});

export default clientsSlice.reducer;