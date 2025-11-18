import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies & Portfolio</h1>
          <p className="text-xl text-primary-foreground/90">
            Success stories from our clients
          </p>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Selected Case Studies</h2>

          <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
            We specialise in recovering IEPF claims, resolving demat & transfer disputes, and helping clients recover
            unclaimed dividends and shares. Below are anonymised summaries of representative cases.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-secondary/5 border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">IEPF Claim — Successful Recovery</h3>
              <p className="text-sm text-muted-foreground mb-3">Client: Individual investor (Pune)</p>
              <p className="text-sm mb-3">Issue: Shares transferred to IEPF due to prolonged inaction; client lacked documentation.</p>
              <p className="text-sm mb-3">Outcome: Recovered shares and credited to client's demat after registrar and ministry coordination.</p>
              <p className="text-xs text-muted-foreground">Duration: 5 months</p>
            </article>

            <article className="bg-secondary/5 border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Demat Transfer Dispute</h3>
              <p className="text-sm text-muted-foreground mb-3">Client: HNI portfolio (Mumbai)</p>
              <p className="text-sm mb-3">Issue: Transfer rejection due to signature mismatch and DP mismatch.</p>
              <p className="text-sm mb-3">Outcome: Resolved with affidavit support and registrar corrections; transfer completed.</p>
              <p className="text-xs text-muted-foreground">Duration: 6 weeks</p>
            </article>

            <article className="bg-secondary/5 border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Unclaimed Dividend Recovery</h3>
              <p className="text-sm text-muted-foreground mb-3">Client: Corporate trust (Pune)</p>
              <p className="text-sm mb-3">Issue: Multiple unclaimed dividends across several years not reconciled.</p>
              <p className="text-sm mb-3">Outcome: Traced payments, filed claims, and recovered cumulative dividend amount.</p>
              <p className="text-xs text-muted-foreground">Duration: 2 months</p>
            </article>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4 text-center">Detailed Case Studies</h3>
            <div className="space-y-6">
              <div className="bg-secondary/5 border border-border rounded-lg p-6">
                <h4 className="font-bold mb-2">Case: Bulk Transfer Reconciliation</h4>
                <p className="text-sm mb-2">Challenge: Client had 200+ legacy share certificates and incomplete records across multiple registrars.</p>
                <p className="text-sm mb-2">Approach: Performed full reconciliation, prepared DRFs, coordinated with registrars and DPs for dematerialisation.</p>
                <p className="text-sm">Result: Completed dematerialisation and consolidated holdings into a single demat account; resolved with minimal tax impact.</p>
              </div>

              <div className="bg-secondary/5 border border-border rounded-lg p-6">
                <h4 className="font-bold mb-2">Case: Frozen Account Unlock & DP Retrieval</h4>
                <p className="text-sm mb-2">Challenge: Client's account was frozen after DP changes and incorrect KYC.</p>
                <p className="text-sm mb-2">Approach: Liaised with exchange, DP, and registrar, submitted KYC/legal documents and affidavits.</p>
                <p className="text-sm">Result: Account unlocked and holdings restored; provided a post-action checklist to avoid recurrence.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-sm text-muted-foreground">Want to discuss a case? We keep client identities private and work under strict confidentiality.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Discuss Your Case
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
