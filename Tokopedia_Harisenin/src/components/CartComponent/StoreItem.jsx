import React,  { useEffect,useState }  from 'react'
import { MdEditNote  } from "react-icons/md";
import { FaRegHeart,FaHeart } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import GambarMouse from "../../assets/img/Mouse.jpg";

const StoreItem = ({onTotalChange}) => {
    const [quantity, setQuantity] = useState(1);
    const [isLiked,setIsLiked] = useState(false);
    const [isDropDownOpen,setDropDownOpen] = useState(false);
    const [text,setText] = useState("");
    const maxCharacters = 144;
    const price = 599000;

    useEffect(()=>{
        onTotalChange(quantity,price);
    },[quantity,price,onTotalChange]);

    const increaseQuantity = () => {
        setQuantity(quantity+1);
      };
    
      const decreaseQuantity = () => {
        if(quantity > 1){
          setQuantity(quantity-1);
        }
      };
    
      const toggleLike = () =>{
        setIsLiked(!isLiked);
      }
    
      const toggleDropDown = () =>{
        setDropDownOpen(!isDropDownOpen);
      }
    
      const handleTextChange = (e) => {
        if (e.target.value.length <= maxCharacters) {
          setText(e.target.value);
        }
      };
    
      const handleQuantityChange = (e) => {
        const value = e.target.value;
        if(value === ''|| (Number(value)>0 && Number.isInteger(Number(value)))) {
          setQuantity(Number(value));
        }
      }
  return (
    <div className="flex gap-5 my-3 py-3 px-5">
          <div className="flex gap-5">
            <div className="">
              <input type="checkbox" />
            </div>
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
            <div className="flex justify-end gap-3 my-2 bottom-0">
              <div className="">
                <MdEditNote onClick={toggleDropDown} className="border-2 border-gray-500 text-gray-500 rounded text-2xl" />
                {isDropDownOpen &&(
                  <div className="absolute right-96 mt-2 mr-16 w-96 bg-white border border-gray-300 rounded shadow-lg">
                  <div className="p-3">
                    <div className="text-xl font-bold">Catatan Produk</div>
                    <div className=" border rounded-md overflow-hidden min-w-full ">
                      <textarea 
                      value={text}
                      onChange={handleTextChange} 
                      maxLength={maxCharacters} 
                      className="resize-none focus:outline-none p-3 w-full" placeholder="Pastikan tidak ada data pribadi, ya." name="" id=""></textarea>
                      <div className="text-right text-gray-600">
                        {maxCharacters - text.length} characters remaining
                      </div>
                    </div>
                    <div className="w-full flex justify-around items-center content-center p-3 gap-2">
                      <button 
                      onClick={toggleDropDown}
                      className="w-full p-2 border rounded-md border-gray-300 text-lg font-semibold ">Batal</button>
                      <button 
                      onClick={toggleDropDown}
                      className="bg-green-500 w-full p-2 rounded-md text-white text-lg font-semibold">Simpan</button>
                    </div>
                  </div>
                </div>
                )}
              </div>
              <div className="">
                {isLiked ? (
                  <FaHeart onClick={toggleLike} className="text-red-600 text-2xl"/>) 
                  : <FaRegHeart onClick={toggleLike} className="text-gray-500 text-2xl"/>}
              </div>
              <div className="">
                <MdOutlineDelete className="text-gray-500 text-2xl" />
              </div>
              <div className="flex border-solid border-[black] border px-2 rounded justify-end">
                <div className="">
                  <button
                  onClick={decreaseQuantity}>-</button>
                </div>
                <div className="w-7 mx-1">
                  <input 
                  type="text" 
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="mx-3 content-center text-center w-3 border-none focus:outline-none" />
                </div>
                <div className="">
                  <button 
                  onClick={increaseQuantity}>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default StoreItem
