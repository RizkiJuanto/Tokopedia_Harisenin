import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Payment from "./pages/Payment";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </Router>
  );
};

export default App;
