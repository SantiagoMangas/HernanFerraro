"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Award, Users, Calendar, MapPin } from "lucide-react"

const achievements = [
  {
    icon: Award,
    value: "+25",
    label: "Años de experiencia",
  },
  {
    icon: Users,
    value: "+100",
    label: "Entrenadores capacitados",
  },
  {
    icon: Calendar,
    value: "+50",
    label: "Capacitaciones realizadas",
  },
  {
    icon: MapPin,
    value: "Argentina",
    label: "y Latinoamérica",
  },
]

export function CoachProfile() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="hernan" className="py-20 sm:py-32 relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0D1B2A]/50 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-transparent to-blue-500/30 z-10 mix-blend-overlay" />
              
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%2014.12.28-M4PXC1G53SOuOlrkk0ruLFagnyBkTK.jpeg"
                alt="Hernán Ferraro - Entrenador de Vóley"
                fill
                className="object-cover object-top"
              />
              
              {/* Border glow */}
              <div className="absolute inset-0 rounded-3xl border border-cyan-500/20" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-4 -right-4 sm:bottom-8 sm:right-8 lg:-right-8"
            >
              <div className="px-4 sm:px-6 py-3 sm:py-4 rounded-2xl glass-strong glow-cyan-sm">
                <p className="text-cyan-400 font-bold text-lg sm:text-xl">Hernán Ferraro</p>
                <p className="text-white/60 text-xs sm:text-sm">Entrenador Profesional</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              El Capacitador
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Hernán Ferraro
            </h2>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-6">
              Hernán Ferraro es uno de los entrenadores más reconocidos del vóley argentino. 
              Con más de dos décadas de experiencia en el alto rendimiento, ha desarrollado 
              una metodología única que combina la técnica tradicional con las innovaciones 
              más recientes del deporte.
            </p>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8">
              Su trayectoria incluye la formación de jugadores de elite y la capacitación 
              de entrenadores en toda Latinoamérica. Sus cursos son reconocidos por su 
              enfoque práctico y aplicable.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {achievements.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-4 sm:p-6 rounded-2xl glass group hover:bg-white/10 transition-all duration-300"
                >
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 mb-2 sm:mb-3" />
                  <p className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-white/50 text-xs sm:text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
