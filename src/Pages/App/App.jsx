import { Routes, Route } from 'react-router-dom'
import ProductPage from '../ProductPage/ProductPage'
import CreateProductPage from '../ProductPage/CreateProduct'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<ProductPage/>} exact/>
        <Route path="/add-product" element={<CreateProductPage />} />
      </Routes>
    </>
  )
}

export default App
