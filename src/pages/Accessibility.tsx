
import BasicPage from "@/components/BasicPage";

const Accessibility = () => {
  return (
    <BasicPage title="Accessibility Statement" breadcrumb="Accessibility">
      <div className="prose max-w-none">
        <p className="text-center text-lg mb-8">
          MVMT is committed to digital accessibility for all.
        </p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
          
          <p className="mb-4">
            At MVMT, we believe that everyone should have equal access to our products and services, including our website and digital content. We are committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability.
          </p>
          <p>
            We are actively working to increase the accessibility and usability of our website and in doing so adhere to many of the available standards and guidelines.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Standards We Follow</h2>
          
          <p className="mb-4">
            This website has been developed to conform to level AA of the World Wide Web Consortium (W3C) Web Content Accessibility Guidelines 2.1. These guidelines explain how to make web content more accessible for people with disabilities, and more user-friendly for everyone.
          </p>
          <p>
            We continually review our site and content against these guidelines, making necessary updates to improve accessibility for all.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Measures We've Taken</h2>
          
          <p className="mb-4">
            We've taken the following measures to ensure accessibility:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Implemented a semantic HTML structure with appropriate headings and landmarks</li>
            <li>Ensured sufficient color contrast throughout our website</li>
            <li>Added alt text to images and descriptive link text</li>
            <li>Made our forms accessible with proper labels and error messages</li>
            <li>Ensured keyboard accessibility for all interactive elements</li>
            <li>Provided visible focus indicators for keyboard navigation</li>
            <li>Implemented ARIA attributes where appropriate</li>
            <li>Tested our website with screen readers and other assistive technologies</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Ongoing Improvements</h2>
          
          <p className="mb-4">
            We recognize that accessibility is an ongoing effort, and we are continually seeking to improve our website's accessibility. We regularly:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Conduct accessibility audits and usability testing</li>
            <li>Train our design and development teams on accessibility principles</li>
            <li>Incorporate accessibility considerations into our design and development processes</li>
            <li>Stay informed about new accessibility technologies and best practices</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Assistance & Feedback</h2>
          
          <p className="mb-4">
            If you experience any difficulty accessing any part of this website, please contact us. We welcome your feedback on the accessibility of our website and are committed to addressing any issues promptly.
          </p>
          <p className="mb-4">
            Please provide as much information as possible, including:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>The nature of your accessibility problem</li>
            <li>The web address (URL) of the page you were using</li>
            <li>Your contact information</li>
            <li>Any assistive technology you use (if applicable)</li>
          </ul>
        </div>
        
        <div className="bg-mvmt-gray-50 p-6 rounded-lg text-center mb-8">
          <h3 className="text-xl font-semibold mb-3">Contact Us About Accessibility</h3>
          <p className="mb-4">
            We value your feedback and are here to assist with any accessibility-related concerns.
          </p>
          <p className="mb-2">
            <strong>Email:</strong> accessibility@mvmt.com
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> 1-800-123-4567
          </p>
          <a 
            href="/contact" 
            className="mvmt-button-primary inline-block mt-2"
          >
            Contact Form
          </a>
        </div>
        
        <div className="text-sm text-mvmt-gray-500">
          <p>
            This accessibility statement was last updated on September 1, 2023.
          </p>
        </div>
      </div>
    </BasicPage>
  );
};

export default Accessibility;
