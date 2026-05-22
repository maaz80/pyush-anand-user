import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { usePageSEO } from './hooks/usePageSEO'
import { getLocations } from './utils/locations'
import { getServices } from './utils/service'

const Home = lazy(() => import('./pages/Home'))
const Blogs = lazy(() => import('./pages/Blogs'))
const BlogDetails = lazy(() => import('./pages/BlogDetails'))
const Services = lazy(() => import('./pages/Service'))
const Work = lazy(() => import('./pages/Work'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Policy = lazy(() => import('./pages/Policy'))
const Terms = lazy(() => import('./pages/Terms'))
const NotFound = lazy(() => import('./pages/404NotFound'))
const ItemPage = lazy(() => import('./pages/ItemPage'))

const normalizeGroups = (data, key) => {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.data)) return data.data;
  if (Array.isArray(data?.[key])) return data[key];
  return [];
};

const App = () => {
  const [locations, setLocations] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchFooterData = async () => {
      const [locationData, serviceData] = await Promise.all([
        getLocations(),
        getServices(),
      ]);
      setLocations(normalizeGroups(locationData, "locations"));
      setServices(normalizeGroups(serviceData, "services"));
    };
    fetchFooterData();
  }, []);

  usePageSEO()

  return (
    <div>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/:itemSlug" element={<ItemPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer locationGroups={locations} serviceGroups={services} />
    </div>
  )
}

export default App