import React from 'react'
import { CiMobile3 } from "react-icons/ci";

const KategoriBottomCard = () => {
  return (
    <div className="kategoriBottomContent flex flex-row flex-wrap py-0 px-6 h-full rounded-2xl border border-solid border-[#e5e7e9] items-center justify-center">
        <div className="kategoriIcon mr-3">
            <CiMobile3 className='text-2xl text-[blue]'/>
        </div>
        <span className='kategoriLabel text-sm'>Elektronik</span>
    </div>
  )
}

export default KategoriBottomCard
