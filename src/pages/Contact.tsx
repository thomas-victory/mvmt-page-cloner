
import { useState } from "react";
import BasicPage from "@/components/BasicPage";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderNumber: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, we would submit the form data to a server
    console.log("Form submitted:", formData);
    alert("Thanks for your message! Our team will get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      orderNumber: "",
      subject: "",
      message: ""
    });
  };

  return (
    <BasicPage title="Contact Us" breadcrumb="Contact Us">
      <div className="prose max-w-none">
        <p className="text-center text-lg mb-8">
          Have a question or need assistance? We're here to help.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 border border-mvmt-gray-200 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Customer Support</h3>
            <p className="mb-4 text-mvmt-gray-600">
              For questions about orders, returns, or product information
            </p>
            <a 
              href="mailto:support@mvmt.com" 
              className="text-mvmt-black hover:underline font-medium"
            >
              support@mvmt.com
            </a>
          </div>
          
          <div className="text-center p-6 border border-mvmt-gray-200 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Wholesale Inquiries</h3>
            <p className="mb-4 text-mvmt-gray-600">
              For retail partnerships and wholesale opportunities
            </p>
            <a 
              href="mailto:wholesale@mvmt.com" 
              className="text-mvmt-black hover:underline font-medium"
            >
              wholesale@mvmt.com
            </a>
          </div>
          
          <div className="text-center p-6 border border-mvmt-gray-200 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Press & Media</h3>
            <p className="mb-4 text-mvmt-gray-600">
              For press inquiries, interviews, and media opportunities
            </p>
            <a 
              href="mailto:press@mvmt.com" 
              className="text-mvmt-black hover:underline font-medium"
            >
              press@mvmt.com
            </a>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-mvmt-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mvmt-black/50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-mvmt-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mvmt-black/50"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="orderNumber" className="block text-sm font-medium mb-2">
                  Order Number (if applicable)
                </label>
                <input
                  type="text"
                  id="orderNumber"
                  name="orderNumber"
                  value={formData.orderNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-mvmt-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mvmt-black/50"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-mvmt-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mvmt-black/50"
                >
                  <option value="">Select a subject</option>
                  <option value="Order Status">Order Status</option>
                  <option value="Returns & Exchanges">Returns & Exchanges</option>
                  <option value="Product Information">Product Information</option>
                  <option value="Warranty Claim">Warranty Claim</option>
                  <option value="Website Feedback">Website Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-mvmt-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mvmt-black/50"
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="mvmt-button-primary px-8 py-3"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Headquarters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <address className="not-italic">
                <strong>MVMT Watches, Inc.</strong><br />
                7955 Sunset Blvd<br />
                Los Angeles, CA 90046<br />
                United States
              </address>
              
              <p className="mt-4">
                <strong>Hours:</strong><br />
                Monday - Friday: 9:00 AM - 5:00 PM PST<br />
                Phone support available during business hours
              </p>
            </div>
            
            <div className="aspect-w-16 aspect-h-9 bg-mvmt-gray-100">
              {/* In a real application, this would be a Google Maps embed */}
              <div className="w-full h-full flex items-center justify-center text-mvmt-gray-500">
                Map Location
              </div>
            </div>
          </div>
        </div>
      </div>
    </BasicPage>
  );
};

export default Contact;
