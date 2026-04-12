import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Terms & Conditions | L&T Electricals",
  description: "Terms and conditions for L&T Electricals services.",
};

export default function TermsPage() {
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
          Terms & Conditions
        </h1>
        <p className="mt-4 text-white/60">Last updated: April 2025</p>

        <div className="mt-10 space-y-8 text-white/80 leading-7">
          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              1. Introduction
            </h2>
            <p>
              These terms and conditions govern your use of the services provided by L&T Electricals,
              operated by Liam Crooks. By engaging our services, you agree to be bound by these terms.
            </p>
            <p>
              L&T Electricals is committed to providing <span className="text-[#ffd33d] font-semibold">honest</span>,
              <span className="text-[#ffd33d] font-semibold"> reliable</span> and
              <span className="text-[#ffd33d] font-semibold"> efficient</span> electrical services
              to domestic, commercial, and industrial clients.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              2. Services
            </h2>
            <p>
              L&T Electricals provides a range of electrical services including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full and partial house rewires</li>
              <li>Fuse board upgrades and replacements</li>
              <li>Electrical fault finding and repairs</li>
              <li>Additional sockets and lighting installations</li>
              <li>EV charger installations</li>
              <li>EICR (Electrical Installation Condition Reports)</li>
              <li>Commercial and industrial electrical work</li>
              <li>Outdoor and garden lighting</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              3. Quotations and Pricing
            </h2>
            <p>
              All quotations provided are valid for 30 days from the date of issue unless otherwise stated.
              Prices quoted are based on the information provided and a visual inspection where applicable.
              Should additional work be required beyond the original scope, a revised quotation will be provided
              before any additional work commences.
            </p>
            <p>
              Emergency call-out fees may apply for work requested outside of normal working hours.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              4. Payment Terms
            </h2>
            <p>
              Payment is due upon completion of work unless otherwise agreed in writing. For larger projects,
              a deposit may be required before work commences, with the balance due upon completion.
            </p>
            <p>
              We accept payment by bank transfer, cash, or card. Late payments may incur interest charges
              in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              5. Warranties and Guarantees
            </h2>
            <p>
              All workmanship carried out by L&T Electricals is guaranteed for a period of 12 months from
              the date of completion. This guarantee covers defects in workmanship but does not cover
              damage caused by misuse, third-party interference, or normal wear and tear.
            </p>
            <p>
              Materials and components are covered by the manufacturer&apos;s warranty where applicable.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              6. Compliance and Certification
            </h2>
            <p>
              All electrical work is carried out in accordance with BS 7671 (IET Wiring Regulations) and
              current Building Regulations. Where required, appropriate certification and notification
              to Building Control will be provided.
            </p>
            <p>
              L&T Electricals is fully insured with public liability insurance covering all work undertaken.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              7. Customer Responsibilities
            </h2>
            <p>
              Customers are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing safe and clear access to work areas</li>
              <li>Ensuring accurate information is provided regarding the electrical installation</li>
              <li>Obtaining any necessary permissions or consents (e.g., landlord approval)</li>
              <li>Notifying us of any known hazards or issues on the premises</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              8. Cancellation Policy
            </h2>
            <p>
              Should you need to cancel or reschedule an appointment, please provide at least 24 hours notice.
              Cancellations made with less than 24 hours notice may be subject to a cancellation fee to cover
              lost time and expenses.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              9. Limitation of Liability
            </h2>
            <p>
              L&T Electricals shall not be liable for any indirect, incidental, or consequential damages
              arising from the provision of services. Our total liability shall not exceed the value of
              the services provided.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              10. Contact Information
            </h2>
            <p>
              For any questions regarding these terms and conditions, please contact us:
            </p>
            <ul className="space-y-2">
              <li>Phone: 07485 035381</li>
              <li>Email: l.telectricals2021@gmail.com</li>
              <li>Location: Darwen, Lancashire</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
