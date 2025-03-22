import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ChevronRight, Lock, ShieldCheck, CreditCard } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/components/ui/use-toast';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const checkoutFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  address: z.string().min(5, { message: "Please enter a valid address" }),
  apartment: z.string().optional(),
  city: z.string().min(2, { message: "Please enter a valid city" }),
  state: z.string().min(2, { message: "Please select a state" }),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, { message: "Please enter a valid ZIP code" }),
  phone: z.string().regex(/^\d{10}$/, { message: "Please enter a 10-digit phone number" }),
  shippingMethod: z.enum(["standard", "express"], {
    required_error: "Please select a shipping method",
  }),
});

type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;

const Checkout = () => {
  const { items, subtotal } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const shippingCosts = {
    standard: 0,
    express: 12.99,
  };
  
  const defaultValues: Partial<CheckoutFormValues> = {
    shippingMethod: "standard",
  };
  
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues,
  });
  
  const selectedShippingMethod = form.watch("shippingMethod") || "standard";
  const shipping = shippingCosts[selectedShippingMethod as keyof typeof shippingCosts];
  const tax = subtotal * 0.0825;
  const total = subtotal + shipping + tax;
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };
  
  const onSubmit = (data: CheckoutFormValues) => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      sessionStorage.setItem('mvmt-shipping-info', JSON.stringify(data));
      sessionStorage.setItem('mvmt-order-summary', JSON.stringify({
        subtotal,
        shipping,
        tax,
        total,
        shippingMethod: selectedShippingMethod
      }));
      
      navigate('/payment');
      setIsSubmitting(false);
    }, 1000);
  };
  
  if (items.length === 0) {
    navigate('/cart');
    return null;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="mvmt-container max-w-6xl">
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
                2
              </div>
              <span className="ml-2 font-medium">Shipping</span>
            </div>
            <ChevronRight className="mx-2 text-mvmt-gray-400" />
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-mvmt-gray-200 text-mvmt-gray-500 flex items-center justify-center">
                3
              </div>
              <span className="ml-2 text-mvmt-gray-500">Payment</span>
            </div>
          </div>
          
          <h1 className="text-2xl font-semibold mb-8">Shipping Information</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <h2 className="text-lg font-medium mb-4">Contact Information</h2>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email address</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-lg font-medium mb-4">Shipping Address</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="mt-4">
                      <FormField
                        control={form.control}
                        name="address"
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
                    </div>
                    
                    <div className="mt-4">
                      <FormField
                        control={form.control}
                        name="apartment"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Apartment, suite, etc. (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Apt 4B" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <FormField
                        control={form.control}
                        name="city"
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
                      
                      <FormField
                        control={form.control}
                        name="state"
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
                        name="zipCode"
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
                    
                    <div className="mt-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="5551234567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-lg font-medium mb-4">Shipping Method</h2>
                    <FormField
                      control={form.control}
                      name="shippingMethod"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="space-y-3"
                            >
                              <div className="flex items-center justify-between border border-mvmt-gray-200 p-4 rounded">
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="standard" id="standard" />
                                  <Label htmlFor="standard" className="font-medium">Standard Shipping</Label>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium">Free</p>
                                  <p className="text-sm text-mvmt-gray-500">5-7 business days</p>
                                </div>
                              </div>
                              
                              <div className="flex items-center justify-between border border-mvmt-gray-200 p-4 rounded">
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="express" id="express" />
                                  <Label htmlFor="express" className="font-medium">Express Shipping</Label>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium">{formatPrice(shippingCosts.express)}</p>
                                  <p className="text-sm text-mvmt-gray-500">2-3 business days</p>
                                </div>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Card className="border-mvmt-gray-200 mt-6">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center">
                        <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                        Secure Checkout Promise
                      </CardTitle>
                      <CardDescription>
                        Your information is protected with industry-standard encryption
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                          <Lock className="h-4 w-4 text-mvmt-gray-500" />
                          <p className="text-sm text-mvmt-gray-600">100% secure payment processing</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-mvmt-gray-500" />
                          <p className="text-sm text-mvmt-gray-600">Your card details are never stored</p>
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
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto bg-mvmt-black hover:bg-mvmt-gray-800 h-12 px-8"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing...' : 'Continue to Payment'}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
            
            <div className="bg-mvmt-gray-50 p-6 h-fit">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
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
              
              <div className="space-y-3 pt-2">
                <div className="flex justify-between">
                  <span className="text-mvmt-gray-600">Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-mvmt-gray-600">Shipping</span>
                  <span>
                    {shipping === 0 ? 'Free' : formatPrice(shipping)}
                  </span>
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
              </div>
              
              <div className="mt-6 pt-4 border-t border-mvmt-gray-200">
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
