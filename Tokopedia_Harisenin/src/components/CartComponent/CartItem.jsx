import React from 'react'
import { MdOutlineNoteAlt } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import GambarMouse from "../../assets/img/Mouse.jpg"

const CartItem = () => {
  return (
    <div className="block">
        <div className="bg-white my-3 py-3 px-5 flex justify-between items-center rounded-xl ">
                        <div className="flex gap-5">
                            <div className=""><input type="checkbox"/></div>
                            <div className="font-bold">Pilih Semua <span>(1)</span></div>
                        </div>
                        <div className="primaryColor font-semibold">Hapus</div>
                    </div>
                    <div className="bg-white rounded-xl">
                        <div className="flex gap-5 my-3 py-3 px-5">
                            <div className=""><input type="checkbox" /></div>
                            <div className="font-bold">Nama Toko</div>
                        </div>
                        <div className="flex gap-5 my-3 py-3 px-5">
                            <div className="flex gap-5">
                                <div className=""><input type="checkbox" /></div>
                                <div className=""><img className='w-32 h-auto' src={GambarMouse} alt="" /></div>
                            </div>
                            <div className="block w-full">
                                <div className="flex items-center justify-between ">
                                    <div className="block">
                                        <div className="">AJAZZ AJ199 GAMING MOUSE DUAL MODE WIRELESS LIGHT </div>
                                        <div className="">Hitam</div>
                                    </div>
                                    <div className="flex font-bold">
                                        <div className="">Rp</div>
                                        <div className="">599.000</div>
                                    </div>
                                </div>
                                <div className="flex justify-end gap-3 my-2 bottom-0">
                                    <div className=""><MdOutlineNoteAlt className='text-2xl'/></div>
                                    <div className=""><CiHeart className='text-2xl'/></div>
                                    <div className=""><MdOutlineDelete className='text-2xl'/></div>
                                    <div className="flex border-solid border-[black] border px-2 rounded justify-end">
                                        <div className=""><button>-</button></div>
                                        <div className="w-7 mx-1"><input className='w-full' type="text" /></div>
                                        <div className=""><button>+</button></div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default CartItem
