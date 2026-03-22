import { FiAward } from 'react-icons/fi'
import { FaTrophy, FaMedal, FaStar, FaNewspaper } from 'react-icons/fa'

// ← REPLACE with your actual achievements
const achievements = [
  {
    title: "Dean's Lister",
    subtitle: '1st Semester AY 2024-2025',
    description: 'Recognized for outstanding academic performance with a GWA of 1.55, qualifying for the Dean\'s List.',
    icon: <FaTrophy size={20} />,
    color: '#fbbf24',
  },
  {
    title: '2nd Runner Up - Inhinyera\'s Shirt Design Competition',
    subtitle: 'Inhinyera - TIP Manila',
    description: 'Awarded 2nd runner up in the Shirt Design Competition held during the celebration of Women\'s Month and Inhinyera\'s 10th Founding Anniversary.',
    icon: <FaMedal size={20} />,
    color: '#cd7f32',
  },
  {
    title: 'With High Honors',
    subtitle: 'Senior High School Graduation | PNHS-Main',
    description: 'Graduated Senior High School With High Honors, demonstrated outstanding academic performance and consistent excellence throughout the entire program.',
    icon: <FaStar size={20} />,
    color: '#fbbf24',
  },
  {
    title: '5th Place - Division Schools Press Conference',
    subtitle: 'Pagwawasto at Pag-uulo ng Balita | Elementary',
    description: 'Placed 5th in the Division Schools Press Conference during elementary, competing in the Filipino journalism category of Pagwawasto at Pag-uulo ng Balita (News Editing and Headline Writing), demonstrating strong language proficiency and journalistic skills at the division level.',
    icon: <FaNewspaper size={20} />,
    color: '#60a5fa',
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