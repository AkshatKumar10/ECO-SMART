import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Waste Segregation?",
      answer: "Separating waste into recyclables and non-recyclables."
    },
    {
      question: "How does waste pickup work?",
      answer: "Schedule a pickup online, and we’ll handle the rest!"
    },
    {
      question: "Can i drop off waste?",
      answer: "Absolutely! Visit our drop-off locations anytime."
    },
    {
      question: "How can i collaborate with you?",
      answer: "Fill out the contact form, and let’s connect!."
    },
      {question: "How can I reduce my household waste?",
      answer: "Reduce waste by practicing the 3 Rs: Reduce, Reuse, and Recycle. Opt for products with minimal packaging, use reusable items, and make sure to sort waste properly."}
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">FAQs</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleAnswer(index)}>
                <h3>{faq.question}</h3>
                <span className="toggle-icon">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};


export default FAQSection;
