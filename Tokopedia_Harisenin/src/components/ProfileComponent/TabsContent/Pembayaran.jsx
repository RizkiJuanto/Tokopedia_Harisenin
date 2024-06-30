import React, { useState } from "react";
import PilihAlamatModal from "../../Modal/PilihAlamatModal";
// import UbahAlamatModal from "../../Modal/UbahAlamatModal";
import divs from "../../AlamatDummy";

const Pembayaran = () => {
  const [isPilihAlamatModalOpen, setIsPilihAlamatModalOpen] = useState(false);
  // const [isUbahAlamatModalOpen, setIsUbahAlamatModalOpen] = useState(false);

  return (
    <div>
      <h2>Pembayaran</h2>
      <div onClick={() => setIsPilihAlamatModalOpen(true)} className="p-2 cursor-pointer">
        Klik untuk Pilih Alamat
      </div>
      <PilihAlamatModal
        isOpen={isPilihAlamatModalOpen}
        onClose={() => setIsPilihAlamatModalOpen(false)}
        addresses={divs}
      />

    </div>
  );
};

export default Pembayaran;
