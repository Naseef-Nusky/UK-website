// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-white py-10">
//       <div className="container mx-auto px-4">
//         <div className="text-center">
//           {/* Company Logo */}
//           <div className="mb-8">
//             <img
//               src="/logo.png"
//               alt="Henderson Thomas Investigations"
//               className="mx-auto max-w-sm w-full h-auto"
//             />
//           </div>

//           {/* Company Name */}
//           <div className="mb-12">
//             <h3 className="text-lg font-normal text-black">
//               Henderson Thomas Investigations
//             </h3>
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-3 mb-12">
//             {/* Phone and Email */}
//             <div className="text-black text-[12px]">
//               <span>Phone: 07826 416466</span><br />
//               <span className="mx-2">Email:</span>
//               <a href="mailto:hendersonthomasinvestigations@outlook.com" className="text-black hover:text-blue-600">
//                 hendersonthomasinvestigations@outlook.com
//               </a>
//             </div>

//             {/* Address */}
//             <div className="text-black text-[12px]">
//               1st Floor, 238 Kensington High St, London W8 6SN
//             </div>
//           </div>

//           {/* Copyright */}
//           <div className="pt-2">
//             <p className="text-black text-[12px]">
//               © Copyright 2025 | All Rights Reserved
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Company Logo */}
          <div className="mb-8">
            <img
              src="/logo.png"
              alt="Henderson Thomas Investigations"
              className="mx-auto max-w-sm w-full h-auto"
            />
          </div>

          {/* Company Name */}
          <div className="mb-12">
            <h3 className="text-lg font-normal text-black">
              Henderson Thomas Investigations
            </h3>
          </div>

          {/* Contact Information */}
          <div className="space-y-3 mb-12">
            {/* Phone and Email */}
            <div className="text-black text-[12px]">
              <span>Phone: 07826 416466</span><br />
              <span className="mx-2">Email:</span>
              <a
                href="mailto:hendersonthomasinvestigations@outlook.com"
                className="text-black hover:text-blue-600"
              >
                hendersonthomasinvestigations@outlook.com
              </a>
            </div>

            {/* Address */}
            <div className="text-black text-[12px]">
              1st Floor, 238 Kensington High St, London W8 6SN
            </div>
          </div>

          {/* Copyright + Links */}
          <div className="pt-2">
            <p className="text-black text-[12px]">
              © Copyright 2025 | All Rights Reserved 
            </p>
          </div>
                    <div className="pt-2">
            <p className="text-black text-[12px]">
              <Link to="/contact-us" className="hover:text-blue-600">Contact</Link>
              <span className="mx-2">|</span>
              <Link to="/privacy-policy" className="hover:text-blue-600">Privacy Policy</Link>
              <span className="mx-2">|</span>
              <Link to="/terms-and-conditions" className="hover:text-blue-600">Terms & Conditions</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
