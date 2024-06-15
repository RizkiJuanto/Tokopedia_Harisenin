import './App.css'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Header from './components/Header';


export const App = () => {

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Register />} />
        {/* <Route path="/" element={<Login />} />
        <Route path="/" element={<Register />} /> */}
        <Route path="/" element={<Header />} />
      </Routes>
    </Router>
  )
}

export default App
