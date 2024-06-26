import React from "react";
import ExpandText from "./ExpandText";
import ExpandText2 from "./ExpandText2";

const Sidebar = () => {
  return (
    <aside className="w-80 border-2 border-gray-200 rounded-md m-5">
      <div className="flex items-center p-3 mt-1">
        <div className="relative">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
          />
        </div>
        <div className="ml-3">
          <div className="text-sm font-medium text-gray-800">Bapakku</div>
        </div>
      </div>
      <hr className="border border-gray-300 my-3" />
      <div className="border-2 border-gray-300 rounded-md p-4 mx-5 mt-5 mb-3">
        <div className="font-bold text-sm">
          <p>Diskon 70% buat langganan</p>
          <p>PLUS</p>
        </div>
        <p className="text-sm">Special buatmu, penawaran terbatas</p>
      </div>
      <div className="px-4 py-3 ml-7 mr-3">
        <div className="flex justify-between text-sm mb-1">
          <p>Gopay</p>
          <p>Rp 5.000</p>
        </div>
        <div className="flex justify-between text-xs">
          <p>Gopay Coins</p>
          <p>Top-Up Gopay</p>
        </div>
      </div>
      <div className="flex justify-between px-4 py-3 ml-7 mr-3">
        <div className="text-sm">
          <p>Tokopedia</p>
          <p className="mt-1">Card</p>
        </div>
        <div className="text-sm">
          <p className="pt-2 primaryColor">Daftar Sekarang</p>
        </div>
      </div>
      <div className="flex justify-between text-sm px-4 py-3 ml-7 mr-3">
        <p>Saldo</p>
        <p>Rp 5.000.000</p>
      </div>
      <hr className="border border-gray-300 my-3" />
      <ExpandText />
      <hr className="border-gray-300 my-3" />
      <ExpandText2 />
      <hr className="border-gray-300 mt-3 mb-8" />
    </aside>
  );
};

export default Sidebar;
