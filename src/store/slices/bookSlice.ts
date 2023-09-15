import { createSlice } from "@reduxjs/toolkit";
import { LoadingStatus } from "../../types/storeTypes/Indicators";
import { InitialStateType } from "../../types/storeTypes/InitialState";
import { fetchBooks } from "../asyncReducers";

const initialState: InitialStateType = {
  books: [],
  error: null,
  isLoading: LoadingStatus.idle,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  //ExtraReducers which works while request is sending
  extraReducers: (builder) => {
    //While loading
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = LoadingStatus.pending;
    });
    //After get succes request
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = LoadingStatus.succeeded;
      state.books = action.payload;
    });
    //After get error
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isLoading = LoadingStatus.failed;
      state.error = action.error as string;
    });
  },
});

export const {} = bookSlice.actions;
export const bookReducer = bookSlice.reducer;
