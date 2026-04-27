import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from '../components/HeroSection'
import { TrustBar } from '../components/TrustBar'
import { ServicesSection } from '../components/ServicesSection'
import { PhilosophySection } from '../components/PhilosophySection'
import { LeadershipSection } from '../components/LeadershipSection'
import { ContactSection } from '../components/ContactSection'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="space-y-32 pb-24 overflow-hidden">
      <HeroSection />
      <TrustBar />
      <PhilosophySection />
      <ServicesSection />
      <LeadershipSection />
      <ContactSection />
    </div>
  )
}
