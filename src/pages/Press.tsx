
import BasicPage from "@/components/BasicPage";

const Press = () => {
  const pressFeatures = [
    {
      publication: "Forbes",
      title: "How MVMT Disrupted The Watch Industry",
      date: "October 15, 2022",
      excerpt: "MVMT has revolutionized the watch industry by cutting out the middleman and offering premium designs at accessible prices..."
    },
    {
      publication: "Business Insider",
      title: "The Success Story Behind MVMT Watches",
      date: "July 3, 2022",
      excerpt: "Started as a crowdfunding campaign, MVMT has grown into a global brand valued at over $100 million..."
    },
    {
      publication: "GQ",
      title: "Minimalist Watches That Don't Break The Bank",
      date: "March 21, 2022",
      excerpt: "MVMT continues to be our top recommendation for affordable, stylish timepieces that complement any outfit..."
    },
    {
      publication: "Vogue",
      title: "MVMT Expands Into Women's Fashion Accessories",
      date: "January 12, 2022",
      excerpt: "With their new line of women's watches and jewelry, MVMT is setting trends in the fashion accessory market..."
    }
  ];

  return (
    <BasicPage title="Press" breadcrumb="Press">
      <div className="prose max-w-none">
        <p className="text-center text-lg mb-8">
          MVMT in the news. For press inquiries, please contact <a href="mailto:press@mvmt.com" className="text-mvmt-black hover:underline">press@mvmt.com</a>
        </p>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Press Releases</h2>
          <div className="space-y-6">
            <div className="border-b border-mvmt-gray-200 pb-6">
              <h3 className="text-xl font-medium mb-2">MVMT Announces Collaboration with Artist Series</h3>
              <p className="text-sm text-mvmt-gray-500 mb-3">Released: April 15, 2023</p>
              <p className="mb-3">
                MVMT is excited to announce our new Artist Series, featuring limited-edition timepieces designed in collaboration with emerging artists from around the world.
              </p>
              <a href="#" className="text-mvmt-black hover:underline font-medium">Read More</a>
            </div>
            
            <div className="border-b border-mvmt-gray-200 pb-6">
              <h3 className="text-xl font-medium mb-2">MVMT Opens First Flagship Store in Los Angeles</h3>
              <p className="text-sm text-mvmt-gray-500 mb-3">Released: February 10, 2023</p>
              <p className="mb-3">
                After years of success as an e-commerce brand, MVMT is taking the next step with our first physical retail location in the heart of Downtown Los Angeles.
              </p>
              <a href="#" className="text-mvmt-black hover:underline font-medium">Read More</a>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">MVMT in the Media</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {pressFeatures.map((feature, index) => (
              <div key={index} className="border border-mvmt-gray-200 rounded-lg p-5">
                <span className="inline-block bg-mvmt-gray-100 px-3 py-1 rounded-full text-sm mb-3">
                  {feature.publication}
                </span>
                <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-mvmt-gray-500 mb-3">{feature.date}</p>
                <p className="text-mvmt-gray-700 mb-3">{feature.excerpt}</p>
                <a href="#" className="text-mvmt-black hover:underline font-medium">
                  Read Full Article
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BasicPage>
  );
};

export default Press;
