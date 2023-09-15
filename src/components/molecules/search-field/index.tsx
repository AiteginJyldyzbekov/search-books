import SearchBtn from "../../atoms/search-btn";
import style from "./SearchField.module.scss";
import { SearchFieldProps } from "../../../types/SearchFieldTypes";
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchField: React.FC<SearchFieldProps> = ({
  placeholder,
  handleSearch,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useMemo(() => {
    // Получаю текущие query параметры
    const currentSearchParams = new URLSearchParams(location.search);

    // Устанавливаю новый query параметр
    currentSearchParams.set("search", searchValue);

    // Создаю новый URL с обновленными query параметрами
    const newSearch = currentSearchParams.toString();
    const newPath = `${location.pathname}?${newSearch}`;

    // Использую navigate чтобы передать новые query параметры
    navigate(newPath, { replace: true });
  }, [searchValue]);

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form className={style.search__wrapper} onSubmit={submit}>
      <input
        type="text"
        placeholder={placeholder}
        className={style.search__input}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit" className={style.search__button}>
        <SearchBtn />
      </button>
    </form>
  );
};

export default SearchField;
