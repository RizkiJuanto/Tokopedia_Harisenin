import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa6";
import axiosInstance from "../../axiosInstance";

const Register = () => {
  const [customer_email, setEmail] = useState("");
  const [customer_password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    setIsButtonDisabled(value === "" || customer_password === "");
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    setIsButtonDisabled(customer_email === "" || value === ""); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newCustomer = { customer_email, customer_password }
      const response = await axiosInstance.post("http://localhost:8000/api/customers", newCustomer);
      console.log("Customer registered:", response.data);
      navigate('/login')
    } catch (error) {
      console.error("Error registering customer:", error);
    }
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center bg-white">
      <div className="bg-white rounded-md p-8 shadow-lg">
        <div className="flex flex-col items-center justify-center mb-8 mt-6">
          <h1 className="font-bold text-3xl">Daftar Sekarang</h1>
          <p className="p-1">
            Sudah punya akun Tokopedia?{" "}
            <a className="primaryColor">
              <Link to="/login">Masuk</Link>
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <input
              className="w-96 p-3 border-2 border-gray-300 rounded-md"
              type="email"
              placeholder="Nomor HP atau Email"
              value={customer_email}
              onChange={handleEmailChange}
              required
            />
            <label className="text-gray-500 mt-2 text-sm" htmlFor="">
              Contoh: email@tokopedia.com
            </label>
          </div>
          <div className="flex flex-col mt-4">
            <input
              className="w-96 p-3 border-2 border-gray-300 rounded-md"
              type="password"
              placeholder="Password"
              value={customer_password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-96 p-3 rounded-md mt-8 text-white font-semibold ${
              isButtonDisabled ? "bg-gray-300" : "bg-green-500"
            }`}
            disabled={isButtonDisabled}
          >
            Daftar
          </button>
        </form>
        <div className="flex flex-col items-center justify-center mt-4 text-sm">
          <p>Dengan mendaftar, saya menyetujui</p>
          <p>
            <a href="">
              <span className="primaryColor font-semibold">
                Syarat & Ketentuan
              </span>
            </a>{" "}
            serta{" "}
            <a href="">
              <span className="primaryColor font-semibold">
                Kebijakan Privasi Tokopedia.
              </span>
            </a>{" "}
          </p>
        </div>
      </div>
      <p className="mt-32 text-gray-500 flex items-center">
        <FaRegCopyright className="mr-2" /> 2009-2024, PT Tokopedia
        <a href="">
          <span className="primaryColor font-semibold ml-3">
            Tokopedia Care
          </span>
        </a>
      </p>
    </div>
  );
};

export default Register;
