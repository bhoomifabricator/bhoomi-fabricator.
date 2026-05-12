import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bhoomi Fabricator | Exhibition Stalls & Interior Design Mumbai',
  description: 'Bhoomi Fabrication — Trusted name in creative fabrication, exhibition stall design, 3D visualization, interior design, construction and custom carpentry in Mumbai.',
  keywords: 'exhibition stall design Mumbai, fabrication Mumbai, 3D visualization, interior design, carpentry, Bhoomi Fabricator, Sion Mumbai',
  openGraph: {
    title: 'Bhoomi Fabricator | Exhibition Stalls & Interior Design Mumbai',
    description: 'Creative fabrication and turnkey project execution — delivering high-quality exhibition designs across Mumbai.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
