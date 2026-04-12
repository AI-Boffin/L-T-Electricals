import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Cookie Policy | L&T Electricals",
  description: "Cookie policy for L&T Electricals - how we use cookies on our website.",
};

export default function CookiesPage() {
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
          Cookie Policy
        </h1>
        <p className="mt-4 text-white/60">Last updated: April 2025</p>

        <div className="mt-10 space-y-8 text-white/80 leading-7">
          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you
              visit a website. They are widely used to make websites work more efficiently and provide
              information to website owners.
            </p>
            <p>
              At L&T Electricals, we believe in being <span className="text-[#ffd33d] font-semibold">honest</span> about
              how we use cookies and giving you control over your preferences.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              2. How We Use Cookies
            </h2>
            <p>
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ensure our website functions properly</li>
              <li>Remember your preferences</li>
              <li>Understand how visitors use our website</li>
              <li>Improve our website and services</li>
              <li>Provide a secure browsing experience</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              3. Types of Cookies We Use
            </h2>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-3">
              <h3 className="font-semibold text-white">Essential Cookies</h3>
              <p className="text-sm">
                These cookies are necessary for the website to function properly. They enable basic
                functions like page navigation, secure areas, and form submissions. The website cannot
                function properly without these cookies.
              </p>
              <p className="text-xs text-white/50">Cannot be disabled</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-3">
              <h3 className="font-semibold text-white">Analytical Cookies</h3>
              <p className="text-sm">
                These cookies help us understand how visitors interact with our website by collecting
                and reporting information anonymously. This helps us improve the website experience.
              </p>
              <p className="text-xs text-white/50">Optional - can be disabled in browser settings</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-3">
              <h3 className="font-semibold text-white">Functional Cookies</h3>
              <p className="text-sm">
                These cookies allow the website to remember choices you make (such as your preferred
                region or contact preferences) and provide enhanced, more personalised features.
              </p>
              <p className="text-xs text-white/50">Optional - can be disabled in browser settings</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              4. Specific Cookies We Use
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 pr-4 text-left font-semibold text-white">Cookie Name</th>
                    <th className="py-3 pr-4 text-left font-semibold text-white">Purpose</th>
                    <th className="py-3 pr-4 text-left font-semibold text-white">Duration</th>
                    <th className="py-3 text-left font-semibold text-white">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-3 pr-4">_session</td>
                    <td className="py-3 pr-4">Maintains form session state</td>
                    <td className="py-3 pr-4">Session</td>
                    <td className="py-3">Essential</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">cookie_consent</td>
                    <td className="py-3 pr-4">Stores your cookie preferences</td>
                    <td className="py-3 pr-4">1 year</td>
                    <td className="py-3">Essential</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              5. Third-Party Cookies
            </h2>
            <p>
              We may use third-party services that set their own cookies. These include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Google Analytics:</strong> To understand website usage and improve our services.
                Google&apos;s privacy policy can be found at{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#ffd33d] hover:underline">
                  policies.google.com/privacy
                </a>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              6. Managing Cookies
            </h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>View what cookies are stored on your device</li>
              <li>Delete all or individual cookies</li>
              <li>Block all cookies or cookies from specific websites</li>
              <li>Set preferences for certain types of cookies</li>
            </ul>
            <p className="mt-4">
              To manage cookies in your browser:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
              </li>
              <li>
                <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data
              </li>
              <li>
                <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
              </li>
              <li>
                <strong>Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies
              </li>
            </ul>
            <p className="mt-4 p-4 rounded-xl border border-[#ffd33d]/30 bg-[#ffd33d]/10 text-white/90">
              <strong>Please note:</strong> Disabling certain cookies may affect the functionality of our
              website and your user experience.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology,
              legislation, or our data practices. Any changes will be posted on this page with an
              updated revision date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              8. Contact Us
            </h2>
            <p>
              If you have any questions about our use of cookies, please contact us:
            </p>
            <ul className="space-y-2">
              <li>Phone: 07485 035381</li>
              <li>Email: l.telectricals2021@gmail.com</li>
              <li>Location: Darwen, Lancashire</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              9. More Information
            </h2>
            <p>
              For more information about cookies and how to manage them, visit{" "}
              <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#ffd33d] hover:underline">
                www.allaboutcookies.org
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
