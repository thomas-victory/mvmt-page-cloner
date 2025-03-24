
import { X, ShoppingBag, ChevronRight, Minus, Plus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/utils';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet';

export const CartSheet = () => {
  const { items, updateQuantity, removeItem, subtotal, itemCount, isCartOpen, setIsCartOpen } = useCart();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  const handleViewCart = () => {
    setIsCartOpen(false);
    navigate('/cart');
  };
  
  const tax = subtotal * 0.0825; // 8.25% sales tax
  const shipping = 0; // Free shipping
  const total = subtotal + tax + shipping;

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex flex-col w-full max-w-md sm:max-w-lg">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="flex items-center">
            <ShoppingBag className="h-5 w-5 mr-2" />
            Your Cart ({itemCount} {itemCount === 1 ? 'item' : 'items'})
          </SheetTitle>
        </SheetHeader>
        
        {items.length === 0 ? (
          <div className="flex-grow flex flex-col items-center justify-center text-center py-10">
            <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <ShoppingBag className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6 max-w-xs">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Button 
              onClick={() => {
                setIsCartOpen(false);
                navigate('/shop');
              }}
              className="bg-black hover:bg-gray-800"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-grow overflow-auto py-4">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.selectedColor}`} className="flex mb-4 pb-4 border-b border-gray-100">
                  <div className="w-20 h-20 bg-gray-100 mr-3 flex-shrink-0">
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <Link 
                        to={`/product/${item.product.slug}`}
                        onClick={() => setIsCartOpen(false)}
                        className="font-medium hover:text-gray-600 transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <button 
                        onClick={() => removeItem(item.product.id)}
                        className="text-gray-400 hover:text-black transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    
                    {item.selectedColor && (
                      <p className="text-xs text-gray-500 mb-1">
                        Color: {
                          item.product.colorOptions?.find(c => c.color === item.selectedColor)?.name || 
                          item.selectedColor
                        }
                      </p>
                    )}
                    
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex border border-gray-300 h-7">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-1.5 text-gray-600 hover:text-black transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="flex-grow flex items-center justify-center min-w-[1.5rem] text-xs">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-1.5 text-gray-600 hover:text-black transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <span className="font-medium text-sm">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax (estimated)</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                
                <Separator className="my-2" />
                
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>
            
            <SheetFooter className="flex flex-col gap-2 sm:flex-row mt-2">
              <Button 
                onClick={handleViewCart}
                variant="outline" 
                className="w-full border-gray-300"
              >
                View Cart
              </Button>
              <Button 
                onClick={handleCheckout}
                className="w-full bg-black hover:bg-gray-800"
              >
                Checkout
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
