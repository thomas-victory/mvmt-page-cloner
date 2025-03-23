
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/components/ProductCard';
import { toast } from '@/components/ui/use-toast';

interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity: number, selectedColor?: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  
  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('mvmt-cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart from localStorage');
      }
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('mvmt-cart', JSON.stringify(items));
  }, [items]);
  
  const addItem = (product: Product, quantity: number, selectedColor?: string) => {
    setItems(prevItems => {
      // Check if item already exists
      const existingItemIndex = prevItems.findIndex(
        item => item.product.id === product.id && item.selectedColor === selectedColor
      );
      
      if (existingItemIndex >= 0) {
        // Update existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        toast({
          title: "Cart updated",
          description: `Updated quantity for ${product.name}`,
        });
        return updatedItems;
      } else {
        // Add new item
        toast({
          title: "Added to cart",
          description: `${product.name} has been added to your cart`,
        });
        return [...prevItems, { product, quantity, selectedColor }];
      }
    });
  };
  
  const updateQuantity = (productId: string, quantity: number) => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.product.id === productId 
          ? { ...item, quantity: Math.max(1, quantity) } 
          : item
      )
    );
  };
  
  const removeItem = (productId: string) => {
    setItems(prevItems => {
      const removedItem = prevItems.find(item => item.product.id === productId);
      if (removedItem) {
        toast({
          title: "Item removed",
          description: `${removedItem.product.name} has been removed from your cart`,
        });
      }
      return prevItems.filter(item => item.product.id !== productId);
    });
  };
  
  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    });
  };
  
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);
  
  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity, 
    0
  );
  
  return (
    <CartContext.Provider 
      value={{ 
        items, 
        addItem, 
        updateQuantity, 
        removeItem, 
        clearCart, 
        itemCount, 
        subtotal 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
