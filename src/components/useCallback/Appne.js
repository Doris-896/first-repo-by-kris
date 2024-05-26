import { useState, useCallback } from "react"
import Hihi from "./components/useCallback/UseCallback"

//Cần nắm kiến thức về: reference types, react memo

function App() {
  const [count, setCount] = useState(0)

  const handleIncrease = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  return (
    <div style={{padding: 20}}>
      <Hihi onIncrease={handleIncrease}/>
      <h1>{count}</h1>
    </div>
  )
}

export default App