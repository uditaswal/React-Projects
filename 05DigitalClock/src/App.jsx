import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [time, setTime] = useState(new Date())

useEffect(()=>{
  const intervalid = setInterval(()=>setTime(new Date()),1000);

  return()=>clearInterval(intervalid);
},[]);
// Empty dependency array means this effect runs only once, after the initial render

const hours= time.getHours()
const minutes= time.getMinutes();

const seconds= time.getSeconds();
const meridem =  hours>=12 ? "PM" : "AM";
const currentTime=`${padTime(hours)}:${ padTime(minutes) }:${padTime(seconds)}:${padTime(meridem)}`;

function padTime  (number) {

  return (number<10?"0":"")+number;
}

        return (
    <>
    <h1 className='text-8xl text-black-950 font-mono font-extrabold'  >{currentTime}</h1>
    </>
  )
}

export default App
