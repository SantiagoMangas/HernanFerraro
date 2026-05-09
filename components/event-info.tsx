"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Clock, MapPin, Users, AlertCircle } from "lucide-react"

const schedule = [
  {
    day: "Día 1",
    date: "Viernes",
    sessions: [
      { time: "09:00 - 12:00", title: "Fundamentos del entrenamiento moderno" },
      { time: "14:00 - 17:00", title: "Sesión práctica en cancha" },
      { time: "17:30 - 19:00", title: "Análisis y debate" },
    ],
  },
  {
    day: "Día 2",
    date: "Sábado",
    sessions: [
      { time: "09:00 - 12:00", title: "Metodologías avanzadas" },
      { time: "14:00 - 17:00", title: "Taller práctico intensivo" },
      { time: "17:30 - 18:30", title: "Cierre y certificados" },
    ],
  },
]

export function EventInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="info" className="py-20 sm:py-32 relative" ref={ref}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Información del Evento
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance">
            Todo lo que necesitás saber
          </h2>
        </motion.div>

        {/* Info cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl glass text-center"
          >
            <Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold text-lg mb-2">Fecha</h3>
            <p className="text-white/60 text-sm">Viernes y Sábado</p>
            <p className="text-cyan-400 font-bold">Julio 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-2xl glass text-center"
          >
            <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold text-lg mb-2">Horarios</h3>
            <p className="text-white/60 text-sm">9:00 a 19:00 hs</p>
            <p className="text-cyan-400 font-bold">2 Jornadas Completas</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl glass text-center"
          >
            <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold text-lg mb-2">Lugar</h3>
            <p className="text-white/60 text-sm">Club Atlético Liniers</p>
            <p className="text-cyan-400 font-bold">Bahía Blanca</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 sm:p-8 rounded-2xl glass text-center"
          >
            <Users className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold text-lg mb-2">Cupos</h3>
            <p className="text-white/60 text-sm">Vacantes limitadas</p>
            <p className="text-cyan-400 font-bold">Solo 30 lugares</p>
          </motion.div>
        </div>

        {/* Limited spots warning */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 sm:mb-16"
        >
          <div className="p-4 sm:p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-white font-semibold text-lg mb-1">¡Cupos Limitados!</h4>
              <p className="text-white/60 text-sm sm:text-base">
                Solo hay 30 lugares disponibles. Reservá tu lugar ahora para no quedarte afuera.
              </p>
            </div>
            <CuposCounter />
          </div>
        </motion.div>

        {/* Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
            Agenda del Evento
          </h3>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {schedule.map((day, dayIndex) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: dayIndex === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + dayIndex * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl glass"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-semibold">
                    {day.day}
                  </div>
                  <span className="text-white/50 text-sm">{day.date}</span>
                </div>
                <div className="space-y-4">
                  {day.sessions.map((session, sessionIndex) => (
                    <div
                      key={sessionIndex}
                      className="flex gap-4 items-start p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="text-cyan-400 font-mono text-xs sm:text-sm whitespace-nowrap">
                        {session.time}
                      </div>
                      <div className="h-full w-px bg-white/20" />
                      <div className="text-white text-sm sm:text-base">{session.title}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface CuposCounterProps {
  availableSpots?: number
}

function CuposCounter({ availableSpots = 12 }: CuposCounterProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-white/10">
      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
      <span className="text-cyan-400 font-bold text-lg">{availableSpots}</span>
      <span className="text-white/60 text-sm">lugares disponibles</span>
    </div>
  )
}
