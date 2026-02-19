import { Provider } from "react-redux";
import store from "../store";
import ProfileScreen from "../screens/ProfileScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileScreenRemote = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <ProfileScreen />
    </Provider>
  );
};

export default ProfileScreenRemote;
