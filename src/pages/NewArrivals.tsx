
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductCard, { Product } from "@/components/ProductCard";

// Filter products that have isNew flag set to true
const getNewArrivalsProducts = (): Product[] => {
  // Import all products data from both categories
  const productsData = [
    // Men's watches that are new
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
    // Women's watches that are new
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
    }
  ];
  
  return productsData;
};

const NewArrivals = () => {
  const newProducts = getNewArrivalsProducts();
  
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
              alt="New Arrivals"
              className="w-full h-full object-cover animate-image-scale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </div>
          <div className="mvmt-container relative h-full flex items-center">
            <div className="max-w-lg text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                New Arrivals
              </h1>
              <p className="text-lg opacity-90 mb-8 animate-fade-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                Discover our latest styles and innovations in premium watches.
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
        
        {/* New Arrivals Products */}
        <section className="py-16">
          <div className="mvmt-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The Latest Styles</h2>
              <p className="text-mvmt-gray-600 max-w-2xl mx-auto">
                Our designers have created these stunning new timepieces to complement your style. 
                Be among the first to showcase these exclusive new designs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Feature section */}
        <section className="py-16 bg-mvmt-gray-100">
          <div className="mvmt-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="relative aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="New watch close-up"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Innovation in Design</h2>
                <p className="text-mvmt-gray-600 mb-6">
                  Our new collection represents the cutting edge of watch design and technology. 
                  We've crafted these pieces to be both timeless and contemporary, ensuring they'll remain stylish for years to come.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-mvmt-black font-bold mr-2">•</span>
                    <span>Premium materials selected for durability and comfort</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mvmt-black font-bold mr-2">•</span>
                    <span>Innovative designs that stand out from the crowd</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mvmt-black font-bold mr-2">•</span>
                    <span>Limited availability ensures exclusivity</span>
                  </li>
                </ul>
                <Link to="/shop?new=true" className="mvmt-button-primary">
                  Explore All New Styles
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-mvmt-black text-white">
          <div className="mvmt-container text-center">
            <h2 className="text-3xl font-bold mb-4">Be the First to Know</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to get early access to new releases, exclusive offers, and styling tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 w-full text-mvmt-black" 
                required
              />
              <button type="submit" className="px-6 py-3 bg-white text-mvmt-black font-medium hover:bg-mvmt-gray-200 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewArrivals;
