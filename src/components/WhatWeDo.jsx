"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const stats = [
     {
          number: "5+",
          text: "Years of Innovation. It’s not just about time served; it’s about evolution. You get the wisdom of a veteran with the agility of a startup.",
     },
     {
          number: "100+",
          text: "Projects Successfully Deployed. We don’t guess; we know what works.",
     },
     {
          number: "98%",
          text: "Client Retention Rate We don’t just win pitches; we build partnerships.",
     },
     {
          number: "40+",
          text: "Industries Served. We are sector-agnostic problem solvers. we bring fresh cross-industry perspectives to your project.",
     },
];


export default function WhatWeDo() {

     return (
          <section className="w-full relative overflow-hidden plus-jakarta bg-[#001763]">

               <img
                    src='/gradient-bg.webp'
                    alt="Gradient BG"
                    className="absolute inset-0 w-full h-full object-fill opacity-90 pointer-events-none"
               />

               <div className="max-w-325 mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-20 md:pt-28 pb-20 md:pb-28 relative z-10">

                    {/* Top Heading */}
                    <div className="flex flex-col items-center text-center">
                         <h2 className="playfair text-[40px] sm:text-[52px] md:text-[72px] leading-14 md:leading-18 lg:leading-21 tracking-[-2px] font-bold bg-clip-text text-transparent bg-linear-to-r from-white/10 via-white/50 to-white/10">
                              We Let the Results Do the Talking
                         </h2>

                         <div className="mt-5 border border-light-blue rounded-full w-76.5 h-12 text-[18px] text-white/75 flex items-center justify-center">
                              Our Impact by the Numbers
                         </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10 mt-20">

                         {stats.map((item, index) => (
                              <div
                                   key={index}
                                   className="border-b border-[#28458F]/40 pb-8 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8"
                              >
                                   <h3 className="text-white text-[70px] sm:text-[82px] lg:text-[90px] leading-none font-light tracking-tighter min-w-fit urbanist">
                                        {item.number}
                                   </h3>

                                   <p className="text-white/70 text-[15px] md:text-[18px] leading-7 md:leading-8 max-w-105 pt-3">
                                        {item.text}
                                   </p>
                              </div>
                         ))}
                    </div>

               </div>
          </section>
     );
}