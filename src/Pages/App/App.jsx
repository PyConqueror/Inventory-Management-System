import { Routes, Route } from 'react-router-dom'
import ProductPage from '../ProductPage/ProductPage'
import CreateProductPage from '../ProductPage/CreateProduct'
import ProductInfoPage from '../ProductPage/ProductInfo'
import EditProductPage from '../ProductPage/EditProduct'
import Navbar from '../../Components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<ProductPage/>} exact/>
        <Route path="/add-product" element={<CreateProductPage />} />
        <Route path="/product-info/:productID" element={<ProductInfoPage />} />
        <Route path="/edit-product/:productID" element={<EditProductPage />} />
      </Routes>
    </>
  )
}

export default App
