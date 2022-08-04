import { useState, createContext } from "react";

export const FilterContext = createContext(); // {}

const FilterProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("all");

  // console.log("FILTER_CONTEXT", FilterContext);

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      <button onClick={() => setIsOpen((prev) => !prev)} type="button">
        Click context
      </button>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
