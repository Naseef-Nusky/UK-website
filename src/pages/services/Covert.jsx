import React from "react";
import ServicesGrid from '../../components/ServicesGrid.jsx';
import { Link } from "react-router-dom";
const Covert = () => {
  return (
    <section className="bg-gray-50">
      {/* Hero Section with Background Image */}
      <div
        className="relative w-full h-96 md:h-[500px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/covert-single.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Text */}
        <div className="relative z-10 px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Covert Investigations & Surveillance
          </h1>
          <p className="text-lg md:text-2xl text-[#ffd700] font-semibold">
            Discreet Surveillance
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 space-y-10">
        {/* Intro */}
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Henderson Thomas Investigations stands as a trusted leader in the field of covert investigations, offering unmatched expertise and unwavering integrity. Our team of highly skilled professionals, known as “Covert Investigation Specialists,” is dedicated to uncovering hidden truths with discretion and precision. We recognise that sensitive matters demand a careful and professional approach, and that’s where our expertise shines.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Covert investigations are crucial across a variety of scenarios, from safeguarding corporate interests and supporting legal cases to addressing personal concerns and resolving criminal matters. The ability to operate discreetly is often the key to uncovering vital information, protecting assets, and maintaining reputations. Our tailored services empower clients to make well-informed decisions, reduce risks, and gain clarity in even the most complex situations.
          </p>
        </div>

        {/* What Are Covert Investigations */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What Are Covert Investigations?</h2>
          <p className="text-gray-700 leading-relaxed">
            Covert investigations are the art of discreetly gathering information, data, or evidence without the subject’s awareness. This approach enables us to observe, document, and analyse activities while maintaining complete confidentiality and avoiding alerting the target.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Henderson Thomas Investigations, we specialise in a wide range of covert investigation services, including the prevention of corporate espionage, infidelity investigations, and much more. Whether it’s a business protecting its sensitive information or an individual seeking clarity in a personal matter, our covert investigation skills serve as a vital resource in uncovering the truth with precision and professionalism.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Why Choose Henderson Thomas Investigations?</h2>
          <p className="text-gray-700 leading-relaxed">
            At Henderson Thomas Investigations, our team comprises seasoned professionals with extensive expertise and a dedication to achieving results. Our investigators undergo comprehensive training, hold relevant certifications, and remain connected to key industry networks to stay updated on the latest investigative strategies. With a strong history of solving complex cases and delivering impactful outcomes, we have earned a reputation for excellence in uncovering the truth.
          </p>
        </div>

        {/* Our Process */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Our Process</h2>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Initial Consultation</h3>
            <p className="text-gray-700 leading-relaxed">
              Our process begins with a detailed consultation, where we take the time to understand your unique needs, concerns, and goals. This initial step is crucial for customising our services to meet your specific requirements, ensuring a personalised and effective approach to your case.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">Investigation Phase</h3>
            <p className="text-gray-700 leading-relaxed">
              Our team promptly gets to work, utilising advanced technology, expert intelligence, and proven techniques to gather information with precision and discretion. We are relentless in our commitment to uncovering the truth, leaving no detail overlooked.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">Reporting and Documentation</h3>
            <p className="text-gray-700 leading-relaxed">
              We deliver comprehensive reports and documentation that detail our findings with precision. Our reporting process prioritises transparency, integrity, and accuracy, ensuring you have a clear and trustworthy account of the investigation’s outcomes.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">Client Communication</h3>
            <p className="text-gray-700 leading-relaxed">
              During the investigation, we prioritise clear and consistent communication with our clients. You’ll receive regular updates, ensuring you remain informed and involved at every stage of the process.
            </p>
          </div>
        </div>

        {/* Call to Action */}
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

export default Covert;
