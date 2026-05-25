import { useMemo, useState } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { getTestimonials } from "../../utils/testimonial";
import { useEffect } from "react";
import DefaultAvatar from '../../assets/default-avatar.webp';

const stats = [
     {
          title: "5+",
          description: "Years of Innovation. It’s not just about time served; it’s about evolution. You get the wisdom of a veteran with the agility of a startup.",
     },
     {
          title: "100+",
          description: "Projects Successfully Deployed. We don’t guess; we know what works.",
     },
     {
          title: "98%",
          description: "Client Retention Rate We don’t just win pitches; we build partnerships.",
     },
     {
          title: "40+",
          description: "Industries Served. We are sector-agnostic problem solvers. we bring fresh cross-industry perspectives to your project.",
     },
];

const defaultImpact = {
     title: 'We Let the Results Do the Talking',
     keyword: 'Our Impact by the Numbers',
};
const defaultTestimonials = [
     {
          title: "The best investment we made this year.",
          quote:
               "Working with [Your Name] and the team was a game-changer. They didn’t just redesign our website; they completely reimagined how we speak to our customers. The new UI increased our sign-ups by 40% in the first month.",
          name: "Rajesh K.",
          role: "Founder @ [Tech Startup Name]",
          avatar: DefaultAvatar
     },
     {
          title: "A team that genuinely understands product.",
          quote:
               "From strategy to execution, everything felt seamless. Their design system improved our internal workflow massively and our conversion rate jumped almost instantly after launch.",
          name: "Ananya S.",
          role: "CEO @ [SaaS Company]",
          avatar: DefaultAvatar
     },
     {
          title: "Pixel perfect execution with real business impact.",
          quote:
               "What impressed us most was their attention to detail. Every interaction felt intentional. Our bounce rate dropped and customer engagement improved significantly.",
          name: "Vikram R.",
          role: "Marketing Lead @ [Digital Brand]",
          avatar: DefaultAvatar
     },
];

