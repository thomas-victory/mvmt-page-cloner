
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Product } from "@/components/ProductCard";

const mensWatchesData: Product[] = [
  {
    id: "1",
    name: "Classic Black",
    price: 138,
    images: [
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1619134778706-7015b6640850?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    category: "men",
    isBestseller: true,
    slug: "classic-black",
    colorOptions: [
      { name: "Black", color: "#000000" },
      { name: "Silver", color: "#c0c0c0" }
    ]
  },
  {
    id: "2",
    name: "Nova Series",
    price: 158,
    images: [
      "https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    category: "men",
    isNew: true,
    slug: "nova-series",
    colorOptions: [
      { name: "Blue", color: "#354F6B" },
      { name: "Black", color: "#000000" }
    ]
  },
  {
    id: "3",
    name: "Voyager Minimalist",
    price: 145,
    originalPrice: 175,
    images: [
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    category: "men",
    slug: "voyager-minimalist",
    colorOptions: [
      { name: "Brown", color: "#8B572A" },
      { name: "Black", color: "#000000" }
    ]
  },
  {
    id: "7",
    name: "Meridian Chronograph",
    price: 180,
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    category: "men",
    slug: "meridian-chronograph",
    colorOptions: [
      { name: "Silver", color: "#C0C0C0" },
      { name: "Black", color: "#000000" }
    ]
  },
  {
    id: "9",
    name: "Apex Chrono",
    price: 195,
    images: [
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1619134778706-7015b6640850?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    category: "men",
    isNew: true,
    slug: "apex-chrono",
    colorOptions: [
      { name: "Silver", color: "#C0C0C0" },
      { name: "Black", color: "#000000" }
    ]
  },
  {
    id: "11",
    name: "Quantum Black",
    price: 158,
    images: [
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    category: "men",
    slug: "quantum-black",
    colorOptions: [
      { name: "Black", color: "#000000" },
      { name: "Brown", color: "#8B572A" }
    ]
  }
];

const MensWatches = () => {
  const bestsellers = mensWatchesData.filter(p => p.isBestseller).slice(0, 4);
  const newArrivals = mensWatchesData.filter(p => p.isNew).slice(0, 4);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Banner */}
        <section className="relative h-96 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Men's Watches"
              className="w-full h-full object-cover animate-image-scale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </div>
          <div className="mvmt-container relative h-full flex items-center">
            <div className="max-w-lg text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                Men's Watches
              </h1>
              <p className="text-lg opacity-90 mb-8 animate-fade-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                Timeless elegance designed for the modern man. Browse our collection of premium men's watches.
              </p>
              <Link 
                to="/shop" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-mvmt-black font-medium text-sm transition-transform duration-300 hover:scale-[1.03] animate-fade-up"
                style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
              >
                Shop All Watches
              </Link>
            </div>
          </div>
        </section>
        
        {/* Category Navigation */}
        <section className="py-12 bg-mvmt-gray-100">
          <div className="mvmt-container">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">Shop by Collection</h2>
              <p className="text-mvmt-gray-600">Find the perfect timepiece for every occasion</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Link 
                to="/shop?collection=minimalist&category=men" 
                className="group relative overflow-hidden rounded-lg aspect-[3/4]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Minimalist Collection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Minimalist</h3>
                </div>
              </Link>
              
              <Link 
                to="/shop?collection=chronograph&category=men" 
                className="group relative overflow-hidden rounded-lg aspect-[3/4]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Chronograph Collection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Chronograph</h3>
                </div>
              </Link>
              
              <Link 
                to="/shop?collection=leather&category=men" 
                className="group relative overflow-hidden rounded-lg aspect-[3/4]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Leather Collection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Leather</h3>
                </div>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Bestsellers */}
        <FeaturedProducts
          title="Men's Bestsellers"
          subtitle="Our most popular styles"
          viewAllLink="/shop?bestseller=true&category=men"
          products={bestsellers}
          variant="carousel"
        />
        
        {/* Feature Section */}
        <section className="py-16 bg-mvmt-gray-100">
          <div className="mvmt-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4">Designed for Success</h2>
                <p className="text-mvmt-gray-600 mb-6 max-w-md">
                  Our men's collection is crafted with premium materials and meticulous attention to detail. 
                  Each timepiece is designed to be versatile enough for any occasion, from business meetings to weekend getaways.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/shop?category=men" 
                    className="mvmt-button-primary"
                  >
                    Shop Collection
                  </Link>
                  <Link 
                    to="/our-story" 
                    className="mvmt-button-secondary"
                  >
                    Our Story
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Men's watch closeup"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* New Arrivals */}
        {newArrivals.length > 0 && (
          <FeaturedProducts
            title="New Arrivals"
            subtitle="The latest additions to our collection"
            viewAllLink="/shop?new=true&category=men"
            products={newArrivals}
          />
        )}
        
        {/* Instagram Section */}
        <section className="py-12 bg-white">
          <div className="mvmt-container">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold">Follow Us on Instagram</h2>
              <p className="text-mvmt-gray-600 mt-2">See how others style their MVMT watches</p>
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
                      src={`https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&image=${num}`} 
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

export default MensWatches;
