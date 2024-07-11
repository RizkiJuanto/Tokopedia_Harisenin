import './App.css'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import TrendingItemCard from './components/HomeComponent/TrendingItemCard';
import KategoriBottomCard from './components/HomeComponent/KategoriBottomCard';
import KategoriCard from './components/HomeComponent/KategoriCard';
import Sidebar from './components/ProfileComponent/Sidebar';
import TabsMenu from './components/ProfileComponent/TabsMenu';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import CartIsEmpty from './components/CartComponent/CartIsEmpty';
import CartItem from './components/CartComponent/CartItem';
import ProductDetail from './pages/ProductDetail';
import Payment from './pages/Payment';
import PilihAlamatModal from './components/Modal/PilihAlamatModal';

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
        <Route path="/Payment" element={<Payment/>} />
      </Routes>
    </Router>
  )
} 

export default App
