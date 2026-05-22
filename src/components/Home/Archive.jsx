import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import template from '../../assets/template.webp';
const column1 = [
     template,
     template,
     template,
];

const column2 = [
     template,
     template,
     template,
];

const column3 = [
     template,
     template,
     template,
];

export default function Archive({ data }) {
     const [activeImage, setActiveImage] = useState(null);
     const defaultArchive = {
          title: 'Visualizing the Extra Ordinary',

          keyword: 'The Archive',

          description:
               'Every pixel serves a purpose. Explore a curated selection of our most impactful collaborations, where strategic insight meets creative execution. We do not just build brands; we build business assets that drive growth, engagement, and market authority across India and beyond.',

          images: [
               ...column1,
               ...column2,
               ...column3
          ]
     };

     const [archive, setArchive] = useState(defaultArchive);

     useEffect(() => {

          if (data?.archive) {

               setArchive({
                    title:
                         data?.archive?.title ||
                         defaultArchive.title,

                    keyword:
                         data?.archive?.keyword ||
                         defaultArchive.keyword,

                    description:
                         data?.archive?.description ||
                         defaultArchive.description,

                    images:
                         data?.archive?.images?.length > 0
                              ? data.archive.images.map((img) => img.image)
                              : defaultArchive.images
               });

          } else {

               setArchive(defaultArchive);
          }

     }, [data]);

     return (
          <section className="relative overflow-hidden min-h-screen">
               <img src='/gradient-bg.webp' alt="Gradient BG" className="absolute w-full inset-0 min-h-[185vh] md:min-h-screen" />

               <div className="relative z-10 mx-auto max-w-350 px-5 md:px-8 ">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 max-w-350 ">

                         {/* Left Content */}
                         <div className="max-w-xl xl:max-w-xl mt-8 md:mt-0">
                              <h2 className="playfair text-[40px] sm:text-[52px] md:text-[72px] leading-14 md:leading-18 lg:leading-21 tracking-[-2px] font-bold bg-clip-text text-transparent bg-linear-to-r from-white/10 via-white/50 to-white/10">
                                   {archive?.title}
                              </h2>

                              <button className="mt-5 border border-light-blue rounded-full w-46.5 h-12 text-[18px] bg-light-blue/10 text-white transition-all duration-300 plus-jakarta">
                                   {archive?.keyword}
                              </button>

                              <p className="mt-8 text-[15px] md:text-[18px] leading-7 md:leading-8 text-white max-w-250 plus-jakarta">
                                   {archive?.description}
                              </p>
                         </div>

                         {/* Right Cards */}
                         <div className="relative h-175 overflow-hidden max-w-2xl">
                              <div className="grid grid-cols-3 gap-5">
                                   <InfiniteColumn
                                        images={archive?.images}
                                        reverse
                                        setActiveImage={setActiveImage}
                                   />

                                   <InfiniteColumn
                                        images={archive?.images}
                                        setActiveImage={setActiveImage}
                                   />

                                   <InfiniteColumn
                                        images={archive?.images}
                                        reverse
                                        setActiveImage={setActiveImage}
                                   />
                              </div>

                              {/* Fade */}
                              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-linear-to-b from-dark-blue to-transparent z-20" />
                              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-dark-blue to-transparent z-20" />
                         </div>
                    </div>

               </div>
               {/* FULLSCREEN IMAGE */}
               {activeImage && (
                    <div
                         className=" fixed inset-0 z-999999 bg-black/80 backdrop-blur-md flex items-center justify-center p-5 "
                         onClick={() => setActiveImage(null)}
                    >
                         <img
                              src={activeImage}
                              alt=""
                              className=" max-w-[95vw] max-h-[90vh] object-contain rounded-4xl "
                         />
                    </div>
               )}
          </section>
     );
}

