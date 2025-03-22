
import BasicPage from "@/components/BasicPage";
import { Star } from "lucide-react";

const Reviews = () => {
  const testimonials = [
    {
      name: "Jessica M.",
      rating: 5,
      date: "March 15, 2023",
      content: "I've purchased three MVMT watches and they're all beautiful. The quality is amazing for the price, and they always arrive quickly. Definitely my go-to watch brand now."
    },
    {
      name: "Michael T.",
      rating: 4,
      date: "February 22, 2023",
      content: "The Voyager watch exceeded my expectations. It looks much more expensive than it is and gets me compliments all the time. Took off one star because the shipping was a bit slower than expected."
    },
    {
      name: "Sarah L.",
      rating: 5,
      date: "January 10, 2023",
      content: "My husband loves the watch I got him for his birthday. The minimalist design is exactly what he wanted, and the quality is excellent. Will definitely shop here again!"
    },
    {
      name: "David R.",
      rating: 5,
      date: "December 18, 2022",
      content: "Customer service was excellent when I needed to exchange my watch for a different size. The process was seamless and the team was very helpful. The watch itself is stunning."
    }
  ];

  return (
    <BasicPage title="Customer Reviews" breadcrumb="Reviews">
      <div className="prose max-w-none">
        <p className="text-center text-lg mb-8">
          See what our customers are saying about their MVMT experience.
        </p>
        
        <div className="mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="flex text-yellow-400 mr-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <span className="text-xl font-semibold">4.8 out of 5</span>
          </div>
          <p className="text-center text-mvmt-gray-600">
            Based on 10,000+ verified customer reviews
          </p>
        </div>
        
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-mvmt-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">{testimonial.name}</h3>
                <span className="text-sm text-mvmt-gray-500">{testimonial.date}</span>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? 'fill-current' : ''}`} 
                  />
                ))}
              </div>
              <p className="text-mvmt-gray-800">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </BasicPage>
  );
};

export default Reviews;
