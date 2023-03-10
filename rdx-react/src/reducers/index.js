import {createSlice} from '@reduxjs/toolkit'

const calreducer = createSlice({
    name : 'calreducer',
    initialState:10,
    reducers : {
        inc : (state,action) =>{
           return state += action.payload;
        },
        dec : (state,action) =>{
            return state -= action.payload;  
        },
        mul : (state,action) =>{
            return state *= action.payload;  
        },
        div : (state,action) =>{
            return state /= action.payload;  
        }
    }
})

export const {inc,dec,mul,div} = calreducer.actions;

export default calreducer.reducer;