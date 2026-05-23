'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(20,20,20,0.97)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className=" h-12 overflow-hidden ">
            <img src="/logo2.png" alt="Bhoomi Fabricator logo" className="w-full h-full object-cover" />
          </div>
          {/* <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: '#F5F0E8', lineHeight: 1 }}>
              Bhoomi
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.18em', color: '#C9A84C', textTransform: 'uppercase' }}>
              Fabricator
            </div>
          </div> */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-medium tracking-wide transition-colors ${
                pathname === link.href ? 'active' : ''
              }`}
              style={{
                color: pathname === link.href ? '#C9A84C' : '#C8C0B0',
                fontFamily: 'var(--font-body)',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+91"
            className="flex items-center gap-2 text-sm"
            style={{ color: '#8A8A8A', fontFamily: 'var(--font-body)' }}
          >
            <Phone size={14} style={{ color: '#C9A84C' }} />
            <span>+91 84509 91235</span>
          </a>
          <Link href="/contact" className="btn-gold">
            <span>Get Quote</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2"
          style={{ color: '#C9A84C' }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="lg:hidden transition-all duration-400 overflow-hidden"
        style={{
          maxHeight: open ? '400px' : '0',
          background: 'rgba(20,20,20,0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: open ? '1px solid rgba(201,168,76,0.2)' : 'none',
        }}
      >
        <nav className="flex flex-col gap-0 px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-4 text-base font-medium"
              style={{
                color: pathname === link.href ? '#C9A84C' : '#C8C0B0',
                fontFamily: 'var(--font-body)',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="btn-gold mt-4">
            <span>Get a Free Quote</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
