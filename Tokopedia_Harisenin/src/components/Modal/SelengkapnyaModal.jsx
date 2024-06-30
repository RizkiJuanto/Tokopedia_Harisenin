import React, {useState} from 'react'
import Modal from 'react-modal';
import { IoMdClose } from "react-icons/io";

const SelengkapnyaModal =({ isOpen, onClose, sections}) => {
const [selectedSection,setSelectedSection] = useState(sections[0])
if (!isOpen) return null;

return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className="fixed inset-0 flex items-center justify-center z-50 "
        overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-75 z-40"
    >
        <div className="block bg-white w-full max-w-4xl rounded-xl p-5 ">
            <div className="flex">
                <div className="w-full text-2xl font-bold">Info Penting</div>
                <button 
                onClick={onClose}
                className='block'
                >
                    <IoMdClose className='text-xl font-bold'/>
                </button>
            </div>
            <div className="flex">
                <div className="w-80">
                    <div className="border border-gray-300 rounded p-3">
                        {sections.map((section,index)=> (
                        <button
                            key={index}
                            className={`py-2 px-4 text-left w-full ${selectedSection.title === section.title ? 'bg-gray-200 rounded' : ''}`}
                            onClick={() => setSelectedSection(section)}
                        >
                            {section.title}
                        </button>
                        ))}
                    </div>
                </div>
                <div className="w-full ">
                    <div className="text-center font-bold"
                    >{selectedSection.title}</div>
                    <textarea className="my-10  px-10 h-80 min-w-full resize-none focus:outline-none" id=""
                    value={selectedSection.content}>
                    </textarea>
                </div>
            </div>

        </div>
    </Modal>
);
};

export default SelengkapnyaModal
