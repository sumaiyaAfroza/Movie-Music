import { useState, useReducer, useEffect } from "react";
import Page from "./components/Page.jsx";
import { MovieContext, ThemeContext } from "./context";
import { cartStorage } from "./utils/cartStorage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {CartReducer, initialValue} from "./Reducers/CartReducer.js";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === null ? true : savedMode === "true";
  });
  const [isCartLoading, setIsCartLoading] = useState(false)
  const [state, dispatch] = useReducer(CartReducer, initialValue);

  useEffect(() => {
    const loadCartData = () => {
      const savedCart = cartStorage.loadCart()

    }
  }, []);



  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ state, dispatch }}>
        <Page />
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme={darkMode ? "dark" : "light"}
        />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;


