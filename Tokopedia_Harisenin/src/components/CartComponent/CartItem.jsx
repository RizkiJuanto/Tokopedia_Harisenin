import React, {useEffect, useState} from "react";
import StoreComponent from "./StoreComponent";
// import useForms from "react-hook-form";

const CartItem = ({onTotalChange,cartItems}) => {

  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)
  const [isChecked, setIsChecked] = useState(false)
  // const {register, formState:{err}} = useForms();

  const handleCheckBox = (checked) => {
    setIsChecked(checked);
  }

  const handleChange  = (quantity,price) => {
    setQuantity(quantity);
    setPrice(price);
  };

  useEffect(()=>{
    onTotalChange(quantity,price);
  },[quantity,price,onTotalChange]);



  return (
    <div className="block">
      <div className="bg-white my-3 py-3 px-5 flex justify-between items-center rounded-xl ">
        <div className="flex gap-5">
          <div className="">
            <input 
            type="checkbox" 
            checked={isChecked}
            onChange={(e) => handleCheckBox(e.target.checked)}
            />
          </div>
          <div className="font-bold">
            Pilih Semua 
            {/* <span>(1)</span> */}
          </div>
        </div>
        <div className="primaryColor font-semibold">Hapus</div>
      </div>
      <StoreComponent 
      isChecked={isChecked}
      cartItems={cartItems}
      onCheckBox={handleCheckBox}
      onTotalChange={handleChange}/>
    </div>
  );
};

export default CartItem;
