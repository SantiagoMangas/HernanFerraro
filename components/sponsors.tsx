"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Sponsors() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const sponsors = [
    {
      id: 1,
      image: "/sponsors/sponsor1.png",
    },
    {
      id: 2,
      image: "/sponsors/sponsor2.jpeg",
    },
    {
      id: 3,
      image: "/sponsors/sponsor3.png",
    },
    {
      id: 4,
      image: "/sponsors/sponsor4.jpeg",
    },
  ]

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Organizadores
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Sponsors
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative"
            >
              <div className="relative h-40 sm:h-44 rounded-2xl glass flex items-center justify-center overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all duration-300 p-8">

                <Image
                  src={sponsor.image}
                  alt={`Sponsor ${sponsor.id}`}
                  width={220}
                  height={120}
                  className="object-contain w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100"
                />

                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/20 group-hover:via-blue-500/20 group-hover:to-cyan-500/20 blur-sm transition-all duration-500 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}