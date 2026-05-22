import { useEffect, useState } from "react";
import Button from "../Button";

export default function HeroSection({ data }) {

     const defaultHero = {
          title: 'Design Strategy Impact',
          description: 'From bold identities to high-performance websites, branding, and digital marketing, we create digital experiences that stand out in crowded markets, increase engagement, and scale your business.'
     };

     const [hero, setHero] = useState(defaultHero);

     useEffect(() => {

          if (data?.hero) {

               setHero({
                    title:
                         data?.hero?.title ||
                         defaultHero.title,

                    description:
                         data?.hero?.description ||
                         defaultHero.description
               });

          } else {

               setHero(defaultHero);
          }

     }, [data]);

     return (
          <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">

               <img
                    src='/gradient-bg.webp'
                    alt="Gradient BG"
                    className="absolute inset-0 w-full min-h-screen object-cover"
               />

               {/* Content */}
               <div className="relative z-10 max-w-4xl text-center">

                    {/* Heading */}
                    <h1 className="text-[36px] md:text-[42px] xl:text-[72px] leading-12 md:leading-18 xl:leading-21 font-bold tracking-[-2px] playfair bg-linear-to-r from-white/10 via-white/75 to-white/10 bg-clip-text text-transparent wrap-break-word">
                         {hero?.title}
                    </h1>

                    {/* Description */}
                    <p className="mt-6 text-[15px] md:text-[20px] leading-[1.8] text-white/75 max-w-4xl mx-auto font-light plus-jakarta wrap-break-word">
                         {hero?.description}
                    </p>

                    {/* CTA Button */}
                    <div className="flex items-center justify-center mt-5">
                         <Button widthHeight="w-42.25 lg:w-[235px] h-12 lg:h-[56px]" />
                    </div>

               </div>

          </section>
     );
}