import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import NewsGallery from "../NewsGallery/NewsGallery";

const NewsPage = () => {
  const [searchInput, setSearchInput] = useState("");

  const updateSearchInput = (searchInput) => {
    setSearchInput(searchInput);
  };


  return (
    <div className="App">
      <SearchForm updateSearchInput={updateSearchInput} />
      <NewsGallery searchInput={searchInput} />
    </div>
  );
};

export default NewsPage;
