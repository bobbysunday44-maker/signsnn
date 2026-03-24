'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import {
  ArrowRight,
  Phone,
  Hammer,
  ShieldCheck,
  Sparkles,
  Heart,
  CheckCircle2,
  Cog,
  Quote,
  Handshake,
  GraduationCap,
  CalendarHeart,
} from 'lucide-react';

/* ─── Data ─── */

const team = [
  {
    name: 'Darren Shaughnessy',
    role: 'Owner & CEO',
    image: '/images/team/darren-shaughnessy.png',
    quote: 'Founded NN Signs with a vision to bring premium craftsmanship to every project.',
  },
  {
    name: 'Vanessa Ridgeway',
    role: 'Production Manager',
    image: '/images/team/vanessa-ridgeway.png',
    quote: 'Oversees quality control and production timelines to ensure perfection.',
  },
  {
    name: 'Cole Benning',
    role: 'Lead Installer',
    image: '/images/team/cole-benning.png',
    quote: '12+ years in the field, specializing in complex installations.',
  },
  {
    name: 'Tanya Rourke',
    role: 'Design Lead',
    image: '/images/team/tanya-rourke.png',
    quote: 'Transforms brand visions into eye-catching sign designs.',
  },
  {
    name: 'Wyatt Etheridge',
    role: 'Sales Coordinator',
    image: '/images/team/wyatt-etheridge.png',
    quote: 'Guides clients through every step from consultation to completion.',
  },
];

const timeline = [
  {
    year: '2014',
    title: 'The Beginning',
    description:
      'Darren Shaughnessy launches NN Signs & Graphics from a small garage workshop in Phoenix with nothing but a vinyl plotter, a work truck, and an unwavering commitment to quality.',
  },
  {
    year: '2016',
    title: 'First Major Contract',
    description:
      'Wins first national retail chain signage project, producing and installing channel letters across multiple Arizona locations and proving NN Signs can compete at any scale.',
  },
  {
    year: '2018',
    title: 'New Facility',
    description:
      'Moves into a 5,000 sq ft production facility on McDowell Road, equipped with CNC routing, large-format printers, and a dedicated LED fabrication area.',
  },
  {
    year: '2020',
    title: 'Team Growth',
    description:
      'Expands to a full team of five specialists covering design, production, installation, and sales — enabling faster turnarounds and larger-scale projects.',
  },
  {
    year: '2022',
    title: '1,000th Client',
    description:
      'Celebrates the milestone of 1,000 satisfied clients served across the Phoenix Valley, from independent restaurants to Fortune 500 retail locations.',
  },
  {
    year: '2024',
    title: 'Industry Recognition',
    description:
      'Named Top Sign Company in the Phoenix Metro area, recognized for craftsmanship, client satisfaction, and community involvement.',
  },
];

const aboutValues = [
  {
    icon: Hammer,
    title: 'Craftsmanship',
    description: 'Every cut, every weld, every pixel — precision is non-negotiable.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description: 'Transparent pricing, honest timelines, and zero surprises.',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'Blending traditional techniques with cutting-edge technology.',
  },
  {
    icon: Heart,
    title: 'Community',
    description: 'Proudly serving Phoenix businesses and giving back to our community.',
  },
];

const certifications = [
  'UL Listed Sign Manufacturer',
  'Licensed Arizona Contractor (ROC)',
  'OSHA Safety Certified',
  '3M Certified Installer',
  'ISA (International Sign Association) Member',
];

const capabilities = [
  'In-house design studio',
  'CNC routing & laser cutting',
  'Large-format digital printing',
  'LED module fabrication',
  'Professional installation crews',
];

const communityItems = [
  {
    icon: Handshake,
    title: 'Local Business Partnerships',
    description:
      'We partner with Phoenix-area businesses to create signage packages that fit every budget, helping local entrepreneurs establish their brand presence from day one.',
  },
  {
    icon: GraduationCap,
    title: 'Youth Mentorship Programs',
    description:
      'Through our partnership with local trade schools, we mentor aspiring sign makers and graphic designers, providing hands-on experience in our production facility.',
  },
  {
    icon: CalendarHeart,
    title: 'Community Event Sponsorships',
    description:
      'From local 5K races to neighborhood block parties, we sponsor and produce signage for community events that bring people together across the Valley.',
  },
];

/* ─── Page ─── */

