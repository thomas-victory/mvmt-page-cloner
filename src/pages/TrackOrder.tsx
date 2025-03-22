
import { useState } from "react";
import BasicPage from "@/components/BasicPage";

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingResult, setTrackingResult] = useState<null | {
    status: string;
    location: string;
    lastUpdate: string;
    estimatedDelivery: string;
    steps: Array<{
      status: string;
      location: string;
      date: string;
      completed: boolean;
    }>;
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would make an API call to fetch order tracking data
    // For demo purposes, we'll simulate a response
    setIsSubmitted(true);
    
    // Demo order tracking data
    setTrackingResult({
      status: "In Transit",
      location: "Distribution Center, Memphis, TN",
      lastUpdate: "September 15, 2023, 10:32 AM",
      estimatedDelivery: "September 18, 2023",
      steps: [
        {
          status: "Order Placed",
          location: "Online",
          date: "September 12, 2023",
          completed: true
        },
        {
          status: "Order Processed",
          location: "MVMT Warehouse, Los Angeles, CA",
          date: "September 13, 2023",
          completed: true
        },
        {
          status: "Shipped",
          location: "MVMT Warehouse, Los Angeles, CA",
          date: "September 14, 2023",
          completed: true
        },
        {
          status: "In Transit",
          location: "Distribution Center, Memphis, TN",
          date: "September 15, 2023",
          completed: true
        },
        {
          status: "Out for Delivery",
          location: "",
          date: "",
          completed: false
        },
        {
          status: "Delivered",
          location: "",
          date: "",
          completed: false
        }
      ]
    });
  };

  const handleReset = () => {
    setOrderNumber("");
    setEmail("");
    setIsSubmitted(false);
    setTrackingResult(null);
  };

  return (
    <BasicPage title="Track Your Order" breadcrumb="Track Order">
      <div className="prose max-w-none">
        <p className="text-center text-lg mb-8">
          Enter your order details below to track the status of your shipment.
        </p>
        
        {!isSubmitted ? (
          <div className="max-w-md mx-auto mb-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="orderNumber" className="block text-sm font-medium mb-2">
                  Order Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="orderNumber"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  required
                  placeholder="e.g., MVMT-123456"
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="email@example.com"
                  className="w-full px-4 py-2 border border-mvmt-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mvmt-black/50"
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="mvmt-button-primary w-full"
                >
                  Track Order
                </button>
              </div>
            </form>
            
            <div className="mt-8 text-center">
              <h3 className="text-lg font-medium mb-2">Need Help?</h3>
              <p className="text-mvmt-gray-600">
                If you're having trouble tracking your order, please{" "}
                <a href="/contact" className="text-mvmt-black hover:underline">
                  contact our customer support team
                </a>.
              </p>
            </div>
          </div>
        ) : (
          <div className="mb-12">
            <div className="bg-mvmt-gray-50 p-6 rounded-lg mb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-1">Order: {orderNumber}</h3>
                  <p className="text-mvmt-gray-600">Placed for: {email}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <button
                    onClick={handleReset}
                    className="text-mvmt-black hover:underline font-medium"
                  >
                    Track a different order
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex-1">
                  <div className="text-sm text-mvmt-gray-500 mb-1">Status</div>
                  <div className="font-medium">{trackingResult?.status}</div>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-mvmt-gray-500 mb-1">Current Location</div>
                  <div className="font-medium">{trackingResult?.location}</div>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-mvmt-gray-500 mb-1">Last Updated</div>
                  <div className="font-medium">{trackingResult?.lastUpdate}</div>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-mvmt-gray-500 mb-1">Estimated Delivery</div>
                  <div className="font-medium">{trackingResult?.estimatedDelivery}</div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-medium mb-6">Shipment Progress</h3>
            
            <div className="relative">
              <div className="absolute left-5 md:left-8 top-0 bottom-0 w-0.5 bg-mvmt-gray-200"></div>
              
              <div className="space-y-8">
                {trackingResult?.steps.map((step, index) => (
                  <div key={index} className="relative pl-12 md:pl-16">
                    <div className={`absolute left-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      step.completed 
                        ? 'bg-mvmt-black text-white' 
                        : 'bg-white border-2 border-mvmt-gray-300 text-mvmt-gray-400'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <h4 className={`font-medium ${step.completed ? 'text-mvmt-black' : 'text-mvmt-gray-500'}`}>
                        {step.status}
                      </h4>
                      {step.completed && (
                        <>
                          <p className="text-mvmt-gray-600 mt-1">{step.location}</p>
                          <p className="text-sm text-mvmt-gray-500 mt-1">{step.date}</p>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <div className="bg-mvmt-gray-50 p-6 rounded-lg">
          <h3 className="font-medium mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">How long does shipping take?</h4>
              <p className="text-mvmt-gray-600 text-sm mt-1">
                Standard shipping typically takes 5-7 business days. Expedited shipping options are available at checkout.
              </p>
            </div>
            <div>
              <h4 className="font-medium">My tracking information hasn't updated in several days</h4>
              <p className="text-mvmt-gray-600 text-sm mt-1">
                Tracking information may take 24-48 hours to update. If you haven't seen an update in more than 3 days, please contact our support team.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Can I change my shipping address?</h4>
              <p className="text-mvmt-gray-600 text-sm mt-1">
                If your order hasn't shipped yet, please contact us immediately to request an address change. Once shipped, we cannot modify the delivery address.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BasicPage>
  );
};

export default TrackOrder;
