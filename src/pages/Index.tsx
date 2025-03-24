
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

const Index = () => {
  const mensWatches = productsData.filter(p => p.category === "men").slice(0, 8);
  const womensWatches = productsData.filter(p => p.category === "women").slice(0, 4);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-0">
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Men's Watches */}
        <FeaturedProducts
          title="Men's Bestsellers"
          subtitle="Our most popular men's styles"
          viewAllLink="/mens-watches"
          products={mensWatches}
          variant="carousel"
        />
        
        {/* CTA Banner */}
        <section className="mvmt-section bg-mvmt-gray-100">
          <div className="mvmt-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-square overflow-hidden bg-mvmt-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Premium watch craftsmanship" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left md:pl-8">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Crafted for Excellence
                </h2>
                <p className="text-mvmt-gray-600 mb-6 max-w-md">
                  Our timepieces are meticulously designed to deliver premium quality 
                  at an accessible price point. Discover the perfect balance of style and functionality.
                </p>
                <Link 
                  to="/our-story"
                  className="mvmt-button-primary"
                >
                  Our Story
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Women's Watches */}
        <FeaturedProducts
          title="Women's Collection"
          subtitle="Elegant designs for every occasion"
          viewAllLink="/womens-watches"
          products={womensWatches}
        />
        
        {/* Dual CTA */}
        <section className="mvmt-section">
          <div className="mvmt-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Men's CTA */}
              <div className="relative overflow-hidden group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Men's Collection" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 text-white">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">Men's Collection</h3>
                  <p className="mb-4 text-white/80">Sophisticated timepieces for the modern man</p>
                  <Link 
                    to="/mens-watches"
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-mvmt-black text-sm font-medium transition-transform duration-300 hover:scale-[1.03]"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
              
              {/* Women's CTA */}
              <div className="relative overflow-hidden group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Women's Collection" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 text-white">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">Women's Collection</h3>
                  <p className="mb-4 text-white/80">Elegant designs that elevate any outfit</p>
                  <Link 
                    to="/womens-watches"
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-mvmt-black text-sm font-medium transition-transform duration-300 hover:scale-[1.03]"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Instagram Feed Section */}
        <section className="mvmt-section bg-mvmt-gray-100">
          <div className="mvmt-container">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold">Join the Movement</h2>
              <p className="text-mvmt-gray-600 mt-2">Follow us on Instagram @mvmt</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((num) => (
                <a 
                  key={num}
                  href="https://instagram.com/mvmt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block overflow-hidden group"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-1620625515032-6ed0c8989c7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80&image=${num}`} 
                      alt="Instagram post" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium">@mvmt</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
