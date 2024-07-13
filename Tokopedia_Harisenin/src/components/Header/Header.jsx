import React, { useState, useEffect } from "react";
import { CiMobile1 } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import logo from "../../assets/img/tokopedia-logo.png";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import axiosInstance from "../../axiosInstance";

const Header = () => {
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleMouseEnter = () => {
    setIsProfileHovered(true);
  };

  const handleMouseLeave = () => {
    setIsProfileHovered(false);
  };

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      try {
        const response = await axiosInstance.get(
          `/products/search?query=${query}`
        );
        setSearchResults(response.data);
      } catch (error) {
        console.error("Failed to fetch search results", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="fixed top-0 flex flex-col w-full max-h-40 item-center z999 border-solid border-2 bg-white">
      <div className="w-full h-8 bg-gray-100 text-gray-500 items-center ">
        <div className="flex flex-wrap justify-between items-center h-full px-8 text-xs">
          <div className="flex flex-wrap hover:text-green-500">
            <CiMobile1 className="text-xl mr-2" />
            <a className="no-underline" href="">
              Download Tokopedia App
            </a>
          </div>
          <ul className="flex gap-8">
            <li className="list-none">
              <a className="hover:text-green-500" href="">
                Tentang Tokopedia
              </a>
            </li>
            <li className="list-none">
              <a className="hover:text-green-500" href="">
                Mitra Tokopedia
              </a>
            </li>
            <li className="list-none">
              <a className="hover:text-green-500" href="">
                Pusat Edukasi Seller
              </a>
            </li>
            <li className="list-none">
              <a className="hover:text-green-500" href="">
                Promo
              </a>
            </li>
            <li className="list-none">
              <a className="hover:text-green-500" href="">
                Tokopedia Care
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav>
        <div className="flex  h-16 px-8 justify-between  items-center">
          <a href="/">
            <img className="min-w-36 h-10" src={logo} alt="" />
          </a>
          <h3 className="text-gray-600 mr-4 ml-6">Kategori</h3>
          <div className="w-8/12 relative flex">
            <div className="flex items-center">
              <IoIosSearch className="absolute text-gray-500 w-6 h-5 left-2" />
            </div>
            <input
              type="text"
              placeholder="Cari di Tokopedia"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 py-2 text-sm border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1">
                <ul>
                  {searchResults.map((product, index) => (
                    <li
                      key={index}
                      className="py-2 px-4 text-sm hover:bg-gray-100 cursor-pointer"
                    >
                      {product.product_name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="border-r-2 border-solid justify-around flex flex-wrap w-48 mr-3 pr-2">
            <a href="/Cart"><CiShoppingCart className="text-2xl text-gray-900" /></a>
            <IoMdNotificationsOutline className="text-2xl text-gray-500" />
            <IoMailOutline className="text-2xl text-gray-500" />
          </div>
          <div
            className="flex items-center relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="h-8 w-8 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
            />
            <p className="text-gray-500 ml-3 font-semibold text-sm">BAPAKKU</p>
            {isProfileHovered && (
              <div className="absolute top-8 right-0 w-48 text-sm bg-white border border-gray-300 rounded-md shadow-lg p-4">
                <ul className="text-gray-700">
                  <Link to="/profile">
                    <li className="py-2 hover:bg-gray-100 cursor-pointer">
                      Profile
                    </li>
                  </Link>
                  <li className="py-2 hover:bg-gray-100 cursor-pointer">
                    Settings
                  </li>
                  <li className="py-2 hover:bg-gray-100 cursor-pointer">
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="w-full justify-center items-center content-center">
        <div className="flex flex-wrap justify-start items-center">
          <ul className="pl-80 mb-2 flex flex-wrap justify-center gap-10 text-gray-500 text-xs ">
            <li className="list-none">
              <a className="hover:text-green-500" href="">
                Handphone
              </a>
            </li>
            <li className="list-none">
              <a className="hover:text-green-500" href="">
                Sport
              </a>
            </li>
            <li className="list-none">
              <a className="hover:text-green-500" href="">
                Skincare
              </a>
            </li>
            <li className="list-none">
              <a className="hover:text-green-500" href="">
                Jewelry
              </a>
            </li>
            <li className="list-none">
              <a className="hover:text-green-500" href="">
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
