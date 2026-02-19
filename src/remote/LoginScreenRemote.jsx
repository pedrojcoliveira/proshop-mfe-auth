import { Provider } from "react-redux";
import store from "../store";
import LoginScreen from "../screens/LoginScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginScreenRemote = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <LoginScreen />
    </Provider>
  );
};

export default LoginScreenRemote;
