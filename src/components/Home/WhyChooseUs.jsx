import { useState } from 'react';
import LogoMarquee from './LogoMarque';
import { useEffect } from 'react';

const cards = [
     {
          title: 'The "Anti-Agency" Approach',
          description: 'No fluff, no middlemen, no empty promises. We cut through the noise and deliver work that actually moves the needle — direct, accountable, obsessively focused on your results.',
     },
     {
          title: 'Storytelling That Sticks',
          description: 'Every brand has a story worth telling. We craft narratives that resonate deep — the kind your audience remembers long after scrolling past a thousand others.',
     },
     {
          title: 'Pixel-Perfect Precision',
          description: 'Details are the difference between good and unforgettable. We sweat every pixel, every interaction, every margin — until it feels exactly right.',
     },
     {
          title: 'Data-Backed Creativity',
          description: 'Beautiful design without purpose is just art. We merge analytics with aesthetics — every creative decision backed by real insights so your brand grows smarter.',
     },
];
export default function WhyChooseUs({ data }) {
     const defaultWhy = {
          title: ' What Makes Us Different',
          keyword: 'Why choose us ?',
          description: ' In a crowded digital market, "good enough" is a death sentence.We are a design agency that treats your brand like our own reputation.Operating under the vision of Push Anvard, we strip away the jargon and focus on one thing: creating digital experiences that make your competitors uncomfortable.'
     };

     const [whychooseus, setWhychooseus] = useState({ ...defaultWhy, cards });

     useEffect(() => {

          if (data?.whychooseus) {

               setWhychooseus({
                    title:
                         data?.whychooseus?.title ||
                         defaultWhy.title,

                    keyword:
                         data?.whychooseus?.keyword ||
                         defaultWhy.keyword,

                    description:
                         data?.whychooseus?.description ||
                         defaultWhy.description,
                    cards:
                         data?.whychooseus?.cards?.length > 0
                              ? data.whychooseus.cards
                              : cards
               });

          } else {

               setWhychooseus({
                    ...defaultWhy,
                    cards
               });
          }

     }, [data]);
     return (
          <section className="relative overflow-hidden pt-16 pb-5 md:pt-24 md:pb-14 min-h-screen">
               <img src='/bg.webp' alt="Gradient BG" className="absolute w-full inset-0 min-h-[160vh] md:min-h-screen" />

               {/* Background Overlay */}
               <div className="absolute inset-0 bg-white/70 w-full min-h-screen" />

               <div className="relative z-10 mx-auto max-w-350 px-2 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-8 items-start">

                         {/* Left Content */}
                         <div className="max-w-xl xl:max-w-md">
                              <h2 className="playfair text-[44px] sm:text-[52px] md:text-[72px] leading-12 md:leading-16 xl:leading-21 tracking-[-2px] font-bold bg-clip-text text-transparent bg-linear-to-r from-light-blue to-dark-blue">
                                   {whychooseus?.title}
                              </h2>

                              <button className="mt-5 border border-dark-blue rounded-full w-46.5 h-8 md:h-12 text-[15px] md:text-[18px] bg-light-blue/10 text-dark-blue transition-all duration-300 plus-jakarta">
                                   {whychooseus?.keyword}
                              </button>

                              <p className="mt-8 text-[15px] md:text-[18px] leading-7 md:leading-8 text-dark-blue max-w-100 plus-jakarta">
                                   {whychooseus?.description}
                              </p>
                         </div>

                         {/* Right Cards */}
                         <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-5">
                              {whychooseus?.cards?.map((card, index) => (
                                   <div key={index} className="wcu-card relative
                                        overflow-hidden
                                        rounded-3xl
                                        bg-[#ececec]
                                        min-h-42.5
                                        md:min-h-60
                                        w-90.25
                                        p-6
                                        flex
                                        items-start
                                        shadow-[0_0_0_1px_rgba(0,0,0,0.02)]"
                                        onMouseEnter={(e) => {
                                             const dot = e.currentTarget.querySelector('.wcu-card__dot');
                                             dot.classList.remove('wcu-card__dot--leave');
                                             // Force reflow — animation restart ke liye
                                             void dot.offsetWidth;
                                             dot.style.animation = 'wcuDotJourney 0.85s cubic-bezier(0.22, 0.61, 0.36, 1) forwards';
                                        }}
                                        onMouseLeave={(e) => {
                                             const dot = e.currentTarget.querySelector('.wcu-card__dot');
                                             dot.style.animation = '';
                                             void dot.offsetWidth;
                                             dot.classList.add('wcu-card__dot--leave');
                                        }}
                                   >

                                        {/* Blue Dot — animation ka hero */}
                                        <div className="wcu-card__dot" />

                                        {/* Orange Glow */}
                                        <div className="wcu-card__glow  absolute
                                             -bottom-7.5
                                             -right-7.5
                                             h-28
                                             w-28
                                             rounded-full
                                             bg-orange-400
                                             blur-2xl
                                             opacity-90" />

                                        {/* Orange Corner Shape */}
                                        <div className="wcu-card__corner absolute
                                             bottom-0
                                             right-0
                                             h-20
                                             w-20
                                             bg-linear-to-tl
                                             from-orange-400
                                             via-orange-300
                                             to-transparent
                                             rounded-tl-full" />

                                        {/* Default Title */}
                                        <h3 className="wcu-card__title  relative z-10
                                             playfair
                                             text-[28px]
                                             md:text-[36px]
                                             leading-12
                                             font-bold
                                             max-w-55
                                             bg-clip-text text-transparent bg-linear-to-r from-light-blue to-dark-blue">{card.title}</h3>

                                        {/* Hover Content — dot fill ke baad dikhta hai */}
                                        <div className="wcu-card__hover">
                                             <p>{card.description}</p>
                                        </div>

                                   </div>
                              ))}
                         </div>
                    </div>

                    <LogoMarquee />
               </div>
          </section>
     );
}
