
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronRight, Minus, Plus, Heart, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Product } from "@/components/ProductCard";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

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
              <div className="aspect-square overflow-hidden bg-mvmt-gray-100">
                <img 
                  src={product.images[activeImageIndex]} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
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
              
              <div className="mt-4 flex items-baseline">
                <span className="text-xl font-semibold">${product.price}</span>
                {product.originalPrice && (
                  <span className="ml-3 text-mvmt-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
