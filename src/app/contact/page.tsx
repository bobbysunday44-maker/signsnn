'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Zap,
  Truck,
  Plus,
  Minus,
  CheckCircle,
  Shield,
  Award,
  Send,
} from 'lucide-react';

/* ─── Data ─── */

const serviceOptions = [
  'Channel Letters',
  'Vehicle Wraps',
  'LED Signs',
  'Banners & Displays',
  'Window Graphics',
  'Monument Signs',
  'ADA & Wayfinding',
  'Large Format Printing',
  'Other',
];

const timelineOptions = [
  'Within 2 Weeks',
  '1 Month',
  '2-3 Months',
  'Flexible',
];

const faqs = [
  {
    question: 'How much does custom signage cost?',
    answer:
      'Pricing varies based on sign type, size, materials, and installation complexity. As a general guide, channel letters typically range from $75\u2013$300 per letter, while full vehicle wraps run $1,500\u2013$5,000. We provide detailed, no-obligation estimates for every project so you know exactly what to expect before any work begins.',
  },
  {
    question: 'What is your typical turnaround time?',
    answer:
      'Standard projects are completed within 2\u20134 weeks from design approval. More complex installations like monument signs or multi-location rollouts may require additional time. We also offer rush production for urgent needs and will confirm your specific timeline during the initial consultation.',
  },
  {
    question: 'Do you handle permits and installation?',
    answer:
      'Absolutely. We are a full-service sign company, which means we handle every step: design, engineering, city permits, HOA approvals, landlord coordination, fabrication, and professional installation. You get a single point of contact from start to finish.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve the entire Phoenix metropolitan area including Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, Surprise, and all surrounding communities. For larger projects, we also work with clients across the state of Arizona.',
  },
  {
    question: 'Do you offer design services?',
    answer:
      'Yes. Our in-house design team creates custom sign concepts tailored to your brand, location, and goals. We also work seamlessly with your existing brand guidelines, logo files, and style standards to ensure consistency across all your signage.',
  },
  {
    question: 'What warranty do you provide?',
    answer:
      'All of our signs come with a minimum 3-year warranty covering materials and workmanship. LED components are warranted for 5 or more years. We stand behind every installation and are always available for maintenance and repairs should you ever need us.',
  },
];

const trustBadges = [
  'Licensed & Insured',
  'UL Listed',
  '3M Certified',
  '12+ Years Experience',
];

