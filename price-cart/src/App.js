import './App.css';
import Button from '@mui/material/Button';
import {data} from "./data.js"
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react"

function App() {
  return (
    <div className="App">
      <Buyoptions value="free" type="FREE" priceValue="0" />
      <Buyoptions value="plus" type= "PLUS" priceValue= "12" />
      <Buyoptions value="pro" type="PRO" priceValue="25" />
    </div>
  );
}

function Buyoptions({value,type,priceValue}){
  const [button,setbutton] =useState(false)
  console.log(value)
  const buttonStyle= button===false?{backgroundColor:"#4791ff"}:{backgroundColor:"#0d6efd"}
  return(
    <div onMouseEnter={()=>setbutton(true)} onMouseLeave={()=>{setbutton(false)}} className="container">
      <div>
        <p className="typeOfSub">{type}</p>
        <p className="priceOfSub"> ${priceValue} <span className="month">/month</span></p><hr></hr>
      </div>
      <div className="buy-card">
        {data[value].map((value,index)=>{
          return(
              <p >{value[0]===true?<DoneIcon color="success" /> :<CloseIcon color="error" />}
              <span style={value[0]===false?{color:"rgb(170, 167, 167)"}:{color:"black"}}>{value[1]}</span></p>
          )
        })}
      </div>
      <button className="buybutton" style={buttonStyle}>Buy</button>
    </div>
  )
}


export default App;
