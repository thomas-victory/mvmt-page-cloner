
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard, { Product } from "@/components/ProductCard";
import { ChevronDown, Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";

const productsData = [
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
  // ... (including all 8 products from the Index page)
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
  // Additional products for the shop page
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
  },
];

type FilterState = {
  category: string;
  priceRange: [number, number];
  sort: string;
  newArrivals: boolean;
  bestsellers: boolean;
  sale: boolean;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    priceRange: [0, 500],
    sort: 'featured',
    newArrivals: false,
    bestsellers: false,
    sale: false
  });
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [expandedFilter, setExpandedFilter] = useState<string | null>("category");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    let filteredProducts = [...productsData];
    
    // Filter by category
    if (filters.category !== 'all') {
      filteredProducts = filteredProducts.filter(p => p.category === filters.category);
    }
    
    // Filter by price range
    filteredProducts = filteredProducts.filter(
      p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );
    
    // Filter by new arrivals
    if (filters.newArrivals) {
      filteredProducts = filteredProducts.filter(p => p.isNew);
    }
    
    // Filter by bestsellers
    if (filters.bestsellers) {
      filteredProducts = filteredProducts.filter(p => p.isBestseller);
    }
    
    // Filter by sale items
    if (filters.sale) {
      filteredProducts = filteredProducts.filter(p => p.originalPrice);
    }
    
    // Sort products
    if (filters.sort === 'price-low-high') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'price-high-low') {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (filters.sort === 'newest') {
      filteredProducts.sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
    }
    
    setProducts(filteredProducts);
  }, [filters]);
  
  const toggleFilter = (filterName: string) => {
    setExpandedFilter(expandedFilter === filterName ? null : filterName);
  };
  
  const handleFilterChange = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };
  
  const clearFilters = () => {
    setFilters({
      category: 'all',
      priceRange: [0, 500],
      sort: 'featured',
      newArrivals: false,
      bestsellers: false,
      sale: false
    });
  };
  
  const toggleFilterMenu = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Page Header */}
        <div className="mvmt-container py-8">
          <h1 className="text-3xl font-bold text-center">Shop All Watches</h1>
          <div className="flex justify-center mt-4">
            <nav className="text-sm text-mvmt-gray-600">
              <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                  <Link to="/" className="hover:text-mvmt-black transition-colors duration-300">Home</Link>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-mvmt-black">Shop</li>
              </ol>
            </nav>
          </div>
        </div>
        
        {/* Shop Grid */}
        <div className="mvmt-container pb-16">
          <div className="flex flex-col lg:flex-row">
            {/* Filters - Desktop */}
            <aside className="lg:w-64 hidden lg:block pr-8">
              <div className="sticky top-24">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <button 
                    onClick={clearFilters}
                    className="text-sm text-mvmt-gray-600 hover:text-mvmt-black"
                  >
                    Clear all
                  </button>
                </div>
                
                {/* Category Filter */}
                <div className="mb-6">
                  <button 
                    className="flex items-center justify-between w-full text-left font-medium pb-2 border-b border-mvmt-gray-200"
                    onClick={() => toggleFilter('category')}
                  >
                    <span>Category</span>
                    <ChevronDown 
                      className={cn(
                        "h-5 w-5 transition-transform duration-300",
                        expandedFilter === 'category' ? "rotate-180" : ""
                      )} 
                    />
                  </button>
                  <div 
                    className={cn(
                      "mt-3 space-y-2 transition-all duration-300",
                      expandedFilter === 'category' ? "max-h-40" : "max-h-0 overflow-hidden"
                    )}
                  >
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="category"
                        checked={filters.category === 'all'}
                        onChange={() => handleFilterChange('category', 'all')}
                        className="mr-2"
                      />
                      <span>All Watches</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="category"
                        checked={filters.category === 'men'}
                        onChange={() => handleFilterChange('category', 'men')}
                        className="mr-2"
                      />
                      <span>Men's Watches</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="category"
                        checked={filters.category === 'women'}
                        onChange={() => handleFilterChange('category', 'women')}
                        className="mr-2"
                      />
                      <span>Women's Watches</span>
                    </label>
                  </div>
                </div>
                
                {/* Price Filter */}
                <div className="mb-6">
                  <button 
                    className="flex items-center justify-between w-full text-left font-medium pb-2 border-b border-mvmt-gray-200"
                    onClick={() => toggleFilter('price')}
                  >
                    <span>Price</span>
                    <ChevronDown 
                      className={cn(
                        "h-5 w-5 transition-transform duration-300",
                        expandedFilter === 'price' ? "rotate-180" : ""
                      )} 
                    />
                  </button>
                  <div 
                    className={cn(
                      "mt-3 space-y-2 transition-all duration-300",
                      expandedFilter === 'price' ? "max-h-40" : "max-h-0 overflow-hidden"
                    )}
                  >
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="price"
                        checked={filters.priceRange[0] === 0 && filters.priceRange[1] === 500}
                        onChange={() => handleFilterChange('priceRange', [0, 500])}
                        className="mr-2"
                      />
                      <span>All Prices</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="price"
                        checked={filters.priceRange[0] === 0 && filters.priceRange[1] === 150}
                        onChange={() => handleFilterChange('priceRange', [0, 150])}
                        className="mr-2"
                      />
                      <span>Under $150</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="price"
                        checked={filters.priceRange[0] === 150 && filters.priceRange[1] === 200}
                        onChange={() => handleFilterChange('priceRange', [150, 200])}
                        className="mr-2"
                      />
                      <span>$150 - $200</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="price"
                        checked={filters.priceRange[0] === 200 && filters.priceRange[1] === 500}
                        onChange={() => handleFilterChange('priceRange', [200, 500])}
                        className="mr-2"
                      />
                      <span>$200+</span>
                    </label>
                  </div>
                </div>
                
                {/* Collection Filter */}
                <div className="mb-6">
                  <button 
                    className="flex items-center justify-between w-full text-left font-medium pb-2 border-b border-mvmt-gray-200"
                    onClick={() => toggleFilter('collection')}
                  >
                    <span>Collection</span>
                    <ChevronDown 
                      className={cn(
                        "h-5 w-5 transition-transform duration-300",
                        expandedFilter === 'collection' ? "rotate-180" : ""
                      )} 
                    />
                  </button>
                  <div 
                    className={cn(
                      "mt-3 space-y-2 transition-all duration-300",
                      expandedFilter === 'collection' ? "max-h-40" : "max-h-0 overflow-hidden"
                    )}
                  >
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        checked={filters.newArrivals}
                        onChange={() => handleFilterChange('newArrivals', !filters.newArrivals)}
                        className="mr-2"
                      />
                      <span>New Arrivals</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        checked={filters.bestsellers}
                        onChange={() => handleFilterChange('bestsellers', !filters.bestsellers)}
                        className="mr-2"
                      />
                      <span>Bestsellers</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        checked={filters.sale}
                        onChange={() => handleFilterChange('sale', !filters.sale)}
                        className="mr-2"
                      />
                      <span>Sale</span>
                    </label>
                  </div>
                </div>
              </div>
            </aside>
            
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-4">
              <button 
                onClick={toggleFilterMenu}
                className="flex items-center justify-center w-full py-3 border border-mvmt-gray-300 rounded"
              >
                <Filter className="h-5 w-5 mr-2" />
                <span>Filter & Sort</span>
              </button>
            </div>
            
            {/* Mobile Filter Menu */}
            <div 
              className={cn(
                "fixed inset-0 bg-white z-40 transition-transform duration-400 ease-out-smooth lg:hidden",
                isFilterMenuOpen ? "translate-y-0" : "translate-y-full"
              )}
            >
              <div className="h-full overflow-y-auto pb-6">
                <div className="sticky top-0 bg-white border-b border-mvmt-gray-200 px-4 py-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Filter & Sort</h2>
                  <button 
                    onClick={toggleFilterMenu}
                    className="text-mvmt-gray-700 hover:text-mvmt-black"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="px-4 py-6 space-y-6">
                  {/* Mobile Sort Options */}
                  <div>
                    <h3 className="text-base font-medium mb-3">Sort By</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="sort-mobile"
                          checked={filters.sort === 'featured'}
                          onChange={() => handleFilterChange('sort', 'featured')}
                          className="mr-2"
                        />
                        <span>Featured</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="sort-mobile"
                          checked={filters.sort === 'price-low-high'}
                          onChange={() => handleFilterChange('sort', 'price-low-high')}
                          className="mr-2"
                        />
                        <span>Price: Low to High</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="sort-mobile"
                          checked={filters.sort === 'price-high-low'}
                          onChange={() => handleFilterChange('sort', 'price-high-low')}
                          className="mr-2"
                        />
                        <span>Price: High to Low</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="sort-mobile"
                          checked={filters.sort === 'newest'}
                          onChange={() => handleFilterChange('sort', 'newest')}
                          className="mr-2"
                        />
                        <span>Newest</span>
                      </label>
                    </div>
                  </div>
                  
                  {/* Mobile Category Options */}
                  <div>
                    <h3 className="text-base font-medium mb-3">Category</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="category-mobile"
                          checked={filters.category === 'all'}
                          onChange={() => handleFilterChange('category', 'all')}
                          className="mr-2"
                        />
                        <span>All Watches</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="category-mobile"
                          checked={filters.category === 'men'}
                          onChange={() => handleFilterChange('category', 'men')}
                          className="mr-2"
                        />
                        <span>Men's Watches</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="category-mobile"
                          checked={filters.category === 'women'}
                          onChange={() => handleFilterChange('category', 'women')}
                          className="mr-2"
                        />
                        <span>Women's Watches</span>
                      </label>
                    </div>
                  </div>
                  
                  {/* Mobile Price Options */}
                  <div>
                    <h3 className="text-base font-medium mb-3">Price</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="price-mobile"
                          checked={filters.priceRange[0] === 0 && filters.priceRange[1] === 500}
                          onChange={() => handleFilterChange('priceRange', [0, 500])}
                          className="mr-2"
                        />
                        <span>All Prices</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="price-mobile"
                          checked={filters.priceRange[0] === 0 && filters.priceRange[1] === 150}
                          onChange={() => handleFilterChange('priceRange', [0, 150])}
                          className="mr-2"
                        />
                        <span>Under $150</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="price-mobile"
                          checked={filters.priceRange[0] === 150 && filters.priceRange[1] === 200}
                          onChange={() => handleFilterChange('priceRange', [150, 200])}
                          className="mr-2"
                        />
                        <span>$150 - $200</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="price-mobile"
                          checked={filters.priceRange[0] === 200 && filters.priceRange[1] === 500}
                          onChange={() => handleFilterChange('priceRange', [200, 500])}
                          className="mr-2"
                        />
                        <span>$200+</span>
                      </label>
                    </div>
                  </div>
                  
                  {/* Mobile Collection Options */}
                  <div>
                    <h3 className="text-base font-medium mb-3">Collection</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          checked={filters.newArrivals}
                          onChange={() => handleFilterChange('newArrivals', !filters.newArrivals)}
                          className="mr-2"
                        />
                        <span>New Arrivals</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          checked={filters.bestsellers}
                          onChange={() => handleFilterChange('bestsellers', !filters.bestsellers)}
                          className="mr-2"
                        />
                        <span>Bestsellers</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          checked={filters.sale}
                          onChange={() => handleFilterChange('sale', !filters.sale)}
                          className="mr-2"
                        />
                        <span>Sale</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-mvmt-gray-200 px-4 py-4 flex flex-col space-y-4">
                  <button 
                    onClick={clearFilters}
                    className="w-full py-3 border border-mvmt-gray-300 text-mvmt-gray-700 font-medium rounded"
                  >
                    Clear All
                  </button>
                  <button 
                    onClick={toggleFilterMenu}
                    className="w-full py-3 bg-mvmt-black text-white font-medium rounded"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product Grid */}
            <div className="lg:flex-1">
              {/* Sort - Desktop */}
              <div className="hidden lg:flex justify-end items-center mb-6">
                <label className="text-sm text-mvmt-gray-600 mr-2">Sort by:</label>
                <select 
                  value={filters.sort}
                  onChange={(e) => handleFilterChange('sort', e.target.value)}
                  className="text-sm border-0 focus:ring-0 py-0"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
              
              {/* Results Stats */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-sm text-mvmt-gray-600">
                  Showing {products.length} {products.length === 1 ? 'product' : 'products'}
                </p>
              </div>
              
              {/* Products */}
              {products.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <p className="text-mvmt-gray-600 mb-4">No products match your selected filters.</p>
                  <button 
                    onClick={clearFilters}
                    className="mvmt-button-secondary"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
