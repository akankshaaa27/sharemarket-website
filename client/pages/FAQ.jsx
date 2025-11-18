import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";

const FAQS = [
  {
    question: "What is IEPF and why do shares get transferred there?",
    answer:
      "The Investor Education and Protection Fund (IEPF) is established under the Ministry of Corporate Affairs to protect investor interests. Shares are transferred to IEPF if dividends remain unclaimed for 7 consecutive years. Once transferred, investors need to file a claim to recover them.",
  },
  {
    question: "How long does IEPF claim recovery take?",
    answer:
      "The timeline typically ranges from 3-6 months depending on the accuracy of documentation and IEPF's processing queue. We handle all follow-ups to ensure timely processing. In urgent cases, we can expedite the process.",
  },
  {
    question: "What documents do I need for IEPF claim recovery?",
    answer:
      "You'll need PAN card, Aadhaar, bank statements, original share certificates or demat statements, transfer deed, and proof of address. We provide a complete checklist and help gather all required documents.",
  },
  {
    question: "How much does IEPF claim recovery cost?",
    answer:
      "Our consultation is free. Service charges vary based on the complexity and value of your claim. We believe in transparent pricing and discuss fees upfront before proceeding.",
  },
  {
    question: "Can I open a demat account if I have no prior experience?",
    answer:
      "Absolutely! We provide complete guidance on demat account opening, KYC requirements, and account management. We can help with any depository (CDSL or NSDL) and explain the entire process step by step.",
  },
  {
    question: "Do you provide portfolio management services?",
    answer:
      "Yes, we offer active portfolio management services including asset allocation, stock selection, rebalancing, and performance reviews. Services are tailored to your risk profile and financial goals.",
  },
  {
    question: "Can I get advice on mutual funds and SIPs?",
    answer:
      "Yes, we help with fund selection, SIP planning, and portfolio rebalancing. We analyze your risk tolerance, investment horizon, and goals to recommend suitable mutual funds.",
  },
  {
    question: "Do you offer in-person consultations?",
    answer:
      "Yes, we're based in Pune and offer in-person consultations at our office. We also provide phone and video consultations for clients outside Pune.",
  },
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-start justify-between hover:bg-secondary/5 transition-colors text-left"
      >
        <span className="font-semibold text-primary pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`text-secondary flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 border-t border-border bg-secondary/5 text-muted-foreground">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-primary-foreground/90">
            Get answers to common questions about IEPF, demat accounts, and investment advisory
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Get personalized answers from our expert consultant.
          </p>

          <Link
            to="/contact"
            className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors inline-flex items-center gap-2"
          >
            Contact Us Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
