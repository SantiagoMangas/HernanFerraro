import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutEvent } from "@/components/about-event"
import { CoachProfile } from "@/components/coach-profile"
import { EventInfo } from "@/components/event-info"
import { Sponsors } from "@/components/sponsors"
import { Pricing } from "@/components/pricing"
import { RegistrationForm } from "@/components/registration-form"
import { WhatsappCTA, WhatsappFloatingButton } from "@/components/whatsapp-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutEvent />
        <Sponsors />
        <CoachProfile />
        <EventInfo />
        <Pricing />
        <RegistrationForm />
        <WhatsappCTA />
      </main>
      <Footer />
      <WhatsappFloatingButton />
    </>
  )
}