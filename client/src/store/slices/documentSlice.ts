import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { DocumentInterface } from '../../interfaces/documentInterface';
import * as documentService from '../../services/documents.service';

export const currentDocuments = createAsyncThunk('documents/currentDocuments', async () => {
    return await documentService.getDocuments();
});

interface documentState {
    items: DocumentInterface[];
    loading: boolean;
    error: string | null;
}

const initialState: documentState = {
    items: [],
    loading: false,
    error: null,
};

const brandsSlice = createSlice({
    name: 'documents',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(currentDocuments.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(currentDocuments.fulfilled, (state, action: PayloadAction<DocumentInterface[]>) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(currentDocuments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch Documents';
            });
    },
});

export default brandsSlice.reducer;