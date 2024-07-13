import React, { useState,useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsFillTicketFill } from "react-icons/bs";
import CartIsEmpty from '../components/CartComponent/CartIsEmpty'
import CartItem from '../components/CartComponent/CartItem'
import axiosInstance from "../axiosInstance";


const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const handleTotalChange =(quantity,price) => {
    setTotalPrice(quantity*price);
  }
  
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axiosInstance.get("http://localhost:8000/api/cart"); // Adjust URL based on your backend API endpoint
        setCartItems(response.data); // Assuming response.data is an array of cart items
      } catch (error) {
        console.error("Error fetching cart items:", error);
        // Handle error state or alert user
      }
    };
    fetchCartItems();
  }, []);


  return (
    <div className=" bgBorderColor min-w-fit">
      <Header />
      <div className="mx-auto pt-40 flex justify-center gap-6 min-w-max max-w-max">
        <div className="w-full">
          <div className="font-bold text-2xl my-5 ">Keranjang</div>
          {cartItems.length === 0 ? (
            <CartIsEmpty />
          ) : (
            
            <CartItem
            cartItems={cartItems}
            onTotalChange={handleTotalChange}
            />
          )}
        </div>

        <div className="bg-[white] rounded-xl mt-16 w-96">
          <div className="w-full px-5 my-5 ">
            <div className="font-bold text-xl my-3">Ringkasan Belanja</div>
            <div className="flex justify-between">
              <div className="fontColorGrey">Total</div>
              <div className="fontColorGrey">Rp.{totalPrice}</div>
            </div>
            <hr className="mt-2" />
          </div>
          <div className="w-full px-5 my-5 flex justify-between">
            <div className="flex w-full justify-start gap-2">
              <div className="content-center">
                <BsFillTicketFill className="text-[gold] text-xl" />
              </div>
              <div className="">Makin Hemat Pakai Promo</div>
            </div>
            <div className="">
              <button>
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>
          <hr className="mx-5" />
          <div className="w-full px-5 my-5">
            <button className="bgPrimaryColor rounded-xl text-white w-full">
              <a href="/Payment" className="block my-2 px-2">Beli</a>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
