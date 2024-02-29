import productPage from '../../Components/ProductsTable'
import { Routes, Route } from 'react-router-dom'
import ProductPage from '../ProductPage/ProductPage'


function App() {

  return (
    <>
      <Routes>
        <Route path='/products' element={ProductPage} exact />

      </Routes>
    </>
  )
}

export default App
