export interface queryTypes {
  search: string;
  category: string;
  maxResults: number;
  startIndex: number;
  orderBy: string;
}

export interface setQueryParamsProps {
  queryData: string;
  option: string;
}
