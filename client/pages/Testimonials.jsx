import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";

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
  {
    name: "Priya Desai",
    role: "Retired Teacher",
    content:
      "After 30 years, I found out my shares were in IEPF. Pradeep recovered them within months. An absolute lifesaver!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Finance Manager",
    content:
      "His portfolio management approach is systematic and results-driven. I've seen consistent returns over the past 3 years.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    role: "Homemaker",
    content:
      "Very patient with explaining investment concepts. He made me confident enough to make my own investment decisions.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h1>
          <p className="text-xl text-primary-foreground/90">
            Hear from satisfied investors and clients
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="p-8 border border-border rounded-lg bg-white hover:shadow-lg transition-shadow">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary/5 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Ready to Join Our Satisfied Clients?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take the first step towards recovering your investments or growing your wealth.
          </p>

          <Link
            to="/contact"
            className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
          >
            Book Your Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