export default function WhatWeDo({ data }) {

     const [[current, direction], setCurrent] = useState([0, 0]);
     const [testimonials, setTestimonials] = useState(defaultTestimonials);
     const activeTestimonial = useMemo(
          () => testimonials[current] || defaultTestimonials[0],
          [current, testimonials]
     );



     const [impact, setImpact] = useState({
          ...defaultImpact,
          cards: stats,
     });

     useEffect(() => {

          if (data?.impact) {

               setImpact({
                    title:
                         data?.impact?.title ||
                         defaultImpact.title,

                    keyword:
                         data?.impact?.keyword ||
                         defaultImpact.keyword,

                    cards:
                         Array.isArray(data?.impact?.cards) &&
                              data?.impact?.cards?.length > 0
                              ? data.impact.cards
                              : stats
               });

          } else {

               setImpact({
                    ...defaultImpact,
                    cards: stats
               });

          }

     }, [data]);

     useEffect(() => {
          const fetchTestimonials = async () => {
               try {
                    const testi = await getTestimonials();

                    if (Array.isArray(testi) && testi.length > 0) {
                         setTestimonials(testi);
                         console.log(testi);

                    }
               } catch (error) {
                    console.error("Testimonials fetch failed:", error);

                    // fallback automatically defaultTestimonials hi rhega
               }
          };

          fetchTestimonials();
     }, []);

     const handleNext = () => {
          setCurrent(([prev]) => [
               prev === testimonials.length - 1 ? 0 : prev + 1,
               1,
          ]);
     };

     const handlePrev = () => {
          setCurrent(([prev]) => [
               prev === 0 ? testimonials.length - 1 : prev - 1,
               -1,
          ]);
     };

     return (
          <section className="w-full relative overflow-hidden plus-jakarta bg-[#001763]">

               <img
                    src='/gradient-bg.webp'
                    alt="Gradient BG"
                    width={1240}
                    height={689}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none"
               />

               <div className="max-w-325 mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-20 md:pt-28 pb-20 md:pb-28 relative z-10">

                    {/* Top Heading */}
                    <div className="flex flex-col items-center text-center">
                         <h2 className="playfair text-[40px] sm:text-[52px] md:text-[72px] leading-14 md:leading-18 lg:leading-21 tracking-[-2px] font-bold bg-clip-text text-transparent bg-linear-to-r from-white/10 via-white/50 to-white/10">
                              {impact?.title}
                         </h2>

                         <div className="mt-5 border border-light-blue rounded-full w-76.5 h-12 text-[18px] text-white/75 flex items-center justify-center">
                              {impact?.keyword}
                         </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10 mt-20">

                         {(impact?.cards || stats).map((item, index) => (
                              <div
                                   key={index}
                                   className="border-b border-[#28458F]/40 pb-8 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8"
                              >
                                   <h3 className="text-white text-[70px] sm:text-[82px] lg:text-[90px] leading-none font-light tracking-tighter min-w-fit urbanist">
                                        {item.title}
                                   </h3>

                                   <p className="text-white/70 text-[15px] md:text-[18px] leading-7 md:leading-8 max-w-105 pt-3">
                                        {item.description}
                                   </p>
                              </div>
                         ))}
                    </div>

                    {/* Bottom Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 mt-28 items-start">

                         {/* Left Content */}
                         <div>
                              <h2 className="playfair text-[40px] sm:text-[52px] md:text-[72px] leading-14 md:leading-18 lg:leading-21 tracking-[-2px] font-bold bg-clip-text text-transparent bg-linear-to-r from-white/10 to-white/50">
                                   Trusted by Visionaries
                              </h2>

                              <div className="mt-5 border border-light-blue rounded-full w-50.5 h-12 text-[18px] text-white/75 flex items-center justify-center">
                                   Testimonials
                              </div>

                              <p className="mt-7 text-[15px] md:text-[18px] leading-7 md:leading-8 text-white max-w-7xl">
                                   We pride ourselves on building long-term partnerships, not just vendor lists.
                                   Here is what happens when Indian ingenuity meets world-class design execution.
                              </p>
                         </div>

                         {/* Testimonial */}
                         <div className="w-full flex flex-col items-end">

                              {/* Static Card */}
                              <div className="w-full max-w-143.75 border border-dark-blue rounded-[28px] p-5 sm:p-8 md:p-7 shadow-[0_0_40px_rgba(0,0,0,0.18)] backdrop-blur-md overflow-hidden min-h-85 md:min-h-74.5 relative">

                                   <div
                                        key={current}
                                        className="absolute inset-0 p-6 sm:p-8 md:p-7 animate-slide"
                                   >

                                        <h3 className="text-white text-[18px] md:text-[24px] leading-9 font-bold">
                                             {activeTestimonial.title}
                                        </h3>

                                        <p className="mt-3 text-white/75 text-[14px] md:text-[16px] leading-6 tracking-[0.2px] line-clamp-5">
                                             {activeTestimonial.quote}
                                        </p>

                                        <div className="flex items-center gap-4 mt-6">
                                             <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center overflow-hidden">
                                                  {/* <div className="w-15 h-15 rounded-full bg-[#FF5A00]" /> */}
                                                  <img src={activeTestimonial.avatar} alt={`${activeTestimonial.name} - Profile`} width={160} height={160} className="object-cover w-15 h-15 rounded-full" />
                                             </div>

                                             <div>
                                                  <h4 className="text-white text-[24px] font-bold leading-none">
                                                       {activeTestimonial.name}
                                                  </h4>

                                                  <p className="text-white/75 mt-2">
                                                       {activeTestimonial.role}
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              {/* Controls */}
                              <div className="flex items-center gap-4 mt-8 pr-2">

                                   <button
                                        onClick={handlePrev}
                                        aria-label="Previous Testimonial"
                                        className="w-12 h-12 rounded-full border border-[#8EA4E8] flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all duration-300 cursor-pointer active:scale-95"
                                   >
                                        <IoMdArrowBack size={28} />
                                   </button>

                                   <button
                                        onClick={handleNext}
                                        aria-label="Next Testimonial"
                                        className="w-12 h-12 rounded-full border border-[#8EA4E8] flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all duration-300 cursor-pointer active:scale-95"
                                   >
                                        <IoMdArrowForward size={28} />
                                   </button>

                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}