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
  let visited = new Set();
  let reroll = ()=>{
    setCat(catID+1);
    setQID(qID+1);
  }
  let szusdik = (a,b)=>{return a >= b ? a * a + a + b : a + b * b;}
  let count = 1000;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{data[catID]['title']}</h2>
        <h4>{data[catID]['items'][qID].replaceAll("*","")}</h4>
        <Button onClick={()=> {
          //while(visited.has(szusdik(catID,qID)) && count>0) {
            setCat((catID + 1) % (Object.keys(data).map((el) => parseInt(el)).reduce((a, b) => Math.max(a, b))));
          //  count--;
          //}
          visited.add(szusdik(catID,qID));
        }} variant="contained">Next Category</Button>
        <Button onClick={() => {
          //while(visited.has(szusdik(catID,qID)) && count>0) {
            setQID((qID + 1) % data[catID]['items'].length)
          //}
          //count--;
        }} variant="contained">Next Question</Button>
      </header>
    </div>
  );
}

export default App;
