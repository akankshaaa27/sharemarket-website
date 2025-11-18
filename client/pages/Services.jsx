import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-primary-foreground/90">
            Comprehensive financial advisory and investment solutions
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Broker & Demat Services</h2>

          <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
            We provide end-to-end services for investors and brokers covering account setup, share dematerialisation,
            transfers, IEPF claims, corporate actions and dispute resolution. Below is a detailed list of specialised
            services we offer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary/5 border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Account & KYC Services</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Demat account opening assistance (DP selection, documents, e-KYC)</li>
                <li>Broker onboarding support and account linking</li>
                <li>KYC updates, PAN linking, Aadhaar seeding and UCC mapping</li>
                <li>Nomination updates and FATCA declaration support</li>
              </ul>
            </div>

            <div className="bg-secondary/5 border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Dematerialisation & Transfers</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Dematerialisation of physical share certificates (DRF/ISR handling)</li>
                <li>Transfer of shares between accounts (off-market and market transfers)</li>
                <li>Pledge / Unpledge of securities and margin solution coordination</li>
                <li>Corporate action processing: bonus, split, consolidation, rights</li>
              </ul>
            </div>

            <div className="bg-secondary/5 border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Dividends, Unclaimed Shares & IEPF</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Tracing and recovery of unclaimed dividends</li>
                <li>Assistance with IEPF (Investor Education and Protection Fund) claims</li>
                <li>Reconciliation of corporate communications and dividend payouts</li>
                <li>Support to transfer unclaimed shares from company/registrar</li>
              </ul>
            </div>

            <div className="bg-secondary/5 border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Brokerage Operations & Support</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Brokerage account reconciliation and statement analysis</li>
                <li>Settlement support and trade/transaction dispute resolution</li>
                <li>IPO application assistance and demat credit follow-up</li>
                <li>DP/Client ID retrieval and help with frozen/locked accounts</li>
              </ul>
            </div>

            <div className="bg-secondary/5 border border-border rounded-lg p-6 md:col-span-2">
              <h3 className="text-xl font-semibold mb-3">Advisory & Portfolio Services</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Portfolio review & rebalancing with focus on corporate actions</li>
                <li>Advice on best DP / broker practices and cost optimisation</li>
                <li>End-to-end coordination for e-voting and AGM-related actions</li>
                <li>Tailored solutions for high-value transfer, bulk transfers and reconciliation</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="mb-4 text-sm text-muted-foreground">
              Need a custom solution? We handle complex cases — transfer rejections, signature mismatches, or
              registrar follow-ups. Contact us and we'll provide a clear plan and timeline.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get Help with Your Case
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
