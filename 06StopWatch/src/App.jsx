import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(0);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning){
    intervalIdRef.current = setInterval(()=>{
      setElapsedTime(Date.now() - startTimeRef.current),10  
    });
  }
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }

 

  function formatTime() {
    let hh = Math.floor(elapsedTime / (1000 * 60 * 60));
    let mm = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let ss = Math.floor((elapsedTime / 1000) % 60);
    let ms = Math.floor((elapsedTime % 1000) / 10);
    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}:${formattedMS}`;
  }
  // console.log(formatTime(time));

  return (
    <>
      <div className="border-2 border-black rounded-xl block bg-white p-6  text-center">
        <h1 className=" text-5xl  text-gray-700">{formatTime()}</h1>
        <div className="my-2 flex flex-row justify-between ">
          <button
            onClick={start}
            className="bg-green-500 text-white text-2xl p-1 mx-2 rounded-md border-2 border-black active:bg-green-700 hover:bg-green-300"
          >
            Start
          </button>
          <button
            onClick={stop}
            className="bg-red-500 text-white text-2xl mx-2 p-1 rounded-md border-2 border-black active:bg-red-700 hover:bg-red-300"
          >
            Stop
          </button>
          <button
            onClick={reset}
            className="bg-blue-500 text-white text-2xl p-1 rounded-md border-2 mx-2 border-black active:bg-blue-700 hover:bg-blue-300"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
