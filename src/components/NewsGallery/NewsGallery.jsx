import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import NewsList from "../NewsList/NewsList";
import { getSearchNews } from "../../utils/newsApi";

const NewsGallery = ({ searchInput }) => {
  const [news, setNews] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const updatePage = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    if (!searchInput) return;
    const setSearchNews = () => {
      setIsLoading(true);
      getSearchNews(page, searchInput)
        .then(({ articles, totalResults }) => {
          setNews((news) => (page === 1 ? articles : [...news, ...articles]));
          page === 1 && setTotalResults(totalResults);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    };
    setSearchNews();
  }, [page, searchInput]);

  return (
    <>
      <NewsList news={news} page={page} />

      {isLoading && <h1>Loading...</h1>}
      {news.length > 0 && news.length < totalResults && (
        <Button cbOnClick={updatePage} />
      )}
    </>
  );
};

NewsGallery.propTypes = {
  setModalInfo: PropTypes.func.isRequired,
  searchInput: PropTypes.func.isRequired,
};

export default NewsGallery;
