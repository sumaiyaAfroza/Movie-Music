import Page from "./components/Page.jsx";
import {MovieContext} from "./context/index.js";
import {useReducer, useState} from "react";
import {CartReducer , initialValue} from "./Reducers/CartReducer.js";
import {ToastContainer} from "react-toastify/unstyled";


function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [state, dispatch ] = useReducer(CartReducer, initialValue)

  return (
    <>
     <MovieContext.Provider value={{state, dispatch}}>
       <Page/>
       <ToastContainer/>
     </MovieContext.Provider>


    </>
  )
}

export default App
