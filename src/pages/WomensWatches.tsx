
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Product } from "@/components/ProductCard";

const womensWatchesData: Product[] = [
  {
    id: "4",
    name: "Eclipse Rose Gold",
    price: 168,
    images: [
      "https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518131672697-613becd4fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    category: "women",
    isBestseller: true,
    slug: "eclipse-rose-gold",
    colorOptions: [
      { name: "Rose Gold", color: "#B76E79" },
      { name: "Gold", color: "#D4AF37" }
    ]
  },
  {
    id: "5",
    name: "Luna Mesh",
    price: 148,
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    category: "women",
    isNew: true,
    slug: "luna-mesh",
    colorOptions: [
      { name: "Silver", color: "#C0C0C0" },
      { name: "Gold", color: "#D4AF37" }
    ]
  },
  {
    id: "6",
    name: "Stellar Diamond",
    price: 195,
    originalPrice: 225,
    images: [
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1537217547330-11f21d69ccae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    category: "women",
    slug: "stellar-diamond",
    colorOptions: [
      { name: "White", color: "#FFFFFF" },
      { name: "Black", color: "#000000" }
    ]
  },
  {
    id: "8",
    name: "Solstice Gold",
    price: 178,
    images: [
      "https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518131672697-613becd4fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    category: "women",
    slug: "solstice-gold",
    colorOptions: [
      { name: "Gold", color: "#D4AF37" },
      { name: "Rose Gold", color: "#B76E79" }
    ]
  },
  {
    id: "10",
    name: "Aurora Mesh",
    price: 128,
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    category: "women",
    slug: "aurora-mesh",
    colorOptions: [
      { name: "Gold", color: "#D4AF37" },
      { name: "Rose Gold", color: "#B76E79" }
    ]
  },
  {
    id: "12",
    name: "Celestial Rose",
    price: 168,
    originalPrice: 188,
    images: [
      "https://images.unsplash.com/photo-1537217547330-11f21d69ccae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    category: "women",
    slug: "celestial-rose",
    colorOptions: [
      { name: "Rose Gold", color: "#B76E79" },
      { name: "Gold", color: "#D4AF37" }
    ]
  }
];

const WomensWatches = () => {
  const bestsellers = womensWatchesData.filter(p => p.isBestseller).slice(0, 4);
  const newArrivals = womensWatchesData.filter(p => p.isNew).slice(0, 4);
  const saleItems = womensWatchesData.filter(p => p.originalPrice).slice(0, 4);
  
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
              src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Women's Watches"
              className="w-full h-full object-cover animate-image-scale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </div>
          <div className="mvmt-container relative h-full flex items-center">
            <div className="max-w-lg text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                Women's Watches
              </h1>
              <p className="text-lg opacity-90 mb-8 animate-fade-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                Elegant timepieces designed for the modern woman. Explore our collection of premium women's watches.
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
              <p className="text-mvmt-gray-600">Find your perfect style</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Link 
                to="/shop?collection=rose-gold&category=women" 
                className="group relative overflow-hidden rounded-lg aspect-[3/4]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Rose Gold Collection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Rose Gold</h3>
                </div>
              </Link>
              
              <Link 
                to="/shop?collection=mesh&category=women" 
                className="group relative overflow-hidden rounded-lg aspect-[3/4]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Mesh Collection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Mesh</h3>
                </div>
              </Link>
              
              <Link 
                to="/shop?collection=luxury&category=women" 
                className="group relative overflow-hidden rounded-lg aspect-[3/4]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1537217547330-11f21d69ccae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Luxury Collection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Luxury</h3>
                </div>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Bestsellers */}
        <FeaturedProducts
          title="Women's Bestsellers"
          subtitle="Our most popular styles"
          viewAllLink="/shop?bestseller=true&category=women"
          products={bestsellers}
          variant="carousel"
        />
        
        {/* Feature Section */}
        <section className="py-16 bg-mvmt-gray-100">
          <div className="mvmt-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="relative aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Women's watch closeup"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Elegance Redefined</h2>
                <p className="text-mvmt-gray-600 mb-6 max-w-md">
                  Our women's collection features sophisticated designs that seamlessly blend timeless elegance with modern style. 
                  Crafted with premium materials and meticulous attention to detail, these timepieces are the perfect accessory for any outfit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/shop?category=women" 
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
            </div>
          </div>
        </section>
        
        {/* New Arrivals */}
        {newArrivals.length > 0 && (
          <FeaturedProducts
            title="New Arrivals"
            subtitle="The latest additions to our collection"
            viewAllLink="/shop?new=true&category=women"
            products={newArrivals}
          />
        )}
        
        {/* Sale Items */}
        {saleItems.length > 0 && (
          <section className="py-16 bg-mvmt-gray-100">
            <div className="mvmt-container">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold mb-2">Limited Time Offer</h2>
                <p className="text-mvmt-gray-600">Special prices on selected items</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {saleItems.map((product) => (
                  <Link 
                    key={product.id}
                    to={`/products/${product.slug}`}
                    className="group relative overflow-hidden bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2.5 py-1 font-medium">
                        SALE
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">{product.name}</h3>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="font-medium">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-mvmt-gray-500 line-through text-sm">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Link 
                  to="/shop?sale=true&category=women"
                  className="mvmt-button-primary"
                >
                  View All Sale Items
                </Link>
              </div>
            </div>
          </section>
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
                      src={`https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&image=${num}`} 
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

export default WomensWatches;
