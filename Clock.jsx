import { useEffect, useState } from "react";

function Clock({color}){
  const[time,setTime]=useState("");
useEffect(()=>{
  let timer=setInterval(()=>{
    setTime(new Date().toLocaleTimeString());
  },1000)
  return()=>{clearInterval(timer)}
},[])

  
  return(
<div>
<h1 style={{
  color:color,
  backgroundColor:"black",
  padding:"10px",
  width:"200px"
}}>{time}</h1>
</div>
  )
}
export default Clock;