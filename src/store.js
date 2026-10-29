import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './components/CartSlice.jsx';
export default configureStore({reducer:{cart:cartReducer}});