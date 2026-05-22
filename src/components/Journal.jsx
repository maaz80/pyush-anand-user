import { useEffect, useState } from 'react';
import Template from '../assets/blog-template.webp';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { getBlogs } from '../utils/blogService';
const Journal = () => {
     const navigate = useNavigate()

     const allBlogs = Array.from({ length: 4 }, (_, index) => ({
          id: index + 1,
          title: `5 Mistakes Startups Make In Branding ${index + 1}`,
          image: Template,
     }));

     const [blogs, setBlogs] = useState([])
     useEffect(() => {

          const fetchBlogs = async () => {

               const data = await getBlogs();
               setBlogs(data.slice(0, 4));

          };

          fetchBlogs();

     }, []);

     const optimizeImage = (url, width = 500) => {
          if (!url) return "";

          return url.replace(
               "/upload/",
               `/upload/w_${width},c_fill,q_auto:eco,f_auto/`
          );
     };

     const handleClick = () => {
          navigate('/blogs')
     }
     return (
          <section className="relative overflow-hidden py-20 md:py-16">
               <div className="relative z-10">

                    {/* Heading */}
                    <div className="mx-auto flex max-w-5xl flex-col items-center px-5 text-center">

                         <h2 className="playfair text-[44px] sm:text-[52px] md:text-[72px] leading-12 md:leading-16 xl:leading-21 tracking-[-2px] font-bold bg-clip-text text-transparent bg-linear-to-r from-light-blue to-dark-blue">
                              Ideas That Inspire.
                         </h2>

                         {/* Tag */}
                         <div className="mt-5 border border-dark-blue rounded-full w-46.5 h-8 md:h-12 text-[15px] md:text-[18px] bg-light-blue/10 text-dark-blue transition-all duration-300 plus-jakarta flex items-center justify-center">
                              The Studio Journal
                         </div>
                         {/* Description */}
                         <p className="mt-7 text-[14px] md:text-[18px] leading-6 md:leading-8 text-dark-blue max-w-7xl plus-jakarta">
                              A look under the hood of our creative process. From case study breakdowns to UI/UX tutorials, this is where we share the knowledge and techniques that drive our studio's success.
                         </p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 max-w-92 md:max-w-150 xl:max-w-340 mx-auto mt-10 space-y-6'>
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
                                   className='w-91.25 md:w-112.5 xl:w-152 min-h-65 md:min-h-80 xl:min-h-121.5 group overflow-hidden'>

                                   {/* <img src={Template} alt="Blog Template" width={608} height={374} className='w-full h-50 md:h-93.5 group-hover:scale-102 transition-transform duration-300 ease-in-out' /> */}
                                   <img
                                        src={blog?.image ? optimizeImage(blog?.image, 500) : blogImg}
                                        alt={blog?.alt}
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
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="w-full h-50 md:h-93.5 object-fill group-hover:scale-102 transition-transform duration-300 ease-in-out"
                                   />
                                   <div className="bg-white min-h-18 md:min-h-26 shadow-sm p-4 flex items-center">

                                        <h2 className="text-[20px] md:text-[24px] xl:text-[32px] leading-7 md:leading-9 xl:leading-10 text-dark-blue line-clamp-2">
                                             {blog?.title || '5 Mistakes Startups Make In Branding'}
                                        </h2>

                                   </div>
                              </div>
                         ))}
                    </div>

                    <div className="flex items-center justify-center mt-5">
                         <Button click={handleClick} widthHeight="w-42.25 lg:w-[235px] h-12 lg:h-[56px]" BG='bg-light-blue/5 hover:bg-transparent' border='border border-dark-blue' text='View More' />
                    </div>
               </div>
          </section>
     )
}

export default Journal