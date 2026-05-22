import {
     HiOutlineChatBubbleLeftRight,
     HiOutlineCog6Tooth,
} from "react-icons/hi2";

import { PiCompassToolBold } from "react-icons/pi";

const values = [
     {
          icon: <HiOutlineChatBubbleLeftRight className="w-9 h-9 text-white" />,
          title: "Clarity over complexity",
          description:
               "We keep things simple, transparent, and easy to understand at every step.",
     },
     {
          icon: <HiOutlineCog6Tooth className="w-9 h-9 text-white" />,
          title: "Results over promises",
          description:
               "We focus on what actually moves the needle for your business.",
     },
     {
          icon: <PiCompassToolBold className="w-9 h-9 text-white" />,
          title: "People over projects",
          description:
               "Behind every brief is a real business with real goals. We treat it that way.",
     },
];

const Values = () => {

     return (
          <section className="relative overflow-hidden pt-10 pb-20 md:pt-14 md:pb-28 lg:pt-20 lg:pb-40 plus-jakarta">
               <img src='/gradient-bg.webp' alt="Gradient BG" className="absolute w-full inset-0 min-h-[200vh] md:min-h-[120vh]" />
               {/* CONTAINER */}
               <div className="max-w-362.5 mx-auto px-5 sm:px-8 md:px-10 xl:px-14 relative z-30">

                    {/* TOP CONTENT */}
                    <div className="flex flex-col items-center text-center">

                         {/* HEADING */}
                         <h2 className="playfair text-[40px] sm:text-[52px] md:text-[72px] leading-14 md:leading-18 lg:leading-21 tracking-[-2px] font-bold bg-clip-text text-transparent bg-linear-to-r from-white/10 via-white/50 to-white/10">
                              The Values That Make Us
                         </h2>

                         {/* TAG */}
                         <div className="mt-6 border border-light-blue rounded-full px-7 h-12 text-[16px] md:text-[18px] text-white/75 flex items-center justify-center">
                              Our Values
                         </div>

                    </div>

                    {/* CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-16 md:gap-y-20 xl:gap-x-24 mt-14 md:mt-16">

                         {values.map((item, index) => (

                              <div
                                   key={index}
                                   className="group"
                              >

                                   {/* ICON BOX */}
                                   <div className="w-16 h-16 md:w-24 md:h-24 rounded-[18px] md:rounded-[20px] bg-white/5 border border-white/3 flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-500 group-hover:bg-white/10 group-hover:-translate-y-1">

                                        {item.icon}

                                   </div>

                                   {/* TITLE */}
                                   <h3 className="mt-10 playfair text-[32px] md:text-[30px] leading-9 text-white">
                                        {item.title}
                                   </h3>

                                   {/* DESCRIPTION */}
                                   <p className="mt-6 text-white/75 text-[16px] md:text-[16px] leading-7 max-w-95">
                                        {item.description}
                                   </p>

                              </div>

                         ))}

                    </div>

               </div>

          </section>
     );
};

export default Values;