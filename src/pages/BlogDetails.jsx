import { GoShareAndroid } from 'react-icons/go';
import CTABG from '../assets/cta-bg.webp';
import BlogImage from '../assets/blog-template.webp';

import {
     FaFacebookF,
     FaInstagram,
     FaYoutube,
} from "react-icons/fa";

import {
     HiOutlineArrowLeft,
     HiOutlineArrowUpRight,
} from "react-icons/hi2";
import Button from '../components/Button';
const RelatedBlogs = lazy(() => import('../components/RelatedBlogs'))
import Breadcrumb from '../components/BreadCrumb';
import { lazy, Suspense, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { getBlogBySlug } from '../utils/blogService';
import { optimizeCloudinaryUrl } from '../utils/imageService';
import '../CSS/Blog.css';

const BlogDetails = () => {

     const { slug } = useParams();
     const [blog, setBlog] = useState(null);


     useEffect(() => {
          const fetchBlog = async () => {
               const data = await getBlogBySlug(slug);
               setBlog(data);
          };

          fetchBlog();
     }, [slug]);

     const optimizeImage = (url, width) => {
          return optimizeCloudinaryUrl(url, width, { crop: "fill", quality: "auto" });
     };


     useEffect(() => {
          window.scrollTo(0, 0);
     }, [])
     return (
          <section className="relative overflow-hidden pb-34 plus-jakarta">

               <Breadcrumb />
               <div className="absolute inset-0 h-full w-full">
                    <img
                         src='/bg.webp'
                         alt="Gradient BG"
                         className="w-full h-full object-fill"
                    />

                    <div className="absolute inset-0 bg-white/70" />
               </div>

               <div className="relative z-10 pt-18 md:pt-21">

                    {/* TOP CONTENT */}
                    <div className="max-w-7xl mx-auto px-5 text-center flex flex-col items-center">

                         {/* TAG */}
                         <div className="border border-dark-blue rounded-full px-5 h-8 md:h-11 text-[14px] md:text-[16px] bg-light-blue/10 text-dark-blue flex items-center justify-center">
                              {blog?.category || 'Blog'}
                         </div>

                         {/* TITLE */}
                         <h1 className="mt-6 playfair text-[36px] sm:text-[48px] leading-10 md:leading-12 lg:leading-15 font-bold bg-clip-text text-transparent bg-dark-blue max-w-300">
                              {blog?.title || 'Say goodbye to dull skin: Top skin brightening treatments that actually deliver'}
                         </h1>

                         {/* META */}
                         <div className="mt-6 flex items-center gap-3 text-[#161616] text-[14px] md:text-[16px]">

                              <span>{blog?.date || '22nd July 2026'}</span>

                              <div className="w-px h-4 rounded-full bg-[#161616]" />

                              <span>{blog?.read || '3'} min read</span>

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

                    {/* CONTENT */}
                    <div className="max-w-362.5 mx-auto px-5 md:px-8 xl:px-14 mt-18">

                         <div className="grid grid-cols-1 lg:grid-cols-[290px_1fr] gap-8 xl:gap-12 items-start">

                              {/* LEFT SIDEBAR */}
                              <div className="sticky top-28 flex flex-col gap-6">

                                   {/* TABLE OF CONTENT */}
                                   <div className="bg-[#A2A7BE3D] rounded-3xl p-7">

                                        <h3 className="text-dark-blue font-bold text-[20px] uppercase">
                                             Table of Content
                                        </h3>

                                        <div className="mt-8 flex flex-col gap-5">

                                             {[
                                                  "Phase 1:",
                                                  "Phase 2:",
                                                  "Phase 3:",
                                                  "Phase 4:",
                                             ].map((item, index) => (

                                                  <button
                                                       key={index}
                                                       className="text-left text-dark-blue/80 text-[17px] hover:text-dark-blue transition-all duration-300"
                                                  >
                                                       {item}
                                                  </button>

                                             ))}

                                        </div>

                                   </div>

                                   {/* CTA CARD */}
                                   <div className="relative overflow-hidden rounded-3xl p-7 min-h-72.5 flex flex-col justify-between">
                                        {/* BG */}
                                        <img
                                             src={CTABG}
                                             alt="CTA BG"
                                             width={290}
                                             height={290}
                                             loading="lazy"
                                             decoding="async"
                                             className="absolute inset-0 w-full h-auto object-fill"
                                        />
                                        {/* BG EFFECT */}
                                        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.4),transparent_35%)]" />

                                        <div className="relative z-10">

                                             <h3 className="playfair text-[36px] leading-12 font-bold text-white">
                                                  Get Creative More Efficiently
                                             </h3>

                                             <p className="mt-5 text-white text-[16px] leading-6">
                                                  Learn more about our creative services
                                             </p>

                                        </div>

                                        {/* BUTTON */}
                                        <div className="flex items-center justify-center mt-5">
                                             <Button widthHeight="w-42.25 lg:w-[235px] h-12 lg:h-[56px]" text='Book A Call' />
                                        </div>

                                   </div>

                              </div>

                              {/* RIGHT CONTENT */}
                              <div>

                                   {/* FEATURE IMAGE */}
                                   <div className="overflow-hidden rounded-4xl">

                                        {/* <img
                                             src={BlogImage}
                                             alt="Blog Image"
                                             className="w-full h-65 md:h-105 xl:h-135 object-fill"
                                        /> */}
                                        <img
                                             fetchPriority="high"
                                             loading="eager"
                                             decoding="sync"
                                             src={optimizeImage(blog?.image, 1000)}
                                             srcSet={`
       ${optimizeImage(blog?.image, 320)} 320w,
       ${optimizeImage(blog?.image, 480)} 480w,
       ${optimizeImage(blog?.image, 768)} 768w,
       ${optimizeImage(blog?.image, 1024)} 1024w,
       ${optimizeImage(blog?.image, 1200)} 1200w
     `}
                                             sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1000px"
                                             alt={blog?.alt || blog?.title || 'Blog Feature'}
                                             width={1000}
                                             height={650}
                                             className="w-full h-65 md:h-105 xl:h-135 object-fill"
                                        />

                                   </div>

                                   {/* Content */}

                                   <div
                                        className="text-dark-blue leading-5 lg:leading-8 blog-content"
                                        dangerouslySetInnerHTML={{ __html: blog?.content }}
                                   />

                              </div>

                         </div>

                    </div>
                    <Suspense fallback={null}>
                         <RelatedBlogs />
                    </Suspense>
               </div>

          </section>
     )
}

export default BlogDetails