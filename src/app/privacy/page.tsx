import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Privacy Policy | L&T Electricals",
  description: "Privacy policy for L&T Electricals - how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#ffd33d] hover:text-[#ffd33d]/80 mb-8"
        >
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>

        <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-white/60">Last updated: April 2025</p>

        <div className="mt-10 space-y-8 text-white/80 leading-7">
          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              1. Introduction
            </h2>
            <p>
              L&T Electricals (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you use our services or visit our website.
            </p>
            <p>
              We believe in being <span className="text-[#ffd33d] font-semibold">honest</span> and transparent
              about how we handle your personal data, providing <span className="text-[#ffd33d] font-semibold">reliable</span> protection
              of your information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              2. Information We Collect
            </h2>
            <p>We may collect the following types of information:</p>
            <h3 className="font-semibold text-white mt-4">Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact details (phone number, email address)</li>
              <li>Property address where work is to be carried out</li>
              <li>Payment information for invoicing purposes</li>
              <li>Photographs or videos you provide of electrical issues</li>
              <li>Communication records (emails, messages, call notes)</li>
            </ul>
            <h3 className="font-semibold text-white mt-4">Technical Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address and browser type when visiting our website</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our website</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and deliver our electrical services</li>
              <li>Communicate with you about appointments and quotations</li>
              <li>Process payments and send invoices</li>
              <li>Respond to your enquiries and provide customer support</li>
              <li>Comply with legal obligations and maintain records</li>
              <li>Improve our services and website experience</li>
              <li>Send you relevant updates about our services (with your consent)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              4. Legal Basis for Processing
            </h2>
            <p>We process your personal data on the following legal bases:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contract:</strong> To fulfil our contractual obligations when providing services</li>
              <li><strong>Legal obligation:</strong> To comply with legal requirements (e.g., tax records, electrical certifications)</li>
              <li><strong>Legitimate interests:</strong> To operate our business effectively and improve our services</li>
              <li><strong>Consent:</strong> Where you have given explicit consent for specific purposes</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              5. Data Sharing
            </h2>
            <p>We do not sell your personal information. We may share your data with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Building Control or local authorities (for required notifications)</li>
              <li>Certification bodies (for electrical compliance certificates)</li>
              <li>Our accountant or bookkeeper (for financial records)</li>
              <li>Insurance providers (in the event of a claim)</li>
              <li>Legal advisors (if required for legal proceedings)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              6. Data Retention
            </h2>
            <p>
              We retain your personal information for as long as necessary to fulfil the purposes for which
              it was collected, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Customer records: 6 years after the last transaction (for tax purposes)</li>
              <li>Electrical certificates and reports: Indefinitely (as required by regulations)</li>
              <li>Enquiry data: 2 years if no work is carried out</li>
              <li>Website analytics: 26 months</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              7. Your Rights
            </h2>
            <p>Under UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Erasure:</strong> Request deletion of your data (where applicable)</li>
              <li><strong>Restriction:</strong> Request limitation of processing</li>
              <li><strong>Portability:</strong> Request transfer of your data</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Withdraw consent:</strong> Withdraw consent at any time where processing is based on consent</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the details below.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              8. Data Security
            </h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal data
              against unauthorised access, alteration, disclosure, or destruction. This includes secure
              storage of physical documents and password protection for digital records.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              9. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy
              practices of these external sites and encourage you to read their privacy policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page
              with an updated revision date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              11. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <ul className="space-y-2">
              <li>Phone: 07485 035381</li>
              <li>Email: l.telectricals2021@gmail.com</li>
              <li>Location: Darwen, Lancashire</li>
            </ul>
            <p className="mt-4">
              You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO)
              if you believe your data has been handled inappropriately. Visit{" "}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#ffd33d] hover:underline">
                ico.org.uk
              </a>{" "}
              for more information.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