/* ─── Page ─── */

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    details: '',
    timeline: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function toggleFaq(index: number) {
    setOpenFaq((prev) => (prev === index ? null : index));
  }

  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-walnut">
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(201,169,110,0.3) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-walnut/40 via-transparent to-walnut/60" />

        <div className="relative z-10 container-narrow w-full pt-36 pb-20 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-8 justify-center"
          >
            <span className="w-8 h-px bg-gold/40" />
            <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-gold/70">
              Contact Us
            </span>
            <span className="w-8 h-px bg-gold/40" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-ivory mb-6"
          >
            Get in <span className="text-gold italic">Touch</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg md:text-xl text-ivory/60 leading-relaxed max-w-2xl mx-auto font-body"
          >
            Ready to start your next signage project? Tell us about your vision
            and we&apos;ll bring it to life with craftsmanship that lasts.
          </motion.p>
        </div>
      </section>

      {/* ══════ CONTACT FORM + INFO ══════ */}
      <section className="section-padding bg-ivory">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* ── Left: Form (3 cols) ── */}
            <ScrollReveal direction="left" className="lg:col-span-3">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="gold-line" />
                <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-caramel">
                  Free Estimate
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-2">
                Request a Free <span className="text-gold italic">Quote</span>
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                Fill out the form below and our team will get back to you with a
                detailed estimate, typically within 24 hours.
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="bg-linen border border-gold/30 rounded-lg p-10 text-center"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-charcoal mb-3">
                      Thank You!
                    </h3>
                    <p className="text-brown-text leading-relaxed mb-2">
                      Your request has been received. A member of our team will
                      reach out within 24 hours with your custom quote.
                    </p>
                    <p className="text-muted text-sm">
                      Need it sooner? Call us directly at{' '}
                      <a
                        href="tel:+16027148350"
                        className="text-gold font-semibold hover:text-gold-light transition-colors"
                      >
                        (602) 714-8350
                      </a>
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          company: '',
                          service: '',
                          details: '',
                          timeline: '',
                        });
                      }}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-heading font-semibold text-bark hover:text-gold transition-colors"
                    >
                      Submit Another Request
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Row: Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-heading font-medium text-brown-text mb-1.5"
                        >
                          Full Name <span className="text-gold">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full bg-linen border border-nude focus:border-gold focus:ring-1 focus:ring-gold/30 rounded px-4 py-3 font-body text-charcoal placeholder:text-muted/60 outline-none transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-heading font-medium text-brown-text mb-1.5"
                        >
                          Email Address <span className="text-gold">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full bg-linen border border-nude focus:border-gold focus:ring-1 focus:ring-gold/30 rounded px-4 py-3 font-body text-charcoal placeholder:text-muted/60 outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Row: Phone + Company */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-heading font-medium text-brown-text mb-1.5"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(602) 555-0123"
                          className="w-full bg-linen border border-nude focus:border-gold focus:ring-1 focus:ring-gold/30 rounded px-4 py-3 font-body text-charcoal placeholder:text-muted/60 outline-none transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-heading font-medium text-brown-text mb-1.5"
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Business LLC"
                          className="w-full bg-linen border border-nude focus:border-gold focus:ring-1 focus:ring-gold/30 rounded px-4 py-3 font-body text-charcoal placeholder:text-muted/60 outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Row: Service + Timeline */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-heading font-medium text-brown-text mb-1.5"
                        >
                          Service Interested In <span className="text-gold">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-linen border border-nude focus:border-gold focus:ring-1 focus:ring-gold/30 rounded px-4 py-3 font-body text-charcoal outline-none transition-all duration-200 appearance-none"
                          style={{
                            backgroundImage:
                              'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%238B7355\' d=\'M6 8L1 3h10z\'/%3E%3C/svg%3E")',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                          }}
                        >
                          <option value="">Select a service...</option>
                          {serviceOptions.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="timeline"
                          className="block text-sm font-heading font-medium text-brown-text mb-1.5"
                        >
                          Preferred Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full bg-linen border border-nude focus:border-gold focus:ring-1 focus:ring-gold/30 rounded px-4 py-3 font-body text-charcoal outline-none transition-all duration-200 appearance-none"
                          style={{
                            backgroundImage:
                              'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%238B7355\' d=\'M6 8L1 3h10z\'/%3E%3C/svg%3E")',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                          }}
                        >
                          <option value="">Select timeline...</option>
                          {timelineOptions.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label
                        htmlFor="details"
                        className="block text-sm font-heading font-medium text-brown-text mb-1.5"
                      >
                        Project Details
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        rows={5}
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="Tell us about your project: location, size, quantity, design ideas, or any other details that will help us prepare your quote..."
                        className="w-full bg-linen border border-nude focus:border-gold focus:ring-1 focus:ring-gold/30 rounded px-4 py-3 font-body text-charcoal placeholder:text-muted/60 outline-none transition-all duration-200 resize-vertical"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-walnut font-heading font-semibold rounded tracking-wide hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/25 group"
                    >
                      <Send className="w-4 h-4" />
                      Send Your Request
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </ScrollReveal>

            {/* ── Right: Info (2 cols) ── */}
            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="space-y-6">
                {/* Visit Our Shop Card */}
                <div className="bg-linen rounded-lg p-8 border border-nude/60">
                  <h3 className="font-heading font-semibold text-lg text-charcoal mb-6">
                    Visit Our Shop
                  </h3>
                  <div className="space-y-5">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-bark" />
                      </div>
                      <div>
                        <div className="text-sm font-heading font-medium text-brown-text mb-0.5">
                          Address
                        </div>
                        <p className="text-sm text-muted leading-relaxed">
                          4827 E McDowell Rd, Suite 104
                          <br />
                          Phoenix, AZ 85008
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-bark" />
                      </div>
                      <div>
                        <div className="text-sm font-heading font-medium text-brown-text mb-0.5">
                          Phone
                        </div>
                        <a
                          href="tel:+16027148350"
                          className="text-sm text-gold font-semibold hover:text-gold-light transition-colors"
                        >
                          (602) 714-8350
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-bark" />
                      </div>
                      <div>
                        <div className="text-sm font-heading font-medium text-brown-text mb-0.5">
                          Email
                        </div>
                        <a
                          href="mailto:info@signsnn.com"
                          className="text-sm text-gold font-semibold hover:text-gold-light transition-colors"
                        >
                          info@signsnn.com
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-bark" />
                      </div>
                      <div>
                        <div className="text-sm font-heading font-medium text-brown-text mb-0.5">
                          Business Hours
                        </div>
                        <div className="text-sm text-muted leading-relaxed space-y-0.5">
                          <p>Mon &ndash; Fri: 7:00 AM &ndash; 5:00 PM</p>
                          <p>Sat: 9:00 AM &ndash; 1:00 PM</p>
                          <p>Sun: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Response Card */}
                <div className="bg-walnut rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-ivory/5 border border-ivory/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-ivory">
                      Quick Response
                    </h3>
                  </div>
                  <p className="text-ivory/70 text-sm leading-relaxed mb-3">
                    Most quotes delivered within <span className="text-gold font-semibold">24 hours</span>.
                  </p>
                  <p className="text-ivory/50 text-sm leading-relaxed">
                    Rush project? Call us directly for same-day consultations.
                    We understand that timing matters and are built to move fast
                    when you need it.
                  </p>
                  <a
                    href="tel:+16027148350"
                    className="inline-flex items-center gap-2 mt-5 text-sm font-heading font-semibold text-gold hover:text-gold-light transition-colors group"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════ MAP AREA ══════ */}
      <section className="section-padding bg-linen">
        <div className="container-narrow">
          <ScrollReveal>
            <div className="aspect-[21/9] bg-cream rounded-lg border border-nude/60 flex flex-col items-center justify-center relative overflow-hidden">
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-[0.03]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(107,66,38,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(107,66,38,0.5) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                  }}
                />
              </div>
              {/* Radial glow */}
              <div className="absolute inset-0 bg-radial-[circle_at_center] from-gold/5 via-transparent to-transparent" />

              <div className="relative z-10 text-center px-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-ivory border border-nude/60 flex items-center justify-center mb-5 shadow-sm">
                  <MapPin className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading font-semibold text-charcoal text-lg mb-2">
                  NN Signs &amp; Graphics
                </h3>
                <p className="text-muted text-sm mb-5 leading-relaxed">
                  4827 E McDowell Rd, Suite 104
                  <br />
                  Phoenix, AZ 85008
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=4827+E+McDowell+Rd+Suite+104+Phoenix+AZ+85008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-walnut font-heading font-semibold text-sm rounded hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/25 group"
                >
                  Get Directions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════ FAQ ══════ */}
      <section className="section-padding bg-ivory">
        <div className="container-narrow">
          <ScrollReveal className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span className="gold-line" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-caramel">
                Common Questions
              </span>
              <span className="gold-line" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-4">
              Frequently Asked <span className="text-gold italic">Questions</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              Everything you need to know before getting started. Don&apos;t see
              your question? Reach out &mdash; we&apos;re happy to help.
            </p>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.question} delay={i * 0.06}>
                <div className="bg-linen border border-nude/60 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span id={`faq-question-${i}`} className="font-heading font-semibold text-charcoal group-hover:text-gold transition-colors">
                      {faq.question}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-cream border border-nude/60 flex items-center justify-center shrink-0 group-hover:border-gold/40 transition-colors">
                      {openFaq === i ? (
                        <Minus className="w-4 h-4 text-gold" />
                      ) : (
                        <Plus className="w-4 h-4 text-bark" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        id={`faq-answer-${i}`}
                        role="region"
                        aria-labelledby={`faq-question-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5">
                          <div className="w-12 h-px bg-gold/30 mb-4" />
                          <p className="text-brown-text text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ RUSH & EMERGENCY SERVICE ══════ */}
      <section className="section-padding bg-walnut relative overflow-hidden">
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(201,169,110,0.3) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="container-narrow relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-gold/40" />
                <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-gold/70">
                  Expedited Service
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                <span className="text-gold">Need It Fast?</span>
              </h2>
              <p className="text-ivory/70 leading-relaxed mb-5">
                We understand that business doesn&apos;t always run on a
                convenient schedule. Whether you&apos;re opening a new location,
                preparing for an event, or replacing damaged signage, our rush
                services are designed to deliver without sacrificing quality.
              </p>
              <p className="text-ivory/50 leading-relaxed mb-8">
                Call us before noon for same-day consultations. Our expedited
                production line and priority installation scheduling mean your
                project moves to the front of the queue.
              </p>
              <a
                href="tel:+16027148350"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-walnut font-heading font-semibold rounded tracking-wide hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/25 group"
              >
                <Phone className="w-5 h-5" />
                (602) 714-8350
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </ScrollReveal>

            {/* Right: Features */}
            <ScrollReveal direction="right">
              <div className="space-y-6">
                {[
                  {
                    icon: Zap,
                    title: 'Same-Day Quotes',
                    desc: 'Call before noon, get your quote by end of day. No waiting around for answers.',
                  },
                  {
                    icon: Clock,
                    title: 'Rush Production',
                    desc: 'Expedited timelines for urgent projects. We compress schedules without cutting corners.',
                  },
                  {
                    icon: Truck,
                    title: 'Priority Installation',
                    desc: 'Scheduling flexibility for tight deadlines. We work evenings and weekends when needed.',
                  },
                ].map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-14 h-14 rounded-lg bg-ivory/5 border border-ivory/10 flex items-center justify-center shrink-0 group-hover:border-gold/40 group-hover:bg-gold/5 transition-all duration-500">
                      <feature.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-ivory text-lg mb-1.5">
                        {feature.title}
                      </h3>
                      <p className="text-ivory/50 text-sm leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════ ADDITIONAL CTA ══════ */}
      <section className="section-padding bg-cream relative overflow-hidden">
        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="container-narrow text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 mb-6 justify-center">
              <span className="gold-line" />
              <span className="gold-line" />
            </div>
            <p className="text-muted font-heading text-lg mb-4 tracking-wide">
              Prefer to talk? We&apos;re a phone call away.
            </p>
            <a
              href="tel:+16027148350"
              className="block font-display text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal hover:text-gold transition-colors duration-300 mb-5"
            >
              (602) 714-8350
            </a>
            <p className="text-muted leading-relaxed">
              Or email us at{' '}
              <a
                href="mailto:info@signsnn.com"
                className="text-gold font-semibold hover:text-gold-light transition-colors"
              >
                info@signsnn.com
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════ TRUST SIGNALS ══════ */}
      <section className="py-12 bg-linen">
        <div className="container-narrow">
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {trustBadges.map((badge, i) => (
                <div key={badge} className="flex items-center gap-3">
                  {i > 0 && (
                    <span className="hidden sm:block w-px h-4 bg-nude" />
                  )}
                  <div className="flex items-center gap-2">
                    {i === 0 && <Shield className="w-4 h-4 text-bark/50" />}
                    {i === 1 && <Award className="w-4 h-4 text-bark/50" />}
                    {i === 2 && <Award className="w-4 h-4 text-bark/50" />}
                    {i === 3 && <Clock className="w-4 h-4 text-bark/50" />}
                    <span className="text-xs font-heading font-semibold tracking-[0.1em] uppercase text-bark/60">
                      {badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
