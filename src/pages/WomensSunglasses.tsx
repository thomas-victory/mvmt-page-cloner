
import BasicPage from "@/components/BasicPage";

const WomensSunglasses = () => {
  return (
    <BasicPage title="Women's Sunglasses" breadcrumb="Women's Sunglasses">
      <div className="prose max-w-none">
        <p className="text-center text-lg mb-8">
          Discover our elegant collection of women's sunglasses designed for style and protection.
        </p>
        
        <div className="py-8 text-center bg-mvmt-gray-50 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
          <p>
            We're currently updating our women's sunglasses collection. 
            Check back soon for our latest styles and designs.
          </p>
        </div>
      </div>
    </BasicPage>
  );
};

export default WomensSunglasses;
