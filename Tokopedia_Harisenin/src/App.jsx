import './App.css'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CardProduct from './components/HomeComponent/CardProduct';
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



export const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/" element={<Register />} /> */}
        {/* <Route path="/" element={<Header />} /> */}
        {/* <Route path="/" element={<Footer />} /> */}
        {/* <Route path="/" element={<CardProduct />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<Sidebar />} /> */}
        {/* <Route path="/" element={<TabsMenu />} /> */}
        {/* <Route path="/" element={<Profile />} /> */}
        {/* <Route path="/" element={<TrendingItemCard />} /> */}
        {/* <Route path="/" element={<KategoriBottomCard />} /> */}
        {/* <Route path="/" element={<KategoriCard />} /> */}
        {/* <Route path="/" element={<Cart />} /> */}
        {/* <Route path="/" element={<CartItem />} /> */}
        {/* <Route path="/" element={<CartIsEmpty />} /> */}
        <Route path="/" element={<ProductDetail/>} />
      </Routes>
    </Router>
  )
} 

export default App
