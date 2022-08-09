// import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import s from "./SearchForm.module.scss";

const SearchForm = ({ updateSearchInput }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { form, handleChange, handleSubmit } = useForm({
    initialValues: { input: "" },
    // onSubmit: (values) => updateSearchInput(values.input),
    onSubmit: (values) =>
      navigate(`/news?news-search=${values.input}&page=1`, {
        state: location.state,
      }),
  });

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <button type="button" onClick={() => navigate(location.state ?? "/")}>
        GoBack
      </button>
      <input
        className={s.input}
        type="text"
        name="input"
        value={form.input}
        placeholder="Search..."
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

// SearchForm.propTypes = {
//   updateSearchInput: PropTypes.func,
// };

export default SearchForm;
