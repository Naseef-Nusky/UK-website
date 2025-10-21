// src/pages/ContactPage.jsx
import React from "react";
import ContactFormSection from "../components/ContactBottom";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 py-24">
      {/* Page Header */}
      <section>
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#0047b2] mb-8">
              Contact Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
               Get in touch with Henderson Thomas Investigations.  
            Our team is ready to provide you with discreet, professional,  
            and reliable assistance — tailored to your case.
          </p>
        </div>

      </section>


      <ContactFormSection />

     
<section className="py-10 bg-gray-50">
  <div className="container mx-auto px-6 grid md:grid-cols-2 gap-6 text-center">
    
    <div>
      <h3 className="text-xl font-semibold text-[#0047b2]">Call Us</h3>
    <p className="text-gray-700 mt-2">
  <a 
    href="tel:07826416466" 
    className="text-gray-700 hover:underline"
  >
    07826 416466
  </a>
</p>

    </div>

    <div>
      <h3 className="text-xl font-semibold text-[#0047b2]">Email Us</h3>
      <p className="text-gray-700 mt-2">
  <a 
    href="mailto:hendersonthomasinvestigations@outlook.com" 
    className="text-gray-700 hover:underline"
  >
    hendersonthomasinvestigations@outlook.com
  </a>
</p>
    </div>
    {/* <div>
      <h3 className="text-xl font-semibold text-[#0047b2]">Visit Us</h3>
      <p className="text-gray-700 mt-2">
        1st Floor, 239 Kensington High St,<br />
        London, W8 6SN
      </p>
    </div> */}

  </div>
</section>


    </div>
  );
};

export default ContactPage;
