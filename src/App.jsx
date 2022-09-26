import { BrowserRouter } from "react-router-dom";
import ClientRoutes from "ClientRoutes";
import Headers from "./components/Headers";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Headers />
        <ClientRoutes />
      </BrowserRouter >
      <ToastContainer />
    </>
  );
};
