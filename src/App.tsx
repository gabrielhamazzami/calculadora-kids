import GlobalStyle from "./global";
import { RoutesMain } from "./routes";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <RoutesMain />
      <ToastContainer/>
    </>
  );
};

export default App;
