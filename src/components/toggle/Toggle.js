import React, { useState } from "react";
import "./ToggleStyle.css";

function Toggle() {
  const [on, setOn] = useState(false); 
  console.log('on value:', on);
  const handleToggle = () => {
    // console.log("clicked");                                          đếm số lần click
    // setOn(callback) => setOn(previousState => !previousState)        dấu !: ngược lại
    setOn((on) => !on)
  }
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
    </div>
  );
}

export default Toggle;
