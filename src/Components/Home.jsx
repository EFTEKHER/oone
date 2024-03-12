import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Coin from './Product';
const Home = () => {
    const arr=[1,2,3,4];
const [temp,setTemp]=useState(0);
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
cors(corsOptions);
 useEffect(() =>{

const  fetchAllCoins=async()=>{
  const {data}=await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=bdt&per_page=20')
  console.log(data);
}
fetchAllCoins();

 },[])   
  return (
    <div>
    <button onClick={()=>setTemp(temp+1)} >Click</button>
      {
        arr.map((i)=>(<Coin name={"BitCoin"} symbol={"BTC"} key={i} />))
      }
      <h1>{temp}</h1>
    </div>
  )
}

export default Home
