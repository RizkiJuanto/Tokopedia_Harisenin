import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import TambahAlamatModal from "../Modal/TambahAlamatModal";
import divs from "../AlamatDummy";

const DaftarAlamat = () => {
  const [selected, setSelected] = useState(1);

  const handleSelect = (order) => {
    setSelected(order);
  };

  const [openModal, setOpenModal] = useState(false);

  const sortedDivs = divs.sort((a, b) =>
    a.id === selected ? -1 : b.id === selected ? 1 : 0
  );

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
        {sortedDivs.map((div, index) => (
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
                  <p className="primaryColor text-xs font-bold">Ubah Alamat</p>
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
    </div>
  );
};

export default DaftarAlamat;
