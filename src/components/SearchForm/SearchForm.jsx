import PropTypes from "prop-types";
import { useForm } from "../../hooks/useForm";
import s from "./SearchForm.module.scss";

const SearchForm = ({ updateSearchInput }) => {
  const { form, handleChange, handleSubmit } = useForm({
    initialValues: { input: "" },
    onSubmit: (values) => updateSearchInput(values.input),
  });

  return (
    <form className={s.form} onSubmit={handleSubmit}>
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

SearchForm.propTypes = {
  updateSearchInput: PropTypes.func.isRequired,
};

export default SearchForm;
