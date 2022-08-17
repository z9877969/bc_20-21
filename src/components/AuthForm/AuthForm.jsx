import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import s from "./AuthForm.module.scss";

const AuthForm = ({ cbOnSubmit, btnTitle, navTo, linkTitle }) => {
  const { form, handleChange, handleSubmit } = useForm({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => cbOnSubmit(values),
  });

  const { email, password } = form;

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span> Email </span>
        <input
          className={s.input}
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span> Password </span>
        <input
          className={s.input}
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <div style={{display: "flex"}}>
      <button className={s.submit} type="submit">
        {btnTitle}
      </button>

      <Link className={s.submit} to={navTo}>
        {linkTitle}
      </Link>
      </div>
    </form>
  );
};

export default AuthForm;
