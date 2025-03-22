
import BasicPage from "@/components/BasicPage";

const Jewelry = () => {
  return (
    <BasicPage title="Jewelry Collection" breadcrumb="Jewelry">
      <div className="prose max-w-none">
        <p className="text-center text-lg mb-8">
          Explore our curated collection of minimalist jewelry pieces designed to complement your style.
        </p>
        
        <div className="py-8 text-center bg-mvmt-gray-50 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
          <p>
            Our jewelry collection is being updated with new designs.
            Please check back soon to see our latest offerings.
          </p>
        </div>
      </div>
    </BasicPage>
  );
};

export default Jewelry;
