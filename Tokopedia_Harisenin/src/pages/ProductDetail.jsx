import React,{useEffect, useState} from "react";
import Slider from 'react-slick';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GambarMouse from "../assets/img/Mouse.jpg";
import GambarMonitor from "../assets/img/Monitor.jpg";
import GambarKeyboard from "../assets/img/Keyboard.jpg";
import GambarLaptop from "../assets/img/Laptop.jpg";
import GambarIpad from "../assets/img/ipad.jpeg";
import Detail from "../components/TabsProductDetailContent/Detail";
import ImportantInfo from "../components/TabsProductDetailContent/ImportantInfo";
import Selengkapnya from "../components/Modal/SelengkapnyaModal";
import { FaStar, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { CiClock1 } from "react-icons/ci";
import { LuPencil } from "react-icons/lu";
import { GrNotes } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuPen } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import axiosInstance from "../axiosInstance";
import { useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";



const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(null);
  const [mainImageUrl, setMainImageUrl] = useState(null);
  const [addNote, setAddNote] = useState(false);

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() =>{
    const fetchProduct = async () => {
      try{
        const response = await axiosInstance.get(`http://localhost:8000/api/products/${id}`);
        setProduct(response.data);
        setMainImage(response.data.product_details[0].product_detail_id);
        setMainImageUrl(response.data.product_details[0].product_image);
      }catch(e){
        console.error("Error ga ke fetchhhh", e);
      }
    };
    if(id)fetchProduct();

  },[id]);

  const tabs = [
    { id: 1, title: "Detail", content: <Detail /> },
    { id: 2, title: "Info Penting", content:<ImportantInfo/> },
  ];
  const constructImageUrl = (path) => {
    return `http://localhost:8000${path}`;
  };

  // const images = [
  //   {id:1, src: GambarMouse},
  //   {id:2, src: GambarMonitor},
  //   {id:3, src: GambarKeyboard},
  //   {id:4, src: GambarLaptop},
  //   {id:5, src: GambarIpad},
  //   {id:6, src: GambarKeyboard},
  //   {id:7, src: GambarMouse},
  // ]

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleMainImage = (imageId) => {
    const selectedImage = product?.product_details.find(
      detail => detail.product_detail_id === imageId
    );
    setMainImage(imageId);
    setMainImageUrl(selectedImage.product_image);
  }

  const increaseQuantity = () => {
    setQuantity(quantity+1);
  };

  const decreaseQuantity = () => {
    if(quantity > 1){
      setQuantity(quantity-1);
    }
  };

  const settings= {
      dots: false,
      infinite: false,
      speed:500,
      slidesToShow: 5,
      slidesToScroll: 1,
  };


  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if(value === ''|| (Number(value)>0 && Number.isInteger(Number(value)))) {
      setQuantity(Number(value));
    }
  }
  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  return (
    <div className="bg-white min-w-fit">
      <Header />
          
          <div key={product?.product_id} className="mx-auto pt-40 flex gap-10 min-w-max max-w-max">
            <div className="sticky top-40 self-start z-0">
              <div className="max-w-sm">
                <div className="block w-96 h-96 mb-5">
                  {mainImageUrl ? (
                    <img  src={constructImageUrl(mainImageUrl)} alt="Main product" />
                    ) : (
                    <div>Loading...</div>
                    )}
                </div>
                <div className="">
                  {/* cari main image pakai find */}
                <Slider {...settings}>
                  {product?.product_details.map((detail)=> (
                    <div
                      key={detail.product_detail_id}
                      onClick={() => handleMainImage(detail.product_detail_id)}
                      
                    >
                      <div className={`${
                        mainImage === detail.product_detail_id
                          ? "border-2 border-green-500 w-16"
                          : "border-none "
                      }`}>
                        <img className="w-16 h-auto " src={constructImageUrl(detail.product_image)} alt={`Product ${detail.product_detail_id}`} />
                      </div>
                    </div>
                  ))}
                </Slider>
                </div>
              </div>
            </div>

            <div className="max-w-md ">
              <div className="block my-3">
                <div className="font-bold text-2xl">{product?.product_name}</div>
                <div className="flex gap-5 items-center my-2 text-gray-500">
                  <div className="">Terjual <span>{product?.product_sold}</span></div>
                  <GoDotFill/>
                  <div className="flex gap-2 items-center"><FaStar className="text-yellow-300"/>{product?.product_rating}<span>(<span>9 </span>rating)</span></div>
                  <GoDotFill />
                  <div className="">Diskusi (<span>4</span>)</div>  
                </div>
              </div>
              <div className="block my-2 py-3 text-3xl font-bold border-b-2 border-solid border-gray-100">{formatRupiah(product?.product_price)}</div>
              <div className="my-2 py-3 border-b-2 border-solid border-gray-100">
                <nav className="flex space-x-8"> 
                  {tabs.map((tab)=> (
                    <button 
                      key={tab.id}
                      onClick={()=> handleTabClick(tab.id)}
                      className={`${
                        activeTab === tab.id 
                        ? "border-b-2 border-green-500 primaryColor"
                        : "text-gray-500"
                      } px-4 py-2 text-base font-semibold focus:outline-none `}>
                        {tab.title}
                    </button>
                  ))}
                </nav>
              </div>
              <div className="">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`${
                    activeTab === tab.id ? "block" : "hidden"
                  } bg-white border border-gray-200 p-4 rounded-md`}
                >
                  <div>{tab.content}</div>
                </div>
              ))}
              </div>
              <div className="my-2 py-3 border-b-2 border-solid border-gray-100"></div>
              <div className="">
                <div className="flex justify-between">
                  <div className="flex justify-around w-full">
                  {product?.store.store_image && (
                    <img 
                      src={constructImageUrl(product.store.store_image)} 
                      alt={product.store.store_name}
                      className="w-16 h-16 rounded-full"
                    />
                  )}
                    <div className="">
                      <div className="">{product?.store.store_name}</div>
                      <div className="flex items-center gap-1">
                        <FaRegStar />
                        4.9 (6,8rb)
                      </div>
                      <div className="flex items-center gap-1">
                        <CiClock1 /> diproses dalam 5 jam
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <button className="px-10 justify-center items-center bg-white h-10 border border-green-600 rounded-xl text-green-600 text-base font-bold">Follow</button>
                  </div>
                </div>
              </div>
            </div>

          <div className="sticky top-40 self-start">
            <div className="max-w-xs min-w-fit min-h-fit bg-white border border-solid border-gray-300 p-3 rounded-md ">
              <div className="border-b-2 border-gray-400 my-2">
                <div className="text-base font-bold my-3">Atur Jumlah dan Catatan</div>
                <div className="my-4 text-xs">Samsung S24, Silver 512GB</div>  
              </div>
              <div className="flex gap-3 my-4">
                <div className="flex w-fit p-1 m-1 border-solid border-2 border-gray-200 rounded-md">
                  <button><div onClick={decreaseQuantity} className="mx-1 content-center">-</div></button>
                  <input 
                  type="text" 
                  value={quantity}
                  onChange={handleQuantityChange}
                  className=" mx-3 content-center text-center w-3 border-none focus:outline-none"
                  />
                  <button><div onClick={increaseQuantity} className="mx-1 content-center">+</div></button>
                </div>
                <div className="content-center text-xs">Stok Total : <span>Sisa 2</span></div>
              </div>
              <div className="content-center my-2 text-green-600">
                {!addNote && (<button 
                onClick={() => setAddNote(true)} 
                className={`${addNote  === false? "block":"hidden"} flex items-center text-sm`}>
                  <LuPen className="mr-2" />
                  Tambah Catatan
                </button>
                )}
              </div>
              {addNote && (
              <div className=" my-4 justify-between">
                <div className="block  content-center">
                  <textarea 
                    className="border border-green-600 p-2 rounded-md max-w-xs whitespace-nowrap overflow-hidden max-h-10 resize-none focus:outline-none" 
                    placeholder="Berikan catatan" name="" id="">
                  </textarea>
                </div>
                <button 
                  onClick={() => setAddNote(false)}
                  className="text-sm text-green-600">
                    Batalkan Catatan
                </button>
              </div>
              )}
              <div className="flex my-4 justify-between ">
                <div className="text-sm content-center">Subtotal</div>
                <div className="text-base font-bold">Rp6.000.000</div>
              </div>
              <a href="/Cart"  className="flex my-3 w-full justify-center items-center bgPrimaryColor h-10 rounded-md text-white text-base font-bold">+ Keranjang</a>
              <div className="flex my-3 w-full justify-center items-center bg-white h-10 border border-green-600 rounded-md text-green-600 text-base font-bold">Beli</div>
              <div className="my-2 flex justify-around">
                <button className="w-full mx-2">
                  <div className="flex items-center justify-center gap-2">
                    <div className="">
                    <CiHeart />
                    </div>
                    <p>Whistlist</p>
                  </div>
                </button>
                <div className="border-r-2 "></div>
                <button className="w-full">
                  <div className="flex items-center justify-center gap-2">
                    <div className="">
                      <IoShareSocialOutline /> 
                    </div>
                    <p>Share</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
