import Link from 'next/link';
import { Github, Twitter, Facebook, Instagram, Youtube, Mail, MapPin, Egg } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-lp-black text-lp-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-lp-yellow text-lp-black rounded-lg p-1.5">
                <Egg size={20} />
              </div>
              <span className="text-xl font-bold">LibreIncu</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lp-yellow mb-4">Documentación</h3>
            <ul className="space-y-2">
              {[
                { href: '/manual', label: 'Manual de Usuario' },
                { href: '/huevos', label: 'Huevos e Incubación' },
                { href: '/buenas-practicas', label: 'Buenas Prácticas' },
                { href: '/aplicacion', label: 'App LibreIncu' },
                { href: '/especificaciones', label: 'Especificaciones' },
                { href: '/solucion-problemas', label: 'Solución de Problemas' },
                { href: '/ecosistema', label: 'Ecosistema LibreAgro' },
                { href: '/privacidad', label: 'Privacidad' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-lp-gray hover:text-lp-yellow transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lp-yellow mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-lp-gray text-sm">
                <MapPin size={14} className="shrink-0" />
                Córdoba, Argentina
              </li>
              <li>
                <a href="mailto:info@altermundi.net" className="flex items-center gap-2 text-lp-gray text-sm hover:text-lp-yellow transition-colors">
                  <Mail size={14} className="shrink-0" />
                  info@altermundi.net
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://github.com/AlterMundi-MonitoreoyControl" target="_blank" rel="noopener noreferrer"
                aria-label="LibreIncu en GitHub"
                className="text-lp-gray hover:text-lp-yellow transition-colors">
                <Github size={18} aria-hidden="true" />
              </a>
              <a href="https://x.com/altermundinet" target="_blank" rel="noopener noreferrer"
                aria-label="AlterMundi en X (Twitter)"
                className="text-lp-gray hover:text-lp-yellow transition-colors">
                <Twitter size={18} aria-hidden="true" />
              </a>
              <a href="https://www.facebook.com/altermundi.net" target="_blank" rel="noopener noreferrer"
                aria-label="AlterMundi en Facebook"
                className="text-lp-gray hover:text-lp-yellow transition-colors">
                <Facebook size={18} aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/altermundinet/" target="_blank" rel="noopener noreferrer"
                aria-label="AlterMundi en Instagram"
                className="text-lp-gray hover:text-lp-yellow transition-colors">
                <Instagram size={18} aria-hidden="true" />
              </a>
              <a href="https://www.youtube.com/playlist?list=PL_Dpv4cu0bAoCJuYNh82t8xlr4G4jxU9o" target="_blank" rel="noopener noreferrer"
                aria-label="Canal de LibreIncu en YouTube"
                className="text-lp-gray hover:text-lp-yellow transition-colors">
                <Youtube size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-lp-grayDark flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-lp-gray text-xs">
            © 2025 AlterMundi &amp; CTO. Este trabajo está bajo licencia{' '}
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer"
              className="underline hover:text-lp-yellow">
              CC BY 4.0
            </a>
          </p>
          <div className="flex items-center gap-4">
            <a href="https://altermundi.net" target="_blank" rel="noopener noreferrer"
              className="text-lp-gray text-xs hover:text-lp-yellow transition-colors">
              altermundi.net
            </a>
            <span className="text-lp-grayDark">•</span>
            <a href="https://github.com/AlterMundi-MonitoreoyControl/Proyecto-Incubadora"
              target="_blank" rel="noopener noreferrer"
              className="text-lp-gray text-xs hover:text-lp-yellow transition-colors">
              Código abierto en GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
