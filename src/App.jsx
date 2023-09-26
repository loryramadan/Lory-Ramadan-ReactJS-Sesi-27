import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './components/Cart'
function App() {

  return (
      <BrowserRouter>
      <div>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
      </Routes>
      </div>
      </BrowserRouter>
  )
}

export default App
