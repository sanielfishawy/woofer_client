import { configureStore } from '@reduxjs/toolkit';
import wooferReducer, {fetchWooferState} from '../features/woofer/wooferSlice'

export const store = configureStore({
  reducer: {
    woofer: wooferReducer,
  },
});

setInterval(
  async () => {await store.dispatch(fetchWooferState())},
  1000,
)
  // (async () => {await store.dispatch(fetchWooferState())})()