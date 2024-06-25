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
    <div className="">
      <Header />
        <div className="mx-auto pt-40 flex">
          <div className="">
            <div className="mb-4"><img className='w-96 h-96' src={GambarMouse} alt="" /></div>
            <div className="flex gap-4">
              <div className=""><img className='w-16 h-16' src={GambarMouse} alt="" /></div>
              <div className=""><img className='w-16 h-16' src={GambarMouse} alt="" /></div>
              <div className=""><img className='w-16 h-16' src={GambarMouse} alt="" /></div>
              <div className=""><img className='w-16 h-16' src={GambarMouse} alt="" /></div>
              <div className=""><img className='w-16 h-16' src={GambarMouse} alt="" /></div>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="">Samsung Galaxy S22 8/256 GB Resmi SEIN Fullset Second Bekas Ori</div>
              <div className="">
                <div className="">Terjual <span>5</span></div>
                <div className=""><FaStar /> 4.9 <span>(<span>9</span>rating)</span></div>
                <div className="">Diskusi (<span>4</span>)</div>
              </div>
            </div>
            <div className="">Rp<span>6.000.000</span></div>
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
          <div className="">
            <div className="">Atur Jumlah dan Catatan</div>
            <div className="">
              <div className="">
                <div className="">-</div>
                <div className="">1</div>
                <div className="">+</div>
              </div>
              <div className="">Stok Total : <span>Sisa 2</span></div>
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