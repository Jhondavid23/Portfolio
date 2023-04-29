import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Proyects from './components/Proyects/Proyects'
import CardContainer from './components/Tecnologies/CardContainer'
import Contact from './components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Navbar/>
        <Home/>
        <About/>
        <CardContainer autoPlay ={true}/>
        <Proyects/>
        <Contact/>
      </div>
    </>
  )
}

export default App
