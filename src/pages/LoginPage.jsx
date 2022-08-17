import { useDispatch } from "react-redux";
import AuthForm from "../components/AuthForm/AuthForm";
import { loginUser } from "../redux/auth/authOperations";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (userData) => dispatch(loginUser(userData));

  return (
    <>
      <h1>LoginPage</h1>
      <AuthForm
        btnTitle="Login"
        navTo="/register"
        linkTitle="To Register"
        cbOnSubmit={handleSubmit}
      />
    </>
  );
};

export default LoginPage;
