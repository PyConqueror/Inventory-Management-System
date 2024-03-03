import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as productServices from '../../API Services/productServices';
import { Link } from 'react-router-dom';
 

function ProductInfoPage({user}) {
  const [product, setProduct] = useState(null);
  const { productID } = useParams();

  useEffect(() => {
    fetchProduct();
  }, [productID]);

  async function fetchProduct() {
    const response = await productServices.getProductInfo(productID);
    setProduct(response.data);
}

  if (!product) {
    return <div>Loading product information...</div>;
}

if (user.accountType === 'admin') {
  return (
    <div className="product-info-container">
      <h1>Product Information</h1>
      <img className='product-image'
      src='https://media.istockphoto.com/id/470206426/vector/vector-icons-on-white-background.jpg?s=612x612&w=0&k=20&c=_QDtVsAKWvB7PLzSoWI-fuNCLj8vEDlejHYKx4Z38u4='/>
      <p><strong>Item Name:</strong> {product.itemName}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Stock Quantity:</strong> {product.stockQuantity}</p>
      <p><strong>Supplier ID:</strong> {product.supplier.name}</p>
      <Link to={`/edit-product/${product._id}`}>Edit</Link>
    </div>
  );
}

return (
  <div className="product-info-container">
    <h1>Product Information</h1>
    <img className='product-image'
      src='https://media.istockphoto.com/id/470206426/vector/vector-icons-on-white-background.jpg?s=612x612&w=0&k=20&c=_QDtVsAKWvB7PLzSoWI-fuNCLj8vEDlejHYKx4Z38u4='/>
    <p><strong>Item Name:</strong> {product.itemName}</p>
    <p><strong>Description:</strong> {product.description}</p>
    <p><strong>Stock Quantity:</strong> {product.stockQuantity}</p>
    <p><strong>Supplier ID:</strong> {product.supplier.name}</p>
  </div>
);
}

export default ProductInfoPage;
