'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ResumePage() {
  const [year, setYear] = useState('')

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <div className="min-h-screen bg-bg text-ink font-inter">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-radial from-[#151a19] via-bg to-bg -z-10" />
      
      <div className="grid grid-cols-1 min-[980px]:grid-cols-[1fr_min(980px,92vw)_1fr] gap-0">
        {/* Header */}
        <header className="col-start-2 sticky top-0 z-10 backdrop-blur-md bg-gradient-to-b from-paper/80 to-paper/35 border-b border-white/6">
          <nav className="flex items-center justify-between px-6 py-3.5">
            <Link href="/" className="brand flex items-center gap-2.5 font-bold tracking-wide">
              <span className="w-2.5 h-2.5 rounded-full bg-teal shadow-[0_0_12px_rgba(106,184,168,0.7)] animate-pulse" aria-hidden="true" />
              <span>calebyang.dev</span>
            </Link>
            <nav aria-label="Primary" className="flex gap-4">
              <Link href="/#projects" className="opacity-85 hover:opacity-100 font-medium transition-opacity">Projects</Link>
              <Link href="/#about" className="opacity-85 hover:opacity-100 font-medium transition-opacity">About</Link>
              <Link href="/#contact" className="opacity-85 hover:opacity-100 font-medium transition-opacity">Contact</Link>
            </nav>
          </nav>
        </header>

        <main className="col-start-2">
          {/* Resume Header */}
          <section className="px-6 py-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold tracking-wide mb-2">Résumé</h1>
                <p className="text-muted">Professional experience and skills</p>
              </div>
              <div className="flex gap-3">
                <Link 
                  href="/"
                  className="btn inline-flex items-center gap-2.5 px-4 py-3 rounded-[14px] border border-white/8 bg-[#171c1b] text-ink font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-150 hover:-translate-y-0.5 hover:border-white/18 hover:shadow-[0_10px_28px_rgba(0,0,0,0.32)]"
                >
                  ← Back Home
                </Link>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-flex items-center gap-2.5 px-4 py-3 rounded-[14px] border border-white/8 bg-[#171c1b] text-ink font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-150 hover:-translate-y-0.5 hover:border-white/18 hover:shadow-[0_10px_28px_rgba(0,0,0,0.32)]"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </section>

          {/* Resume Content */}
          <section className="px-6 pb-8">
            <div className="card bg-paper border border-white/6 rounded-custom p-4 shadow-custom">
              <div className="resume-embed bg-[#0f1312] border border-white/6 rounded-[14px] p-4">
                <iframe 
                  src="/resume.pdf" 
                  className="w-full h-[800px] border-0 rounded-lg"
                  title="Caleb Yang's Resume"
                />
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="col-start-2 text-muted px-4 sm:px-6 py-8 pb-15">
          <div className="foot-grid grid grid-cols-1 sm:grid-cols-[1fr_auto] items-center gap-4 sm:gap-0">
            <small>© {year} Caleb Yang. Built with love, tea, and tidy pull requests.</small>
            <div className="social flex gap-3 justify-center sm:justify-start">
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
