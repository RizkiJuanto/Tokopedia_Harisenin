import React, { useState, useEffect } from "react";
import axiosInstance from "../../../axiosInstance";
import { IoIosSearch } from "react-icons/io";
import TambahAlamatModal from "../../Modal/TambahAlamatModal";
import UbahAlamatModal from "../../Modal/UbahAlamatModal";

const DaftarAlamat = () => {
  const [divs, setDivs] = useState([]);
  const [selected, setSelected] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [isUbahAlamatModalOpen, setIsUbahAlamatModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axiosInstance.get("http://localhost:5000/api/addresses");
        setDivs(response.data);
      } catch (error) {
        console.error("Error ga ke fetchhhh", error);
      }
    };
    fetchAddresses();
  },[]);

  const handleSelect = (id) => {
    setSelected(id);
  };

  const sortedDivs = divs.sort((a, b) =>
    a.id === selected ? -1 : b.id === selected ? 1 : 0
  );

  const openUbahAlamatModal = (address) => {
    setSelectedAddress(address);
    setIsUbahAlamatModalOpen(true);
  };

  const tambahAlamat = (newAddress) => {
    setDivs(prevDivs => [...prevDivs, newAddress]); 
    setOpenModal(false);
  };

  return (
    <div className="px-3 py-2">
      <div className="relative flex">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <IoIosSearch className="text-gray-400 w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Tulis Nama Alamat / Kota / Kecamatan tujuan pengiriman"
            className="block w-5/6 pl-10 py-2 text-sm border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          onClick={() => setOpenModal(true)}
          className="px-4 py-3 text-xs font-semibold bgPrimaryColor text-white rounded-md ml-2 hover:bg-green-600 focus:outline-none"
        >
          + Tambah alamat baru
        </button>
        <TambahAlamatModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          tambahAlamat={tambahAlamat}
        />
      </div>
      <div className="flex text-sm mt-8">
        <button className="px-3 py-2 border bg-green-100 border-gray-300 mr-2 rounded-lg focus:ring-1 focus:ring-green-500">
          Semua Alamat
        </button>
        <button className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500">
          Dari Teman
        </button>
      </div>
      <div className="flex flex-col mt-4">
        {sortedDivs.map((div) => (
          <div
            key={div.id}
            className={`border rounded-md mb-4 ${
              div.id === selected ? "bg-green-100 border-green-500" : ""
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="p-4 text-xs">
                  <p className="font-bold">{div.title}</p>
                  <p className="text-sm font-bold">{div.name}</p>
                  <p>{div.phone}</p>
                  <p>{div.address}</p>
                </div>
                <div className="flex px-4 mb-4">
                  <p className="primaryColor text-xs font-bold">Share</p>
                  <div className="h-4 border-l border-gray-300 mx-2"></div>
                  <button
                    onClick={() => openUbahAlamatModal(div)}
                    className="primaryColor text-xs font-bold"
                  >
                    Ubah Alamat
                  </button>
                </div>
              </div>
              {div.id !== selected && (
                <button
                  className="mr-8 px-8 py-2 text-xs font-semibold bgPrimaryColor text-white rounded-md ml-2 hover:bg-green-600 focus:outline-none"
                  onClick={() => handleSelect(div.id)}
                >
                  Pilih
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {selectedAddress && (
        <UbahAlamatModal
          isOpen={isUbahAlamatModalOpen}
          onClose={() => setIsUbahAlamatModalOpen(false)}
          address={selectedAddress}
        />
      )}
    </div>
  );
};

export default DaftarAlamat;
