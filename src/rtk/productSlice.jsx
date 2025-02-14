    import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


    export let fetchProduct =  createAsyncThunk("productSlice/fetchProduct", async() => {
    let res = await fetch("/db.json")
    let data = await res.json()
    console.log(data)
    return data
    })

    let productSlice = createSlice ( {
        initialState : [], 
        name : "productSlice", 
        reducers: {
        },
        extraReducers: (builder) => {
            builder.addCase(fetchProduct.fulfilled, (state, action )=> {
                return action.payload.products
            })
        } 
        
    })

    export let { newProduct, setSelectedProduct, clearSelectedProduct } = productSlice.actions;
    export default productSlice.reducer 