import { useState } from "react"

const Count = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        console.log('Tracking....')
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={handleClick}>+</button>
            <h1>Count: {count}</h1>
        </div>
    )
}

export default Count;