import React from 'react';
import './Header.css';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">[CART]</span>
          <h1>Tienda Tech</h1>
        </div>
        
        <button className="cart-button" onClick={onCartClick}>
          <span className="cart-icon">[BAG]</span>
          <span className="cart-text">Carrito</span>
          {cartItemCount > 0 && (
            <span className="cart-badge">{cartItemCount}</span>
          )}
        </button>
      </div>
    </header>
  );
};
