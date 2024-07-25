import { useState } from "react";

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  return (
    <footer className="w-full pt-4">
      <div className="flex justify-between">
        <p className="text-neutral-500">
          &copy; {new Date().getFullYear()} Pocket Somm. All rights reserved.
        </p>
        <button
          onClick={() => setShowPrivacyPolicy(!showPrivacyPolicy)}
          className="text-tertiary-500 underline"
        >
          Privacy Policy
        </button>
      </div>
      {showPrivacyPolicy && (
        <div className="space-y-4">
          <p className="pt-4 text-lg">
            We respect your privacy and are committed to protecting any
            information that you may provide while using our website.
          </p>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Data Collection:</h2>
            <ul className="list-disc pl-6">
              <li>
                We do not collect any personal information such as names,
                addresses, or contact details.
              </li>
              <li>
                We may collect non-personal information for analytics and
                advertising purposes.
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Cookies:</h2>
            <ul className="list-disc pl-6">
              <li>
                We may use cookies to enhance your browsing experience and for
                targeted advertising.
              </li>
              <li>
                Third parties may also place cookies on your browser for
                advertising purposes.
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Data Sharing:</h2>
            <ul className="list-disc pl-6">
              <li>
                We do not share any personal information with third parties.
              </li>
              <li>
                Non-personal information may be shared with analytics and
                advertising partners.
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Data Usage:</h2>
            <ul className="list-disc pl-6">
              <li>
                Information collected may be used for improving our services and
                for personalized advertising.
              </li>
              <li>
                We do not sell or rent any information collected from users.
              </li>
            </ul>
          </div>
          <p>
            By using our website, you agree to the terms of this Privacy Policy.
            If you have any questions or concerns, please contact us{" "}
            <a
              href="mailto:williamphelps13@gmail.com"
              className="text-tertiary-500 underline"
            >
              here
            </a>
            .
          </p>
        </div>
      )}
    </footer>
  );
};

export default Footer;
