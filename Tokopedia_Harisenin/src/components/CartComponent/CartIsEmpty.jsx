import React from "react";
import Gambar5a from "../../assets/img/5a.png";

const CartIsEmpty = () => {
  return (
    <div className="bg-[white] flex rounded-xl w-full py-10 px-16 justify-center items-center">
      <img
        className="w-40 h-40 ml-10 content-center items-center"
        src={Gambar5a}
        alt=""
      />
      <div className="w-full content-center ">
        <h1 className="font-bold text-2xl my-4 px-3">
          Wah, keranjang belanjamu kosong
        </h1>
        <h3 className="font-bold text-sm my-4 px-3">
          Yuk, isi dengan barang-barang impianmu!
        </h3>
        <div className="">
          <button 
          className="px-10 my-2 py-3 ml-5 bgPrimaryColor rounded-lg text-white">
            <a href="/"><p>Mulai Belanja</p></a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartIsEmpty;
