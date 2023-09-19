import { useEffect } from "react";
import {
  categoryData,
  sortingData,
} from "../../../helpers/constants/SelectData";
import SearchField from "../../molecules/search-field";
import Select from "../../molecules/select";
import style from "./SearchBlock.module.scss";
import axios from "axios";
import { getBooks } from "../../../api";
import { useLocation, useParams } from "react-router-dom";
import { queryTypes } from "../../../types/QueryTypes";
import { useQueryParams } from "../../../helpers/hooks/useQueryParams";
import { fetchBooks } from "../../../store/asyncReducers";
import { useAppDispatch } from "../../../helpers/hooks/reduxHooks";
import { fetchBooksPops } from "../../../types/storeTypes/FetchBookstypes";

const SearchBlock = () => {
  const dispatch = useAppDispatch();
  const { search, category, sort } = useQueryParams();

  const handleSearch = () => {
    dispatch(
      fetchBooks({
        search: search || "",
        category: category || "",
        sort: sort || "",
      })
    );
  };

  return (
    <div className={style.wrapper}>
      <div className={style.wrapper__content}>
        <p className={style.content__title}>Search for books</p>
        <SearchField placeholder="Search books" handleSearch={handleSearch} />
        <div className={style.select__container}>
          <Select
            options={categoryData}
            queryData="category"
            label="Categories"
            handleSearch={handleSearch}
          />
          <Select
            options={sortingData}
            queryData="sort"
            label="Sorting by"
            handleSearch={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBlock;
