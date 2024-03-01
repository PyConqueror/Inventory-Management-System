import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductPage from '../ProductPage/ProductPage'
import CreateProductPage from '../ProductPage/CreateProduct'
import ProductInfoPage from '../ProductPage/ProductInfo'
import EditProductPage from '../ProductPage/EditProduct'
import Navbar from '../../Components/Navbar'
import AuthPage from '../AuthPage/AuthPage'
import { getUser } from '../../API Services/userServices'

function App() {
  const [user, setUser] = useState(getUser)

  return (
    <main>
    { user ?
    <>
    <Navbar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/' element={<ProductPage/>} exact/>
        <Route path="/add-product" element={<CreateProductPage />} />
        <Route path="/product-info/:productID" element={<ProductInfoPage user={user} />} />
        <Route path="/edit-product/:productID" element={<EditProductPage />} />
      </Routes>
    </>
      :
      <AuthPage setUser={setUser}/>
      }
    </main>
  )
}

export default App
