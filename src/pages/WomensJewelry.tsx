
import { Link } from "react-router-dom";
import BasicPage from "@/components/BasicPage";

const WomensJewelry = () => {
  return (
    <BasicPage title="Women's Jewelry" breadcrumb="Women's Jewelry">
      <div className="prose max-w-none">
        <p className="text-center text-lg mb-8">
          Elegant and timeless women's jewelry pieces designed for everyday wear.
        </p>
        
        <div className="py-8 text-center bg-mvmt-gray-50 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
          <p className="mb-4">
            We're currently updating our women's jewelry collection. 
            Check back soon for our latest styles and designs.
          </p>
          <Link to="/jewelry" className="text-mvmt-black underline">
            Browse our main jewelry collection
          </Link>
        </div>
      </div>
    </BasicPage>
  );
};

export default WomensJewelry;
