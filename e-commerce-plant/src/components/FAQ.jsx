import React, { useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faqs } from '../data'; // Importa las FAQs desde data.js

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-8">Preguntas Frecuentes (FAQ)</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <h3 
                className="flex justify-between items-center text-xl font-semibold text-gray-800 cursor-pointer py-2" 
                onClick={() => handleToggle(index)}
              >
                {faq.question}
                <FontAwesomeIcon icon={openIndex === index ? faChevronUp : faChevronDown} className="text-green-500" />
              </h3>
              {openIndex === index && (
                <div className="text-gray-600 mt-2 p-2 border-l-4 border-green-300 bg-gray-50 rounded-md">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
