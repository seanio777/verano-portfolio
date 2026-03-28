import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About',        href: '#hero' },
  { label: 'Objective',    href: '#objective' },
  { label: 'Academic',     href: '#academic' },
  { label: 'Seminars',     href: '#seminars' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <nav style={{
        position:      'fixed',
        top:           0,
        left:          0,
        right:         0,
        zIndex:        1000,
        padding:       '18px 40px',
        display:       'flex',
        alignItems:    'center',
        justifyContent:'space-between',
        background:    scrolled || menuOpen ? 'rgba(2, 11, 24, 0.95)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
        borderBottom:  scrolled || menuOpen ? '1px solid rgba(26, 58, 107, 0.5)' : 'none',
        transition:    'all 0.4s ease',
      }}>
        <a href="#hero" onClick={handleLinkClick} style={{
          fontFamily:     'var(--font-display)',
          fontSize:       '1rem',
          fontWeight:     700,
          color:          'var(--white)',
          textDecoration: 'none',
          letterSpacing:  '0.15em',
          display:        'flex',
          alignItems:     'center',
          gap:            '8px',
          cursor:         'none',
        }}>
          <span style={{
            width:8, height:8, borderRadius:'50%',
            background:'var(--cyan-accent)', display:'inline-block',
            boxShadow:'0 0 10px var(--cyan-accent)',
            animation:'pulse-glow 2s infinite',
          }} />
          PORTFOLIO
        </a>

        <ul className="desktop-nav" style={{ display:'flex', listStyle:'none', gap:'32px', alignItems:'center' }}>
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} style={{
                fontFamily:'var(--font-heading)', fontSize:'0.85rem', fontWeight:500,
                color:'var(--white-muted)', textDecoration:'none', letterSpacing:'0.08em',
                textTransform:'uppercase', transition:'color 0.3s ease', cursor:'none',
              }}
                onMouseEnter={e => e.target.style.color = 'var(--cyan-accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--white-muted)'}
              >{link.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-primary" style={{ padding:'10px 22px', fontSize:'0.8rem' }}>Hire Me</a>
          </li>
        </ul>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
          style={{
            display:'none', background:'none',
            border:'1px solid var(--blue-border)', borderRadius:6,
            color:'var(--white)', width:40, height:40,
            alignItems:'center', justifyContent:'center',
            cursor:'none', fontSize:'1.2rem',
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile full-screen drawer */}
      <div style={{
        position:'fixed', top:0, left:0, right:0, bottom:0, zIndex:999,
        background:'rgba(2, 11, 24, 0.97)', backdropFilter:'blur(20px)',
        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
        gap:'8px', padding:'80px 40px 40px',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition:'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div className="grid-bg" style={{ opacity:0.4 }} />
        {navLinks.map((link, i) => (
          <a key={link.label} href={link.href} onClick={handleLinkClick} style={{
            fontFamily:'var(--font-heading)', fontSize:'1.8rem', fontWeight:700,
            color:'var(--white-muted)', textDecoration:'none', letterSpacing:'0.08em',
            textTransform:'uppercase', padding:'12px 0',
            borderBottom:'1px solid rgba(26, 58, 107, 0.3)',
            width:'100%', textAlign:'center', transition:'color 0.3s ease', cursor:'none',
            animation: menuOpen ? `fadeInUp 0.4s ease ${i * 0.06}s both` : 'none',
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan-accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--white-muted)'}
          >{link.label}</a>
        ))}
        <a href="#contact" onClick={handleLinkClick} className="btn-primary"
          style={{ marginTop:24, fontSize:'1rem', padding:'14px 40px' }}>
          Hire Me
        </a>
      </div>
    </>
  )
}