import React from "react";
import ServicesGrid from '../../components/ServicesGrid.jsx';
import { Link } from "react-router-dom";
const BackgroundCheck = () => {
  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative w-full h-96 md:h-[500px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/background-single.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Background Checking Services
          </h1>
          <p className="text-lg md:text-2xl text-[#ffd700] font-semibold">
            Accurate & Confidential Background Verification
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 space-y-10">
        {/* Intro */}
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            In today’s world, background checks have become an essential tool
            for making informed decisions. Whether you’re screening potential
            employees, tenants, business partners, or even assessing personal
            relationships, having accurate and reliable information is crucial.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Henderson Thomas Investigations, we understand the importance of
            ensuring trust and safety. That’s why we offer professional
            background check services designed to give you peace of mind. We
            provide thorough, confidential investigations into criminal history,
            employment records, financial background, and more, so you can make
            decisions based on facts.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With our experienced team and access to advanced databases and
            resources, we ensure that the information we provide is
            comprehensive and accurate. Our goal is to equip you with the
            knowledge you need to protect yourself, your business, and your
            interests.
          </p>
        </div>

        {/* What Are Background Checking Services */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            What Are Background Checking Services?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Background-checking services are vital tools for gaining a thorough
            understanding of an individual’s history, character, and
            qualifications. Conducted with precision and care, these services
            aim to deliver accurate and reliable insights.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A standard background check may cover areas such as identity
            verification, criminal history, employment records, educational
            qualifications, credit reports, and other relevant details. These
            checks play a crucial role in numerous scenarios, including hiring
            new employees, selecting tenants, conducting due diligence for
            business deals, or evaluating trust in personal relationships.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Henderson Thomas Investigations, we specialise in providing
            meticulous background-checking services tailored to your needs. Our
            expert investigators ensure that every detail is verified, helping
            you make informed decisions with confidence and clarity.
          </p>
        </div>

        {/* Benefits */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Benefits of Background Checking Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Professional background-checking services offer invaluable
            advantages across various situations, acting as a key tool for
            managing risk and ensuring informed decision-making. By uncovering
            hidden details or potential concerns, these services help
            individuals and organisations avoid costly mistakes while enhancing
            safety and security.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Employers, for example, can use legally compliant background checks
            to screen for criminal records or histories of fraudulent behaviour,
            reducing the likelihood of workplace risks. Similarly, landlords can
            assess potential tenants to safeguard their property and ensure
            reliable agreements.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Research consistently shows that thorough background checks
            contribute to reducing risks, building trust, and fostering better
            outcomes in professional, personal, and business contexts. At
            Henderson Thomas Investigations, we deliver comprehensive, reliable
            background-checking services to support your needs with accuracy and
            professionalism.
          </p>
        </div>

        {/* Types of Background Checks */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Types of Background Checks
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Criminal Background Checks:</strong> Verify an
              individual’s criminal history, helping employers, landlords, or
              organisations assess potential risks.
            </li>
            <li>
              <strong>Employment Verification:</strong> Confirm previous job
              roles, durations, and references to ensure the accuracy of a
              candidate’s work history.
            </li>
            <li>
              <strong>Education Verification:</strong> Validate academic
              credentials and qualifications, ensuring claims align with actual
              achievements.
            </li>
            <li>
              <strong>Credit Checks:</strong> Provide insights into an
              individual’s financial reliability and creditworthiness.
            </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Why Choose Henderson Thomas Investigations?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At Henderson Thomas Investigations, we take great pride in our
            extensive experience and proven expertise in conducting
            comprehensive background checks. Our team is dedicated to
            maintaining the highest standards of professionalism, ethics, and
            confidentiality, ensuring our clients’ trust and peace of mind.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Using advanced technologies and state-of-the-art background-checking
            tools, we deliver accurate and reliable results tailored to your
            specific needs. Whether you’re a business owner evaluating potential
            hires, a landlord screening tenants, or an individual seeking
            clarity, Henderson Thomas Investigations is your dependable partner
            in the realm of background-checking services.
          </p>
        </div>

        {/* Our Process */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Our Process of Conducting Background Checks
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At Henderson Thomas Investigations, we approach background checks
            with precision and dedication, delivering tailored solutions that
            address your specific needs. Our process is built on a foundation of
            thoroughness and clarity, ensuring no detail is overlooked and
            potential risks are identified with confidence.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We start by gaining a deep understanding of your requirements,
            customising each investigation to align with your objectives. Our
            experienced team employs advanced techniques and innovative tools to
            uncover accurate and relevant information, from criminal history and
            employment verification to financial integrity and more.
          </p>
          <p className="text-gray-700 leading-relaxed">
            What sets us apart is our unwavering commitment to transparency and
            collaboration. We provide regular updates throughout the process,
            ensuring you’re informed at every stage. At Henderson Thomas
            Investigations, our goal is to empower you with reliable insights,
            helping you make decisions that inspire trust and security. With us,
            you’re not just getting a service; you’re gaining a partner
            committed to safeguarding your interests.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
    <Link
  to="/contact-us"
  className="inline-block px-6 py-3 bg-[#0047b2] text-white rounded-lg shadow-md hover:bg-[#003080] transition-colors font-semibold"
>
  Contact Us Today
</Link>
        </div>
      </div>
      <ServicesGrid latestOnly={true} />
    </section>
  
  );
};

export default BackgroundCheck;
