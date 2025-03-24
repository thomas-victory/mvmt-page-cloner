
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronRight, Minus, Plus, Heart, ShoppingCart, Star, Timer, BadgePercent, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Product } from "@/components/ProductCard";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import ReviewCard from "@/components/ReviewCard";

// This would typically come from an API, using the same mock data for now
import { productsData } from "@/data/products";

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  
  // Countdown timer state with more granular control for animations
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number } | null>(null);
  const [timerFlash, setTimerFlash] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate API fetch with a small delay
    const timer = setTimeout(() => {
      const foundProduct = productsData.find(p => p.slug === slug);
      setProduct(foundProduct || null);
      if (foundProduct?.colorOptions && foundProduct.colorOptions.length > 0) {
        setSelectedColor(foundProduct.colorOptions[0].color);
      }
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [slug]);

  // Set up countdown timer if product has a saleEndsAt date
  useEffect(() => {
    if (!product?.saleEndsAt) return;
    
    const calculateTimeLeft = () => {
      const difference = new Date(product.saleEndsAt!).getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setTimeLeft(null);
        return;
      }
      
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      
      setTimeLeft({ hours, minutes, seconds });
      
      // Flash effect when seconds change
      if (seconds === 0) {
        setTimerFlash(true);
        setTimeout(() => setTimerFlash(false), 500);
      }
    };
    
    calculateTimeLeft();
    const intervalId = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(intervalId);
  }, [product]);

  const incrementQuantity = () => {
    setQuantity(prev => Math.min(prev + 1, 10)); // Limiting to 10 items max
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(prev - 1, 1)); // Minimum 1 item
  };

  const addToCart = () => {
    if (!product) return;
    
    setIsAddingToCart(true);
    
    // Simulate a small delay for better UX
    setTimeout(() => {
      addItem(product, quantity, selectedColor);
      setIsAddingToCart(false);
    }, 500);
  };

  const buyNow = () => {
    if (!product) return;
    
    setIsAddingToCart(true);
    
    // Add to cart then navigate to cart
    setTimeout(() => {
      addItem(product, quantity, selectedColor);
      setIsAddingToCart(false);
      navigate('/cart');
    }, 500);
  };

  const addToWishlist = () => {
    if (!product) return;
    
    // We would normally add to a wishlist here
    // For now, just show a toast via the addItem's toast
    addItem(product, 0, selectedColor);
  };

  const calculateAverageRating = (reviews?: { rating: number }[]) => {
    if (!reviews || reviews.length === 0) return 0;
    const sum = reviews.reduce((total, review) => total + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
  };
  
  // Calculate discount percentage if there's an original price
  const calculateDiscountPercentage = () => {
    if (!product?.originalPrice) return 0;
    return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  };

  const averageRating = calculateAverageRating(product?.reviews);
  const discountPercentage = calculateDiscountPercentage();

  // Format countdown timer
  const formatTimeValue = (value: number) => {
    return value.toString().padStart(2, '0');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse text-mvmt-gray-600">Loading product...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center flex-col p-8 text-center">
          <h1 className="text-2xl font-semibold mb-4">Product Not Found</h1>
          <p className="text-mvmt-gray-600 mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Button 
            onClick={() => navigate('/shop')}
            className="bg-mvmt-black hover:bg-mvmt-gray-800"
          >
            Continue Shopping
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="mvmt-container">
          {/* Breadcrumbs */}
          <nav className="flex mb-8 text-sm">
            <Link to="/" className="text-mvmt-gray-600 hover:text-mvmt-black transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-mvmt-gray-400 self-center" />
            <Link 
              to={product.category === "men" ? "/mens-watches" : "/womens-watches"} 
              className="text-mvmt-gray-600 hover:text-mvmt-black transition-colors"
            >
              {product.category === "men" ? "Men's Watches" : "Women's Watches"}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-mvmt-gray-400 self-center" />
            <span className="text-mvmt-black font-medium truncate">{product.name}</span>
          </nav>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden bg-mvmt-gray-100 relative">
                <img 
                  src={product.images[activeImageIndex]} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                
                {/* Sale badge */}
                {product.originalPrice && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-2.5 py-1 font-medium">
                    SAVE {discountPercentage}%
                  </div>
                )}
                
                {/* Free shipping badge */}
                {product.freeShipping && (
                  <div className="absolute top-4 left-4 bg-emerald-100 text-emerald-800 text-xs px-3 py-1 font-medium rounded-full flex items-center shadow-sm transform -rotate-2 animate-pulse-subtle">
                    <Tag className="h-3.5 w-3.5 mr-1.5" strokeWidth={2.5} />
                    <span>FREE SHIPPING</span>
                  </div>
                )}
              </div>
              
              {/* Thumbnail Gallery */}
              {product.images.length > 1 && (
                <div className="flex space-x-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      className={`aspect-square w-20 border-2 transition-colors ${
                        activeImageIndex === index
                          ? 'border-mvmt-black'
                          : 'border-transparent hover:border-mvmt-gray-300'
                      }`}
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} - View ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-semibold text-mvmt-black">{product.name}</h1>
              
              {/* Average Rating */}
              {product.reviews && product.reviews.length > 0 && (
                <div className="flex items-center mt-2">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={`h-4 w-4 ${
                          index < Math.round(Number(averageRating))
                            ? "text-amber-400 fill-amber-400"
                            : "text-mvmt-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-mvmt-gray-600">
                    {averageRating} ({product.reviews.length} {product.reviews.length === 1 ? 'review' : 'reviews'})
                  </span>
                </div>
              )}
              
              {/* Enhanced Price Display with Sale */}
              <div className="mt-4">
                {product.originalPrice ? (
                  <div className="space-y-1">
                    <div className="flex items-baseline">
                      <span className="text-xl font-semibold text-red-600">${product.price}</span>
                      <span className="ml-3 text-mvmt-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                      <span className="ml-3 bg-red-100 text-red-700 px-2 py-0.5 text-xs font-medium rounded-sm flex items-center">
                        <BadgePercent className="h-3.5 w-3.5 mr-1" />
                        Save {discountPercentage}%
                      </span>
                    </div>
                    
                    {/* New Animated Countdown Timer */}
                    {timeLeft && (
                      <div className="mt-4 relative overflow-hidden">
                        <div className={`p-4 bg-gradient-to-r from-red-50 to-amber-50 border border-amber-200 rounded-md ${timerFlash ? 'animate-pulse' : ''}`}>
                          <div className="flex items-center">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-800">
                              <Timer className="h-5 w-5" />
                            </div>
                            <div className="ml-3">
                              <h3 className="text-sm font-bold text-amber-800">Limited Time Offer!</h3>
                              <p className="text-xs text-amber-700 mt-0.5">Sale ends in:</p>
                            </div>
                          </div>
                          
                          <div className="flex justify-center mt-3 space-x-2">
                            <div className="flex flex-col items-center">
                              <div className="bg-white w-14 h-14 rounded-md flex items-center justify-center border border-amber-200 shadow-sm">
                                <span className="text-2xl font-mono font-bold text-amber-900">{formatTimeValue(timeLeft.hours)}</span>
                              </div>
                              <span className="text-xs mt-1 text-amber-800">Hours</span>
                            </div>
                            <div className="text-2xl font-bold text-amber-300 self-center pb-5">:</div>
                            <div className="flex flex-col items-center">
                              <div className="bg-white w-14 h-14 rounded-md flex items-center justify-center border border-amber-200 shadow-sm">
                                <span className="text-2xl font-mono font-bold text-amber-900">{formatTimeValue(timeLeft.minutes)}</span>
                              </div>
                              <span className="text-xs mt-1 text-amber-800">Minutes</span>
                            </div>
                            <div className="text-2xl font-bold text-amber-300 self-center pb-5">:</div>
                            <div className="flex flex-col items-center">
                              <div className={`bg-white w-14 h-14 rounded-md flex items-center justify-center border border-amber-200 shadow-sm ${timeLeft.seconds < 10 ? 'animate-pulse' : ''}`}>
                                <span className="text-2xl font-mono font-bold text-amber-900">{formatTimeValue(timeLeft.seconds)}</span>
                              </div>
                              <span className="text-xs mt-1 text-amber-800">Seconds</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Animated decorative elements */}
                        <div className="absolute -top-2 -right-2 w-12 h-12 bg-amber-100 rounded-full opacity-20 animate-pulse"></div>
                        <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-red-100 rounded-full opacity-20 animate-pulse-subtle"></div>
                      </div>
                    )}
                  </div>
                ) : (
                  <span className="text-xl font-semibold">${product.price}</span>
                )}
              </div>
              
              {/* Tags */}
              <div className="flex mt-4 space-x-3">
                {product.isBestseller && (
                  <span className="bg-mvmt-gray-100 text-mvmt-gray-800 px-3 py-1 text-xs font-medium">
                    Bestseller
                  </span>
                )}
                {product.isNew && (
                  <span className="bg-mvmt-gray-100 text-mvmt-gray-800 px-3 py-1 text-xs font-medium">
                    New
                  </span>
                )}
              </div>
              
              <div className="mt-8 space-y-6">
                {/* Color Options */}
                {product.colorOptions && product.colorOptions.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium mb-3">Color: {
                      product.colorOptions.find(c => c.color === selectedColor)?.name
                    }</h3>
                    <div className="flex space-x-3">
                      {product.colorOptions.map(option => (
                        <button
                          key={option.color}
                          className={`w-8 h-8 rounded-full transition-all duration-200 ${
                            selectedColor === option.color
                              ? 'ring-2 ring-offset-2 ring-mvmt-black'
                              : 'hover:scale-110'
                          }`}
                          style={{ backgroundColor: option.color }}
                          onClick={() => setSelectedColor(option.color)}
                          aria-label={`Select ${option.name} color`}
                        />
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Quantity */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Quantity</h3>
                  <div className="flex border border-mvmt-gray-300 w-32">
                    <button
                      onClick={decrementQuantity}
                      className="px-3 py-2 text-mvmt-gray-600 hover:text-mvmt-black transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="flex-grow flex items-center justify-center">
                      {quantity}
                    </span>
                    <button
                      onClick={incrementQuantity}
                      className="px-3 py-2 text-mvmt-gray-600 hover:text-mvmt-black transition-colors"
                      disabled={quantity >= 10}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                {/* Add to Cart Button */}
                <div className="pt-4 space-y-3">
                  <Button
                    onClick={addToCart}
                    disabled={isAddingToCart}
                    className="w-full bg-mvmt-black text-white font-medium py-3 px-6 h-12 transition-colors duration-300 hover:bg-mvmt-gray-800 flex items-center justify-center"
                  >
                    {isAddingToCart ? 'Adding...' : (
                      <>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </>
                    )}
                  </Button>
                  
                  <Button
                    onClick={buyNow}
                    disabled={isAddingToCart}
                    variant="outline"
                    className="w-full border border-mvmt-gray-300 text-mvmt-black font-medium py-3 px-6 h-12"
                  >
                    Buy Now
                  </Button>
                  
                  <Button
                    onClick={addToWishlist}
                    variant="ghost"
                    className="w-full text-mvmt-black font-medium py-3 px-6 h-12 flex items-center justify-center"
                  >
                    <Heart className="mr-2 h-4 w-4" /> Add to Wishlist
                  </Button>
                </div>
              </div>
              
              {/* Product Description */}
              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-3">Description</h3>
                <p className="text-mvmt-gray-600">
                  The {product.name} features a sleek {
                    product.colorOptions?.find(c => c.color === selectedColor)?.name.toLowerCase()
                  } design with premium materials and precise movement. This timepiece is perfect for everyday wear or special occasions, matching seamlessly with any outfit.
                </p>
              </div>
              
              {/* Shipping Info */}
              <div className="mt-8 border-t border-mvmt-gray-200 pt-8">
                <h3 className="text-sm font-medium mb-3">Shipping & Returns</h3>
                <ul className="text-sm text-mvmt-gray-600 space-y-2">
                  <li>• Free shipping on orders over $75</li>
                  <li>• Free returns within 30 days</li>
                  <li>• 2-year warranty included</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Reviews Section */}
          <div className="mt-16 border-t border-mvmt-gray-200 pt-12">
            <h2 className="text-2xl font-semibold mb-8">Customer Reviews</h2>
            
            {product.reviews && product.reviews.length > 0 ? (
              <div>
                <div className="flex items-center mb-6">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={`h-5 w-5 ${
                          index < Math.round(Number(averageRating))
                            ? "text-amber-400 fill-amber-400"
                            : "text-mvmt-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-3 text-lg font-medium">
                    {averageRating} out of 5
                  </span>
                  <span className="ml-2 text-mvmt-gray-600">
                    Based on {product.reviews.length} {product.reviews.length === 1 ? 'review' : 'reviews'}
                  </span>
                </div>
                
                <div className="space-y-0">
                  {product.reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-10 bg-mvmt-gray-50 rounded-lg">
                <h3 className="text-lg font-medium mb-2">No Reviews Yet</h3>
                <p className="text-mvmt-gray-600 mb-4">Be the first to review this product</p>
                <Button
                  variant="outline"
                  className="border border-mvmt-gray-300 text-mvmt-black font-medium"
                >
                  Write a Review
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
