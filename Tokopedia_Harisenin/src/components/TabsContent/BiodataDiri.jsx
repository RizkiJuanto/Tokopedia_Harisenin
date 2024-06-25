import React from 'react'

const BiodataDiri = () => {
  return (
    <div className='flex gap-6'>
      <div className="flex-row w-2/6">
        <div className="border rounded-md">
          <div className="p-5">
                <img
                className="h-2/6 w-full object-cover"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                />
          </div>
          <div className="border border-gray-400 mx-5 p-2 font-semibold text-sm text-center rounded-md">
            <p>Pilih Foto</p>
          </div>
          <p className='text-xs mx-5 my-4'>Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</p>
        </div>
        <div className="font-semibold text-sm text-center">
          <div className="border border-gray-400 p-3 m-2 rounded-lg">
            <p>Ubah Kata Sandi</p>
          </div>
          <div className="border border-gray-400 p-3 m-2 rounded-lg">
            <p>PIN Tokopedia</p>
          </div>
          <div className="border border-gray-400 p-3 m-2 rounded-lg">
            <p>Verifikasi Instan</p>
          </div>
        </div>
      </div>
      <div className="flex-row mt-3">
        <h2 className="text-base font-semibold text-gray-700 mb-4">Ubah Biodata Diri</h2>
        <div className="text-sm text-gray-700">
          <div className="flex mb-6">
            <p className="font-semibold mr-20">Nama</p>
            <p>John Doe</p>
          </div>
          <div className="flex mb-6">
            <p className="font-semibold mr-9">Tanggal lahir</p>
            <p>39 Desember 2040</p>
          </div>
          <div className="flex mb-6">
            <p className="font-semibold mr-8">Jenis Kelamin</p>
            <p>Laki-laki</p>
          </div>
        </div>
        <h2 className="text-base font-semibold text-gray-700 mb-4">Ubah Kontak</h2>
        <div className="text-sm text-gray-700">
          <div className="flex mb-6">
            <p className="font-semibold mr-20">Email</p>
            <p>JohnDoe@gmail.com</p>
          </div>
          <div className="flex mb-6">
            <p className="font-semibold mr-12">Nomor HP</p>
            <p>9993201432</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BiodataDiri