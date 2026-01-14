import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Loader } from './components/Loader'
import { Navigation } from './components/Navigation'
import { ContactModal } from './components/ContactModal'
import { JoinTeamModal } from './components/JoinTeamModal'
import { Hero } from './components/Hero'
import { TrustStrip } from './components/TrustStrip'
import { AboutVision } from './components/AboutVision'
import { Services } from './components/Services'
import { EPC } from './components/EPC'
import { WhyChooseUs } from './components/WhyChooseUs'
import { ProjectsPreview } from './components/ProjectsPreview'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'
export function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isJoinTeamModalOpen, setIsJoinTeamModalOpen] = useState(false)
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navigation onContactClick={() => setIsContactModalOpen(true)} />
          <ContactModal
            isOpen={isContactModalOpen}
            onClose={() => setIsContactModalOpen(false)}
          />
          <JoinTeamModal
            isOpen={isJoinTeamModalOpen}
            onClose={() => setIsJoinTeamModalOpen(false)}
          />

          <div className="min-h-screen bg-white font-sans text-[#1A1F2E]">
            <div id="home">
              <Hero onContactClick={() => setIsContactModalOpen(true)} onJoinTeamClick={() => setIsJoinTeamModalOpen(true)} />
            </div>
            <TrustStrip />
            <div id="about">
              <AboutVision />
            </div>
            <div id="epc">
              <EPC onLearnMoreClick={() => setIsContactModalOpen(true)} />
            </div>
            <div id="services">
              <Services onServiceClick={() => setIsContactModalOpen(true)} />
            </div>
            <WhyChooseUs />
            <div id="projects">
              <ProjectsPreview />
            </div>
            <div id="contact">
              <CTASection onContactClick={() => setIsContactModalOpen(true)} />
            </div>
            <Footer onJoinTeamClick={() => setIsJoinTeamModalOpen(true)} />
          </div>
        </>
      )}
    </>
  )
}
