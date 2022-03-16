import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDetails = createAsyncThunk(
  "details/getDetails",
  async (pok) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pok}`);
    const data = await res.json();
    return data;
  }
);

export const detailsSlice = createSlice({
  name: "details",
  initialState: {
    cardsDetails: [],
    status: "failed",
  },
  reducers: {
    deleteDetails: (state) => {
      state.cardsDetails = [];
    },
  },
  extraReducers: {
    [getDetails.pending]: (state, action) => {
      state.status = "loading";
    },
    [getDetails.fulfilled]: (state, { payload }) => {
      state.status = "success";

      state.cardsDetails = [...state.cardsDetails, payload];
    },
    [getDetails.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export const { deleteDetails } = detailsSlice.actions;
export default detailsSlice.reducer;
