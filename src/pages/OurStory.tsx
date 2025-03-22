
import BasicPage from "@/components/BasicPage";

const OurStory = () => {
  return (
    <BasicPage title="Our Story" breadcrumb="Our Story">
      <div className="prose max-w-none">
        <p className="text-center text-lg mb-8">
          Founded in 2013, MVMT began as a crowdfunded project with a mission to offer stylish, quality timepieces at revolutionary prices.
        </p>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">The Beginning</h2>
          <p>
            MVMT was founded by two college dropouts who believed that high-quality, minimalist watches shouldn't come with luxury markups. After becoming the second most funded fashion brand on Indiegogo, MVMT quickly grew into a global phenomenon.
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Philosophy</h2>
          <p>
            We believe style shouldn't break the bank. Our direct-to-consumer approach allows us to offer premium designs at fair prices. By eliminating retail markups and engaging directly with our community, we've created a brand that resonates with a new generation of consumers.
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Looking Forward</h2>
          <p>
            Today, MVMT continues to expand our collection with new timepieces, glasses, and accessories designed for the modern-day adventurer. While we've grown significantly since our crowdfunding days, our mission remains the same: to create premium, minimalist products at revolutionary prices.
          </p>
        </div>
      </div>
    </BasicPage>
  );
};

export default OurStory;
