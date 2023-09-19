import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBooks } from "../api";
import { useQueryParams } from "../helpers/hooks/useQueryParams";
import { queryTypes } from "../types/QueryTypes";
import { fetchBooksPops } from "../types/storeTypes/FetchBookstypes";

//AsyncThunk for extraReducer
export const fetchBooks = createAsyncThunk(
  "books/fetch",
  async (props: fetchBooksPops) => {
    const { search, category, sort } = props;
    const queryData: queryTypes = {
      search: search ? search : "",
      category: category ? category : "all",
      maxResults: 10,
      startIndex: 0,
      orderBy: sort ? sort : "relevance",
    };
    const res = await getBooks(queryData);
    console.log(res);
    console.log(queryData);
    return res.data.items;
  }
);
