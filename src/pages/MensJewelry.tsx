
import { Link } from "react-router-dom";
import BasicPage from "@/components/BasicPage";

const MensJewelry = () => {
  return (
    <BasicPage title="Men's Jewelry" breadcrumb="Men's Jewelry">
      <div className="prose max-w-none">
        <p className="text-center text-lg mb-8">
          Discover our collection of men's jewelry designed for the modern man.
        </p>
        
        <div className="py-8 text-center bg-mvmt-gray-50 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
          <p className="mb-4">
            We're currently updating our men's jewelry collection. 
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

export default MensJewelry;
