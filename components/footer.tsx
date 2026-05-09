"use client"

import Link from "next/link"
import { Instagram, Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 sm:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-background font-bold text-sm">CAL</span>
              </div>
              <div>
                <p className="text-white font-semibold">Club Atlético Liniers</p>
                <p className="text-white/50 text-sm">Bahía Blanca</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Organizadores de la capacitación profesional de vóley con Hernán Ferraro.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#evento" className="text-white/50 hover:text-white transition-colors text-sm">
                  Sobre el Evento
                </Link>
              </li>
              <li>
                <Link href="#hernan" className="text-white/50 hover:text-white transition-colors text-sm">
                  Hernán Ferraro
                </Link>
              </li>
              <li>
                <Link href="#info" className="text-white/50 hover:text-white transition-colors text-sm">
                  Información
                </Link>
              </li>
              <li>
                <Link href="#inscripcion" className="text-white/50 hover:text-white transition-colors text-sm">
                  Inscripción
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-white/50 text-sm">
                Club Atlético Liniers
              </li>
              <li className="text-white/50 text-sm">
                Bahía Blanca, Argentina
              </li>
              <li>
                <a href="mailto:info@caliniers.com" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                  info@caliniers.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Seguinos</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white/70" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white/70" />
              </a>
              <a
                href="mailto:info@caliniers.com"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white/70" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Club Atlético Liniers. Todos los derechos reservados.
          </p>
          <p className="text-white/40 text-sm">
            Capacitación Hernán Ferraro
          </p>
        </div>
      </div>
    </footer>
  )
}
