
import BasicPage from "@/components/BasicPage";

const Warranty = () => {
  return (
    <BasicPage title="Warranty Information" breadcrumb="Warranty">
      <div className="prose max-w-none">
        <p className="text-center text-lg mb-8">
          MVMT watches are built to last. We stand behind our products with a comprehensive warranty.
        </p>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Limited Warranty Coverage</h2>
          
          <p className="mb-4">
            MVMT offers a two-year limited warranty from the date of purchase, covering manufacturing defects in materials and workmanship under normal use. This warranty is valid for products purchased from MVMT.com or an authorized retailer.
          </p>
          
          <div className="bg-mvmt-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-medium mb-3">What's Covered</h3>
            <ul className="list-disc pl-5">
              <li className="mb-2">Internal movement defects</li>
              <li className="mb-2">Battery failure within the first year</li>
              <li className="mb-2">Manufacturing defects in case, crown, or crystal</li>
              <li className="mb-2">Original manufacturing defects in straps or bracelets</li>
            </ul>
          </div>
          
          <div className="bg-mvmt-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-medium mb-3">What's Not Covered</h3>
            <ul className="list-disc pl-5">
              <li className="mb-2">Normal wear and tear</li>
              <li className="mb-2">Water damage (beyond product water resistance rating)</li>
              <li className="mb-2">Accidental damage or misuse</li>
              <li className="mb-2">Damage from battery replacement by unauthorized service centers</li>
              <li className="mb-2">Products without proof of purchase</li>
              <li className="mb-2">Counterfeit or products purchased from unauthorized retailers</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Warranty Service Process</h2>
          
          <p className="mb-4">
            If your MVMT product requires service under warranty, please follow these steps:
          </p>
          
          <ol className="list-decimal pl-5 mb-6">
            <li className="mb-3">
              <strong>Submit a Warranty Claim</strong>
              <p>Complete our online warranty claim form, providing your contact information, proof of purchase, and a description of the issue.</p>
            </li>
            <li className="mb-3">
              <strong>Receive Instructions</strong>
              <p>Our warranty team will review your claim and provide shipping instructions within 1-2 business days.</p>
            </li>
            <li className="mb-3">
              <strong>Ship Your Product</strong>
              <p>Send your product to our service center using the provided instructions. We recommend using a trackable shipping method.</p>
            </li>
            <li className="mb-3">
              <strong>Assessment & Repair</strong>
              <p>Our technicians will assess your product and determine if the issue is covered under warranty. If covered, we'll repair or replace the product at no charge.</p>
            </li>
            <li className="mb-3">
              <strong>Return Shipping</strong>
              <p>Once serviced, your product will be returned to you. Standard return shipping is provided free of charge within the US.</p>
            </li>
          </ol>
          
          <div className="bg-mvmt-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-medium mb-3">Estimated Service Times</h3>
            <p className="mb-2">
              The typical warranty service process takes 2-4 weeks from the time we receive your product. This includes assessment, repair, and return shipping. Service times may vary based on parts availability and service volume.
            </p>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <a href="#" className="mvmt-button-primary inline-block mr-4">
            Submit Warranty Claim
          </a>
          <a href="#" className="mvmt-button-secondary inline-block">
            Contact Warranty Support
          </a>
        </div>
        
        <div className="text-sm text-mvmt-gray-500 border-t border-mvmt-gray-200 pt-6">
          <p>
            This warranty gives you specific legal rights, and you may also have other rights which vary from state to state. Some states do not allow limitations on how long an implied warranty lasts, or the exclusion or limitation of incidental or consequential damages, so the above limitations or exclusions may not apply to you.
          </p>
        </div>
      </div>
    </BasicPage>
  );
};

export default Warranty;
