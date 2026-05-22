import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { GoArrowUpRight } from "react-icons/go";
import Button from "../Button";

export default function Hero() {
     return (
          <section className="relative min-h-screen overflow-hidden pt-25 pb-10 flex items-center justify-center px-6">

               <img src="/gradient-bg.webp" alt="Gradient BG" className="absolute w-full inset-0 min-h-[200vh]" />

               {/* Content */}
               <div className="relative z-10 text-center">

                    {/* Heading */}
                    <h1 className="text-[36px] md:text-[42px] xl:text-[72px] leading-12 md:leading-18 xl:leading-21 font-bold tracking-[-2px] playfair bg-linear-to-r from-white/10 via-white/75 to-white/10 bg-clip-text text-transparent">
                         Page Title To Be Added
                    </h1>

                    {/* Description */}
                    <p className="mt-6 text-[15px] md:text-[20px] leading-[1.8] text-white/75 max-w-4xl mx-auto font-light plus-jakarta">
                         From bold identities to high-performance websites, branding, and digital marketing, we create digital experiences that stand out in crowded markets, increase engagement, and scale your business. Some page description
                    </p>

                    {/* CTA Button */}

                    <div className="flex items-center justify-center mt-5">
                         <Button widthHeight="w-42.25 lg:w-[235px] h-12 lg:h-[56px]" />
                    </div>

                    <div className="bg-white rounded-3xl min-h-60 md:min-h-100 lg:min-h-160 w-full min-w-92 md:min-w-150 lg:min-w-340 mx-auto mt-10"></div>
               </div>
          </section>
     );
}