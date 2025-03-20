
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ChevronRight, CreditCard, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

// Form schema validation
const paymentFormSchema = z.object({
  cardNumber: z.string()
    .regex(/^[\d\s]{16,19}$/, { message: "Please enter a valid card number" })
    .transform(val => val.replace(/\s/g, '')),
  cardholderName: z.string().min(3, { message: "Please enter the cardholder name" }),
  expiryDate: z.string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: "Please use MM/YY format" }),
  cvv: z.string()
    .regex(/^\d{3,4}$/, { message: "CVV must be 3 or 4 digits" }),
  sameAsShipping: z.boolean().default(true),
  // Billing address fields (only validated if sameAsShipping is false)
  billingAddress: z.string().optional(),
  billingCity: z.string().optional(),
  billingState: z.string().optional(),
  billingZipCode: z.string().optional(),
}).refine((data) => {
  // If not same as shipping, validate billing address
  if (!data.sameAsShipping) {
    return !!data.billingAddress && !!data.billingCity && 
           !!data.billingState && !!data.billingZipCode;
  }
  return true;
}, {
  message: "Billing address is required",
  path: ["billingAddress"],
});

type PaymentFormValues = z.infer<typeof paymentFormSchema>;

const Payment = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showBillingAddress, setShowBillingAddress] = useState(false);
  const [orderSummary, setOrderSummary] = useState({
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
    shippingMethod: 'standard'
  });
  const [shippingInfo, setShippingInfo] = useState<any | null>(null);
  
  // Initial form values
  const defaultValues: Partial<PaymentFormValues> = {
    sameAsShipping: true,
  };
  
  const form = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues,
  });
  
  // Load order summary and shipping info from session storage
  useEffect(() => {
    const savedOrderSummary = sessionStorage.getItem('mvmt-order-summary');
    const savedShippingInfo = sessionStorage.getItem('mvmt-shipping-info');
    
    if (savedOrderSummary) {
      setOrderSummary(JSON.parse(savedOrderSummary));
    } else {
      // Redirect to checkout if no order summary (user navigated directly to payment)
      navigate('/checkout');
    }
    
    if (savedShippingInfo) {
      setShippingInfo(JSON.parse(savedShippingInfo));
    }
  }, [navigate]);
  
  // Format price utility
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };
  
  // Watch the sameAsShipping value to toggle billing address form
  const sameAsShipping = form.watch('sameAsShipping');
  useEffect(() => {
    setShowBillingAddress(!sameAsShipping);
  }, [sameAsShipping]);
  
  // Form submission handler
  const onSubmit = (data: PaymentFormValues) => {
    setIsSubmitting(true);
    
    // Simulate payment processing delay
    setTimeout(() => {
      // Generate order number
      const orderNumber = `MVMT-${Math.floor(Math.random() * 10000)}-${Date.now().toString().slice(-5)}`;
      
      // Save order details to session storage
      sessionStorage.setItem('mvmt-order-details', JSON.stringify({
        orderNumber,
        orderDate: new Date().toISOString(),
        paymentMethod: 'Credit Card',
        items,
        subtotal: orderSummary.subtotal,
        shipping: orderSummary.shipping,
        tax: orderSummary.tax,
        total: orderSummary.total,
        shippingAddress: shippingInfo,
      }));
      
      // Clear the cart
      clearCart();
      
      // Redirect to order confirmation page
      navigate('/order-confirmation');
      setIsSubmitting(false);
    }, 2000);
  };
  
  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const cleanValue = value.replace(/\s/g, '');
    const groups = cleanValue.match(/.{1,4}/g);
    return groups ? groups.join(' ') : cleanValue;
  };
  
  // Handle card number input with formatting
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d\s]/g, '');
    const formattedValue = formatCardNumber(value);
    
    // Only update if within length limit
    if (formattedValue.length <= 19) {
      form.setValue('cardNumber', formattedValue);
    }
  };
  
  // Handle expiry date input with formatting
  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^\d]/g, '');
    
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
    }
    
    form.setValue('expiryDate', value);
  };
  
  // If cart is empty and there's no saved order, redirect to cart page
  if (items.length === 0 && !sessionStorage.getItem('mvmt-order-summary')) {
    navigate('/cart');
    return null;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="mvmt-container max-w-6xl">
          {/* Checkout Progress Bar */}
          <div className="flex items-center mb-12">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-mvmt-black text-white flex items-center justify-center">
                <Check className="h-4 w-4" />
              </div>
              <span className="ml-2 font-medium">Cart</span>
            </div>
            <ChevronRight className="mx-2 text-mvmt-gray-400" />
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-mvmt-black text-white flex items-center justify-center">
                <Check className="h-4 w-4" />
              </div>
              <span className="ml-2 font-medium">Shipping</span>
            </div>
            <ChevronRight className="mx-2 text-mvmt-gray-400" />
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-mvmt-black text-white flex items-center justify-center">
                3
              </div>
              <span className="ml-2 font-medium">Payment</span>
            </div>
          </div>
          
          <h1 className="text-2xl font-semibold mb-8">Payment Information</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Payment Form */}
            <div className="md:col-span-2">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <CreditCard className="mr-2 h-5 w-5" />
                        Credit Card
                      </CardTitle>
                      <CardDescription>
                        Enter your credit card information securely
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <FormField
                          control={form.control}
                          name="cardNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Card number</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="4111 1111 1111 1111" 
                                  {...field}
                                  value={field.value || ''}
                                  onChange={handleCardNumberChange}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <FormField
                          control={form.control}
                          name="cardholderName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Cardholder name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="expiryDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Expiry date (MM/YY)</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="MM/YY" 
                                  {...field}
                                  value={field.value || ''}
                                  onChange={handleExpiryDateChange}
                                  maxLength={5}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="cvv"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>CVV</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="123" 
                                  type="password" 
                                  maxLength={4}
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div>
                    <h2 className="text-lg font-medium mb-4">Billing Address</h2>
                    
                    <FormField
                      control={form.control}
                      name="sameAsShipping"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-3 space-y-0 mb-4">
                          <FormControl>
                            <input
                              type="checkbox"
                              className="h-4 w-4 mt-1 rounded border-gray-300 text-mvmt-black focus:ring-mvmt-black"
                              checked={field.value}
                              onChange={(e) => field.onChange(e.target.checked)}
                            />
                          </FormControl>
                          <div className="leading-none">
                            <FormLabel>Same as shipping address</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    {showBillingAddress && (
                      <div className="space-y-4 border border-mvmt-gray-200 rounded p-4">
                        <FormField
                          control={form.control}
                          name="billingAddress"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Address</FormLabel>
                              <FormControl>
                                <Input placeholder="123 Main St" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="billingCity"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                  <Input placeholder="San Francisco" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <div className="grid grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="billingState"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>State</FormLabel>
                                  <FormControl>
                                    <Input placeholder="CA" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="billingZipCode"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>ZIP code</FormLabel>
                                  <FormControl>
                                    <Input placeholder="94103" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <Alert className="bg-yellow-50 border-yellow-200 text-yellow-800">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      This is a demo store. No real payments will be processed.
                      Use any valid-looking credit card data for testing.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto bg-mvmt-black hover:bg-mvmt-gray-800 h-12 px-8"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing Payment...' : 'Complete Purchase'}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
            
            {/* Order Summary */}
            <div className="bg-mvmt-gray-50 p-6 h-fit">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              {/* Only show items if we have them from the cart */}
              {items.length > 0 && (
                <div className="max-h-60 overflow-y-auto mb-4 pr-2">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.selectedColor}`} className="flex py-3 border-b border-mvmt-gray-200 last:border-0">
                      <div className="w-16 h-16 bg-mvmt-gray-100 mr-3 flex-shrink-0">
                        <img 
                          src={item.product.images[0]} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <p className="font-medium text-sm">{item.product.name}</p>
                        {item.selectedColor && (
                          <p className="text-xs text-mvmt-gray-500">
                            Color: {
                              item.product.colorOptions?.find(c => c.color === item.selectedColor)?.name || 
                              item.selectedColor
                            }
                          </p>
                        )}
                        <div className="flex justify-between mt-1">
                          <span className="text-xs text-mvmt-gray-500">Qty: {item.quantity}</span>
                          <span className="text-sm font-medium">{formatPrice(item.product.price * item.quantity)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="space-y-3 pt-2">
                <div className="flex justify-between">
                  <span className="text-mvmt-gray-600">Subtotal</span>
                  <span className="font-medium">{formatPrice(orderSummary.subtotal)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-mvmt-gray-600">Shipping</span>
                  <span>
                    {orderSummary.shipping === 0 ? 'Free' : formatPrice(orderSummary.shipping)}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-mvmt-gray-600">Tax</span>
                  <span>{formatPrice(orderSummary.tax)}</span>
                </div>
                
                <Separator className="my-2" />
                
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>{formatPrice(orderSummary.total)}</span>
                </div>
              </div>
              
              {/* Shipping Information Summary */}
              {shippingInfo && (
                <div className="mt-6 pt-6 border-t border-mvmt-gray-200">
                  <h3 className="font-medium text-sm mb-3">Shipping Information</h3>
                  <div className="text-sm text-mvmt-gray-600">
                    <p>{shippingInfo.firstName} {shippingInfo.lastName}</p>
                    <p>{shippingInfo.address}</p>
                    {shippingInfo.apartment && <p>{shippingInfo.apartment}</p>}
                    <p>{shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}</p>
                    <p className="mt-2">{shippingInfo.email}</p>
                    <p>{shippingInfo.phone}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Payment;
