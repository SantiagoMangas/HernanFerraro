"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"
import Link from "next/link"

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const plans = [
    {
      title: "Pago Único",
      price: "$50.000",
      description: "Pago completo",
      deadline: "Antes del 5 de junio",
      features: [
        "Acceso a todas las sesiones",
        "Certificado de participación",
        "Material incluido",
      ],
      highlighted: true,
    },
    {
      title: "2 Cuotas",
      price: "$30.000",
      description: "Por cuota",
      deadline1: "Primera: antes del 31 de mayo",
      deadline2: "Segunda: antes del 15 de junio",
      features: [
        "Acceso a todas las sesiones",
        "Certificado de participación",
        "Material incluido",
      ],
      highlighted: false,
    },
  ]

  return (
    <section className="py-20 sm:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0D1B2A]/30 to-background" />
      
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Precios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance">
            Opciones de Inscripción
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto">
            Elegí la opción que mejor se adapte a tu presupuesto
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card glow for highlighted plan */}
              {plan.highlighted && (
                <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-cyan-500/50 rounded-3xl blur-sm" />
              )}
              
              <div className={`relative h-full p-6 sm:p-8 rounded-3xl transition-all duration-300 ${
                plan.highlighted
                  ? "glass-strong border border-cyan-500/30"
                  : "glass border border-white/10 group-hover:border-cyan-500/30"
              }`}>
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-cyan-500 text-background text-xs font-bold rounded-full">
                      RECOMENDADO
                    </span>
                  </div>
                )}

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{plan.title}</h3>
                <p className="text-white/50 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl sm:text-5xl font-bold text-white">{plan.price}</span>
                  </div>
                  
                  <div className="space-y-2">
                    {plan.deadline && (
                      <p className="text-cyan-400 text-sm font-medium">
                        {plan.deadline}
                      </p>
                    )}
                    {plan.deadline1 && (
                      <>
                        <p className="text-cyan-400 text-sm font-medium">
                          {plan.deadline1}
                        </p>
                        <p className="text-cyan-400 text-sm font-medium">
                          {plan.deadline2}
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="#inscripcion"
                  className={`block w-full py-3 sm:py-4 px-6 text-center font-bold rounded-xl transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-cyan-500 hover:bg-cyan-400 text-background glow-cyan hover:scale-105"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  }`}
                >
                  Inscribirse
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-white/60 text-base sm:text-lg">
            ¿Preguntas sobre los precios?{" "}
            <a
              href="https://wa.me/2915093873"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
            >
              Contactanos
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
