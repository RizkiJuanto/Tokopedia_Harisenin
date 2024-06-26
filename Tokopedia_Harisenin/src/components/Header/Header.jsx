import React from "react";
import { CiMobile1 } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping, FaBell } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import logo from "../../assets/img/tokopedia-logo.png";

const Header = () => {
  return (
    <div className="fixed top-0 flex flex-col w-full max-h-40 item-center z999 border-solid border-2 borderColor bg-[white]">
      <div className="w-full h-8 bgBorderColor fontColorGrey items-center ">
        <div className="flex flex-wrap justify-between items-center h-full py-0 px-8">
          <div className="flex flex-wrap ">
            {/* <i className="pr-1.5"></i> */}
            <CiMobile1 className="text-2xl mr-2" />
            <a className="no-underline text-[#929292]" href="">
              Download Tokopedia App
            </a>
          </div>
          <ul className="flex gap-8">
            <li className="list-none">
              <a className="no-underline text-[#929292]" href="">
                Tentang Tokopedia
              </a>
            </li>
            <li className="list-none">
              <a className="no-underline text-[#929292]" href="">
                Mitra Tokopedia
              </a>
            </li>
            <li className="list-none">
              <a className="no-underline text-[#929292]" href="">
                Pusat Edukasi Seller
              </a>
            </li>
            <li className="list-none">
              <a className="no-underline text-[#929292]" href="">
                Promo
              </a>
            </li>
            <li className="list-none">
              <a className="no-underline text-[#929292]" href="">
                Tokopedia Care
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav>
        <div className="flex flex-wrap h-16 py-0 px-8 justify-between items-center">
          <img className="w-36 h-10" src={logo} alt="" />
          <h3 className="py-0 px-5 text-[#929292]">Kategori</h3>
          <div className="w-6/12  h-8 flex flex-wrap mr-2 border-2 borderColor border-solid rounded-xl">
            <IoSearch className="text-2xl text-gray-500 mx-2 items-center justify-center mt-1" />
            <input className="w-7/12 h-full " type="text" />
          </div>
          <div className="border-r-2 border-solid borderColor justify-between flex flex-wrap w-48 pr-3">
            <FaCartShopping className="text-2xl text-gray-500 mr-4" />
            <FaBell className="text-2xl text-gray-500 mr-4" />
            <IoMdMail className="text-2xl text-gray-500 mr-4" />
          </div>
          <p className="text-[#929292]">profile</p>
        </div>
      </nav>
      <div className="w-full h-12 justify-center items-center content-center">
        <div className="py-0 px-8 flex flex-wrap justify-end items-center gap-80 h-4vh">
          <ul className="flex flex-wrap justify-center gap-14">
            <li className="list-none">
              <a className="no-underline text-[#929292]" href="">
                Handphone
              </a>
            </li>
            <li className="list-none">
              <a className="no-underline text-[#929292]" href="">
                Sport
              </a>
            </li>
            <li className="list-none">
              <a className="no-underline text-[#929292]" href="">
                Skincare
              </a>
            </li>
            <li className="list-none">
              <a className="no-underline text-[#929292]" href="">
                Jewelry
              </a>
            </li>
            <li className="list-none">
              <a className="no-underline text-[#929292]" href="">
                Accecoris
              </a>
            </li>
          </ul>
          <div className="address">
            <div className="addressContainer">
              <a className="no-underline text-[#929292]" href=""></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
