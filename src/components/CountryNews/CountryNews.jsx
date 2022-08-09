import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTopCountryNews } from "../../utils/newsApi";
import NewsList from "../NewsList/NewsList";

const CountryNews = () => {
  const { country } = useParams();
  const navigate = useNavigate();

  const [news, setNews] = useState([]);

  useEffect(() => {
    getTopCountryNews(country)
      .then((news) => setNews(news))
      .catch((err) => navigate("/error"));
  }, [country]);

  return (
    <>
      <h2>CountryNews - {country}</h2>
      <NewsList news={news} />
    </>
  );
};

export default CountryNews;
