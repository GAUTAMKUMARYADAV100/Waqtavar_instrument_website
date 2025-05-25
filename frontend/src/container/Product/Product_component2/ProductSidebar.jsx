import React from 'react';
import './ProductSidebar.css';

const ProductSidebar = ({ products, onSelectProduct, selectedProduct }) => {
  return (
    <div className="product-sidebar">
      <h3>Our Products</h3>
      <ul className="product-list">
        {products.map((product, index) => (
          <li
            key={index}
            className={`product-item ${selectedProduct.id === product.id ? 'active' : ''}`}
            onClick={() => onSelectProduct(product)}
          >
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSidebar;
