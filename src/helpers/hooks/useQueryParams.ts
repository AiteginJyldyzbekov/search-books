import { useLocation, useNavigate } from "react-router-dom";
import { setQueryParamsProps } from "../../types/QueryTypes";

export const useQueryParams = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  return {
    search: queryParams.get("search"),
    category: queryParams.get("category"),
    sort: queryParams.get("sort"),
  };
};