import React, { useState, useEffect } from "react";
import axiosInstance from "../../../axiosInstance";
import { IoIosSearch } from "react-icons/io";
import TambahAlamatModal from "../../Modal/TambahAlamatModal";
import UbahAlamatModal from "../../Modal/UbahAlamatModal";
import DeleteAlamatModal from "../../Modal/DeleteAlamatModal";

const DaftarAlamat = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [address, setAddresses] = useState([]);
  const [selected, setSelected] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [deleteModalStates, setDeleteModalStates] = useState({});
  const [isUbahAlamatModalOpen, setIsUbahAlamatModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axiosInstance.get(
          "http://localhost:8000/api/addresses"
        );
        setAddresses(response.data);
      } catch (error) {
        console.error("Error ga ke fetchhhh", error);
      }
    };
    fetchAddresses();
  }, []);

  const handleSelect = (id) => {
    setSelected(id);
  };

  const filteredAddresses = address.filter((address) =>
    address.address_label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  filteredAddresses.sort((a, b) =>
    a.id === selected ? -1 : b.id === selected ? 1 : 0
  );

  const openUbahAlamatModal = (address) => {
    setSelectedAddress(address);
    setIsUbahAlamatModalOpen(true);
  };

  const tambahAlamat = (newAddress) => {
    setAddresses((prevAddress) => [...prevAddress, newAddress]);
    setOpenModal(false);
  };

  const handleAddressUpdated = (updatedAddress) => {
    setAddresses((prevAddress) =>
      prevAddress.map((address) =>
        address.address_id === updatedAddress.address_id ? updatedAddress : address
      )
    );
    setIsUbahAlamatModalOpen(false);
  };

  const openDeleteModal = (address) => {
    setDeleteModalStates((prevStates) => ({
      ...prevStates,
      [address.address_id]: true,
    }));
  };

  const closeDeleteModal = (address) => {
    setDeleteModalStates((prevStates) => ({
      ...prevStates,
      [address.address_id]: false,
    }));
  };

  const deleteAlamat = async (address) => {
    try {
      await axiosInstance.delete(`/addresses/${address.address_id}`);
      setAddresses((prevAddresses) =>
        prevAddresses.filter((addr) => addr.address_id !== address.address_id)
      );
      console.log(`Address with ID ${address.address_id} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting address with ID ${address.address_id}:`, error);
    }
    closeDeleteModal(address);
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
        {filteredAddresses.map((address) => (
          <div
            key={address.address_id}
            className={`border rounded-md mb-4 ${
              address.address_id === selected ? "bg-green-100 border-green-500" : ""
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="p-4 text-xs">
                  <p className="font-bold">{address.address_label}</p>
                  <p className="text-sm font-bold">{address.address_name}</p>
                  <p>{address.address_phone}</p>
                  <p>{address.address_full}</p>
                </div>
                <div className="flex px-4 mb-4">
                  <p className="primaryColor text-xs font-bold">Share</p>
                  <div className="h-4 border-l border-gray-300 mx-2"></div>
                  <button
                    onClick={() => openUbahAlamatModal(address)}
                    className="primaryColor text-xs font-bold"
                  >
                    Ubah Alamat
                  </button>
                  <div className="h-4 border-l border-gray-300 mx-2"></div>
                  <button
                    onClick={() => openDeleteModal(address)}
                    className="primaryColor text-xs font-bold"
                  >
                    Hapus
                  </button>
                  <DeleteAlamatModal
                    isOpen={deleteModalStates[address.address_id]}
                    onClose={() => closeDeleteModal(address)}
                    deleteAlamat={deleteAlamat}
                    address={address}
                  />
                </div>
              </div>
              {address.id !== selected && (
                <button
                  className="mr-8 px-8 py-2 text-xs font-semibold bgPrimaryColor text-white rounded-md ml-2 hover:bg-green-600 focus:outline-none"
                  onClick={() => handleSelect(address.address_id)}
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
          onAddressUpdated={handleAddressUpdated}
        />
      )}
    </div>
  );
};

export default DaftarAlamat;
