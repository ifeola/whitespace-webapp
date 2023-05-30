import { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

const data = [
  {
    question: "What are properties in Figma?",
    answer:
      "The main feature of Whitespace UI that it saves you time. If it saves you time, it automatically saves you money. You no longer have to create a new UI kit from scratch before starting each project. Use Whitespace UI on an unlimited number of projects and save hundreds of hours and thousands of dollars.",
  },
  {
    question: "How Whitespace UI kit and Design System can help me?",
    answer:
      "The main feature of Whitespace UI that it saves you time. If it saves you time, it automatically saves you money. You no longer have to create a new UI kit from scratch before starting each project. Use Whitespace UI on an unlimited number of projects and save hundreds of hours and thousands of dollars.",
  },
  {
    question: "What is your return policy?",
    answer:
      "The main feature of Whitespace UI that it saves you time. If it saves you time, it automatically saves you money. You no longer have to create a new UI kit from scratch before starting each project. Use Whitespace UI on an unlimited number of projects and save hundreds of hours and thousands of dollars.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "The main feature of Whitespace UI that it saves you time. If it saves you time, it automatically saves you money. You no longer have to create a new UI kit from scratch before starting each project. Use Whitespace UI on an unlimited number of projects and save hundreds of hours and thousands of dollars.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "The main feature of Whitespace UI that it saves you time. If it saves you time, it automatically saves you money. You no longer have to create a new UI kit from scratch before starting each project. Use Whitespace UI on an unlimited number of projects and save hundreds of hours and thousands of dollars.",
  },
];

const Faqs = () => {
  const [showFaqs, setShowFaqs] = useState(null);
  const accordionHandler = (index) => {
    if (showFaqs === index) {
      setShowFaqs(null);
      return;
    }
    setShowFaqs(index);
  };

  return (
    <section>
      <div className="section">
        <div className="text-center">
          <h3 className="mb-2 lg:mb-4">Frequently Asked Questions</h3>
          <p className="md:w-3/5 lg:4/5 m-auto">
            We tried to answer most common questions, if you have any
            additional, please get in touch with our friendly team
          </p>
        </div>

        <div className="my-6 lg:my-10 grid gap-3 lg:w-3/4 m-auto">
          {data.map((item, index) => {
            return (
              <div
                className="border border-gray-300 p-4 rounded-2xl cursor-pointer"
                onClick={() => accordionHandler(index)}>
                <h6 className="flex items-center justify-between">
                  <span className="flex items-center w-[90%] md:w-full">
                    <span className="mr-2">0{index + 1}.</span>
                    <span> {item.question}</span>
                  </span>
                  <IoCloseOutline
                    className={
                      showFaqs === index ? "faqs__icon active" : "faqs__icon"
                    }
                  />
                </h6>
                <p className={showFaqs === index ? "answer active" : "answer"}>
                  {item.answer}
                </p>
              </div>
            );
          })}
        </div>

        <div className="sm:flex flex-col items-center text-center m-auto md:w-3/5 lg:4/5 bg-blue-50 p-8 rounded-xl text-secondary">
          <h4>Still have a questions?</h4>
          <p className="my-2 lg:my-4">
            We're sorry we couldn't provide you with the information you were
            looking for. Please contact us and we'll be happy to help.
          </p>
          <a
            href="/"
            className="w-full sm:w-fit px-6 py-2 bg-primary transition-colors hover:bg-hoverColor text-white text-center rounded-md flex items-center justify-center">
            <IoMailOutline />
            <span className="ml-2">Contact Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
