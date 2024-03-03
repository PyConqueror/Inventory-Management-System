import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductPage from '../ProductPage/ProductPage'
import CreateProductPage from '../ProductPage/CreateProduct'
import ProductInfoPage from '../ProductPage/ProductInfo'
import EditProductPage from '../ProductPage/EditProduct'
import Navbar from '../../Components/Navbar'
import AuthPage from '../AuthPage/AuthPage'
import { getUser } from '../../API Services/userServices'
import { Navigate } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(getUser);

  return (
    <main>
      {user ? (
        <>
          <Navbar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<ProductPage user={user} />} />
            <Route path="/product-info/:productID" element={<ProductInfoPage user={user} />} />
            {user.accountType === 'admin' ? (
              <Route path="/add-product" element={<CreateProductPage />} />
            ) : (
              <Route path="/add-product" element={<Navigate replace to="/" />} />
            )}
            {user.accountType === 'admin' ? (
              <Route path="/edit-product/:productID" element={<EditProductPage />} />
            ) : (
              <Route path="/edit-product/:productID" element={<Navigate replace to="/" />} />
            )}
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}


export default App
