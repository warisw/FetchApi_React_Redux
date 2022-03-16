import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getCards = createAsyncThunk(
  "cards/getCards",
  async ({ limit }) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
    );
  
    const data = await response.json();
    return data.results;
  }
);


export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    listOfCards: [],
    finalData:[],
    status: "failed",
  },
  
 

  extraReducers: {
    [getCards.pending]: (state, action) => {
      state.status = "loading";
    },
    [getCards.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.listOfCards=[];
      state.listOfCards = payload;
      console.log(state.listOfCards)
      
    },
    [getCards.rejected]: (state, action) => {
      state.status = "failed";
    },

  },
});
export default cardsSlice.reducer;
