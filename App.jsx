import { useState } from "react";
import Clock from "./Clock";
function App(){
let[color,setColor]=useState("blue");
  return (
<div>
  <h1>Digital Clock</h1>
  <select onChange={(event)=>setColor(event.target.value)}>
    <option value="red">Red</option>
    <option value="blue">Blue</option>
    <option value="orange">Orange</option>
    <option value="pink">Pink</option>
  </select>
  <Clock color={color}/>
</div>
  )
}
export default App;