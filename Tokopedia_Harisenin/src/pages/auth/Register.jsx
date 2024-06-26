import React from "react";
import { FaRegCopyright } from "react-icons/fa6";

const Register = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center bg-white">
      <div className="bg-white rounded-md p-8 shadow-lg">
        <div className="flex flex-col items-center justify-center mb-8 mt-6">
          <h1 className="font-bold text-3xl">Daftar Sekarang</h1>
          <p className="p-1">
            Sudah punya akun Tokopedia?{" "}
            <span className="primaryColor">Masuk</span>{" "}
          </p>
        </div>
        <form action="">
          <div className="flex flex-col">
            <input
              className="w-96 p-3 border-2 border-gray-300 rounded-md"
              type="email"
              placeholder="Nomor HP atau Email"
            />
            <label className="text-gray-500 mt-2 text-sm" htmlFor="">
              Contoh: email@tokopedia.com
            </label>
          </div>
          <button className="w-96 p-3 bg-gray-200 rounded-md mt-8 text-gray-400 font-semibold">
            Daftar
          </button>
        </form>
        <div className="flex flex-col items-center justify-center mt-4 text-sm">
          <p>Dengan mendaftar, saya menyetujui</p>
          <p>
            <span className="primaryColor font-semibold">
              Syarat & Ketentuan
            </span>{" "}
            serta{" "}
            <span className="primaryColor font-semibold">
              Kebijakan Privasi Tokopedia.
            </span>{" "}
          </p>
        </div>
      </div>
      <p className="mt-32 text-gray-500 flex items-center">
        <FaRegCopyright className="mr-2" /> 2009-2024, PT Tokopedia
        <span className="primaryColor font-semibold ml-3">Tokopedia Care</span>
      </p>
    </div>
  );
};

export default Register;
