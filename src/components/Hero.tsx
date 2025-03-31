
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  mobileImage: string;
  align: 'left' | 'center' | 'right';
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "The Future Is Now",
    subtitle: "Shop innovative timepieces that define style",
    buttonText: "Shop Men's",
    buttonLink: "/mens-watches",
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    mobileImage: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    align: 'left'
  },
  {
    id: 2,
    title: "Timeless Elegance",
    subtitle: "Discover watches that transcend trends",
    buttonText: "Shop Women's",
    buttonLink: "/womens-watches",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    mobileImage: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    align: 'right'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const nextSlide = (currentSlide + 1) % heroSlides.length;
      goToSlide(nextSlide);
    }, 6000);
    
    return () => clearTimeout(timer);
  }, [currentSlide, isTransitioning]);

  return (
    <div className="relative h-[calc(100vh-4rem)] md:h-screen w-full overflow-hidden">
      {/* Hero Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-600 ease-out-smooth",
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <picture>
              <source media="(min-width: 768px)" srcSet={slide.image} />
              <img
                src={slide.mobileImage}
                alt={slide.title}
                className="w-full h-full object-cover animate-image-scale"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="mvmt-container relative h-full flex items-center z-20">
            <div 
              className={cn(
                "max-w-md space-y-6 text-white",
                slide.align === 'left' ? "text-left ml-0 md:ml-4" : 
                slide.align === 'right' ? "text-right ml-auto mr-0 md:mr-4" : 
                "text-center mx-auto"
              )}
            >
              <h1 
                className={cn(
                  "text-3xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0",
                  currentSlide === index && "animate-fade-up"
                )}
                style={{
                  animationDelay: '0.3s',
                  animationFillMode: 'forwards'
                }}
              >
                {slide.title}
              </h1>
              <p 
                className={cn(
                  "text-lg md:text-xl opacity-0",
                  currentSlide === index && "animate-fade-up"
                )}
                style={{
                  animationDelay: '0.5s',
                  animationFillMode: 'forwards'
                }}
              >
                {slide.subtitle}
              </p>
              <div 
                className={cn(
                  "opacity-0",
                  currentSlide === index && "animate-fade-up"
                )}
                style={{
                  animationDelay: '0.7s',
                  animationFillMode: 'forwards'
                }}
              >
                <Link
                  to={slide.buttonLink}
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-mvmt-black font-medium text-sm transition-transform duration-300 hover:scale-[1.03]"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              currentSlide === index ? "bg-white scale-[1.2]" : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
