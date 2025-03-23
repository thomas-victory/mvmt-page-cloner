
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard, { Product } from "@/components/ProductCard";
import { ChevronDown, Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { productsData } from "@/data/products";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type FilterState = {
  category: string;
  priceRange: [number, number];
  sort: string;
  newArrivals: boolean;
  bestsellers: boolean;
  sale: boolean;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
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
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    let filtered = [...productsData];
    
    // Filter by category
    if (filters.category !== 'all') {
      filtered = filtered.filter(p => p.category === filters.category);
    }
    
    // Filter by price range
    filtered = filtered.filter(
      p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );
    
    // Filter by new arrivals
    if (filters.newArrivals) {
      filtered = filtered.filter(p => p.isNew);
    }
    
    // Filter by bestsellers
    if (filters.bestsellers) {
      filtered = filtered.filter(p => p.isBestseller);
    }
    
    // Filter by sale items
    if (filters.sale) {
      filtered = filtered.filter(p => p.originalPrice);
    }
    
    // Sort products
    if (filters.sort === 'price-low-high') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'price-high-low') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (filters.sort === 'newest') {
      filtered.sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
    }
    
    setFilteredProducts(filtered);
    setTotalPages(Math.ceil(filtered.length / productsPerPage));
    setCurrentPage(1); // Reset to first page when filters change
  }, [filters]);
  
  // Update displayed products when page changes or filtered products change
  useEffect(() => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    setProducts(currentProducts);
    
    // Scroll to top when page changes
    window.scrollTo(0, 0);
  }, [currentPage, filteredProducts]);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
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

  // Generate pagination items
  const renderPaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;
    
    // Always show first page
    items.push(
      <PaginationItem key="first">
        <PaginationLink 
          onClick={() => handlePageChange(1)} 
          isActive={currentPage === 1}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );
    
    // Show ellipsis after first page if needed
    if (currentPage > 3) {
      items.push(
        <PaginationItem key="ellipsis-1">
          <span className="flex h-9 w-9 items-center justify-center">...</span>
        </PaginationItem>
      );
    }
    
    // Calculate range of visible page numbers
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);
    
    // Adjust range if at the edges
    if (currentPage <= 3) {
      startPage = 2;
      endPage = Math.min(totalPages - 1, maxVisiblePages - 1);
    } else if (currentPage >= totalPages - 2) {
      startPage = Math.max(2, totalPages - (maxVisiblePages - 2));
      endPage = totalPages - 1;
    }
    
    // Add middle page numbers
    for (let i = startPage; i <= endPage; i++) {
      if (i <= 1 || i >= totalPages) continue; // Skip first and last pages (added separately)
      items.push(
        <PaginationItem key={i}>
          <PaginationLink 
            onClick={() => handlePageChange(i)} 
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    // Show ellipsis before last page if needed
    if (currentPage < totalPages - 2 && totalPages > 4) {
      items.push(
        <PaginationItem key="ellipsis-2">
          <span className="flex h-9 w-9 items-center justify-center">...</span>
        </PaginationItem>
      );
    }
    
    // Always show last page if there is more than one page
    if (totalPages > 1) {
      items.push(
        <PaginationItem key="last">
          <PaginationLink 
            onClick={() => handlePageChange(totalPages)} 
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    return items;
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
                  Showing {products.length} of {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
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
              
              {/* Pagination */}
              {filteredProducts.length > productsPerPage && (
                <div className="mt-12">
                  <Pagination>
                    <PaginationContent>
                      {/* Previous Page Button */}
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                          className={cn(currentPage === 1 ? "pointer-events-none opacity-50" : "")}
                        />
                      </PaginationItem>
                      
                      {/* Page Numbers */}
                      {renderPaginationItems()}
                      
                      {/* Next Page Button */}
                      <PaginationItem>
                        <PaginationNext
                          onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                          className={cn(currentPage === totalPages ? "pointer-events-none opacity-50" : "")}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
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
