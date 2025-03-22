
import BasicPage from "@/components/BasicPage";

const ShippingReturns = () => {
  return (
    <BasicPage title="Shipping & Returns" breadcrumb="Shipping & Returns">
      <div className="prose max-w-none">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Domestic Shipping</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-mvmt-gray-50">
                  <th className="border border-mvmt-gray-200 px-4 py-2 text-left">Shipping Method</th>
                  <th className="border border-mvmt-gray-200 px-4 py-2 text-left">Estimated Delivery</th>
                  <th className="border border-mvmt-gray-200 px-4 py-2 text-left">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-mvmt-gray-200 px-4 py-2">Standard</td>
                  <td className="border border-mvmt-gray-200 px-4 py-2">5-7 business days</td>
                  <td className="border border-mvmt-gray-200 px-4 py-2">Free on orders over $50</td>
                </tr>
                <tr className="bg-mvmt-gray-50">
                  <td className="border border-mvmt-gray-200 px-4 py-2">Expedited</td>
                  <td className="border border-mvmt-gray-200 px-4 py-2">2-3 business days</td>
                  <td className="border border-mvmt-gray-200 px-4 py-2">$12.95</td>
                </tr>
                <tr>
                  <td className="border border-mvmt-gray-200 px-4 py-2">Overnight</td>
                  <td className="border border-mvmt-gray-200 px-4 py-2">Next business day</td>
                  <td className="border border-mvmt-gray-200 px-4 py-2">$24.95</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-xl font-medium mt-6 mb-3">International Shipping</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-mvmt-gray-50">
                  <th className="border border-mvmt-gray-200 px-4 py-2 text-left">Region</th>
                  <th className="border border-mvmt-gray-200 px-4 py-2 text-left">Estimated Delivery</th>
                  <th className="border border-mvmt-gray-200 px-4 py-2 text-left">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-mvmt-gray-200 px-4 py-2">Canada</td>
                  <td className="border border-mvmt-gray-200 px-4 py-2">7-10 business days</td>
                  <td className="border border-mvmt-gray-200 px-4 py-2">$15.95</td>
                </tr>
                <tr className="bg-mvmt-gray-50">
                  <td className="border border-mvmt-gray-200 px-4 py-2">Europe</td>
                  <td className="border border-mvmt-gray-200 px-4 py-2">10-14 business days</td>
                  <td className="border border-mvmt-gray-200 px-4 py-2">$19.95</td>
                </tr>
                <tr>
                  <td className="border border-mvmt-gray-200 px-4 py-2">Asia/Pacific</td>
                  <td className="border border-mvmt-gray-200 px-4 py-2">12-18 business days</td>
                  <td className="border border-mvmt-gray-200 px-4 py-2">$24.95</td>
                </tr>
                <tr className="bg-mvmt-gray-50">
                  <td className="border border-mvmt-gray-200 px-4 py-2">Rest of World</td>
                  <td className="border border-mvmt-gray-200 px-4 py-2">14-21 business days</td>
                  <td className="border border-mvmt-gray-200 px-4 py-2">$29.95</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4">
            <strong>Note:</strong> International customers may be subject to import duties and taxes, which are the responsibility of the recipient.
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
          
          <p className="mb-4">
            We want you to be completely satisfied with your MVMT purchase. If you're not entirely happy, we offer a simple return process:
          </p>
          
          <ul className="list-disc pl-5 mb-6">
            <li className="mb-2">Returns must be initiated within 30 days of delivery</li>
            <li className="mb-2">Products must be unworn, undamaged, and in original packaging</li>
            <li className="mb-2">Free returns for US customers (prepaid return label provided)</li>
            <li className="mb-2">International customers are responsible for return shipping costs</li>
            <li className="mb-2">Once received, refunds are processed within 5-7 business days</li>
            <li className="mb-2">Original shipping costs are non-refundable unless the return is due to our error</li>
          </ul>
          
          <div className="bg-mvmt-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-medium mb-2">How to Return an Item</h3>
            <ol className="list-decimal pl-5">
              <li className="mb-2">Visit our Returns Portal at the link below</li>
              <li className="mb-2">Enter your order number and email address</li>
              <li className="mb-2">Select the items you wish to return and reason for return</li>
              <li className="mb-2">Print your prepaid shipping label (US orders only)</li>
              <li className="mb-2">Package your items in their original packaging</li>
              <li className="mb-2">Drop off your package at the specified carrier location</li>
            </ol>
          </div>
          
          <div className="text-center">
            <a href="#" className="mvmt-button-primary inline-block">
              Start a Return
            </a>
          </div>
        </div>
      </div>
    </BasicPage>
  );
};

export default ShippingReturns;
