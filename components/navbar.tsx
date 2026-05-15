"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { href: "#evento", label: "Evento" },
  { href: "#hernan", label: "Hernán Ferraro" },
  { href: "#info", label: "Información" },
  { href: "#inscripcion", label: "Inscripción" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                <img src="/logo-liniers.png" alt="Club Atlético Liniers" className="w-full h-full object-contain" />
              </div>
              <span className="text-white font-semibold text-sm sm:text-base hidden sm:block">Liniers Vóley</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors text-sm font-medium tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="https://wa.me/2915093873?text=Hola!%20Quiero%20info%20sobre%20la%20clínica%20de%20vóley%20con%20Hernán%20Ferraro"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-background font-semibold text-sm rounded-lg transition-all duration-300 glow-cyan-sm hover:glow-cyan"
              >
                Contactar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl pt-20">
              <div className="flex flex-col items-center gap-6 p-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white text-xl font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="#inscripcion"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 px-8 py-3 bg-cyan-500 text-background font-semibold rounded-lg glow-cyan"
                >
                  Contactar
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
