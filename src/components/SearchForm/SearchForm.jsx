import s from "./SearchForm.module.scss";

const SearchForm = () => {
  return (
    <form className={s.form}>
      <input className={s.input} type="text" placeholder="Search..." />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;
