"use client"

import { motion } from "framer-motion"
import { ArrowDown, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  const particles = [
    { x: 10, y: 20 },
    { x: 30, y: 40 },
    { x: 50, y: 60 },
    { x: 70, y: 80 },
    { x: 15, y: 75 },
    { x: 85, y: 25 },
    { x: 45, y: 15 },
    { x: 90, y: 60 },
    { x: 25, y: 50 },
    { x: 60, y: 10 },
    { x: 12, y: 35 },
    { x: 42, y: 85 },
    { x: 78, y: 45 },
    { x: 95, y: 15 },
    { x: 65, y: 72 },
    { x: 35, y: 12 },
    { x: 55, y: 32 },
    { x: 82, y: 88 },
    { x: 5, y: 60 },
    { x: 73, y: 28 },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hernan-hero.jpeg"
          alt="Hernán Ferraro"
          fill
          priority
          className="object-cover object-center scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

        {/* Cyan accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-transparent to-transparent" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pb-24">
        <div className="text-center flex flex-col items-center justify-center min-h-screen">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 sm:mb-10"
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />

            <span className="text-xs sm:text-sm text-white/80 font-medium tracking-wider uppercase">
              Presencial • Bahía Blanca • Cupos Limitados
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 sm:mb-8"
          >
            <span className="block">Clínica de Vóley</span>

            <span className="block text-gradient">
              Con Hernán Ferraro
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 sm:mb-14 px-4 leading-relaxed"
          >
            Sábado 20 y Domingo 21 de Junio
            <br />

            <span className="text-white font-semibold">
              Club Atlético Liniers
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 sm:mb-24 w-full"
          >
            <Link
              href="#inscripcion"
              className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-background font-bold text-base sm:text-lg rounded-xl transition-all duration-300 glow-cyan hover:scale-105 text-center"
            >
              Reservar Lugar
            </Link>

            <a
              href="https://wa.me/2915093873?text=Hola!%20Quiero%20info%20sobre%20la%20clínica%20de%20vóley%20con%20Hernán%20Ferraro"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 glass hover:bg-white/10 text-white font-semibold text-base sm:text-lg rounded-xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />

              Hablar por WhatsApp
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-20 sm:mt-24 flex flex-col items-center gap-2 text-white/40"
          >
            <span className="text-xs tracking-widest uppercase">
              Descubrí más
            </span>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </section>
  )
}