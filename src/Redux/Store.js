// store.js

import { configureStore } from '@reduxjs/toolkit';
import Reducer from './Reducer';

const Store = configureStore({
  reducer: {
    weather : Reducer
  }
});

export default Store;
