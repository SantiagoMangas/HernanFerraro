"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Users, Lightbulb, Trophy, CheckCircle2 } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Metodología de Entrenamiento",
    description: "Secretos del entrenamiento de alto rendimiento aplicados al vóley moderno.",
  },
  {
    icon: Users,
    title: "Para Entrenadores",
    description: "Dirigido a entrenadores, preparadores físicos y profesores de educación física.",
  },
  {
    icon: Lightbulb,
    title: "Enfoque Práctico",
    description: "Sesiones teórico-prácticas con ejercicios aplicables inmediatamente.",
  },
  {
    icon: Trophy,
    title: "Experiencia de Élite",
    description: "Aprende de la experiencia de un entrenador de nivel profesional.",
  },
]

const learnings = [
  "Planificación del entrenamiento deportivo",
  "Técnicas de motivación y liderazgo",
  "Análisis táctico del juego moderno",
  "Preparación física específica para vóley",
  "Gestión de equipos de alto rendimiento",
  "Metodologías de enseñanza efectivas",
]

export function AboutEvent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="evento" className="py-20 sm:py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Sobre el Evento
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance">
            Capacitación Intensiva de
            <span className="text-gradient"> Alto Rendimiento</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Una oportunidad única de aprender directamente de Hernán Ferraro, 
            uno de los referentes más importantes del vóley argentino, tanto <strong>rama femenina como rama masculina.</strong>
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 sm:p-8 rounded-2xl glass hover:bg-white/10 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <feature.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - What you'll learn */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
              Lo que vas a aprender
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {learnings.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm sm:text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Highlight card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
            <div className="relative p-6 sm:p-8 lg:p-10 rounded-3xl glass-strong">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-semibold">
                  PRESENCIAL
                </div>
                <div className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs sm:text-sm font-semibold">
                  PRÁCTICO
                </div>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                {'"'}Cómo Entrenar{'"'}
              </h4>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Dos jornadas intensivas donde descubrirás las claves del entrenamiento 
                profesional de vóley. Teoría y práctica combinadas para que puedas 
                aplicar todo lo aprendido inmediatamente en tu trabajo.
              </p>
              <div className="flex items-center gap-4 pt-4 sm:pt-6 border-t border-white/10">
                <div>
                  <span className="text-white/40 text-xs sm:text-sm">Modalidad</span>
                  <p className="text-white font-semibold text-sm sm:text-base">100% Presencial</p>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div>
                  <span className="text-white/40 text-xs sm:text-sm">Certificado</span>
                  <p className="text-white font-semibold text-sm sm:text-base">Incluido</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
