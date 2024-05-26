import { useState, useCallback } from "react"
import Contentne from "./components/memo/Contentne"

//Cần nắm kiến thức về: reference types, react memo

function App() {
  const [count, setCount] = useState(0)
  const increase = () => {
    setCount(count + 1)
  }

  return (
    <div style={{padding: 20}}>
      <Contentne count={count}/>
      <h1>{count}</h1>
      <button onClick={increase}>Click me!</button>               
    </div>
  )
}

export default App