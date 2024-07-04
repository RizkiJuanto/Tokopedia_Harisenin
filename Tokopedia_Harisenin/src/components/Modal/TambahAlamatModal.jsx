import React, { useState } from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import axiosInstance from "../../axiosInstance";

const TambahAlamatModal = ({ isOpen, onClose, tambahAlamat }) => {

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleTambahAlamat = async () => {
    try {
      const newAddress = { title, name, phone, address };
      const response = await axiosInstance.post("http://localhost:5000/api/addresses", newAddress);
      console.log(response)
      tambahAlamat(response.data);
      setTitle("");
      setName("");
      setPhone("");
      setAddress("");
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Label Alamat"
            className="w-full px-3 py-2 text-sm border rounded-md outline-none ring-1 ring-gray-300 focus:ring-1 focus:ring-green-400 mb-4"
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama"
            className="w-full px-3 py-2 text-sm border rounded-md outline-none ring-1 ring-gray-300 focus:ring-1 focus:ring-green-400 mb-4"
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Nomor HP"
            className="w-full px-3 py-2 text-sm border rounded-md outline-none ring-1 ring-gray-300 focus:ring-1 focus:ring-green-400 mb-4"
          />
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
