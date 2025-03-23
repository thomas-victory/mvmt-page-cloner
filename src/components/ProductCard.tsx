
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Heart, Timer } from 'lucide-react';
import { Review } from '@/types/Review';
import { Progress } from '@/components/ui/progress';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
  slug: string;
  colorOptions?: { name: string; color: string }[];
  reviews?: Review[];
  saleEndsAt?: string; // Added property for sale end time
}

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'featured';
  detailUrl?: string;
}

const ProductCard = ({ product, variant = 'default', detailUrl }: ProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [progressValue, setProgressValue] = useState(100);
  
  useEffect(() => {
    if (!product.saleEndsAt) return;
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const endTime = new Date(product.saleEndsAt!).getTime();
      const totalDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
      
      const timeRemaining = endTime - now;
      
      if (timeRemaining <= 0) {
        setTimeLeft(null);
        return;
      }
      
      // Calculate progress as percentage of time remaining
      const progress = Math.min(100, Math.max(0, (timeRemaining / totalDuration) * 100));
      setProgressValue(progress);
      setTimeLeft(timeRemaining);
    };
    
    calculateTimeLeft();
    const timerId = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timerId);
  }, [product.saleEndsAt]);
  
  const handleMouseEnter = () => {
    setIsHovering(true);
    if (product.images.length > 1) {
      setCurrentImageIndex(1);
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setCurrentImageIndex(0);
  };
  
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);
  
  const formattedOriginalPrice = product.originalPrice
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(product.originalPrice)
    : null;
    
  // Calculate discount percentage if there's an original price
  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const productUrl = detailUrl || `/product/${product.slug}`;

  // Format time left for display
  const formatTimeLeft = () => {
    if (!timeLeft) return '';
    
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={cn(
      "group",
      variant === 'featured' ? 'mx-auto' : ''
    )}>
      <div 
        className="relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to={productUrl}>
          <div className="relative aspect-[3/4] overflow-hidden bg-mvmt-gray-100">
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-all duration-500",
                isHovering ? "scale-105" : "scale-100"
              )}
            />
            
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.isNew && (
                <span className="inline-block bg-mvmt-black text-white text-xs px-2.5 py-1 font-medium">
                  NEW
                </span>
              )}
              {product.isBestseller && (
                <span className="inline-block bg-mvmt-accent text-white text-xs px-2.5 py-1 font-medium">
                  BESTSELLER
                </span>
              )}
              {product.originalPrice && (
                <span className="inline-flex items-center bg-red-600 text-white text-xs px-2.5 py-1 font-medium">
                  {discountPercentage > 0 && `SAVE ${discountPercentage}%`}
                </span>
              )}
            </div>
            
            {/* Sale countdown progress bar */}
            {product.saleEndsAt && timeLeft && (
              <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2.5 py-2 font-medium">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center">
                    <Timer className="h-3.5 w-3.5 mr-1.5" />
                    <span>Sale ends in</span>
                  </div>
                  <span className="font-mono">{formatTimeLeft()}</span>
                </div>
                <Progress 
                  value={progressValue} 
                  className="h-1.5 bg-gray-600" 
                />
              </div>
            )}
          </div>
        </Link>

        <button 
          className={cn(
            "absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm transition-all duration-300",
            isHovering ? "opacity-100" : "opacity-0"
          )}
          aria-label="Add to wishlist"
        >
          <Heart className="h-5 w-5 text-mvmt-gray-700 hover:text-red-500 transition-colors duration-300" />
        </button>

        {variant === 'featured' && (
          <div 
            className={cn(
              "absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 transform transition-transform duration-400 ease-out-smooth",
              isHovering ? "translate-y-0" : "translate-y-full"
            )}
          >
            <button className="w-full py-2.5 bg-mvmt-black text-white text-sm font-medium transition-colors duration-300 hover:bg-mvmt-gray-800">
              Add to Cart
            </button>
          </div>
        )}
      </div>

      {product.colorOptions && product.colorOptions.length > 0 && (
        <div className="flex justify-center space-x-2 mt-3">
          {product.colorOptions.map((colorOpt, index) => (
            <button 
              key={index}
              className="w-4 h-4 rounded-full border border-mvmt-gray-300 transition-transform duration-300 hover:scale-110"
              style={{ backgroundColor: colorOpt.color }}
              aria-label={`${colorOpt.name} color`}
            />
          ))}
        </div>
      )}

      <div className={cn(
        "mt-3 text-center",
        variant === 'featured' ? 'px-1' : ''
      )}>
        <Link to={productUrl}>
          <h3 className="text-base font-medium leading-tight text-mvmt-black transition-colors duration-300 hover:text-mvmt-gray-600">
            {product.name}
          </h3>
        </Link>
        <div className="mt-1 flex items-center justify-center gap-2">
          {formattedOriginalPrice ? (
            <>
              <span className="text-sm font-medium text-red-600">
                {formattedPrice}
              </span>
              <span className="text-sm text-mvmt-gray-500 line-through">
                {formattedOriginalPrice}
              </span>
              {discountPercentage > 0 && (
                <span className="text-xs bg-red-100 text-red-700 px-1.5 py-0.5 rounded">
                  -{discountPercentage}%
                </span>
              )}
            </>
          ) : (
            <span className="text-sm font-medium">
              {formattedPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
