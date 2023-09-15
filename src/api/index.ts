import axios from "axios";
import { queryTypes } from "../types/QueryTypes";

const API_URL = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
});

export const getBooks = ({
  search,
  category,
  maxResults,
  startIndex,
  orderBy,
}: queryTypes) =>
  API_URL.get(
    `?q=${search}+subject:${category}&maxResults=${maxResults}&startIndex=${startIndex}&orderBy=${orderBy}&key=${"AIzaSyDnMk_9vUnk8s9_W9Kgppjbf2BpiCnu-yM"}`
  );
