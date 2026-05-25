import Button from "../components/Button";
import Breadcrumb from "../components/BreadCrumb";
import { useEffect } from "react";
import Form from "../components/Contact/Form";

const Contact = () => {
     useEffect(() => {
          window.scrollTo(0, 0);
     }, [])
     return (
          <section className="relative overflow-hidden pb-16 md:pb-24 plus-jakarta">
               <Breadcrumb />
               <div className="absolute inset-0 h-full w-full">\
                    <picture>
                         <source media="(max-width: 768px)" srcSet="/bg-mobile.webp" />
                         <source media="(min-width: 769px)" srcSet="/bg.webp" />
                         <img src="/bg.webp" alt="Gradient BG" className="w-full h-full object-fill" />
                    </picture>
                    <div className="absolute inset-0 bg-white/80" />
               </div>

               <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10 pt-16 md:pt-24">
                    {/* Top Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-14 items-end">

                         {/* Left Content */}
                         <div className="max-w-xl xl:max-w-md">
                              <h2 className="playfair text-[44px] sm:text-[52px] md:text-[72px] leading-12 md:leading-16 xl:leading-21 tracking-[-2px] font-bold bg-clip-text text-transparent bg-linear-to-r from-light-blue to-dark-blue">
                                   The Start of a New Narrative
                              </h2>

                              <button className="mt-5 border border-dark-blue rounded-full w-46.5 h-8 md:h-12 text-[15px] md:text-[18px] bg-light-blue/10 text-dark-blue transition-all duration-300 plus-jakarta">
                                   Let's Collaborate
                              </button>

                         </div>

                         {/* Right */}
                         <div className="lg:pl-10">
                              <p className="max-w-82.5 text-[#161616] text-[17px] leading-7 md:leading-[1.9] font-normal">
                                   Great design is a conversation. We’re here to
                                   listen, interpret, and amplify your brand’s
                                   unique voice.
                              </p>
                         </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_530px] gap-7 md:gap-10">

                         {/* Left Info */}
                         <div>
                              {/* Image */}
                              <div className="overflow-hidden rounded-[28px]">
                                   <img
                                        src='/office.webp'
                                        alt="Office"
                                        className="w-full h-60 md:h-90 object-fill"
                                   />
                              </div>

                              {/* Info Grid */}
                              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-10">

                                   {/* Inquiries */}
                                   <div>
                                        <h3 className="text-[#0E0E0E] text-[20px] md:text-[28px] font-semibold mb-2 md:mb-4">
                                             Inquiries
                                        </h3>

                                        <div className="space-y-2 text-[15px] text-[#555]">
                                             <p>pyush.anand7@gmail.com</p>
                                             <p>+91 9643006703</p>
                                        </div>
                                   </div>

                                   {/* Location */}
                                   <div>
                                        <h3 className="text-[#0E0E0E] text-[20px] md:text-[28px] font-semibold mb-2 md:mb-4">
                                             Location
                                        </h3>

                                        <div className="space-y-2 text-[15px] text-[#555]">
                                             Springboard janak puri - 110015
                                        </div>
                                   </div>

                                   {/* Socials */}
                                   <div>
                                        <h3 className="text-[#0E0E0E] text-[20px] md:text-[28px] font-semibold mb-2 md:mb-4">
                                             Socials
                                        </h3>

                                        <div className="flex flex-wrap gap-4 text-[15px] text-[#555]">
                                             <a href="/">Instagram</a>
                                             <a href="/">LinkedIn</a>
                                             <a href="/">Dribbble</a>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         {/* Form Card */}
                         <Form />
                    </div>
               </div>

               <div className="max-w-92 md:max-w-150 lg:max-w-300 mx-auto pt-25 pb-50 relative z-10">
                    {/* <img src={ContactMap} alt="Contact Map" width={850} height={480} className="object-cover w-full h-auto" /> */}
                    <picture>
                         <source media="(max-width: 768px)" srcSet="/contact-map-mobile.webp" />
                         <source media="(min-width: 769px)" srcSet="/contact-map.webp" />
                         <img src="/contact-map.webp" alt="Contact Map" width={850} height={480} className='object-cover w-full h-auto' />
                    </picture>
               </div>
          </section>
     );
};

export default Contact;