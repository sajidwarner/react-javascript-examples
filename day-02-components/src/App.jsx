import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)


  return (
   <div >
    <NavBar />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    </div>
  )
}

export default App
