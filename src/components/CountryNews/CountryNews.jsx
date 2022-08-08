import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTopCountryNews } from "../../utils/newsApi";
import NewsList from "../NewsList/NewsList";

const CountryNews = () => {
  const { country } = useParams();

  const [news, setNews] = useState([]);

  useEffect(() => {
    getTopCountryNews(country)
      .then((news) => setNews(news))
      .catch((err) => console.log(err));
  }, [country]);

  return (
    <>
      <h2>CountryNews - {country}</h2>
      <NewsList news={news} />
    </>
  );
};

export default CountryNews;
