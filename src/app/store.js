import { configureStore } from '@reduxjs/toolkit';
import wooferReducer, {fetchWooferState} from '../features/woofer/wooferSlice'

export const store = configureStore({
  reducer: {
    woofer: wooferReducer,
  },
});

(async () => {await store.dispatch(fetchWooferState())})()