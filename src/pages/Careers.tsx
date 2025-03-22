
import BasicPage from "@/components/BasicPage";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Los Angeles, CA",
      type: "Full-time"
    },
    {
      title: "Social Media Manager",
      department: "Marketing",
      location: "Los Angeles, CA",
      type: "Full-time"
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Customer Experience Specialist",
      department: "Customer Support",
      location: "Remote",
      type: "Part-time"
    }
  ];

  return (
    <BasicPage title="Careers at MVMT" breadcrumb="Careers">
      <div className="prose max-w-none">
        <p className="text-center text-lg mb-8">
          Join our team and help shape the future of fashion and technology.
        </p>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Work at MVMT?</h2>
          <p>
            At MVMT, we're passionate about creating products that inspire people to live life on their own terms. We value creativity, diversity, and innovation. Our team enjoys competitive salaries, comprehensive benefits, and a dynamic work environment where your ideas can make a real impact.
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul>
            <li><strong>Innovation:</strong> We constantly push boundaries and challenge the status quo</li>
            <li><strong>Quality:</strong> We're committed to excellence in everything we create</li>
            <li><strong>Inclusivity:</strong> We celebrate diverse perspectives and backgrounds</li>
            <li><strong>Sustainability:</strong> We're working to reduce our environmental impact</li>
            <li><strong>Customer Focus:</strong> We prioritize our community in every decision</li>
          </ul>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>
          
          {openPositions.length > 0 ? (
            <div className="grid gap-4">
              {openPositions.map((position, index) => (
                <div key={index} className="border border-mvmt-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-semibold text-lg mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-block bg-mvmt-gray-100 px-3 py-1 rounded-full text-sm">
                      {position.department}
                    </span>
                    <span className="inline-block bg-mvmt-gray-100 px-3 py-1 rounded-full text-sm">
                      {position.location}
                    </span>
                    <span className="inline-block bg-mvmt-gray-100 px-3 py-1 rounded-full text-sm">
                      {position.type}
                    </span>
                  </div>
                  <button className="text-mvmt-black hover:underline font-medium">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p>No open positions at this time. Please check back later.</p>
          )}
        </div>
      </div>
    </BasicPage>
  );
};

export default Careers;
