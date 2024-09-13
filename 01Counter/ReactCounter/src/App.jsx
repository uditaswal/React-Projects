import { useState } from 'react'
import Button from './Button.jsx'


function App() {

let [count,setCounter] = useState(0);
// count=8;
const Decrement = () =>{
  setCounter(count--);
}
const Reset = () =>{
  setCounter(0);

}
const Increase = () =>{
  setCounter(count++)

}


  return (

    // <Button />
<>
<div className="flex flex-col justify-center items-center min-h-screen bg-slate-600">
  <div className="text-center mb-8">
    <h1 className="inline-block align-middle text-9xl">{count}</h1>
  </div>

  <div className="flex justify-center items-center space-x-3">
    <button onClick={Decrement} className="bg-blue-400 font-serif w-32 text-white p-2 rounded-md hover:bg-blue-300 active:bg-blue-700">Decrement</button>
    <button onClick={Reset} className="bg-blue-400 w-32 font-serif text-white p-2 rounded-md hover:bg-blue-300 active:bg-blue-700">Reset</button>
    <button onClick={Increase} className="bg-blue-400 w-32 font-serif text-white p-2 rounded-md hover:bg-blue-300 active:bg-blue-700">Increase</button>
  </div>
</div>

</>



  )
}

export default App
