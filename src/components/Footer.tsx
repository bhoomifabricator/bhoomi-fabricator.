'use client'
import Link from 'next/link'
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react'

const services = [
  'Exhibition Stall Design',
  '3D Visualization',
  'Interior Design',
  'Construction Services',
  'Custom Carpentry',
  'Turnkey Projects',
]

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#111111', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
      {/* Top CTA */}
      <div
        className="py-16 px-6 lg:px-12 text-center relative overflow-hidden grain-overlay"
        style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)' }}
      >
        <div className="max-w-2xl mx-auto relative z-10">
          <p className="section-label mb-4">Start Your Project</p>
          <h2 className="section-title mb-6" style={{ color: '#F5F0E8' }}>
            Let's Build Something{' '}
            <span className="text-gold-shimmer">Extraordinary</span>
          </h2>
          <p className="mb-8" style={{ color: '#8A8A8A', fontFamily: 'var(--font-body)' }}>
            From concept to completion — tell us your vision and we'll bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              <span>Get Free Consultation</span>
              <ArrowRight size={16} />
            </Link>
            <a href="mailto:bhoomifabricato6@gmail.com" className="btn-outline">
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #9B7A2C)',
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
              >
                <span style={{ fontFamily: 'var(--font-display)', color: '#1A1A1A', fontWeight: 900, fontSize: '1rem' }}>B</span>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: '#F5F0E8' }}>Bhoomi</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.18em', color: '#C9A84C', textTransform: 'uppercase' }}>Fabricator</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#6A6A6A', fontFamily: 'var(--font-body)' }}>
              Trusted name in creative fabrication and turnkey project execution. Delivering excellence in exhibition design, 3D visualization, and interior solutions across Mumbai.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 flex items-center justify-center transition-all duration-300"
                  style={{
                    border: '1px solid rgba(201,168,76,0.3)',
                    color: '#8A8A8A',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#C9A84C'
                    ;(e.currentTarget as HTMLElement).style.color = '#C9A84C'
                    ;(e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.1)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.3)'
                    ;(e.currentTarget as HTMLElement).style.color = '#8A8A8A'
                    ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-6 pb-3" style={{ color: '#F5F0E8', fontFamily: 'var(--font-body)', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm flex items-center gap-2 transition-colors group"
                    style={{ color: '#6A6A6A', fontFamily: 'var(--font-body)' }}
                  >
                    <span style={{ color: '#C9A84C', fontSize: '0.6rem' }}>◆</span>
                    <span className="group-hover:text-cream transition-colors" style={{ color: 'inherit' }}>{s}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-6 pb-3" style={{ color: '#F5F0E8', fontFamily: 'var(--font-body)', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm flex items-center gap-2 transition-colors group"
                    style={{ color: '#6A6A6A', fontFamily: 'var(--font-body)' }}
                  >
                    <ArrowRight size={12} style={{ color: '#C9A84C' }} />
                    <span>{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-6 pb-3" style={{ color: '#F5F0E8', fontFamily: 'var(--font-body)', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={16} className="shrink-0 mt-1" style={{ color: '#C9A84C' }} />
                <p className="text-sm" style={{ color: '#6A6A6A', fontFamily: 'var(--font-body)', lineHeight: 1.6 }}>
                  Ground Floor, Room No. 158, Prem Nagar,<br />
                  Near Sion Railway Station, L.B.S. Marg,<br />
                  Sion (W), Mumbai – 400022
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={16} className="shrink-0" style={{ color: '#C9A84C' }} />
                <a
                  href="mailto:bhoomifabricato6@gmail.com"
                  className="text-sm transition-colors hover:text-brand-gold"
                  style={{ color: '#6A6A6A', fontFamily: 'var(--font-body)' }}
                >
                  bhoomifabricato6@gmail.com
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="shrink-0" style={{ color: '#C9A84C' }} />
                <p className="text-sm" style={{ color: '#6A6A6A', fontFamily: 'var(--font-body)' }}>
                  Contact: Sanjay Vishwakarma
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: '#444', fontFamily: 'var(--font-body)' }}>
            © {new Date().getFullYear()} Bhoomi Fabricator. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#444', fontFamily: 'var(--font-body)' }}>
            Designed with precision · Built with passion · Mumbai
          </p>
        </div>
      </div>
    </footer>
  )
}
