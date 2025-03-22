
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import BasicPage from "@/components/BasicPage";

const FAQ = () => {
  const faqCategories = [
    {
      name: "Orders & Shipping",
      questions: [
        {
          question: "How long does shipping take?",
          answer: "Standard shipping typically takes 5-7 business days within the US. Expedited shipping options are available at checkout for 2-3 business day delivery."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship to over 150 countries worldwide. International shipping times vary by location, typically taking 7-14 business days. Import duties and taxes may apply depending on your country."
        },
        {
          question: "How can I track my order?",
          answer: "Once your order ships, you'll receive a confirmation email with tracking information. You can also track your order on our website by visiting the 'Track Order' page and entering your order number and email address."
        }
      ]
    },
    {
      name: "Returns & Exchanges",
      questions: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy for unworn products in their original packaging. Returns are free for customers in the United States. International customers are responsible for return shipping costs."
        },
        {
          question: "How do I start a return or exchange?",
          answer: "To initiate a return or exchange, please visit our Returns page and fill out the return form. You'll receive a confirmation email with shipping instructions and a return label if applicable."
        },
        {
          question: "Can I exchange my watch for a different model?",
          answer: "Yes, exchanges can be made for different models or colors. If there's a price difference, the appropriate amount will be charged or refunded accordingly."
        }
      ]
    },
    {
      name: "Product Information",
      questions: [
        {
          question: "Are MVMT watches water resistant?",
          answer: "Most MVMT watches are water resistant to 3 ATM, which means they can withstand splashes and brief immersion in water. They are not suitable for swimming or showering. Specific water resistance ratings are listed on each product page."
        },
        {
          question: "How do I adjust my watch strap?",
          answer: "For leather and canvas straps, you can simply adjust the buckle to the desired hole. For metal bracelets, we recommend visiting a local jeweler for proper sizing, or you can use our watch sizing guide available on our website."
        },
        {
          question: "What type of warranty do MVMT products have?",
          answer: "MVMT watches come with a 2-year limited warranty that covers manufacturing defects. This warranty does not cover normal wear and tear, water damage, or accidents. Please visit our Warranty page for complete details."
        }
      ]
    }
  ];

  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems({
      ...openItems,
      [key]: !openItems[key]
    });
  };

  return (
    <BasicPage title="Frequently Asked Questions" breadcrumb="FAQ">
      <div className="prose max-w-none">
        <p className="text-center text-lg mb-8">
          Find answers to common questions about MVMT products, orders, shipping, and more.
        </p>
        
        <div className="mb-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-10">
              <h2 className="text-2xl font-semibold mb-6">{category.name}</h2>
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const isOpen = openItems[`${categoryIndex}-${questionIndex}`];
                  return (
                    <div 
                      key={questionIndex} 
                      className="border border-mvmt-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-mvmt-gray-50 transition-colors duration-300"
                        onClick={() => toggleItem(categoryIndex, questionIndex)}
                      >
                        <span className="font-medium">{item.question}</span>
                        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                      </button>
                      <div 
                        className={`px-5 overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
                        }`}
                      >
                        <p className="text-mvmt-gray-600">{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-mvmt-gray-50 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-3">Can't find what you're looking for?</h3>
          <p className="mb-4">Our customer support team is here to help you with any other questions.</p>
          <a 
            href="mailto:support@mvmt.com" 
            className="mvmt-button-primary inline-block"
          >
            Contact Support
          </a>
        </div>
      </div>
    </BasicPage>
  );
};

export default FAQ;
