import React from "react";
import { Link } from "react-router-dom";
const TermsConditions = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
                    <h2 className="text-4xl font-bold text-[#0047b2] mb-8 text-center">
              Terms & Conditions
          </h2>

        {/* Section 1 */}
        <h2 className="text-lg font-semibold text-black mb-2">1. Liability</h2>
        <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
          We try to ensure the accuracy of all of the content. However, we do not
          accept any liability for the use made by you of the content. The
          content of this site should only be used for information purposes and
          you should not rely on it to make (or refrain from making) any decision
          or take (or refrain from taking) any action.
          <br />
          <br />
          The site is for your personal use and is not to be used for any
          commercial purpose. As a result, Henderson Thomas Investigations will
          not be responsible in any circumstances for your loss of profits.
          Henderson Thomas Investigations will also not be responsible for any
          loss including wasted expenditure, corruption or destruction of data
          unless the loss results from something Henderson Thomas Investigations
          has done wrong.
          <br />
          <br />
          Henderson Thomas Investigations is not liable for any damages or
          losses resulting from your inability to use this site. Henderson Thomas
          Investigations cannot promise that the site will be uninterrupted or
          entirely error free. Because of the nature of the internet, the site is
          provided on an “as available” basis. Henderson Thomas Investigations
          will not be responsible to you if we are unable to provide the site for
          any reason beyond our control.
        </p>

        {/* Section 2 */}
        <h2 className="text-lg font-semibold text-black mb-2">
          2. Data Protection and Privacy
        </h2>
        <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
          Any details which you provide to us from which we can identify you are
          held and processed in accordance with our{" "}
  <Link
  to="/privacy-policy"
  className="text-blue-600 hover:underline"
>
  Privacy Policy
</Link>
          .
        </p>

        {/* Section 3 */}
        <h2 className="text-lg font-semibold text-black mb-2">
          3. Changes to the Terms
        </h2>
        <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
          Henderson Thomas Investigations may change the site or these terms at
          any time. If you use the site after Henderson Thomas Investigations has
          changed the terms, you will be bound by the new terms.
        </p>

        {/* Section 4 */}
        <h2 className="text-lg font-semibold text-black mb-2">
          4. Governing Law and Jurisdiction
        </h2>
        <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
          These terms and your use of this site are governed by and construed in
          accordance with the laws of England and Wales, and any disputes will be
          decided only by the Courts of England and Wales.
        </p>

      </div>
    </div>
  );
};

export default TermsConditions;
