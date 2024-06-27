import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsFillTicketFill } from "react-icons/bs";
<<<<<<< HEAD
import CartIsEmpty from "../components/CartComponent/CartIsEmpty";
import CartItem from "../components/CartComponent/CartItem";
=======
import CartIsEmpty from '../components/CartComponent/CartIsEmpty'
import CartItem from '../components/CartComponent/CartItem'

>>>>>>> rizki

const Cart = () => {
  return (
    <div className=" bgBorderColor min-w-fit">
<<<<<<< HEAD
      <Header />
      <div className="mx-auto pt-40 flex justify-center gap-6 min-w-max max-w-max">
        <div className="w-full">
          <div className="font-bold text-2xl my-5 ">Keranjang</div>
          {/* <CartIsEmpty /> */}
          <CartItem />
        </div>

        <div className="bg-[white] rounded-xl mt-16 w-96">
          <div className="w-full px-5 my-5 ">
            <div className="font-bold text-xl my-3">Ringkasan Belanja</div>
            <div className="flex justify-between">
              <div className="fontColorGrey">Total</div>
              <div className="fontColorGrey">-</div>
            </div>
            <hr className="mt-2" />
          </div>
          <div className="w-full px-5 my-5 flex justify-between">
            <div className="flex w-full justify-start gap-2">
              <div className="content-center">
                <BsFillTicketFill className="text-[gold] text-xl" />
              </div>
              <div className="">Makin Hemat Pakai Promo</div>
=======
        <Header/>
        <div className="mx-auto pt-40 flex justify-center gap-6 min-w-max max-w-max">
            <div className="w-full">
                <div className="font-bold text-2xl my-5 ">Keranjang</div>
                {/* <CartIsEmpty /> */}
                <CartItem />
>>>>>>> rizki
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
              <div className=" my-2 px-2">Beli</div>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
