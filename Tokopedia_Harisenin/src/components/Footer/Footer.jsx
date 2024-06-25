import React from 'react'
import PciLogo from '../../assets/img/pci-dss-complaint.png'
import IsoLogo from '../../assets/img/iso-bsi.png'
import gambarFooter from '../../assets/img/gambar-footer.png'
import gambar22 from '../../assets/img/22.png'
import gambar23 from '../../assets/img/23.png'
import huaweiAppLogo from '../../assets/img/Huawei app logo.png'
import { FaRegCopyright, FaFacebook, FaTwitter, FaPinterest, FaInstagram  } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='flex flex-col bottom-0 left-0 w-full mt-12 border-t-2 border-solid bg-[white] min-w-max max-w-full'>
      <div className="flex flex-col flex-wrap justify-center items-center max-h-96 mt-5 mr-36 mb-7 ml-36 max-w-screen-2xl">
        <div className="block p-0 mb-5 min-w-52 text-primary">
            <p className='pb-1 text-base font-bold'>Tokopedia</p>
            <ul className='text-sm'>
                <li className='pb-1'>Tentang Tokopedia</li>
                <li className='pb-1'>Hak Kekayaan Intelektual</li>
                <li className='pb-1'>Karir</li>
                <li className='pb-1'>Blog</li>
                <li className='pb-1'>Tokopedia Parents</li>
                <li className='pb-1'>Tokopedia Affiliate Program</li>
                <li className='pb-1'>Tokopedia B2B Digital</li>
                <li className='pb-1'>Tokopedia Marketing Solution</li>
                <li className='pb-1'>Kalkulator Index Masa Tubuh</li>
                <li className='pb-1'>Tokopedia Farma</li>
                <li className='pb-1'>Ramhadan Ekstra Seru</li>
                <li className='pb-1'>Home Living Selebration</li>
            </ul>
        </div>
        <div className="block p-0 mb-5 min-w-52 text-primary">
            <p className='font-bold'>Beli</p>
            <ul className="text-sm">
                <li className='pb-1'>Tagihan & Top Up</li>
                <li className='pb-1'>Tokopedia COD</li>
                <li className='pb-1'>Bebas Ongkir</li>
            </ul>
        </div>
        <div className="block p-0 mb-5 min-w-52 text-primary">
            <p className='font-bold'>Jual</p>
            <ul className="text-sm">
                <li className='pb-1'>Pusat Edukasi Seller</li>
                <li className='pb-1'>Daftar Official Store</li>
            </ul>
        </div>
        <div className="block p-0 mb-5 min-w-52 text-primary">
            <p className='font-bold'>Bantuan dan Panduan</p>
            <ul className="text-sm">
                <li className='pb-1'>Tokopedia Care</li>
                <li className='pb-1'>Syarat dan Ketentuan</li>
                <li className='pb-1'>Kebijakan Privasi</li>
            </ul>
        </div>
        <div className="block p-0 mb-5 min-w-52 text-primary">
            <p className='font-bold'>Keamanan dan Privasi</p>
            <ul className="flex flex-wrap ">
                <li><img className='h-5 w-13 pr-3' src={PciLogo} alt="" /></li>
                <li><img className='h-5 w-13 pr-3' src={IsoLogo} alt="" /></li>
                <li><img className='h-5 w-13 pr-3' src={IsoLogo} alt="" /></li>
            </ul>
        </div>
        <div className="block p-0 mb-5 min-w-52 text-primary">
            <p className='font-bold'>Ikuti Kami</p>
            <ul className="flex flex-wrap">
                <li><a href=""><FaFacebook style={{ color: 'blue' }} className='pr-3 text-4xl'/></a></li>
                <li><a href=""><FaTwitter style={{ color: 'lightblue' }}className='pr-3 text-4xl'/></a></li>
                <li><a href=""><FaPinterest style={{ color: 'red' }}className='pr-3 text-4xl'/></a></li>
                <li><a href=""><FaInstagram style={{ color: 'pink' }}className='pr-3 text-4xl'/></a></li>
            </ul>
        </div>
        <div className="w-80">
            <div className="mb-3">
                <img className='w-full h-full mb-1' src={gambarFooter} alt="" />
            </div>
            <div className="flex flex-wrap justify-around w-full h-14 item-center content-center">
                <div className="footerContentOSand">
                    <img className='h-10 w-24' src={gambar22} alt="Download Tokopedia dari Google Play Store"/>
                </div>
                <div className="footerContentOSios">
                    <img className='h-10 w-24' src={gambar23} alt="Download Tokopedia dari Apps Store" />
                </div>
                <div className="footerContentOshua">
                    <img className='h-10 w-24' src={huaweiAppLogo} alt="Download Tokopedia dari Huawei Gallery" />
                </div>
            </div>
            <div className="p-2 items-center content-center">
                <p className='flex items-center justify-center mb-2 text-primary'><FaRegCopyright className='pr-1 text-primary'/> 2009-2024,HariSenin Group 3B</p>
            </div>
            <div className="flex justify-around items-center content-center w-full h-14">
                <button className='h-full w-full text-2xl font-bold bg-white text-primary' type='button'>Indonesia</button>
                <button className='h-full w-full text-2xl font-bold bgPrimaryColor text-[white]' type='button'>English</button>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
