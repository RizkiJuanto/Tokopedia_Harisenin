import React, { useState } from 'react'
import SelengkapnyaModal from '../Modal/SelengkapnyaModal'

const ImportantInfo = () => {

  const [openModal,setOpenModal] = useState(false);
  const [modalTitle,setModalTitle] = useState('');
  const openModalWtihTitleSection = (title) => {
    setOpenModal(true);
    setModalTitle(title);
  }

  const sections =[
    {
      title:"Jam Pengiriman Barang",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, labore aut nulla voluptate distinctio a corrupti ex placeat cupiditate qui rerum recusandae,necessitatibus."
    },
    {
      title:"Jam Aktif Toko",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, labore aut nulla voluptate distinctio a corrupti ex placeat cupiditate qui rerum recusandae, soluta."
    },
    {
      title:"Warranty Product",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, labore aut nulla voluptate distinctio a corrupti ex placeat cupiditate qui rerum recusanda."
    }
  ]
  return (
    <div>
      {sections.map((section)=> (
        <div key={section.title} className="my-3">
          <div className="text-base font-bold">{section.title}</div>
          <div className="text-sm">{section.content}</div>
          <button 
          onClick={()=> openModalWtihTitleSection(section.title)}
          className="text-green-600 font-semibold">Selengkapnya</button>
          <SelengkapnyaModal 
          isOpen={openModal}
          onClose={()=>setOpenModal(false)}
          sections={sections}/>
        </div>
      ))}
    </div>
  )
}

export default ImportantInfo
