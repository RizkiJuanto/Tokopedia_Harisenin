import React, { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import BiodataDiri from "./TabsContent/BiodataDiri";
import DaftarAlamat from "./TabsContent/DaftarAlamat";
import RekeningBank from "./TabsContent/RekeningBank";
import Pembayaran from "./TabsContent/Pembayaran";

const TabsMenu = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, title: "Biodata Diri", content: <BiodataDiri /> },
    { id: 2, title: "Daftar Alamat", content: <DaftarAlamat /> },
    { id: 3, title: "Pembayaran", content: <Pembayaran /> },
    { id: 4, title: "Rekening Bank", content: <RekeningBank /> },
    { id: 5, title: "Notifikasi", content: "3" },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="w-3/6">
      <div className="flex p-5">
        <IoPersonOutline className="w-5 h-5" />
        <div className="text-base font-medium text-gray-800 ml-2">Bapakku</div>
      </div>
      <div className="px-4">
        <div className="border border-gray-200 rounded-md">
          <nav className="flex space-x-7">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? "border-b-2 border-green-500 primaryColor"
                    : "text-gray-500"
                } px-4 py-2 text-sm font-semibold focus:outline-none`}
              >
                {tab.title}
              </button>
            ))}
          </nav>
        </div>
        <div className="">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`${
                activeTab === tab.id ? "block" : "hidden"
              } bg-white border border-gray-200 p-4 rounded-md`}
            >
              <div>{tab.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsMenu;
