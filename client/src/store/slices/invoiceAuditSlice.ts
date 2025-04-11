import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { InvoiceAuditInterface } from '../../interfaces/invoiceAuditInterface';
import * as invoiceAuditServices from '../../services/invoiceAudit.service';

export const currentInvoiceAudit = createAsyncThunk('documents/currentInvoiceAudit', async () => {
    return await invoiceAuditServices.getInvoiceAuditSegments();
});

interface invoiceAuditState {
    items: InvoiceAuditInterface[];
    loading: boolean;
    error: string | null;
}

const initialState: invoiceAuditState = {
    items: [],
    loading: false,
    error: null,
};

const invoiceAuditSlice = createSlice({
    name: 'invoiceAudit',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(currentInvoiceAudit.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(currentInvoiceAudit.fulfilled, (state, action: PayloadAction<InvoiceAuditInterface[]>) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(currentInvoiceAudit.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch Invoice Audit Data';
            });
    },
});

export default invoiceAuditSlice.reducer;