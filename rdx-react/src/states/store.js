import { configureStore } from '@reduxjs/toolkit';
import calreducers from '../reducers/index';


export default configureStore({reducer:{
    number:calreducers,
}})