import { useEffect } from 'react'
import './App.css'
import ThemeToggle from './components/ThemeToggle'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Objective from './components/Objective'
import Academic from './components/Academic'
import Seminars from './components/Seminars'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import References from './components/References'
import ScrollToTop from './components/ScrollToTop'

function App() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor')
    const follower = document.querySelector('.cursor-follower')

    const moveCursor = (e) => {
      cursor.style.left = e.clientX - 5 + 'px'
      cursor.style.top = e.clientY - 5 + 'px'
      follower.style.left = e.clientX - 17 + 'px'
      follower.style.top = e.clientY - 17 + 'px'
    }

    document.addEventListener('mousemove', moveCursor)
    return () => document.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <>
      <div className="cursor" />
      <div className="cursor-follower" />
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <Objective />
        <div className="divider" />
        <Academic />
        <div className="divider" />
        <Seminars />
        <div className="divider" />
        <Achievements />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Certificates />
        <div className="divider" />
        <Contact />
        <div className="divider" />
        <References />
      </main>
      <ScrollToTop />
      <ThemeToggle />
    </>
  )
}

export default App