import React, { useState } from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product }) => {
  const [selectedSubId, setSelectedSubId] = useState(null);

  if (!product) return <p>No product selected.</p>;

  const selectedSub = product.subcategories.find(s => s.id === selectedSubId);

  const handleGetQuotation = (sub) => {
    const message = `Quotaion from website:-Hello, I am interested in the product "${sub.title}". Please send me a quotation.`;
    const phone = '919427445155'; // replace with your WhatsApp number like '919999999999'
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="product-details">
      <h2>{product.title}</h2>

      {selectedSub && (
        <div className="subcategory-details">
          <h3>{selectedSub.title}</h3>
          <img src={selectedSub.image} alt={selectedSub.title} loading="lazy" />
          <p>{selectedSub.description}</p>

          <h4>Features:</h4>
          <ul>
            {selectedSub.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>

          <h4>Application:</h4>
          <p>{selectedSub.application}</p>

          <button
            className="quotation-button"
            onClick={() => handleGetQuotation(selectedSub)}
          >
            Get Quotation via WhatsApp
          </button>
        </div>
      )}

      <div className="subcategory-grid">
        {product.subcategories
          .filter(sub => sub.id !== selectedSubId)
          .map(sub => (
            <div
              key={sub.id}
              className="subcategory-card"
              onClick={() => setSelectedSubId(sub.id)}
            >
              <img src={sub.image} alt={sub.title} loading="lazy" />
              <p>{sub.title}</p>
              <button
                className="quotation-button small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleGetQuotation(sub);
                }}
              >
                Get Quotation
              </button>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
