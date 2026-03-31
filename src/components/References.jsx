import { FiUser, FiMail, FiPhone } from 'react-icons/fi'

// ← REPLACE with your actual references
const references = [
  {
    name: 'Prof. Juan Dela Cruz',
    position: 'Program Chair, BS Computer Engineering',
    institution: 'Your University Name',
    email: 'jdelacruz@university.edu.ph',
    phone: '+63 9XX XXX XXXX',
    relation: 'Academic Adviser',
  },
  {
    name: 'Dr. Maria Santos',
    position: 'Professor, Electronics Engineering',
    institution: 'Your University Name',
    email: 'msantos@university.edu.ph',
    phone: '+63 9XX XXX XXXX',
    relation: 'Faculty Reference',
  },
  {
    name: 'Engr. Pedro Reyes',
    position: 'Industry Supervisor',
    institution: 'Company / Organization Name',
    email: 'preyes@company.com',
    phone: '+63 9XX XXX XXXX',
    relation: 'Industry Reference',
  },
]

export default function References() {
  return (
    <>
      <section id="references" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(30,91,255,0.08) 0%, transparent 70%)',
          bottom: '0',
          right: '10%',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label">
            <FiUser size={12} /> References
          </div>
          <h2 className="section-title">
            Character &amp; <span>References</span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            color: 'var(--white-muted)',
            maxWidth: 600,
            lineHeight: 1.8,
            marginTop: -40,
            marginBottom: 48,
          }}>
            The following individuals can attest to my academic performance, character, and professional capabilities. References are available upon request.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
            {references.map((ref, i) => (
              <div key={i} className="card">
                {/* Avatar */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                  <div style={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(30,91,255,0.3), rgba(0,212,255,0.2))',
                    border: '2px solid var(--blue-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--blue-light)',
                    fontSize: '1.1rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}>
                    {ref.name.split(' ').slice(-1)[0][0]}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: 'var(--white)',
                      marginBottom: 2,
                    }}>{ref.name}</h3>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.58rem',
                      letterSpacing: '0.1em',
                      color: 'var(--cyan-accent)',
                      textTransform: 'uppercase',
                    }}>{ref.relation}</span>
                  </div>
                </div>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  color: 'var(--blue-light)',
                  marginBottom: 4,
                }}>{ref.position}</p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  color: 'var(--white-dim)',
                  marginBottom: 20,
                  fontStyle: 'italic',
                }}>{ref.institution}</p>

                <div style={{
                  borderTop: '1px solid var(--blue-border)',
                  paddingTop: 16,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}>
                  <a href={`mailto:${ref.email}`} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: '0.82rem',
                    color: 'var(--white-muted)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    transition: 'color 0.3s ease',
                    cursor: 'none',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan-accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--white-muted)'}
                  >
                    <FiMail size={13} /> {ref.email}
                  </a>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: '0.82rem',
                    color: 'var(--white-muted)',
                    fontFamily: 'var(--font-body)',
                  }}>
                    <FiPhone size={13} /> {ref.phone}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 0',
        borderTop: '1px solid var(--blue-border)',
        position: 'relative',
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.75rem',
            color: 'var(--white-dim)',
            letterSpacing: '0.1em',
          }}>
            © {new Date().getFullYear()} JOSE ANTONIO VERANO — All Rights Reserved
          </span>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            color: 'var(--white-dim)',
          }}>
            BS Computer Engineering • Digital Portfolio
          </span>
        </div>
      </footer>
    </>
  )
}