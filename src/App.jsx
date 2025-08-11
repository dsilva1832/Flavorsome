import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Landing from "./pages/Landing"
import Menu from "./pages/Menu"
import Order from "./pages/Order"

function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
