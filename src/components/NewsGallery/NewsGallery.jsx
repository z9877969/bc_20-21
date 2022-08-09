import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import NewsList from "../NewsList/NewsList";
import { getSearchNews } from "../../utils/newsApi";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const NewsGallery = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("location :>> ", location);

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page");

  const [news, setNews] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const updatePage = () => {
    // setPage((page) => page + 1);
    const searchInput = searchParams.get("news-search");
    const page = searchParams.get("page");
    // navigate(`/news?news-search=${searchInput}&page=${Number(page) + 1}`);
    navigate(
      {
        search: `?news-search=${searchInput}&page=${Number(page) + 1}`,
      },
      { state: location.state ?? "/" }
    );
    // {...curLocation, ...params}
  };

  useEffect(() => {
    const searchInput = searchParams.get("news-search");
    const page = searchParams.get("page");
    if (!searchInput) return;
    const setSearchNews = () => {
      setIsLoading(true);
      getSearchNews(page, searchInput)
        .then(({ articles, totalResults }) => {
          setNews((news) => (page === 1 ? articles : [...news, ...articles]));
          setTotalResults(totalResults);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    };
    setSearchNews();
  }, [searchParams]);

  return (
    <>
      <NewsList news={news} page={Number(page)} />

      {isLoading && <h1>Loading...</h1>}
      {news.length > 0 && news.length < totalResults && (
        <Button cbOnClick={updatePage} />
      )}
    </>
  );
};

NewsGallery.propTypes = {
  searchInput: PropTypes.string.isRequired,
};

export default NewsGallery;
