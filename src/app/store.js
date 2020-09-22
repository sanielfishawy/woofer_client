import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import wooferReducer from '../features/woofer/wooferSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    woofer: wooferReducer,
  },
});
