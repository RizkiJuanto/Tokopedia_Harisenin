import React, { useEffect, useState } from "react";
import ImgMouse from "../../assets/img/Mouse.jpg";
import SellerTier from "../../assets/img/14.png";
import IconBintang from "../../assets/img/icon-bintang.png";
import axiosInstance from "../../axiosInstance";
import axiosInstance from "../../axiosInstance";

const CardProduct = () => {
  const [products,setProducts] = useState([]);

  useEffect(() =>{
    const fetchProduct = async () => {
      try{
        const response = await axiosInstance.get("http://localhost:8000/api/products");
        console.log(response.data)
        setProducts(response.data);
      }catch(e){
        console.error("Error ga ke fetchhhh", e);
      }
    };
    fetchProduct();
  },[]);

  // const constructImageUrl = (path) => {
  //   return `http://localhost:8000/${path}`;
  // };

  const [products,setProducts] = useState([]);

  useEffect(() =>{
    const fetchProduct = async () => {
      try{
        const response = await axiosInstance.get("http://localhost:8000/api/products");
        console.log(response.data);
        setProducts(response.data);
      }catch(e){
        console.error("Error ga ke fetchhhh", e);
      }
    };
    fetchProduct();
  },[]);

  // const constructImageUrl = (path) => {
  //   return `http://localhost:8000/${path}`;
  // };

  return (
    <div className="flex flex-wrap justify-around ">
      {products.map((product) =>(
      <div key={product.product_id} className="min-w-fit max-w-fit mb-6 rounded-xl shadow  shadow-[#0000001f] border-solid border-2 border-[#e5e7e9] ">
          <div className="">
            <img className="rounded-t-xl w-48 h-48" src={product.product_image} alt="" />
          </div>
          <div className=" mt-1 mr-1 mb-4 ml-3 ">
            <div className="max-w-44 mb-1 text-xs">
              <h4>{product.product_name}</h4>
            </div>
            <div className="font-bold mb-1">
              <p>Rp. {product.product_price}</p>
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
    <div className="flex flex-wrap justify-around ">
      {products.map((product) =>(
      <div key={product.product_id} className="min-w-fit max-w-fit mb-6 rounded-xl shadow  shadow-[#0000001f] border-solid border-2 border-[#e5e7e9] ">
          <div className="">
            <img className="rounded-t-xl w-48 h-48" src={product.product_image} alt="" />
          </div>
          <div className=" mt-1 mr-1 mb-4 ml-3 ">
            <div className="max-w-44 mb-1 text-xs">
              <h4>{product.product_name}</h4>
            </div>
            <div className="font-bold mb-1">
              <p>Rp. {product.product_price}</p>
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
    ))}
    </div>
    ))}
    </div>
  );
};

export default CardProduct;
