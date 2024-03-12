import React,{useEffect,useState} from 'react'
import Coin from './Product';
const Home = () => {
    const arr=[1,2,3,4];
const [temp,setTemp]=useState(0);
 useEffect(() =>{
console.log('Mounting');
return ()=>{
  console.log('unmounting');
}


 },[temp])   
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
