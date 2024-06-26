import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const ExpandText2 = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-sm px-5">
      <div className="flex justify-between">
        <h1 className="font-bold mb-3">Profil Saya</h1>
        <div className="cursor-pointer" onClick={toggleExpand}>
          <IoIosArrowDown />
        </div>
      </div>
      <div className="ml-6">
        <p className="mb-2">{isExpanded ? "Menunggu Pembayaran" : ""}</p>
        <p className="mb-2">{isExpanded ? "Wishlist" : ""}</p>
        <p className="mb-2">{isExpanded ? "Toko Favorit" : ""}</p>
        <p className="mb-2">{isExpanded ? "Pengaturan" : ""}</p>
      </div>
    </div>
  );
};

export default ExpandText2;
