import React, { useState, useEffect } from "react";
import TambahRekeningModal from "../../Modal/TambahRekeningModal";
import DeleteRekeningModal from "../../Modal/DeleteRekeningModal";
import axiosInstance from "../../../axiosInstance";

const RekeningBank = () => {
  const [accounts, setAccounts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [deleteModalStates, setDeleteModalStates] = useState({});

  useEffect(() => {
    const fetchRekening = async () => {
      try {
        const response = await axiosInstance.get(
          "http://localhost:8000/api/accounts"
        );
        setAccounts(response.data);
      } catch (error) {
        console.error("Error ga ke fetchhhh", error);
      }
    };
    fetchRekening();
  }, []);

  const deleteBankAccount = async (account_id) => {
    try {
      await axiosInstance.delete(`/accounts/${account_id}`);
      setAccounts((prevAccounts) =>
        prevAccounts.filter((account) => account.account_id !== account_id)
      );
      console.log(`Rekening with ID ${account_id} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting rekening with ID ${account_id}:`, error);
    }
  };

  const tambahRekening = (newAccount) => {
    setAccounts((prevAccount) => [...prevAccount, newAccount]);
    setOpenModal(false);
  };

  const openDeleteModal = (id) => {
    setDeleteModalStates((prevStates) => ({
      ...prevStates,
      [id]: true,
    }));
  };

  const closeDeleteModal = (id) => {
    setDeleteModalStates((prevStates) => ({
      ...prevStates,
      [id]: false,
    }));
  };

  return (
    <div className="py-3 px-3">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-xl mb-3">
            Kamu bisa simpan maks. 3 rekening bank
          </p>
          <p className="font-medium text-gray-500">
            Saldo Tokopedia kamu bisa ditarik ke rekening ini.
          </p>
        </div>
        <button
          onClick={() => setOpenModal(true)}
          className="px-4 py-3 text-xs font-semibold bgPrimaryColor text-white rounded-md hover:bg-green-600 focus:outline-none"
        >
          Tambah Rekening Lain
        </button>
        <TambahRekeningModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          tambahRekening={tambahRekening}
        />
      </div>
      <div className="flex flex-col mt-4">
        {accounts.map((account) => (
          <div key={account.account_id} className="flex justify-between items-center">
            <div className="p-4 text-xs">
              <p>{account.bank_name}</p>
              <p className="font-bold">{account.account_name}</p>
              <p className="font-bold">{account.account_number}</p>
            </div>
            <button
              className="mr-8 px-6 py-2 border-2 text-xs font-semibold rounded-md ml-2 focus:outline-none"
              onClick={() => openDeleteModal(account.account_id)}
            >
              Hapus
            </button>
            <DeleteRekeningModal
              isOpen={deleteModalStates[account.account_id]}
              onClose={() => closeDeleteModal(account.account_id)}
              deleteBankAccount={() => deleteBankAccount(account.account_id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RekeningBank;
