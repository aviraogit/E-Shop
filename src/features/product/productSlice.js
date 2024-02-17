import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name : "PRODUCT",
    initialState : {
        products : [],
        isLoading: false,
        isSuccess :false,
        isError : false,

      
    },
    reducers :{
       
    },

    extraReducers :(builder) =>{
        builder 
        .addCase(fetchProduct.pending , (state)=>{
            state.isLoading = true

        })
        .addCase(fetchProduct.fulfilled , (state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.products = action.payload
            

        })
        .addCase(fetchProduct.rejected , (state)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.products = []


        })
    }
  
})


export default productSlice.reducer;

const url = 'https://youtube-v31.p.rapidapi.com/search?q=music&part=snippet%2Cid&regionCode=US&maxResults=50&order=date';
const options = {
	
	headers: {
		'X-RapidAPI-Key': '0c3e164228msh9983a1f79d20a5ap19f1bfjsn403c5f760a45',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

export const fetchProduct = createAsyncThunk("FETCH_PROUDUCT" , async()=>{
    const res = await fetch("https://fakestoreapi.com/products")
    // https://dummyjson.com/products
    // const res = await fetch("https://dummyjson.com/products")
    const data = await res.json()
    console.log(data);
    return data
//     const response = await fetch(url, options);
//    const data = await response.json()
//     console.log(data.items);
    // try {
    //     const response = await fetch(url, options);
    //     const result = await response;
    //     console.log(result);
    // } catch (error) {
    //     console.error(error);
    // }
})



