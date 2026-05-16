"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Copy, Check, MessageCircle, CreditCard, User, ArrowRight } from "lucide-react"

const ALIAS = "LiniersFederal2026"
const WHATSAPP_NUMBER = "2915093873"
const WHATSAPP_MSG = encodeURIComponent(
  "Hola! Te comparto el comprobante de pago de la capacitación de Hernan Ferraro"
)

const steps = [
  {
    number: "01",
    icon: <CreditCard className="w-5 h-5" />,
    title: "Realizá la transferencia",
    description: "Transferí $50.000 al alias de abajo desde tu app bancaria o billetera virtual.",
  },
  {
    number: "02",
    icon: <Copy className="w-5 h-5" />,
    title: "Guardá el comprobante",
    description: "Descargá o sacá captura del comprobante de la transferencia.",
  },
  {
    number: "03",
    icon: <MessageCircle className="w-5 h-5" />,
    title: "Enviá por WhatsApp",
    description: "Mandá el comprobante al WhatsApp que figura abajo para confirmar tu inscripción.",
  },
]

export function PaymentSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(ALIAS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="pago" className="py-16 sm:py-24 lg:py-32 relative" ref={ref}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block">
            Inscripción
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight text-balance">
            Asegurá tu lugar
          </h2>
          <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto">
            Seguí los pasos para completar tu inscripción al clínico.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="relative p-5 sm:p-6 rounded-2xl glass group"
            >
              {/* Step number watermark */}
              <span className="absolute top-3 right-4 text-5xl font-bold text-white/5 select-none leading-none">
                {step.number}
              </span>
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                {step.icon}
              </div>
              <h3 className="text-white font-semibold text-sm sm:text-base mb-2">{step.title}</h3>
              <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{step.description}</p>

              {/* Arrow connector (hidden on mobile and last item) */}
              {i < steps.length - 1 && (
                <div className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center rounded-full bg-cyan-500/20 border border-cyan-500/30">
                  <ArrowRight className="w-3 h-3 text-cyan-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Payment info card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-5 sm:p-8 rounded-2xl glass border border-white/10">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-5 sm:mb-6 text-center">
              Datos de pago
            </h3>

            {/* Alias row */}
            <div className="mb-4">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Alias</p>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="flex-1 text-cyan-400 font-mono text-sm sm:text-base font-semibold tracking-wide break-all">
                  {ALIAS}
                </span>
                <motion.button
                  onClick={handleCopy}
                  whileTap={{ scale: 0.92 }}
                  className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-semibold hover:bg-cyan-500/30 transition-colors"
                  aria-label="Copiar alias"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Copiar</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>

            {/* Titular row */}
            <div className="mb-6 sm:mb-8">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Titular</p>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <User className="w-4 h-4 text-white/30 flex-shrink-0" />
                <span className="text-white/80 text-sm sm:text-base">Valen Dorado</span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 font-semibold text-sm sm:text-base hover:bg-green-500/30 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Enviar comprobante por WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-white/30 text-xs text-center mt-4 leading-relaxed">
              Tu inscripción se confirma una vez que recibamos el comprobante por WhatsApp.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
