import { lazy, Suspense, useEffect } from 'react';
import Breadcrumb from '../components/BreadCrumb';
import Hero from '../components/Services/Hero'

// Lazy Loaded Components
const Faq = lazy(() => import('../components/Faq'));
const Journal = lazy(() => import('../components/Journal'));
const WhatWeDo = lazy(() => import('../components/WhatWeDo'));
const Results = lazy(() => import('../components/Work/Results'));

const Work = () => {
     useEffect(() => {
          window.scrollTo(0, 0);
     }, [])

     return (
          <div className='pb-60 relative overflow-hidden '>
               <Breadcrumb />

               <div className="absolute inset-0 h-full w-full">
                    <img
                         src='/bg.webp'
                         alt="Gradient BG"
                         className="w-full h-full object-fill"
                    />

                    <div className="absolute inset-0 bg-white/70" />
               </div>

               <Hero />

               <Suspense fallback={null}>
                    <Results />
               </Suspense>

               <Suspense fallback={null}>
                    <WhatWeDo />
               </Suspense>

               <Suspense fallback={null}>
                    <Journal />
               </Suspense>

               <Suspense fallback={null}>
                    <Faq />
               </Suspense>
          </div>
     )
}

export default Work