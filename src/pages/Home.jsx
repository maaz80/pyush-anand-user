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

      <div className='relative min-h-[430vh] md:min-h-[300vh] pb-70'>
        <img src='/bg.webp' alt="Gradient BG" className="absolute w-full inset-0 min-h-[450vh] md:min-h-[380vh] object-fill" />

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-white/70 w-full min-h-[450vh] md:min-h-[380vh]" />

        <Suspense fallback={null}>
          <Journal />
        </Suspense>

        <Suspense fallback={null}>
          <Faq faqData={faqData} />
        </Suspense>
      </div>
    </div>
  )
}

export default Home