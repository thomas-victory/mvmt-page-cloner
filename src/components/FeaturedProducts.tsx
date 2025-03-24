
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import ProductCard, { Product } from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleProducts(1);
      } else if (width < 1024) {
        setVisibleProducts(2);
      } else if (width < 1280) {
        setVisibleProducts(3);
      } else {
        setVisibleProducts(4);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const maxIndex = Math.max(0, products.length - visibleProducts);
  
  const nextSlide = () => {
    setActiveIndex((current) => 
      current >= maxIndex ? 0 : current + 1
    );
  };
  
  const prevSlide = () => {
    setActiveIndex((current) => 
      current === 0 ? maxIndex : current - 1
    );
  };
  
  return (
    <section className="mvmt-section py-12 sm:py-16">
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
              className="text-sm font-semibold text-mvmt-black border-b border-transparent transition-colors duration-300 hover:border-mvmt-black"
            >
              View All
            </Link>
          )}
        </div>
        
        {/* Products Grid/Carousel */}
        <div className="relative">
          {/* Products */}
          <div 
            ref={carouselRef}
            className="relative overflow-hidden"
          >
            <div 
              className={cn(
                "gap-4 sm:gap-6 transition-transform duration-500 ease-out-smooth",
                variant === 'carousel' 
                  ? "flex" 
                  : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              )}
              style={
                variant === 'carousel' 
                  ? { transform: `translateX(-${activeIndex * (100 / visibleProducts)}%)`, width: `${(products.length / visibleProducts) * 100}%` } 
                  : undefined
              }
            >
              {products.map((product) => (
                <div 
                  key={product.id}
                  className={cn(
                    variant === 'carousel' && `w-full sm:w-1/${visibleProducts}`
                  )}
                >
                  <ProductCard 
                    product={product}
                    detailUrl={`/product/${product.slug}`}
                    variant={variant === 'carousel' ? 'featured' : 'default'}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          {variant === 'carousel' && products.length > visibleProducts && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md transition-all duration-300 hover:shadow-lg w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-mvmt-gray-200"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5 text-mvmt-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md transition-all duration-300 hover:shadow-lg w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-mvmt-gray-200"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5 text-mvmt-gray-800" />
              </button>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center mt-6 gap-2">
                {Array.from({ length: Math.min(5, maxIndex + 1) }).map((_, idx) => {
                  // Show just a subset of indicators if we have many products
                  const isInRange = maxIndex <= 5 || (
                    idx === 0 || 
                    idx === maxIndex || 
                    Math.abs(idx - activeIndex) <= 1
                  );
                  
                  if (!isInRange) {
                    return idx === 2 ? (
                      <span key="ellipsis" className="flex items-center px-1">…</span>
                    ) : null;
                  }
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeIndex === idx 
                          ? "bg-mvmt-gray-800 w-4" 
                          : "bg-mvmt-gray-300"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
