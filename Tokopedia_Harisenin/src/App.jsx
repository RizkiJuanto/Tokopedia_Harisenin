import './App.css'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Header from './components/Header';
import Footer from './components/Footer';
import CardProduct from './components/CardProduct';
import Home from './pages/Home';
import TrendingItemCard from './components/TrendingItemCard';
import KategoriBottomCard from './components/KategoriBottomCard';
import KategoriCard from './components/KategoriCard';


export const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} />
        <Route path="/" element={<Register />} /> */}
        {/* <Route path="/" element={<Header />} /> */}
        {/* <Route path="/" element={<Footer />} /> */}
        {/* <Route path="/" element={<CardProduct />} /> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<TrendingItemCard />} /> */}
        {/* <Route path="/" element={<KategoriBottomCard />} /> */}
        {/* <Route path="/" element={<KategoriCard />} /> */}
      </Routes>
    </Router>
  )
} 

export default App
