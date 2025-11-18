import { useState } from "react";
import { Mail, Phone, MapPin, Check, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    message: "",
    meetingType: "phone",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const SERVICES = [
    "Select a service",
    "Share Market Advisory",
    "Stock Market Analysis",
    "Mutual Funds",
    "Debentures",
    "Portfolio Management",
    "IEPF Claim Processing",
    "Demat Account Assistance",
    "Financial Counselling",
    "Investment Recovery",
    "Investor Support",
    "Equity Trading",
    "Market Research",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email");
      return false;
    }
    if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile.replace(/\D/g, ""))) {
      toast.error("Please enter a valid 10-digit mobile number");
      return false;
    }
    if (formData.service === "Select a service") {
      toast.error("Please select a service");
      return false;
    }
    if (!formData.consent) {
      toast.error("Please consent to data usage");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          service: "",
          message: "",
          meetingType: "phone",
          consent: false,
        });
        toast.success("Consultation request submitted successfully!");

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        toast.error("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full">
        <section className="py-24 md:py-32">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="text-green-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-green-900 mb-4">Thank You!</h2>
              <p className="text-green-800 text-lg mb-2">Your consultation request has been submitted successfully.</p>
              <p className="text-green-700 mb-8">
                We'll contact you within 24 hours to confirm your appointment and discuss your needs in detail.
              </p>
              <p className="text-green-700 font-semibold">
                📧 Confirmation email sent to: <span className="text-primary">{formData.email}</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-primary-foreground/90">
            Book your free consultation with our expert advisor
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <div className="bg-white border border-border rounded-lg p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Phone</h3>
              <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                +91 98765 43210
              </a>
            </div>

            <div className="bg-white border border-border rounded-lg p-8">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
              <a href="mailto:contact@kalvati.com" className="text-muted-foreground hover:text-primary transition-colors">
                contact@kalvati.com
              </a>
            </div>

            <div className="bg-white border border-border rounded-lg p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Location</h3>
              <p className="text-muted-foreground">Pune, India</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Request a Consultation</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-white"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-white"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Mobile *</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-white"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Service of Interest *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-white"
                      required
                    >
                      {SERVICES.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Meeting Type */}
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-3">Preferred Meeting Type</label>
                    <div className="space-y-2">
                      {["Phone", "Video", "In-person in Pune"].map((type) => (
                        <label key={type} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="meetingType"
                            value={type.toLowerCase().replace("-", "-")}
                            checked={formData.meetingType === type.toLowerCase().replace("-", "-")}
                            onChange={handleChange}
                            className="w-4 h-4"
                          />
                          <span className="text-muted-foreground">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      How can we help you? (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-white resize-none"
                      rows="4"
                      placeholder="Tell us about your needs and goals..."
                    />
                  </div>

                  {/* Consent */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="w-4 h-4 mt-1"
                        required
                      />
                      <span className="text-sm text-muted-foreground">
                        I consent to my data being used to contact me about services. Read our{" "}
                        <a href="#" className="text-primary font-semibold hover:underline">
                          privacy policy
                        </a>
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Submitting..." : "Request Consultation"}
                    {!isSubmitting && <ArrowRight size={20} />}
                  </button>
                </form>
              </div>
            </div>

            {/* Side Info */}
            <div className="lg:col-span-1">
              <div className="bg-primary text-primary-foreground rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span>30+ years of market expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span>Free initial consultation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span>Transparent and ethical practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span>Personal attention to every case</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span>In-person meetings available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span>Quick response within 24 hours</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 bg-secondary/10 border border-secondary/30 rounded-lg p-6">
                <h4 className="font-bold text-primary mb-3">Quick Response Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  We respond to all consultation requests within 24 hours. Your time is valuable to us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
