import React from 'react'

const Login = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-white">
      <div className='bg-white rounded-md p-8 shadow-lg'>
        <div className='flex justify-between mb-10 mt-6'>
          <h1 className='font-bold text-4xl'>Masuk</h1>
          <p className='primaryColor pt-3'>Daftar</p>
        </div>
        <form action="">
          <div className='flex flex-col'> 
            <input className='w-96 p-3 border-2 border-gray-300 rounded-md' type="email" placeholder="Nomor HP atau Email" />
            <label className="text-gray-500 mt-2 text-sm" htmlFor="">Contoh: 08123456789</label>
          </div>
          <p className='primaryColor mt-6 '>Butuh bantuan?</p>
          <button className='w-96 p-3 bg-gray-200 rounded-md mt-4 text-gray-400 font-semibold'>
            Lanjut
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login