import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const ExpandText = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-sm px-5">
      <div className="flex justify-between">
        <h1 className="font-bold mb-3">Pembelian</h1>
        <div className="cursor-pointer" onClick={toggleExpand}>
          <IoIosArrowDown />
        </div>
      </div>
      <div
        className={`ml-6 transition-max-height ${
          isExpanded ? "max-h-full" : "max-h-0 overflow-hidden"
        }`}
      >
        <p className="mb-2">Menunggu Pembayaran</p>
        <p className="mb-2">Daftar Transaksi</p>
      </div>
    </div>
  );
};

export default ExpandText;
