import { configureStore } from '@reduxjs/toolkit';
import brandsReducer from './slices/brandsSlice';
import clientsReducer from './slices/clientsSlice';
import userReducer from './slices/userSlice';
import productReducer from './slices/productsSlice';
import documentReducer from './slices/documentSlice';
import orderManagerSlice from './slices/orderManagerSlice';
import appSlice from './slices/appSlice';
import notificationSlice from './slices/notificationSlice';
import invoiceAuditSlice from './slices/invoiceAuditSlice';

export const store = configureStore({
    reducer: {
        brands: brandsReducer,
        clients: clientsReducer,
        user: userReducer,
        products: productReducer,
        documents: documentReducer,
        orderManager: orderManagerSlice,
        application: appSlice,
        notification: notificationSlice,
        invoiceAudit: invoiceAuditSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
