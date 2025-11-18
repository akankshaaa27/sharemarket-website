import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function IEPFRecovery() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">IEPF Claim Recovery</h1>
          <p className="text-xl text-primary-foreground/90">
            Recover your lost shares transferred to IEPF
          </p>
        </div>
      </section>

      {/* IEPF Recovery Details */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary/5 border border-border rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-primary mb-4">IEPF Claim Recovery — What We Do</h2>
            <p className="text-muted-foreground text-lg mb-6">
              If your shares or dividends were transferred to the Investor Education and Protection Fund (IEPF), we help
              you recover them end-to-end. Our team handles verification, documentation, registrar follow-ups and claim
              submissions on your behalf.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Typical Process</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Initial case review & entitlement verification (we check company transfer records and your folio/DP details).</li>
              <li>Document collection: identity, proof of ownership, past communication, copy of share certificate (if any).</li>
              <li>Coordinate with the Registrar & Transfer Agent to obtain transfer and claim forms.</li>
              <li>Prepare and submit the IEPF claim application with supporting affidavits and indemnity forms.</li>
              <li>Follow up with ministry/IEPF authority and the company for claim processing and credit back to your demat.</li>
              <li>Post-claim reconciliation and confirmation of credit to your demat account.</li>
            </ol>

            <h3 className="text-xl font-semibold mt-6 mb-3">Documents Usually Required</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Identity proof: PAN, Aadhaar, passport, or driving license.</li>
              <li>Proof of ownership: demat statements, old physical share certificate copies, allotment letters.</li>
              <li>Signed indemnity and declaration forms (we draft these for you).</li>
              <li>Cancelled cheque and KYC documents for bank details verification.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Timelines & Fees</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Claims can take several weeks to months depending on registrar and ministry processing times. We provide a
              clear timeline estimate after reviewing your file. Our fees depend on case complexity — contact us for a
              free case evaluation and fixed-fee proposal.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Why Choose Us</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Experienced handling of IEPF claims and registrar interactions.</li>
              <li>End-to-end paperwork preparation and liaison with authorities.</li>
              <li>Transparent pricing and regular status updates.</li>
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                Start Your Claim
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors inline-flex items-center gap-2"
              >
                Learn About Related Services
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
