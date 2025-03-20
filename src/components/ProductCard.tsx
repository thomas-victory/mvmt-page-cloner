
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';

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
}

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'featured';
  detailUrl?: string;
}

const ProductCard = ({ product, variant = 'default', detailUrl }: ProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
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

  // Use the provided detailUrl or fallback to the default product slug path
  const productUrl = detailUrl || `/product/${product.slug}`;

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
        {/* Product Image */}
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
            
            {/* Product Badges */}
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
                <span className="inline-block bg-red-600 text-white text-xs px-2.5 py-1 font-medium">
                  SALE
                </span>
              )}
            </div>
          </div>
        </Link>

        {/* Quick Add to Wishlist */}
        <button 
          className={cn(
            "absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm transition-all duration-300",
            isHovering ? "opacity-100" : "opacity-0"
          )}
          aria-label="Add to wishlist"
        >
          <Heart className="h-5 w-5 text-mvmt-gray-700 hover:text-red-500 transition-colors duration-300" />
        </button>

        {/* Quick Add to Cart (for featured products) */}
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

      {/* Color Options */}
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

      {/* Product Details */}
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
          <span className="text-sm font-medium">
            {formattedPrice}
          </span>
          {formattedOriginalPrice && (
            <span className="text-sm text-mvmt-gray-500 line-through">
              {formattedOriginalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
