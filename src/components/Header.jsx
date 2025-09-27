import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [servicesOpen, setServicesOpen] = useState(false); // desktop dropdown
  const closeTimerRef = useRef(null);

  // Open immediately (clear any close timer)
  const openServices = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setServicesOpen(true);
  };

  // Close after a short delay (prevents flicker)
  const closeServicesWithDelay = (delay = 150) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setServicesOpen(false);
      closeTimerRef.current = null;
    }, delay);
  };

  // Close on Escape key for accessibility
  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    if (servicesOpen) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [servicesOpen]);

  // cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Henderson Thomas Investigations"
            className="h-10 md:h-12 w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 text-sm font-medium items-center">
          <a href="/" className="text-gray-700 hover:text-[#0047b2] transition-colors font-semibold">
            HOME
          </a>

          {/* Services wrapper: handles hover + focus + keyboard */}
          <div
            className="relative lg:group"
            onMouseEnter={openServices}
            onMouseLeave={() => closeServicesWithDelay(150)}
            // onFocus/onBlur help keyboard users — blur will start the same delayed close
            onFocus={openServices}
            onBlur={() => closeServicesWithDelay(150)}
          >
            <Link
              to="/services"
              className="flex items-center text-gray-700 hover:text-[#0047b2] transition-colors font-semibold"
            >
              OUR SERVICES <ChevronDown size={16} className="ml-1" />
            </Link>
                        

            {/* Dropdown: visible if state true OR CSS group-hover (fallback) */}
            <div
              id="services-menu"
              role="menu"
              className={`absolute left-0 top-full mt-1 w-64 bg-white border border-gray-200 shadow-lg rounded-md z-50
                ${servicesOpen ? "block" : "hidden"} lg:group-hover:block`}
              onMouseEnter={openServices}
              onMouseLeave={() => closeServicesWithDelay(150)}
            >
    <Link to="/services/personal" className="block px-4 py-2 hover:bg-gray-100">
      Personal Investigation
    </Link>
    <Link to="/services/missing" className="block px-4 py-2 hover:bg-gray-100">
      Missing Persons
    </Link>
    <Link to="/services/covert" className="block px-4 py-2 hover:bg-gray-100">
      Covert Investigations
    </Link>
    <Link to="/services/fraud" className="block px-4 py-2 hover:bg-gray-100">
      Fraud Investigation
    </Link>
    <Link to="/services/background" className="block px-4 py-2 hover:bg-gray-100">
      Background Checking
    </Link>
            </div>
          </div>

          <a href="/about-us" className="text-gray-700 hover:text-[#0047b2] transition-colors font-semibold">
            ABOUT
          </a>
          <a href="/contact-us" className="text-gray-700 hover:text-[#0047b2] transition-colors font-semibold">
            CONTACT
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-gray-700" onClick={() => setIsOpen((s) => !s)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
<div className="lg:hidden bg-white border-t border-gray-200">
  <nav className="flex flex-col space-y-2 py-4 text-sm font-medium px-6">
    {/* Home */}
    <a
      href="/"
      className="block text-gray-700 hover:text-[#0047b2]"
      onClick={() => setIsOpen(false)}
    >
      HOME
    </a>

    {/* Services Dropdown */}
    <details>
      <summary className="cursor-pointer text-gray-700 hover:text-[#0047b2] font-semibold">
        OUR SERVICES
      </summary>
      <div className="flex flex-col mt-2 ml-4 space-y-2 pb-2">
        <a href="/services" onClick={() => setIsOpen(false)}>
          All Services
        </a>
        <a href="/services/personal" onClick={() => setIsOpen(false)}>
          Personal Investigation
        </a>
        <a href="/services/missing" onClick={() => setIsOpen(false)}>
          Missing Persons
        </a>
        <a href="/services/covert" onClick={() => setIsOpen(false)}>
          Covert Investigations
        </a>
        <a href="/services/fraud" onClick={() => setIsOpen(false)}>
          Fraud Investigation
        </a>
        <a href="/services/background" onClick={() => setIsOpen(false)}>
          Background Checking
        </a>
      </div>
    </details>

    {/* About */}
    <a
      href="/about-us"
      className="block text-gray-700 hover:text-[#0047b2]"
      onClick={() => setIsOpen(false)}
    >
      ABOUT
    </a>

    {/* Contact */}
    <a
      href="/contact-us"
      className="block text-gray-700 hover:text-[#0047b2]"
      onClick={() => setIsOpen(false)}
    >
      CONTACT
    </a>
  </nav>
</div>

      )}
    </header>
  );
};

export default Header;
