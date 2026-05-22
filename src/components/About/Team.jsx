import TeamMember from '../../assets/member.webp';

const teamMembers = [
     {
          name: "Marcus Thorne",
          role: "Founder & Creative Lead",
          image: TeamMember,
     },
     {
          name: "Elena Voss",
          role: "Design Strategy",
          image: TeamMember,
     },
];

const Team = () => {

     return (
          <section className="relative overflow-hidden pt-20 pb-60 md:pt-28 md:pb-68 plus-jakarta">

               {/* BG */}
               <div className="absolute inset-0 h-full w-full">

                    <img
                         src="/bg.webp"
                         alt="Background"
                         className="w-full h-full object-fill"
                    />

                    <div className="absolute inset-0 bg-white/75" />

               </div>

               {/* CONTAINER */}
               <div className="relative z-10 max-w-360 mx-auto px-5 md:px-8 xl:px-14">

                    <div className="grid grid-cols-1 xl:grid-cols-[0.7fr_1fr] gap-14 xl:gap-20 items-center">

                         {/* LEFT CONTENT */}
                         <div className="max-w-107.5">

                              {/* TITLE */}
                              <h2 className="playfair text-[44px] sm:text-[52px] md:text-[72px] leading-12 md:leading-16 xl:leading-21 tracking-[-2px] font-bold bg-clip-text text-transparent bg-linear-to-r from-light-blue to-dark-blue">
                                   The Minds Behind
                              </h2>

                              {/* TAG */}
                              <div className="mt-6 border border-dark-blue rounded-full px-7 h-12 text-[16px] md:text-[18px] bg-light-blue/10 text-dark-blue flex items-center justify-center w-fit">
                                   The Team
                              </div>

                              {/* DESCRIPTION */}
                              <p className="mt-8 text-[15px] md:text-[18px] leading-7 md:leading-8 text-dark-blue max-w-100 plus-jakarta">
                                   A syndicate of designers, poets, and technologists united by a shared disdain for the mediocre.
                              </p>

                         </div>

                         {/* TEAM CARDS */}
                         <div className="grid grid-cols-1 md:grid-cols-[1fr_0.9fr] gap-5 md:gap-6 items-start">

                              {teamMembers.map((member, index) => (

                                   <div
                                        key={index}
                                        className={`
     group relative overflow-hidden rounded-[26px] md:rounded-[30px]
     bg-[#050816]
     shadow-[0_0_60px_rgba(0,0,0,0.08)]

     ${index === 0
                                                  ? "min-h-100 md:min-h-125"
                                                  : "min-h-90 md:min-h-110 md:mt-4"
                                             }
`}
                                   >

                                        {/* IMAGE */}
                                        <img
                                             src={member.image}
                                             alt={member.name}
                                             className="absolute inset-0 w-full h-full object-fill transition-transform duration-700 group-hover:scale-102"
                                        />

                                        {/* OVERLAY */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />

                                        {/* CONTENT */}
                                        <div className="absolute bottom-0 left-0 w-full p-7 md:p-9">

                                             <h3 className="playfair text-[38px] md:text-[36px] leading-12 text-white font-bold">
                                                  {member.name}
                                             </h3>

                                             <p className=" text-[#FF9900] text-[16px] md:text-[14px] font-medium">
                                                  {member.role}
                                             </p>

                                        </div>

                                   </div>

                              ))}

                         </div>

                    </div>

               </div>

          </section>
     );
};

export default Team;