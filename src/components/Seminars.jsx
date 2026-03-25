import { FiCalendar, FiMapPin, FiMonitor } from 'react-icons/fi'

// ← REPLACE all entries with your actual seminars/trainings
const seminars = [
  {
    title: 'Scholars\' Values Formation Orientation',
    organizer: 'DOST-SEI',
    date: 'February 2025',
    location: 'Zoom / Virtual',
    type: 'Webinar',
    tags: ['Social Responsibility', 'Community Building'],
  },
  {
    title: 'Cyber-Aware, Cyber-Safe: Strengthening Our Digital Defenses',
    organizer: 'Computer Engineering Student Society (CoESS)',
    date: 'October 2024',
    location: 'On-campus',
    type: 'Seminar',
    tags: ['Cybersecurity Awareness', 'Best Practices'],
  },
  {
    title: 'IoT and Embedded Systems Workshop',
    organizer: 'IEEE Philippines',
    date: 'July 2024',
    location: 'Online / Virtual',
    type: 'Workshop',
    tags: ['IoT', 'Embedded Systems', 'Arduino'],
  },
  {
    title: 'Web Development Bootcamp',
    organizer: 'Google Developers Group',
    date: 'March 2024',
    location: 'Cebu City',
    type: 'Bootcamp',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Career Readiness Seminar',
    organizer: 'University Career Center',
    date: 'February 2024',
    location: 'On-campus',
    type: 'Seminar',
    tags: ['Career', 'Professional Development'],
  },
]

const typeColors = {
  Seminar: 'var(--cyan-accent)',
  Training: 'var(--blue-bright)',
  Workshop: '#a78bfa',
  Bootcamp: '#34d399',
}

export default function Seminars() {
  return (
    <section id="seminars" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb" style={{
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
        bottom: '0%',
        left: '30%',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-label">
          <FiMonitor size={12} /> Seminars & Trainings
        </div>
        <h2 className="section-title">
          Learning &amp; <span>Development</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {seminars.map((s, i) => (
            <div key={i} className="card">
              {/* Type badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  color: typeColors[s.type] || 'var(--blue-bright)',
                  background: `${typeColors[s.type]}18`,
                  border: `1px solid ${typeColors[s.type]}33`,
                  padding: '4px 10px',
                  borderRadius: 4,
                  textTransform: 'uppercase',
                }}>{s.type}</span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--white)',
                marginBottom: 8,
                lineHeight: 1.4,
              }}>{s.title}</h3>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: 'var(--blue-light)',
                marginBottom: 16,
              }}>{s.organizer}</p>

              <div style={{ display: 'flex', gap: 20, marginBottom: 20, flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.8rem', color: 'var(--white-dim)', fontFamily: 'var(--font-body)' }}>
                  <FiCalendar size={12} /> {s.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.8rem', color: 'var(--white-dim)', fontFamily: 'var(--font-body)' }}>
                  <FiMapPin size={12} /> {s.location}
                </span>
              </div>

              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {s.tags.map(tag => (
                  <span key={tag} className="tag" style={{ fontSize: '0.7rem' }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}