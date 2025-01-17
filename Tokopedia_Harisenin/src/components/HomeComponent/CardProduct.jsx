import React, { useEffect, useState } from "react";
import SellerTier from "../../assets/img/14.png";
import IconBintang from "../../assets/img/icon-bintang.png";
import axiosInstance from "../../axiosInstance";
import { Link } from "react-router-dom";

const CardProduct = () => {
  const [products,setProducts] = useState([]);

  useEffect(() =>{
    const fetchProduct = async () => {
      try{
        const response = await axiosInstance.get("http://localhost:8000/api/products");
        setProducts(response.data);
      }catch(e){
        console.error("Error ga ke fetchhhh", e);
      }
    };
    fetchProduct();
  },[]);

  const constructImageUrl = (path) => {
    return `http://localhost:8000${path}`;
  };

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  const truncateName = (name, maxLength) => {
    if (name.length > maxLength) {
      return name.substring(0, maxLength) + "...";
    }
    return name;
  };

  return (
    <div className="flex flex-wrap justify-around ">
      {products.map((product) =>(
      <Link key={product.product_id} to={`/ProductDetail/${product.product_id}`}>
        <div key={product.product_id} className="min-w-fit max-w-fit mb-6 rounded-xl shadow  shadow-[#0000001f] border-solid border-2 border-[#e5e7e9] ">
          <div className="">
            <img className="rounded-t-xl w-48 h-48" src={constructImageUrl(product.product_details[0].product_image)} alt="" />
          </div>
          <div className=" mt-1 mr-1 mb-4 ml-3 ">
            <div className="max-w-44 mb-1">
              <h4 className="text-xs font-medium">{truncateName(product.product_name,40)}</h4>
            </div>
            <div className="font-bold mb-1">
              <p>{formatRupiah(product.product_price)}</p>
            </div>
            <div className="">
              <div className="flex h-full items-center">
                <div className="mr-3">
                  <img
                    className="w-5 h-5 justify-center items-center"
                    src={SellerTier}
                    alt=""
                  />
                </div>
                <div className="items-center justify-center mr-auto pb-1">
                  <p className="font-semibold">{product.store.store_address}</p>
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex mr-1 border-none border-2 border-[#929292]">
                  <div className="mr-3 items-center content-center">
                    <img className="w-4 h-4" src={IconBintang} alt="" />
                  </div>
                  <div className="mr-3">
                    <p>{product.product_rating}</p>
                  </div>
                </div>
                <div className="itemSelling">
                  <p>({product.product_sold})<span className="font-bold">Sold</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    ))}
    </div>
  );
};

export default CardProduct;
