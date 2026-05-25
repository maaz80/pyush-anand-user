import {
     FaFacebookF,
     FaInstagram,
     FaYoutube,
} from "react-icons/fa";
import { GoShareAndroid } from 'react-icons/go';
const RelatedBlogs = lazy(() => import('../components/RelatedBlogs'));
const Faq = lazy(() => import('../components/Faq'));
import Breadcrumb from '../components/BreadCrumb';
import { lazy, useEffect } from 'react';
import { getServices } from '../utils/service';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { matchesRouteSlug } from '../utils/slug';
import { optimizeCloudinaryUrl } from '../utils/imageService';
const Service = () => {
     const { itemSlug } = useParams();
     const [service, setService] = useState(null)
     useEffect(() => {

          const fetchSingleService = async () => {
               const allServices = await getServices();

               let selectedItem = null;

               for (const service of allServices) {
                    const found = service.items?.find(
                         (i) => matchesRouteSlug(i, itemSlug)
                    );

                    if (found) {
                         selectedItem = found;
                         break;
                    }
               }

               setService(selectedItem);
               console.log(selectedItem);

          };

          if (itemSlug) fetchSingleService();

     }, [itemSlug]);

     useEffect(() => {
          window.scrollTo(0, 0);
     }, [])
     return (
          <section className="relative overflow-hidden  pb-54 md:pb-60 plus-jakarta ">
               <Breadcrumb />
               <div className="absolute inset-0 h-full w-full">
                    <img
                         src='/bg.webp'
                         alt="Gradient BG"
                         className="w-full h-full object-fill"
                    />

                    <div className="absolute inset-0 bg-white/70" />
               </div>

               <div className="relative z-10 max-w-90 md:max-w-150 lg:max-w-330 mx-auto pt-18 md:pt-21">

                    {/* TOP CONTENT */}
                    <div className="max-w-7xl mx-auto px-5 text-center flex flex-col items-center">

                         {/* TAG */}
                         <div className="border border-dark-blue rounded-full px-5 h-8 md:h-11 text-[14px] md:text-[16px] bg-light-blue/10 text-dark-blue flex items-center justify-center">
                              Blog
                         </div>

                         {/* TITLE */}
                         <h1 className="mt-2 playfair text-[36px] sm:text-[48px] leading-10 md:leading-12 lg:leading-15 font-bold bg-clip-text text-transparent bg-dark-blue max-w-300">
                              {service?.title || 'Say goodbye to dull skin: Top skin brightening treatments that actually deliver'}
                         </h1>

                         {/* META */}
                         <div className="mt-6 flex items-center gap-3 text-[#161616] text-[14px] md:text-[16px]">

                              <span>{service?.date || '22nd July 2026'}</span>

                              <div className="w-px h-4 rounded-full bg-[#161616]" />

                              <span>3 min read</span>

                         </div>

                         {/* SOCIALS */}
                         <div className="mt-5 flex items-center gap-3">

                              <button className="w-9 h-9 rounded-full border border-dark-blue/20 flex items-center justify-center text-dark-blue hover:bg-dark-blue hover:text-white transition-all duration-300 cursor-pointer">
                                   <GoShareAndroid className="w-4 h-4" />
                              </button>

                              <button className="w-9 h-9 rounded-full bg-[#4267B2] flex items-center justify-center text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                                   <FaFacebookF className="w-4 h-4" />
                              </button>

                              <button className="w-9 h-9 rounded-full bg-linear-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                                   <FaInstagram className="w-4 h-4" />
                              </button>

                              <button className="w-9 h-9 rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                                   <FaYoutube className="w-4 h-4" />
                              </button>

                         </div>

                    </div>

                    {/* Blog Content */}
                    <div className="mt-16">

                         {/* Intro Section */}
                         <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-12 items-start">

                              <div>
                                   <h2 className="text-[#161616] text-[20px] md:text-[24px] font-medium mb-3">
                                        {service?.hero?.title || 'Title'}
                                   </h2>

                                   <div className="space-y-1 text-[#161616]/50 text-[14px] md:text-[16px] leading-6">
                                        <p>
                                             {service?.hero?.description || 'We value your privacy and are committed to protecting your personal information.'}
                                        </p>


                                   </div>
                              </div>

                              {/* Right Image */}
                              <div className="sticky top-10">
                                   {service?.image ? (
                                        <img
                                             src={optimizeCloudinaryUrl(service.image, 520, { crop: 'fill', height: 360 })}
                                             srcSet={`
                                                  ${optimizeCloudinaryUrl(service.image, 320, { crop: 'fill', height: 220 })} 320w,
                                                  ${optimizeCloudinaryUrl(service.image, 520, { crop: 'fill', height: 360 })} 520w,
                                                  ${optimizeCloudinaryUrl(service.image, 1040, { crop: 'fill', height: 720 })} 1040w
                                             `}
                                             sizes="(max-width: 768px) 100vw, 520px"
                                             width={520}
                                             height={360}
                                             loading="lazy"
                                             decoding="async"
                                             alt={`${service?.title || 'Service'} - Image`}
                                             className="w-full h-70 md:h-90 rounded-[28px] object-fill"
                                        />
                                   ) : (
                                        <div className="w-full h-70 md:h-90 rounded-[28px] bg-[#CFCFCF]" />
                                   )}
                              </div>
                         </div>
                         {/* Content */}

                         <div
                              className="text-dark-black/75 leading-5 lg:leading-8 blog-content text-start px-4 md:px-4"
                              dangerouslySetInnerHTML={{ __html: service?.content || "" }}
                         />
                    </div>

                    <Suspense fallback={null}>
                         <RelatedBlogs />
                    </Suspense>
                    <Suspense fallback={null}>
                         <Faq />
                    </Suspense>
               </div>


          </section>
     )
}

export default Service