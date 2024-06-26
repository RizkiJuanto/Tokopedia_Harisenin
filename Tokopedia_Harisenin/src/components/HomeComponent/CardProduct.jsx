import React from "react";
import ImgMouse from "../../assets/img/Mouse.jpg";
import SellerTier from "../../assets/img/14.png";
import IconBintang from "../../assets/img/icon-bintang.png";

const CardProduct = () => {
  return (
    <div className="itemCard block max-w-max mr-1 mb-6 rounded-xl shadow  shadow-[#0000001f] border-solid border-2 border-[#e5e7e9] ">
      <div className="itemImg">
        <img className="rounded-t-xl w-48 h-48" src={ImgMouse} alt="" />
      </div>
      <div className="itemDesc block mt-1 mr-1 mb-4 ml-3 ">
        <div className="itemName mb-1 text-xs">
          <h4>Mouse Ajazz AJ199</h4>
        </div>
        <div className="itemPrice font-bold mb-1">
          <p>Rp. 1.000.000</p>
        </div>
        <div className="itemInfo">
          <div className="sellerInfo flex h-full items-center">
            <div className="sellerTier mr-3">
              <img
                className="w-5 h-5 justify-center items-center"
                src={SellerTier}
                alt=""
              />
            </div>
            <div className="sellerCity items-center justify-center mr-auto pb-1">
              <p>Jakarta Barat</p>
            </div>
          </div>
          <div className="itemSellInfo flex w-full">
            <div className="itemRating flex mr-1 border-none border-2 border-[#929292]">
              <div className="itemStarImg mr-3 items-center content-center">
                <img className="w-4 h-4" src={IconBintang} alt="" />
              </div>
              <div className="rating mr-3">
                <p>4.9</p>
              </div>
            </div>
            <div className="itemSelling">
              <p>10rb+ terjual</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
