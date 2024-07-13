import React, { useState } from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import axiosInstance from "../../axiosInstance";

const TambahRekeningModal = ({ isOpen, onClose, tambahRekening }) => {
  const [bank_name, setBankName] = useState("");
  const [account_number, setNumber] = useState("");
  const [account_name, setOwnerName] = useState("");

  const handleTambahRekening = async () => {
    try {
      const newRekening = { bank_name, account_number, account_name };
      const response = await axiosInstance.post(
        "http://localhost:8000/api/accounts",
        newRekening
      );
      console.log(response);
      tambahRekening(response.data);
      setBankName("");
      setNumber("");
      setOwnerName("");
      onClose();
    } catch (error) {
      console.error("Error adding rekening", error);
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
            <h2 className="text-2xl font-semibold">Tambah Rekening</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <IoMdClose size={24} />
            </button>
          </div>
          <input
            type="text"
            value={bank_name}
            onChange={(e) => setBankName(e.target.value)}
            placeholder="Nama Bank"
            className="w-full px-3 py-2 text-sm border rounded-md outline-none ring-1 ring-gray-300 focus:ring-1 focus:ring-green-400 mb-4"
          />
          <input
            type="text"
            value={account_number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Nomor Rekening"
            className="w-full px-3 py-2 text-sm border rounded-md outline-none ring-1 ring-gray-300 focus:ring-1 focus:ring-green-400 mb-4"
          />
          <input
            type="text"
            value={account_name}
            onChange={(e) => setOwnerName(e.target.value)}
            placeholder="Nama Pemilik"
            className="w-full px-3 py-2 text-sm border rounded-md outline-none ring-1 ring-gray-300 focus:ring-1 focus:ring-green-400 mb-4"
          />
          <button
            onClick={handleTambahRekening}
            className="w-full px-4 py-2 mt-4 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 font-semibold"
          >
            Simpan
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default TambahRekeningModal;
