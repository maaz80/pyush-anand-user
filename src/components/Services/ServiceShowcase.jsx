
const creativeCards = [
     "col-span-1 row-span-1",
     "col-span-1 row-span-1",
     "col-span-1 row-span-2",
     "col-span-2 row-span-1",
];

const marketingCards = [1, 2, 3];
const funnelCards = [1, 2, 3];

const SectionHeading = ({ title, tag }) => {
     return (
          <div className="flex flex-col items-center text-center">
               <h2 className="playfair text-[40px] sm:text-[52px] md:text-[72px] leading-[0.95] tracking-[-2px] font-bold bg-clip-text text-transparent bg-linear-to-r from-light-blue to-dark-blue">
                    {title}
               </h2>

               <div className="mt-5 border border-dark-blue rounded-full px-6 h-12 text-[16px] md:text-[18px] bg-light-blue/10 text-dark-blue flex items-center justify-center plus-jakarta">
                    {tag}
               </div>
          </div>
     );
};

const PlaceholderCard = ({ className = "" }) => {
     return (
          <div
               className={`
                    rounded-[18px]
                    bg-[#B9B9B9]
                    shadow-[0_0_40px_rgba(107,114,128,0.15)]
                    w-full
                    min-h-45
                    md:min-h-60
                    ${className}
               `}
          />
     );
};

const ServicesShowcase = () => {

     return (
          <section className="relative overflow-hidden py-20 md:py-28 plus-jakarta">

               {/* BG */}
               <div className="absolute inset-0 h-full w-full">
                    <img
                         src='/bg.webp'
                         alt="Background"
                         className="w-full h-full object-fill"
                    />

                    <div className="absolute inset-0 bg-white/75" />
               </div>

               <div className="relative z-10 max-w-362.5 mx-auto px-5 md:px-8 xl:px-14">

                    {/* ================= CREATIVE ================= */}
                    <div>

                         <SectionHeading
                              title="Visualize Your Idea"
                              tag="Creative Services"
                         />

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-12 auto-rows-[180px] md:auto-rows-[240px]">

                              {creativeCards.map((item, index) => (

                                   <PlaceholderCard
                                        key={index}
                                        className={item}
                                   />

                              ))}

                         </div>

                    </div>

                    {/* ================= MARKETING ================= */}
                    <div className="mt-28 md:mt-36">

                         <SectionHeading
                              title="Market Your Products"
                              tag="Marketing Services"
                         />

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-12">

                              {marketingCards.map((_, index) => (

                                   <PlaceholderCard
                                        key={index}
                                   />

                              ))}

                         </div>

                    </div>

                    {/* ================= FUNNEL ================= */}
                    <div className="mt-28 md:mt-36">

                         <SectionHeading
                              title="Funnel Your Data"
                              tag="Custom Solutions"
                         />

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-12">

                              {funnelCards.map((_, index) => (

                                   <PlaceholderCard
                                        key={index}
                                   />

                              ))}

                         </div>

                    </div>

               </div>

          </section>
     );
};

export default ServicesShowcase;