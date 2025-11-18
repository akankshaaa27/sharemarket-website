import { Link } from "react-router-dom";
import { Calendar, Award, MapPin, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Pradeep Samgir</h1>
          <p className="text-xl text-primary-foreground/90">
            Share Market Consultant & IEPF Recovery Specialist
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Bio */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Professional Background</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  With over 30 years in Indian financial markets, I started as a Share Market Broker and evolved into
                  an independent market consultant. I specialize in share recovery, IEPF claim processing, demat issues,
                  and tailored investment advice.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I personally assist clients throughout the documentation and regulatory steps to recover and transfer
                  shares back to their demat accounts. I'm available for in-person consultations across Pune.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My passion is helping investors regain control of their lost or forgotten assets while providing
                  expert guidance for future wealth creation and portfolio management.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 py-8 border-y border-border">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">30+</div>
                  <p className="text-muted-foreground">Years in Financial Markets</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">1000+</div>
                  <p className="text-muted-foreground">Clients Served</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">₹50Cr+</div>
                  <p className="text-muted-foreground">Assets Recovered</p>
                </div>
              </div>

              {/* Experience Timeline */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-8">Career Timeline</h3>

                <div className="space-y-8">
                  {/* 1990-2015 */}
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <Calendar className="text-white" size={20} />
                      </div>
                    </div>
                    <div className="flex-grow pb-8 border-l-2 border-border pl-6">
                      <h4 className="text-xl font-bold text-primary mb-2">1990–2015</h4>
                      <h5 className="font-semibold text-lg mb-2">Share Market Broker & Portfolio Manager</h5>
                      <p className="text-muted-foreground">
                        Managed retail client portfolios and executed market strategies for institutional and high-net-worth
                        individuals. Built strong relationships and developed expertise in risk management and market analysis.
                      </p>
                    </div>
                  </div>

                  {/* 2015-Present */}
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <Award className="text-white" size={20} />
                      </div>
                    </div>
                    <div className="pl-6">
                      <h4 className="text-xl font-bold text-primary mb-2">2015–Present</h4>
                      <h5 className="font-semibold text-lg mb-2">Independent Financial Consultant</h5>
                      <p className="text-muted-foreground mb-4">
                        Established independent consulting practice specializing in IEPF claim processing, demat account
                        assistance, investment recovery, and personalized financial counselling.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-secondary font-bold mt-0.5">→</span>
                          <span>Led successful IEPF claim recoveries for 500+ clients</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary font-bold mt-0.5">→</span>
                          <span>Helped resolve complex demat account issues including IL&FS cases</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary font-bold mt-0.5">→</span>
                          <span>Provided investment advisory to diverse client base across Pune</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary font-bold mt-0.5">→</span>
                          <span>Built reputation for transparency, reliability, and client satisfaction</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Key Info */}
            <div>
              {/* Profile Card */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 border border-border mb-8">
                <div className="flex justify-center mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fefd4ffd1079d4c2098f59b6b5c24c07c%2F0b3caffae6de46a5bae133bec02b9b1b?format=webp&width=800"
                    alt="Pradeep Samgir - Kalabai Enterprises"
                    className="h-28 w-28 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6">Quick Facts</h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-secondary mb-2">Location</p>
                    <div className="flex items-start gap-2">
                      <MapPin className="text-primary flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-muted-foreground">Pune, India</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-secondary mb-2">Specialization</p>
                    <ul className="space-y-2">
                      <li className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-accent mt-1">●</span>
                        <span>IEPF Share Recovery</span>
                      </li>
                      <li className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-accent mt-1">●</span>
                        <span>Demat Account Issues</span>
                      </li>
                      <li className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-accent mt-1">●</span>
                        <span>Investment Recovery</span>
                      </li>
                      <li className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-accent mt-1">●</span>
                        <span>Portfolio Management</span>
                      </li>
                      <li className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-accent mt-1">●</span>
                        <span>Financial Planning</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-secondary mb-2">Expertise</p>
                    <ul className="space-y-2">
                      <li className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-secondary">✓</span>
                        <span>Share & Stock Market</span>
                      </li>
                      <li className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-secondary">✓</span>
                        <span>IEPF Regulations</span>
                      </li>
                      <li className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-secondary">✓</span>
                        <span>Demat Procedures</span>
                      </li>
                      <li className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-secondary">✓</span>
                        <span>Risk Management</span>
                      </li>
                      <li className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-secondary">✓</span>
                        <span>Financial Advisory</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
                <h4 className="text-xl font-bold mb-4">Ready to Get Expert Advice?</h4>
                <p className="text-sm mb-6 text-primary-foreground/90">
                  Schedule a personalized consultation to discuss your financial needs.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-2 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Book Consultation
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 p-6 border border-border rounded-lg bg-white">
                <h4 className="font-bold text-primary mb-4">Why Choose Pradeep?</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span className="text-muted-foreground">3 decades of market experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span className="text-muted-foreground">Proven track record of success</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span className="text-muted-foreground">Transparent & ethical practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span className="text-muted-foreground">Personal attention to every case</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span className="text-muted-foreground">In-person consultations in Pune</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-secondary/5 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">My Approach</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I believe in putting clients first. Every person's financial situation is unique, and cookie-cutter
              solutions don't work. I spend time understanding your goals, concerns, and constraints before recommending
              any strategy. Whether it's recovering lost IEPF shares or building a long-term investment portfolio, I bring
              the same dedication and expertise to every case.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trust, transparency, and results are the three pillars of my practice. I'm not here to make quick money;
              I'm here to help you build lasting wealth and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Your Financial Future</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Whether you're recovering lost investments or planning for growth, I'm here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              Schedule Your Consultation
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              Explore Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
