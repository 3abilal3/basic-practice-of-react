import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(15)
  const addCounter=()=>setCount(counter => counter + 1)
  const removeCounter=()=>setCount(counter => counter - 1)
  return (
    <>
      
      <h1>click on counter +</h1>
      <div className="card">
        <button onClick= {addCounter}>
          count is {count}
        </button>
        
      </div>
      <h1>click on counter -</h1>
      <div className="card">
        <button onClick={removeCounter} >
          count is {count}
        </button>
        
      </div>
    </>
  )
}

export default App
