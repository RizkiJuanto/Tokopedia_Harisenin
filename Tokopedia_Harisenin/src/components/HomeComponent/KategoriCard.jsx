import React from "react";
import Gambar7 from "../../assets/img/7.png";

const KategoriCard = () => {
  return (
    <div className="cardContainer block w-auto h-auto py-0 px-2">
      <div className="card block relative shadow bg-white rounded">
        <img src={Gambar7} alt="" />
      </div>
    </div>
  );
};

export default KategoriCard;
