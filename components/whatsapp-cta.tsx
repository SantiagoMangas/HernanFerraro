"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MessageCircle } from "lucide-react"

export function WhatsappCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 sm:py-24 relative" ref={ref}>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-3xl blur-xl" />
          
          <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ type: "spring", delay: 0.2 }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6"
            >
              <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </motion.div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              ¿Tenés dudas?
            </h3>
            <p className="text-white/60 text-base sm:text-lg mb-6 sm:mb-8 max-w-md mx-auto">
              Escribinos por WhatsApp y te respondemos todas tus consultas sobre la capacitación.
            </p>

            <a
              href="https://wa.me/5491234567890?text=Hola!%20Quiero%20info%20sobre%20la%20capacitación%20con%20Hernán%20Ferraro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold text-base sm:text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/30"
            >
              <MessageCircle className="w-5 h-5" />
              Hablá con nosotros
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function WhatsappFloatingButton() {
  return (
    <motion.a
      href="https://wa.me/5491234567890?text=Hola!%20Quiero%20info%20sobre%20la%20capacitación%20con%20Hernán%20Ferraro"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center shadow-lg shadow-green-500/40 transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
    </motion.a>
  )
}
