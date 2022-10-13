import React, { useState } from "react";

function Toggle() {

  const [isOn, setStatus] = useState(false);

  const handleClick = () => setStatus((isOn) => !isOn);
  const color = isOn ? "red" : "white";
  
  
  return <button onClick={handleClick} style={{background: color}}>{isOn ? "On" : "Off"} </button>;
}


export default Toggle;
