import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosInstance";

const Login = () => {
  const [customer_email, setEmail] = useState("");
  const [customer_password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [error, setError] = useState(null);
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
      const response = await axiosInstance.post(
        "http://localhost:8000/api/customers/login",
        {
          customer_email,
          customer_password,
        }
      );
      const { token } = response.data;
      localStorage.setItem("token", token);
 
      navigate("/");
    } catch (error) {
      setError(error.response.data.message || "An error occurred");
    }
  };

  return (
    <div className="h-[100vh] flex justify-center items-center bg-white">
      <div className="bg-white rounded-md p-8 shadow-lg">
        <div className="flex justify-between mb-10 mt-6">
          <h1 className="font-bold text-4xl">Masuk</h1>
          <p className="primaryColor pt-3">
            <Link to="/register">Daftar</Link>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <input
              className="w-96 p-3 border-2 border-gray-300 rounded-md"
              type="email"
              placeholder="Email"
              value={customer_email}
              onChange={handleEmailChange}
              required
            />
            <label className="text-gray-500 mt-2 text-sm" htmlFor="">
              Contoh: 08123456789
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
          <p className="primaryColor mt-6 ">Butuh bantuan?</p>
          <button
            type="submit"
            className={`w-96 p-3 rounded-md mt-8 text-white font-semibold ${
              isButtonDisabled ? "bg-gray-300" : "bg-green-500"
            }`}
            disabled={isButtonDisabled}
          >
            Lanjut
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
