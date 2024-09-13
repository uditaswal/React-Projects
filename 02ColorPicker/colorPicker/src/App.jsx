import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("#ffffff");
 const  [colorName, setColorName] =useState("blue");

function updateColor(e){
setColor(e.target.value);
}

  return (
    <>
      <div className="text-center flex flex-col items-center min-h-screen justify-center text-5xl font-mono font-bold">
        {/* <div className="flex flex-col items-center justify-center min-h-screen text-center"> */}
        <h1 className="my-10">Color Picker</h1>
        <div id="colordiv" className="h-52 w-60  rounded-xl border-4 border-black" style={{backgroundColor:color}}>
          <p className="text-3xl text-wrap text-pretty text">Selected Color: <br /> {color}</p>
        </div>
        <label htmlFor="color" className="text-3xl my-3">
          Select a color:
        </label>
        <input type="color" name="color" value={color} id="" onChange={updateColor}/>
      </div>
    </>
  );
}

export default App;
