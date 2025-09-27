import React from "react";
import { Search, Users, Shield, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// ServiceCard Component
const ServiceCard = ({ image, title, icon: Icon, description, link }) => (
  <div className="relative group overflow-hidden rounded-2xl shadow-lg flex flex-col h-[425px]">
    {/* Image */}
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />

    {/* Bottom overlay */}
    <div className="absolute bottom-0 w-full p-6 bg-black/50 backdrop-blur-md flex flex-col justify-between h-[250px]">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <Icon className="w-6 h-6 text-[#00b9ed]" />
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-200 text-sm leading-6 line-clamp-3">{description}</p>
      </div>

      {/* Read More Button */}
      {link && (
        <div className="flex justify-end mt-2">
          <Link
            to={link}
            className="flex items-center gap-2 px-3 py-1 bg-white text-[#0047b2] font-semibold rounded text-sm hover:bg-gray-100 transition-colors"
          >
            Read More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  </div>
);

// Services Data
const servicesData = [
  {
    id: 1,
    image:
      "/covert.jpg",
    title: "Covert Surveillance",
    icon: Search,
    description:
      "Our highly skilled private detectives conduct discreet surveillance operations to collect photo and video evidence. Whether for personal, corporate, or legal matters, we ensure complete professionalism and confidentiality throughout your case.",
    link: "/services/covert",
  },
  {
    id: 2,
    image:
      "/missing.jpg",
    title: "Missing Person Investigation",
    icon: Users,
    description:
      "Every 90 seconds, someone is reported missing in the UK. Our detectives use advanced digital and forensic techniques to trace missing persons locally and internationally, offering peace of mind to families and clients worldwide.",
    link: "/services/missing",
  },
  {
    id: 3,
    image:
      "/fraud.jpg",
    title: "Fraud Investigation",
    icon: Shield,
    description:
      "Fraud is on the rise, costing victims billions annually. Our investigation team specializes in uncovering fraudulent activities, from financial scams to corporate fraud, with cutting-edge forensic analysis and deep industry expertise.",
    link: "/services/fraud",
  },
  {
    id: 4,
    image:
      "/personal.jpg",
    title: "Personal Investigations",
    icon: Briefcase,
    description:
      "From background checks and infidelity investigations to online dating inquiries, our detectives handle sensitive cases with care and discretion, providing you with the truth you deserve.",
    link: "/services/personal",
  },
    {
    id: 5,
    image: "/background.jpg",
    title: "Background Checking Services",
    icon: Briefcase,
    description:
      "From criminal, employment, and financial checks to personal verification, our team provides accurate and confidential background checking services.",
    link: "/services/background",
  },
];

// ServicesGrid Component
const ServicesGrid = ({ latestOnly = false }) => {
  // Slice last 3 if latestOnly is true
  const servicesToShow = latestOnly ? servicesData.slice(-3) : servicesData;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#0047b2] mb-8">
            Our Professional Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Confidential, professional, and tailored investigation services delivering clear, reliable results.
          </p>
        </div>

        {/* Grid */}
<div className="flex flex-wrap justify-center gap-10">
  {servicesToShow.map((service) => (
    <div className="flex-shrink-0 w-[360px]"> {/* fixed width per card */}
      <ServiceCard key={service.id} {...service} />
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default ServicesGrid;
