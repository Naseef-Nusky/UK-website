import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';

// Components
import Header from './components/Header.jsx';
import ServicesGrid from './components/ServicesGrid.jsx';
import ContactFormSection from './components/ContactBottom.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/Home.jsx';

import Services from './pages/Service.jsx';
import Personal from './pages/services/Personal.jsx';
import Missing from './pages/services/Missing.jsx';
import Covert from './pages/services/Covert.jsx';
import Fraud from './pages/services/Fraud.jsx';
import Background from './pages/services/Background.jsx';
import AboutUs from './pages/AboutUs.jsx';
import CotactUs from './pages/ContactUs.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import BlogPage from './pages/Blog.jsx';
import SingleBlogPost from './pages/SingleBlogPost.jsx';

import React, { useEffect } from 'react';
// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // smooth scroll to top
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
       <ScrollToTop /> 
      <div className="min-h-screen bg-gray-50">
        <Header />

        <Routes>
          {/* Main homepage route */}
          <Route
            path="/"
            element={
              <main>
                <HomePage />
                <ServicesGrid latestOnly={true} />
                <ContactFormSection />
              </main>
            }
          />

          {/* Services general page */}
          <Route path="/services" element={<Services />} />

          {/* Single service pages */}
          <Route path="/services/personal" element={<Personal />} />
          <Route path="/services/missing" element={<Missing />} />
          <Route path="/services/covert" element={<Covert />} />
          <Route path="/services/fraud" element={<Fraud />} />
          <Route path="/services/background" element={<Background />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<CotactUs />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          
          {/* Blog routes */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<SingleBlogPost />} />
        </Routes>
         <Footer />
      </div>
    </Router>
   
  );
}

export default App;
