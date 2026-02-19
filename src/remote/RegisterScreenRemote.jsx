import { Provider } from "react-redux";
import store from "../store";
import RegisterScreen from "../screens/RegisterScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterScreenRemote = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <RegisterScreen />
    </Provider>
  );
};

export default RegisterScreenRemote;
