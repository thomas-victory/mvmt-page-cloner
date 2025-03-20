
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import ProductCard, { Product } from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
  viewAllLink?: string;
  products: Product[];
  variant?: 'default' | 'carousel';
}

const FeaturedProducts = ({
  title,
  subtitle,
  viewAllLink,
  products,
  variant = 'default'
}: FeaturedProductsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextSlide = () => {
    setActiveIndex((current) => 
      current === Math.max(0, products.length - 4) ? 0 : current + 1
    );
  };
  
  const prevSlide = () => {
    setActiveIndex((current) => 
      current === 0 ? Math.max(0, products.length - 4) : current - 1
    );
  };
  
  return (
    <div className="mvmt-section">
      <div className="mvmt-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl font-semibold text-mvmt-black">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-mvmt-gray-600">
                {subtitle}
              </p>
            )}
          </div>
          
          {viewAllLink && (
            <Link
              to={viewAllLink}
              className="text-sm font-semibold text-mvmt-black transition-colors duration-300 hover:text-mvmt-gray-600"
            >
              View All
            </Link>
          )}
        </div>
        
        {/* Products Grid/Carousel */}
        <div className="relative">
          {/* Products */}
          <div className="relative overflow-hidden">
            <div 
              className={cn(
                "grid gap-x-6 gap-y-8 transition-transform duration-500",
                variant === 'carousel' 
                  ? "grid-flow-col" 
                  : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              )}
              style={
                variant === 'carousel' 
                  ? { transform: `translateX(-${activeIndex * 25}%)` } 
                  : undefined
              }
            >
              {products.map((product) => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  detailUrl={`/product/${product.slug}`}
                />
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          {variant === 'carousel' && products.length > 4 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-md transition-all duration-300 hover:bg-white"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-md transition-all duration-300 hover:bg-white"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
