import PropTypes from "prop-types";
import { useContext, useEffect, useRef } from "react";
import { ModalContext } from "../../context/ModalProvider";
import s from "./NewsList.module.scss";

const NewsList = ({ news, page }) => {
  const itemRef = useRef(null);
  const setModal = useContext(ModalContext);

  useEffect(() => {
    itemRef.current &&
      itemRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [news]);

  return (
    <ul className={s.news}>
      {news.map((item, idx) => (
        <li
          ref={(page - 1) * 10 + 1 === idx + 1 ? itemRef : null}
          key={idx}
          className={s.item}
          onClick={() => setModal(<h1>Modal news - {item.title}</h1>)}
        >
          <img className={s.img} src={item.urlToImage} alt="" />
          <div className={s.textWrapper}>
            <h3 className={s.title}>{item.title}</h3>
            <p className={s.author}>{item.author}</p>
            <p className={s.date}>{item.publishedAt}</p>
            <p className={s.descr}>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
};

export default NewsList;
