import './App.css'
import Hero from './../Components/Hero';
import Workout from '../Components/Workout';
import Generator from '../Components/Generator';

function App() {

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r
from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
     <Hero/>
     <Workout/>
     <Generator/>

    </main>
  )
}

export default App
