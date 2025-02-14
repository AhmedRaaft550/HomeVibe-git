import { createSlice } from "@reduxjs/toolkit";

export let cartSlice = createSlice({
    initialState : [], 
    name : "cartSlice", 
    reducers : {
      

        addToCart : (state, action) => {
            state.push(action.payload)
        }, 
         deleteFromCart : (state,action) => {
            return state.filter((x) => x.id !== action.payload.id )
         }, 
         clear: (state, action) =>{
            return []
         }
}
    
})

export let {addToCart, deleteFromCart, clear} = cartSlice.actions ; 
export default cartSlice.reducer;