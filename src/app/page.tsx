'use client'

import React, { useState, useEffect } from 'react'

export default function Home() {
  const [year, setYear] = useState('')
  const [isLofiOn, setIsLofiOn] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  
  // Terminal state
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalHistory, setTerminalHistory] = useState([
    '$ npm run caleb',
    '> next build — ready on http://calebyang.dev',
    '> compiled successfully!',
    '> Hello! Welcome to my portfolio. Type "help" for available commands.'
  ])
  const [terminalPrompt, setTerminalPrompt] = useState('$ ')
  const terminalRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  // Auto-scroll terminal to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalHistory])

  const toggleLofi = () => {
    const newLofiState = !isLofiOn
    setIsLofiOn(newLofiState)
    setToastMessage(newLofiState ? 'lo‑fi on ☕' : 'lo‑fi off')
    setShowToast(true)
    setTimeout(() => setShowToast(false), 1500)
  }

  const handleTerminalKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const command = terminalInput.trim()
      if (command) {
        let response = ''
        
        switch (command.toLowerCase()) {
          case 'help':
            response = 'Available commands: help, about, projects, contact, clear, npm run caleb'
            break
          case 'about':
            response = 'CS senior at UC Irvine. Love building things that bring people together!'
            break
          case 'projects':
            response = 'Check out my featured projects below ↓'
            break
          case 'contact':
            response = 'Reach me at kb@jaymoo.com or connect on LinkedIn!'
            break
          case 'clear':
            setTerminalHistory([])
            setTerminalInput('')
            return
          case 'npm run caleb':
            response = '> Hello! Welcome to my portfolio. Type "help" for available commands.'
            break
          case 'whoami':
            response = 'caleb'
            break
          case 'ls':
            response = 'projects/  about.md  contact.txt  skills.json'
            break
          case 'pwd':
            response = '/home/caleb/portfolio'
            break
          default:
            response = `Command not found: ${command}. Type "help" for available commands.`
        }
        
        setTerminalHistory(prev => [...prev, `${terminalPrompt}${command}`, response])
      } else {
        setTerminalHistory(prev => [...prev, `${terminalPrompt}${command}`])
      }
      setTerminalInput('')
    }
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
              I have a mission-driven mindset, collaborative spirit, and a passion for building products that make an impact. Let's create something beautiful together!
              </p>
                              <div className="cta-row flex gap-3 flex-wrap">
                  <a className="btn btn-primary inline-flex items-center gap-2.5 px-4 py-3 rounded-[14px] border border-white/8 bg-[#171c1b] text-ink font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-150 hover:-translate-y-0.5 hover:border-white/18 hover:shadow-[0_10px_28px_rgba(0,0,0,0.32)]" href="https://github.com/calebjyang?tab=repositories" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a className="btn inline-flex items-center gap-2.5 px-4 py-3 rounded-[14px] border border-white/8 bg-[#171c1b] text-ink font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-150 hover:-translate-y-0.5 hover:border-white/18 hover:shadow-[0_10px_28px_rgba(0,0,0,0.32)]" href="https://www.linkedin.com/in/calebjyang/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <a className="btn inline-flex items-center gap-2.5 px-4 py-3 rounded-[14px] border border-white/8 bg-[#171c1b] text-ink font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-150 hover:-translate-y-0.5 hover:border-white/18 hover:shadow-[0_10px_28px_rgba(0,0,0,0.32)]" href="/resume">
                    Résumé
                  </a>
                </div>
            </div>
            
            {/* Portrait Photo */}
            <div className="flex justify-center items-center">
              <div className="w-64 h-64 min-[820px]:w-72 min-[820px]:h-72 rounded-full border-2 border-white/12 shadow-custom overflow-hidden">
                <img 
                  src="/images/portrait.png" 
                  alt="Caleb Yang - Software Developer" 
                  className="w-full h-full object-cover"
                  // style={{ transform: 'scale(1.1)' }}
                />
              </div>
            </div>
          </section>

          {/* Terminal Section */}
          <section className="flex justify-center px-6 py-8">
            <div className="kiosk bg-gradient-to-b from-[#171c1b] to-[#0f1312] border border-white/6 rounded-custom shadow-custom relative overflow-hidden max-w-md w-full" role="group" aria-label="Retro Preview">
              <div className="before:content-[''] before:absolute before:inset-0 before:bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_2px,transparent_2px,transparent_4px)] before:pointer-events-none before:mix-blend-soft-light" />
              <div className="kiosk-head flex items-center justify-center px-4 py-1.5 relative">
                <span className="text-xs text-muted font-mono">Caleb's Terminal</span>
                <div className="absolute left-4 flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56] opacity-60"></span>
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-60"></span>
                  <span className="w-3 h-3 rounded-full bg-[#27ca3f] opacity-60"></span>
                </div>
              </div>
              <div className="screen p-4">
                <div 
                  ref={terminalRef} 
                  className="terminal font-mono text-sm bg-[#0b0f0e] border border-white/6 rounded-[14px] p-4 text-yellow min-h-[220px] max-h-[220px] relative overflow-auto focus-within:ring-2 focus-within:ring-teal/30 scrollbar-thin scrollbar-track-[#0b0f0e] scrollbar-thumb-white/20 hover:scrollbar-thumb-white/30 cursor-text"
                  onClick={() => document.getElementById('terminal-input')?.focus()}
                >
                  <div className="space-y-1">
                    {terminalHistory.map((line, index) => (
                      <div key={index} className={line.startsWith('$') ? 'text-yellow' : line.startsWith('>') ? 'text-muted' : 'text-teal'}>
                        {line}
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center">
                    <span className="text-yellow">{terminalPrompt}</span>
                    <input
                      id="terminal-input"
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      onKeyPress={handleTerminalKeyPress}
                      className="bg-transparent text-yellow outline-none flex-1 font-mono text-sm caret-yellow ml-2"
                      spellCheck={false}
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      placeholder=""
                      autoFocus
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section px-4 sm:px-6 py-6 sm:py-9" aria-labelledby="proj">
            <h2 id="proj" className="text-2xl m-0 mb-3.5 tracking-wide">Featured Projects</h2>
            <div className="projects grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Project 1 */}
              <a href="https://aa-connect-xi.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
                <article className="card bg-paper border border-white/6 rounded-custom p-3 sm:p-4 shadow-custom transition-all duration-150 hover:-translate-y-0.5 hover:border-white/12">
                  <div className="thumb block aspect-video rounded-xl overflow-hidden object-cover border border-white/6 mb-3">
                    <img src="/images/aaconnect-screenshot.png" alt="AAConnect app interface showing Quick Actions and Upcoming Events" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="m-0 mb-1.5">AAConnect</h3>
                  <p className="m-0 text-muted">Next.js + Firebase cross-platform app to streamline community events, signups, and ride coordination with an auto‑carpool algorithm.</p>
                  <div className="chips flex gap-2 flex-wrap mt-2.5">
                    <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">Next.js</span>
                    <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">Firebase</span>
                    <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">Auth</span>
                    <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">Carpooling</span>
                  </div>
                </article>
              </a>

              {/* Project 2 */}
              <a href="https://webregret.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
                <article className="card bg-paper border border-white/6 rounded-custom p-3 sm:p-4 shadow-custom transition-all duration-150 hover:-translate-y-0.5 hover:border-white/12">
                  <div className="thumb block aspect-video rounded-xl overflow-hidden object-cover border border-white/6 mb-3">
                    <img src="/images/webregret-screenshot.png" alt="WebRegRet UCI tuition-waste calculator interface" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="m-0 mb-1.5">WebRegRet</h3>
                  <p className="m-0 text-muted">A sarcastic college tuition‑waste calculator — engaging UI, intuitive design, and surprisingly useful insights for students.</p>
                  <div className="chips flex gap-2 flex-wrap mt-2.5">
                    <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">TypeScript</span>
                    <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">React</span>
                    <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">Vercel</span>
                  </div>
                </article>
              </a>

              {/* Project 3 */}
              <a href="https://double-a-discourse.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
                <article className="card bg-paper border border-white/6 rounded-custom p-3 sm:p-4 shadow-custom transition-all duration-150 hover:-translate-y-0.5 hover:border-white/12">
                  <div className="thumb block aspect-video rounded-xl overflow-hidden object-cover border border-white/6 mb-3">
                    <img src="/images/double-a-discourse-screenshot.png" alt="Double-A-Discourse podcast hosting site interface" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="m-0 mb-1.5">Double-A-Discourse Podcast</h3>
                  <p className="m-0 text-muted">A hosting site for my podcast, where I interview guests about their backgrounds, stories, and faith journeys.</p>
                  <div className="chips flex gap-2 flex-wrap mt-2.5">
                    <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">Audio Player</span>
                    <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">Branding</span>
                    <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">Social Media</span>
                  </div>
                </article>
              </a>

              {/* Project 4 */}
              <a href="https://github.com/calebjyang/texas-hold-your-horses" target="_blank" rel="noopener noreferrer" className="block">
                <article className="card bg-paper border border-white/6 rounded-custom p-3 sm:p-4 shadow-custom transition-all duration-150 hover:-translate-y-0.5 hover:border-white/12">
                  <div className="thumb block aspect-video rounded-xl overflow-hidden object-cover border border-white/6 mb-3">
                    <img src="/images/texas-hold-screenshot.png" alt="Texas Hold-Your-Horses multiplayer card game interface" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="m-0 mb-1.5">Texas Hold Your Horses</h3>
                  <p className="m-0 text-muted">Multiplayer web‑based card game with horse‑race‑themed betting rounds and real‑time play.</p>
                  <div className="chips flex gap-2 flex-wrap mt-2.5">
                    <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">WebSockets</span>
                    <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">Node</span>
                    <span className="chip inline-flex items-center gap-2 font-mono text-xs text-muted bg-[#0f1312] px-2.5 py-1.5 rounded-full border border-white/6">Game Design</span>
                  </div>
                </article>
              </a>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="section px-4 sm:px-6 py-6 sm:py-9" aria-labelledby="about-title">
            <h2 id="about-title" className="text-2xl m-0 mb-3.5 tracking-wide">About</h2>
            <div className="card col-span-1 col-start-1 col-end-[-1] bg-paper border border-white/6 rounded-custom p-4 shadow-custom">
              <p className="m-0">Hey there! I'm I’m Caleb — a CS senior at UC Irvine (graduating Dec 2025). I love bringing ideas to life with 1's and 0's, but even more than that, I love building things that bring people together. Whether it’s coding, hosting my podcast, or serving in my campus fellowship, I’m always chasing ways to connect people and create something meaningful. Beyond that, you can probably find me playing Spikeball or jamming out with my friends. I’m excited for what’s ahead, and I’d love to meet others with a similar heart for creativity, community, and powerful storytelling.</p>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section px-4 sm:px-6 py-6 sm:py-9" aria-labelledby="contact-title">
            <h2 id="contact-title" className="text-2xl m-0 mb-3.5 tracking-wide">Contact</h2>
            <div className="card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-paper border border-white/6 rounded-custom p-4 shadow-custom">
              <div>
                <p className="m-0">I'm open to full-time positions starting spring 2026! You can reach me via email or LinkedIn.</p>
              </div>
              <a className="btn btn-primary inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-[14px] border border-white/8 bg-[#171c1b] text-ink font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-150 hover:-translate-y-0.5 hover:border-white/18 hover:shadow-[0_10px_28px_rgba(0,0,0,0.32)]" href="mailto:kb@jaymoo.com">
                Let's talk!
              </a>
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

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed left-1/2 bottom-[22px] transform -translate-x-1/2 bg-[#0f1312] text-ink px-3.5 py-2.5 border border-white/10 rounded-xl shadow-custom z-[9999] animate-in slide-in-from-bottom-2 duration-200">
          {toastMessage}
        </div>
      )}
    </div>
  )
}
