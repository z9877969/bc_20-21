import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../redux/lang/langSlice";

const LangSelect = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.value);

  const handleChange = (e) => dispatch(changeLang(e.target.value));

  return (
    <select name="" value={lang} onChange={handleChange}>
      <option value="ua">УКР</option>
      <option value="en">EN</option>
    </select>
  );
};

export default LangSelect;
