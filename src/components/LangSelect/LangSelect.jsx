import { useDispatch, useSelector } from "react-redux";
import { getLang } from "../../redux/lang/langSelector";
import { changeLang } from "../../redux/lang/langSlice";

const LangSelect = () => {
  const dispatch = useDispatch();
  const lang = useSelector(getLang);

  const handleChange = (e) => dispatch(changeLang(e.target.value));

  return (
    <select name="" value={lang} onChange={handleChange}>
      <option value="ua">УКР</option>
      <option value="en">EN</option>
    </select>
  );
};

export default LangSelect;
