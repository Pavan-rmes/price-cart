import './App.css';
import Button from '@mui/material/Button';
import {data} from "./data.js"

function App() {
  return (
    <div className="App">
      <Buyoptions key="free" />
      <Buyoptions />
      <Buyoptions />
    </div>
  );
}

function Buyoptions({prop}){
  return(
    <div className="buy-card">
      {data.free.map((value)=>console.log(value))}
      <Button style={{width:"50px"}} variant="contained">Buy</Button>
    </div>
  )
}


export default App;
