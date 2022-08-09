import { useState } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import NewsGallery from "../components/NewsGallery/NewsGallery";

const NewsPage = () => {
  // const [searchInput, setSearchInput] = useState("");

  // const updateSearchInput = (searchInput) => {
  //   setSearchInput(searchInput);
  // };

  return (
    <div className="App">
      <SearchForm />
      <NewsGallery />
    </div>
  );
};

export default NewsPage;
