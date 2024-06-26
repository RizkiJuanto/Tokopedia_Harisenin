import React, { useState } from "react";
import PilihAlamatModal from "../Modal/PilihAlamatModal";
import divs from "../AlamatDummy";

const Pembayaran = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      Pembayaran
      <div onClick={() => setOpenModal(true)} className="p-2">
        klik
      </div>
      <PilihAlamatModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        addresses={divs}
      />
    </div>
  );
};

export default Pembayaran;
