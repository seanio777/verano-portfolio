import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#hero' },
  { label: 'Objective', href: '#objective' },
  { label: 'Academic', href: '#academic' },
  { label: 'Seminars', href: '#seminars' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '18px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(2, 11, 24, 0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(26, 58, 107, 0.5)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      {/* Logo */}
      <a href="#hero" style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1rem',
        fontWeight: 700,
        color: 'var(--white)',
        textDecoration: 'none',
        letterSpacing: '0.15em',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <span style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'var(--cyan-accent)',
          display: 'inline-block',
          boxShadow: '0 0 10px var(--cyan-accent)',
          animation: 'pulse-glow 2s infinite',
        }} />
        PORTFOLIO
      </a>

      {/* Desktop nav */}
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '32px',
        alignItems: 'center',
      }} className="desktop-nav">
        {navLinks.map(link => (
          <li key={link.label}>
            <a href={link.href} style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem',
              fontWeight: 500,
              color: 'var(--white-muted)',
              textDecoration: 'none',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'color 0.3s ease',
              cursor: 'none',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--cyan-accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--white-muted)'}
            >{link.label}</a>
          </li>
        ))}
        <li>
          <a href="#contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.8rem' }}>
            Hire Me
          </a>
        </li>
      </ul>

      {/* Mobile toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: 'var(--white)',
          fontSize: '1.5rem',
          cursor: 'none',
        }}
        className="mobile-menu-btn"
      >☰</button>
    </nav>
  )
}