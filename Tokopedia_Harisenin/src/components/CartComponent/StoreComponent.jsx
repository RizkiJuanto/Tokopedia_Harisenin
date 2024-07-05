import React, { useEffect,useState } from 'react'

import StoreItem from './StoreItem';

const StoreComponent = ({onTotalChange}) => {

    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)
  
    const handleChange  = (quantity,price) => {
      setQuantity(quantity);
      setPrice(price);
    };

    useEffect(()=>{
        onTotalChange(quantity,price);
    },[quantity,price,onTotalChange]);




  return (
    <div>
      <div className="bg-white rounded-xl">
        <div className="flex gap-5 my-3 py-3 px-5">
          <div className="">
            <input  type="checkbox" />
          </div>
          <div className="font-bold">Nama Toko</div>
        </div>
        <StoreItem onTotalChange={handleChange}/>

        
      </div>
    </div>
  )
}

export default StoreComponent
