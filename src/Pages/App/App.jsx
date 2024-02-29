import { Routes, Route } from 'react-router-dom'
import ProductPage from '../ProductPage/ProductPage'
import CreateProductPage from '../ProductPage/CreateProduct'
import ProductInfoPage from '../ProductPage/ProductInfo'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<ProductPage/>} exact/>
        <Route path="/add-product" element={<CreateProductPage />} />
        <Route path="/product-info/:productID" element={<ProductInfoPage />} />
      </Routes>
    </>
  )
}

export default App
