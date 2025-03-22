
import BasicPage from "@/components/BasicPage";

const MensSunglasses = () => {
  return (
    <BasicPage title="Men's Sunglasses" breadcrumb="Men's Sunglasses">
      <div className="prose max-w-none">
        <p className="text-center text-lg mb-8">
          Our collection of men's sunglasses combines modern style with exceptional quality.
        </p>
        
        <div className="py-8 text-center bg-mvmt-gray-50 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
          <p>
            We're currently updating our men's sunglasses collection. 
            Check back soon for our latest styles and designs.
          </p>
        </div>
      </div>
    </BasicPage>
  );
};

export default MensSunglasses;
