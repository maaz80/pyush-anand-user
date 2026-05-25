import { useEffect, useState } from "react";
import { getImages } from "../../utils/imageService.js";

const LogoMarquee = () => {

     const [logos, setLogos] = useState([]);
     const [titles, setTitles] = useState([]);

     useEffect(() => {

          const fetchImages = async () => {

               const data = await getImages();

               setLogos(data.map(item => item.image));
               setTitles(data.map(item => item.title));

          };

          fetchImages();

     }, []);

     return (
          <div className="w-full overflow-hidden py-6 z-[999] relative">

               <div className="marquee-left flex items-center gap-10 md:gap-20">

                    {/* first set */}
                    {logos.map((logo, index) => (
                         <img
                              key={index}
                              src={logo}
                              alt={titles[index] || `Company Logo ${index + 1}`}
                              width="252"
                              height="150"
                              loading="lazy"
                              decoding="async"
                              className="w-25 md:w-50 h-18 md:h-30 grayscale hover:grayscale-0 transition-all shrink-0 object-cover"
                         />
                    ))}

                    {/* duplicate */}
                    {logos.map((logo, index) => (
                         <img
                              key={`dup-${index}`}
                              src={logo}
                              alt={titles[index] || `Company Logo ${index + 1}`}
                              width="252"
                              height="150"
                              loading="lazy"
                              decoding="async"
                              className="w-25 md:w-50 h-18 md:h-30 grayscale hover:grayscale-0 transition-all shrink-0 object-cover"
                         />
                    ))}

               </div>

               <div className="marquee-right flex items-center gap-10 md:gap-20">

                    {/* first set */}
                    {logos.map((logo, index) => (
                         <img
                              key={`right-${index}`}
                              src={logo}
                              alt={titles[index] || `Company Logo ${index + 1}`}
                              width="252"
                              height="150"
                              loading="lazy"
                              decoding="async"
                              className="w-25 md:w-50 h-18 md:h-30 grayscale hover:grayscale-0 transition-all shrink-0 object-cover"
                         />
                    ))}

                    {/* duplicate */}
                    {logos.map((logo, index) => (
                         <img
                              key={`right-dup-${index}`}
                              src={logo}
                              alt={titles[index] || `Company Logo ${index + 1}`}
                              width="252"
                              height="150"
                              loading="lazy"
                              decoding="async"
                              className="w-25 md:w-50 h-18 md:h-30 grayscale hover:grayscale-0 transition-all shrink-0 object-cover"
                         />
                    ))}

               </div>

          </div>
     );
};

export default LogoMarquee;