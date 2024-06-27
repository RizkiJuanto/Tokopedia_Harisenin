import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import GambarMouse from '../assets/img/Mouse.jpg'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { CiClock1 } from "react-icons/ci";
import { LuPencil } from "react-icons/lu";
import { GrNotes } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";

const ProductDetail = () => {
  return (
    <div className="bgBorderColor min-w-fit">
      <Header />
        <div className="mx-auto pt-40 flex gap-5 min-w-max max-w-max">
          <div className="max-w-xs">
            <div className="mb-4"><img className='w-96 h-96' src={GambarMouse} alt="" /></div>
            <div className="flex gap-4">
              <div className=""><img className='w-16 h-16' src={GambarMouse} alt="" /></div>
              <div className=""><img className='w-16 h-16' src={GambarMouse} alt="" /></div>
              <div className=""><img className='w-16 h-16' src={GambarMouse} alt="" /></div>
              <div className=""><img className='w-16 h-16' src={GambarMouse} alt="" /></div>
              <div className=""><img className='w-16 h-16' src={GambarMouse} alt="" /></div>
            </div>
          </div>
          <div className="max-w-screen-sm">
            <div className="block my-3">
              <div className="font-bold text-xl">Samsung Galaxy S22 8/256 GB Resmi SEIN Fullset Second Bekas Ori</div>
              <div className="flex gap-5">
                <div className="">Terjual <span>5</span></div>
                <div className="flex gap-2"><FaStar /> 4.9 <span>(<span>9</span>rating)</span></div>
                <div className="">Diskusi (<span>4</span>)</div>
              </div>
            </div>
            <div className="block my-3 text-2xl font-bold">Rp<span>6.000.000</span></div>
            <div className="">Detail</div>
            <div className="">
              <div className="">
                <div className="">
                  <div className="">Logo tk</div>
                  <div className="">Abun Store</div>
                </div>
                <div className=""><button>Follow</button></div>
              </div>
              <div className="">
                <div className=""><FaRegStar />4.9 (6,8rb)</div>
                <div className=""><CiClock1 /> diproses dalam 5 jam</div>
              </div>
            </div>
          </div>
          <div className="max-w-xs min-w-fit border-2 border-solid border-gray-400 p-3">
            <div className="border-b-2 border-gray-400">
              <div className="text-xl font-bold">Atur Jumlah dan Catatan</div>
              <div className="">Samsung S24, Silver 512GB</div>  
            </div>
            <div className="flex gap-3">
              <div className="flex w-fit p-1 m-1 border-solid border-2 border-gray-200 rounded-xl">
                <div className="mx-1 content-center">-</div>
                <div className="mx-5 content-center">1</div>
                <div className="mx-1 content-center">+</div>
              </div>
              <div className="content-center">Stok Total : <span>Sisa 2</span></div>
            </div>
            <div className=""><LuPencil />Tambah Catatan</div>
            <div className="">
              <div className="">Subtotal</div>
              <div className="">Rp<span>6.000.000</span></div>
            </div>
            <div className=""><button>+ Keranjang</button></div>
            <div className="">Beli Langsung</div>
            <div className="">
              <div className=""><GrNotes /> Chat</div>
              <div className=""><CiHeart /> Whistlist</div>
              <div className=""><IoShareSocialOutline/> Share</div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default ProductDetail