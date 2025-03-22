
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Minus, Plus, X, ShoppingBag, CreditCard, Lock, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Cart = () => {
  const { items, updateQuantity, removeItem, subtotal, itemCount } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const shipping = 0; // Free shipping over $50
  const tax = subtotal * 0.0825; // 8.25% sales tax
  const total = subtotal + shipping + tax;
  
  const handleCheckout = () => {
    setIsProcessing(true);
    // Simulating a small delay for processing
    setTimeout(() => {
      navigate('/checkout');
    }, 500);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="mvmt-container max-w-6xl">
          <h1 className="text-3xl font-semibold mb-8">Your Cart</h1>
          
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="mx-auto w-16 h-16 rounded-full bg-mvmt-gray-100 flex items-center justify-center mb-4">
                <ShoppingBag className="h-8 w-8 text-mvmt-gray-400" />
              </div>
              <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
              <p className="text-mvmt-gray-500 mb-6">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Button 
                onClick={() => navigate('/shop')}
                className="bg-mvmt-black hover:bg-mvmt-gray-800"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Cart Items - Takes up 2/3 of the space on desktop */}
              <div className="md:col-span-2 space-y-6">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.selectedColor}`} className="flex border-b border-mvmt-gray-200 pb-6">
                    <div className="w-24 h-24 bg-mvmt-gray-100 mr-4 flex-shrink-0">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex justify-between mb-1">
                        <Link to={`/product/${item.product.slug}`} className="font-medium hover:text-mvmt-gray-600 transition-colors">
                          {item.product.name}
                        </Link>
                        <button 
                          onClick={() => removeItem(item.product.id)}
                          className="text-mvmt-gray-400 hover:text-mvmt-black transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                      
                      {item.selectedColor && (
                        <p className="text-sm text-mvmt-gray-500 mb-2">
                          Color: {
                            item.product.colorOptions?.find(c => c.color === item.selectedColor)?.name || 
                            item.selectedColor
                          }
                        </p>
                      )}
                      
                      <div className="flex justify-between items-center mt-3">
                        <div className="flex border border-mvmt-gray-300 h-8">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-2 text-mvmt-gray-600 hover:text-mvmt-black transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="flex-grow flex items-center justify-center min-w-[2rem] text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-2 text-mvmt-gray-600 hover:text-mvmt-black transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        
                        <div className="text-right">
                          <span className="font-medium">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Trust Payment Section - Only show when cart has items */}
                <div className="mt-8 border border-mvmt-gray-200 rounded-md p-6 bg-white">
                  <div className="flex items-center gap-2 mb-4">
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                    <h3 className="font-medium">Secure Checkout</h3>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <Lock className="h-4 w-4 text-mvmt-gray-500" />
                      <p className="text-sm text-mvmt-gray-600">Your payment information is encrypted and secure</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-mvmt-gray-600 mb-2">We accept:</p>
                      <div className="flex flex-wrap gap-3">
                        <div className="h-8 w-12 bg-white border border-mvmt-gray-200 rounded flex items-center justify-center">
                          <img src="/visa.svg" alt="Visa" className="h-4" onError={(e) => { e.currentTarget.src = "/placeholder.svg" }} />
                        </div>
                        <div className="h-8 w-12 bg-white border border-mvmt-gray-200 rounded flex items-center justify-center">
                          <img src="/mastercard.svg" alt="Mastercard" className="h-4" onError={(e) => { e.currentTarget.src = "/placeholder.svg" }} />
                        </div>
                        <div className="h-8 w-12 bg-white border border-mvmt-gray-200 rounded flex items-center justify-center">
                          <img src="/amex.svg" alt="American Express" className="h-4" onError={(e) => { e.currentTarget.src = "/placeholder.svg" }} />
                        </div>
                        <div className="h-8 w-12 bg-white border border-mvmt-gray-200 rounded flex items-center justify-center">
                          <img src="/paypal.svg" alt="PayPal" className="h-4" onError={(e) => { e.currentTarget.src = "/placeholder.svg" }} />
                        </div>
                        <div className="h-8 w-12 bg-white border border-mvmt-gray-200 rounded flex items-center justify-center">
                          <img src="/applepay.svg" alt="Apple Pay" className="h-4" onError={(e) => { e.currentTarget.src = "/placeholder.svg" }} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-mvmt-gray-500" />
                      <p className="text-sm text-mvmt-gray-600">Your credit card details are never stored</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Order Summary - Takes up 1/3 of the space on desktop */}
              <div className="bg-mvmt-gray-50 p-6 h-fit">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-mvmt-gray-600">Subtotal ({itemCount} items)</span>
                    <span className="font-medium">{formatPrice(subtotal)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-mvmt-gray-600">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-mvmt-gray-600">Tax (estimated)</span>
                    <span>{formatPrice(tax)}</span>
                  </div>
                  
                  <Separator className="my-2" />
                  
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  
                  <Button 
                    onClick={handleCheckout} 
                    disabled={isProcessing}
                    className="w-full bg-mvmt-black hover:bg-mvmt-gray-800 h-12 mt-4"
                  >
                    {isProcessing ? 'Processing...' : 'Proceed to Checkout'}
                  </Button>
                  
                  <div className="mt-4 text-center">
                    <Link 
                      to="/shop" 
                      className="text-mvmt-black text-sm hover:underline"
                    >
                      Continue Shopping
                    </Link>
                  </div>

                  {/* Trust badges */}
                  <div className="mt-4 pt-4 border-t border-mvmt-gray-200">
                    <div className="flex justify-center gap-2 mb-3">
                      <ShieldCheck className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium">Guaranteed Safe Checkout</span>
                    </div>
                    <div className="flex justify-center gap-2 items-center text-mvmt-gray-600 text-xs mt-2">
                      <Lock className="h-3 w-3" />
                      <span>SSL SECURED PAYMENT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
