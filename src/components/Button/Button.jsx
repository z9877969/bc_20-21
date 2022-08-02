import s from "./Button.module.scss";

const Button = ({ cbOnClick }) => {
  return (
    <button className={s.btn} type="button" onClick={cbOnClick}>
      More
    </button>
  );
};

export default Button;
