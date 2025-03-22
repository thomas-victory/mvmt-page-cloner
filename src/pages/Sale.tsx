
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard, { Product } from "@/components/ProductCard";

// Filter products that are on sale (have an originalPrice)
const saleProducts = [
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

const Sale = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Page Header */}
        <div className="mvmt-container py-8">
          <h1 className="text-3xl font-bold text-center">Sale Watches</h1>
          <div className="flex justify-center mt-4">
            <nav className="text-sm text-mvmt-gray-600">
              <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                  <Link to="/" className="hover:text-mvmt-black transition-colors duration-300">Home</Link>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-mvmt-black">Sale</li>
              </ol>
            </nav>
          </div>
        </div>
        
        {/* Sale Banner */}
        <div className="bg-red-100 py-6 mb-8">
          <div className="mvmt-container text-center">
            <h2 className="text-2xl font-semibold text-red-700">Limited Time Offers</h2>
            <p className="mt-2 text-red-600">Shop our selection of discounted watches before they're gone!</p>
          </div>
        </div>
        
        {/* Sale Products */}
        <div className="mvmt-container pb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {saleProducts.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-mvmt-gray-600 mb-4">No sale items available at the moment.</p>
              <Link to="/shop" className="mvmt-button-primary">
                Shop All Watches
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sale;
