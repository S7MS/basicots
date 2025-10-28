import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { ShoppingCart } from './components/ShoppingCart';
import { Product, CartItem } from './types/Product';
import { products } from './data/products';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      if (existingItem.quantity < product.stock) {
        setCartItems(cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      }
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) {
      handleRemoveFromCart(id);
      return;
    }

    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.min(quantity, item.stock) } : item
    ));
  };

  const getTotalItems = (): number => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="App">
      <Header 
        cartItemCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main className="main-content">
        <div className="container">
          <h2 className="section-title">Nuestros Productos</h2>
          <ProductList 
            products={products}
            onAddToCart={handleAddToCart}
          />
        </div>
      </main>

      <ShoppingCart
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
}

export default App;
