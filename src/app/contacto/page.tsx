import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MapPin, Globe, Github, Twitter, Facebook, Instagram, Youtube, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contacto y Redes Sociales',
  description: 'Escribinos, seguinos en redes o encontranos en Córdoba. Canales de comunicación, redes sociales y ubicación del proyecto LibreIncu.',
};

const socialLinks = [
  {
    name: 'GitHub',
    handle: 'AlterMundi-MonitoreoyControl',
    url: 'https://github.com/AlterMundi-MonitoreoyControl',
    icon: Github,
    color: 'bg-lp-black group-hover:bg-lp-grayDark',
    desc: 'Código fuente, firmware y documentación técnica.',
  },
  {
    name: 'YouTube',
    handle: '@altermundinet',
    url: 'https://www.youtube.com/playlist?list=PL_Dpv4cu0bAoCJuYNh82t8xlr4G4jxU9o',
    icon: Youtube,
    color: 'bg-lp-black group-hover:bg-lp-grayDark',
    desc: 'Videos del proyecto, capacitaciones y testimonios.',
  },
  {
    name: 'Twitter / X',
    handle: '@altermundinet',
    url: 'https://x.com/altermundinet',
    icon: Twitter,
    color: 'bg-lp-black group-hover:bg-lp-grayDark',
    desc: 'Actualizaciones y noticias del proyecto.',
  },
  {
    name: 'Facebook',
    handle: '@altermundinet',
    url: 'https://www.facebook.com/altermundi.net',
    icon: Facebook,
    color: 'bg-lp-black group-hover:bg-lp-grayDark',
    desc: 'Publicaciones, novedades y comunidad.',
  },
  {
    name: 'Instagram',
    handle: '@altermundinet',
    url: 'https://www.instagram.com/altermundinet/',
    icon: Instagram,
    color: 'bg-lp-black group-hover:bg-lp-grayDark',
    desc: 'Imágenes del proyecto y las comunidades.',
  },
];

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-lp-white">
      {/* Header */}
      <section className="bg-lp-black text-lp-white py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none">
          <Mail size={400} />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="tag bg-lp-gray text-lp-black mb-4 inline-block">Comunidad & Contacto</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Sumate a la Red</h1>
          <p className="text-xl text-lp-gray leading-relaxed max-w-2xl mx-auto">
            Conectate con el equipo del proyecto LibreIncu. Somos{' '}
            <a href="https://altermundi.net" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 hover:text-lp-yellow transition-colors">AlterMundi</a>{' '}
            y{' '}
            <Link href="/cto" className="font-bold underline underline-offset-2 hover:text-lp-yellow transition-colors">CTO</Link>,
            trabajando en red con organizaciones rurales de toda la provincia de Córdoba.
          </p>
        </div>
      </section>

      {/* Main contact */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Canales de Comunicación</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          <a
            href="https://altermundi-monitoreoycontrol.github.io/website/"
            target="_blank"
            rel="noopener noreferrer"
            className="card p-8 bg-lp-gray border-2 border-transparent hover:border-lp-yellow transition-all group flex flex-col items-center text-center"
          >
            <div className="bg-lp-white rounded-xl p-3 mb-4">
              <Globe className="text-lp-black" size={32} />
            </div>
            <h3 className="font-bold text-lg text-lp-black mb-2">Sitio Web</h3>
            <p className="text-lp-grayDark text-sm group-hover:text-lp-black transition-colors">libreincu.altermundi.net</p>
          </a>

          <a
            href="mailto:info@altermundi.net"
            className="card p-8 bg-lp-yellowLight border-2 border-transparent hover:border-lp-yellow transition-all group flex flex-col items-center text-center"
          >
            <div className="bg-lp-white rounded-xl p-3 mb-4">
              <Mail className="text-lp-black" size={32} />
            </div>
            <h3 className="font-bold text-lg text-lp-black mb-2">Email General</h3>
            <p className="text-lp-black text-sm group-hover:font-medium transition-all">info@altermundi.net</p>
          </a>

          <a
            href="mailto:fabriciopuzio@altermundi.net"
            className="card p-8 bg-lp-black border-2 border-transparent hover:border-lp-yellow transition-all group flex flex-col items-center text-center text-lp-white"
          >
            <div className="bg-zinc-800 rounded-xl p-3 mb-4">
              <Mail className="text-lp-yellow" size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Coordinación</h3>
            <p className="text-lp-gray text-sm group-hover:text-lp-white transition-colors break-all">fabriciopuzio@altermundi.net</p>
          </a>
        </div>

        {/* Social */}
        <div className="text-center mb-12 mt-20">
          <h2 className="section-title">Redes Sociales</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 border-2 border-lp-gray hover:border-lp-black transition-all group flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`${link.color} text-lp-white p-2.5 rounded-lg transition-colors`}>
                  <link.icon size={20} />
                </div>
                <div>
                  <p className="font-bold text-lp-black">{link.name}</p>
                  <p className="text-lp-grayDark text-xs">{link.handle}</p>
                </div>
              </div>
              <p className="text-lp-grayDark text-sm leading-relaxed flex-1">{link.desc}</p>
            </a>
          ))}
        </div>

        {/* Location & Open tech */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Location */}
          <div className="card p-8 bg-lp-gray border-2 border-transparent">
            <div className="flex items-start gap-4">
              <div className="bg-lp-white p-3 rounded-xl shrink-0">
                <MapPin className="text-lp-black" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lp-black text-xl mb-2">Ubicación</h3>
                <p className="text-lp-black font-medium mb-1">Córdoba, Argentina</p>
                <p className="text-lp-grayDark text-sm">
                  Trabajando en red con organizaciones rurales de toda la provincia.
                </p>
              </div>
            </div>
          </div>

          {/* Open tech */}
          <div className="card p-8 bg-lp-black text-lp-white border-2 border-lp-yellow flex flex-col justify-center">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-xl">🚀</span> Tecnología Libre
            </h3>
            <p className="text-lp-gray text-sm leading-relaxed mb-4">
              Todo el conocimiento generado está disponible para la comunidad bajo licencias públicas, promoviendo la soberanía tecnológica.
            </p>
            <div className="mt-auto">
              <a
                href="https://github.com/AlterMundi-MonitoreoyControl/Proyecto-Incubadora"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-lp-yellow hover:text-lp-yellowDark transition-colors"
              >
                <Github size={18} />
                Ver código fuente LibreIncu
              </a>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
