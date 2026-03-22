import { FiAward, FiStar } from 'react-icons/fi'
import { FaTrophy, FaMedal } from 'react-icons/fa'

// ← REPLACE with your actual achievements
const achievements = [
  {
    title: "Dean's List",
    subtitle: '1st & 2nd Semester AY 2023-2024',
    description: 'Recognized for outstanding academic performance with a GWA of 1.XX, qualifying for the Dean\'s List.',
    icon: <FaTrophy size={20} />,
    color: '#fbbf24',
  },
  {
    title: 'Best Capstone Project',
    subtitle: 'Department of CpE – 2024',
    description: 'Awarded Best Project in the Computer Engineering Department for the development of an IoT-based monitoring system.',
    icon: <FiAward size={20} />,
    color: 'var(--cyan-accent)',
  },
  {
    title: 'Programming Contest Finalist',
    subtitle: 'Regional ICT Competition 2023',
    description: 'Reached the finals of the regional programming competition, placing in the top 5 among university-level participants.',
    icon: <FaMedal size={20} />,
    color: '#a78bfa',
  },
  {
    title: 'Academic Excellence Award',
    subtitle: 'Senior High School Graduation 2022',
    description: 'Graduated with academic excellence from the STEM strand, recognized as one of the top students in the batch.',
    icon: <FiStar size={20} />,
    color: 'var(--blue-bright)',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="grid-bg" />
      <div className="glow-orb" style={{
        width: 500,
        height: 500,
        background: 'radial-gradient(circle, rgba(30,91,255,0.1) 0%, transparent 70%)',
        top: '50%',
        right: '-10%',
        transform: 'translateY(-50%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-label">
          <FiAward size={12} /> Achievements
        </div>
        <h2 className="section-title">
          Awards &amp; <span>Recognition</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28 }}>
          {achievements.map((a, i) => (
            <div key={i} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
              {/* Number watermark */}
              <div style={{
                position: 'absolute',
                top: -10,
                right: 16,
                fontFamily: 'var(--font-display)',
                fontSize: '5rem',
                fontWeight: 900,
                color: 'rgba(30, 91, 255, 0.06)',
                lineHeight: 1,
                userSelect: 'none',
              }}>0{i + 1}</div>

              <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: `${a.color}18`,
                  border: `1px solid ${a.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: a.color,
                  flexShrink: 0,
                }}>
                  {a.icon}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--white)',
                    marginBottom: 4,
                  }}>{a.title}</h3>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.1em',
                    color: a.color,
                    marginBottom: 12,
                    textTransform: 'uppercase',
                  }}>{a.subtitle}</p>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    color: 'var(--white-muted)',
                    lineHeight: 1.7,
                  }}>{a.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}