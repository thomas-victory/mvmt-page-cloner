
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Shop',
      links: [
        { name: 'Men\'s Watches', href: '/mens-watches' },
        { name: 'Women\'s Watches', href: '/womens-watches' },
        { name: 'Men\'s Sunglasses', href: '/mens-sunglasses' },
        { name: 'Women\'s Sunglasses', href: '/womens-sunglasses' },
        { name: 'Jewelry', href: '/jewelry' },
        { name: 'Gift Cards', href: '/gift-cards' },
      ]
    },
    {
      title: 'About',
      links: [
        { name: 'Our Story', href: '/our-story' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Blog', href: '/blog' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'FAQ', href: '/faq' },
        { name: 'Shipping & Returns', href: '/shipping-returns' },
        { name: 'Warranty', href: '/warranty' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Track Order', href: '/track-order' },
      ]
    },
  ];
  
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/mvmt', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/mvmt', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/mvmt', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/mvmt', label: 'YouTube' },
  ];

  return (
    <footer className="bg-mvmt-gray-100 pt-16 pb-8">
      <div className="mvmt-container">
        {/* Newsletter */}
        <div className="max-w-lg mx-auto text-center mb-12">
          <h3 className="text-xl font-semibold mb-3">Join the Movement</h3>
          <p className="text-mvmt-gray-600 mb-6">
            Sign up for email updates and exclusive offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 border-2 border-r-0 border-mvmt-gray-300 focus:border-mvmt-black focus:outline-none transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-mvmt-black text-white font-medium px-6 py-3 transition-colors duration-300 hover:bg-mvmt-gray-800"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((category, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-sm tracking-wider uppercase mb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      to={link.href}
                      className="text-sm text-mvmt-gray-600 hover:text-mvmt-black transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Socials */}
          <div>
            <h3 className="font-semibold text-sm tracking-wider uppercase mb-4">
              Connect
            </h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mvmt-gray-600 hover:text-mvmt-black transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-mvmt-gray-600">
              Customer Service:<br />
              <a 
                href="mailto:support@mvmt.com" 
                className="text-mvmt-black hover:underline"
              >
                support@mvmt.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-mvmt-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-mvmt-gray-500 mb-4 md:mb-0">
            © {currentYear} MVMT. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center space-x-6">
            <Link
              to="/privacy-policy"
              className="text-sm text-mvmt-gray-500 hover:text-mvmt-black mb-2 md:mb-0"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-sm text-mvmt-gray-500 hover:text-mvmt-black mb-2 md:mb-0"
            >
              Terms of Service
            </Link>
            <Link
              to="/accessibility"
              className="text-sm text-mvmt-gray-500 hover:text-mvmt-black mb-2 md:mb-0"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
