import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => (
  <>
    <Portfolio />
    <ToastContainer />
  </>
);
export default App;