function InfiniteColumn({ images, reverse = false, setActiveImage }) {
     const columnRef = useRef(null);
     const tweenRef = useRef(null);

     useEffect(() => {
          const column = columnRef.current;
          if (!column || !images?.length) return;

          const initAnimation = () => {
               tweenRef.current?.kill();

               const children = Array.from(column.children);
               const originalItemsCount = children.length / 2;

               // ✅ FIX 1: Use getBoundingClientRect for accurate height after render
               // offsetHeight can be 0 if images not loaded yet
               let totalHeight = 0;
               for (let i = 0; i < originalItemsCount; i++) {
                    totalHeight += children[i].getBoundingClientRect().height;
               }

               // ✅ FIX 2: Gap count should be originalItemsCount (includes gap after last item too
               // because duplicate set starts right after — seamless loop needs full gap count)
               totalHeight += originalItemsCount * 20;

               // ✅ FIX 3: Both forward and reverse start from 0 / -totalHeight correctly
               // but we must SET the initial position instantly (gsap.set) before fromTo
               // so the column doesn't visually "jump" on first frame
               gsap.set(column, { y: reverse ? -totalHeight : 0 });

               tweenRef.current = gsap.to(column, {
                    y: reverse ? 0 : -totalHeight,
                    duration: 25,
                    repeat: -1,
                    ease: "none",
                    // ✅ FIX 4: repeatRefresh ensures gsap recalculates start point
                    // on each repeat — prevents drift over time causing empty gaps
                    repeatRefresh: false,
               });
          };

          const imgs = column.querySelectorAll("img");

          // ✅ FIX 5: Track total vs loaded separately — if 0 imgs, init immediately
          if (imgs.length === 0) {
               initAnimation();
               return;
          }

          let loaded = 0;
          const total = imgs.length;

          const onLoad = () => {
               loaded++;
               if (loaded === total) {
                    initAnimation();
               }
          };

          imgs.forEach((img) => {
               if (img.complete && img.naturalHeight !== 0) {
                    // ✅ FIX 6: Check naturalHeight too — complete can be true but broken
                    onLoad();
               } else {
                    img.addEventListener("load", onLoad, { once: true });
                    img.addEventListener("error", onLoad, { once: true }); // don't hang on error
               }
          });

          // Fallback
          const timeout = setTimeout(() => {
               if (loaded < total) initAnimation();
          }, 1200);

          return () => {
               clearTimeout(timeout);
               tweenRef.current?.kill();
          };

     }, [images, reverse]);

     const slowDown = () => {
          gsap.to(tweenRef.current, {
               timeScale: 0.2,
               duration: 0.5,
               ease: "power2.out",
          });
     };

     const speedUp = () => {
          gsap.to(tweenRef.current, {
               timeScale: 1,
               duration: 0.5,
               ease: "power2.out",
          });
     };

     return (
          <div
               className="relative h-175 overflow-hidden"
               onMouseEnter={slowDown}
               onMouseLeave={speedUp}
          >
               <div
                    ref={columnRef}
                    className="flex flex-col gap-5 will-change-transform"
               >
                    {/* ORIGINAL */}
                    {images.map((img, i) => (
                         <ExpandCard
                              key={`original-${i}`}
                              image={img}
                              setActiveImage={setActiveImage}
                         />
                    ))}

                    {/* DUPLICATE */}
                    {images.map((img, i) => (
                         <ExpandCard
                              key={`duplicate-${i}`}
                              image={img}
                              setActiveImage={setActiveImage}
                         />
                    ))}
               </div>
          </div>
     );
}

function ExpandCard({ image, setActiveImage }) {
     const cardRef = useRef(null);
     const cursorRef = useRef(null);

     const handleMove = (e) => {
          const bounds = cardRef.current.getBoundingClientRect();

          const x = e.clientX - bounds.left;
          const y = e.clientY - bounds.top;

          gsap.to(cursorRef.current, {
               x,
               y,
               duration: 0.35,
               ease: "power3.out",
          });
     };

     const handleEnter = () => {
          gsap.to(cursorRef.current, {
               scale: 1,
               opacity: 1,
               duration: 0.3,
               ease: "power3.out",
          });
     };

     const handleLeave = () => {
          gsap.to(cursorRef.current, {
               scale: 0,
               opacity: 0,
               duration: 0.25,
               ease: "power3.out",
          });
     };

     return (
          <div
               ref={cardRef}
               className="
               group
               relative
               w-25 md:w-32.5 lg:w-50
               h-43 md:h-52.5 lg:h-60
               cursor-pointer
               "
               onMouseMove={handleMove}
               onMouseEnter={handleEnter}
               onMouseLeave={handleLeave}
               onClick={() => setActiveImage(image)}
          >
               {/* IMAGE WRAPPER */}
               <div
                    className="
                    relative
                    h-full
                    w-full
                    overflow-hidden
                    rounded-[28px]
                    "
               >
                    <img
                         src={image}
                         alt=""
                         className="
                         h-full
                         w-full
                         object-fill
                         "
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500" />
               </div>

               {/* FLOATING CURSOR */}
               <div
                    ref={cursorRef}
                    className="
                    pointer-events-none
                    absolute
                    left-0
                    top-0
                    z-9999
                    flex
                    h-28
                    w-28
                    items-center
                    justify-center
                    rounded-full
                    bg-white/20
                    backdrop-blur-xl
                    border
                    border-white/30
                    text-white
                    text-sm
                    font-medium
                    opacity-0
                    scale-0
                    shadow-2xl
                    -translate-x-1/2
                    -translate-y-1/2
                    "
               >
                    Expand
               </div>
          </div>
     );
}