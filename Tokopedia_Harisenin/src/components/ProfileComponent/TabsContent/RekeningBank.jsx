import React, { useState } from "react";
import TambahRekeningModal from "../../Modal/TambahRekeningModal";
import axiosInstance from "../../../axiosInstance";

const RekeningBank = () => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axiosInstance.get("http://localhost:5000/api/rekenings");
        setDivs(response.data);
      } catch (error) {
        console.error("Error ga ke fetchhhh", error);
      }
    };
    fetchAddresses();
  },[]);

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
        />
      </div>
    </div>
  );
};

export default RekeningBank;
