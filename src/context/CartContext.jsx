import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("noire-cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("noire-cart", JSON.stringify(cart));
  }, [cart]);

  // Add product to cart
  const addToCart = (product, quantity = 1, size = "") => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === product.id && item.size === size,
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id && item.size === size
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity,
          size,
        },
      ];
    });
  };

  // Remove product
  const removeFromCart = (productId, size) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => !(item.id === productId && item.size === size),
      ),
    );
  };

  // Increase quantity
  const increaseQuantity = (productId, size) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId && item.size === size
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  // Decrease quantity
  const decreaseQuantity = (productId, size) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId && item.size === size
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  // Empty cart
  const clearCart = () => {
    setCart([]);
  };

  // Total number of items
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Total price
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
