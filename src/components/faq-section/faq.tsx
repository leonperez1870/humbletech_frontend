import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: {
    answer: string;
  };
}

export interface FaqProps {
  title: string;
  faqItems: FaqItem[];
}

const Faq: React.FC<FaqProps> = ({ title, faqItems }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="my-8 p-5">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {faqItems.map((item, index) => (
        <div key={index} className="mb-4">
          <h3
            className="text-xl font-semibold mb-2 cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            {item.question} {activeIndex === index ? "(-)" : "(+)"}
          </h3>
          {activeIndex === index && (
            <p className="text-base">{item.answer.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
