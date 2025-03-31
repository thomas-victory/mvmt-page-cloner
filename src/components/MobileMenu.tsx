
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  ChevronDown, 
  Search, 
  User, 
  Heart, 
  X 
} from 'lucide-react';

interface NavLink {
  name: string;
  path: string;
  submenu?: { name: string; path: string }[];
}

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: NavLink[];
  onClose: () => void;
  onSearchOpen: () => void;
}

const MobileMenu = ({ isOpen, navLinks, onClose, onSearchOpen }: MobileMenuProps) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<string | null>(null);
  
  const toggleSubmenu = (key: string) => {
    setIsSubmenuOpen(isSubmenuOpen === key ? null : key);
  };

  return (
    <div 
      className={cn(
        "fixed inset-0 bg-white z-40 transition-transform duration-400 ease-out-smooth lg:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
      aria-hidden={!isOpen}
    >
      <div className="h-full overflow-y-auto pt-20 pb-6 px-6">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-mvmt-gray-700 hover:text-mvmt-black transition-colors duration-300 p-2"
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
                  aria-expanded={isSubmenuOpen === link.name}
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
                      onClick={onClose}
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
                onClick={onClose}
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
            onClick={onClose}
          >
            <User className="h-5 w-5 mr-3" />
            <span>Account</span>
          </Link>
          <Link 
            to="/wishlist" 
            className="flex items-center py-3 text-mvmt-gray-700 hover:text-mvmt-black"
            onClick={onClose}
          >
            <Heart className="h-5 w-5 mr-3" />
            <span>Wishlist</span>
          </Link>
          <button 
            onClick={() => {
              onClose();
              onSearchOpen();
            }}
            className="flex items-center py-3 text-mvmt-gray-700 hover:text-mvmt-black w-full text-left"
          >
            <Search className="h-5 w-5 mr-3" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
