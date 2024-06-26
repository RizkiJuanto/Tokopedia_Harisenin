import React, { useState } from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";

const PilihAlamatModal = ({ isOpen, onClose, addresses }) => {
  const [selected, setSelected] = useState(1);

  const handleSelect = (id) => {
    setSelected(id);
  };

  const sortedAddresses = addresses.sort((a, b) =>
    a.id === selected ? -1 : b.id === selected ? 1 : 0
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-75 z-40"
    >
      <div className="flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold">
                Mau kirim belanjaan kemana?
              </h2>
              <p className="text-gray-500 text-sm">
                Biar pengalaman belanjamu lebih baik, pilih alamat dulu.
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <IoMdClose size={24} />
            </button>
          </div>
          <div className="flex flex-col">
            {sortedAddresses.map((address) => (
              <div
                key={address.id}
                className={`border rounded-md mb-4 ${
                  address.id === selected ? "bg-green-100 border-green-500" : ""
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="p-4 text-xs">
                      <p className="font-bold">{address.title}</p>
                      <p className="text-sm font-bold">{address.name}</p>
                      <p>{address.phone}</p>
                      <p>{address.address}</p>
                    </div>
                  </div>
                  {address.id !== selected && (
                    <button
                      className="mr-8 px-8 py-2 text-xs font-semibold bgPrimaryColor text-white rounded-md ml-2 hover:bg-green-600 focus:outline-none"
                      onClick={() => handleSelect(address.id)}
                    >
                      pilih
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button className="w-full px-4 py-2 mt-4 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 font-semibold">
            Pilih Alamat Lainnya
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default PilihAlamatModal;
