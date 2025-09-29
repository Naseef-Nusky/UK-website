import React from "react";
import { Link } from "react-router-dom";
const PrivacyPolicy = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
            <h2 className="text-4xl font-bold text-[#0047b2] mb-8 text-center">
               Privacy Policy
          </h2>

        {/* Intro */}
        <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
          Henderson Thomas Investigations is committed to ensuring that your
          privacy is protected. This policy explains how we use the information
          we collect about you, how you can instruct us if you prefer to limit
          the use of that information, and the procedures we have in place to
          safeguard your privacy.
        </p>

        {/* Section 1 */}
        <h2 className="text-lg font-semibold text-black mb-2">
          1. The Information We Collect and How We Use It
        </h2>
        <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
          If you submit an inquiry and respond to any of the requests for
          information in our feedback service, you may as a result submit to us
          your email address. Access to your personal data, including your email
          address, is only provided to our staff and third parties who help us
          to process your inquiry and trusted business partners, whose products
          and services may save you money.
        </p>

        {/* Cookies */}
        <h3 className="text-md font-semibold text-black mb-2">About Cookies</h3>
        <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
          We use cookies. A cookie is a small file that is stored on your
          computer’s hard drive by your web browser. They allow us to understand
          what areas of the website are of interest to our visitors and allow us
          to provide a better user experience. These cookies do not track
          individual user information, and all our cookie data is encrypted and
          cannot be read by other websites.
          <br />
          <br />
          It is possible to ‘turn off’ the cookies in your browser and this will
          not affect the functionality of the website. You can find out more
          information about cookies, including how to switch them on or off, at{" "}
<Link
  to="https://www.aboutcookies.org"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:underline"
>
  www.aboutcookies.org
</Link>
          .
        </p>

        {/* Section 2 */}
        <h2 className="text-lg font-semibold text-black mb-2">
          2. How We Protect Your Information
        </h2>
        <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
          The internet is not a secure medium. However, we have put in place
          various security procedures as set out in this policy. Firewalls are
          used to block unauthorised traffic to the servers, and the actual
          servers are located in a secure location which can only be accessed by
          authorised personnel. We also keep your information confidential. Our
          internal procedures cover the storage, access, and disclosure of your
          information.
        </p>

        {/* Section 3 */}
        <h2 className="text-lg font-semibold text-black mb-2">3. Your Consent</h2>
        <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
          By submitting any information about you and, where applicable, others
          within this website, you and they consent to its use as set out in
          this Privacy Policy. If we change our Privacy Policy, we will post the
          changes on this page and may place notices on other pages of the
          website so that you may be aware of the information we collect and how
          we use it at all times. Continued use of the service will signify that
          you agree to any such changes.
          <br />
          <br />
          The internet is a global medium and your information may therefore be
          transferred outside the European Economic Area en route. By submitting
          your information, you consent to any such transfer. We may pass your
          personal information to other companies for processing on our behalf.
          Some of these companies may be based outside Europe in countries which
          may not have laws to protect your personal information, but in all
          cases we will ensure that it is kept securely and only used for the
          purposes for which you provided it. If you do not want us to have
          personal information about you, please do not submit it to us.
        </p>

        {/* Section 4 */}
        <h2 className="text-lg font-semibold text-black mb-2">
          4. Passing on Information About You
        </h2>
        <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
          Please be aware that once you use our website or our services, you
          will be regarded as having given your consent to us disclosing your
          personal information to the following parties:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
          <li>Third parties who help us to process your inquiry.</li>
          <li>
            We may disclose information about you in connection with legal
            proceedings or potential legal proceedings, or if otherwise
            permitted to do so by law.
          </li>
          <li>
            Our trusted business partners, whose products and services may save
            you money.
          </li>
        </ul>
        <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
          You can ask us to stop passing your information to third parties for
          marketing purposes at any time, which we will do. Such a request may
          result in us ceasing to offer the services to you.
        </p>

        {/* Section 5 */}
        <h2 className="text-lg font-semibold text-black mb-2">
          5. How to Contact Henderson Thomas Investigations
        </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          We welcome your views about our website and our Privacy Policy. If you
          have any queries or comments, feel free to contact us.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
