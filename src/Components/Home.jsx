import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Coin from './Product';
import Loader from './Loader';
const Home = () => {
    
const [coins,setCoins]=useState([]);
const [loading,setLoading]=useState(true);
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
cors(corsOptions);
 useEffect(() =>{

const  fetchAllCoins=async()=>{
  try{
    const {data}=await axios.get('https://raw.githubusercontent.com/EFTEKHER/cyrptoapi/main/crypto.txt')
  console.log(data)
  setCoins(data);
  setLoading(false);
  }catch(e){
    console.log(e.message);
  }; 
  
}
fetchAllCoins();

 },[])   
  return (
    <div className='home'>
    
      {
      loading?<Loader/>:   coins.map((i)=>(<Coin name={i.name} img={i.image} symbol={i.symbol} key={i.id} price={i.current_price} />))
      }
      
    </div>
  )
}

export default Home
