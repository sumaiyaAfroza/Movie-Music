import Page from "./components/Page.jsx";
import {MovieContext, ThemeContext} from "./context/index.js";
import {useReducer, useState} from "react";
import {CartReducer , initialValue} from "./Reducers/CartReducer.js";
import {ToastContainer} from "react-toastify";


function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saveMode = localStorage.getItem('dark')
    return saveMode === null ? true : saveMode === true
  })
  const [state, dispatch ] = useReducer(CartReducer, initialValue)

  return (
    <>
      <ThemeContext value={{darkMode, setDarkMode}}>
        <MovieContext.Provider value={{state, dispatch}}>
          <Page/>
          <ToastContainer
            position={"bottom-right"}
            autoClose={2000}
            closeOnClick
            theme={darkMode ? 'dark' : 'light'}
          />
        </MovieContext.Provider>
      </ThemeContext>

    </>
  )
}

export default App
