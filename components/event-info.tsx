"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Clock, MapPin, Users, AlertCircle } from "lucide-react"

const schedule = [
  {
    day: "SÁBADO",
    date: "20 de junio",
    sessions: [
      { time: "10:00 HS", title: "Introducción y práctico", isHeader: true },
      { time: "", title: "Pase y levantada" },
      { time: "", title: "Sistemas de saque y recepción" },
      { time: "", title: "Saque recepción ataque (mujeres)" },
      { time: "15:00 HS", title: "Práctico", isHeader: true },
      { time: "", title: "Bloqueo individual" },
      { time: "", title: "Defensa individual" },
      { time: "", title: "Transición" },
      { time: "BREAK", title: "", isBreak: true },
      { time: "17:00 HS", title: "Práctico", isHeader: true },
      { time: "", title: "Sistemas de ataque y cobertura" },
      { time: "", title: "Sistema bloqueo-defensa (varones)" },
    ],
  },
  {
    day: "DOMINGO",
    date: "21 de junio",
    sessions: [
      { time: "10:00 HS", title: "Práctico", isHeader: true },
      { time: "", title: "El armador" },
      { time: "", title: "Características y entrenamiento" },
      { time: "", title: "Lo previo y durante el juego" },
      { time: "14:00 HS", title: "Estudio del adversario", isHeader: true },
      {
        time: "17:00 HS",
        title: "Entrenamiento de Primera de Liniers dirigido por Ferraro",
        isHeader: true,
      },
    ],
  },
]

export function EventInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="info" className="py-16 sm:py-24 lg:py-32 relative" ref={ref}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block">
            Información del Evento
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance leading-tight">
            Todo lo que necesitás saber
          </h2>
        </motion.div>

        {/* Info cards — 2 cols on mobile, 4 on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-10 sm:mb-14">
          {[
            {
              icon: <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mx-auto mb-3" />,
              title: "Fecha",
              sub: "Sábado 20 y Domingo 21",
              highlight: "Junio 2026",
              delay: 0,
            },
            {
              icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mx-auto mb-3" />,
              title: "Horarios",
              sub: "Sábado desde 10 hs",
              highlight: "Domingo desde 10 hs",
              delay: 0.1,
            },
            {
              icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mx-auto mb-3" />,
              title: "Lugar",
              sub: "Club Atlético Liniers",
              highlight: "Bahía Blanca",
              delay: 0.2,
            },
            {
              icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mx-auto mb-3" />,
              title: "Cupos",
              sub: "Certificado incluido",
              highlight: "Limitados",
              delay: 0.3,
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: card.delay }}
              className="p-4 sm:p-6 lg:p-8 rounded-2xl glass text-center"
            >
              {card.icon}
              <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                {card.title}
              </h3>
              <p className="text-white/60 text-xs sm:text-sm leading-snug">{card.sub}</p>
              <p className="text-cyan-400 font-bold text-sm sm:text-base mt-0.5">{card.highlight}</p>
            </motion.div>
          ))}
        </div>

        {/* Alert banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10 sm:mb-14"
        >
          <div className="p-4 sm:p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-white font-semibold text-base sm:text-lg mb-1">¡Cupos Limitados!</h4>
              <p className="text-white/60 text-sm sm:text-base">
                Certificado, Interés Municipal y lugares limitados. Reservá tu lugar ahora para no quedarte afuera.
              </p>
            </div>
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

          <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
            {schedule.map((day, dayIndex) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: dayIndex === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + dayIndex * 0.1 }}
                className="p-5 sm:p-8 rounded-2xl glass"
              >
                {/* Day header */}
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-semibold">
                    {day.day}
                  </div>
                  <span className="text-white/50 text-xs sm:text-sm">{day.date}</span>
                </div>

                {/* Sessions */}
                <div className="space-y-2 sm:space-y-3">
                  {day.sessions.map((session, i) => {
                    /* BREAK row */
                    if (session.isBreak) {
                      return (
                        <div key={i} className="flex items-center gap-2 py-1">
                          <div className="flex-1 h-px bg-white/15" />
                          <span className="text-white/30 text-xs font-mono tracking-wider uppercase px-1">
                            Break
                          </span>
                          <div className="flex-1 h-px bg-white/15" />
                        </div>
                      )
                    }

                    /* Header session (has a time) */
                    if (session.isHeader) {
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20"
                        >
                          <span className="text-cyan-400 font-mono text-xs sm:text-sm font-semibold whitespace-nowrap">
                            {session.time}
                          </span>
                          <div className="h-4 w-px bg-cyan-500/40" />
                          <span className="text-white text-sm sm:text-base font-medium leading-snug">
                            {session.title}
                          </span>
                        </div>
                      )
                    }

                    /* Sub-item (no time) */
                    return (
                      <div
                        key={i}
                        className="flex items-start gap-2 sm:gap-3 pl-3 sm:pl-4 pr-3 py-1.5"
                      >
                        <span className="mt-1.5 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400/50 flex-shrink-0" />
                        <span className="text-white/70 text-xs sm:text-sm leading-snug">
                          {session.title}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}