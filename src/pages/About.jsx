import React, { lazy, Suspense, useEffect } from 'react'
import Hero from '../components/About/Hero'
import Breadcrumb from '../components/BreadCrumb'

// Lazy Loaded Components
const Philosophy = lazy(() => import('../components/About/Philosophy'))
const Values = lazy(() => import('../components/About/Values'))
const Team = lazy(() => import('../components/About/Team'))

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Breadcrumb />
      <Hero />

      <Suspense fallback={null}>
        <Philosophy />
      </Suspense>

      <Suspense fallback={null}>
        <Values />
      </Suspense>

      <Suspense fallback={null}>
        <Team />
      </Suspense>
    </div>
  )
}

export default About