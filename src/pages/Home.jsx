import React from "react";
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage:
            "url('hero.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white  px-6">
          <h1 className="font-mont text-[1.8rem] md:text-[2.8rem] font-extrabold mb-6 leading-tight">
            Henderson Thomas Investigations
          </h1>
          <p className="text-lg md:text-2xl font-light mb-8">
            Specialist in private, corporate and legal investigations.
          </p>
<Link
  to="/about-us"
  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-lg transition-all duration-300"
>
  Read About Us
</Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0047b2] mb-12">
            Your Local Private Investigator
          </h2>

          {/* Intro Highlight */}
          <div className="bg-white shadow-lg rounded-2xl p-8 mb-12 text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Henderson Thomas Investigations specialises in both private and
              corporate investigations. Our team operates globally, providing
              expert support for cases across the UK. We are committed to
              delivering reliable and comprehensive investigative services
              tailored to your specific needs.
            </p>
          </div>

          {/* Key Points Grid */}
          <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg leading-relaxed">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#0047b2] mb-4">
                Clarity in Uncertainty
              </h3>
              <p>
                Life is full of unanswered questions and hidden truths. That’s
                where we step in — uncovering the facts and providing you with
                clarity when faced with uncertainty.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#0047b2] mb-4">
                Nationwide Expertise
              </h3>
              <p>
                Based in London, we support clients across the UK with
                professional and confidential investigation services delivered
                with integrity and discretion.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#0047b2] mb-4">
                Trusted Investigators
              </h3>
              <p>
                Our experienced team takes pride in delivering results, ensuring
                every case is handled with the utmost care and expertise.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#0047b2] mb-4">
                Tailored Solutions
              </h3>
              <p>
                From personal investigations to fraud detection and background
                checks, we provide customised solutions to meet your unique
                needs — in London, Surrey, and nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
