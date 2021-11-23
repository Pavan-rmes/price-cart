import './App.css';
import Button from '@mui/material/Button';
import {data} from "./data.js"
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

function App() {
  return (
    <div className="App">
      <Buyoptions value="free" />
      <Buyoptions value="plus" />
      <Buyoptions value="pro" />
    </div>
  );
}

function Buyoptions({value}){
  console.log(value)
  return(
    <div className="container">
      <div className="buy-card">
        {data[value].map((value,index)=>{
          return(
              <p>{value[0]===true?<DoneIcon /> :<CloseIcon />} {value[1]}</p>
          )
        })}
      </div>
      <Button style={{padding:"10px",marginLeft:"45%",marginTop:"10px"}} variant="contained">Buy</Button>
    </div>
  )
}


export default App;
