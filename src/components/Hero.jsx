import { FiDownload, FiArrowDown } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '100px',
    }}>
      {/* Background effects */}
      <div className="grid-bg" />
      <div className="glow-orb" style={{
        width: 600,
        height: 600,
        background: 'radial-gradient(circle, rgba(30,91,255,0.15) 0%, transparent 70%)',
        top: '50%',
        right: '-10%',
        transform: 'translateY(-50%)',
      }} />
      <div className="glow-orb" style={{
        width: 300,
        height: 300,
        background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
        bottom: '10%',
        left: '5%',
      }} />

      {/* Scanline effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 80, position: 'relative', zIndex: 2 }}>
        {/* Left: Text content */}
        <div style={{ flex: 1, animation: 'fadeInLeft 1s ease forwards' }}>
          {/* Status badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(0, 212, 255, 0.08)',
            border: '1px solid rgba(0, 212, 255, 0.2)',
            borderRadius: 4,
            padding: '8px 16px',
            marginBottom: 32,
          }}>
            <span style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#22c55e',
              boxShadow: '0 0 8px #22c55e',
            }} />
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              color: 'var(--cyan-accent)',
            }}>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          {/* Greeting */}
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.1rem',
            color: 'var(--white-muted)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}>Hello, I'm</p>

          {/* Name */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 900,
            lineHeight: 1,
            marginBottom: 8,
            letterSpacing: '-0.02em',
          }}>
            <span style={{ color: 'var(--white)' }}>JOSE ANTONIO</span>
            <br />
            <span style={{
              background: 'linear-gradient(135deg, var(--blue-bright), var(--cyan-accent))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>VERANO</span>
          </h1>

          {/* Title */}
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.2rem',
            fontWeight: 600,
            color: 'var(--blue-ice)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: 28,
          }}>
            BS Computer Engineering Student
          </div>

          {/* Bio */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            color: 'var(--white-muted)',
            lineHeight: 1.8,
            maxWidth: 500,
            marginBottom: 40,
          }}>
            {/* ← REPLACE THIS with your actual biography */}
            He is a passionate and driven Computer Engineering student at [Your University].
            Born on [Your Birthdate], he has always been fascinated by the intersection of
            hardware and software. He enrolled in BS Computer Engineering to pursue his dream
            of building intelligent systems that solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
            <a href="#contact" className="btn-primary">
              Get In Touch <FiArrowDown size={16} />
            </a>
            <a href="/resume.pdf" className="btn-outline" download>
              Download CV <FiDownload size={16} />
            </a>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              color: 'var(--white-dim)',
            }}>FOLLOW</span>
            <div style={{ width: 30, height: 1, background: 'var(--blue-border)' }} />
            {[
              { icon: <FaGithub size={18} />, href: 'https://github.com/yourusername', label: 'GitHub' },
              { icon: <FaLinkedin size={18} />, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
              { icon: <FaFacebook size={18} />, href: 'https://facebook.com/yourusername', label: 'Facebook' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
                color: 'var(--white-dim)',
                transition: 'color 0.3s ease',
                cursor: 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan-accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--white-dim)'}
              >{s.icon}</a>
            ))}
          </div>
        </div>

        {/* Right: Photo */}
        <div style={{ flexShrink: 0, animation: 'fadeInUp 1.2s ease forwards', position: 'relative' }}>
          {/* Decorative rings */}
          <div style={{
            position: 'absolute',
            inset: -20,
            borderRadius: '50%',
            border: '1px solid rgba(30, 91, 255, 0.2)',
          }} />
          <div style={{
            position: 'absolute',
            inset: -40,
            borderRadius: '50%',
            border: '1px solid rgba(30, 91, 255, 0.1)',
          }} />

          {/* Photo container */}
          <div style={{
            width: 320,
            height: 380,
            borderRadius: 20,
            overflow: 'hidden',
            border: '2px solid var(--blue-border)',
            background: 'var(--blue-card)',
            position: 'relative',
            animation: 'pulse-glow 4s infinite',
          }}>
            {/* Replace src with your actual photo import */}
            <img
              src="/profile.jpg"
              alt="Profile"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top',
              }}
              onError={(e) => {
                // Fallback if no image provided
                e.target.style.display = 'none'
                e.target.parentNode.style.display = 'flex'
                e.target.parentNode.style.alignItems = 'center'
                e.target.parentNode.style.justifyContent = 'center'
                e.target.parentNode.style.fontSize = '5rem'
                e.target.parentNode.innerHTML = '<span>👤</span>'
              }}
            />
            {/* Blue overlay gradient */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(2,11,24,0.6) 0%, transparent 60%)',
            }} />
          </div>

          {/* Floating stats */}
          <div style={{
            position: 'absolute',
            bottom: -20,
            left: -40,
            background: 'var(--blue-card)',
            border: '1px solid var(--blue-border)',
            borderRadius: 10,
            padding: '12px 20px',
          }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--cyan-accent)' }}>CPE</div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', color: 'var(--white-muted)', letterSpacing: '0.1em' }}>STUDENT</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: 40,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        animation: 'fadeInUp 1.5s ease forwards',
        zIndex: 2,
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.3em', color: 'var(--white-dim)' }}>SCROLL</span>
        <div style={{
          width: 1,
          height: 50,
          background: 'linear-gradient(to bottom, var(--blue-bright), transparent)',
          animation: 'fadeInUp 1.5s ease infinite',
        }} />
      </div>
    </section>
  )
}