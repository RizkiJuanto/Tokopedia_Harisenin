import React from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";

const DeleteRekeningModal = ({isOpen, onClose, deleteBankAccount, account}) => {

  const handleDelete = () => {
    deleteBankAccount(account);
    onClose();
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
            <h2 className="text-xl font-semibold">
              Anda yakin mau delete rekening ini?
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <IoMdClose size={24} />
            </button>
          </div>
          <button
            onClick={handleDelete}
            className="px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
          >
            Hapus
          </button>
        </div>
      </div>
  </Modal>
  )
}

export default DeleteRekeningModal