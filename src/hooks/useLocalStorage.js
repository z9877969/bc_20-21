import { useEffect, useState } from "react";

export const useLocalStorage = (initialValue, key) => {
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? initialValue
  ); // [1,2,3,4] || string || number

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return [data, setData];
};
