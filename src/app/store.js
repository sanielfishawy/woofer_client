import { configureStore } from '@reduxjs/toolkit';
import wooferReducer from '../features/woofer/wooferSlice'

export default configureStore({
  reducer: {
    woofer: wooferReducer,
  },
});
