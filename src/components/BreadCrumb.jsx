import { Link, useLocation } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";

const Breadcrumb = () => {
     const location = useLocation();

     const pathnames = location.pathname.split("/").filter((x) => x);
     const isLocation = location.pathname.startsWith("/location") || location.pathname.startsWith("/service");
     return (
          <div className={`flex items-center gap-2 flex-nowrap overflow-hidden text-sm w-full left-0 z-999 bg-white/90 backdrop-blur-2xl h-6 md:h-8 px-3 md:px-5 lg:px-26 text-[10px] md:text-[12px] lg:text-[16px] plus-jakarta relative top-14 md:top-15 lg:top-16`}>
               {/* Home */}

               <Link to="/" className="flex items-center gap-1 hover:text-black text-gray-500">
                    <HiOutlineHome />
                    Home
               </Link>

               {pathnames.map((name, index) => {

                    const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
                    const isLast = index === pathnames.length - 1;

                    const label = name
                         .replace(/[-_]/g, " ")
                         .replace(/\b\w/g, (l) => l.toUpperCase());

                    return (
                         <div key={routeTo} className="flex items-center gap-1 md:gap-2">
                              <span>/</span>

                              {isLast ? (
                                   <span className="text-dark-black truncate max-w-30 md:max-w-100 lg:max-w-125">{label}</span>
                              ) : (
                                   <Link to={routeTo} className="hover:text-black truncate max-w-30 md:max-w-100 lg:max-w-125">
                                        {label}
                                   </Link>
                              )}

                         </div>
                    );
               })}

          </div>
     );
};

export default Breadcrumb;