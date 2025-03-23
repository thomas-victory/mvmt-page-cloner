
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { productsData } from "@/data/products";

const Wishlist = () => {
  // For demo purposes, showing some random products as wishlist items
  // In a real app, this would pull from user's saved wishlist
  const wishlistItems = productsData.slice(0, 4);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="mvmt-container">
          <h1 className="text-3xl font-semibold mb-8">My Wishlist</h1>
          
          {wishlistItems.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {wishlistItems.map((product) => (
                  <div key={product.id} className="relative">
                    <button
                      className="absolute top-2 right-2 z-10 bg-white rounded-full p-1.5 shadow-md"
                      aria-label="Remove from wishlist"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </button>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Link 
                  to="/shop" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-mvmt-black text-white font-medium text-sm transition-colors hover:bg-mvmt-black/90"
                >
                  Continue Shopping
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-medium mb-4">Your wishlist is empty</h2>
              <p className="text-mvmt-gray-600 mb-8 max-w-lg mx-auto">
                Add items to your wishlist by clicking the heart icon on any product.
              </p>
              <Link 
                to="/shop" 
                className="inline-flex items-center justify-center px-6 py-3 bg-mvmt-black text-white font-medium text-sm transition-colors hover:bg-mvmt-black/90"
              >
                Shop Now
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Wishlist;
