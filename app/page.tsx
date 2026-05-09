import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutEvent } from "@/components/about-event"
import { CoachProfile } from "@/components/coach-profile"
import { EventInfo } from "@/components/event-info"
import { Testimonials } from "@/components/testimonials"
import { RegistrationForm } from "@/components/registration-form"
import { WhatsappCTA, WhatsappFloatingButton } from "@/components/whatsapp-cta"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <AboutEvent />
        <CoachProfile />
        <EventInfo />
        <Testimonials />
        <RegistrationForm />
        <WhatsappCTA />
      </main>
      <Footer />
      <WhatsappFloatingButton />
    </>
  )
}
