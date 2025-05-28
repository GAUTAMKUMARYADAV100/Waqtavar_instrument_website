

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Products from './container/Product/Product_catalog/ProductCatalog';
import { SpeedInsights } from '@vercel/speed-insights/react'; // ✅ import

import {
  Testimonials,
  CaseStudies,
  Contact,
  Footer,
  Hero,
  Process,
  Services,
  About,
  CTA,
} from './container';

import { Menu } from './components';


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <Router>
      <div className="container px-3 mx-auto">
        <Menu />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div data-aos="fade-up">
                  <Hero />
                </div>

                <div data-aos="fade-up" data-aos-delay="100">
                  <Services />
                </div>

                <div data-aos="zoom-in-up" data-aos-delay="200">
                  <CTA />
                </div>

                <div data-aos="fade-up" data-aos-delay="300">
                  <Process />
                </div>

                <div data-aos="fade-up" data-aos-delay="400">
                  <About />
                </div>

                <div data-aos="zoom-in-up" data-aos-delay="500">
                  <Testimonials />
                </div>

                <div data-aos="fade-up" data-aos-delay="600">
                  <Contact />
                </div>
              </>
            }
          />

          {/* Individual pages */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/About" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>

        <Footer />
        {/* ✅ Add Speed Insights here */}
        <SpeedInsights />
      </div>
    </Router>
  );
};

export default App;
