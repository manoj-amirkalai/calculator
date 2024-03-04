import React, { useState } from "react";
import './App.css'

const App = () => {
  
  function handleclick(e){
   const x=e.target.name;
    setDisplay(display.concat(x))
  }
  const [display,setDisplay]=useState("")
  function handleresult(){
    setDisplay(eval(display).toString())
  }
  
  function handleclear(){
    const y=display.length
    setDisplay(display.slice(0,y-1))
  }function handlereset(){
    setDisplay("")
  }
  return (
    <div className="body">
      <input name="display" value={display} className="display" />
    <div className="buttons">
    <button onClick={handleclick} name="1">1</button>
    <button onClick={handleclick} name="2">2</button>
    <button onClick={handleclick} name="3">3</button>
    <button onClick={handleclear} >del</button>
    <button onClick={handleclick} name="4">4</button>
    <button onClick={handleclick} name="2">5</button>
    <button onClick={handleclick} name="3">6</button>
    <button onClick={handleclick} name="+">+</button>
    <button onClick={handleclick} name="7">7</button>
    <button onClick={handleclick} name="8">8</button>
    <button onClick={handleclick} name="9">9</button>
    <button onClick={handleclick} name="-">-</button>
    <button onClick={handleclick} name=".">.</button>
    <button onClick={handleclick} name="0">0</button>
    <button onClick={handleresult} >=</button>
    <button onClick={handleclick} name="*">*</button>
    <button onClick={handleclick} name="(">(</button>
    <button onClick={handleclick} name=")">)</button>
    <button onClick={handleclick} name="%">%</button>
    <button onClick={handleclick} name="/">/</button></div>
    <button className="reset" onClick={handlereset} >
      Reset</button></div>
  );
};

export default App;
 