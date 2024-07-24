import { createContext, ReactNode, useState } from "react";
import { FilterTypes } from "../types/filter-types";

export interface FilterContextProps {
  search: string;
  page: number;
  type: string;
  handleSetSearch: (value: string) => void;
  handlesetPage: (value: number) => void;
  handlesetType: (value: string) => void;
}

export const FilterContext = createContext<FilterContextProps>({
  search: '',
  page: 1,
  type: FilterTypes.ALL,
  handleSetSearch: () => { },
  handlesetPage: () => { },
  handlesetType: () => { },
});

interface FilterContextProviderProps {
  children: ReactNode;
}

export function FilterContextProvider({ children }: FilterContextProviderProps) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [type, setType] = useState(FilterTypes.ALL);

  function handleSetSearch(value: string) {
    setSearch(value);
  }

  function handlesetPage(value: number) {
    setPage(value);
  }

  function handlesetType(value: string) {
    setType(value);
  }

  return (
    <FilterContext.Provider value={{ page, search, type, handlesetPage, handleSetSearch, handlesetType }}>
      {children}
    </FilterContext.Provider>
  )
}