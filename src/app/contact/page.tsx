'use client'
import { useState } from 'react'
import { useReveal } from '@/components/useReveal'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'

const services = [
  'Exhibition Stall Design',
  '3D Visualization',
  'Interior Design',
  'Construction Services',
  'Custom Carpentry',
  'Turnkey Project',
  'Other',
]

export default function Contact() {
  useReveal()
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 px-6 lg:px-12 overflow-hidden grain-overlay"
        style={{ background: '#111' }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <p className="section-label mb-4">Let's Connect</p>
          <h1 className="hero-title mb-6" style={{ color: '#F5F0E8', fontSize: 'clamp(2.5rem,6vw,5.5rem)' }}>
            Start Your <span className="text-gold-shimmer">Project</span>
          </h1>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#8A8A8A', fontFamily: 'var(--font-body)' }}>
            Tell us about your project and we'll get back to you within 24 hours with a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 px-6 lg:px-12" style={{ background: '#1A1A1A' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 reveal-left">
            <h2 className="text-2xl font-bold mb-8" style={{ color: '#F5F0E8', fontFamily: 'var(--font-display)' }}>
              Get In Touch
            </h2>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}
                >
                  <MapPin size={16} style={{ color: '#C9A84C' }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: '#F5F0E8', fontFamily: 'var(--font-body)' }}>
                    Our Address
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#6A6A6A', fontFamily: 'var(--font-body)' }}>
                    Ground Floor, Room No. 158,<br />
                    Prem Nagar, Near Sion Railway Station,<br />
                    L.B.S. Marg, Sion (W),<br />
                    Mumbai – 400022
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}
                >
                  <Mail size={16} style={{ color: '#C9A84C' }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: '#F5F0E8', fontFamily: 'var(--font-body)' }}>
                    Email Us
                  </p>
                  <a
                    href="mailto:bhoomifabricato6@gmail.com"
                    className="text-sm"
                    style={{ color: '#C9A84C', fontFamily: 'var(--font-body)' }}
                  >
                    bhoomifabricato6@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}
                >
                  <Phone size={16} style={{ color: '#C9A84C' }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: '#F5F0E8', fontFamily: 'var(--font-body)' }}>
                    Contact Person
                  </p>
                  <p className="text-sm" style={{ color: '#6A6A6A', fontFamily: 'var(--font-body)' }}>
                    Sanjay Vishwakarma
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}
                >
                  <Clock size={16} style={{ color: '#C9A84C' }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: '#F5F0E8', fontFamily: 'var(--font-body)' }}>
                    Working Hours
                  </p>
                  <p className="text-sm" style={{ color: '#6A6A6A', fontFamily: 'var(--font-body)' }}>
                    Monday – Saturday: 9:00 AM – 7:00 PM<br />
                    Sunday: 10:00 AM – 2:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div
              className="overflow-hidden relative"
              style={{ border: '1px solid rgba(201,168,76,0.2)', height: 220 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8!2d72.8607!3d19.0477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8c43b89c3d9%3A0x0!2sSion%2C%20Mumbai%2C%20Maharashtra%20400022!5e0!3m2!1sen!2sin!4v1622000000000"
                width="100%"
                height="220"
                style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(80%)' }}
                allowFullScreen
                loading="lazy"
                title="Bhoomi Fabricator Location"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 reveal-right">
            <div
              className="p-8 lg:p-10"
              style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              {submitted ? (
                <div className="text-center py-16">
                  <div
                    className="w-16 h-16 flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'rgba(201,168,76,0.15)', border: '2px solid rgba(201,168,76,0.5)' }}
                  >
                    <CheckCircle2 size={28} style={{ color: '#C9A84C' }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#F5F0E8', fontFamily: 'var(--font-display)' }}>
                    Message Received!
                  </h3>
                  <p style={{ color: '#8A8A8A', fontFamily: 'var(--font-body)' }}>
                    Thank you for reaching out. Sanjay or our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2" style={{ color: '#F5F0E8', fontFamily: 'var(--font-display)' }}>
                      Request a Free Quote
                    </h2>
                    <p className="text-sm" style={{ color: '#6A6A6A', fontFamily: 'var(--font-body)' }}>
                      Fill in the details below and we'll respond within 24 hours.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#8A8A8A', fontFamily: 'var(--font-mono)' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Full Name"
                        className="w-full px-4 py-3 text-sm outline-none transition-all duration-300"
                        style={{
                          background: '#1A1A1A',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: '#F5F0E8',
                          fontFamily: 'var(--font-body)',
                        }}
                        onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#8A8A8A', fontFamily: 'var(--font-mono)' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 text-sm outline-none transition-all duration-300"
                        style={{
                          background: '#1A1A1A',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: '#F5F0E8',
                          fontFamily: 'var(--font-body)',
                        }}
                        onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#8A8A8A', fontFamily: 'var(--font-mono)' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 text-sm outline-none transition-all duration-300"
                        style={{
                          background: '#1A1A1A',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: '#F5F0E8',
                          fontFamily: 'var(--font-body)',
                        }}
                        onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#8A8A8A', fontFamily: 'var(--font-mono)' }}>
                        Service Required
                      </label>
                      <select
                        value={form.service}
                        onChange={e => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 text-sm outline-none transition-all duration-300"
                        style={{
                          background: '#1A1A1A',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: form.service ? '#F5F0E8' : '#6A6A6A',
                          fontFamily: 'var(--font-body)',
                        }}
                        onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                      >
                        <option value="">Select a service</option>
                        {services.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#8A8A8A', fontFamily: 'var(--font-mono)' }}>
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project — size, timeline, budget, and any specific requirements..."
                      className="w-full px-4 py-3 text-sm outline-none transition-all duration-300 resize-none"
                      style={{
                        background: '#1A1A1A',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: '#F5F0E8',
                        fontFamily: 'var(--font-body)',
                      }}
                      onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full justify-center"
                  >
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
