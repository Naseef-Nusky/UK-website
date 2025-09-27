import React from "react";
import ServicesGrid from '../../components/ServicesGrid.jsx';
const FraudInvestigation = () => {
  return (
    <section className="bg-gray-50">
      {/* Hero Section with Background Image */}
      <div
        className="relative w-full h-96 md:h-[500px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/fraud-single.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Text */}
        <div className="relative z-10 px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Fraud Investigation Service
          </h1>
          <p className="text-lg md:text-2xl text-[#ffd700] font-semibold">
            Protecting You Against Deception & Financial Wrongdoing
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 space-y-10">
        {/* Intro */}
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Fraud investigation services are crucial in protecting both
            individuals and businesses from the risks of deception and financial
            wrongdoing. In today’s world, where fraud can cause significant
            harm, these services play an important role in detecting,
            preventing, and addressing fraudulent activities.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As fraud becomes more complex, having the right expertise is key to
            handling it effectively. At Henderson Thomas Investigations, our
            team of experienced fraud investigators is here to help. We use our
            skills and knowledge to uncover fraudulent activities, ensuring that
            we handle every case with care and accuracy. Let us assist you in
            safeguarding your assets and taking the right steps to fight fraud.
          </p>
        </div>

        {/* What is Fraud Investigation */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            What Is Fraud Investigation?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Fraud is a widespread problem that can severely impact businesses
            and individuals. It includes various dishonest activities aimed at
            gaining money through deceitful means, such as embezzlement, tax
            avoidance and evasion, identity theft, and cybercrimes. These
            fraudulent acts can result in significant financial losses and harm
            an organisation’s reputation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Fraud investigation services play a vital role in combating fraud.
            These services involve carefully reviewing digital records, witness
            statements, and other evidence to detect and prevent fraudulent
            activities. They help identify the risks and ensure that businesses
            and individuals are protected from financial harm.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Why Choose Henderson Thomas Investigations?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At Henderson Thomas Investigations, we bring years of experience and
            expertise to fraud and criminal investigations. Our team consists of
            certified professionals who have successfully handled cases across a
            wide range of industries. We utilise the latest technology and
            advanced tools to uncover fraudulent activities and protect our
            clients’ interests.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our team’s qualifications include certifications in fraud
            examination, criminal investigations, forensic accounting, and
            digital forensics. These credentials highlight our commitment to
            maintaining the highest industry standards. We continuously update
            our skills and knowledge to stay ahead of the rapidly changing
            landscape of fraud and ensure effective investigations.
          </p>
        </div>

        {/* Key Features */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Key Features Of Our Fraud Investigation Service
          </h2>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Data Analysis</h3>
            <p className="text-gray-700 leading-relaxed">
              Our experts use advanced data analysis methods to carefully
              examine financial records and transactions. By identifying
              patterns and anomalies, we can uncover hidden irregularities that
              may suggest fraudulent behaviour, helping to pinpoint risks and
              vulnerabilities within financial systems.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">
              Digital Forensics
            </h3>
            <p className="text-gray-700 leading-relaxed">
              As fraud increasingly takes place in the digital world, our team
              uses cutting-edge digital forensic techniques to examine
              electronic evidence, such as emails, social media communications,
              and digital transactions. This helps us trace the origins of
              fraudulent activities and gather critical evidence.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">
              Confidentiality & Legal Compliance
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We understand the sensitive nature of fraud investigations, which
              is why confidentiality is our top priority. Our team operates
              discreetly to protect our client’s sensitive information, ensuring
              that all processes comply with legal and ethical standards. This
              adherence to best practices guarantees that our investigations
              stand up to scrutiny in legal proceedings.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/contact-us"
            className="inline-block px-6 py-3 bg-[#0047b2] text-white rounded-lg shadow-md hover:bg-[#003080] transition-colors font-semibold"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    <ServicesGrid latestOnly={true} />
    </section>
  );
};

export default FraudInvestigation;
