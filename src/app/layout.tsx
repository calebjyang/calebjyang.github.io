import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Caleb's Developer Portfolio",
  description: 'Software engineer portfolio — clean, minimal, cozy lo‑fi retro vibes.',
  keywords: ['software engineer', 'web developer', 'portfolio', 'react', 'next.js', 'typescript'],
  authors: [{ name: 'Caleb Yang' }],
  creator: 'Caleb Yang',
  openGraph: {
    title: "Caleb's Developer Portfolio",
    description: 'Software engineer portfolio — clean, minimal, cozy lo‑fi retro vibes.',
    type: 'website',
    url: 'https://calebjyang.github.io',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Caleb's Developer Portfolio",
    description: 'Software engineer portfolio — clean, minimal, cozy lo‑fi retro vibes.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
