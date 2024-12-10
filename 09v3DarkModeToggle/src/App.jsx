import { useState } from "react";
import "./App.css";
import CardApp from "./components/cardApp";
import Themebtn from "./components/themebtn";
import ThemeContext  from "./context/MyContext";

function App() {

const theme =()=>{
}
const darkMode =()=>{
}
const lightMode =()=>{
}


  return (
    <>
      <h1 className="text-5xl font-bold">Hello</h1>

      <ThemeContext.Provider value={{ theme, darkMode, lightMode }}>
        <Themebtn />
        <CardApp />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
