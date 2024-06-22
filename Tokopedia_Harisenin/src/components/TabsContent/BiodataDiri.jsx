import React from 'react'

const BiodataDiri = () => {
  return (
    <div className='flex'>
      <div className="flex-row">
        <div className="border">
          <div className="p-5">
                <img
                className="h-2/6 w-5/6 object-cover"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                />
          </div>
          <div className="border">
            <p>pilih foto</p>
          </div>
          <p>Besar file: maksimum 10.000.000 bytes (10 <br /> Megabytes). Ekstensi file yang <br /> diperbolehkan: .JPG .JPEG .PNG</p>
        </div>
        <div className="font-semibold">
          <div className="border p-3 m-2">
            <p>Ubah Kata Sandi</p>
          </div>
          <div className="border p-3 m-2">
            <p>PIN Tokopedia</p>
          </div>
          <div className="border p-3 m-2">
            <p>Verifikasi Instan</p>
          </div>
        </div>
      </div>
      <div className="flex-row">
        <p>Ubah biodata diri</p>
      </div>
    </div>
  )
}

export default BiodataDiri