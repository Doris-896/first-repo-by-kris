import React, { useState } from "react";

// stateless functional component: component nhưng khôn sử dụng state
function Toggle() {
    return <div className="toggle"></div>
}

// stateful functional component: component sử dụng state
function Toggle2() {
    const [count, setCount] = useState();               //Đây là Hook
    return (
        <div className='toggle'></div>
    )
}