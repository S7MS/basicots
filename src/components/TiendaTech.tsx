import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Header } from './Header';
import { ProductList } from './ProductList';
import { ShoppingCart } from './ShoppingCart';
import { Product, CartItem } from '../types/Product';
import { products } from '../data/products';

const TiendaTech: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div>
      <Header 
        cartItemCount={getTotalItems()}
        onCartClick={() => setShowCart(!showCart)}
      />
      
      <Container className="mt-4">
        {!showCart ? (
          <ProductList 
            products={products}
            onAddToCart={addToCart}
          />
        ) : (
          <ShoppingCart
            cartItems={cart}
            onRemoveFromCart={removeFromCart}
            onUpdateQuantity={updateQuantity}
            isOpen={showCart}
            onClose={() => setShowCart(false)}
          />
        )}
      </Container>
    </div>
  );
};

export default TiendaTech;