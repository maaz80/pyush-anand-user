import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useState } from "react";

const services = [
     {
          title: "Motion",
          image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
     },
     {
          title: "Print",
          image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200&auto=format&fit=crop",
     },
     {
          title: "Package & Merch",
          image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
     },
     {
          title: "UI",
          image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
     },
     {
          title: "Social Media",
          image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
     },
     {
          title: "UX",
          image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
     },
];

export default function ConceptToConversation({data}) {
     const marqueeRef = useRef(null);
     const defaultExpertise = {
          title: ' From Concept to Conversion.',

          keyword: 'Our Expertise',

          description:
               ' We bridge the gap between creative vision and technical execution. Whether you need a brand overhaul, a high-converting website, or a product interface that users love, our team delivers holistic solutions tailored for the modern digital landscape.',

          images: services
     };

     const [expertise, setExpertise] = useState(defaultExpertise);

     useEffect(() => {

          if (data?.expertise) {

               setExpertise({
                    title:
                         data?.expertise?.title ||
                         defaultExpertise.title,

                    keyword:
                         data?.expertise?.keyword ||
                         defaultExpertise.keyword,

                    description:
                         data?.expertise?.description ||
                         defaultExpertise.description,

                    images:
                         data?.expertise?.images?.length > 0
                              ? data.expertise.images
                              : defaultExpertise.images
               });

          } else {

               setExpertise(defaultExpertise);
          }

     }, [data]);
     
     useEffect(() => {
          const marquee = marqueeRef.current;

          if (!marquee) return;

          const totalWidth = marquee.scrollWidth / 2;

          const tween = gsap.fromTo(
               marquee,
               { x: 0 },
               {
                    x: -totalWidth,
                    duration: 30,
                    repeat: -1,
                    ease: "none",
               }
          );

          return () => {
               tween.kill();
          };
     }, []);

     return (
          <section className="relative overflow-hidden py-20 md:py-28">


               <div className="relative z-10">

                    {/* Heading */}
                    <div className="mx-auto flex max-w-5xl flex-col items-center px-5 text-center">

                         <h2 className="playfair text-[44px] sm:text-[52px] md:text-[72px] leading-12 md:leading-16 xl:leading-21 tracking-[-2px] font-bold bg-clip-text text-transparent bg-linear-to-r from-light-blue to-dark-blue">
                             {expertise?.title}
                         </h2>

                         {/* Tag */}
                         <div className="mt-5 border border-dark-blue rounded-full w-46.5 h-8 md:h-12 text-[15px] md:text-[18px] bg-light-blue/10 text-dark-blue transition-all duration-300 plus-jakarta flex items-center justify-center">
                              {expertise?.keyword}
                         </div>
                         {/* Description */}
                         <p className="mt-7 text-[14px] md:text-[18px] leading-6 md:leading-8 text-dark-blue max-w-7xl plus-jakarta">
                             {expertise?.description}
                         </p>
                    </div>

                    {/* Marquee */}
                    <div className="relative pt-16 overflow-x-hidden">

                         <div ref={marqueeRef} className="flex w-max gap-5 will-change-transform">

                              {[...expertise.images, ...expertise.images].map((service, index) => (
                                   <div key={index} className="group relative h-62.5 w-45 sm:h-70 sm:w-50 md:h-80 md:w-57.5 overflow-hidden rounded-[22px] shrink-0 cursor-pointer hover:-translate-y-4 transition-all duration-500 ease-in-out">

                                        {/* Image */}
                                        <img
                                             src={service?.image}
                                             alt={service?.boldtext}
                                             className="h-full w-full object-fill"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/5 to-black/50" />

                                        {/* Title */}
                                        <div className="absolute top-4 left-4 right-4 z-10">
                                             <h3 className="plus-jakarta text-white text-[15px] md:text-[20px] leading-[1.3] text-center ">
                                                  <span className="font-semibold">{service?.boldtext}</span>{" "} <span className="font-extralight italic">{service?.italictext || 'Design'}</span>
                                             </h3>
                                        </div>
                                   </div>
                              ))}
                         </div>

                         {/* Left Fade */}
                         <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-linear-to-r from-[#f5f5f5] to-transparent" />

                         {/* Right Fade */}
                         <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-linear-to-l from-[#f5f5f5] to-transparent" />
                    </div>
               </div>
          </section>
     );
}