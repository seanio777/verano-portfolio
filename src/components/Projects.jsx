import { FiGithub, FiExternalLink, FiCode, FiFolder } from 'react-icons/fi'
import { FaGamepad } from 'react-icons/fa'

// ← REPLACE with your actual projects
const projects = [
  {
    title: 'Mr. Bunny: A Text-Based Horror Game',
    description:
      'A text-based horror game built in C++ featuring immersive storytelling and challenging gameplay mechanics.',
    tech: ['C++', 'Console', 'Game Design'],
    icon: <FaGamepad size={22} />,
    color: '#f87171',
    github: 'https://github.com/seanio777/mr-bunny-game.git',  // ← REPLACE
    demo: '',
    status: 'Completed',
    year: '2024',
  },
  {
    title: 'Bullet Rush 3D',
    description:
        'A 3D first-person shooter game built with Python and the Ursina Engine. Features enemy that chases and attacks the player, a health and ammo system, score tracking, a high score board, level progression with bonus points, and pause/restart functionality.',
    tech: ['Python', 'Ursina Engine', 'OOP', '3D Game Dev'],
    icon: <FaGamepad size={22} />,
    color: '#f87171',
    github: 'https://github.com/seanio777/bullet-rush.git',  // ← update after upload
    demo: '',
    status: 'Completed',
    year: '2024',
  },
  // ── Add more projects below this line ──────────────────────
  // {
  //   title: 'Your Project Title',
  //   description: 'Brief description of what the project does.',
  //   tech: ['Language', 'Tool', 'Framework'],
  //   icon: <FiCode size={22} />,
  //   color: '#a78bfa',
  //   github: 'https://github.com/YourUsername/repo-name',
  //   demo: 'https://your-live-demo.com',   // or '' if none
  //   status: 'Completed',   // or 'In Progress' or 'Ongoing'
  //   year: '2024',
  // },
]

const statusColors = {
  Completed:   { bg: 'rgba(34,197,94,0.1)',  border: 'rgba(34,197,94,0.3)',  text: '#22c55e' },
  'In Progress':{ bg: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.3)', text: '#fbbf24' },
  Ongoing:     { bg: 'rgba(96,165,250,0.1)',  border: 'rgba(96,165,250,0.3)', text: '#60a5fa' },
}

export default function Projects() {
  return (
    <section id="projects" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background effects */}
      <div className="grid-bg" />
      <div className="glow-orb" style={{
        width: 500,
        height: 500,
        background: 'radial-gradient(circle, rgba(30,91,255,0.1) 0%, transparent 70%)',
        top: '20%',
        right: '-10%',
      }} />
      <div className="glow-orb" style={{
        width: 300,
        height: 300,
        background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)',
        bottom: '10%',
        left: '5%',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="section-label">
          <FiCode size={12} /> Projects
        </div>
        <h2 className="section-title">
          Things I've <span>Built</span>
        </h2>

        {/* Project Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 28,
        }}>
          {projects.map((project, i) => {
            const sc = statusColors[project.status] || statusColors['Completed']
            return (
              <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>

                {/* Card Top: icon + status + year */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 20,
                }}>
                  {/* Icon */}
                  <div style={{
                    width: 52,
                    height: 52,
                    borderRadius: 12,
                    background: `${project.color}18`,
                    border: `1px solid ${project.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: project.color,
                  }}>
                    {project.icon}
                  </div>

                  {/* Status + Year */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.58rem',
                      letterSpacing: '0.12em',
                      color: sc.text,
                      background: sc.bg,
                      border: `1px solid ${sc.border}`,
                      padding: '4px 10px',
                      borderRadius: 4,
                      textTransform: 'uppercase',
                    }}>{project.status}</span>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.6rem',
                      color: 'var(--white-dim)',
                      letterSpacing: '0.1em',
                    }}>{project.year}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--white)',
                  marginBottom: 10,
                  lineHeight: 1.3,
                }}>{project.title}</h3>

                {/* Description */}
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  color: 'var(--white-muted)',
                  lineHeight: 1.75,
                  marginBottom: 20,
                  flex: 1,
                }}>{project.description}</p>

                {/* Tech Stack Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                  {project.tech.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                {/* Divider */}
                <div style={{
                  height: 1,
                  background: 'var(--blue-border)',
                  marginBottom: 18,
                }} />

                {/* Links */}
                <div style={{ display: 'flex', gap: 16 }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: 'var(--white-muted)',
                        textDecoration: 'none',
                        letterSpacing: '0.05em',
                        transition: 'color 0.3s ease',
                        cursor: 'none',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan-accent)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--white-muted)'}
                    >
                      <FiGithub size={15} /> View Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: 'var(--white-muted)',
                        textDecoration: 'none',
                        letterSpacing: '0.05em',
                        transition: 'color 0.3s ease',
                        cursor: 'none',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan-accent)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--white-muted)'}
                    >
                      <FiExternalLink size={15} /> Live Demo
                    </a>
                  )}
                  {!project.github && !project.demo && (
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      color: 'var(--white-dim)',
                      fontStyle: 'italic',
                    }}>Source code available upon request</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <div style={{
          marginTop: 48,
          textAlign: 'center',
          padding: '24px 32px',
          background: 'rgba(13, 31, 60, 0.5)',
          border: '1px solid var(--blue-border)',
          borderRadius: 12,
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            color: 'var(--white-muted)',
            lineHeight: 1.7,
          }}>
            More projects are being developed and will be added soon.{' '}
            <a
              href="https://github.com/seanio777"   // ← REPLACE
              target="_blank"
              rel="noreferrer"
              style={{
                color: 'var(--cyan-accent)',
                textDecoration: 'none',
                fontWeight: 500,
                cursor: 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
            >
              Visit my GitHub
            </a>{' '}
            to see all repositories.
          </p>
        </div>
      </div>
    </section>
  )
}