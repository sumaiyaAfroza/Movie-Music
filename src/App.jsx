import Page from "./components/Page.jsx";
import {MovieContext} from "./context/index.js";
import {useReducer, useState} from "react";
import {CartReducer , initialValue} from "./Reducers/CartReducer.js";
import {ToastContainer} from "react-toastify";


function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [state, dispatch ] = useReducer(CartReducer, initialValue)

  return (
    <>
     <MovieContext.Provider value={{state, dispatch}}>
       <Page/>
       <ToastContainer
         position={"bottom-right"}
         autoClose={2000}
       />
     </MovieContext.Provider>
    </>
  )
}

export default App
