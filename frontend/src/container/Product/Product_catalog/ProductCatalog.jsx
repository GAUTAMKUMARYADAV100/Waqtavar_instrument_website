import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../Product_component1/ProductDetails';
import ProductSidebar from '../Product_component2/ProductSidebar';
import './ProductCatalog.css';
import data from '../../../constants/data.js';

const { productData } = data;

const ProductCatalog = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(productData[0]);

  useEffect(() => {
    if (id) {
      const foundProduct = productData.find((product) => String(product.id) === String(id));
      if (foundProduct) {
        setSelectedProduct(foundProduct);
      } else {
        setSelectedProduct(productData[0]);
      }
    } else {
      setSelectedProduct(productData[0]);
    }
  }, [id]);


  return (
    <div className="product-page-container">
      <ProductSidebar
        products={productData}
        onSelectProduct={setSelectedProduct}
        selectedProduct={selectedProduct}
      />
      <ProductDetails product={selectedProduct} />
    </div>
  );
};

export default ProductCatalog;
