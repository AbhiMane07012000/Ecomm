import { Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Products from './Pages/Products/Products'
import Contact from './Pages/Contact/Contact'
import User from './Pages/User/User'
import Cart from './Pages/Cart/Cart'
import Header from './components/Header/Header'

function App() {
 

  return (
    <>
      <Header/>
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/sign-in'  element={<Login />} />
          <Route path='/sign-up'  element={<Register />} />
          <Route path="/products" element={<Products/>} />
          <Route  path='/contact' element={<Contact />}/>
          <Route path='/user_profile' element={<User />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
    
    </>
  )
}

export default App
