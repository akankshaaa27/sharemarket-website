import { Link } from "react-router-dom";
import {
  TrendingUp,
  BarChart3,
  PieChart,
  DollarSign,
  FileText,
  Users,
  Target,
  Briefcase,
  Award,
  RefreshCw,
  BookOpen,
  HeadsetIcon,
  Star,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: TrendingUp,
    title: "Share Market Advisory",
    description: "Personalized trading guidance, risk profiling and buy/sell strategies tailored to your goals.",
  },
  {
    icon: BarChart3,
    title: "Stock Market Analysis",
    description: "Fundamental and technical analysis, sector research and stock recommendations.",
  },
  {
    icon: PieChart,
    title: "Mutual Funds",
    description: "Fund selection, SIP planning, and portfolio rebalancing based on risk tolerance.",
  },
  {
    icon: DollarSign,
    title: "Debentures",
    description: "Advisory on corporate debentures, ratings, risk and yield optimization.",
  },
  {
    icon: Target,
    title: "Portfolio Management",
    description: "Active portfolio construction, asset allocation and performance reviews.",
  },
  {
    icon: FileText,
    title: "IEPF Claim Processing",
    description: "End-to-end support to recover shares transferred to the Investor Education and Protection Fund.",
  },
  {
    icon: Briefcase,
    title: "Demat Account Assistance",
    description: "Help with opening, KYC, reactivation and resolving demat account issues.",
  },
  {
    icon: Award,
    title: "Financial Counselling",
    description: "One-on-one financial planning and investment education for individuals and families.",
  },
  {
    icon: RefreshCw,
    title: "Investment Recovery",
    description: "Trace lost investments, file claims and guide regulatory procedures to reclaim assets.",
  },
  {
    icon: Users,
    title: "Investor Support",
    description: "Ongoing support for account queries, paperwork and dispute resolution.",
  },
  {
    icon: TrendingUp,
    title: "Equity Trading",
    description: "Execution support and guidance for intraday, swing and long-term equity trades.",
  },
  {
    icon: BookOpen,
    title: "Market Research",
    description: "Custom research reports, watchlists and market trend summaries.",
  },
];

const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    role: "IT Professional",
    content:
      "Pradeep helped me recover shares worth 5 lakhs from IEPF. His expertise and patience made the entire process smooth and transparent.",
    rating: 5,
  },
  {
    name: "Meera Sharma",
    role: "Business Owner",
    content:
      "Excellent financial guidance. He understands the market deeply and provides actionable advice tailored to individual goals.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Healthcare Professional",
    content:
      "The demat account assistance was quick and hassle-free. Highly recommended for anyone struggling with account issues.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary/80 text-primary-foreground py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Share Market Expert
            </h1>
            <p className="text-xl md:text-2xl mb-2 font-light">30+ Years Experience</p>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
              IEPF Claim Specialist • Demat & Investment Recovery • Financial Advisor in Pune
            </p>
            <p className="text-sm md:text-base mb-8 text-primary-foreground/80 max-w-2xl leading-relaxed">
              Trusted by Pune investors for 30+ years. Specializing in IEPF claim recovery, share recovery, demat account
              assistance, and personalized investment advisory.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
              >
                Book a Free Consultation
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-colors flex items-center justify-center gap-2"
              >
                View Services
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 md:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">30+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">1000+</div>
              <p className="text-muted-foreground">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">₹50Cr+</div>
              <p className="text-muted-foreground">Assets Recovered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">12</div>
              <p className="text-muted-foreground">Expert Services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Expert Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial advisory covering share market, IEPF recovery, demat assistance, and investment
              management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow hover:border-secondary/50"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-secondary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              Explore All Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* IEPF Focus Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Recover Your IEPF Shares</h2>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Thousands of investors have lost shares to IEPF. I specialize in recovering these valuable assets and
                transferring them back to your demat account.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <span>End-to-end claim processing with minimal hassle</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <span>Expert guidance through regulatory procedures</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <span>Documentation support and claim filing</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <span>Transparent timeline and progress updates</span>
                </li>
              </ul>

              <Link
                to="/iepf-recovery"
                className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Learn About IEPF Recovery
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="bg-primary-foreground/10 rounded-lg p-8 border border-primary-foreground/20">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">Step 1</div>
                  <h4 className="font-semibold mb-2">Trace & Verify</h4>
                  <p className="text-sm text-primary-foreground/80">
                    Verify if your shares are in IEPF using your portfolio records and PAN details.
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">Step 2</div>
                  <h4 className="font-semibold mb-2">Document & Prepare</h4>
                  <p className="text-sm text-primary-foreground/80">
                    Gather necessary documents including PAN, Aadhaar, and demat statements.
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">Step 3</div>
                  <h4 className="font-semibold mb-2">File & Process</h4>
                  <p className="text-sm text-primary-foreground/80">
                    Submit your claim to IEPF with expert guidance on forms and procedures.
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">Step 4</div>
                  <h4 className="font-semibold mb-2">Recover & Transfer</h4>
                  <p className="text-sm text-primary-foreground/80">
                    Receive approval and transfer shares back to your demat account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground">Real stories from satisfied investors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="p-8 border border-border rounded-lg bg-white">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">{testimonial.content}</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-secondary/80 transition-colors"
            >
              View More Testimonials
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Control of Your Investments?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Book a free consultation to discuss your financial goals and discover how we can help you achieve them.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              Schedule Consultation
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              Chat on WhatsApp
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
