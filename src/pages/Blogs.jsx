import { useEffect, useMemo, useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

import Template from '../assets/blog-template.webp';

import Breadcrumb from "../components/BreadCrumb";

import { getBlogs } from "../utils/blogService";
import { useNavigate } from "react-router-dom";
import { optimizeCloudinaryUrl } from "../utils/imageService";

// STATIC FALLBACK DATA
const defaultBlogs = Array.from({ length: 30 }, (_, index) => ({
     id: index + 1,
     title: `5 Mistakes Startups Make In Branding ${index + 1}`,
     image: Template,
}));

const Blogs = () => {
     const navigate = useNavigate();
     // API BLOGS
     const [blogs, setBlogs] = useState(defaultBlogs);

     const [currentPage, setCurrentPage] = useState(1);

     const blogsPerPage = 4;

     // IMAGE OPTIMIZATION
     const optimizeImage = (url, width = 900) => {
          return optimizeCloudinaryUrl(url, width, { crop: "fill", quality: "auto" });
     };


     // FETCH BLOGS
     useEffect(() => {

          const fetchBlogs = async () => {

               try {

                    const data = await getBlogs();

                    // USE API DATA
                    // OTHERWISE STATIC FALLBACK
                    if (data?.length > 0) {
                         setBlogs(data);
                    } else {
                         setBlogs(defaultBlogs);
                    }

               } catch (error) {

                    console.log(error);

                    // FALLBACK
                    setBlogs(defaultBlogs);
               }
          };

          fetchBlogs();

     }, []);

     // TOTAL PAGES
     const totalPages = Math.ceil(
          blogs.length / blogsPerPage
     );

     // CURRENT BLOGS
     const currentBlogs = useMemo(() => {

          const start =
               (currentPage - 1) * blogsPerPage;

          const end = start + blogsPerPage;

          return blogs.slice(start, end);

     }, [currentPage, blogs]);

     // PAGINATION LOGIC
     const paginationItems = useMemo(() => {

          if (totalPages <= 6) {
               return Array.from(
                    { length: totalPages },
                    (_, i) => i + 1
               );
          }

          // START
          if (currentPage <= 4) {
               return [1, 2, 3, 4, 5, "...", totalPages];
          }

          // MIDDLE
          if (currentPage < totalPages - 2) {
               return [
                    currentPage - 2,
                    currentPage - 1,
                    currentPage,
                    currentPage + 1,
                    currentPage + 2,
                    "...",
                    totalPages,
               ];
          }

          // END
          return [
               totalPages - 4,
               totalPages - 3,
               totalPages - 2,
               totalPages - 1,
               totalPages,
          ];

     }, [currentPage, totalPages]);

     // TOP SCROLL
     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);

     return (
          <section className="relative overflow-hidden pb-60">

               <Breadcrumb />

               {/* BG */}
               <div className="absolute inset-0 h-full w-full">

                    <img
                         src='/bg.webp'
                         alt="Gradient BG"
                         className="w-full h-full object-fill"
                    />

                    <div className="absolute inset-0 bg-white/70" />

               </div>

               <div className="relative z-10 pt-20 md:pt-22">

                    {/* HEADING */}
                    <div className="mx-auto flex max-w-5xl flex-col items-center px-5 text-center">

                         <h2 className="playfair text-[44px] sm:text-[52px] md:text-[72px] leading-12 md:leading-16 xl:leading-21 tracking-[-2px] font-bold bg-clip-text text-transparent bg-linear-to-r from-light-blue to-dark-blue">
                              Ideas That Inspire.
                         </h2>

                         <div className="mt-5 border border-dark-blue rounded-full w-46.5 h-8 md:h-12 text-[15px] md:text-[18px] bg-light-blue/10 text-dark-blue flex items-center justify-center">
                              The Studio Journal
                         </div>

                         <p className="mt-7 text-[14px] md:text-[18px] leading-6 md:leading-8 text-dark-blue max-w-7xl plus-jakarta">
                              A look under the hood of our creative process.
                         </p>

                    </div>

                    {/* BLOGS */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-85 md:max-w-150 xl:max-w-340 mx-auto mt-10 gap-6">

                         {currentBlogs.map((blog, index) => (

                              <div
                                   key={blog._id || blog.id}
                                   onClick={() => navigate(`/blog/${blog.slug}`)}
                                   className="w-full min-h-65 md:min-h-80 xl:min-h-121.5 rounded-2xl overflow-hidden group bg-white cursor-pointer"
                              >

                                   {/* IMAGE */}
                                   <img
                                        src={
                                             blog?.image
                                                  ? optimizeImage(blog.image, 900)
                                                  : Template
                                        }
                                        alt={blog?.alt || blog?.title || 'Blog Image'}
                                        width="900"
                                        height="600"
                                        loading={index < 2 ? "eager" : "lazy"}
                                        fetchPriority={index < 2 ? "high" : "low"}
                                        decoding={index < 2 ? "sync" : "async"}
                                        srcSet={`
                                             ${blog?.image ? optimizeImage(blog.image, 400) : Template} 400w,
                                             ${blog?.image ? optimizeImage(blog.image, 700) : Template} 700w,
                                             ${blog?.image ? optimizeImage(blog.image, 900) : Template} 900w
                                        `}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                        className="w-full h-50 md:h-93.5 object-fill group-hover:scale-102 transition-transform duration-300 ease-in-out"
                                   />

                                   {/* TITLE */}
                                   <div className="bg-white min-h-18 md:min-h-26 rounded-b-2xl shadow-sm p-4 flex items-center">

                                        <h2 className="text-[20px] md:text-[24px] xl:text-[32px] leading-7 md:leading-9 xl:leading-10 text-dark-blue line-clamp-2">
                                             {blog?.title}
                                        </h2>

                                   </div>

                              </div>

                         ))}

                    </div>

                    {/* PAGINATION */}
                    <div className="flex items-center justify-center gap-2 md:gap-4 mt-5 md:mt-20 plus-jakarta">

                         {/* PREV */}
                         <button
                              onClick={() =>
                                   setCurrentPage((prev) =>
                                        Math.max(prev - 1, 1)
                                   )
                              }
                              aria-label="Previous Blogs"
                              className="w-11 h-11 md:w-14 md:h-14 rounded-full border border-[#D8D8D8] flex items-center justify-center text-[#7C86A5] hover:bg-dark-blue hover:text-white hover:border-dark-blue transition-all duration-300 cursor-pointer"
                         >
                              <HiOutlineChevronLeft className="w-5 h-5" />
                         </button>

                         {/* PAGE NUMBERS */}
                         <div className="flex items-center gap-1 md:gap-2">

                              {paginationItems.map((item, index) => {

                                   const isActive =
                                        currentPage === item;

                                   return (
                                        <button
                                             key={index}
                                             disabled={item === "..."}
                                             onClick={() => {

                                                  if (typeof item === "number") {

                                                       setCurrentPage(item);

                                                       window.scrollTo({
                                                            top: 0,
                                                            behavior: "smooth",
                                                       });
                                                  }
                                             }}
                                             className={`
                                                  min-w-10 h-10 md:min-w-12 md:h-12 px-2 rounded-full
                                                  flex items-center justify-center
                                                  text-[14px] md:text-[16px]
                                                  transition-all duration-300 cursor-pointer

                                                  ${item === "..."
                                                       ? "cursor-default text-[#7C86A5]"
                                                       : isActive
                                                            ? "bg-dark-blue text-white"
                                                            : "text-[#7C86A5] hover:bg-dark-blue hover:text-white"
                                                  }
                                             `}
                                        >
                                             {item}
                                        </button>
                                   );
                              })}

                         </div>

                         {/* NEXT */}
                         <button
                              onClick={() =>
                                   setCurrentPage((prev) =>
                                        Math.min(prev + 1, totalPages)
                                   )
                              }
                              aria-label="Next Blogs"
                              className="w-11 h-11 md:w-14 md:h-14 rounded-full border border-[#D8D8D8] flex items-center justify-center text-[#7C86A5] hover:bg-dark-blue hover:text-white hover:border-dark-blue transition-all duration-300 cursor-pointer"
                         >
                              <HiOutlineChevronRight className="w-5 h-5" />
                         </button>

                    </div>

               </div>

          </section>
     );
};

export default Blogs;