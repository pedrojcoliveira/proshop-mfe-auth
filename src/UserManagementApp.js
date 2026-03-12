import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./store";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import "react-toastify/dist/ReactToastify.css";

const UserManagementApp = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="login" element={<LoginScreen />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route path="profile" element={<ProfileScreen />} />
      </Routes>
    </Provider>
  );
};

export default UserManagementApp;
