import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[60vh] flex items-center bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url('https://hendersonthomasinvestigations.co.uk/wp-content/uploads/2023/05/0d6dcfcf-3ee9-40ee-a127-8940497694fc-bg2.original.jpg')`,
      }}
    >
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Main Headline */}
          <h1 className="font-mont text-[1.8rem] md:text-[2.5rem] text-white md:mx-0 flex items-center justify-center text-center mb-4 max-w-5xl tracking-normal">
            Finding a Trustworthy Private Investigator Might Be More Affordable Than You Expect!
          </h1>

          {/* Supporting Text */}
          <p className="text-white text-lg mb-8 font-normal max-w-2xl">
            We offer a 100% free consultation – with no obligation. Simply complete the questions below or call our office today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-6 pt-10">
            {/* Phone button */}
            <div className="flex flex-col ">
              <a
                href="tel:07826416466"
                className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#00a4d6] transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.515l.7 2.8a2 2 0 01-.45 1.95l-1.27 1.27a16.001 16.001 0 006.586 6.586l1.27-1.27a2 2 0 011.95-.45l2.8.7A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z"
                  />
                </svg>
                07826 416466
              </a>

              {/* Agent Available Now */}
              <div className="flex items-center mt-2">
                <span className="relative flex h-3 w-3 mr-2">
                  {/* Blinking circle */}
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  {/* Solid dot */}
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-green-200 text-sm">Agent Available Now</span>
              </div>
            </div>

            {/* Free Quote button (keeps same size as phone button) */}
            <a
              href="#contact"
              className="flex items-center justify-center bg-white text-[#0047b2] border border-[#0047b2] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#e6f4ff] transition-colors self-start"
            >
              CALL US TODAY FOR A <span className="font-bold ml-1">FREE QUOTE</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
