import React,{useEffect, useState} from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import GambarMouse from "../../assets/img/Mouse.jpg";
import divs from "../AlamatDummy.js"
import PilihAlamatModal from "../Modal/PilihAlamatModal.jsx";
import { IoIosArrowDown } from "react-icons/io";

const PaymentItem = () => {
    const [openModal,setOpenModal] = useState(false); 
    const [selectedAddress, setSelectedAddress] = useState(0);
    const [data,setData] = useState(divs[0]);
    const handleSelectAddress = (id) => {
        const findData = divs.find((item)=> item.id === id)
        if(findData) setData(findData);
        setSelectedAddress(id);
        setOpenModal(false);
    };

return (
    <div className="block">
        <div className="bg-white my-3 py-3 px-5 flex justify-between items-center rounded-xl ">
            <div className="">
                <div className="text-xl py-2 font-bold text-gray-500">Alamat Pengiriman</div>
                <div className="py-2">
                    <div className="items-center ">
                        <div className="flex items-center gap-1"><FaLocationDot className="text-sm justify-center text-green-600 "/> <span>{data?.title}</span><GoDotFill className="text-xs"/><span>{data?.name}</span></div>
                    </div>
                    <div className="">{data?.address}{", "}{data?.phone}</div>
                </div>
                <div className="mt-2">
                    <button
                    onClick={()=> setOpenModal(true)}
                    className="border-2 border-gray-300 rounded-md py-1 px-2 text-sm font-bold text-gray-500 ">Pilih Alamat</button>
                    <PilihAlamatModal
                        isOpen={openModal}
                        onClose={()=> setOpenModal(false)}
                        addresses={divs}
                        onSelectedAddress={handleSelectAddress}
                    />
                </div>
            </div>
        </div>
        <div className="bg-white rounded-xl pb-3 pt-1">
            <div className="flex gap-5 my-3 py-1 px-5">
                
                <div className="font-bold">Nama Toko</div>
            </div>
            <div className="flex gap-5 my-3 py-3 px-5">
                <div className="flex gap-5">
                    <div className="">
                        <img className="w-32 h-auto" src={GambarMouse} alt="" />
                    </div>
                </div>
                <div className="block w-full">
                    <div className="flex items-center justify-between ">
                        <div className="block">
                            <div className="">
                                AJAZZ AJ199 GAMING MOUSE DUAL MODE WIRELESS LIGHT{" "}
                            </div>
                            <div className="">Hitam</div>
                        </div>
                        <div className="flex font-bold">
                            <div className="">Rp</div>
                            <div className="">599.000</div>
                        </div>
                    </div>
                    <div className="w-full flex border rounded-md text-sm font-bold border-gray-300 py-2 px-3 mt-2">
                        <div className="w-full">
                            <div className="">Pilih Pengiriman</div>
                        </div>
                        <div className="items-center content-center"><IoIosArrowDown /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default PaymentItem;
