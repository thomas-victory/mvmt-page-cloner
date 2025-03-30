import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Search, ShoppingBag, User, Menu, X, ChevronDown, 
  Heart 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const toggleSubmenu = (key: string) => {
    setIsSubmenuOpen(isSubmenuOpen === key ? null : key);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  const navLinks = [
    { 
      name: 'MEN', 
      path: '/mens-watches',
      submenu: [
        { name: 'Watches', path: '/mens-watches' },
        { name: 'Sunglasses', path: '/mens-sunglasses' },
        { name: 'Jewelry', path: '/mens-jewelry' },
      ]
    },
    { 
      name: 'WOMEN', 
      path: '/womens-watches',
      submenu: [
        { name: 'Watches', path: '/womens-watches' },
        { name: 'Sunglasses', path: '/womens-sunglasses' },
        { name: 'Jewelry', path: '/womens-jewelry' },
      ]
    },
    { name: 'SHOP', path: '/shop' },
    { name: 'NEW ARRIVALS', path: '/new-arrivals' },
    { name: 'SALE', path: '/sale' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-600 ease-out-smooth",
        isScrolled 
          ? "bg-white/95 shadow-sm backdrop-blur-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="mvmt-container flex items-center justify-between">
        <Link 
          to="/" 
          className="relative z-50 font-bold text-2xl tracking-tight"
        >
          MVMT
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <div 
              key={index} 
              className="relative group"
              onMouseEnter={() => link.submenu && setIsSubmenuOpen(link.name)}
              onMouseLeave={() => link.submenu && setIsSubmenuOpen(null)}
            >
              <Link 
                to={link.path}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors duration-300 py-2",
                  location.pathname === link.path 
                    ? "text-mvmt-black" 
                    : "text-mvmt-gray-600 hover:text-mvmt-black"
                )}
              >
                <span className="flex items-center">
                  {link.name}
                  {link.submenu && (
                    <ChevronDown 
                      className={cn(
                        "ml-1 h-4 w-4 transition-transform duration-300",
                        isSubmenuOpen === link.name && "rotate-180"
                      )} 
                    />
                  )}
                </span>
              </Link>

              {link.submenu && (
                <div 
                  className={cn(
                    "absolute left-0 mt-2 w-48 origin-top-left bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-out-smooth",
                    isSubmenuOpen === link.name 
                      ? "opacity-100 translate-y-0 visible" 
                      : "opacity-0 -translate-y-4 invisible"
                  )}
                >
                  <div className="py-2">
                    {link.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block px-4 py-3 text-sm text-mvmt-gray-700 hover:bg-mvmt-gray-100 transition-colors duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-6">
          <button 
            className="text-mvmt-gray-700 hover:text-mvmt-black transition-colors duration-300"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <Link 
            to="/account" 
            className="text-mvmt-gray-700 hover:text-mvmt-black transition-colors duration-300"
            aria-label="Account"
          >
            <User className="h-5 w-5" />
          </Link>
          <Link 
            to="/wishlist" 
            className="text-mvmt-gray-700 hover:text-mvmt-black transition-colors duration-300"
            aria-label="Wishlist"
          >
            <Heart className="h-5 w-5" />
          </Link>
          <Link 
            to="/cart" 
            className="text-mvmt-gray-700 hover:text-mvmt-black transition-colors duration-300 relative"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <Badge 
                variant="default" 
                className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center rounded-full bg-mvmt-accent text-white text-xs"
              >
                {itemCount > 99 ? '99+' : itemCount}
              </Badge>
            )}
          </Link>
        </div>

        <div className="flex items-center space-x-4 lg:hidden">
          <Link 
            to="/cart" 
            className="text-mvmt-gray-700 hover:text-mvmt-black transition-colors duration-300 relative"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <Badge 
                variant="default" 
                className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center rounded-full bg-mvmt-accent text-white text-xs"
              >
                {itemCount > 99 ? '99+' : itemCount}
              </Badge>
            )}
          </Link>
          <button 
            onClick={toggleMobileMenu}
            className="text-mvmt-gray-700 hover:text-mvmt-black transition-colors duration-300"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isSearchOpen && (
          <div className="fixed inset-0 glassmorphism z-50 flex items-start justify-center pt-24 px-4 animate-fade-in">
            <div className="w-full max-w-3xl">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 pr-12 text-lg border-b-2 border-mvmt-black rounded-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                  autoFocus
                />
                <Button 
                  type="submit" 
                  variant="ghost" 
                  className="absolute right-0 top-0 h-12 aspect-square text-mvmt-black hover:bg-transparent"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </form>
              <div className="mt-8 text-center text-mvmt-gray-600">
                <p className="text-sm">Popular searches: Watches, Sunglasses, Jewelry</p>
              </div>
              <Button 
                variant="ghost" 
                className="absolute top-8 right-8 text-mvmt-black hover:bg-transparent"
                onClick={() => setIsSearchOpen(false)}
                aria-label="Close search"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>
        )}

        <div 
          className={cn(
            "fixed inset-0 bg-white z-40 transition-transform duration-400 ease-out-smooth lg:hidden",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="h-full overflow-y-auto pt-20 pb-6 px-6">
            <button 
              onClick={toggleMobileMenu}
              className="absolute top-6 right-6 text-mvmt-gray-700 hover:text-mvmt-black transition-colors duration-300"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
            
            {navLinks.map((link, index) => (
              <div key={index} className="border-b border-mvmt-gray-100 py-4">
                {link.submenu ? (
                  <div>
                    <button 
                      onClick={() => toggleSubmenu(link.name)}
                      className="flex items-center justify-between w-full py-2 text-base font-medium"
                    >
                      {link.name}
                      <ChevronDown 
                        className={cn(
                          "h-5 w-5 transition-transform duration-300",
                          isSubmenuOpen === link.name && "rotate-180"
                        )} 
                      />
                    </button>
                    <div 
                      className={cn(
                        "mt-2 ml-4 space-y-2 transition-all duration-300",
                        isSubmenuOpen === link.name 
                          ? "max-h-96 opacity-100" 
                          : "max-h-0 opacity-0 overflow-hidden"
                      )}
                    >
                      {link.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="block py-2 text-sm text-mvmt-gray-600 hover:text-mvmt-black"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={link.path}
                    className="block py-2 text-base font-medium text-mvmt-gray-700 hover:text-mvmt-black"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="mt-6 space-y-4">
              <Link 
                to="/account" 
                className="flex items-center py-3 text-mvmt-gray-700 hover:text-mvmt-black"
              >
                <User className="h-5 w-5 mr-3" />
                <span>Account</span>
              </Link>
              <Link 
                to="/wishlist" 
                className="flex items-center py-3 text-mvmt-gray-700 hover:text-mvmt-black"
              >
                <Heart className="h-5 w-5 mr-3" />
                <span>Wishlist</span>
              </Link>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="flex items-center py-3 text-mvmt-gray-700 hover:text-mvmt-black w-full text-left"
              >
                <Search className="h-5 w-5 mr-3" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
