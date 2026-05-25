import React, { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import Button from './Button'
import Logo from '../assets/pyush-logo.webp'
import { useNavigate } from 'react-router-dom';

// jab user pehli baar Work/Services hover karega
const MegaMenu = lazy(() => import('./MegaMenu'))

const workLinks = ["Case Studies", "Brand Identity", "UI/UX Showcase", "Web Experiences", "Motion Projects", "Campaigns"]
const serviceLinks = ["UI UX Design", "Development", "Brand Strategy", "Motion Design", "SEO Optimization", "Product Design"]

const Navbar = () => {
     const [activeMenu, setActiveMenu] = useState(null)
     const navigate = useNavigate();

     const currentData = useMemo(() => {
          return activeMenu === 'work' ? workLinks : serviceLinks
     }, [activeMenu])

     useEffect(() => {
          document.body.style.overflow = activeMenu ? 'hidden' : 'auto'
          return () => { document.body.style.overflow = 'auto' }
     }, [activeMenu])

     return (
          <>
               <header className='fixed top-0 left-0 z-99999 w-full plus-jakarta'>

                    <div className='flex items-center justify-between bg-black/20 backdrop-blur-2xl py-2 px-4 md:px-18 xl:px-32 text-white plus-jakarta text-[12px] md:text-[14px] lg:text-[16px]'>

                         <div className='mr-0 md:mr-10 xl:mr-28 relative z-50'>
                              <img
                                   onClick={() => navigate('/')}
                                   src={Logo}
                                   alt="Pyush Logo"
                                   className='w-7 h-10 cursor-pointer'
                                   width={28}
                                   height={40}
                              />
                         </div>

                         <div className='flex items-center gap-3 md:gap-4 xl:gap-8 relative z-50'>
                              <div onMouseEnter={() => setActiveMenu('work')} className='cursor-pointer text-white/80 hover:text-white transition-all duration-300'>
                                   Work
                              </div>
                              <div onMouseEnter={() => setActiveMenu('services')} className='cursor-pointer text-white/80 hover:text-white transition-all duration-300'>
                                   Services
                              </div>
                         </div>

                         <div className='relative z-50'>
                              <Button widthHeight='w-32.25 lg:w-[201px] h-10 lg:h-[48px]' />
                         </div>
                    </div>

                    {/* ✅ MegaMenu sirf hover ke baad load hoga */}
                    <Suspense fallback={null}>
                         <MegaMenu
                              activeMenu={activeMenu}
                              currentData={currentData}
                              onClose={() => setActiveMenu(null)}
                         />
                    </Suspense>

               </header>
          </>
     )
}

export default Navbar