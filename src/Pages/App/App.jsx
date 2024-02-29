import { Routes, Route } from 'react-router-dom'
import ProductPage from '../ProductPage/ProductPage'
import CreateProductPage from '../ProductPage/CreateProduct'
import ProductInfoPage from '../ProductPage/ProductInfo'
import EditProductPage from '../ProductPage/EditProduct'

function App() {

  return (
    <>
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
