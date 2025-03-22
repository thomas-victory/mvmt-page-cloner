
import { Link } from "react-router-dom";
import BasicPage from "@/components/BasicPage";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

// Sample jewelry items with reviews
const jewelryItems = [
  {
    id: "j1",
    name: "Minimalist Gold Chain",
    price: 78,
    rating: 4.8,
    reviewCount: 24,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "j2",
    name: "Silver Geometric Earrings",
    price: 45,
    rating: 4.6,
    reviewCount: 18,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "j3",
    name: "Brushed Metal Cuff",
    price: 65,
    rating: 4.9,
    reviewCount: 31,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "j4",
    name: "Layered Pendant Necklace",
    price: 58,
    rating: 4.7,
    reviewCount: 15,
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
];

const Jewelry = () => {
  return (
    <BasicPage title="Jewelry Collection" breadcrumb="Jewelry">
      <div className="prose max-w-none">
        <p className="text-center text-lg mb-8">
          Explore our curated collection of minimalist jewelry pieces designed to complement your style.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {jewelryItems.map((item) => (
            <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-md">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-mvmt-black mb-1">{item.name}</h3>
                <p className="text-mvmt-gray-800 font-medium mb-2">${item.price}</p>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={`h-3.5 w-3.5 ${
                          index < Math.floor(item.rating)
                            ? "text-amber-400 fill-amber-400"
                            : "text-mvmt-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-xs text-mvmt-gray-600">
                    {item.rating} ({item.reviewCount})
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/womens-jewelry" 
            className="inline-block bg-mvmt-black text-white px-6 py-3 font-medium mr-4 hover:bg-mvmt-gray-800 transition-colors"
          >
            Women's Collection
          </Link>
          <Link 
            to="/mens-jewelry" 
            className="inline-block bg-white text-mvmt-black border border-mvmt-black px-6 py-3 font-medium hover:bg-mvmt-gray-100 transition-colors"
          >
            Men's Collection
          </Link>
        </div>
      </div>
    </BasicPage>
  );
};

export default Jewelry;
