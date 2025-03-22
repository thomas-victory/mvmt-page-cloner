
import { Link } from "react-router-dom";
import BasicPage from "@/components/BasicPage";

const Blog = () => {
  const blogPosts = [
    {
      title: "The History of Minimalist Watch Design",
      excerpt: "Explore the evolution of minimalist watch design from the mid-20th century to today's modern interpretations.",
      image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Alex Morgan",
      date: "April 2, 2023",
      category: "Design"
    },
    {
      title: "How to Style Your Watch for Any Occasion",
      excerpt: "From casual weekends to formal events, learn how to pair your timepiece with any outfit.",
      image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Jamie Chen",
      date: "March 15, 2023",
      category: "Style"
    },
    {
      title: "The Craft of Watchmaking: From Design to Wrist",
      excerpt: "A behind-the-scenes look at how MVMT watches go from initial concept to finished product.",
      image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Chris Walker",
      date: "February 28, 2023",
      category: "Craft"
    },
    {
      title: "Sustainable Practices in the Watch Industry",
      excerpt: "How MVMT is working to reduce environmental impact and promote sustainability.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Taylor Reed",
      date: "February 10, 2023",
      category: "Sustainability"
    }
  ];

  return (
    <BasicPage title="The MVMT Blog" breadcrumb="Blog">
      <div className="prose max-w-none">
        <p className="text-center text-lg mb-8">
          Insights, style tips, and stories from the world of MVMT.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="border border-mvmt-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-mvmt-gray-600">{post.category}</span>
                  <span className="text-sm text-mvmt-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-medium mb-2">{post.title}</h3>
                <p className="text-mvmt-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-mvmt-gray-600">By {post.author}</span>
                  <Link to="#" className="text-mvmt-black hover:underline font-medium">
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="flex justify-center">
          <button className="mvmt-button-secondary">
            Load More Articles
          </button>
        </div>
      </div>
    </BasicPage>
  );
};

export default Blog;
