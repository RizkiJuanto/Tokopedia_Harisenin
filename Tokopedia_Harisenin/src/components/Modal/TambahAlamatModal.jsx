import React, { useState } from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import axiosInstance from "../../axiosInstance";

const TambahAlamatModal = ({ isOpen, onClose, tambahAlamat }) => {

  const [address_label, setAddress_label] = useState("");
  const [address_name, setAddress_name] = useState("");
  const [address_phone, setAddress_phone] = useState("");
  const [address_full, setAddress_full] = useState("");

  const handleTambahAlamat = async () => {
    try {
      const newAddress = { address_label, address_name, address_phone, address_full };
      const response = await axiosInstance.post("http://localhost:8000/api/addresses", newAddress);
      console.log(response)
      tambahAlamat(response.data);
      setAddress_label("");
      setAddress_name("");
      setAddress_phone("");
      setAddress_full("");
      onClose();
    } catch (error) {
      console.error("Error adding address", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-75 z-40"
    >
      <div className="flex items-center justify-center">
        <div className="sm:w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Tambah Alamat</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <IoMdClose size={24} />
            </button>
          </div>
          <input
            type="text"
            value={address_label}
            onChange={(e) => setAddress_label(e.target.value)}
            placeholder="Label Alamat"
            className="w-full px-3 py-2 text-sm border rounded-md outline-none ring-1 ring-gray-300 focus:ring-1 focus:ring-green-400 mb-4"
          />
          <input
            type="text"
            value={address_name}
            onChange={(e) => setAddress_name(e.target.value)}
            placeholder="Nama"
            className="w-full px-3 py-2 text-sm border rounded-md outline-none ring-1 ring-gray-300 focus:ring-1 focus:ring-green-400 mb-4"
          />
          <input
            type="text"
            value={address_phone}
            onChange={(e) => setAddress_phone(e.target.value)}
            placeholder="Nomor HP"
            className="w-full px-3 py-2 text-sm border rounded-md outline-none ring-1 ring-gray-300 focus:ring-1 focus:ring-green-400 mb-4"
          />
          <textarea
            value={address_full}
            onChange={(e) => setAddress_full(e.target.value)}
            placeholder="Alamat Lengkap"
            className="w-full px-3 py-2 text-sm border rounded-md outline-none ring-1 ring-gray-300 focus:ring-1 focus:ring-green-400 mb-4"
          />
          <button
            onClick={handleTambahAlamat}
            className="w-full px-4 py-2 mt-4 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 font-semibold"
          >
            Simpan
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default TambahAlamatModal;
