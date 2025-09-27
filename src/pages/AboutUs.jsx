import React from "react";
// import { Link } from "react-router-dom";
import ContactFormSection from "../components/ContactBottom";
const AboutUs = () => {
  const image = "/background.jpg"; // Replace with your image path

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#0047b2] mb-8">
           About Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Henderson Thomas Investigations specialises in a wide range of investigative services, delivering clear, reliable results with professionalism and discretion.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12 pb-10">
          {/* Text Content */}
          
          <div className="md:w-1/2 text-center">
            <p className="text-gray-700 text-lg  leading-relaxed mb-4">
              Henderson Thomas Investigations specialises in a wide range of investigative services. Our dedicated team of skilled male and female investigators operates with professionalism and precision, ensuring your case is managed with the utmost care and discretion.
            </p>
            <p className="text-gray-700 text-lg  leading-relaxed mb-4">
              We focus on gathering robust and reliable evidence, enabling our clients to uncover the truth and make informed decisions with confidence. Whether your concern involves personal, corporate, or legal matters, our experts bring years of experience, advanced resources, and cutting-edge equipment to thoroughly investigate and resolve your case.
            </p>
            <p className="text-gray-800 text-lg font-semibold mb-6">
              Whatever the challenge, you can rely on Henderson Thomas Investigations for a comprehensive and effective solution.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={image}
              alt="About Henderson Thomas Investigations"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
      <ContactFormSection />
    </section>
       
  );
};

export default AboutUs;
