
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");

  return (
    <div>
        <div>Enter your name:</div>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <div>{name ? "Hello " + name + "!" : ""}</div>
    </div>
  )
}

export default App;