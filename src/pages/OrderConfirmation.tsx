
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ChevronRight, ShoppingBag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface OrderDetails {
  orderNumber: string;
  orderDate: string;
  paymentMethod: string;
  items: Array<{
    product: {
      id: string;
      name: string;
      price: number;
      images: string[];
      colorOptions?: { name: string; color: string }[];
    };
    quantity: number;
    selectedColor?: string;
  }>;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  shippingAddress: {
    firstName: string;
    lastName: string;
    address: string;
    apartment?: string;
    city: string;
    state: string;
    zipCode: string;
    email: string;
    phone: string;
  };
}

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  
  useEffect(() => {
    // Get order details from session storage
    const savedOrderDetails = sessionStorage.getItem('mvmt-order-details');
    
    if (savedOrderDetails) {
      setOrderDetails(JSON.parse(savedOrderDetails));
    } else {
      // Redirect to home if no order details (user navigated directly to this page)
      navigate('/');
    }
  }, [navigate]);
  
  // Format price utility
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };
  
  // Format date utility
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };
  
  if (!orderDetails) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse text-mvmt-gray-600">Loading order details...</div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="mvmt-container max-w-4xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-4">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            <h1 className="text-3xl font-semibold mb-2">Order Confirmed!</h1>
            <p className="text-mvmt-gray-600 max-w-lg mx-auto">
              Thank you for your purchase. We've received your order and are preparing it for shipment.
              You will receive a confirmation email shortly.
            </p>
          </div>
          
          <div className="bg-white border border-mvmt-gray-200 rounded-lg overflow-hidden shadow-sm mb-8">
            <div className="p-6 bg-mvmt-gray-50 border-b border-mvmt-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Order #{orderDetails.orderNumber}</h2>
                <span className="text-mvmt-gray-600">
                  {formatDate(orderDetails.orderDate)}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Order information */}
                <div>
                  <h3 className="font-medium mb-3">Order Information</h3>
                  <div className="text-sm text-mvmt-gray-600 space-y-2">
                    <p><span className="text-mvmt-gray-500">Order number:</span> {orderDetails.orderNumber}</p>
                    <p><span className="text-mvmt-gray-500">Order date:</span> {formatDate(orderDetails.orderDate)}</p>
                    <p><span className="text-mvmt-gray-500">Payment method:</span> {orderDetails.paymentMethod}</p>
                  </div>
                </div>
                
                {/* Shipping information */}
                <div>
                  <h3 className="font-medium mb-3">Shipping Address</h3>
                  <div className="text-sm text-mvmt-gray-600 space-y-1">
                    <p>{orderDetails.shippingAddress.firstName} {orderDetails.shippingAddress.lastName}</p>
                    <p>{orderDetails.shippingAddress.address}</p>
                    {orderDetails.shippingAddress.apartment && <p>{orderDetails.shippingAddress.apartment}</p>}
                    <p>{orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} {orderDetails.shippingAddress.zipCode}</p>
                    <p className="mt-2">{orderDetails.shippingAddress.email}</p>
                    <p>{orderDetails.shippingAddress.phone}</p>
                  </div>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              {/* Order items */}
              <h3 className="font-medium mb-4">Order Items</h3>
              <div className="space-y-4 mb-6">
                {orderDetails.items.map((item) => (
                  <div key={`${item.product.id}-${item.selectedColor}`} className="flex py-3 border-b border-mvmt-gray-200 last:border-0">
                    <div className="w-20 h-20 bg-mvmt-gray-100 mr-4 flex-shrink-0">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <p className="font-medium">{item.product.name}</p>
                      {item.selectedColor && (
                        <p className="text-sm text-mvmt-gray-500">
                          Color: {
                            item.product.colorOptions?.find(c => c.color === item.selectedColor)?.name || 
                            item.selectedColor
                          }
                        </p>
                      )}
                      <div className="flex justify-between mt-1">
                        <span className="text-sm text-mvmt-gray-500">Qty: {item.quantity}</span>
                        <span className="font-medium">{formatPrice(item.product.price * item.quantity)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Order summary */}
              <div className="bg-mvmt-gray-50 p-4 rounded">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-mvmt-gray-600">Subtotal</span>
                    <span>{formatPrice(orderDetails.subtotal)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-mvmt-gray-600">Shipping</span>
                    <span>
                      {orderDetails.shipping === 0 ? 'Free' : formatPrice(orderDetails.shipping)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-mvmt-gray-600">Tax</span>
                    <span>{formatPrice(orderDetails.tax)}</span>
                  </div>
                  
                  <Separator className="my-2" />
                  
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>{formatPrice(orderDetails.total)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <Button 
              asChild 
              variant="outline"
              className="w-full md:w-auto"
            >
              <Link to="/">Return to Home</Link>
            </Button>
            <Button 
              asChild
              className="w-full md:w-auto bg-mvmt-black hover:bg-mvmt-gray-800"
            >
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
