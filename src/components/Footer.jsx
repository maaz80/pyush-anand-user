import { CgCopyright } from "react-icons/cg";
import Logo from '../assets/pyush-big-logo.webp';
import FooterCtaBg from '../assets/footer-cta-bg.webp';
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import Button from "./Button";
import { Link } from "react-router-dom";

const webLinks = [
     { "name": "Home", "path": "/" },
     { "name": "About Us", "path": "/about-us" },
     { "name": "Blogs", "path": "/blogs" },
     { "name": "Work", "path": "/work" },
     { "name": "Contact Us", "path": "/contact-us" },
];

const hasPublishedPage = (item) => Boolean(item?.hero?.title);

const getItemPath = (item) => {
     const slug = item?.slug || item?._id;
     return slug ? `/${slug}` : "#";
};

const getTopItems = (groups = [], limit = 5) => groups
     .flatMap((group) => group.items || [])
     .slice(0, limit)
     .map((item) => ({
          name: item.title,
          path: getItemPath(item),
          isActive: Boolean(item?.title && (item?.slug || item?._id) && hasPublishedPage(item)),
     }));

export default function Footer({ locationGroups = [], serviceGroups = [] }) {
     const displayServices = getTopItems(serviceGroups);
     const displayLocations = getTopItems(locationGroups);

     return (
          <footer className="relative bg-dark-blue text-white plus-jakarta">
               {/* CTA SECTION */}
               <div className="relative z-20 px-5 sm:px-8 md:px-10 -top-50">

                    <div className="relative max-w-310 mx-auto rounded-[28px] overflow-hidden min-h-55 md:min-h-75 flex items-center">

                         {/* BG IMAGE */}
                         <img
                              src={FooterCtaBg}
                              alt="Footer CTA Background"
                              className="absolute inset-0 w-full h-full object-fill"
                         />


                         {/* CONTENT */}
                         <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 sm:px-12 md:px-16 py-10 md:py-14 max-w-190">

                              <h2 className="playfair text-[34px] sm:text-[46px] md:text-[64px] leading-[0.95] tracking-[-2px] font-bold text-[#FFE6D0]">
                                   You have the vision.
                                   <br />
                                   We have the blueprint.
                                   <br />
                                   Let's collaborate.
                              </h2>

                              <div className="mt-8">
                                   <Button widthHeight="w-42.25 lg:w-[235px] h-12 lg:h-[56px]" />
                              </div>

                         </div>
                    </div>
               </div>

               {/* FOOTER CONTENT */}
               <div className="relative z-10 max-w-360 mx-auto px-5 sm:px-8 md:px-10 lg:px-14 xl:px-18 pb-8 -mt-30">


                    {/* TOP */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[2fr_0.8fr_1fr_0.8fr] gap-y-5 md:gap-y-14 gap-x-10">

                         {/* LEFT */}
                         <div className="flex flex-col sm:flex-row gap-8 md:gap-28">

                              {/* LOGO */}
                              <img src={Logo} alt="Pyush Logo" className="w-32 h-45" width={112} height={160} />

                              {/* INFO */}
                              <div>

                                   {/* SOCIALS */}
                                   <div className="flex items-center gap-5">

                                        <a
                                             href="#"
                                             className="text-white text-[28px] hover:opacity-70 transition-all duration-300"
                                        >
                                             <AiFillInstagram />
                                        </a>

                                        <a
                                             href="#"
                                             className="text-white text-[28px] hover:opacity-70 transition-all duration-300"
                                        >
                                             <IoLogoLinkedin />
                                        </a>

                                        <a
                                             href="#"
                                             className="text-white text-[34px] hover:opacity-70 transition-all duration-300"
                                        >
                                             <CgCopyright />
                                        </a>

                                   </div>

                                   {/* CONTACT */}
                                   <div className="mt-7 space-y-2">

                                        <p className="text-white/75 text-[15px] leading-8 max-w-60">
                                             Springboard janak puri - 110015
                                        </p>

                                        <a
                                             href="mailto:info@aashaayurveda.com"
                                             className="block text-white/75 text-[15px] hover:text-white transition-all duration-300"
                                        >
                                             pyush.anand7@gmail.com
                                        </a>

                                        <a
                                             href="tel:+919811737370"
                                             className="block text-white/75 text-[15px] hover:text-white transition-all duration-300"
                                        >
                                             +91 9643006703
                                        </a>

                                   </div>

                              </div>
                         </div>

                         {/* WEBLINKS */}
                         <div>
                              <h3 className="text-[20px] md:text-[28px] font-semibold">
                                   Weblinks
                              </h3>

                              <div className="mt-2 flex flex-col gap-2">
                                   {webLinks.map((item, index) => (
                                        <Link
                                             key={index}
                                             to={item.path}
                                             className="text-white/75 text-[14px] md:text-[16px] hover:text-white transition-all duration-300 w-fit"
                                        >
                                             {item.name}
                                        </Link>
                                   ))}
                              </div>
                         </div>

                         {/* SERVICES */}
                         <div>
                              <h3 className="text-[20px] md:text-[28px] font-semibold">
                                   Services
                              </h3>

                              <div className="mt-2 flex flex-col gap-2">
                                   {displayServices.map((item, index) => (
                                        <Link
                                             key={index}
                                             to={item.path}
                                             className={`${item.isActive
                                                  ? "text-white/75 hover:text-white"
                                                  : "text-white/35 pointer-events-none"
                                                  } text-[14px] md:text-[16px] transition-all duration-300 w-fit`}
                                        >
                                             {item.name}
                                        </Link>
                                   ))}
                              </div>
                         </div>

                         {/* LOCATIONS */}
                         <div>
                              <h3 className="text-[20px] md:text-[28px] font-semibold">
                                   Locations
                              </h3>

                              <div className="mt-2 flex flex-col gap-2">
                                   {displayLocations.map((item, index) => (
                                        <Link
                                             key={index}
                                             to={item.path}
                                             className={`${item.isActive
                                                  ? "text-white/75 hover:text-white"
                                                  : "text-white/35 pointer-events-none"
                                                  } text-[14px] md:text-[16px] transition-all duration-300 w-fit`}
                                        >
                                             {item.name}
                                        </Link>
                                   ))}
                              </div>
                         </div>

                    </div>

                    {/* DIVIDER */}
                    <div className="w-full h-px bg-white/10 mt-16" />

                    {/* TRENDING */}
                    {/* <div className="pt-10">

                         <h3 className="text-[20px] md:text-[24px] font-semibold">
                              Trending Master Programs
                         </h3>

                         <div className="flex flex-wrap gap-y-4 mt-6">

                              {trendingCourses.map((item, index) => (
                                   <div
                                        key={index}
                                        className="flex items-center"
                                   >
                                        <a
                                             href="#"
                                             className="text-white/65 text-[14px] md:text-[15px] hover:text-white transition-all duration-300"
                                        >
                                             {item}
                                        </a>

                                        {index !== trendingCourses.length - 1 && (
                                             <span className="mx-4 text-white/20">
                                                  |
                                             </span>
                                        )}
                                   </div>
                              ))}

                         </div>

                    </div> */}

                    {/* Locations */}
                    {locationGroups?.length > 0 &&
                         locationGroups.map((location) => (
                              location.items?.length > 0 && (
                                   <div key={location.slug || location._id || location.title} className="pt-10">
                                        <h2 className="text-[20px] md:text-[24px] font-semibold">
                                             {location.title}
                                        </h2>

                                        <div className="flex flex-wrap gap-y-4 mt-6">
                                             {location.items.map((item, index) => (
                                                  <div key={item.slug || item._id || item.title} className="flex items-center gap-2">
                                                       <Link
                                                            to={hasPublishedPage(item) ? getItemPath(item) : "#"}
                                                            className={`${hasPublishedPage(item)
                                                                 ? "text-white/70 hover:text-white cursor-pointer text-[14px] md:text-[15px] "
                                                                 : "text-white/30 pointer-events-none cursor-not-allowed text-[14px] md:text-[15px] "
                                                                 }`}
                                                       >
                                                            {item.title}
                                                       </Link>

                                                       {index !== location.items.length - 1 && <span>|</span>}
                                                  </div>
                                             ))}
                                        </div>
                                   </div>
                              )
                         ))}
                    {/* POPULAR */}
                    {/* <div className="pt-14">

                         <h3 className="text-[20px] md:text-[24px] font-semibold">
                              Popular Courses
                         </h3>

                         <div className="flex flex-wrap gap-y-4 mt-6">

                              {popularCourses.map((item, index) => (
                                   <div
                                        key={index}
                                        className="flex items-center"
                                   >
                                        <a
                                             href="#"
                                             className="text-white/65 text-[14px] md:text-[15px] hover:text-white transition-all duration-300"
                                        >
                                             {item}
                                        </a>

                                        {index !== popularCourses.length - 1 && (
                                             <span className="mx-4 text-white/20">
                                                  |
                                             </span>
                                        )}
                                   </div>
                              ))}

                         </div>

                    </div> */}

                    {/* BOTTOM */}
                    <div className="w-full h-px bg-white/10 mt-14" />

                    <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                         <div className="flex items-center flex-wrap gap-5 md:gap-8">

                              <Link
                                   to="/policy"
                                   className="text-white/60 text-[13px] uppercase tracking-wide hover:text-white transition-all duration-300"
                              >
                                   Privacy Policy
                              </Link>

                              <span className="text-white/20 hidden md:block">
                                   |
                              </span>

                              <Link
                                   to="/terms"
                                   className="text-white/60 text-[13px] uppercase tracking-wide hover:text-white transition-all duration-300"
                              >
                                   Terms & Condition
                              </Link>

                         </div>

                         <p className="text-white/60 text-[13px] uppercase tracking-wide">
                              &copy;2026, PYUSH ANAND. ALL RIGHTS RESERVED
                         </p>

                    </div>

               </div>
          </footer>
     );
}