export default function AboutPage() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 bg-walnut" />
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(201,169,110,0.4) 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-walnut/80 via-transparent to-walnut/60" />

        <div className="relative z-10 container-narrow w-full pt-32 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-px bg-gold/40" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-gold/70">
                About NN Signs
              </span>
              <span className="w-8 h-px bg-gold/40" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] tracking-tight text-ivory mb-8"
            >
              Our <span className="text-gold italic">Story</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg md:text-xl text-ivory/60 leading-relaxed max-w-2xl mx-auto font-body"
            >
              From a one-man garage workshop to Phoenix&apos;s most trusted sign company &mdash;
              a decade of craftsmanship, growth, and unwavering dedication to every client
              we serve.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ══════ FOUNDER STORY ══════ */}
      <section className="section-padding bg-ivory">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-2xl shadow-bark/20">
                  <Image
                    src="/images/team/darren-shaughnessy.png"
                    alt="Darren Shaughnessy, founder and CEO of NN Signs & Graphics"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Gold accent frame */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-lg -z-10" />
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="gold-line" />
                <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-caramel">
                  Our Founder
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-8">
                Built on <span className="text-gold italic">Craftsmanship</span>,
                <br />
                Driven by Results
              </h2>
              <p className="text-brown-text leading-relaxed mb-6">
                In 2014, Darren Shaughnessy left a comfortable career in commercial signage
                to start something of his own. Armed with a vinyl plotter, a secondhand work
                truck, and a garage that doubled as his workshop, he founded NN Signs &
                Graphics with a single conviction: every business deserves a sign that&apos;s
                built with the same care as the business itself.
              </p>
              <p className="text-brown-text leading-relaxed mb-6">
                Those early days were long &mdash; hand-delivering signs across the Valley,
                installing channel letters in the 115-degree Phoenix heat, and earning each
                new client one handshake at a time. But word spread quickly. The quality was
                undeniable. Within two years, Darren landed his first national retail chain
                contract, and the garage workshop gave way to a 5,000 sq ft production
                facility on McDowell Road.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Today, NN Signs is a team of five specialists serving 1,500+ clients across
                the Phoenix Valley. From corner restaurants to Fortune 500 storefronts,
                the mission hasn&apos;t changed: deliver signs that are crafted with precision,
                installed with pride, and built to last the unforgiving Arizona sun.
              </p>

              {/* Founder quote */}
              <div className="border-l-2 border-gold/60 pl-6 py-2">
                <p className="font-display text-lg text-bark italic leading-relaxed">
                  &ldquo;A sign is more than vinyl and metal &mdash; it&apos;s the first
                  promise your business makes to every person who walks by.&rdquo;
                </p>
                <p className="text-sm font-heading font-semibold text-caramel mt-3">
                  &mdash; Darren Shaughnessy, Founder & CEO
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════ COMPANY TIMELINE ══════ */}
      <section className="section-padding bg-linen">
        <div className="container-narrow">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span className="gold-line" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-caramel">
                Our Journey
              </span>
              <span className="gold-line" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-4">
              A Decade of <span className="text-gold italic">Growth</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              From humble beginnings to industry recognition &mdash; every milestone
              has been built on hard work and client trust.
            </p>
          </ScrollReveal>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-gold/40 md:-translate-x-px" />

            <div className="space-y-12 md:space-y-16">
              {timeline.map((milestone, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <ScrollReveal
                    key={milestone.year}
                    delay={i * 0.1}
                    direction={isLeft ? 'left' : 'right'}
                  >
                    <div className="relative flex items-start gap-8 md:gap-0">
                      {/* Gold dot */}
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                        <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/25">
                          <span className="text-xs font-heading font-bold text-walnut">
                            {milestone.year.slice(2)}
                          </span>
                        </div>
                      </div>

                      {/* Content - mobile: always right, desktop: alternating */}
                      <div
                        className={`ml-20 md:ml-0 md:w-1/2 ${
                          isLeft
                            ? 'md:pr-16 md:text-right'
                            : 'md:pl-16 md:ml-auto'
                        }`}
                      >
                        <span className="text-sm font-heading font-bold text-gold tracking-wide">
                          {milestone.year}
                        </span>
                        <h3 className="font-heading font-semibold text-xl text-charcoal mt-1 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ MEET THE TEAM ══════ */}
      <section className="section-padding bg-ivory">
        <div className="container-narrow">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span className="gold-line" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-caramel">
                Our People
              </span>
              <span className="gold-line" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-4">
              The Team Behind <span className="text-gold italic">Your Signs</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              Five dedicated professionals who bring expertise, passion, and precision
              to every project we take on.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <ScrollReveal
                key={member.name}
                delay={i * 0.1}
                className={
                  i >= 3 ? 'lg:col-span-1 lg:first-of-type:col-start-1' : ''
                }
              >
                <div className="bg-linen rounded-lg border border-nude/60 hover:border-gold/40 transition-all duration-500 overflow-hidden group h-full">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role} at NN Signs & Graphics`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-charcoal group-hover:text-gold transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-heading tracking-[0.1em] uppercase text-caramel mt-1 mb-4">
                      {member.role}
                    </p>
                    <div className="flex gap-3">
                      <Quote className="w-4 h-4 text-gold/40 shrink-0 mt-0.5" />
                      <p className="text-sm text-muted leading-relaxed italic">
                        {member.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ OUR VALUES ══════ */}
      <section className="section-padding bg-walnut relative overflow-hidden">
        {/* Subtle pattern */}
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
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span className="w-8 h-px bg-gold/40" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-gold/70">
                Our Principles
              </span>
              <span className="w-8 h-px bg-gold/40" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ivory leading-tight mb-4">
              What We <span className="text-gold italic">Stand For</span>
            </h2>
            <p className="text-ivory/50 max-w-2xl mx-auto leading-relaxed">
              These four values guide every decision we make &mdash; from the materials
              we choose to the way we treat our clients.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutValues.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="text-center group bg-ivory/5 border border-ivory/10 rounded-lg p-8 hover:border-gold/30 hover:bg-ivory/[0.07] transition-all duration-500 backdrop-blur-sm h-full">
                  <div className="w-16 h-16 mx-auto rounded-full bg-ivory/5 border border-ivory/10 flex items-center justify-center mb-6 group-hover:border-gold/40 group-hover:bg-gold/5 transition-all duration-500">
                    <value.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-gold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-ivory/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CERTIFICATIONS & CAPABILITIES ══════ */}
      <section className="section-padding bg-linen">
        <div className="container-narrow">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span className="gold-line" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-caramel">
                Credentials
              </span>
              <span className="gold-line" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-4">
              Certifications & <span className="text-gold italic">Capabilities</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              Industry-recognized credentials and in-house capabilities that ensure
              every project meets the highest standards.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-4xl mx-auto">
            {/* Certifications */}
            <ScrollReveal direction="left">
              <div className="bg-ivory rounded-lg p-8 border border-nude/60 h-full">
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-6 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-gold" />
                  Certifications
                </h3>
                <ul className="space-y-4">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-brown-text leading-relaxed">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Capabilities */}
            <ScrollReveal direction="right">
              <div className="bg-ivory rounded-lg p-8 border border-nude/60 h-full">
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-6 flex items-center gap-3">
                  <Cog className="w-6 h-6 text-gold" />
                  Capabilities
                </h3>
                <ul className="space-y-4">
                  {capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-brown-text leading-relaxed">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════ COMMUNITY ══════ */}
      <section className="section-padding bg-ivory">
        <div className="container-narrow">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span className="gold-line" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-caramel">
                Giving Back
              </span>
              <span className="gold-line" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-4">
              Giving Back to <span className="text-gold italic">Phoenix</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              We believe in lifting the community that has supported us from the very
              beginning. Here&apos;s how we give back.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {communityItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.12}>
                <div className="bg-linen rounded-lg p-8 border border-nude/60 hover:border-gold/40 hover:shadow-xl hover:shadow-bark/10 transition-all duration-500 h-full group">
                  <div className="w-14 h-14 rounded-lg bg-cream flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-bark group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-charcoal mb-3 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="section-padding bg-espresso relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-walnut via-espresso to-walnut" />
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="container-narrow relative z-10 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold/40" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-gold/70">
                Start Your Project
              </span>
              <span className="w-8 h-px bg-gold/40" />
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ivory leading-tight mb-6">
              Join 1,500+
              <br />
              Satisfied <span className="text-gold italic">Clients</span>
            </h2>
            <p className="text-ivory/50 max-w-xl mx-auto leading-relaxed mb-10 text-lg">
              Ready to work with a team that treats your brand like their own?
              Get a free consultation and see why Phoenix businesses trust NN Signs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gold text-walnut font-heading font-semibold rounded tracking-wide hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/25 animate-pulse-gold group"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:6027148350"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-ivory/20 text-ivory font-heading font-medium rounded tracking-wide hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call (602) 714-8350
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
