import { useRef } from "react";
import { useState } from "react"


export default function Player() {
  const playername = useRef()
  const [enteredName , setEnteredName] = useState('')
  function handleChange(){
    setEnteredName(playername.current.value)
  }
  return (
    
    <section id="player">
      <h2>Welcome {enteredName ? enteredName :'unknown person'}</h2>
      <p>
        <input type="text" 
        ref={playername}
        />
        <button onClick={handleChange}>Set Name</button>
      </p>
    </section>
  );
}
