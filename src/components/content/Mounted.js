import { useState } from "react"
import Content from "./components/content/Content"

/**
Mounted: ấn toggle thì hiện lên "Hi everyone" 
Unmounted: ấn toggle lần nữa thì chữ biến mất
*/

function App() {
  const [show, setShow] = useState(false)

  return (
    <div style={{padding: 20}}>
      <button onClick={() => setShow(!show)}>Toggle</button>               
      {show && <Content />}
    </div>
  )
}

/** 
logical AND operator: conditionally render elements. 
    - Left side is true => return and render right side
    - Left side is false => whole expression returns false, render nothing.
*/

export default App