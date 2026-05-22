import { useEffect } from 'react';
import Breadcrumb from '../components/BreadCrumb';

const Terms = () => {
     useEffect(() => {
          window.scrollTo(0, 0);
     }, [])
     return (
          <section className="relative overflow-hidden pb-60 md:pb-60 plus-jakarta">

               <Breadcrumb />
               <div className="absolute inset-0 h-full w-full">
                    <img
                         src='/bg.webp'
                         alt="Gradient BG"
                         className="w-full h-full object-fill"
                    />

                    <div className="absolute inset-0 bg-white/80" />
               </div>

               <div className="relative z-2 max-w-245 mx-auto px-5 sm:px-8 lg:px-10 pt-18 md:pt-21 flex flex-col items-center justify-center">

                    {/* Left Content */}
                    <div className="max-w-xl xl:max-w-4xl flex flex-col gap-3 md:gap-10 items-center justify-center">
                         <h2 className="playfair text-[44px] sm:text-[52px] md:text-[72px] leading-12 md:leading-16 xl:leading-21 tracking-[-2px] font-bold bg-clip-text text-transparent bg-linear-to-r from-light-blue to-dark-blue">
                              Terms and Conditions
                         </h2>

                         <button className="border border-dark-blue rounded-full w-26.5 md:w-36 h-8 md:h-12 text-[15px] md:text-[18px] bg-light-blue/10 text-dark-blue transition-all duration-300 plus-jakarta">
                              Legal
                         </button>

                    </div>

                    {/* Content */}
                    <div className="mt-10 space-y-14">

                         {/* Section */}
                         <div>
                              <h2 className="text-[#161616] text-[16px] md:text-[18px] font-medium mb-3">
                                   1. Heading
                              </h2>

                              <div className="space-y-1 text-[#161616]/50 text-[14px] md:text-[16px] leading-6">
                                   <p>
                                        We value your privacy and are committed to protecting your personal information.
                                   </p>

                                   <p>
                                        We collect limited data—such as your name, contact details, and property preferences—to provide personalized real estate solutions and improve our services.
                                   </p>

                                   <p>
                                        Your data may be shared with trusted partners (like builders, legal advisors, or financial institutions) only for service-related purposes. We never sell or misuse your information.
                                   </p>

                                   <p>
                                        All data is stored securely and used in compliance with applicable privacy laws. By engaging with us, you consent to our data practices.
                                   </p>

                                   <p>
                                        For any queries or to manage your data, please contact us at info@dhswellness.com
                                   </p>
                              </div>
                         </div>

                         {/* Section */}
                         <div>
                              <h2 className="text-[#161616] text-[16px] md:text-[18px] font-medium mb-3">
                                   1. Heading
                              </h2>

                              <div className="space-y-1 text-[#161616]/50 text-[14px] md:text-[16px] leading-6">
                                   <p>
                                        We value your privacy and are committed to protecting your personal information.
                                   </p>

                                   <p>
                                        We collect limited data—such as your name, contact details, and property preferences—to provide personalized real estate solutions and improve our services.
                                   </p>

                                   <p>
                                        Your data may be shared with trusted partners (like builders, legal advisors, or financial institutions) only for service-related purposes. We never sell or misuse your information.
                                   </p>

                                   <p>
                                        All data is stored securely and used in compliance with applicable privacy laws. By engaging with us, you consent to our data practices.
                                   </p>

                                   <p>
                                        For any queries or to manage your data, please contact us at info@dhswellness.com
                                   </p>
                              </div>
                         </div>

                         {/* Contact */}
                         <div>
                              <h2 className="text-[#161616] text-[16px] md:text-[18px] font-medium mb-3">
                                   2. Contact Us
                              </h2>

                              <p className="text-[#6B6B6B] text-[14px] md:text-[16px] leading-[1.9]">
                                   For questions, data requests, or concerns related to privacy, contact: info@dhswellness.com
                              </p>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Terms;