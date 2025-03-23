
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import MensWatches from "./pages/MensWatches";
import WomensWatches from "./pages/WomensWatches";
import NewArrivals from "./pages/NewArrivals";
import Sale from "./pages/Sale";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import OrderConfirmation from "./pages/OrderConfirmation";
import NotFound from "./pages/NotFound";
import Account from "./pages/Account";
import Wishlist from "./pages/Wishlist";

// Footer Navigation Pages
import MensSunglasses from "./pages/MensSunglasses";
import WomensSunglasses from "./pages/WomensSunglasses";
import Jewelry from "./pages/Jewelry";
import MensJewelry from "./pages/MensJewelry";
import WomensJewelry from "./pages/WomensJewelry";
import GiftCards from "./pages/GiftCards";
import OurStory from "./pages/OurStory";
import Reviews from "./pages/Reviews";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import ShippingReturns from "./pages/ShippingReturns";
import Warranty from "./pages/Warranty";
import Contact from "./pages/Contact";
import TrackOrder from "./pages/TrackOrder";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Accessibility from "./pages/Accessibility";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/mens-watches" element={<MensWatches />} />
          <Route path="/womens-watches" element={<WomensWatches />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/account" element={<Account />} />
          <Route path="/wishlist" element={<Wishlist />} />
          
          {/* Footer Navigation Pages */}
          <Route path="/mens-sunglasses" element={<MensSunglasses />} />
          <Route path="/womens-sunglasses" element={<WomensSunglasses />} />
          <Route path="/jewelry" element={<Jewelry />} />
          <Route path="/mens-jewelry" element={<MensJewelry />} />
          <Route path="/womens-jewelry" element={<WomensJewelry />} />
          <Route path="/gift-cards" element={<GiftCards />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shipping-returns" element={<ShippingReturns />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/accessibility" element={<Accessibility />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
