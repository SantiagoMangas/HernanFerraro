"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, CheckCircle2, Loader2 } from "lucide-react"

export function RegistrationForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="inscripcion" className="py-20 sm:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0D1B2A]/30 to-background" />
      
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Inscripción
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance">
            Reservá tu lugar ahora
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto px-4">
            Completá el formulario y nos pondremos en contacto para confirmar tu inscripción.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Form glow border */}
          <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-cyan-500/50 rounded-3xl blur-sm" />
          
          <div className="relative p-6 sm:p-8 lg:p-12 rounded-3xl glass-strong">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">¡Inscripción recibida!</h3>
                <p className="text-white/60 max-w-md mx-auto">
                  Gracias por tu interés. Nos pondremos en contacto muy pronto para confirmar tu lugar.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-white/80 text-sm font-medium block">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      className="w-full px-4 py-3 sm:py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="whatsapp" className="text-white/80 text-sm font-medium block">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      className="w-full px-4 py-3 sm:py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                      placeholder="+54 9 11 1234-5678"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-white/80 text-sm font-medium block">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 sm:py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="ciudad" className="text-white/80 text-sm font-medium block">
                      Ciudad *
                    </label>
                    <input
                      type="text"
                      id="ciudad"
                      name="ciudad"
                      required
                      className="w-full px-4 py-3 sm:py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                      placeholder="¿De dónde sos?"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="profesion" className="text-white/80 text-sm font-medium block">
                    Profesión / Rol *
                  </label>
                  <select
                    id="profesion"
                    name="profesion"
                    required
                    className="w-full px-4 py-3 sm:py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-card text-white">Seleccioná tu rol</option>
                    <option value="entrenador" className="bg-card text-white">Entrenador de Vóley</option>
                    <option value="profesor" className="bg-card text-white">Profesor de Educación Física</option>
                    <option value="preparador" className="bg-card text-white">Preparador Físico</option>
                    <option value="jugador" className="bg-card text-white">Jugador/a</option>
                    <option value="otro" className="bg-card text-white">Otro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="hospedaje" className="text-white/80 text-sm font-medium block">
                    ¿Necesita hospedaje? *
                  </label>
                  <select
                    id="hospedaje"
                    name="hospedaje"
                    required
                    className="w-full px-4 py-3 sm:py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-card text-white">Seleccioná una opción</option>
                    <option value="si" className="bg-card text-white">Sí</option>
                    <option value="no" className="bg-card text-white">No</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="comentarios" className="text-white/80 text-sm font-medium block">
                    Comentarios
                  </label>
                  <textarea
                    id="comentarios"
                    name="comentarios"
                    rows={4}
                    className="w-full px-4 py-3 sm:py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                    placeholder="¿Tenés alguna consulta o comentario?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 sm:py-5 px-8 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-500/50 text-background font-bold text-base sm:text-lg rounded-xl transition-all duration-300 glow-cyan hover:scale-[1.02] disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Continuar Inscripción
                    </>
                  )}
                </button>

                <p className="text-white/40 text-xs sm:text-sm text-center">
                  Al enviar este formulario, aceptás que nos comuniquemos contigo para confirmar tu inscripción.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
