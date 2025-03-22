
import BasicPage from "@/components/BasicPage";

const GiftCards = () => {
  return (
    <BasicPage title="Gift Cards" breadcrumb="Gift Cards">
      <div className="prose max-w-none">
        <p className="text-center text-lg mb-8">
          Give the gift of choice with MVMT gift cards, available in various denominations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[50, 100, 200].map((amount) => (
            <div 
              key={amount} 
              className="border border-mvmt-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-2xl font-bold mb-2">${amount}</div>
              <p className="text-mvmt-gray-600 mb-4">MVMT Gift Card</p>
              <button className="mvmt-button-primary w-full">Add to Cart</button>
            </div>
          ))}
        </div>
        
        <div className="bg-mvmt-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Gift Card Details</h2>
          <ul className="space-y-2">
            <li>Digital gift cards delivered via email</li>
            <li>No expiration date</li>
            <li>Redeemable online at MVMT.com</li>
            <li>Cannot be used with other promotional codes</li>
          </ul>
        </div>
      </div>
    </BasicPage>
  );
};

export default GiftCards;
