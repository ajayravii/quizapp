import logo from './logo.svg';
import './App.css';
import React,  { useState } from 'react';
function App() {
  const [value,setValue]=useState(0)
  const [val1,setVal1]=useState(10)
  const [val2,setVal2]=useState(10)
  const [val3,setVal3]=useState(10)
  const handleCLick=()=>{
    setValue(value+1)
    console.log("value",value)
  }
  console.log("hello")
  return (
    <div className="App">
     <button onClick={()=>handleCLick()}>Click1</button>
     value:{value}
     <button onClick={()=>setVal1(val1+1)}>Click2</button>
     value:{val1}
     <button onClick={()=>setVal2(val2+1)}>Click3</button>
     value:{val2}
     <button onClick={()=>setVal3(val3+1)}>Click4</button>
     value:{val3}
    </div>
  );
}

export default App;
