import React, { useState } from 'react';
import { Phone } from 'lucide-react';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Please complete this required field.';
    if (!formData.email) newErrors.email = 'Please complete this required field.';
    if (!formData.phone) newErrors.phone = 'Please complete this required field.';
    if (!formData.message) newErrors.message = 'Please complete this required field.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log('Form submitted:', formData);
  };

  return (
    <section 
     id="contact"
      className="relative py-20 bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url('https://www.hendersonthomasinvestigations.com/wp-content/uploads/2024/10/dreamstime_l_158418933-scaled.jpg')`
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header Text */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-white mb-6 leading-tight font-bold">
              Call Us Today For A Free Confidential Discussion
            </h2>
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-white text-lg leading-relaxed mb-6">
                If you're in need of confidential advice from a trusted private investigator in London, look no further than Henderson Thomas Investigations. We offer a wide range of services tailored to your specific needs, both in London and across the UK. Delivered with professionalism, integrity, and discretion, we are here to uncover the truth, no matter how complex your situation may be.
              </p>
              <p className="text-cyan-300 text-lg font-medium">
                Don't wait—contact Henderson Thomas Investigations today and take the first step towards clarity and resolution. Let us help you find the answers you need!
              </p>
            </div>
            
            {/* Phone Number Section */}
            <div className="mb-8">
              <a href="tel:07956490572" className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 hover:bg-white/20 transition-all duration-300 group">
                <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center group-hover:bg-cyan-300 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-cyan-300 text-sm font-medium">Call Now</div>
                  <div className="text-white text-2xl font-bold tracking-wider">07956 490572</div>
                </div>
              </a>
            </div>

            <div className="text-center mb-8">
              <div className="inline-block bg-cyan-400/20 px-6 py-2 rounded-full border border-cyan-400/30">
                <span className="text-cyan-300 font-medium">OR</span>
              </div>
            </div>

            <p className="text-cyan-400 text-xl font-medium mb-2">
              Submit Your Details Below For A Free Quote
            </p>
            <p className="text-white/80 text-lg">
              Book your 100% discreet consultation
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 text-white bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 placeholder-white/60 text-lg transition-all duration-200"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <div className="text-red-400 text-left text-sm">{errors.name}</div>}
                
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 text-white bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 placeholder-white/60 text-lg transition-all duration-200"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <div className="text-red-400 text-left text-sm">{errors.email}</div>}
                
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 text-white bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 placeholder-white/60 text-lg transition-all duration-200"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                {errors.phone && <div className="text-red-400 text-left text-sm">{errors.phone}</div>}
                
                <textarea
                  name="message"
                  placeholder="Tell us about your case"
                  rows="4"
                  className="w-full px-4 py-3 text-white bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 placeholder-white/60 resize-none text-lg transition-all duration-200"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                {errors.message && <div className="text-red-400 text-left text-sm">{errors.message}</div>}
                
                <div className="w-full flex justify-center pt-4">
                  <button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Get Your Free Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;