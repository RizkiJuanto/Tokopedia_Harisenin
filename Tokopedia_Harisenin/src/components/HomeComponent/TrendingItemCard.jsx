import React from "react";
import GambarAndroid from "../../assets/img/100x100/Android.png";

const TrendingItemCard = () => {
  return (
    <div className="trendingItemCard flex justify-start w-3/12 mb-5 items-center rounded-2xl shadow border border-solid border-[#e5e7e9]">
      <div className="trendingItemImg mr-3">
        <img src={GambarAndroid} alt="" />
      </div>
      <div className="tendingItemDesc block">
        <div className="trendingItemName text-wrap w-10/12">
          <h3>Handphone</h3>
        </div>
        <div className="trendingItemTotal">
          <p>100++ Produk</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingItemCard;
