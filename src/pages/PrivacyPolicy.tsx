
import BasicPage from "@/components/BasicPage";

const PrivacyPolicy = () => {
  return (
    <BasicPage title="Privacy Policy" breadcrumb="Privacy Policy">
      <div className="prose max-w-none">
        <p className="text-center text-lg mb-8">
          Last Updated: September 1, 2023
        </p>
        
        <div className="mb-8">
          <p>
            At MVMT, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Personal Information</h3>
          <p className="mb-4">
            We may collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products, or otherwise contact us. The personal information we collect may include:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Name</li>
            <li>Email address</li>
            <li>Mailing address</li>
            <li>Phone number</li>
            <li>Billing and payment information</li>
            <li>Order history and preferences</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Automatically Collected Information</h3>
          <p className="mb-4">
            When you access our website, we may automatically collect certain information about your device, including:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring website</li>
            <li>Pages you view</li>
            <li>Time spent on pages</li>
            <li>Links you click</li>
            <li>Search terms you enter</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          
          <p className="mb-4">
            We may use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Providing, maintaining, and improving our website and services</li>
            <li>Processing and fulfilling orders</li>
            <li>Sending order confirmations and updates</li>
            <li>Responding to customer service requests</li>
            <li>Sending marketing communications (with your consent)</li>
            <li>Analyzing website usage and trends</li>
            <li>Detecting and preventing fraud</li>
            <li>Complying with legal obligations</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Disclosure of Your Information</h2>
          
          <p className="mb-4">
            We may share your information in the following situations:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, and contractors who perform services for us.</li>
            <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with a merger, acquisition, or sale of all or a portion of our assets.</li>
            <li><strong>Legal Obligations:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
            <li><strong>With Your Consent:</strong> We may share your information with third parties when we have your consent to do so.</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Privacy Rights</h2>
          
          <p className="mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>The right to access personal information we hold about you</li>
            <li>The right to request correction of inaccurate information</li>
            <li>The right to request deletion of your information</li>
            <li>The right to opt-out of marketing communications</li>
            <li>The right to restrict certain processing of your data</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided at the end of this policy.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Security of Your Information</h2>
          
          <p>
            We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the information you provide to us, please be aware that no security measures are perfect or impenetrable, and we cannot guarantee the security of your information.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          
          <p>
            We may update our privacy policy from time to time. The date the privacy policy was last revised is identified at the top of the page. You are responsible for periodically visiting our website and this privacy policy to check for any changes.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          
          <p>
            If you have questions or concerns about this privacy policy, please contact us at:
          </p>
          <p className="mt-4">
            <strong>MVMT Watches, Inc.</strong><br />
            Privacy Department<br />
            7955 Sunset Blvd<br />
            Los Angeles, CA 90046<br />
            Email: privacy@mvmt.com
          </p>
        </div>
      </div>
    </BasicPage>
  );
};

export default PrivacyPolicy;
