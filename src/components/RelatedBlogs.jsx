import { useState, useEffect } from "react";
import Template from '../assets/blog-template.webp';
import { useNavigate } from "react-router-dom";
import { getBlogs } from "../utils/blogService";
import { optimizeCloudinaryUrl } from "../utils/imageService";

const allBlogs = Array.from({ length: 2 }, (_, index) => ({
     id: index + 1,
     title: `5 Mistakes Startups Make In Branding ${index + 1}`,
     image: Template,
}));

const RelatedBlogs = () => {
     const navigate = useNavigate()
     const [blogs, setBlogs] = useState([])
     useEffect(() => {

          const fetchBlogs = async () => {

               const data = await getBlogs();
               setBlogs(data.slice(0, 2));

          };

          fetchBlogs();

     }, []);

     const optimizeImage = (url, width = 500) => {
          return optimizeCloudinaryUrl(url, width, { crop: "fill", quality: "auto" });
     };

     return (
          <section className="relative overflow-hidden py-20">

               <div className="relative z-10">

                    {/* HEADING */}
                    <div className="max-w-85 md:max-w-150 xl:max-w-340 mx-auto flex-col items-start text-left">

                         <h2 className="playfair text-[44px] sm:text-[52px] md:text-[72px] leading-12 md:leading-16 xl:leading-21 tracking-[-2px] font-bold bg-clip-text text-transparent bg-linear-to-r from-light-blue to-dark-blue">
                              Related Blogs
                         </h2>

                    </div>

                    {/* BLOGS */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 max-w-85 md:max-w-150 xl:max-w-340 mx-auto mt-10 gap-6'>

                         {(blogs.length > 0 ? blogs : allBlogs).map((blog, index) => (

                              <div
                                   key={index}
                                   onClick={() => {
                                        navigate(`/blog/${blog.slug}`)
                                        window.scrollTo({
                                             top: 0,
                                             behavior: "smooth"
                                        });
                                   }}
                                   className='w-full min-h-65 md:min-h-80 xl:min-h-121.5 rounded-2xl overflow-hidden group cursor-pointer'
                              >

                                   <img
                                        src={blog?.image ? optimizeImage(blog?.image, 500) : Template}
                                        alt={blog?.alt || 'Blog Image'}
                                        width="500"
                                        height="220"
                                        loading={index === 0 ? "eager" : "lazy"}        //   pehli eager
                                        fetchPriority={index === 0 ? "high" : "low"}    //   pehli high
                                        decoding={index === 0 ? "sync" : "async"}
                                        srcSet={`
                                        ${optimizeImage(blog?.image, 300)} 480w,
                                        ${optimizeImage(blog?.image, 500)} 768w,
                                        ${optimizeImage(blog?.image, 800)} 1200w
                                        `}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                                        className="w-full h-50 md:h-93.5 object-fill group-hover:scale-102 transition-transform duration-300 ease-in-out"
                                   />

                                   <div className="bg-white min-h-18 md:min-h-26 rounded-b-2xl shadow-sm p-4 flex items-center">

                                        <h2 className="text-[20px] md:text-[24px] xl:text-[32px] leading-7 md:leading-9 xl:leading-10 text-dark-blue line-clamp-2">
                                             {blog?.title || '5 Mistakes Startups Make In Branding'}
                                        </h2>

                                   </div>

                              </div>

                         ))}

                    </div>

               </div>

          </section>
     )
}

export default RelatedBlogs;