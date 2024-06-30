import React, { useState } from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";

const TambahAlamatModal = ({ isOpen, onClose, tambahAlamat }) => {

  const [label, setLabel] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // const [newAddress, setNewAddress] = useState({
  //   title: "",
  //   name: "",
  //   phone: "",
  //   address: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setNewAddress((prevAddress) => ({
  //     ...prevAddress,
  //     [name]: value,
  //   }));
  // };

  const handleTambahAlamat = () => {
    tambahAlamat({ title: label, name, phone, address });
    setLabel("");
    setName("");
    setPhone("");
    setAddress("");
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
            name="title"
            // value={newAddress.title}
            // onChange={handleChange}
            placeholder="Label Alamat"
            className="w-full px-3 py-2 text-sm border rounded-md outline-none ring-1 ring-gray-300 focus:ring-1 focus:ring-green-400 mb-4"
          />
          <input
            type="text"
            name="name"
            // value={newAddress.name}
            // onChange={handleChange}
            placeholder="Nama"
            className="w-full px-3 py-2 text-sm border rounded-md outline-none ring-1 ring-gray-300 focus:ring-1 focus:ring-green-400 mb-4"
          />
          <input
            type="text"
            name="phone"
            // value={newAddress.phone}
            // onChange={handleChange}
            placeholder="Nomor HP"
            className="w-full px-3 py-2 text-sm border rounded-md outline-none ring-1 ring-gray-300 focus:ring-1 focus:ring-green-400 mb-4"
          />
          <textarea
            name="address"
            // value={newAddress.address}
            // onChange={handleChange}
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
