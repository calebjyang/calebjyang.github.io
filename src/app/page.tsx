'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [year, setYear] = useState('')
  const [isLofiOn, setIsLofiOn] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  const toggleLofi = () => {
    setIsLofiOn(!isLofiOn)
    setToastMessage(isLofiOn ? 'lo‑fi off' : 'lo‑fi on ☕')
    setShowToast(true)
    setTimeout(() => setShowToast(false), 1500)
  }

  return (
    <div className="min-h-screen bg-bg text-ink font-inter">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-radial from-[#151a19] via-bg to-bg -z-10" />
      
      <div className="grid grid-cols-1 min-[980px]:grid-cols-[1fr_min(980px,92vw)_1fr] gap-0">
        {/* Header */}
        <header className="col-start-2 sticky top-0 z-10 backdrop-blur-md bg-gradient-to-b from-paper/80 to-paper/35 border-b border-white/6">
          <nav className="flex items-center justify-between px-6 py-3.5">
            <a className="brand flex items-center gap-2.5 font-bold tracking-wide" href="#">
              <span className="w-2.5 h-2.5 rounded-full bg-teal shadow-[0_0_12px_rgba(106,184,168,0.7)] animate-pulse" aria-hidden="true" />
              <span>calebyang.dev</span>
            </a>
            <nav aria-label="Primary" className="flex gap-4">
              <a href="#projects" className="opacity-85 hover:opacity-100 font-medium transition-opacity">Projects</a>
              <a href="#about" className="opacity-85 hover:opacity-100 font-medium transition-opacity">About</a>
              <a href="#contact" className="opacity-85 hover:opacity-100 font-medium transition-opacity">Contact</a>
              <a href="#secret" aria-label="Secret" className="opacity-85 hover:opacity-100 font-medium transition-opacity">?</a>
            </nav>
          </nav>
        </header>

        <main className="col-start-2">
          {/* Hero Section */}
          <section className="hero grid grid-cols-1 min-[820px]:grid-cols-[1.05fr_0.95fr] gap-7 items-center px-6 py-14 min-[820px]:py-14" aria-labelledby="intro">
            <div>
              <h1 id="intro" className="text-4xl min-[820px]:text-[42px] leading-tight m-0 mb-1.5 tracking-wide">
                Hi, I'm Caleb — I build apps that amaze and delight.
              </h1>
              <p className="tagline text-muted m-0 mb-4.5">
              I have a mission-driven mindset, collaborative spirit, and a passion for building products that make an impact. Let's create something together!
              </p>
              <div className="cta-row flex gap-3 flex-wrap">
                <a className="btn btn-primary inline-flex items-center gap-2.5 px-4 py-3 rounded-[14px] border border-white/8 bg-[#171c1b] text-ink font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-150 hover:-translate-y-0.5 hover:border-white/18 hover:shadow-[0_10px_28px_rgba(0,0,0,0.32)]" href="#projects">
                  View Projects
                </a>
                <a className="btn inline-flex items-center gap-2.5 px-4 py-3 rounded-[14px] border border-white/8 bg-[#171c1b] text-ink font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-150 hover:-translate-y-0.5 hover:border-white/18 hover:shadow-[0_10px_28px_rgba(0,0,0,0.32)]" href="mailto:hello@calebyang.dev">
                  Email Me
                </a>
                <a className="btn inline-flex items-center gap-2.5 px-4 py-3 rounded-[14px] border border-white/8 bg-[#171c1b] text-ink font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-150 hover:-translate-y-0.5 hover:border-white/18 hover:shadow-[0_10px_28px_rgba(0,0,0,0.32)]" href="#resume">
                  Résumé
                </a>
              </div>
            </div>
            
            {/* Retro Terminal */}
                          <div className="kiosk bg-gradient-to-b from-[#171c1b] to-[#0f1312] border border-white/6 rounded-custom shadow-custom relative overflow-hidden" role="group" aria-label="Retro Preview">
                <div className="before:content-[''] before:absolute before:inset-0 before:bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_2px,transparent_2px,transparent_4px)] before:pointer-events-none before:mix-blend-soft-light" />
                <div className="kiosk-head flex items-center justify-center px-4 py-1.5 relative">
                  <span className="text-xs text-muted font-mono">Caleb's Terminal</span>
                  <div className="absolute right-4 flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56] opacity-60"></span>
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-60"></span>
                    <span className="w-3 h-3 rounded-full bg-[#27ca3f] opacity-60"></span>
                  </div>
                </div>
                <div className="screen p-4">
                <div className="terminal font-mono text-sm bg-[#0b0f0e] border border-white/6 rounded-[14px] p-4 text-yellow min-h-[220px] relative overflow-auto">
                  <div>$ npm run caleb</div>
                  <div className="mt-2.5 text-muted">&gt; next dev — ready on <span className="text-teal">http://localhost:3000</span></div>
                  <div>&gt; compiled successfully!</div>
                  <div>&gt; loading: <span className="text-peach">AAConnect</span>, <span className="text-peach">WebRegRet</span>, and 2 others...</div>
                  <div className="mt-3 text-muted">&gt; enjoy your stay ;)</div>
                  <div className="mt-2">$ <span className="caret inline-block w-2 h-[1.1em] bg-yellow ml-1 animate-blink align-text-bottom" /></div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section px-4 sm:px-6 py-6 sm:py-9" aria-labelledby="proj">
            <h2 id="proj" className="text-2xl m-0 mb-3.5 tracking-wide">Selected Projects</h2>
            <div className="projects grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Project 1 */}
              <article className="card bg-paper border border-white/6 rounded-custom p-3 sm:p-4 shadow-custom transition-all duration-150 hover:-translate-y-0.5 hover:border-white/12">
                <a href="https://aa-connect-xi.vercel.app/" target="_blank" rel="noopener noreferrer" className="thumb block aspect-video rounded-xl overflow-hidden object-cover border border-white/6 mb-3">
                  <img src="/images/aaconnect-screenshot.png" alt="AAConnect app interface showing Quick Actions and Upcoming Events" className="w-full h-full object-cover" />
                </a>
                <h3 className="m-0 mb-1.5">AAConnect</h3>
                <p className="m-0 text-muted">Next.js + Firebase app to centralize fellowship events, signups, and ride coordination with an auto‑carpool algorithm.</p>
                <div className="chips flex gap-2 flex-wrap mt-2.5">
                  <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">Next.js</span>
                  <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">Firebase</span>
                  <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">Auth</span>
                  <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">Carpooling</span>
                </div>
              </article>

              {/* Project 2 */}
              <article className="card bg-paper border border-white/6 rounded-custom p-3 sm:p-4 shadow-custom transition-all duration-150 hover:-translate-y-0.5 hover:border-white/12">
                <a href="https://webregret.vercel.app/" target="_blank" rel="noopener noreferrer" className="thumb block aspect-video rounded-xl overflow-hidden object-cover border border-white/6 mb-3">
                  <img src="/images/webregret-screenshot.png" alt="WebRegRet UCI tuition-waste calculator interface" className="w-full h-full object-cover" />
                </a>
                <h3 className="m-0 mb-1.5">WebRegRet</h3>
                <p className="m-0 text-muted">A quirky UCI tuition‑waste calculator — crisp UI, clear messaging, and surprisingly useful insights for students.</p>
                <div className="chips flex gap-2 flex-wrap mt-2.5">
                  <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">TypeScript</span>
                  <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">React</span>
                  <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">Vercel</span>
                </div>
              </article>

              {/* Project 3 */}
              <article className="card bg-paper border border-white/6 rounded-custom p-3 sm:p-4 shadow-custom transition-all duration-150 hover:-translate-y-0.5 hover:border-white/12">
                <a href="https://double-a-discourse.vercel.app/" target="_blank" rel="noopener noreferrer" className="thumb block aspect-video rounded-xl overflow-hidden object-cover border border-white/6 mb-3">
                  <img src="/images/double-a-discourse-screenshot.png" alt="Double-A-Discourse podcast hosting site interface" className="w-full h-full object-cover" />
                </a>
                <h3 className="m-0 mb-1.5">Double-A-Discourse Podcast</h3>
                <p className="m-0 text-muted">A hosting site for my podcast, where I interview guests about their backgrounds, stories, and faith journeys</p>
                <div className="chips flex gap-2 flex-wrap mt-2.5">
                  <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">Audio Player</span>
                  <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">Branding</span>
                  <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">Scheduling</span>
                </div>
              </article>

              {/* Project 4 */}
              <article className="card bg-paper border border-white/6 rounded-custom p-3 sm:p-4 shadow-custom transition-all duration-150 hover:-translate-y-0.5 hover:border-white/12">
                <img src="/images/texas-hold-screenshot.png" alt="Texas Hold Your Horses multiplayer card game interface" className="thumb block aspect-video rounded-xl overflow-hidden object-cover border border-white/6 mb-3" />
                <h3 className="m-0 mb-1.5">Texas Hold Your Horses</h3>
                <p className="m-0 text-muted">Multiplayer web‑based card game with horse‑race‑themed betting rounds and real‑time play.</p>
                <div className="chips flex gap-2 flex-wrap mt-2.5">
                  <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">WebSockets</span>
                  <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">Node</span>
                  <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">Game Design</span>
                </div>
              </article>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="section px-4 sm:px-6 py-6 sm:py-9" aria-labelledby="about-title">
            <h2 id="about-title" className="text-2xl m-0 mb-3.5 tracking-wide">About</h2>
            <div className="card col-span-1 col-start-1 col-end-[-1] bg-paper border border-white/6 rounded-custom p-4 shadow-custom">
              <p className="m-0">Hey there! I’m Caleb Yang, a CS senior at UC Irvine (graduating Dec. 2025). I build fast, friendly web apps with TypeScript, Next.js, and Firebase — prioritizing details like performance, accessibility, and clean, testable code. I love working with people, so don't hesitate to reach out!</p>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section px-4 sm:px-6 py-6 sm:py-9" aria-labelledby="contact-title">
            <h2 id="contact-title" className="text-2xl m-0 mb-3.5 tracking-wide">Contact</h2>
            <div className="card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-paper border border-white/6 rounded-custom p-4 shadow-custom">
              <div>
                <p className="m-0">Open to full-time positions starting 2026. Best reached via email.</p>
                <div className="social flex gap-3 mt-2.5">
                  <a href="mailto:hello@calebyang.dev" className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">Email</a>
                  <a href="https://github.com/calebjyang" className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6" target="_blank" rel="noopener">GitHub</a>
                  <a href="https://www.linkedin.com/in/calebjyang/" className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6" target="_blank" rel="noopener">LinkedIn</a>
                </div>
              </div>
              <a className="btn btn-primary inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-[14px] border border-white/8 bg-[#171c1b] text-ink font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-150 hover:-translate-y-0.5 hover:border-white/18 hover:shadow-[0_10px_28px_rgba(0,0,0,0.32)]" href="mailto:hello@calebyang.dev">
                Let's talk
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="col-start-2 text-muted px-4 sm:px-6 py-8 pb-15">
          <div className="foot-grid grid grid-cols-1 sm:grid-cols-[1fr_auto] items-center gap-4 sm:gap-0">
            <small>© {year} Caleb Yang. Built with love, tea, and tidy pull requests.</small>
            <div className="social flex gap-3 justify-center sm:justify-start">
              <a href="#" className="opacity-85 hover:opacity-100 transition-opacity">RSS</a>
              <a href="#" className="opacity-85 hover:opacity-100 transition-opacity">/now</a>
              <a href="#secret" id="secret" className="opacity-85 hover:opacity-100 transition-opacity" onClick={(e) => { e.preventDefault(); toggleLofi(); }}>?</a>
            </div>
          </div>
        </footer>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed left-1/2 bottom-[22px] transform -translate-x-1/2 bg-[#0f1312] text-ink px-3.5 py-2.5 border border-white/10 rounded-xl shadow-custom z-[9999] opacity-0 animate-in slide-in-from-bottom-2 duration-200">
          {toastMessage}
        </div>
      )}
    </div>
  )
}
