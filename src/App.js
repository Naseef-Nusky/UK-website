import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import ThreeSteps from './components/ThreeSteps.jsx';
import ServicesGrid from './components/ServicesGrid.jsx';
import AccordionFAQ from './components/AccordionFAQ.jsx';
import TestimonialSlider from './components/TestimonialSlider.jsx';
import ContactFormSection from './components/ContactBottom.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/Home.jsx';

// Pages (single service pages)
// import Home from './pages/Home.jsx'; // optional, or same as main App content
import Services from './pages/Service.jsx';
import Personal from './pages/services/Personal.jsx';
import Missing from './pages/services/Missing.jsx';
import Covert from './pages/services/Covert.jsx';
import Fraud from './pages/services/Fraud.jsx';
import Background from './pages/services/Background.jsx';
import AboutUs from './pages/AboutUs.jsx';
import CotactUs from './pages/ContactUs.jsx';
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: send to API or email service
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />

        <Routes>
          {/* Main homepage route */}
          <Route
            path="/"
            element={
              <main>
                {/* <HeroSection
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                  backgroundImageUrl="https://hendersonthomasinvestigations.co.uk/wp-content/uploads/2023/05/0d6dcfcf-3ee9-40ee-a127-8940497694fc-bg2.original.jpg"
                />
                <WhyChooseUs />
                <ThreeSteps />
        

                <AccordionFAQ />
                <TestimonialSlider /> */}
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
        </Routes>
         <Footer />
      </div>
    </Router>
   
  );
}

export default App;
