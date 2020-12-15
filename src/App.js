import React from "react";
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import data from './questions.json'
import {useState} from "react";

function App() {
  console.log(data);
  const [catID, setCat] = useState(0);
  const [qID, setQID] = useState(0);
  let reroll = ()=>{
    setCat(catID+1);
    setQID(qID+1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{data[catID]['title']}</h2>
        <h4>{data[catID]['items'][qID]}</h4>
        <Button onClick={()=>setCat((catID+1) % (Object.keys(data).map((el)=>parseInt(el)).reduce((a,b)=>Math.max(a,b))))} variant="contained">Category</Button>
        <Button onClick={()=>setQID((qID+1) % data[catID]['items'].length)} variant="contained">Question</Button>
      </header>
    </div>
  );
}

export default App;
