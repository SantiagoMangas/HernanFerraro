"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Martín Rodríguez",
    role: "Entrenador - Club Deportivo",
    location: "Mar del Plata",
    quote: "La capacitación con Hernán cambió completamente mi forma de entrenar. Su metodología es clara, práctica y aplicable desde el primer día.",
    rating: 5,
  },
  {
    name: "Laura Fernández",
    role: "Prof. de Educación Física",
    location: "Rosario",
    quote: "Increíble experiencia. Hernán tiene una forma única de transmitir su conocimiento. Mis equipos mejoraron notablemente después de aplicar lo aprendido.",
    rating: 5,
  },
  {
    name: "Diego Martínez",
    role: "Preparador Físico",
    location: "Córdoba",
    quote: "Sin dudas, la mejor inversión en mi formación profesional. El nivel de detalle y la experiencia compartida son invaluables.",
    rating: 5,
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance">
            Lo que dicen los que ya participaron
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card glow on hover */}
              <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/30 group-hover:via-blue-500/30 group-hover:to-cyan-500/30 rounded-3xl blur-sm transition-all duration-500" />
              
              <div className="relative h-full p-6 sm:p-8 rounded-3xl glass flex flex-col">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-cyan-400/30 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-white/70 text-sm sm:text-base leading-relaxed flex-1 mb-6">
                  {'"'}{testimonial.quote}{'"'}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-white/50 text-xs">{testimonial.role} • {testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
