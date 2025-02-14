import { createSlice } from "@reduxjs/toolkit";



export let addProduct = createSlice({
    initialState : [], 
    name: "addProduct", 
    reducers : {
        newProduct : (state,action) => {
         return action.payload
        }
    }
})

export let {newProduct} = addProduct.actions;
export default addProduct.reducer;