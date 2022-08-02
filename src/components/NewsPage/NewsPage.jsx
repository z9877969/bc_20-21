import Button from "../Button/Button";
import NewsList from "../NewsList/NewsList";
import news from "../../data/news.json";

const News = () => {
  return (
    <>
      <NewsList news={news} />

      <Button />
    </>
  );
};

export default News;
