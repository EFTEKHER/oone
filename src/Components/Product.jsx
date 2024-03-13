import React from 'react'

const Coin = ({img,name,symbol,price}) => {
  return (
    <div className='coin'>
      <img src={img} alt={name} height={'50px'} width={'50px'} />
        <h1>{name} </h1>

        <p>{symbol}</p>
      <h4>৳ : {price}</h4>
    </div>
  )
}

export default Coin
