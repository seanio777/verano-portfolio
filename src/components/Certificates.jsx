import { FiExternalLink, FiShield } from 'react-icons/fi'

// ← REPLACE with your actual certificates
const certificates = [
  {
    title: 'Advent of Cyber 2025',
    issuer: 'TryHackMe',
    date: 'December 2025',
    credentialId: 'THM-7QSJU6KYRO',
    link: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-7QSJU6KYRO.pdf',
    category: 'Security',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'December 2025',
    credentialId: 'c35d5a4e-e50c-432c-a230-8870fc75a1ee',
    link: 'https://www.credly.com/badges/c35d5a4e-e50c-432c-a230-8870fc75a1ee/public_url',
    category: 'Security',
  },
]

const categoryColors = {
  Security: '#f87171',
  Marketing: '#fb923c',
  Programming: 'var(--cyan-accent)',
  Technical: 'var(--blue-bright)',
  'Web Dev': '#a78bfa',
  IoT: '#34d399',
}

export default function Certificates() {
  return (
    <section id="certificates" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb" style={{
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)',
        top: '20%',
        left: '10%',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-label">
          <FiShield size={12} /> Certificates
        </div>
        <h2 className="section-title">
          Licenses &amp; <span>Certifications</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
          {certificates.map((cert, i) => {
            const color = categoryColors[cert.category] || 'var(--blue-bright)'
            return (
              <div key={i} className="card" style={{ padding: '24px 28px' }}>
                {/* Top accent */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 16,
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.15em',
                    color: color,
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                    padding: '4px 10px',
                    borderRadius: 4,
                    textTransform: 'uppercase',
                  }}>{cert.category}</span>

                  {cert.link !== '#' && (
                    <a href={cert.link} target="_blank" rel="noreferrer" style={{
                      color: 'var(--white-dim)',
                      transition: 'color 0.3s ease',
                      cursor: 'none',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan-accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--white-dim)'}
                    >
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: 'var(--white)',
                  marginBottom: 6,
                  lineHeight: 1.4,
                }}>{cert.title}</h3>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  color: 'var(--blue-light)',
                  marginBottom: 16,
                }}>{cert.issuer}</p>

                <div style={{
                  borderTop: '1px solid var(--blue-border)',
                  paddingTop: 16,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--white-dim)', fontFamily: 'var(--font-body)' }}>
                    {cert.date}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.6rem',
                    color: 'var(--white-dim)',
                    letterSpacing: '0.05em',
                  }}>{cert.credentialId}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}