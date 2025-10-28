import React from 'react';
import { Product } from '../types/Product';
import { formatPrice } from '../utils/formatPrice';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const isLowStock = product.stock < 5;
  const isOutOfStock = product.stock === 0;

  const handleAddToCart = () => {
    if (!isOutOfStock) {
      onAddToCart(product);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <span className="category-badge">{product.category}</span>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-footer">
          <div className="price-stock">
            <span className="product-price">{formatPrice(product.price)}</span>
            <span className={`stock-badge ${isLowStock ? 'low' : ''}`}>
              Stock: {product.stock}
            </span>
          </div>
          
          <button 
            className={`btn-add-cart ${isOutOfStock ? 'disabled' : ''}`}
            onClick={handleAddToCart}
            disabled={isOutOfStock}
          >
            {isOutOfStock ? 'Sin Stock' : 'Agregar'}
          </button>
        </div>
      </div>
    </div>
  );
};
