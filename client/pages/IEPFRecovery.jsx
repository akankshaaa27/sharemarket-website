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

      {/* Placeholder Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-secondary/5 border border-border rounded-lg p-12">
            <h2 className="text-3xl font-bold text-primary mb-4">IEPF Recovery Page Under Development</h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're creating a comprehensive guide for IEPF claim recovery, including detailed process steps, required documents,
              timelines, and fees. Contact us now to discuss your IEPF claim recovery needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                Start IEPF Claim
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/"
                className="px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                Back to Home
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
