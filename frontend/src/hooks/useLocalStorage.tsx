import { useState } from "react";

export function useLocalStorage<T>(itens: string) {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem('cart') || '[]'));
  const [api, setApi] = useState(JSON.parse(localStorage.getItem('api') || '[]'));

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(itens, JSON.stringify(newValue));
  }

  const updateApi = (newValue: T) => {
    setApi(newValue);
    localStorage.setItem('api', JSON.stringify(newValue));
  }

  return {
    value,
    updateLocalStorage,
    api,
    updateApi
  }

}