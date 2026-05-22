
const cards = [
     {
          id: 1,
          height: "h-[380px] md:h-[680px]",
     },
     {
          id: 2,
          height: "h-[380px] md:h-[680px]",
     },
     {
          id: 3,
          height: "h-[380px] md:h-[680px]",
     },
     {
          id: 4,
          height: "h-[380px] md:h-[680px]",
     },
     {
          id: 5,
          height: "h-[380px] md:h-[680px]",
     },
     {
          id: 6,
          height: "h-[380px] md:h-[680px]",
     },
     {
          id: 7,
          height: "h-[380px] md:h-[680px]",
     },
     {
          id: 8,
          height: "h-[380px] md:h-[680px]",
     },
];

const Results = () => {

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

               <div className="relative z-10 max-w-375 mx-auto px-5 md:px-8 xl:px-14">

                    {/* TOP CONTENT */}
                    <div className="max-w-275 mx-auto flex flex-col items-center text-center">

                         {/* TITLE */}
                         <h2 className="playfair text-[40px] sm:text-[52px] md:text-[72px] leading-[0.95] tracking-[-2px] font-bold bg-clip-text text-transparent bg-linear-to-r from-light-blue to-dark-blue">
                              From Ideas To Results
                         </h2>

                         {/* TAG */}
                         <div className="mt-5 border border-dark-blue rounded-full px-6 h-12 text-[16px] md:text-[18px] bg-light-blue/10 text-dark-blue flex items-center justify-center">
                              Our Work
                         </div>

                         {/* DESCRIPTION */}
                         <p className="mt-7 text-[14px] md:text-[18px] leading-6 md:leading-8 text-dark-blue/75 max-w-250">
                              Every pixel serves a purpose. Explore a curated selection of our most impactful collaborations, where strategic insight meets creative execution. We don’t just build brands; we build business assets that drive growth, engagement, and market authority across India and beyond.
                         </p>

                    </div>

                    {/* MASONRY GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-16 md:mt-20 items-start max-w-350 mx-auto">

                         {/* LEFT COLUMN */}
                         <div className="flex flex-col gap-5 md:gap-6 md:mt-0 items-center md:items-end">

                              <div className={`rounded-[20px] w-87.5 md:w-105 lg:w-145 mr-0 md:-mr-3 md:rounded-3xl bg-[#B9B9B9] ${cards[0].height} shadow-[0_0_40px_rgba(107,114,128,0.12)]`} />

                              <div className={`rounded-[20px] w-87.5 md:w-105 lg:w-145 mr-0 md:mr-3 mt-0 md:-mt-10 md:rounded-3xl bg-[#C6C6C6] ${cards[2].height} shadow-[0_0_40px_rgba(107,114,128,0.12)]`} />

                              <div className={`rounded-[20px] w-87.5 md:w-105 lg:w-145 mr-0 md:-mr-3 mt-0 md:-mt-10 md:rounded-3xl bg-[#B9B9B9] ${cards[4].height} shadow-[0_0_40px_rgba(107,114,128,0.12)]`} />

                              <div className={`rounded-[20px] w-87.5 md:w-105 lg:w-145 mr-0 md:mr-3 mt-0 md:-mt-10 md:rounded-3xl bg-[#C6C6C6] ${cards[4].height} shadow-[0_0_40px_rgba(107,114,128,0.12)]`} />

                         </div>

                         {/* RIGHT COLUMN */}
                         <div className="flex flex-col gap-5 md:gap-6 items-center md:items-start">

                              <div className={`rounded-[20px] w-87.5 md:w-105 lg:w-145 ml-0 md:-ml-3 md:rounded-3xl bg-[#C6C6C6] ${cards[1].height} shadow-[0_0_40px_rgba(107,114,128,0.12)]`} />

                              <div className={`rounded-[20px] w-87.5 md:w-105 lg:w-145 ml-0 md:ml-3 mt-0 md:-mt-10 md:rounded-3xl bg-[#B9B9B9] ${cards[3].height}  shadow-[0_0_40px_rgba(107,114,128,0.12)]`} />

                              <div className={`rounded-[20px] w-87.5 md:w-105 lg:w-145 ml-0 md:-ml-3 mt-0 md:-mt-10 md:rounded-3xl bg-[#C6C6C6] ${cards[5].height} shadow-[0_0_40px_rgba(107,114,128,0.12)]`} />

                              <div className={`rounded-[20px] w-87.5 md:w-105 lg:w-145 ml-0 md:ml-3 mt-0 md:-mt-10 md:rounded-3xl bg-[#B9B9B9] ${cards[5].height} shadow-[0_0_40px_rgba(107,114,128,0.12)]`} />

                         </div>

                    </div>

               </div>

          </section>
     );
};

export default Results;