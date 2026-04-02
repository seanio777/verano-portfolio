import { FiMail, FiPhone, FiUser } from 'react-icons/fi'

// ← REPLACE with your actual references
// photo: put the filename e.g. 'ref-reyes.jpg' (place in /public/references/)
// or leave as '' to show a placeholder silhouette
const references = [
  {
    name: 'Dr. Jennifer B. Enriquez',
    position: 'Program Chair, BS Computer Engineering',
    institution: 'Technological Institute of the Philippines - Manila',
    email: 'jdelacruz@tip.edu.ph',
    phone: '+63 9XX XXX XXXX',
    relation: 'Program Chair',
    photo: '/prog-chair.jpg', // ← e.g. '/references/ref-delacruz.jpg'
  },
  {
    name: 'Dr. Maria Santos',
    position: 'Professor, Electronics Engineering',
    institution: 'Technological Institute of the Philippines – Manila',
    email: 'msantos@tip.edu.ph',
    phone: '+63 9XX XXX XXXX',
    relation: 'Faculty Reference',
    photo: '',
  },
  {
    name: 'Engr. Pedro Reyes',
    position: 'Industry Supervisor',
    institution: 'Company / Organization Name',
    email: 'preyes@company.com',
    phone: '+63 9XX XXX XXXX',
    relation: 'Industry Reference',
    photo: '',
  },
]

export default function References() {
  return (
    <>
      <section id="references" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" style={{
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(30,91,255,0.08) 0%, transparent 70%)',
          bottom: '0', right: '10%',
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

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
            gap: 24,
          }}>
            {references.map((ref, i) => (
              <div key={i} className="card">

                {/* ── Photo / Placeholder ── */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                  <div style={{
                    width: 64,
                    height: 64,
                    borderRadius: 12,
                    overflow: 'hidden',
                    border: '2px solid var(--blue-border)',
                    flexShrink: 0,
                    background: 'linear-gradient(135deg, rgba(30,91,255,0.15), rgba(0,212,255,0.08))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    transition: 'border-color 0.3s ease',
                  }}>
                    {ref.photo ? (
                      // ── Actual photo ──
                      <img
                        src={ref.photo}
                        alt={ref.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'top',
                        }}
                        onError={(e) => {
                          // fallback to silhouette if image fails
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                    ) : null}

                    {/* ── Silhouette placeholder (shown when no photo or photo fails) ── */}
                    <div style={{
                      display: ref.photo ? 'none' : 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%',
                      gap: 2,
                    }}>
                      {/* Head */}
                      <div style={{
                        width: 22, height: 22,
                        borderRadius: '50%',
                        background: 'rgba(74, 111, 165, 0.4)',
                        border: '1px solid rgba(74, 111, 165, 0.3)',
                      }} />
                      {/* Body */}
                      <div style={{
                        width: 34, height: 18,
                        borderRadius: '10px 10px 0 0',
                        background: 'rgba(74, 111, 165, 0.25)',
                        border: '1px solid rgba(74, 111, 165, 0.2)',
                        marginTop: 2,
                      }} />
                    </div>
                  </div>

                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1rem',
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

                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--blue-light)', marginBottom: 4 }}>
                  {ref.position}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--white-dim)', marginBottom: 20, fontStyle: 'italic' }}>
                  {ref.institution}
                </p>

                <div style={{
                  borderTop: '1px solid var(--blue-border)',
                  paddingTop: 16,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}>
                  <a href={`mailto:${ref.email}`} style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    fontSize: '0.82rem', color: 'var(--white-muted)',
                    textDecoration: 'none', fontFamily: 'var(--font-body)',
                    transition: 'color 0.3s ease', cursor: 'none',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan-accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--white-muted)'}
                  >
                    <FiMail size={13} /> {ref.email}
                  </a>
                  <span style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    fontSize: '0.82rem', color: 'var(--white-muted)', fontFamily: 'var(--font-body)',
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
      <footer style={{ padding: '40px 0', borderTop: '1px solid var(--blue-border)', position: 'relative' }}>
        <div className="container" style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 16,
        }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', color: 'var(--white-dim)', letterSpacing: '0.1em' }}>
            © {new Date().getFullYear()} Jose Antonio C. Verano — All Rights Reserved
          </span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--white-dim)' }}>
            BS Computer Engineering • Digital Portfolio
          </span>
        </div>
      </footer>
    </>
  )
}