import React, { lazy, Suspense, useEffect, useState } from 'react'
import HeroSection from '../components/Home/Hero'
import '../CSS/Home.css';

import useFaq from '../hooks/useFaq'
import { getHomeData } from '../utils/home'

// Lazy Loaded Components
const WhyChooseUs = lazy(() => import('../components/Home/WhyChooseUs'))
const Archive = lazy(() => import('../components/Home/Archive'))
const ConceptToConversation = lazy(() => import('../components/Home/ConceptToConversation'))
const WhatWeDo = lazy(() => import('../components/Home/WhatWeDo&Testimonials'))
const Journal = lazy(() => import('../components/Journal'))
const Faq = lazy(() => import('../components/Faq'))

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const { faqData } = useFaq();
  const [home, setHome] = useState(null)

  useEffect(() => {

    const fetchHomeData = async () => {

      const data = await getHomeData();
      setHome(data)

      console.log(data);

    };

    fetchHomeData();

  }, []);

  return (
    <div>
      <HeroSection data={home} />

      <Suspense fallback={null}>
        <WhyChooseUs data={home} />
      </Suspense>

      <Suspense fallback={null}>
        <Archive data={home} />
      </Suspense>

      <Suspense fallback={null}>
        <ConceptToConversation data={home} />
      </Suspense>

      <Suspense fallback={null}>
        <WhatWeDo data={home} />
      </Suspense>

      <div className='relative pb-70 home-hero'>
        {/* Background handled via CSS to avoid layout shifts */}
        <div className="absolute inset-0 home-bg" aria-hidden="true" />
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-white/70 w-full" />

        <div className="relative z-20">
          <Suspense fallback={null}>
            <Journal />
          </Suspense>

          <Suspense fallback={null}>
            <Faq faqData={faqData} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Home