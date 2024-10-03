import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-yellow-500 text-10xl font-bold underline'>
      Hello AB!
    </h1>
    <Cards username='ahmed bilal'/>
    </>
  )
}

export default App
