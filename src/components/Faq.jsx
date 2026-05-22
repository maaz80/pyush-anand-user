import { useEffect, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

const defaultFaqs = {
     title: "Clarity Before Commitment.",
     description:
          "We dont like ambiguity, and neither do you. From IP ownership to payment structures, here is the straight talk on how we operate, so we can focus on what matters: building your brand.",
     keywords: "No Jargon. Just Anss.",
     faq: [
          {
               ques: "What services do UI UX design agencies offer?",
               ans: "User research, UX strategy, wireframing, UI design, prototyping, and usability testing are all provided by UI/UX design firms to produce user-friendly, conversion-focused digital products for the web and mobile platforms."
          },
          {
               ques: "Why do I need a UI UX design company for my business?",
               ans: "By matching design with business objectives, a UI/UX design firm assists you in creating aesthetically pleasing, user-friendly solutions that enhance customer happiness, boost conversions, and minimize expensive usability problems."
          },
          {
               ques: "How long does it take to complete a UI UX design project?",
               ans: "Depending on scope, research depth, number of screens, and iterations, a UI/UX design project usually takes four to eight weeks to complete; simpler projects are completed more quickly, whereas complicated products take longer."
          },
          {
               ques: "Why do I need a UI UX design company for my business?",
               ans: "A UI/UX design firm assists you in developing user-friendly, intuitive digital experiences that increase conversions, lower friction, and foster trust—all of which help you achieve your business objectives and transform users into devoted clients."
          },
          {
               ques: "How do I choose the right UI UX design agency for my business?",
               ans: "When selecting a UI/UX design firm, make sure they can address your unique business difficulties by looking at their portfolio relevancy, customer testimonials, industry experience, design process clarity, and alignment with your budget and objectives."
          },
          {
               ques: "What is a UI UX design agency?",
               ans: "A UI/UX design firm specializes in creating user-centered digital experiences by fusing interaction design, visual design, and user research to create products that are simple to use, captivating, and efficient."
          }
     ],
};


const Faq = ({ faqData }) => {
     const [faqs, setFaqs] = useState(defaultFaqs);
     const [activeIndex, setActiveIndex] = useState(0);
     const toggleFaq = (index) => {
          setActiveIndex(index === activeIndex ? null : index);
     };

     useEffect(() => {

          if (faqData) {

               setFaqs({
                    title: faqData?.title || defaultFaqs.title,
                    description:
                         faqData?.description || defaultFaqs.description,
                    keywords:
                         faqData?.keywords || defaultFaqs.keywords,
                    faq:
                         faqData?.faq?.length > 0
                              ? faqData.faq
                              : defaultFaqs.faq,
               });

          }

     }, [faqData]);

     return (
          <section className={` relative z-999 max-w-92 md:max-w-150 xl:max-w-340 mx-auto`}>

               <div className="mx-auto max-w-325">

                    {/* Heading */}
                    <div className="mx-auto flex max-w-5xl flex-col items-center px-5 text-center">

                         <h2 className="playfair text-[44px] sm:text-[52px] md:text-[72px] leading-12 md:leading-16 xl:leading-21 tracking-[-2px] font-bold bg-clip-text text-transparent bg-linear-to-r from-light-blue to-dark-blue">
                              {faqs?.title || 'Clarity Before Commitment.'}
                         </h2>

                         {/* Tag */}
                         <div className="mt-5 border border-dark-blue rounded-full w-60.5 h-12 text-[18px] bg-light-blue/10 text-dark-blue transition-all duration-300 plus-jakarta flex items-center justify-center">
                              {faqs?.keywords || 'No Jargon. Just Anss.'}
                         </div>
                         {/* Description */}
                         <p className="mt-7 text-[14px] md:text-[18px] leading-6 md:leading-8 text-dark-blue max-w-7xl plus-jakarta">
                              {faqs?.description || 'We dont like ambiguity, and neither do you. From IP ownership to payment structures, here is the straight talk on how we operate, so we can focus on what matters: building your brand.'}
                         </p>
                    </div>

                    {/* FAQ */}

                    <div className="space-y-6 cursor-pointer mt-15">

                         {faqs?.faq?.map((faq, index) => {

                              const isOpen = activeIndex === index;

                              return (
                                   <div
                                        key={index}
                                        className="border-b border-gray-300 pb-6 plus-jakarta-sans "
                                   >

                                        {/* Ques */}

                                        <button
                                             onClick={() => toggleFaq(index)}
                                             className="w-full flex justify-between items-center text-left"
                                        >

                                             <span
                                                  className={`text-[18px] md:text-[24px] cursor-pointer transition ${isOpen ? "text-cust-orange" : "text-dark-black"
                                                       }`}
                                             >
                                                  {faq?.ques || 'What services do UI UX design agencies offer?'}
                                             </span>

                                             <span className="relative text-lg md:text-xl w-5 h-5 inline-block">

                                                  <HiPlus
                                                       className={`absolute inset-0 cursor-pointer transition-all duration-300 ${isOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                                                            }`}
                                                  />

                                                  <HiMinus
                                                       className={`absolute text-cust-orange cursor-pointer inset-0 transition-all duration-300 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                                                            }`}
                                                  />

                                             </span>

                                        </button>

                                        {/* Ans */}

                                        <div
                                             className={`grid transition-all duration-300 ${isOpen
                                                  ? "grid-rows-[1fr] mt-4"
                                                  : "grid-rows-[0fr]"
                                                  }`}
                                        >

                                             <div className="overflow-hidden">

                                                  <p className="text-dark-black  text-[12px] md:text-[16px] lg:text-[18px] leading-5 md:leading-6 lg:leading-8">
                                                       {faq?.ans || 'User research, UX strategy, wireframing, UI design, prototyping, and usability testing are all provided by UI/UX design firms to produce user-friendly, conversion-focused digital products for the web and mobile platforms.'}
                                                  </p>

                                             </div>

                                        </div>

                                   </div>
                              );
                         })}

                    </div>

               </div>

          </section>
     );
};

export default Faq;